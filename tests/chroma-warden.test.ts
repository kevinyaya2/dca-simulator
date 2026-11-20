import test from 'node:test';
import assert from 'node:assert/strict';
import { io as connect, type Socket } from 'socket.io-client';
import { applyWardenDamage, beginRound, createGameServer, kill, shoot } from '../server/src/index.ts';
import { createWardenRound, damageWarden, stepWarden, suspendWarden } from '../server/src/voidWarden.ts';
import { VOID_WARDEN, VOID_BLESSING, WARDEN_ATTACKS, WARDEN_ENTRANCE, WARDEN_ID, playerMoveScale, type WardenAttackKind, type WardenSnapshot } from '../shared/voidWarden.ts';
import { arenaBoxesNear, overlapsBox } from '../shared/arena.ts';
import { KillTracker, resolveShot } from '../shared/combat.ts';
import { initialBounty } from '../shared/bounty.ts';
import { createWeaponStates } from '../shared/weapons.ts';

const dt=1/60;
const target={id:'player',socketId:'player',x:29,y:1.65,z:8,alive:true};

test('Warden spawns once at 90 seconds, stays bound through the entrance, and then pursues a living target',()=>{
  const round=createWardenRound(10_000);
  assert.equal(round.spawnAt,100_000);
  stepWarden(round,99_999,dt,89.999,[target]);
  assert.equal(round.boss,null);
  stepWarden(round,100_000,dt,90,[target]);
  const boss=round.boss!;
  assert.equal(boss.state,'SPAWN');
  assert.equal(boss.stateAt,100_000);
  assert.equal(boss.hp,2000);
  assert.equal(boss.ownerId,null);
  stepWarden(round,100_000+WARDEN_ENTRANCE.finish-1,dt,95,[target]);
  assert.equal(round.boss,boss);
  assert.equal(boss.x,VOID_WARDEN.location.x);
  assert.equal(boss.targetId,null);
  stepWarden(round,100_000+WARDEN_ENTRANCE.finish,dt,96,[target]);
  assert.equal(boss.state,'CHASE');
  assert.equal(boss.targetId,target.id);
  assert.ok(boss.x>VOID_WARDEN.location.x);
  stepWarden(round,100_000+WARDEN_ENTRANCE.finish+17,dt,96.017,[{...target,alive:false}]);
  assert.equal(boss.targetId,null);
});

test('Warden movement never enters central cover or skips floors',()=>{
  const round=createWardenRound(0,0);
  const targets=[{...target,x:0,z:-9}, {...target,id:'underground',y:-4.35,x:12,z:8}];
  for(let tick=0;tick<180;tick++){
    stepWarden(round,WARDEN_ENTRANCE.finish+tick*dt*1000,dt,95+tick*dt,targets);
    const boss=round.boss!;
    assert.equal(boss.y,VOID_WARDEN.location.y);
    assert.equal(arenaBoxesNear(boss.x,boss.z,VOID_WARDEN.radius).some(box=>
      box.maxY>boss.y+.01&&box.minY<boss.y+VOID_WARDEN.height&&overlapsBox(boss.x,boss.z,box,VOID_WARDEN.radius)),false);
  }
});

function nextBoss(){
  const round=createWardenRound(0,0);
  const at=WARDEN_ENTRANCE.finish;
  stepWarden(round,at,dt,0,[]);
  round.repathAt=0;
  return {round,boss:round.boss!,at};
}

test('each configured move has a wind-up and unique valid hits, with separate hits for the three slashes',()=>{
  for(const [index,kind] of (['slash','dash','leap','burst'] as const).entries()){
    const {round,boss,at}=nextBoss();
    const position={...target,x:12,z:kind==='slash'?13:kind==='burst'?19:17};
    const hits:WardenAttackKind[]=[];
    round.nextAttack=index;
    if(kind==='burst')damageWarden(round,target,1100,at);
    stepWarden(round,at+dt*1000,dt,0,[position],(...args)=>hits.push(args[3]));
    assert.equal(boss.attack?.kind,kind);
    assert.deepEqual(hits,[]);
    for(let i=2;i<=Math.ceil(WARDEN_ATTACKS[kind].duration/(dt*1000))+3;i++){
      stepWarden(round,at+i*dt*1000,dt,i*dt,[position],(...args)=>hits.push(args[3]));
    }
    assert.deepEqual(hits,Array.from({length:kind==='slash'?3:1},()=>kind));
    assert.equal(boss.state,'STAGGER');
    assert.equal(boss.air,0);
  }
});

test('protected, jumping, dead, and wall-shielded targets take no melee damage',()=>{
  const {round,boss,at}=nextBoss();
  Object.assign(boss,{x:0,y:0,z:2.6});
  const live={...target,x:0,z:6};
  stepWarden(round,at+17,dt,0,[live]);
  assert.equal(boss.attack?.kind,'slash');
  // Turn the locked sweep toward the central cover to exercise the check at impact.
  boss.attack!.yaw=Math.PI;
  const players=[
    {...live,id:'cover',x:0,z:-2},
    {...live,id:'shield',x:.8,z:2,protectUntil:at+6000},
    {...live,id:'jump',x:-.8,z:2,y:3.4},
    {...live,id:'dead',x:-1,z:2,alive:false},
  ];
  const hits:string[]=[];
  for(let i=2;i<122;i++)stepWarden(round,at+i*dt*1000,dt,i*dt,players,p=>hits.push(p.id));
  assert.deepEqual(hits,[]);
});

test('the Warden unlocks infection below 50% and performs one self-stab below 25%',()=>{
  const {round,boss,at}=nextBoss();
  assert.equal(damageWarden(round,target,1000,at)?.killed,false);
  assert.equal(boss.phaseTwo,false);
  damageWarden(round,target,1,at);
  assert.equal(boss.phaseTwo,true);
  damageWarden(round,target,500,at);
  stepWarden(round,at+17,dt,0,[]);
  assert.equal(boss.state,'ENRAGED');
  const when=boss.stateAt;
  stepWarden(round,when+VOID_WARDEN.enrageMs+1,dt,0,[]);
  assert.equal(boss.state,'IDLE');
  assert.equal(boss.enraged,true);
  damageWarden(round,target,20,when+2000);
  stepWarden(round,when+2017,dt,0,[]);
  assert.equal(boss.state,'IDLE');
});

test('an allied Warden follows into B1, guards a dead owner, waits when offline, and despawns permanently',()=>{
  const {round,boss,at}=nextBoss();
  const owner={...target,id:'owner',name:'Owner',x:12,y:1.65,z:8};
  assert.equal(damageWarden(round,owner,2000,at)?.recruited,true);
  assert.equal(damageWarden(round,target,2000,at+1),undefined);
  stepWarden(round,at+VOID_WARDEN.surrenderMs,dt,0,[owner]);
  assert.equal(boss.hp,VOID_WARDEN.alliedHp);
  assert.equal(damageWarden(round,owner,10000,at+1400),undefined);
  owner.alive=false;
  stepWarden(round,at+1750,dt,0,[owner]);
  assert.equal(boss.state,'GUARD');
  const death=round.guard;
  owner.alive=true;
  owner.y=-4.35;
  owner.z=18;
  stepWarden(round,at+1800,dt,0,[owner]);
  assert.equal(boss.state,'FOLLOW');
  assert.ok(death&&round.guard===null);
  let descended=false;
  for(let i=0;i<1200;i++){
    stepWarden(round,at+1820+i*dt*1000,dt,i*dt,[owner]);
    if(boss.y<-5.5){descended=true;break;}
  }
  assert.ok(descended,'uses a reachable B1 entrance');
  const position=[boss.x,boss.y,boss.z];
  suspendWarden(round,owner.id,at+23500);
  owner.socketId='';
  stepWarden(round,at+24500,dt,0,[owner,target]);
  assert.equal(boss.state,'WAIT');
  assert.deepEqual([boss.x,boss.y,boss.z],position);
  owner.socketId='resumed';
  stepWarden(round,at+24517,dt,0,[owner]);
  assert.equal(boss.state,'FOLLOW');
  assert.equal(damageWarden(round,target,5000,at+25000)?.recruited,false);
  assert.equal(boss.state,'DESPAWN');
  stepWarden(round,at+27000,dt,0,[owner,target]);
  assert.equal(round.boss,null);
  stepWarden(round,at+63000,dt,0,[owner,target]);
  assert.equal(round.boss,null);
});

test('a valid weapon last hit grants the blessing exactly once and Warden kills have no score payout',()=>{
  type Room=Parameters<typeof beginRound>[1];
  type Player=Parameters<typeof shoot>[2];
  const events:{name:string;payload:any}[]=[];
  const io={to:()=>({emit:(name:string,payload:any)=>events.push({name,payload})})} as unknown as Parameters<typeof beginRound>[0];
  const a={id:'a',name:'Player A',socketId:'a',weapons:createWeaponStates(),...initialBounty()} as unknown as Player;
  const b={id:'b',name:'Player B',socketId:'b',weapons:createWeaponStates(),...initialBounty()} as unknown as Player;
  const room={players:new Map([[a.id,a],[b.id,b]]),roundId:0,code:'WARDEN',respawnTimers:new Map(),
    killTracker:new KillTracker('warden'),environmentTime:0,reconnectTimers:new Map()} as unknown as Room;
  try{
    beginRound(io,room,0);
    const round=room.warden!;
    stepWarden(round,round.spawnAt+WARDEN_ENTRANCE.finish,dt,0,[]);
    round.boss!.hp=52;
    Object.assign(a,{x:12,y:1.65,z:18,protectUntil:0});
    Object.assign(b,{x:20,y:1.65,z:8,protectUntil:0});
    b.input.yaw=Math.PI/2;
    shoot(io,room,a,Date.now());
    assert.equal(round.boss?.hp,24);
    shoot(io,room,b,Date.now());
    assert.equal(round.boss?.ownerId,b.id);
    const until=b.blessingUntil!;
    assert.ok(until>=Date.now()+VOID_BLESSING.durationMs-500);
    assert.equal(playerMoveScale(0,until,until-1),1.1);
    assert.equal(playerMoveScale(0,until,until),1);
    assert.equal(playerMoveScale(until,until,until-1),.65*1.1);
    assert.equal(a.blessingUntil,0);
    assert.equal(events.filter(e=>e.name==='match:warden'&&e.payload.kind==='recruited').length,1);
    b.input.yaw=Math.atan2(b.x-a.x,b.z-a.z);
    b.input.pitch=-.039;
    b.lastShot=0;
    shoot(io,room,b,Date.now());
    assert.equal(a.hp,66);
    a.hp=100;
    applyWardenDamage(io,room,b,99,VOID_WARDEN.location,'slash');
    assert.equal(b.hp,100);
    a.protectUntil=Date.now()+100;
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    assert.equal(a.hp,100);
    a.protectUntil=0;
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    assert.equal(a.deaths,1);
    assert.equal(b.score,0);
    assert.equal(b.kills,0);
    a.alive=true;
    kill(io,room,a,b,'ar',false);
    assert.equal(b.blessingUntil,0);
    assert.equal(round.boss?.ownerId,b.id);
  }finally{
    for(const timer of room.respawnTimers.values())clearTimeout(timer);
  }
});

test('weapon traces hit the larger Warden hurtbox but respect nearby cover',()=>{
  const warden={id:WARDEN_ID,x:0,y:1.65,z:-8,yaw:0,alive:true,kind:'warden' as const};
  assert.equal(resolveShot('ar',[0,3.4,-3],[0,0,-1],[warden],()=>.5).hits[0]?.targetId,WARDEN_ID);
  assert.equal(resolveShot('ar',[0,1.5,4],[0,0,-1],[warden],()=>.5).hits.length,0);
});

test('alliance expires on server time during an offline wait',()=>{
  const {round,boss,at}=nextBoss();
  damageWarden(round,target,VOID_WARDEN.maxHp,at);
  stepWarden(round,at+VOID_WARDEN.surrenderMs,dt,0,[target]);
  const offline={...target,socketId:''};
  stepWarden(round,at+2000,dt,0,[offline]);
  assert.equal(boss.state,'WAIT');
  stepWarden(round,at+VOID_WARDEN.allianceMs,dt,0,[offline]);
  assert.equal(boss.state,'DESPAWN');
  stepWarden(round,at+VOID_WARDEN.allianceMs+VOID_WARDEN.collapseMs,dt,0,[target]);
  assert.equal(round.boss,null);
});

function event<T>(socket:Socket,name:string,accept:(data:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},7000);
    function receive(data:T){if(accept(data)){clearTimeout(timer);socket.off(name,receive);resolve(data);}}
    socket.on(name,receive);
  });
}

type Snapshot={roundId:number;tick:number;warden:WardenSnapshot|null};

test('clients agree on spawn time, late joins receive the full entrance, and ending the round clears it',async()=>{
  const server=createGameServer({wardenSpawnDelayMs:160});
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();
  assert.ok(address&&typeof address!=='string');
  const clients=Array.from({length:3},()=>connect(`http://127.0.0.1:${address.port}`,{
    transports:['websocket'],forceNew:true,autoConnect:false,
  }));
  const [host,guest,late]=clients;
  try{
    await Promise.all(clients.map(socket=>{const connected=event(socket,'connect');socket.connect();return connected;}));
    const created=await host.emitWithAck('room:create','Warden Host');
    assert.equal(created.room.warden,null);
    await guest.emitWithAck('room:join',{code:created.code,name:'Warden Guest'});
    const firstSpawn=event<Snapshot>(host,'match:snapshot',data=>data.warden!==null);
    const secondSpawn=event<Snapshot>(guest,'match:snapshot',data=>data.warden!==null);
    await host.emitWithAck('game:start');
    const [a,b]=await Promise.all([firstSpawn,secondSpawn]);
    assert.equal(a.tick,b.tick);
    assert.deepEqual(a.warden,b.warden);
    assert.equal(a.warden?.state,'SPAWN');
    const joined=await late.emitWithAck('room:join',{code:created.code,name:'Warden Late'});
    assert.deepEqual(joined.room.warden,a.warden);
    const shot=event<{id:string}>(host,'match:shot',s=>s.id===created.playerId);
    host.emit('match:input',{roundId:a.roundId,seq:1,clientTime:Date.now(),moveX:0,moveY:0,yaw:0,pitch:0});
    host.emit('match:fire',{roundId:a.roundId,seq:1,damage:9999,targetId:WARDEN_ID});
    await shot;
    await new Promise(resolve=>setTimeout(resolve,160));
    host.emit('match:fire',{roundId:a.roundId,seq:1});
    host.emit('match:fire',{roundId:a.roundId,seq:2});
    const ammo=await event<Snapshot&{players:{id:string;weapons:{ar:{ammo:number}}}[]}>(host,'match:snapshot');
    assert.equal(ammo.players.find(p=>p.id===created.playerId)?.weapons.ar.ammo,29);
    const active=await event<Snapshot>(late,'match:snapshot',data=>data.warden?.state==='IDLE'||data.warden?.state==='CHASE');
    assert.equal(active.warden?.spawnAt,a.warden?.spawnAt);
    const ended=event<{state:string;warden:null}>(guest,'room:state',data=>data.state==='LOBBY');
    await host.emitWithAck('game:end');
    assert.equal((await ended).warden,null);
    const restarted=event<Snapshot>(guest,'match:snapshot',data=>data.roundId===a.roundId+1&&data.warden!==null);
    await host.emitWithAck('game:start');
    assert.ok((await restarted).warden!.spawnAt>a.warden!.spawnAt);
  }finally{
    clients.forEach(socket=>socket.disconnect());
    server.close();
  }
});
