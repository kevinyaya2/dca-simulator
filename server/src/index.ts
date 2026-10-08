import { pathToFileURL } from 'node:url';
import { resolveShot, aimDirection, KillTracker, type ConfirmedHit, type Combatant, type PlannedHit } from '../../shared/combat.js';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { groundHeight, stepPlayer, type SimInput } from '../../shared/arena.js';
import { chooseRespawnPoint, chooseWeaponPoint, type SpawnPoint } from '../../shared/spawns.js';
import { WEAPON_IDS, WEAPON_SPECS, type WeaponId } from '../../shared/weapons.js';
import { MULTIPLAYER_PROTOCOL_VERSION } from '../../shared/protocol.js';

type Input = SimInput & { seq:number; clientTime:number; reload?:boolean; yaw:number; pitch:number };
type WeaponState = Record<WeaponId,{ammo:number;reloadUntil:number}>;
type BurnState = { attackerId:string; nextTick:number; expiresAt:number } | null;
type Player = {
  id:string; name:string; avatar:string; color:number;
  x:number; y:number; z:number; yaw:number; pitch:number; velocityY:number; jumpsUsed:number;
  hp:number; alive:boolean; kills:number; deaths:number;
  activeWeapon:WeaponId; ownedWeapons:WeaponId[]; weapons:WeaponState;
  life:number; lastShot:number; lastReceivedSeq:number; lastProcessedSeq:number; input:Input; slowUntil:number; burn:BurnState;
};
type Pickup = { id:WeaponId; x:number; z:number; available:boolean; respawnAt:number };
type History = { at:number; players:Map<string,{x:number;y:number;z:number;alive:boolean;yaw:number;life:number}> };
type Room = {
  code:string; host:string; state:'LOBBY'|'PLAYING'|'GAME_OVER';
  players:Map<string,Player>; pickups:Pickup[]; history:History[];
  winner?:string; winnerId?:string; winnerTitle?:string; shotSequence:number; killTracker:KillTracker; returnAt?:number; tick:number; lastStep:number;
  respawnTimers:Map<string,NodeJS.Timeout>; gameOverTimer?:NodeJS.Timeout;
};

const chars='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const colors=[0xff4e7a,0x36d8c4,0xf7ba4b,0xa777ff,0x50a6ff,0xff6b37,0x37caff,0x92e34f];
const avatars=['虎','狐','熊','蛙','獅','狼','兔','貓'];
const rooms=new Map<string,Room>();
const previousSpawns=new Map<string,SpawnPoint>();
const now=()=>Date.now();
const blankInput=():Input=>({seq:0,clientTime:0,moveX:0,moveY:0,lookX:0,lookY:0,jump:false,reload:false,yaw:0,pitch:0});
const createWeapons=():WeaponState=>Object.fromEntries(WEAPON_IDS.map(id=>[id,{ammo:WEAPON_SPECS[id].magazine,reloadUntil:0}])) as WeaponState;
function createPickups(players:Player[]=[]):Pickup[]{const pickups:Pickup[]=[];for(const id of WEAPON_IDS.filter(id=>id!=='ar')){const point=chooseWeaponPoint(players,pickups);if(!point)throw new Error('No legal weapon candidates');pickups.push({id,x:point[0],z:point[1],available:true,respawnAt:0});}return pickups;}

function roomCode():string{let value='';while(value.length<6)value+=chars[Math.floor(Math.random()*chars.length)];return rooms.has(value)?roomCode():value;}
function publicPlayer(p:Player){const {input,lastShot,burn,lastReceivedSeq,lastProcessedSeq,...safe}=p;return{...safe,burnUntil:burn?.expiresAt??0};}
function roomState(room:Room){return{protocolVersion:MULTIPLAYER_PROTOCOL_VERSION,code:room.code,host:room.host,state:room.state,winner:room.winner,winnerId:room.winnerId,winnerTitle:room.winnerTitle,returnAt:room.returnAt,serverTime:now(),players:[...room.players.values()].map(publicPlayer),pickups:room.pickups};}
function emitRoom(io:Server,room:Room){io.to(room.code).emit('room:state',roomState(room));}
function emitSnapshot(io:Server,room:Room){io.to(room.code).emit('match:snapshot',{serverTime:room.lastStep,tick:room.tick,players:[...room.players.values()].map(p=>({...publicPlayer(p),ack:p.lastProcessedSeq})),pickups:room.pickups});}
function clearRespawns(room:Room){for(const timer of room.respawnTimers.values())clearTimeout(timer);room.respawnTimers.clear();}
function clearGameOverTimer(room:Room){if(room.gameOverTimer)clearTimeout(room.gameOverTimer);room.gameOverTimer=undefined;room.returnAt=undefined;}
function returnToLobby(io:Server,room:Room){clearGameOverTimer(room);clearRespawns(room);room.state='LOBBY';room.winner=undefined;room.winnerId=undefined;emitRoom(io,room);}
function beginRound(io:Server,room:Room){clearGameOverTimer(room);clearRespawns(room);room.state='PLAYING';room.winner=undefined;room.winnerId=undefined;room.history=[];room.killTracker.reset();room.winnerTitle=undefined;room.lastStep=now();for(const p of room.players.values())p.alive=false;for(const p of room.players.values())resetPlayer(p,room,true);room.pickups=createPickups([...room.players.values()]);emitRoom(io,room);}

function resetPlayer(p:Player,room:Room,newRound=false){
  const spawn=chooseRespawnPoint([...room.players.values()].filter(other=>other.id!==p.id),previousSpawns.get(p.id));
  previousSpawns.set(p.id,spawn);
  p.life=(p.life??0)+1;
  Object.assign(p,{x:spawn[0],y:groundHeight(...spawn)+1.65,z:spawn[1],yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,lastShot:0,slowUntil:0,burn:null,input:blankInput()});
  p.weapons=createWeapons();
  if(newRound){p.activeWeapon='ar';p.ownedWeapons=['ar'];p.kills=0;p.deaths=0;}
}
function historicalPlayers(room:Room,clientTime:number){const target=now()-Math.max(0,Math.min(250,now()-clientTime));let frame=room.history[0];for(const sample of room.history)if(sample.at<=target)frame=sample;return frame?.players;}
function kill(io:Server,room:Room,attacker:Player,victim:Player,weapon:WeaponId,headshot:boolean){
  if(!victim.alive)return;victim.alive=false;victim.hp=0;victim.burn=null;victim.deaths++;attacker.kills++;
  const event=room.killTracker.record(attacker,victim,weapon,headshot,now());
  io.to(room.code).emit('match:kill',event); // Must precede the terminal room state.
  if(attacker.kills>=10){clearRespawns(room);clearGameOverTimer(room);room.state='GAME_OVER';room.winner=attacker.name;room.winnerId=attacker.id;room.winnerTitle=event.title;room.returnAt=now()+10000;room.gameOverTimer=setTimeout(()=>returnToLobby(io,room),10000);return;}
  const timer=setTimeout(()=>{room.respawnTimers.delete(victim.id);if(room.state==='PLAYING'&&!victim.alive){resetPlayer(victim,room);emitRoom(io,room);}},3000);
  room.respawnTimers.set(victim.id,timer);
}
function applyDamage(io:Server,room:Room,attacker:Player,victim:Player,hit:PlannedHit,weapon:WeaponId):ConfirmedHit|undefined{
  if(!victim.alive||hit.damage<=0||room.state!=='PLAYING')return;
  const damage=Math.min(victim.hp,hit.damage);victim.hp-=damage;
  io.to(victim.id).emit('match:damage',{from:{x:attacker.x,z:attacker.z},hp:victim.hp,damage,name:attacker.name,weapon});
  const killed=victim.hp===0;if(killed)kill(io,room,attacker,victim,weapon,hit.headshot);
  return{...hit,damage,killed};
}
function shoot(io:Server,room:Room,shooter:Player,clientTime:number){
  const time=now(),id=shooter.activeWeapon,spec=WEAPON_SPECS[id],state=shooter.weapons[id];
  if(!shooter.alive||state.reloadUntil>time||state.ammo<=0||time-shooter.lastShot<spec.fireDelay*1000)return;
  shooter.lastShot=time;state.ammo--;const base=aimDirection(shooter.input.yaw,shooter.input.pitch),history=historicalPlayers(room,clientTime);
  const targets:Combatant[]=[...room.players.values()].filter(p=>p.id!==shooter.id&&p.alive).map(p=>{const old=history?.get(p.id);return old&&old.life===p.life?{...old,id:p.id}:p;});
  const origin:[number,number,number]=[shooter.x,shooter.y,shooter.z],result=resolveShot(id,origin,base,targets),eventId=`${room.code}:shot:${++room.shotSequence}`;
  io.to(room.code).emit('match:shot',{eventId,id:shooter.id,origin,dir:base,weapon:id,...result});
  const confirmed:ConfirmedHit[]=[];
  for(const hit of result.hits){const victim=room.players.get(hit.targetId);if(!victim)continue;const actual=applyDamage(io,room,shooter,victim,hit,id);if(!actual)continue;confirmed.push(actual);
    if(victim.alive&&id==='ice')victim.slowUntil=time+(spec.slow??0)*1000;
    if(victim.alive&&id==='flame')victim.burn={attackerId:shooter.id,nextTick:victim.burn?.nextTick??time+250,expiresAt:time+(spec.burn??0)*1000};
  }
  if(confirmed.length)io.to(shooter.id).emit('match:hit',{eventId,weapon:id,hits:confirmed});
  if(confirmed.some(h=>h.killed))emitRoom(io,room);
}
function step(io:Server,room:Room,dt:number){
  if(room.state!=='PLAYING')return;const time=now();room.tick++;
  for(const p of room.players.values()){
    if(!p.alive)continue;const spec=WEAPON_SPECS[p.activeWeapon],state=p.weapons[p.activeWeapon];
    if(state.reloadUntil&&time>=state.reloadUntil){state.ammo=spec.magazine;state.reloadUntil=0;}
    if(p.input.reload&&state.ammo<spec.magazine&&!state.reloadUntil)state.reloadUntil=time+spec.reloadTime*1000;
    p.yaw=p.input.yaw;p.pitch=p.input.pitch;
    stepPlayer(p,{...p.input,lookX:0,lookY:0},dt,undefined,p.slowUntil>time ? .65 : 1);
    p.lastProcessedSeq=p.lastReceivedSeq;
    for(const pickup of room.pickups)if(pickup.available&&Math.hypot(p.x-pickup.x,p.y-(groundHeight(pickup.x,pickup.z)+.9),p.z-pickup.z)<2){if(!p.ownedWeapons.includes(pickup.id))p.ownedWeapons.push(pickup.id);p.activeWeapon=pickup.id;pickup.available=false;pickup.respawnAt=time+30000;emitRoom(io,room);}
    if(p.burn){while(p.burn&&p.burn.nextTick<=time&&p.burn.nextTick<=p.burn.expiresAt){const attacker=room.players.get(p.burn.attackerId);p.burn.nextTick+=250;if(attacker){const hit=applyDamage(io,room,attacker,p,{targetId:p.id,damage:4,headshot:false,position:[p.x,p.y-.4,p.z]},'flame');if(hit)io.to(attacker.id).emit('match:hit',{eventId:`${room.code}:burn:${++room.shotSequence}`,weapon:'flame',hits:[hit]});if(hit?.killed)emitRoom(io,room);if(room.state!=='PLAYING')return;}}if(p.burn&&time>=p.burn.expiresAt)p.burn=null;}
    p.input={...p.input,lookX:0,lookY:0,jump:false,reload:false};
  }
  for(const pickup of room.pickups)if(!pickup.available&&pickup.respawnAt<=time){const point=chooseWeaponPoint([...room.players.values()],room.pickups.filter(other=>other!==pickup&&other.available),[pickup.x,pickup.z]);if(!point){pickup.respawnAt=time+100;continue;}pickup.x=point[0];pickup.z=point[1];pickup.available=true;emitRoom(io,room);}
  room.history.push({at:time,players:new Map([...room.players].map(([id,p])=>[id,{x:p.x,y:p.y,z:p.z,alive:p.alive,yaw:p.yaw,life:p.life}]))});while(room.history[0]?.at<time-300)room.history.shift();
  if(room.tick%3===0)emitSnapshot(io,room);
}
function clearRoom(room:Room){clearRespawns(room);clearGameOverTimer(room);}

export function createGameServer(){
  const app=express(),http=createServer(app),io=new Server(http,{cors:{origin:process.env.CORS_ORIGIN||'*',methods:['GET','POST']}});
  app.get('/health',(_,res)=>res.json({ok:true,rooms:rooms.size,protocolVersion:MULTIPLAYER_PROTOCOL_VERSION}));
  io.on('connection',socket=>{
    let room:Room|undefined;
    const join=(target:Room,name:string)=>{const index=target.players.size,p:Player={id:socket.id,name:name.trim(),avatar:avatars[index%avatars.length],color:colors[index%colors.length],x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,kills:0,deaths:0,activeWeapon:'ar',ownedWeapons:['ar'],weapons:createWeapons(),life:0,lastShot:0,lastReceivedSeq:0,lastProcessedSeq:0,input:blankInput(),slowUntil:0,burn:null};resetPlayer(p,target,true);target.players.set(p.id,p);socket.join(target.code);emitRoom(io,target);};
    socket.on('room:create',(name:string,cb:(r:unknown)=>void)=>{if(!/^[\s\S]{2,16}$/.test(name))return cb({error:'INVALID_NICKNAME'});const id=roomCode();room={code:id,host:socket.id,state:'LOBBY',players:new Map,pickups:createPickups(),history:[],tick:0,lastStep:now(),respawnTimers:new Map,shotSequence:0,killTracker:new KillTracker(id)};rooms.set(id,room);join(room,name);cb({code:id});});
    socket.on('room:join',(data:{code:string;name:string},cb:(r:unknown)=>void)=>{const target=rooms.get(data.code.toUpperCase());if(!target)return cb({error:'ROOM_NOT_FOUND'});if(target.players.size>=8)return cb({error:'ROOM_FULL'});if(target.state!=='LOBBY')return cb({error:'GAME_IN_PROGRESS'});room=target;join(target,data.name);cb({code:target.code});});
    socket.on('game:start',()=>{if(!room||room.host!==socket.id||room.players.size<2||room.state!=='LOBBY')return;beginRound(io,room);});
    socket.on('game:again',()=>{if(!room||room.host!==socket.id||room.state!=='GAME_OVER')return;beginRound(io,room);});
    socket.on('game:lobby',()=>{if(!room||room.host!==socket.id||room.state!=='GAME_OVER')return;returnToLobby(io,room);});
    socket.on('match:input',(input:Input)=>{const p=room?.players.get(socket.id);if(!p||room?.state!=='PLAYING'||!Number.isSafeInteger(input?.seq)||input.seq<=p.lastReceivedSeq||!Number.isFinite(input.yaw)||!Number.isFinite(input.pitch))return;p.lastReceivedSeq=input.seq;p.input={...p.input,seq:input.seq,clientTime:Math.max(now()-250,Math.min(now(),input.clientTime||now())),moveX:Math.max(-1,Math.min(1,input.moveX||0)),moveY:Math.max(-1,Math.min(1,input.moveY||0)),lookX:0,lookY:0,jump:p.input.jump||!!input.jump,reload:p.input.reload||!!input.reload,yaw:Math.atan2(Math.sin(input.yaw),Math.cos(input.yaw)),pitch:Math.max(-1.35,Math.min(1.35,input.pitch))};});
    socket.on('match:weapon',(id:WeaponId)=>{const p=room?.players.get(socket.id);if(p?.alive&&WEAPON_IDS.includes(id)&&p.ownedWeapons.includes(id))p.activeWeapon=id;});
    socket.on('match:fire',(fire:{clientTime:number})=>{const p=room?.players.get(socket.id);if(!p||room?.state!=='PLAYING')return;shoot(io,room,p,Math.max(now()-250,Math.min(now(),fire?.clientTime||now())));});
    socket.on('net:ping',(cb:unknown)=>{if(typeof cb==='function')cb(now());});
    socket.on('disconnect',()=>{if(!room)return;const timer=room.respawnTimers.get(socket.id);if(timer)clearTimeout(timer);room.respawnTimers.delete(socket.id);previousSpawns.delete(socket.id);room.killTracker.remove(socket.id);room.players.delete(socket.id);if(!room.players.size){clearRoom(room);rooms.delete(room.code);}else{if(room.host===socket.id)room.host=room.players.keys().next().value!;emitRoom(io,room);}});
  });
  const fixedStep=1/60;let lastLoop=now(),accumulator=0;
  const timer=setInterval(()=>{const time=now();accumulator=Math.min(.25,accumulator+(time-lastLoop)/1000);lastLoop=time;while(accumulator>=fixedStep){for(const room of rooms.values()){room.lastStep+=fixedStep*1000;step(io,room,fixedStep);}accumulator-=fixedStep;}},1000/60);
  return{app,http,io,close:()=>{clearInterval(timer);for(const room of rooms.values())clearRoom(room);io.close();}};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const game=createGameServer();game.http.listen(Number(process.env.PORT??3001),'0.0.0.0');}
