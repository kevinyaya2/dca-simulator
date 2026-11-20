import test from 'node:test';
import assert from 'node:assert/strict';
import { io as connect, type Socket } from 'socket.io-client';
import { applyWardenDamage, beginRound, createGameServer, kill, shoot } from '../server/src/index.ts';
import { createWardenRound, damageWarden, stepWarden, suspendWarden, wardenSpawnWarning } from '../server/src/voidWarden.ts';
import { VOID_WARDEN, VOID_BLESSING, WARDEN_ATTACKS, WARDEN_ENTRANCE, WARDEN_ID, playerMoveScale, wardenGrowth, wardenOwner, type WardenAttackKind, type WardenSnapshot, type WardenSpawnWarning } from '../shared/voidWarden.ts';
import { projectRadarPoint, wardenRadarMarker } from '../src/chroma-ops/ui/WardenRadar.ts';
import { ARENA_BOXES, arenaBoxesNear, arenaWorld, overlapsBox, rayWallDistance, staticArenaWorld, stepPlayer, supportHeight } from '../shared/arena.ts';
import { KillTracker, resolveShot } from '../shared/combat.ts';
import { initialBounty } from '../shared/bounty.ts';
import { createWeaponStates } from '../shared/weapons.ts';

const dt=1/60;
const target={id:'player',socketId:'player',x:29,y:1.65,z:8,alive:true};

test('the round publishes the Warden location from T-10 until the spawn tick',()=>{
  const round=createWardenRound(1000);
  const before=round.spawnAt-10_000;
  assert.equal(wardenSpawnWarning(round,before-1),null);
  assert.deepEqual(wardenSpawnWarning(round,before),{...VOID_WARDEN.location,spawnAt:round.spawnAt});
  assert.ok(wardenSpawnWarning(round,round.spawnAt-1));
  assert.equal(wardenSpawnWarning(round,round.spawnAt),null);
  assert.equal(wardenSpawnWarning(undefined,before),null);
});

test('the radar switches from the spawn pin to live boss position and removes despawned bosses',()=>{
  const round=createWardenRound(0);
  const warning=wardenSpawnWarning(round,round.spawnAt-5000);
  assert.ok(warning);
  assert.equal(wardenRadarMarker(null,warning,'owner')?.pending,true);
  stepWarden(round,round.spawnAt,dt,0,[]);
  const boss=round.boss!;
  assert.equal(wardenRadarMarker(boss,null,'owner')?.pending,false);
  Object.assign(boss,{x:31,y:-6,z:4,ownerId:'owner'});
  const marker=wardenRadarMarker(boss,null,'owner');
  assert.deepEqual(marker&&[marker.x,marker.y,marker.z],[31,-6,4]);
  assert.notEqual(marker?.color,wardenRadarMarker(boss,null,'rival')?.color);
  assert.deepEqual(projectRadarPoint(150,0,1,0,30),{x:30,y:0,offRadar:true});
  assert.equal(wardenOwner(boss),'owner');
  boss.state='DESPAWN';
  assert.equal(wardenOwner(boss),null);
  assert.equal(wardenRadarMarker(boss,warning,'owner'),null);
});

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
  let pursuitAt=100_000+WARDEN_ENTRANCE.finish;
  stepWarden(round,pursuitAt,dt,96,[target]);
  // A busy server may yield the route search; pursuit must resume after retry.
  for(let i=0;i<180&&round.boss?.state!=='CHASE';i++){
    pursuitAt+=dt*1000;stepWarden(round,pursuitAt,dt,96+(i+1)*dt,[target]);
  }
  assert.equal(boss.state,'CHASE');
  assert.equal(boss.targetId,target.id);
  assert.ok(boss.x>VOID_WARDEN.location.x);
  stepWarden(round,pursuitAt+17,dt,96.017,[{...target,alive:false}]);
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

test('the neutral Warden patrols and prioritizes the latest distant shooter',()=>{
  const {round,boss,at}=nextBoss();
  assert.equal(boss.state,'PATROL');
  assert.equal(boss.targetId,null);
  const east={...target,x:110,z:8};
  const west={...target,id:'far',x:-90,z:8};
  const initial={x:boss.x,y:boss.y,z:boss.z};
  damageWarden(round,east,80,at+1);
  stepWarden(round,at+17,dt,0,[east,west]);
  assert.equal(boss.targetId,east.id);
  let pursuitAt=at+17;
  for(let i=0;i<180&&round.boss?.state!=='CHASE';i++){
    pursuitAt+=dt*1000;stepWarden(round,pursuitAt,dt,0,[east,west]);
  }
  assert.equal(boss.state,'CHASE');
  assert.notDeepEqual({x:boss.x,y:boss.y,z:boss.z},initial);
  damageWarden(round,west,80,pursuitAt+3);
  stepWarden(round,pursuitAt+17,dt,0,[east,west]);
  assert.equal(boss.targetId,west.id);
});

test('a grown slash locks the larger reach when it starts',()=>{
  const melee=nextBoss();
  melee.boss.scale=wardenGrowth(1);
  melee.boss.kills=1;
  const inside={...target,x:12,z:15.8};
  const outside={...target,id:'outside',x:12,z:17.2};
  assert.equal(wardenGrowth(2),1.44);
  const hits:string[]=[];
  stepWarden(melee.round,melee.at+17,dt,0,[inside,outside]);
  assert.equal(melee.boss.attack?.scale,1.2);
  melee.boss.scale=wardenGrowth(3);
  for(let i=2;i<=40;i++){
    stepWarden(melee.round,melee.at+i*dt*1000,dt,i*dt,[inside,outside],player=>hits.push(player.id));
  }
  assert.equal(melee.boss.attack?.kind,'slash');
  assert.deepEqual(hits,[inside.id]);
});

test('an allied Warden seeks attackers only within 120 m of its owner',()=>{
  const {round,boss,at}=nextBoss();
  const owner={...target,id:'owner',x:0,z:-50};
  damageWarden(round,owner,2000,at);
  const joined=at+VOID_WARDEN.surrenderMs;
  stepWarden(round,joined,dt,0,[owner]);
  const outside={...target,id:'outside',x:0,z:71};
  const inside={...target,id:'inside',x:0,z:69};
  damageWarden(round,outside,20,joined+405);
  stepWarden(round,joined+420,dt,0,[owner,outside]);
  assert.equal(boss.targetId,null);
  damageWarden(round,inside,20,joined+430);
  stepWarden(round,joined+440,dt,0,[owner,inside,outside]);
  assert.equal(boss.targetId,inside.id);
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
  assert.equal(boss.state,'PATROL');
  assert.equal(boss.enraged,true);
  damageWarden(round,target,20,when+2000);
  stepWarden(round,when+2017,dt,0,[]);
  assert.equal(boss.state,'PATROL');
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

test('neutral kills grow the Warden, transfer saved bounty once and credit subsequent kills to the owner',()=>{
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
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    assert.equal(a.deaths,1);
    assert.equal(a.bounty,75);
    assert.equal(round.boss!.heldBounty,100);
    assert.equal(round.boss!.scale,1.2);
    Object.assign(a,{alive:true,hp:100});
    b.input.yaw=Math.PI/2;
    shoot(io,room,a,Date.now());
    assert.equal(round.boss?.hp,24);
    shoot(io,room,b,Date.now());
    assert.equal(round.boss?.ownerId,b.id);
    assert.equal(round.boss?.heldBounty,0);
    assert.equal(round.boss?.scale,1.2);
    assert.equal(b.score,100);
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
    stepWarden(round,round.boss!.stateAt+VOID_WARDEN.surrenderMs+1,dt,0,[a,b]);
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    assert.equal(a.deaths,2);
    assert.equal(b.score,175);
    assert.equal(round.boss?.scale,1.44);
    assert.equal(b.kills,0);
    a.alive=true;
    kill(io,room,a,b,'ar',false);
    assert.equal(b.blessingUntil,0);
    assert.equal(round.boss?.ownerId,b.id);
    Object.assign(a,{alive:true,hp:100,protectUntil:0});
    b.score=1490;
    applyWardenDamage(io,room,a,100,VOID_WARDEN.location,'slash');
    assert.equal(room.state,'GAME_OVER');
    assert.equal(room.winnerId,b.id);
    assert.equal(b.kills,0);
    assert.equal(room.warden,undefined);
  }finally{
    for(const timer of room.respawnTimers.values())clearTimeout(timer);
    clearTimeout(room.gameOverTimer);
  }
});

test('a grown Warden opens cover on contact, and removed slabs no longer support players',()=>{
  const {round,boss,at}=nextBoss();
  Object.assign(boss,{x:0,y:0,z:4,kills:1,scale:1.2});
  const shooter={...target,x:0,z:-12};
  damageWarden(round,shooter,26,at);
  const origin={x:0,y:1.5,z:3},direction={x:0,y:0,z:-1};
  assert.ok(rayWallDistance(origin,direction,12,arenaWorld(0))<12);
  for(let i=1;i<=200;i++)stepWarden(round,at+i*dt*1000,dt,0,[shooter]);
  assert.ok(round.destroyed.size>0);
  assert.ok([...round.destroyed].every(id=>id.startsWith('cover:')));
  assert.equal(rayWallDistance(origin,direction,12,arenaWorld(0,round.destroyed)),12);

  const tile=ARENA_BOXES.find(b=>b.breakKey?.startsWith('city:')&&b.maxY===6&&b.minY===5.7)!;
  const x=(tile.minX+tile.maxX)/2,z=(tile.minZ+tile.maxZ)/2;
  const world=staticArenaWorld(new Set([tile.breakKey!]));
  assert.equal(supportHeight(x,z,6.05),6);
  assert.ok(supportHeight(x,z,6.05,world)<6);
  const player={x,y:7.65,z,alive:true,yaw:0,pitch:0,velocityY:0,jumpsUsed:0};
  stepPlayer(player,{moveX:0,moveY:0,lookX:0,lookY:0,jump:false},.2,world);
  assert.ok(player.y<7.65);
});

test('the Warden walks back inside the arena when growth overlaps the edge',()=>{
  const {round,boss,at}=nextBoss();
  Object.assign(boss,{x:149,y:0,z:-48,kills:8,scale:wardenGrowth(8)});
  round.repathAt=0;
  const initialX=boss.x;
  stepWarden(round,at+17,dt,0,[]);
  assert.ok(boss.x<initialX);
  assert.ok(boss.x>initialX-.2,'leaves the boundary by walking');
  for(let i=2;i<=55;i++)stepWarden(round,at+i*dt*1000,dt,0,[]);
  assert.ok(boss.x<150-VOID_WARDEN.radius*boss.scale);
  assert.equal(round.lastFittingScale,boss.scale);
});

test('weapon traces hit the larger Warden hurtbox but respect nearby cover',()=>{
  const warden={id:WARDEN_ID,x:0,y:1.65,z:-8,yaw:0,alive:true,kind:'warden' as const};
  assert.equal(resolveShot('ar',[0,3.4,-3],[0,0,-1],[warden],()=>.5).hits[0]?.targetId,WARDEN_ID);
  assert.equal(resolveShot('ar',[0,1.5,4],[0,0,-1],[warden],()=>.5).hits.length,0);
});

test('the Warden survives the blessing deadline, resumes following, and despawns when its owner leaves',()=>{
  const {round,boss,at}=nextBoss();
  damageWarden(round,target,VOID_WARDEN.maxHp,at);
  stepWarden(round,at+VOID_WARDEN.surrenderMs,dt,0,[target]);
  const offline={...target,socketId:''};
  stepWarden(round,at+2000,dt,0,[offline]);
  assert.equal(boss.state,'WAIT');
  const afterBuff=at+VOID_BLESSING.durationMs+1000;
  stepWarden(round,afterBuff,dt,0,[offline]);
  assert.equal(boss.state,'WAIT');
  stepWarden(round,afterBuff+17,dt,0,[target]);
  assert.equal(boss.state,'FOLLOW');
  assert.equal(boss.ownerId,target.id);
  assert.equal(boss.hp,VOID_WARDEN.alliedHp);
  suspendWarden(round,target.id,afterBuff+34,true);
  assert.equal(boss.state,'DESPAWN');
  stepWarden(round,afterBuff+34+VOID_WARDEN.collapseMs,dt,0,[]);
  assert.equal(round.boss,null);
});

function event<T>(socket:Socket,name:string,accept:(data:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},7000);
    function receive(data:T){if(accept(data)){clearTimeout(timer);socket.off(name,receive);resolve(data);}}
    socket.on(name,receive);
  });
}

type Snapshot={roundId:number;tick:number;warden:WardenSnapshot|null;wardenWarning:WardenSpawnWarning|null};

test('clients agree on spawn time, late joins receive the full entrance, and ending the round clears it',async()=>{
  const server=createGameServer({wardenSpawnDelayMs:600});
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();
  assert.ok(address&&typeof address!=='string');
  const clients=Array.from({length:4},()=>connect(`http://127.0.0.1:${address.port}`,{
    transports:['websocket'],forceNew:true,autoConnect:false,
  }));
  const [host,guest,warningJoin,late]=clients;
  try{
    await Promise.all(clients.map(socket=>{const connected=event(socket,'connect');socket.connect();return connected;}));
    const created=await host.emitWithAck('room:create','Warden Host');
    assert.equal(created.room.warden,null);
    await guest.emitWithAck('room:join',{code:created.code,name:'Warden Guest'});
    const firstWarning=event<Snapshot>(host,'match:snapshot',data=>data.wardenWarning!==null);
    const secondWarning=event<Snapshot>(guest,'match:snapshot',data=>data.wardenWarning!==null);
    const firstSpawn=event<Snapshot>(host,'match:snapshot',data=>data.warden!==null);
    const secondSpawn=event<Snapshot>(guest,'match:snapshot',data=>data.warden!==null);
    await host.emitWithAck('game:start');
    const [warningA,warningB]=await Promise.all([firstWarning,secondWarning]);
    assert.deepEqual(warningA.wardenWarning,warningB.wardenWarning);
    const warned=await warningJoin.emitWithAck('room:join',{code:created.code,name:'Warden Warning'});
    assert.deepEqual(warned.room.wardenWarning,warningA.wardenWarning);
    const [a,b]=await Promise.all([firstSpawn,secondSpawn]);
    assert.equal(a.tick,b.tick);
    assert.deepEqual(a.warden,b.warden);
    assert.equal(a.warden?.state,'SPAWN');
    assert.equal(a.wardenWarning,null);
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
    const active=await event<Snapshot>(late,'match:snapshot',data=>data.warden?.state==='PATROL'||data.warden?.state==='CHASE');
    assert.equal(active.warden?.spawnAt,a.warden?.spawnAt);
    const ended=event<{state:string;warden:null;wardenWarning:null}>(guest,'room:state',data=>data.state==='LOBBY');
    await host.emitWithAck('game:end');
    const lobby=await ended;
    assert.equal(lobby.warden,null);
    assert.equal(lobby.wardenWarning,null);
    const restarted=event<Snapshot>(guest,'match:snapshot',data=>data.roundId===a.roundId+1&&data.warden!==null);
    await host.emitWithAck('game:start');
    assert.ok((await restarted).warden!.spawnAt>a.warden!.spawnAt);
  }finally{
    clients.forEach(socket=>socket.disconnect());
    server.close();
  }
});
