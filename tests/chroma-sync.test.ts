import test from 'node:test';
import assert from 'node:assert/strict';
import { io as connect, type Socket } from 'socket.io-client';
import { SimulationClock, advanceRoomClock } from '../server/src/SimulationClock.ts';
import { createGameServer } from '../server/src/index.ts';
import { createWardenRound, damageWarden, stepWarden } from '../server/src/voidWarden.ts';
import { VOID_WARDEN, WARDEN_ENTRANCE } from '../shared/voidWarden.ts';
import { stepPlayer, PLAYER_MOVE_SPEED } from '../shared/arena.ts';

test('a two-second server hitch drops work without leaving snapshots two seconds behind',()=>{
  const clock=new SimulationClock(1000),room={lastStep:1000,wheelEpoch:1000};
  const times:number[]=[];
  const update=(dt:number,at:number)=>{if(advanceRoomClock(room,at,dt))times.push(at);};
  clock.advance(1100,update);
  const before=(room.lastStep-room.wheelEpoch)/1000;
  times.length=0;
  clock.advance(3100,update);
  assert.equal(times.length,15,'catch-up stays bounded to 250ms');
  assert.ok(Math.abs(room.lastStep-3100)<1e-6,'last outgoing tick uses current wall time');
  assert.ok(Math.abs((room.lastStep-room.wheelEpoch)/1000-before-.25)<1e-6,'platforms do not jump two seconds');
  times.length=0;clock.advance(3200,update);
  assert.equal(times.length,6);
  assert.ok(Math.abs(room.lastStep-3200)<1e-6,'lag does not persist into future snapshots');
  assert.ok(times.every((at,i)=>i===0||at>times[i-1]));
});

test('repeated stalls recover clocks of all rooms, including a room started mid-frame',()=>{
  const clock=new SimulationClock(0),rooms=[{lastStep:0,wheelEpoch:0},{lastStep:25,wheelEpoch:25}];
  const simulation=rooms.map(()=>0);
  for(const now of [32,50,2050,2070,5000,5020]){
    clock.advance(now,(dt,at)=>rooms.forEach((room,i)=>{if(advanceRoomClock(room,at,dt))simulation[i]+=dt;}));
    for(const [i,room] of rooms.entries()){
      assert.ok(now-room.lastStep<1000/60+1e-6);
      assert.ok(Math.abs((room.lastStep-room.wheelEpoch)/1000-simulation[i])<1e-6);
    }
  }
});

test('epoch timestamp rounding does not drop normal 60Hz movement ticks',()=>{
  const start=1_800_000_000_000,clock=new SimulationClock(start),room={lastStep:start,wheelEpoch:start};
  let ticks=0;
  for(let elapsed=1;elapsed<=1000;elapsed++)clock.advance(start+elapsed,(dt,at)=>{
    if(advanceRoomClock(room,at,dt))ticks++;
  });
  assert.equal(ticks,60);
  assert.ok(Math.abs(room.lastStep-start-1000)<.001);
  assert.equal(room.wheelEpoch,start,'normal rounding does not count as dropped simulation time');
});

test('recruited Warden finishes surrender and stand-up on their scheduled deadlines after a hitch',()=>{
  for(const late of [false,true]){
    const round=createWardenRound(0,0),owner={id:'owner',socketId:'owner',alive:true,x:12,y:1.65,z:8};
    const at=WARDEN_ENTRANCE.finish;
    stepWarden(round,at,1/60,0,[owner]);
    damageWarden(round,owner,VOID_WARDEN.maxHp,at);
    assert.equal(round.boss?.state,'DEFEATED');
    if(!late){
      stepWarden(round,at+VOID_WARDEN.surrenderMs-1,1/60,0,[owner]);
      assert.equal(round.boss?.state,'DEFEATED');
      stepWarden(round,at+VOID_WARDEN.surrenderMs,1/60,0,[owner]);
      assert.equal(round.boss?.state,'ALLIED');
      assert.equal(round.boss?.hp,VOID_WARDEN.alliedHp);
    }
    stepWarden(round,at+VOID_WARDEN.surrenderMs+400+(late?2000:0),1/60,0,[owner]);
    assert.equal(round.boss?.state,'FOLLOW');
    assert.equal(round.boss?.ownerId,owner.id);
    assert.equal(round.boss?.hp,VOID_WARDEN.alliedHp);
  }
});

function event<T>(socket:Socket,name:string,accept:(value:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},5000);
    function receive(value:T){if(accept(value)){clearTimeout(timeout);socket.off(name,receive);resolve(value);}}
    socket.on(name,receive);
  });
}

test('both network clients receive current timestamps and new movement acknowledgements after a server clock gap',async()=>{
  const server=createGameServer({wardenSpawnDelayMs:0});
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const clients=Array.from({length:2},()=>connect(`http://127.0.0.1:${address.port}`,{transports:['websocket'],forceNew:true,autoConnect:false}));
  const realNow=Date.now;
  type Snapshot={serverTime:number;roundId:number;tick:number;players:{id:string;ack:number;x:number;y:number;z:number}[]};
  try{
    await Promise.all(clients.map(socket=>{const ready=event(socket,'connect');socket.connect();return ready;}));
    const host=await clients[0].emitWithAck('room:create','Clock Host');
    const guest=await clients[1].emitWithAck('room:join',{code:host.code,name:'Clock Guest'});
    const first=event<Snapshot>(clients[0],'match:snapshot');await clients[0].emitWithAck('game:start');
    const before=await first;
    const headings=[host.playerId,guest.playerId].map(id=>{
      const player=before.players.find(p=>p.id===id)!;
      const heading=[0,Math.PI/2,Math.PI,-Math.PI/2].find(yaw=>{
        const simulated={...player,yaw,pitch:0,velocityY:0,jumpsUsed:0,alive:true};
        for(let i=0;i<60;i++)stepPlayer(simulated,{moveX:0,moveY:1,lookX:0,lookY:0,jump:false},1/120);
        return Math.abs(Math.hypot(simulated.x-player.x,simulated.z-player.z)-PLAYER_MOVE_SPEED*.5)<.01;
      });
      assert.notEqual(heading,undefined,'spawn has a clear path for the movement check');
      return heading!;
    });
    Date.now=()=>realNow()+2000; // Same elapsed-time gap as a stalled server, without slowing the test.
    const recovered=await Promise.all(clients.map(socket=>event<Snapshot>(socket,'match:snapshot',s=>s.serverTime>before.serverTime+1500)));
    for(const snapshot of recovered)assert.ok(Date.now()-snapshot.serverTime<350,'snapshot clock catches up');
    const moved=clients.map((socket,i)=>{
      const id=i===0?host.playerId:guest.playerId;
      const accepted=event<Snapshot>(socket,'match:snapshot',s=>s.players.find(p=>p.id===id)?.ack===100);
      socket.emit('match:input',{roundId:before.roundId,seq:100,clientTime:Date.now(),moveX:0,moveY:1,yaw:headings[i],pitch:0});
      return accepted;
    });
    const accepted=await Promise.all(moved);
    for(const snapshot of accepted)assert.ok(Date.now()-snapshot.serverTime<100,'clock stays current while processing new movement');
    const advanced=await Promise.all(clients.map((socket,i)=>event<Snapshot>(socket,'match:snapshot',s=>s.tick>=accepted[i].tick+12)));
    for(const [i,snapshot] of advanced.entries()){
      const id=i===0?host.playerId:guest.playerId,old=accepted[i].players.find(p=>p.id===id)!,next=snapshot.players.find(p=>p.id===id)!;
      const forward=-(next.x-old.x)*Math.sin(headings[i])-(next.z-old.z)*Math.cos(headings[i]);
      assert.ok(forward>.5,'forward input continues to advance on the authoritative server');
    }
  }finally{Date.now=realNow;clients.forEach(socket=>socket.disconnect());server.close();}
});
