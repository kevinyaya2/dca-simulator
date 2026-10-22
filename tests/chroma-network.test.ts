import test from 'node:test';
import assert from 'node:assert/strict';
import { io, type Socket } from 'socket.io-client';
import { createGameServer } from '../server/src/index.ts';
import { stepPlayer, PLAYER_MOVE_SPEED, SPRINT_MULTIPLIER } from '../shared/arena.ts';
import { MULTIPLAYER_PROTOCOL_VERSION } from '../shared/protocol.ts';

function event<T>(socket:Socket,name:string,predicate:(value:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},5000);
    const receive=(value:T)=>{if(predicate(value)){clearTimeout(timer);socket.off(name,receive);resolve(value);}};
    socket.on(name,receive);
  });
}
type Snapshot={environmentTime:number;roundId:number;tick:number;simulationTime:number;serverTime:number;players:any[];pickups:any[]};

test('two clients agree on wheel time, sprint speed, action resets and the new weapon pickup',async()=>{
  const server=createGameServer();
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const url=`http://127.0.0.1:${address.port}`;
  const a=io(url,{transports:['websocket'],forceNew:true,autoConnect:false});
  const b=io(url,{transports:['websocket'],forceNew:true,autoConnect:false});
  try{
    const connectedA=event(a,'connect'),connectedB=event(b,'connect');a.connect();b.connect();await Promise.all([connectedA,connectedB]);
    const created:any=await a.emitWithAck('room:create','Tester A');
    const roomEvent=event<any>(b,'room:state');
    await b.emitWithAck('room:join',{name:'Tester B',code:created.code});
    const room=await roomEvent;assert.equal(room.protocolVersion,MULTIPLAYER_PROTOCOL_VERSION);
    const fromA=new Map<number,Snapshot>(),fromB=new Map<number,Snapshot>();
    a.on('match:snapshot',(s:Snapshot)=>fromA.set(s.tick,s));b.on('match:snapshot',(s:Snapshot)=>fromB.set(s.tick,s));
    const started=event<Snapshot>(a,'match:snapshot');a.emit('game:start');const first=await started;
    assert.equal(room.environmentTime,0);
    assert.equal(first.pickups.find(p=>p.id==='smg').y,-6);assert.equal(first.pickups.find(p=>p.id==='shotgun').y,-6);
    assert.ok(first.pickups.every(p=>Number.isFinite(p.y)));
    assert.ok(first.pickups.some(p=>p.id==='sniper'&&p.available));assert.ok(first.simulationTime>0);assert.ok(Math.abs(first.environmentTime-first.simulationTime)<1e-5);
    const me=first.players.find(p=>p.id===a.id);
    const sprintSpeed=PLAYER_MOVE_SPEED*SPRINT_MULTIPLIER;
    // Choose an unobstructed direction using the same collision rules, regardless of the random spawn.
    const choices=[{moveX:1,moveY:0},{moveX:-1,moveY:0},{moveX:0,moveY:1},{moveX:0,moveY:-1}];
    const direction=choices.find(d=>{const p={...me};for(let n=0;n<120;n++)stepPlayer(p,{...d,lookX:0,lookY:0,jump:false,sprint:true},1/120,undefined,1,first.simulationTime+n/120);return Math.abs(Math.hypot(p.x-me.x,p.z-me.z)-sprintSpeed)<.01;});
    assert.ok(direction,'spawn has a clear route for speed measurement');
    const command={roundId:first.roundId,seq:1,clientTime:Date.now(),...direction,yaw:0,pitch:0,jump:false,reload:false,sprint:false,aim:true};
    const walkingStart=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===a.id)?.ack===1);a.emit('match:input',command);
    const walkA=await walkingStart;
    const walkB=await event<Snapshot>(a,'match:snapshot',s=>s.tick>=walkA.tick+12);
    const distance=(s:Snapshot,t:Snapshot)=>{const p=s.players.find(p=>p.id===a.id),q=t.players.find(p=>p.id===a.id);return Math.hypot(p.x-q.x,p.z-q.z)/((t.serverTime-s.serverTime)/1000);};
    assert.ok(Math.abs(distance(walkA,walkB)-PLAYER_MOVE_SPEED)<.01);
    assert.equal(walkB.players.find(p=>p.id===a.id).aiming,false,'AR cannot claim sniper accuracy');
    const sprintStart=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===a.id)?.ack===2);a.emit('match:input',{...command,seq:2,sprint:true,aim:true});
    const sprintA=await sprintStart;
    const sprintB=await event<Snapshot>(a,'match:snapshot',s=>s.tick>=sprintA.tick+12);
    assert.ok(Math.abs(distance(sprintA,sprintB)-sprintSpeed)<.01);
    assert.equal(sprintB.players.find(p=>p.id===a.id).aiming,false);
    const stopped=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===a.id)?.ack===3);
    a.emit('match:input',{...command,seq:3,moveX:0,moveY:0,sprint:false,aim:false});const end=await stopped;
    assert.equal(end.players.find(p=>p.id===a.id).sprinting,false);
    const common=[...fromA.keys()].filter(tick=>fromB.has(tick));assert.ok(common.length>5);
    for(const tick of common){assert.deepEqual(fromA.get(tick),fromB.get(tick));}
    assert.ok(end.simulationTime>first.simulationTime);assert.ok(Math.abs((end.environmentTime-first.environmentTime)-(end.serverTime-first.serverTime)/1000)<1e-5);
    assert.ok(Math.abs((end.simulationTime-first.simulationTime)-(end.serverTime-first.serverTime)/1000)<1e-8);
    const ammo=end.players.find(p=>p.id===a.id).weapons.ar.ammo;
    // A late, high-sequence command from a prior round must not poison this round's sequence counter.
    a.emit('match:input',{...command,roundId:first.roundId-1,seq:90000});
    a.emit('match:fire',{roundId:first.roundId-1,clientTime:Date.now()});
    const afterStale=await event<Snapshot>(a,'match:snapshot',s=>s.tick>=end.tick+6);
    const stoppedPlayer=afterStale.players.find(p=>p.id===a.id);
    assert.equal(stoppedPlayer.ack,3);assert.equal(stoppedPlayer.weapons.ar.ammo,ammo);
    assert.equal(stoppedPlayer.x,end.players.find(p=>p.id===a.id).x);assert.equal(stoppedPlayer.z,end.players.find(p=>p.id===a.id).z);
    const accepted=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===a.id)?.ack===4);
    a.emit('match:input',{...command,seq:4,moveX:0,moveY:0});await accepted;
  }finally{a.disconnect();b.disconnect();server.close();}
});
