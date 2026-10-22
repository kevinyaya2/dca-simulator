import test from 'node:test';
import assert from 'node:assert/strict';
import { io, type Socket } from 'socket.io-client';
import { createGameServer, beginRound, step, RECONNECT_GRACE_MS } from '../server/src/index.ts';
import { KillTracker } from '../shared/combat.ts';

type Credentials={code:string;playerId:string;resumeToken:string;lastReceivedSeq:number;room:any;error?:string};
function event<T=any>(socket:Socket,name:string,predicate:(value:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},4000);
    const receive=(value:T)=>{if(predicate(value)){clearTimeout(timer);socket.off(name,receive);resolve(value);}};
    socket.on(name,receive);
  });
}
async function setup(graceMs=60_000){
  const server=createGameServer({reconnectGraceMs:graceMs});
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const sockets:Socket[]=[];
  const connect=async()=>{
    const socket=io(`http://127.0.0.1:${address.port}`,{transports:['websocket'],forceNew:true,autoConnect:false,reconnection:false,ackTimeout:3000});
    sockets.push(socket);const ready=event(socket,'connect');socket.connect();await ready;return socket;
  };
  return{server,connect,close:()=>{for(const socket of sockets)socket.disconnect();server.close();}};
}
function input(roundId:number,seq:number){return{roundId,seq,clientTime:Date.now(),moveX:0,moveY:0,yaw:0,pitch:0,jump:false,reload:false,sprint:false,aim:false};}

test('connection announcements reach room peers, survive resume, and stay bounded and private',async()=>{
  const env=await setup();
  try{
    const host=await env.connect(),guest=await env.connect(),outsider=await env.connect();
    const owner:Credentials=await host.emitWithAck('room:create','Host');
    const seat:Credentials=await guest.emitWithAck('room:join',{code:owner.code,name:'Guest'});
    await outsider.emitWithAck('room:create','Outside');
    const external:any[]=[],received:any[]=[];
    outsider.on('room:notice',notice=>external.push(notice));host.on('room:notice',notice=>received.push(notice));
    const offline=event(host,'room:notice');guest.disconnect();const lost=await offline;
    assert.equal(lost.kind,'disconnected');assert.equal(lost.playerId,seat.playerId);assert.equal(lost.name,'Guest');assert.equal(lost.code,owner.code);assert.ok(Number.isFinite(lost.at));
    let connection=await env.connect();const online=event(host,'room:notice');
    const restored:Credentials=await connection.emitWithAck('room:resume',seat);const back=await online;
    assert.equal(back.kind,'reconnected');assert.notEqual(back.id,lost.id);
    assert.deepEqual(restored.room.notices,[lost,back]);assert.equal(external.length,0);
    assert.ok(!JSON.stringify(restored.room.notices).includes(seat.resumeToken));
    // Transport takeover must produce one recovery notice, not a false disconnect/reconnect pair.
    for(let n=0;n<21;n++){
      const next=await env.connect();const replaced=event(connection,'disconnect');
      const result:Credentials=await next.emitWithAck('room:resume',seat);await replaced;connection=next;
      assert.ok(result.room.notices.length<=20);
      if(n===20){assert.equal(result.room.notices.length,20);assert.ok(result.room.notices.every((notice:any)=>notice.kind==='reconnected'));}
    }
    assert.equal(received.filter(notice=>notice.kind==='disconnected').length,1);assert.equal(external.length,0);
    const count=received.length;await connection.emitWithAck('room:leave');
    const last=await host.emitWithAck('game:start');assert.equal(last.error,'NOT_READY');assert.equal(received.length,count,'intentional leave is not reported as a network outage');
  }finally{env.close();}
});

test('fixed identity resumes across sockets, transfers host, and preserves state without exposing credentials',async()=>{
  assert.equal(RECONNECT_GRACE_MS,60_000);
  const env=await setup();
  try{
    const a=await env.connect(),b=await env.connect();
    const seat:Credentials=await a.emitWithAck('room:create','Host');
    const guest:Credentials=await b.emitWithAck('room:join',{code:seat.code,name:'Guest'});
    assert.notEqual(seat.playerId,a.id);assert.ok(seat.resumeToken.length>=64);
    assert.ok(!JSON.stringify(guest.room).includes('resumeToken'));assert.ok(!JSON.stringify(guest.room).includes('socketId'));
    assert.deepEqual(await b.emitWithAck('game:end'),{error:'HOST_ONLY'});
    assert.deepEqual(await a.emitWithAck('game:start'),{ok:true});
    const first=await event(a,'match:snapshot');
    const processed=event(a,'match:snapshot',s=>s.players.find((p:any)=>p.id===seat.playerId)?.ack===25000);
    a.emit('match:input',input(first.roundId,25000));await processed;
    const fired=event(a,'match:snapshot',s=>s.players.find((p:any)=>p.id===seat.playerId)?.weapons.ar.ammo===29);
    a.emit('match:fire',{roundId:first.roundId,clientTime:Date.now()});const before=await fired;
    const offline=event(b,'room:state',r=>r.players.some((p:any)=>p.id===seat.playerId&&!p.connected));
    a.disconnect();const room=await offline;
    assert.equal(room.host,guest.playerId);assert.equal(room.state,'PLAYING');
    assert.ok(room.players.find((p:any)=>p.id===seat.playerId).disconnectedUntil>Date.now());
    const c=await env.connect();
    assert.deepEqual(await c.emitWithAck('room:resume',{...seat,resumeToken:'wrong'}),{error:'SESSION_EXPIRED'});
    const restored:Credentials=await c.emitWithAck('room:resume',seat);
    assert.equal(restored.playerId,seat.playerId);assert.equal(restored.lastReceivedSeq,25000);assert.equal(restored.room.host,guest.playerId);
    const old=before.players.find((p:any)=>p.id===seat.playerId),me=restored.room.players.find((p:any)=>p.id===seat.playerId);
    assert.equal(me.weapons.ar.ammo,old.weapons.ar.ammo);assert.equal(me.kills,old.kills);assert.deepEqual(me.ownedWeapons,old.ownedWeapons);
    const fresh=event(c,'match:snapshot',s=>s.players.find((p:any)=>p.id===seat.playerId)?.ack===25001);
    c.emit('match:input',input(first.roundId,25001));await fresh;
    // A refresh may reconnect before the old transport has timed out. New transport wins.
    const d=await env.connect(),replaced=event(c,'room:replaced'),disconnected=event(c,'disconnect');
    const replacement:Credentials=await d.emitWithAck('room:resume',seat);await replaced;await disconnected;
    assert.equal(replacement.playerId,seat.playerId);
    const lobby=event(d,'room:state',r=>r.state==='LOBBY');
    assert.deepEqual(await b.emitWithAck('game:end'),{ok:true});const returned=await lobby;
    assert.equal(returned.code,seat.code);assert.ok(returned.lobbyReason);assert.equal(returned.winnerId,undefined);
    assert.deepEqual(await b.emitWithAck('game:start'),{ok:true});
    const next=await event(d,'match:snapshot');assert.equal(next.roundId,first.roundId+1);assert.equal(next.players.find((p:any)=>p.id===seat.playerId).ack,0);
    assert.deepEqual(await d.emitWithAck('room:leave'),{ok:true});
    assert.deepEqual(await d.emitWithAck('room:resume',seat),{error:'SESSION_EXPIRED'});
  }finally{env.close();}
});

test('mid-match joins start fresh; reserved seats count toward capacity and malformed joins are rejected',async()=>{
  const env=await setup();
  try{
    const a=await env.connect(),b=await env.connect(),extra=await env.connect();
    const host:Credentials=await a.emitWithAck('room:create','Host');
    const guest:Credentials=await b.emitWithAck('room:join',{code:host.code,name:'Guest'});
    await a.emitWithAck('game:start');
    const offline=event(a,'room:state',r=>r.players.some((p:any)=>p.id===guest.playerId&&!p.connected));b.disconnect();await offline;
    assert.deepEqual(await extra.emitWithAck('room:join',null),{error:'INVALID_NICKNAME'});
    assert.deepEqual(await extra.emitWithAck('room:join',{code:'?',name:'Valid'}),{error:'INVALID_ROOM_CODE'});
    for(let n=0;n<6;n++){
      const socket=await env.connect();const joined:Credentials=await socket.emitWithAck('room:join',{code:host.code.toLowerCase(),name:`Late ${n}`});
      assert.equal(joined.room.state,'PLAYING');const p=joined.room.players.find((p:any)=>p.id===joined.playerId);
      assert.equal(p.kills,0);assert.equal(p.deaths,0);assert.equal(p.activeWeapon,'ar');assert.deepEqual(p.ownedWeapons,['ar']);
    }
    assert.deepEqual(await extra.emitWithAck('room:join',{code:host.code,name:'Extra'}),{error:'ROOM_FULL'});
    assert.deepEqual(await a.emitWithAck('room:create','Other'),{error:'ALREADY_IN_ROOM'});
    const leaveHost=await a.emitWithAck('room:leave');assert.deepEqual(leaveHost,{ok:true});
    const joined:Credentials=await extra.emitWithAck('room:join',{code:host.code,name:'Extra'});assert.equal(joined.room.players.length,8);assert.notEqual(joined.room.host,host.playerId);
  }finally{env.close();}
});

test('expired reservations are removed and an entirely offline room survives only through its grace period',async()=>{
  const env=await setup(200);
  try{
    const a=await env.connect(),b=await env.connect();const seat:Credentials=await a.emitWithAck('room:create','Host');
    const guest:Credentials=await b.emitWithAck('room:join',{code:seat.code,name:'Guest'});
    const removed=event(b,'room:state',r=>!r.players.some((p:any)=>p.id===seat.playerId));a.disconnect();await removed;
    const c=await env.connect();assert.deepEqual(await c.emitWithAck('room:resume',seat),{error:'SESSION_EXPIRED'});
    b.disconnect();
    const d=await env.connect();const recovered:Credentials=await d.emitWithAck('room:resume',guest);assert.equal(recovered.playerId,guest.playerId);
    d.disconnect();await new Promise(resolve=>setTimeout(resolve,300));
    assert.deepEqual(await c.emitWithAck('room:resume',guest),{error:'SESSION_EXPIRED'});
    assert.deepEqual(await c.emitWithAck('room:join',{code:seat.code,name:'Guest'}),{error:'ROOM_NOT_FOUND'});
  }finally{env.close();}
});

test('resume follows the current lobby state after a host ends the round during an outage',async()=>{
  const env=await setup();
  try{
    const a=await env.connect(),b=await env.connect();const host:Credentials=await a.emitWithAck('room:create','Host');
    const seat:Credentials=await b.emitWithAck('room:join',{code:host.code,name:'Guest'});await a.emitWithAck('game:start');
    const offline=event(a,'room:state',r=>r.players.some((p:any)=>p.id===seat.playerId&&!p.connected));b.disconnect();await offline;
    await a.emitWithAck('game:end');const c=await env.connect();const restored:Credentials=await c.emitWithAck('room:resume',seat);
    assert.equal(restored.room.state,'LOBBY');assert.equal(restored.room.code,host.code);
  }finally{env.close();}
});

test('an offline victim can die, award a kill, and respawn with score preserved',async()=>{
  const players=new Map(['attacker','victim'].map(id=>[id,{id,name:id,avatar:'',color:0xffffff,socketId:id,resumeToken:id,x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,kills:0,deaths:0,life:0,lastShot:0,lastReceivedSeq:0,lastProcessedSeq:0,input:{},activeWeapon:'ar',ownedWeapons:['ar'],weapons:{},slowUntil:0,burn:null}]));
  const room={environmentTime:0,code:'OFFLINE',host:'attacker',roundId:0,state:'LOBBY',players,pickups:[],history:[],tick:0,lastStep:Date.now(),wheelEpoch:0,respawnTimers:new Map(),reconnectTimers:new Map(),shotSequence:0,killTracker:new KillTracker('offline')} as unknown as Parameters<typeof beginRound>[1];
  const emissions:any[]=[];const server={to:(id:string)=>({emit:(name:string,data:any)=>emissions.push({id,name,data})})} as unknown as Parameters<typeof beginRound>[0];
  beginRound(server,room);const victim=room.players.get('victim')!,attacker=room.players.get('attacker')!;
  victim.socketId=undefined;victim.disconnectedUntil=Date.now()+60_000;victim.hp=4;victim.burn={attackerId:attacker.id,nextTick:Date.now()-1,expiresAt:Date.now()+1000};
  try{
    step(server,room,1/60);assert.equal(victim.alive,false);assert.equal(victim.deaths,1);assert.equal(attacker.kills,1);
    assert.ok(emissions.some(e=>e.name==='match:kill'&&e.data.victimId===victim.id));
    await new Promise(resolve=>setTimeout(resolve,3100));assert.equal(victim.alive,true);assert.equal(victim.hp,100);assert.equal(victim.deaths,1);assert.equal(victim.socketId,undefined);
  }finally{for(const timer of room.respawnTimers.values())clearTimeout(timer);}
});
