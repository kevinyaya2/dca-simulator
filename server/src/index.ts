import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { ARENA_SPAWNS, blocked, stepPlayer, type SimInput } from '../../shared/arena.js';
import { WEAPON_IDS, WEAPON_SPECS, type WeaponId } from '../../shared/weapons.js';

type Input = SimInput & { seq:number; clientTime:number; reload?:boolean };
type WeaponState = Record<WeaponId,{ammo:number;reloadUntil:number}>;
type BurnState = { attackerId:string; nextTick:number; expiresAt:number } | null;
type Player = {
  id:string; name:string; avatar:string; color:number;
  x:number; y:number; z:number; yaw:number; pitch:number; velocityY:number;
  hp:number; alive:boolean; kills:number; deaths:number;
  activeWeapon:WeaponId; ownedWeapons:WeaponId[]; weapons:WeaponState;
  lastShot:number; lastSeq:number; input:Input; slowUntil:number; burn:BurnState;
};
type Pickup = { id:WeaponId; x:number; z:number; available:boolean; respawnAt:number };
type History = { at:number; players:Map<string,{x:number;y:number;z:number;alive:boolean}> };
type Room = {
  code:string; host:string; state:'LOBBY'|'PLAYING'|'GAME_OVER';
  players:Map<string,Player>; pickups:Pickup[]; history:History[];
  winner?:string; tick:number; lastStep:number; respawnTimers:Map<string,NodeJS.Timeout>;
};

const chars='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const colors=[0xff4e7a,0x36d8c4,0xf7ba4b,0xa777ff,0x50a6ff,0xff6b37,0x37caff,0x92e34f];
const avatars=['虎','狐','熊','蛙','獅','狼','兔','貓'];
const rooms=new Map<string,Room>();
const now=()=>Date.now();
const blankInput=():Input=>({seq:0,clientTime:0,moveX:0,moveY:0,lookX:0,lookY:0,jump:false,reload:false});
const createWeapons=():WeaponState=>Object.fromEntries(WEAPON_IDS.map(id=>[id,{ammo:WEAPON_SPECS[id].magazine,reloadUntil:0}])) as WeaponState;
const createPickups=():Pickup[]=>([
  {id:'smg',x:-15,z:-54},{id:'flame',x:55,z:0},{id:'ice',x:-55,z:48},
  {id:'shotgun',x:25,z:35},{id:'rocket',x:-28,z:12}
] as Array<{id:WeaponId;x:number;z:number}>).map(p=>({...p,available:true,respawnAt:0}));

function roomCode():string{let value='';while(value.length<6)value+=chars[Math.floor(Math.random()*chars.length)];return rooms.has(value)?roomCode():value;}
function publicPlayer(p:Player){const {input,lastShot,burn,...safe}=p;return safe;}
function roomState(room:Room){return{code:room.code,host:room.host,state:room.state,winner:room.winner,players:[...room.players.values()].map(publicPlayer),pickups:room.pickups};}
function emitRoom(io:Server,room:Room){io.to(room.code).emit('room:state',roomState(room));}
function emitSnapshot(io:Server,room:Room){io.to(room.code).emit('match:snapshot',{serverTime:now(),tick:room.tick,players:[...room.players.values()].map(p=>({...publicPlayer(p),ack:p.lastSeq})),pickups:room.pickups});}

function resetPlayer(p:Player,index:number,newRound=false){
  const spawn=ARENA_SPAWNS[index%ARENA_SPAWNS.length];
  Object.assign(p,{x:spawn[0],y:1.65,z:spawn[1],yaw:0,pitch:0,velocityY:0,hp:100,alive:true,lastShot:0,slowUntil:0,burn:null,input:blankInput()});
  p.weapons=createWeapons();
  if(newRound){p.activeWeapon='ar';p.ownedWeapons=['ar'];p.kills=0;p.deaths=0;}
}
function rayWallDistance(p:Player,dir:[number,number,number],max:number){for(let t=.25;t<=max;t+=.2)if(blocked(p.x+dir[0]*t,p.z+dir[2]*t,.04)&&p.y+dir[1]*t<3)return t;return max;}
function direction(yaw:number,pitch:number):[number,number,number]{return[-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)];}
function spreadDirection(base:[number,number,number],spread:number):[number,number,number]{const x=base[0]+(Math.random()-.5)*spread,y=base[1]+(Math.random()-.5)*spread,z=base[2]+(Math.random()-.5)*spread,l=Math.hypot(x,y,z)||1;return[x/l,y/l,z/l];}
function historicalPlayers(room:Room,clientTime:number){const target=now()-Math.max(0,Math.min(250,now()-clientTime));let frame=room.history[0];for(const sample of room.history)if(sample.at<=target)frame=sample;return frame?.players;}
function closestHit(room:Room,shooter:Player,dir:[number,number,number],range:number,spread:number,history?:History['players']){
  const wallDistance=rayWallDistance(shooter,dir,range);let result:Player|undefined,best=wallDistance;
  for(const candidate of room.players.values()){
    if(candidate.id===shooter.id||!candidate.alive)continue;
    const pos=history?.get(candidate.id)??candidate;if(!pos.alive)continue;
    const dx=pos.x-shooter.x,dy=pos.y-.35-shooter.y,dz=pos.z-shooter.z;
    const along=dx*dir[0]+dy*dir[1]+dz*dir[2];
    const offset=Math.hypot(dx-along*dir[0],dy-along*dir[1],dz-along*dir[2]);
    if(along>0&&along<best&&along<=range&&offset<.72+spread*along){result=candidate;best=along;}
  }
  return{player:result,distance:best};
}
function kill(io:Server,room:Room,attacker:Player,victim:Player){
  if(!victim.alive)return;victim.alive=false;victim.hp=0;victim.deaths++;attacker.kills++;
  if(attacker.kills>=10){room.state='GAME_OVER';room.winner=attacker.name;emitRoom(io,room);return;}
  const timer=setTimeout(()=>{room.respawnTimers.delete(victim.id);if(room.state==='PLAYING'&&!victim.alive){resetPlayer(victim,[...room.players.keys()].indexOf(victim.id));emitRoom(io,room);}},3000);
  room.respawnTimers.set(victim.id,timer);emitRoom(io,room);
}
function applyDamage(io:Server,room:Room,attacker:Player,victim:Player,amount:number,weapon:WeaponId){
  if(!victim.alive||amount<=0)return;victim.hp=Math.max(0,victim.hp-amount);
  io.to(victim.id).emit('match:damage',{from:{x:attacker.x,z:attacker.z},hp:victim.hp,name:attacker.name,weapon});
  if(victim.hp===0)kill(io,room,attacker,victim);
}
function shoot(io:Server,room:Room,shooter:Player,clientTime:number){
  const time=now(),id=shooter.activeWeapon,spec=WEAPON_SPECS[id],state=shooter.weapons[id];
  if(!shooter.alive||state.reloadUntil>time||state.ammo<=0||time-shooter.lastShot<spec.fireDelay*1000)return;
  shooter.lastShot=time;state.ammo--;const base=direction(shooter.yaw,shooter.pitch),history=historicalPlayers(room,clientTime),hitIds=new Set<string>();
  let impact:[number,number,number]|undefined;
  for(let pellet=0;pellet<(spec.pellets??1);pellet++){
    const dir=spreadDirection(base,spec.spread),hit=closestHit(room,shooter,dir,spec.range,spec.spread,history);
    if(hit.player){applyDamage(io,room,shooter,hit.player,spec.damage,id);hitIds.add(hit.player.id);}
    if(id==='ice'&&hit.player)hit.player.slowUntil=time+(spec.slow??0)*1000;
    if(id==='flame'&&hit.player)hit.player.burn={attackerId:shooter.id,nextTick:time+250,expiresAt:time+(spec.burn??0)*1000};
    if(id==='rocket'){impact=[shooter.x+dir[0]*hit.distance,shooter.y+dir[1]*hit.distance,shooter.z+dir[2]*hit.distance];break;}
  }
  if(id==='rocket'&&impact){for(const victim of room.players.values()){if(victim.id===shooter.id||!victim.alive)continue;const distance=Math.hypot(victim.x-impact[0],victim.y-impact[1],victim.z-impact[2]);if(distance<(spec.splash??0)){applyDamage(io,room,shooter,victim,Math.max(1,Math.round(spec.damage*(1-distance/(spec.splash??1)))),id);hitIds.add(victim.id);}}}
  io.to(room.code).emit('match:shot',{id:shooter.id,origin:[shooter.x,shooter.y,shooter.z],dir:base,weapon:id,impact,hitIds:[...hitIds]});
}
function step(io:Server,room:Room,dt:number){
  if(room.state!=='PLAYING')return;const time=now();room.tick++;
  for(const p of room.players.values()){
    if(!p.alive)continue;const spec=WEAPON_SPECS[p.activeWeapon],state=p.weapons[p.activeWeapon];
    if(state.reloadUntil&&time>=state.reloadUntil){state.ammo=spec.magazine;state.reloadUntil=0;}
    if(p.input.reload&&state.ammo<spec.magazine&&!state.reloadUntil)state.reloadUntil=time+spec.reloadTime*1000;
    stepPlayer(p,p.input,dt*(p.slowUntil>time ? .65 : 1));
    for(const pickup of room.pickups)if(pickup.available&&Math.hypot(p.x-pickup.x,p.z-pickup.z)<2){if(!p.ownedWeapons.includes(pickup.id))p.ownedWeapons.push(pickup.id);p.activeWeapon=pickup.id;pickup.available=false;pickup.respawnAt=time+30000;emitRoom(io,room);}
    if(p.burn&&time>=p.burn.nextTick){const attacker=room.players.get(p.burn.attackerId);if(attacker)applyDamage(io,room,attacker,p,4,'flame');if(p.burn){p.burn.nextTick+=250;if(time>=p.burn.expiresAt)p.burn=null;}}
    p.input={...p.input,lookX:0,lookY:0,jump:false,reload:false};
  }
  for(const pickup of room.pickups)if(!pickup.available&&pickup.respawnAt<=time){pickup.available=true;emitRoom(io,room);}
  room.history.push({at:time,players:new Map([...room.players].map(([id,p])=>[id,{x:p.x,y:p.y,z:p.z,alive:p.alive}]))});while(room.history[0]?.at<time-300)room.history.shift();
  if(room.tick%2===0)emitSnapshot(io,room);
}
function clearRoom(room:Room){for(const timer of room.respawnTimers.values())clearTimeout(timer);room.respawnTimers.clear();}

export function createGameServer(){
  const app=express(),http=createServer(app),io=new Server(http,{cors:{origin:process.env.CORS_ORIGIN||'*',methods:['GET','POST']}});
  app.get('/health',(_,res)=>res.json({ok:true,rooms:rooms.size}));
  io.on('connection',socket=>{
    let room:Room|undefined;
    const join=(target:Room,name:string)=>{const index=target.players.size,p:Player={id:socket.id,name:name.trim(),avatar:avatars[index%avatars.length],color:colors[index%colors.length],x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,hp:100,alive:true,kills:0,deaths:0,activeWeapon:'ar',ownedWeapons:['ar'],weapons:createWeapons(),lastShot:0,lastSeq:0,input:blankInput(),slowUntil:0,burn:null};resetPlayer(p,index,true);target.players.set(p.id,p);socket.join(target.code);emitRoom(io,target);};
    socket.on('room:create',(name:string,cb:(r:unknown)=>void)=>{if(!/^[\s\S]{2,16}$/.test(name))return cb({error:'INVALID_NICKNAME'});const id=roomCode();room={code:id,host:socket.id,state:'LOBBY',players:new Map,pickups:createPickups(),history:[],tick:0,lastStep:now(),respawnTimers:new Map};rooms.set(id,room);join(room,name);cb({code:id});});
    socket.on('room:join',(data:{code:string;name:string},cb:(r:unknown)=>void)=>{const target=rooms.get(data.code.toUpperCase());if(!target)return cb({error:'ROOM_NOT_FOUND'});if(target.players.size>=8)return cb({error:'ROOM_FULL'});if(target.state!=='LOBBY')return cb({error:'GAME_IN_PROGRESS'});room=target;join(target,data.name);cb({code:target.code});});
    socket.on('game:start',()=>{if(!room||room.host!==socket.id||room.players.size<2)return;room.state='PLAYING';room.winner=undefined;room.history=[];room.pickups=createPickups();[...room.players.values()].forEach((p,i)=>resetPlayer(p,i,true));emitRoom(io,room);});
    socket.on('game:again',()=>{if(!room||room.host!==socket.id||room.state!=='GAME_OVER')return;room.state='PLAYING';room.winner=undefined;room.history=[];room.pickups=createPickups();[...room.players.values()].forEach((p,i)=>resetPlayer(p,i,true));emitRoom(io,room);});
    socket.on('match:input',(input:Input)=>{const p=room?.players.get(socket.id);if(!p||room?.state!=='PLAYING'||!Number.isSafeInteger(input.seq)||input.seq<=p.lastSeq)return;p.lastSeq=input.seq;p.input={...p.input,...input,moveX:Math.max(-1,Math.min(1,input.moveX||0)),moveY:Math.max(-1,Math.min(1,input.moveY||0)),lookX:Math.max(-200,Math.min(200,input.lookX||0)),lookY:Math.max(-200,Math.min(200,input.lookY||0)),clientTime:Math.max(now()-250,Math.min(now(),input.clientTime||now()))};});
    socket.on('match:weapon',(id:WeaponId)=>{const p=room?.players.get(socket.id);if(p?.alive&&WEAPON_IDS.includes(id)&&p.ownedWeapons.includes(id))p.activeWeapon=id;});
    socket.on('match:fire',(fire:{clientTime:number;yaw:number;pitch:number})=>{const p=room?.players.get(socket.id);if(!p||room?.state!=='PLAYING'||!Number.isFinite(fire?.yaw)||!Number.isFinite(fire?.pitch))return;p.yaw=fire.yaw;p.pitch=Math.max(-1.35,Math.min(1.35,fire.pitch));shoot(io,room,p,Math.max(now()-250,Math.min(now(),fire.clientTime||now())));});
    socket.on('net:ping',(cb:unknown)=>{if(typeof cb==='function')cb(now());});
    socket.on('disconnect',()=>{if(!room)return;const timer=room.respawnTimers.get(socket.id);if(timer)clearTimeout(timer);room.respawnTimers.delete(socket.id);room.players.delete(socket.id);if(!room.players.size){clearRoom(room);rooms.delete(room.code);}else{if(room.host===socket.id)room.host=room.players.keys().next().value!;emitRoom(io,room);}});
  });
  const timer=setInterval(()=>{const time=now();for(const room of rooms.values()){const dt=Math.min(.05,(time-room.lastStep)/1000);room.lastStep=time;step(io,room,dt);}},1000/60);
  return{app,http,io,close:()=>{clearInterval(timer);for(const room of rooms.values())clearRoom(room);io.close();}};
}
const game=createGameServer();game.http.listen(Number(process.env.PORT??3001),'0.0.0.0');
