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
    const playerId=created.playerId;
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
    const me=first.players.find(p=>p.id===playerId);
    const sprintSpeed=PLAYER_MOVE_SPEED*SPRINT_MULTIPLIER;
    // Choose an unobstructed direction using the same collision rules, regardless of the random spawn.
    const choices=[{moveX:1,moveY:0},{moveX:-1,moveY:0},{moveX:0,moveY:1},{moveX:0,moveY:-1}];
    const direction=choices.find(d=>{const p={...me};for(let n=0;n<120;n++)stepPlayer(p,{...d,lookX:0,lookY:0,jump:false,sprint:true},1/120,undefined,1,first.simulationTime+n/120);return Math.abs(Math.hypot(p.x-me.x,p.z-me.z)-sprintSpeed)<.01;});
    assert.ok(direction,'spawn has a clear route for speed measurement');
    const command={roundId:first.roundId,seq:1,clientTime:Date.now(),...direction,yaw:0,pitch:0,jump:false,reload:false,sprint:false,aim:true};
    // Protocol 18 consumes commands once. Drive one command for each observed
    // server tick, so timing jitter in this test runner cannot alter speed.
    let seq=0;
    const drive=async(sprint:boolean,count:number)=>{
      const start=server.rooms.get(created.code)!;const player=start.players.get(playerId)!;
      const origin={x:player.x,z:player.z};
      let snapshot=first;
      for(let n=0;n<count;n++){
        const ack=++seq;
        const processed=event<Snapshot>(a,'match:snapshot',value=>value.players.find(p=>p.id===playerId)?.ack===ack);
        a.emit('match:input',{...command,seq:ack,clientTime:Date.now(),sprint});snapshot=await processed;
      }
      const current=snapshot.players.find(p=>p.id===playerId);
      assert.ok(Math.abs(Math.hypot(current.x-origin.x,current.z-origin.z)-count*(sprint?sprintSpeed:PLAYER_MOVE_SPEED)/60)<.01);
      return snapshot;
    };
    const walkB=await drive(false,12);
    assert.equal(walkB.players.find(p=>p.id===playerId).aiming,false,'AR cannot claim sniper accuracy');
    const sprintB=await drive(true,12);assert.equal(sprintB.players.find(p=>p.id===playerId).aiming,false);
    const stoppedSeq=++seq;
    const stopped=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===playerId)?.ack===stoppedSeq);
    a.emit('match:input',{...command,seq:stoppedSeq,moveX:0,moveY:0,sprint:false,aim:false});const end=await stopped;
    assert.equal(end.players.find(p=>p.id===playerId).sprinting,false);
    const common=[...fromA.keys()].filter(tick=>fromB.has(tick));assert.ok(common.length>5);
    for(const tick of common){assert.deepEqual(fromA.get(tick),fromB.get(tick));}
    assert.ok(end.simulationTime>first.simulationTime);assert.ok(Math.abs((end.environmentTime-first.environmentTime)-(end.serverTime-first.serverTime)/1000)<1e-5);
    assert.ok(Math.abs((end.simulationTime-first.simulationTime)-(end.serverTime-first.serverTime)/1000)<1e-8);
    const ammo=end.players.find(p=>p.id===playerId).weapons.ar.ammo;
    // A late, high-sequence command from a prior round must not poison this round's sequence counter.
    a.emit('match:input',{...command,roundId:first.roundId-1,seq:90000});
    a.emit('match:fire',{roundId:first.roundId-1,seq:3});
    const afterStale=await event<Snapshot>(a,'match:snapshot',s=>s.tick>=end.tick+6);
    const stoppedPlayer=afterStale.players.find(p=>p.id===playerId);
    assert.equal(stoppedPlayer.ack,stoppedSeq);assert.equal(stoppedPlayer.weapons.ar.ammo,ammo);
    assert.equal(stoppedPlayer.x,end.players.find(p=>p.id===playerId).x);assert.equal(stoppedPlayer.z,end.players.find(p=>p.id===playerId).z);
    const accepted=event<Snapshot>(a,'match:snapshot',s=>s.players.find(p=>p.id===playerId)?.ack===stoppedSeq+1);
    a.emit('match:input',{...command,seq:stoppedSeq+1,moveX:0,moveY:0});await accepted;
  }finally{a.disconnect();b.disconnect();server.close();}
});
