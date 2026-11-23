import { randomUUID, randomBytes } from 'node:crypto';
import { advanceEnvironment } from '../../shared/dayNight.js';
import { pathToFileURL } from 'node:url';
import { resolveShot, aimDirection, KillTracker, type ConfirmedHit, type Combatant, type PlannedHit } from '../../shared/combat.js';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { groundHeight, arenaWorld, staticArenaWorld, stepPlayer, type SimInput } from '../../shared/arena.js';
import { chooseRespawnPoint, chooseWeaponPoint, initialWeaponPoints, type SpawnPoint } from '../../shared/spawns.js';
import { WEAPON_IDS, WEAPON_SPECS, weaponDamageMultiplier, createWeaponStates, collectWeapon, clearWeaponBoosts, refillWeapons, advanceWeaponReload, type WeaponState, type WeaponId } from '../../shared/weapons.js';
import { MULTIPLAYER_PROTOCOL_VERSION, isCurrentRound, type RoomNotice } from '../../shared/protocol.js';
import { SCORE_TARGET, ROUND_DURATION_MS, initialBounty, settleBountyDeath, settleBountyKill, finalStandings, type BountyState, type FinalStanding, type EndReason } from '../../shared/bounty.js';

import { createWardenRound, damageWarden, stepWarden, suspendWarden, wardenSpawnWarning, type WardenRound } from './voidWarden.js';
import { VOID_WARDEN, VOID_BLESSING, WARDEN_ID, playerMoveScale, wardenCanBeHit, wardenGrowth, type WardenAttackKind, type WardenNotice, type WardenPoint, type WardenSnapshot } from '../../shared/voidWarden.js';
import { navigationGraph } from '../../shared/navigation.js';
import { SimulationClock, advanceRoomClock } from './SimulationClock.js';
import { monitorEventLoopDelay } from 'node:perf_hooks';
import { MovementQueue } from './MovementQueue.js';
import { simulateMovement, type MovementCommand } from '../../shared/movement.js';
import { PerformanceMetrics } from '../../shared/performanceMetrics.js';
import { NavigationBudget } from '../../shared/navigationBudget.js';

type Input = SimInput & { roundId?:number; seq:number; clientTime:number; reload?:boolean; yaw:number; pitch:number };
type BurnState = { attackerId:string; nextTick:number; expiresAt:number; damage:number } | null;
type Player = BountyState & {
  blessingUntil?:number; protectUntil?:number; lastFireSeq?:number;
  id:string; name:string; avatar:string; color:number;
  socketId?:string; resumeToken:string; disconnectedUntil?:number;
  x:number; y:number; z:number; yaw:number; pitch:number; velocityY:number; jumpsUsed:number; supportId:number|null; aiming:boolean; sprinting:boolean;
  hp:number; alive:boolean; kills:number; deaths:number;
  activeWeapon:WeaponId; ownedWeapons:WeaponId[]; weapons:WeaponState;
  life:number; lastShot:number; lastReceivedSeq:number; lastProcessedSeq:number; input:Input; slowUntil:number; burn:BurnState;
  movement?:MovementQueue;
};
type Pickup = { id:WeaponId; x:number; y:number; z:number; available:boolean; respawnAt:number };
type History = { at:number; simulationTime:number; warden?:WardenSnapshot|null; destroyed?:ReadonlySet<string>; players:Map<string,{x:number;y:number;z:number;alive:boolean;yaw:number;life:number}> };
type Room = {
  environmentTime:number; code:string; host:string; roundId:number; state:'LOBBY'|'PLAYING'|'GAME_OVER';
  players:Map<string,Player>; pickups:Pickup[]; history:History[];
  winner?:string; winnerId?:string; winnerTitle?:string; shotSequence:number; killTracker:KillTracker; returnAt?:number; tick:number; lastStep:number; wheelEpoch:number;
  reconnectTimers:Map<string,NodeJS.Timeout>; lobbyReason?:string;
  notices?:RoomNotice[];
  endsAt?:number; winnerIds?:string[]; endReason?:EndReason; finalStandings?:FinalStanding[];
  respawnTimers:Map<string,NodeJS.Timeout>; gameOverTimer?:NodeJS.Timeout;
  warden?:WardenRound;
  metrics?:PerformanceMetrics;
};

const chars='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const colors=[0xff4e7a,0x36d8c4,0xf7ba4b,0xa777ff,0x50a6ff,0xff6b37,0x37caff,0x92e34f];
const avatars=['虎','狐','熊','蛙','獅','狼','兔','貓'];
const previousSpawns=new Map<string,SpawnPoint>();
const now=()=>Date.now();
const blankInput=():Input=>({seq:0,clientTime:0,moveX:0,moveY:0,lookX:0,lookY:0,jump:false,reload:false,sprint:false,aim:false,yaw:0,pitch:0});
const createWeapons=createWeaponStates;
function createPickups(players:Player[]=[]):Pickup[]{const pickups:Pickup[]=[];for(const id of WEAPON_IDS){const point=chooseWeaponPoint(players.map(p=>({...p,y:p.y-1.65})),pickups,undefined,Math.random,initialWeaponPoints(id));if(!point)throw new Error('No legal weapon candidates');pickups.push({id,...point,available:true,respawnAt:0});}return pickups;}

function roomCode(rooms:Map<string,Room>):string{let value='';while(value.length<6)value+=chars[Math.floor(Math.random()*chars.length)];return rooms.has(value)?roomCode(rooms):value;}
function publicPlayer(p:Player){const {movement,input,lastShot,burn,lastReceivedSeq,lastProcessedSeq,socketId,resumeToken,consecutiveDeaths,...safe}=p;void movement;void resumeToken;void consecutiveDeaths;return{...safe,connected:!!socketId,burnUntil:burn?.expiresAt??0};}
function roomState(room:Room){return{protocolVersion:MULTIPLAYER_PROTOCOL_VERSION,code:room.code,host:room.host,roundId:room.roundId,state:room.state,lobbyReason:room.lobbyReason,winner:room.winner,winnerId:room.winnerId,winnerTitle:room.winnerTitle,winnerIds:room.winnerIds,endReason:room.endReason,finalStandings:room.finalStandings,scoreTarget:SCORE_TARGET,endsAt:room.endsAt,returnAt:room.returnAt,serverTime:now(),environmentTime:room.environmentTime,notices:room.notices??[],players:[...room.players.values()].map(publicPlayer),pickups:room.pickups,warden:room.warden?.boss??null,wardenWarning:wardenSpawnWarning(room.warden,room.lastStep),destroyedBuildingParts:[...(room.warden?.destroyed??[])]};}
function announceConnection(io:Server,room:Room,player:Player,kind:RoomNotice['kind']){
  const notice:RoomNotice={id:randomUUID(),code:room.code,playerId:player.id,name:player.name,kind,at:now()};
  room.notices=[...(room.notices??[]),notice].slice(-20);
  io.to(room.code).emit('room:notice',notice);
}
function emitRoom(io:Server,room:Room){io.to(room.code).emit('room:state',roomState(room));}
function emitSnapshot(io:Server,room:Room){const started=performance.now();io.to(room.code).emit('match:snapshot',{scoreTarget:SCORE_TARGET,endsAt:room.endsAt,environmentTime:room.environmentTime,roundId:room.roundId,simulationTime:(room.lastStep-room.wheelEpoch)/1000,serverTime:room.lastStep,tick:room.tick,players:[...room.players.values()].map(p=>({...publicPlayer(p),ack:p.lastProcessedSeq,inputReset:p.movement?.resetId??0,discardedThrough:p.movement?.discardedThrough??0})),pickups:room.pickups,warden:room.warden?.boss??null,wardenWarning:wardenSpawnWarning(room.warden,room.lastStep),destroyedBuildingParts:[...(room.warden?.destroyed??[])]});room.metrics?.record('snapshotEmit_ms',performance.now()-started);}
function clearRespawns(room:Room){for(const timer of room.respawnTimers.values())clearTimeout(timer);room.respawnTimers.clear();}
function clearGameOverTimer(room:Room){if(room.gameOverTimer)clearTimeout(room.gameOverTimer);room.gameOverTimer=undefined;room.returnAt=undefined;}
function clearWarden(room:Room){room.warden=undefined;for(const player of room.players.values())player.blessingUntil=0;}
function returnToLobby(io:Server,room:Room,reason?:string){room.lobbyReason=reason;clearGameOverTimer(room);clearRespawns(room);clearWarden(room);room.state='LOBBY';clearResult(room);emitRoom(io,room);}
function clearResult(room:Room){
  room.winner=undefined;room.winnerId=undefined;room.winnerTitle=undefined;
  room.winnerIds=undefined;room.endReason=undefined;room.finalStandings=undefined;room.endsAt=undefined;
}
export function finishRound(io:Server,room:Room,reason:'target'|'timeout',title?:string){
  if(room.state!=='PLAYING')return;
  clearRespawns(room);clearGameOverTimer(room);
  clearWarden(room);
  room.finalStandings=finalStandings([...room.players.values()]);
  const top=room.finalStandings[0]?.score??0;
  room.winnerIds=top>0?room.finalStandings.filter(p=>p.rank===1).map(p=>p.id):[];
  room.endReason=top===0?'draw':reason;
  const winner=room.winnerIds.length===1?room.finalStandings.find(p=>p.id===room.winnerIds![0]):undefined;
  room.winner=winner?.name;room.winnerId=winner?.id;room.winnerTitle=reason==='target'?title:undefined;
  room.state='GAME_OVER';room.returnAt=now()+10000;
  room.gameOverTimer=setTimeout(()=>returnToLobby(io,room),10000);
  emitRoom(io,room);
}
function expireRound(io:Server,room:Room,at=now()){
  if(room.endsAt!==undefined&&at>=room.endsAt){finishRound(io,room,'timeout');return true;}
  return false;
}
export function beginRound(io:Server,room:Room,wardenSpawnDelayMs?:number){clearGameOverTimer(room);clearRespawns(room);room.state='PLAYING';clearResult(room);room.endsAt=now()+ROUND_DURATION_MS;room.lobbyReason=undefined;room.roundId++;room.tick=0;room.winner=undefined;room.winnerId=undefined;room.history=[];room.killTracker.reset();room.winnerTitle=undefined;room.lastStep=now();room.wheelEpoch=room.lastStep;room.warden=createWardenRound(room.lastStep,wardenSpawnDelayMs);for(const p of room.players.values())p.alive=false;for(const p of room.players.values())resetPlayer(p,room,true);room.pickups=createPickups([...room.players.values()]);emitRoom(io,room);}

function resetPlayer(p:Player,room:Room,newRound=false){
  const spawn=chooseRespawnPoint([...room.players.values()].filter(other=>other.id!==p.id),previousSpawns.get(p.id));
  previousSpawns.set(p.id,spawn);
  p.life=(p.life??0)+1;
  if(newRound)p.movement=new MovementQueue();else p.movement?.clear();
  Object.assign(p,{x:spawn[0],y:groundHeight(...spawn)+1.65,z:spawn[1],yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,supportId:null,aiming:false,sprinting:false,lastShot:0,blessingUntil:0,protectUntil:now()+VOID_WARDEN.respawnProtectionMs,slowUntil:0,burn:null,input:blankInput()});
  if(newRound)p.weapons=createWeapons();else refillWeapons(p.weapons);
  if(newRound){p.lastReceivedSeq=0;p.lastProcessedSeq=0;p.lastFireSeq=0;p.activeWeapon='ar';p.ownedWeapons=['ar'];p.kills=0;p.deaths=0;Object.assign(p,initialBounty());}
}
function historicalPlayers(room:Room,clientTime:number){const target=now()-Math.max(0,Math.min(250,now()-clientTime));let frame=room.history[0];for(const sample of room.history)if(sample.at<=target)frame=sample;return frame;}
export function kill(io:Server,room:Room,attacker:Player,victim:Player,weapon:WeaponId,headshot:boolean,at=now()){
  if(room.state!=='PLAYING'||attacker.id===victim.id||!victim.alive||expireRound(io,room,at))return;
  const settlement=settleBountyKill(attacker,victim);Object.assign(attacker,settlement.attacker);Object.assign(victim,settlement.victim);
  markDeath(victim);attacker.kills++;
  const event=room.killTracker.record(attacker,victim,weapon,headshot,at);
  io.to(room.code).emit('match:kill',{...event,roundId:room.roundId,scoreAwarded:settlement.scoreAwarded,attackerBounty:attacker.bounty,victimBounty:victim.bounty}); // Must precede the terminal room state.
  if(attacker.score>=SCORE_TARGET){finishRound(io,room,'target',event.title);return;}
  scheduleRespawn(io,room,victim);
}
function markDeath(victim:Player){
  victim.movement?.clear();
  clearWeaponBoosts(victim.weapons);victim.alive=false;victim.aiming=false;victim.sprinting=false;victim.supportId=null;victim.input=blankInput();victim.hp=0;victim.burn=null;victim.deaths++;victim.blessingUntil=0;
}
function scheduleRespawn(io:Server,room:Room,victim:Player){
  const previousTimer=room.respawnTimers.get(victim.id);if(previousTimer)clearTimeout(previousTimer);
  const timer=setTimeout(()=>{room.respawnTimers.delete(victim.id);if(room.state==='PLAYING'&&!victim.alive&&!expireRound(io,room)){resetPlayer(victim,room);emitRoom(io,room);}},3000);
  room.respawnTimers.set(victim.id,timer);
}
function wardenNotice(io:Server,room:Room,notice:WardenNotice){
  io.to(room.code).emit('match:warden',{...notice,roundId:room.roundId});
}
export function applyWardenDamage(io:Server,room:Room,victim:Player,amount:number,from:WardenPoint,attack:WardenAttackKind){
  const at=now();
  if(room.state!=='PLAYING'||expireRound(io,room,at)||!victim.alive||!victim.socketId||(victim.protectUntil??0)>at||room.warden?.boss?.ownerId===victim.id)return;
  const boss=room.warden?.boss;
  if(!boss||boss.state==='DEFEATED'||boss.state==='DESPAWN')return;
  const damage=Math.min(victim.hp,amount);
  victim.hp-=damage;
  io.to(victim.socketId).emit('match:damage',{roundId:room.roundId,life:victim.life,serverTime:at,from,hp:victim.hp,damage,name:VOID_WARDEN.name,wardenAttack:attack});
  if(victim.hp>0)return;
  const award=victim.bounty;
  Object.assign(victim,settleBountyDeath(victim));
  markDeath(victim);room.killTracker.death(victim.id);
  boss.scale=wardenGrowth(++boss.kills);
  const owner=boss.ownerId?room.players.get(boss.ownerId):undefined;
  if(owner)owner.score+=award;
  else if(!boss.ownerId)boss.heldBounty+=award;
  wardenNotice(io,room,{kind:'player-slain',name:victim.name,scoreAwarded:award,ownerName:owner?.name});
  if(owner&&owner.score>=SCORE_TARGET){finishRound(io,room,'target');return;}
  scheduleRespawn(io,room,victim);emitRoom(io,room);
}
function applyDamage(io:Server,room:Room,attacker:Player,victim:Player,hit:PlannedHit,weapon:WeaponId):ConfirmedHit|undefined{
  const at=now();
  if(!victim.alive||hit.damage<=0||room.state!=='PLAYING'||expireRound(io,room,at))return;
  const damage=Math.min(victim.hp,hit.damage);victim.hp-=damage;
  io.to(victim.socketId??`offline:${victim.id}`).emit('match:damage',{roundId:room.roundId,life:victim.life,serverTime:at,from:{x:attacker.x,z:attacker.z},hp:victim.hp,damage,name:attacker.name,weapon});
  const killed=victim.hp===0;if(killed)kill(io,room,attacker,victim,weapon,hit.headshot,at);
  return{...hit,damage,killed};
}
export function shoot(io:Server,room:Room,shooter:Player,clientTime:number){
  const started=room.metrics?performance.now():0;
  try{
  if(expireRound(io,room))return;
  const time=now(),id=shooter.activeWeapon,spec=WEAPON_SPECS[id],state=shooter.weapons[id];
  if(!shooter.alive||state.reloadUntil>time||state.ammo<=0||time-shooter.lastShot<spec.fireDelay*1000)return;
  shooter.lastShot=time;state.ammo--;const base=aimDirection(shooter.input.yaw,shooter.input.pitch),history=historicalPlayers(room,clientTime);
  const targets:Combatant[]=[...room.players.values()].filter(p=>p.id!==shooter.id&&p.alive).map(p=>{const old=history?.players.get(p.id);return old&&old.life===p.life?{...old,id:p.id}:p;});
  const boss=room.warden?.boss,rewound=history?history.warden:boss;
  if(boss&&rewound&&rewound.ownerId===boss.ownerId&&wardenCanBeHit(boss,shooter.id)&&wardenCanBeHit(rewound,shooter.id))
    targets.push({id:WARDEN_ID,x:rewound.x,y:rewound.y+rewound.air+1.65,z:rewound.z,yaw:rewound.yaw,alive:true,kind:'warden',scale:rewound.scale});
  const multiplier=(shooter.blessingUntil??0)>time?VOID_BLESSING.damage:1;
  const pastShooter=history?.players.get(shooter.id),shotPosition=pastShooter?.life===shooter.life?pastShooter:shooter;
  const origin:[number,number,number]=[shotPosition.x,shotPosition.y,shotPosition.z],result=resolveShot(id,origin,base,targets,Math.random,arenaWorld(history?.simulationTime??(room.lastStep-room.wheelEpoch)/1000,history?history.destroyed:room.warden?.destroyed),shooter.aiming,state.level),eventId=`${room.code}:shot:${++room.shotSequence}`;
  io.to(room.code).emit('match:shot',{roundId:room.roundId,eventId,id:shooter.id,origin,dir:base,weapon:id,...result});
  const confirmed:ConfirmedHit[]=[];
  let wardenVictory=false;
  for(const raw of result.hits){
    const hit={...raw,damage:Math.round(raw.damage*multiplier)};
    if(hit.targetId===WARDEN_ID&&room.warden){
      const hitBoss=damageWarden(room.warden,shooter,hit.damage,time);
      if(!hitBoss)continue;
      confirmed.push({...hit,damage:hitBoss.damage,killed:hitBoss.killed});
      if(hitBoss.recruited){
        const scoreAwarded=hitBoss.scoreAwarded??0;
        shooter.score+=scoreAwarded;
        shooter.blessingUntil=time+VOID_BLESSING.durationMs;
        wardenNotice(io,room,{kind:'recruited',name:shooter.name,scoreAwarded});
        if(shooter.score>=SCORE_TARGET){wardenVictory=true;break;}
      }
      else if(hitBoss.killed)wardenNotice(io,room,{kind:'destroyed',name:shooter.name});
      continue;
    }
    const victim=room.players.get(hit.targetId);if(!victim)continue;const actual=applyDamage(io,room,shooter,victim,hit,id);if(!actual)continue;confirmed.push(actual);
    if(victim.alive&&id==='ice')victim.slowUntil=time+(spec.slow??0)*1000;
    if(victim.alive&&id==='flame')victim.burn={damage:Math.round(4*weaponDamageMultiplier(state.level)),attackerId:shooter.id,nextTick:victim.burn?.nextTick??time+250,expiresAt:time+(spec.burn??0)*1000};
  }
  advanceWeaponReload(id,state,time);
  if(state.reloadUntil){shooter.aiming=false;shooter.input.aim=false;}
  if(confirmed.length)io.to(shooter.socketId??`offline:${shooter.id}`).emit('match:hit',{roundId:room.roundId,eventId,weapon:id,hits:confirmed});
  if(wardenVictory)finishRound(io,room,'target');
  else if(confirmed.some(h=>h.killed)&&room.state==='PLAYING')emitRoom(io,room);
  }finally{room.metrics?.record('shotCPU_ms',performance.now()-started);}
}
export function step(io:Server,room:Room,dt:number,navigationBudget?:NavigationBudget){
  if(room.state!=='PLAYING'||expireRound(io,room))return;const time=now(),tickStarted=performance.now();room.tick++;room.environmentTime=advanceEnvironment(room.environmentTime,dt,true);
  for(const p of room.players.values()){
    if(!p.alive)continue;
    const command=p.movement?.take(time);
    const inputStats=p.movement?.drainStats();
    if(inputStats){room.metrics?.record('inputDiscards',inputStats.discarded);room.metrics?.record('inputResets',inputStats.resets);}
    // Empty queues advance gravity/platforms, never repeat acknowledged movement.
    const control=command?{...command,lookX:0,lookY:0}:p.movement
      ?{...blankInput(),seq:p.lastProcessedSeq,clientTime:p.input.clientTime,yaw:p.yaw,pitch:p.pitch,aim:p.input.aim}:p.input;
    if(command?.weapon&&p.ownedWeapons.includes(command.weapon)){
      p.activeWeapon=command.weapon;p.aiming=false;control.aim=false;
    }
    p.input=control;
    for(const id of WEAPON_IDS)advanceWeaponReload(id,p.weapons[id],time,id===p.activeWeapon&&!!control.reload);
    const state=p.weapons[p.activeWeapon];
    p.yaw=control.yaw;p.pitch=control.pitch;p.sprinting=!!control.sprint;
    if(control.reload||state.reloadUntil>time||p.activeWeapon!=='sniper')control.aim=false;
    p.aiming=!!control.aim;
    const playerStarted=performance.now();
    if(p.movement)simulateMovement(p,control as MovementCommand,staticArenaWorld(room.warden?.destroyed),
      (room.lastStep-room.wheelEpoch)/1000-dt,room.lastStep,p.slowUntil,p.blessingUntil??0);
    else stepPlayer(p,{...control,lookX:0,lookY:0},dt,staticArenaWorld(room.warden?.destroyed),
      playerMoveScale(p.slowUntil,p.blessingUntil??0,time),(room.lastStep-room.wheelEpoch)/1000-dt);
    room.metrics?.record('playerPhysics_ms',performance.now()-playerStarted);
    if(command){
      p.movement!.markProcessed(command);p.lastProcessedSeq=command.seq;
      if(command.fire){p.lastFireSeq=command.seq;shoot(io,room,p,command.clientTime);}
      if(room.state!=='PLAYING')return;
    }
    room.metrics?.record('inputQueue',p.movement?.length??0);
    for(const pickup of room.pickups)if(pickup.available&&Math.hypot(p.x-pickup.x,p.y-(pickup.y+.9),p.z-pickup.z)<2){
      const result=collectWeapon(pickup.id,p.weapons[pickup.id],p.ownedWeapons.includes(pickup.id),time);
      if(!result)continue;
      if(result.kind==='unlock')p.ownedWeapons.push(pickup.id);
      pickup.available=false;pickup.respawnAt=time+30000;
      if(p.socketId)io.to(p.socketId).emit('match:pickup',{...result,roundId:room.roundId,eventId:randomUUID()});
      emitRoom(io,room);
    }
    if(p.burn){while(p.burn&&p.burn.nextTick<=time&&p.burn.nextTick<=p.burn.expiresAt){const attacker=room.players.get(p.burn.attackerId);p.burn.nextTick+=250;if(attacker){const hit=applyDamage(io,room,attacker,p,{targetId:p.id,damage:Math.round((p.burn.damage??4)*((attacker.blessingUntil??0)>time?VOID_BLESSING.damage:1)),headshot:false,position:[p.x,p.y-.4,p.z]},'flame');if(hit)io.to(attacker.socketId??`offline:${attacker.id}`).emit('match:hit',{roundId:room.roundId,eventId:`${room.code}:burn:${++room.shotSequence}`,weapon:'flame',hits:[hit]});if(hit?.killed)emitRoom(io,room);if(room.state!=='PLAYING')return;}}if(p.burn&&time>=p.burn.expiresAt)p.burn=null;}
    p.input={...p.input,lookX:0,lookY:0,jump:false,reload:false};
  }
  for(const pickup of room.pickups)if(!pickup.available&&pickup.respawnAt<=time){const point=chooseWeaponPoint([...room.players.values()].map(p=>({...p,y:p.y-1.65})),room.pickups.filter(other=>other!==pickup&&other.available),pickup);if(!point){pickup.respawnAt=time+100;continue;}Object.assign(pickup,point);pickup.available=true;emitRoom(io,room);}
  const wardenStarted=performance.now();
  if(room.warden)stepWarden(room.warden,room.lastStep,dt,(room.lastStep-room.wheelEpoch)/1000,room.players.values(),(victim,damage,from,attack)=>{
    const player=room.players.get(victim.id);if(player)applyWardenDamage(io,room,player,damage,from,attack);
  },navigationBudget,!!room.metrics);
  room.metrics?.record('warden_ms',performance.now()-wardenStarted);
  if(room.warden?.timings){room.metrics?.record('wardenSearch_ms',room.warden.timings.search);room.metrics?.record('wardenCollision_ms',room.warden.timings.collision);}
  if(room.state!=='PLAYING')return;
  room.history.push({at:room.lastStep,simulationTime:(room.lastStep-room.wheelEpoch)/1000,warden:room.warden?.boss?{...room.warden.boss}:null,destroyed:room.warden?.destroyed,players:new Map([...room.players].map(([id,p])=>[id,{x:p.x,y:p.y,z:p.z,alive:p.alive,yaw:p.yaw,life:p.life}]))});while(room.history[0]?.at<time-300)room.history.shift();
  if(room.tick%3===0)emitSnapshot(io,room);
  room.metrics?.record('roomTick_ms',performance.now()-tickStarted);
}
function clearRoom(room:Room){clearRespawns(room);clearGameOverTimer(room);clearWarden(room);for(const timer of room.reconnectTimers.values())clearTimeout(timer);room.reconnectTimers.clear();for(const id of room.players.keys())previousSpawns.delete(id);}

export const RECONNECT_GRACE_MS=60_000;

// Rotate priority so later rooms are not starved by the shared search deadline.
export function createRoomStepper(io:Server,rooms:Map<string,Room>,metrics?:PerformanceMetrics){
  let cursor=0;
  return (dt:number,at:number,budget:NavigationBudget)=>{
    const active=[...rooms.values()].filter(room=>room.state==='PLAYING');
    const started=performance.now();
    for(let i=0;i<active.length;i++){
      const room=active[(cursor+i)%active.length];room.metrics=metrics;
      if(advanceRoomClock(room,at,dt))step(io,room,dt,budget);
    }
    cursor=active.length?(cursor+1)%active.length:0;
    metrics?.record('allRoomsTick_ms',performance.now()-started);
  };
}

export function createGameServer(options:{reconnectGraceMs?:number;wardenSpawnDelayMs?:number;diagnostics?:boolean}={}){
  // Build immutable map connectivity before accepting players. The first Boss
  // route must not compile the entire navigation graph inside the room tick.
  navigationGraph();navigationGraph(true);
  const graceMs=options.reconnectGraceMs??RECONNECT_GRACE_MS;
  const rooms=new Map<string,Room>();
  let closing=false;
  const app=express(),http=createServer(app),io=new Server(http,{cors:{origin:process.env.CORS_ORIGIN||'*',methods:['GET','POST']}});
  const selectHost=(room:Room)=>{
    if(!room.players.get(room.host)?.socketId)room.host=[...room.players.values()].find(p=>p.socketId)?.id??'';
  };
  const removePlayer=(room:Room,id:string)=>{
    const respawn=room.respawnTimers.get(id),reconnect=room.reconnectTimers.get(id);
    if(respawn)clearTimeout(respawn);if(reconnect)clearTimeout(reconnect);
    room.respawnTimers.delete(id);room.reconnectTimers.delete(id);previousSpawns.delete(id);room.killTracker.remove(id);suspendWarden(room.warden,id,now(),true);room.players.delete(id);
    if(!room.players.size){clearRoom(room);rooms.delete(room.code);}else{selectHost(room);emitRoom(io,room);}
  };
  app.get('/health',(_,res)=>res.json({ok:true,rooms:rooms.size,protocolVersion:MULTIPLAYER_PROTOCOL_VERSION,revision:process.env.RENDER_GIT_COMMIT??null}));
  io.on('connection',socket=>{
    let room:Room|undefined,playerId:string|undefined;
    const currentPlayer=()=>{const p=playerId?room?.players.get(playerId):undefined;return p?.socketId===socket.id?p:undefined;};
    type Reply=(result:Record<string,unknown>)=>void;
    const reply=(cb:unknown,result:Record<string,unknown>)=>{if(typeof cb==='function')(cb as Reply)(result);};
    const validName=(name:unknown):name is string=>typeof name==='string'&&name.trim().length>=2&&name.trim().length<=16;
    const credentials=(p:Player)=>({code:room!.code,playerId:p.id,resumeToken:p.resumeToken,lastReceivedSeq:p.lastReceivedSeq,room:roomState(room!)});
    const join=(target:Room,name:string)=>{
      const index=target.players.size,p:Player={id:randomUUID(),socketId:socket.id,resumeToken:randomBytes(32).toString('hex'),name:name.trim(),avatar:avatars[index%avatars.length],color:colors[index%colors.length],x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,supportId:null,aiming:false,sprinting:false,kills:0,deaths:0,...initialBounty(),activeWeapon:'ar',ownedWeapons:['ar'],weapons:createWeapons(),life:0,lastShot:0,lastReceivedSeq:0,lastProcessedSeq:0,input:blankInput(),slowUntil:0,burn:null};
      room=target;playerId=p.id;resetPlayer(p,target,true);target.players.set(p.id,p);selectHost(target);socket.join(target.code);emitRoom(io,target);return p;
    };
    socket.on('room:create',(name:unknown,cb:unknown)=>{
      if(currentPlayer())return reply(cb,{error:'ALREADY_IN_ROOM'});
      if(!validName(name))return reply(cb,{error:'INVALID_NICKNAME'});
      const id=roomCode(rooms);room={environmentTime:0,code:id,host:'',roundId:0,state:'LOBBY',players:new Map,pickups:createPickups(),history:[],tick:0,lastStep:now(),wheelEpoch:now(),respawnTimers:new Map,reconnectTimers:new Map,shotSequence:0,killTracker:new KillTracker(id)};
      rooms.set(id,room);reply(cb,credentials(join(room,name)));
    });
    socket.on('room:join',(data:{code?:unknown;name?:unknown}|null,cb:unknown)=>{
      if(currentPlayer())return reply(cb,{error:'ALREADY_IN_ROOM'});
      if(!validName(data?.name))return reply(cb,{error:'INVALID_NICKNAME'});
      if(typeof data?.code!=='string'||! /^[A-Z2-9]{6}$/.test(data.code.trim().toUpperCase()))return reply(cb,{error:'INVALID_ROOM_CODE'});
      const target=rooms.get(data.code.trim().toUpperCase());
      if(!target)return reply(cb,{error:'ROOM_NOT_FOUND'});
      if(target.players.size>=8)return reply(cb,{error:'ROOM_FULL'});
      if(target.state==='GAME_OVER')return reply(cb,{error:'ROUND_ENDING'});
      reply(cb,credentials(join(target,data.name)));
    });
    socket.on('room:resume',(data:{code?:string;playerId?:string;resumeToken?:string}|null,cb:unknown)=>{
      if(currentPlayer())return reply(cb,{error:'ALREADY_IN_ROOM'});
      const target=typeof data?.code==='string'?rooms.get(data.code):undefined;
      const p=typeof data?.playerId==='string'?target?.players.get(data.playerId):undefined;
      if(!target||!p||typeof data?.resumeToken!=='string'||p.resumeToken!==data.resumeToken)return reply(cb,{error:'SESSION_EXPIRED'});
      if(p.disconnectedUntil&&p.disconnectedUntil<=now()){removePlayer(target,p.id);return reply(cb,{error:'SESSION_EXPIRED'});}
      const previousSocket=p.socketId?io.sockets.sockets.get(p.socketId):undefined;
      p.movement?.clear();p.input={...blankInput(),yaw:p.yaw,pitch:p.pitch};
      p.socketId=socket.id;p.disconnectedUntil=undefined;
      const timer=target.reconnectTimers.get(p.id);if(timer)clearTimeout(timer);target.reconnectTimers.delete(p.id);
      room=target;playerId=p.id;p.input={...blankInput(),yaw:p.yaw,pitch:p.pitch};p.aiming=false;p.sprinting=false;
      if(previousSocket){previousSocket.emit('room:replaced');previousSocket.disconnect(true);}
      socket.join(target.code);selectHost(target);announceConnection(io,target,p,'reconnected');emitRoom(io,target);reply(cb,credentials(p));
    });
    socket.on('room:leave',(cb:unknown)=>{
      const p=currentPlayer();if(room&&p){socket.leave(room.code);removePlayer(room,p.id);}room=undefined;playerId=undefined;reply(cb,{ok:true});
    });
    const hostAction=(action:'start'|'again'|'lobby'|'end',cb:unknown)=>{
      if(!room||!currentPlayer()||room.host!==playerId)return reply(cb,{error:'HOST_ONLY'});
      if(action==='start'&&(room.state!=='LOBBY'||[...room.players.values()].filter(p=>p.socketId).length<2))return reply(cb,{error:'NOT_READY'});
      if((action==='again'||action==='lobby')&&room.state!=='GAME_OVER'||action==='end'&&room.state!=='PLAYING')return reply(cb,{error:'INVALID_STATE'});
      if(action==='start'||action==='again')beginRound(io,room,options.wardenSpawnDelayMs);else returnToLobby(io,room,action==='end'?'房主已提前結束本局':undefined);
      reply(cb,{ok:true});
    };
    socket.on('game:start',(cb:unknown)=>hostAction('start',cb));
    socket.on('game:again',(cb:unknown)=>hostAction('again',cb));
    socket.on('game:lobby',(cb:unknown)=>hostAction('lobby',cb));
    socket.on('game:end',(cb:unknown)=>hostAction('end',cb));
    socket.on('match:input',(input:MovementCommand)=>{
      const p=currentPlayer();
      if(!p||!p.alive||room?.state!=='PLAYING'||!isCurrentRound(input,room.roundId)||
        input.life!==undefined&&input.life!==p.life||!Number.isSafeInteger(input?.seq)||input.seq<=p.lastReceivedSeq||
        ![input.yaw,input.pitch,input.moveX,input.moveY,input.clientTime].every(Number.isFinite))return;
      p.movement??=new MovementQueue();
      const command:MovementCommand={roundId:room.roundId,life:p.life,seq:input.seq,
        clientTime:Math.max(now()-250,Math.min(now(),input.clientTime)),
        moveX:Math.max(-1,Math.min(1,input.moveX)),moveY:Math.max(-1,Math.min(1,input.moveY)),
        yaw:Math.atan2(Math.sin(input.yaw),Math.cos(input.yaw)),pitch:Math.max(-1.35,Math.min(1.35,input.pitch)),
        jump:input.jump===true,reload:input.reload===true,sprint:input.sprint===true,aim:input.aim===true,
        fire:input.fire===true,reset:input.reset===true,
        weapon:input.weapon&&WEAPON_IDS.includes(input.weapon)?input.weapon:undefined};
      p.movement.enqueue(command,now());p.lastReceivedSeq=command.seq;
    });
    // Armory/tools can attach actions to an unprocessed command. Late fire is
    // accepted only for the current processed pose, once per sequence.
    socket.on('match:weapon',(message:{id:WeaponId;roundId:number})=>{
      const p=currentPlayer();if(!room||!p?.alive||room.state!=='PLAYING'||!isCurrentRound(message,room.roundId))return;
      const id=message.id;if(!WEAPON_IDS.includes(id)||!p.ownedWeapons.includes(id))return;
      const command=p.movement?.latest();
      if(command)command.weapon=id;
      else {p.activeWeapon=id;p.aiming=false;p.input.aim=false;}
    });
    socket.on('match:fire',(fire:{roundId:number;seq:number})=>{
      const p=currentPlayer();if(!p?.alive||room?.state!=='PLAYING'||!isCurrentRound(fire,room.roundId)||
        !Number.isSafeInteger(fire.seq)||fire.seq<=0||fire.seq<=(p.lastFireSeq??0))return;
      const command=p.movement?.find(fire.seq);
      if(command){command.fire=true;return;}
      if(fire.seq!==p.lastProcessedSeq||fire.seq!==p.input.seq)return;
      p.lastFireSeq=fire.seq;shoot(io,room,p,p.input.clientTime);
    });
    socket.on('net:ping',(cb:unknown)=>{if(typeof cb==='function')cb(now());});
    socket.on('disconnect',()=>{
      if(closing)return;
      const p=currentPlayer();if(!room||!p)return;
      const target=room;p.socketId=undefined;p.disconnectedUntil=now()+graceMs;suspendWarden(target.warden,p.id,now());
      p.movement?.clear();
      p.input={...blankInput(),yaw:p.yaw,pitch:p.pitch};p.aiming=false;p.sprinting=false;
      target.reconnectTimers.set(p.id,setTimeout(()=>removePlayer(target,p.id),graceMs));
      selectHost(target);announceConnection(io,target,p,'disconnected');emitRoom(io,target);
    });
  });
  const diagnostics=options.diagnostics??process.env.CHROMA_DIAGNOSTICS==='1';
  const metrics=diagnostics?new PerformanceMetrics():undefined;
  const loopDelay=diagnostics?monitorEventLoopDelay({resolution:10}):undefined;
  loopDelay?.enable();
  const report=metrics?setInterval(()=>{
    console.log(JSON.stringify({kind:'chroma-performance',at:now(),rooms:rooms.size,metrics:metrics.summary(),
      eventLoopDelay_ms:loopDelay?{p50:loopDelay.percentile(50)/1e6,p95:loopDelay.percentile(95)/1e6,
        p99:loopDelay.percentile(99)/1e6,max:loopDelay.max/1e6}:undefined}));
    metrics.reset();loopDelay?.reset();
  },10_000):undefined;
  report?.unref();
  const clock=new SimulationClock(now()),stepRooms=createRoomStepper(io,rooms,metrics);
  const timer=setInterval(()=>{
    const started=performance.now(),budget=new NavigationBudget();
    const result=clock.advance(now(),(dt,at)=>stepRooms(dt,at,budget));
    metrics?.record('callback_ms',performance.now()-started);
    metrics?.record('catchUpSteps',result.steps);metrics?.record('dropped_ms',result.droppedSeconds*1000);
  },1000/60);
  return{app,http,io,rooms,close:()=>{closing=true;clearInterval(timer);if(report)clearInterval(report);loopDelay?.disable();for(const room of rooms.values())clearRoom(room);rooms.clear();io.close();}};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const game=createGameServer();game.http.listen(Number(process.env.PORT??3001),'0.0.0.0');}
