import * as T from 'three';
import type { Socket } from 'socket.io-client';
import { Arena } from '../world/Arena';
import { InputManager } from '../input/InputManager';
import { DesktopInput } from '../input/DesktopInput';
import { MobileInput } from '../input/MobileInput';
import { Player } from '../player/Player';
import { HUD } from '../ui/HUD';
import { Armory } from '../ui/Armory';
import { mobileMarkup } from '../ui/MobileControls';
import { GameLoop } from './GameLoop';
import { Bot } from '../enemies/Bot';
import { MuzzleFlash } from '../systems/MuzzleFlash';
import { BulletTracer } from '../systems/BulletTracer';
import { DamageFeedbackSystem } from '../systems/DamageFeedbackSystem';
import { PerformanceManager } from '../systems/PerformanceManager';
import { ARENA_CAMERA_FAR, stepPlayer, type SimPlayer } from '../../../shared/arena';
import { WEAPON_IDS, WEAPON_SPECS, type WeaponId } from '../../../shared/weapons';

type WeaponState=Record<WeaponId,{ammo:number;reloadUntil:number}>;
type Net={id:string;name:string;avatar:string;color:number;x:number;y:number;z:number;yaw:number;pitch:number;velocityY:number;hp:number;alive:boolean;kills:number;deaths:number;activeWeapon:WeaponId;ownedWeapons:WeaponId[];weapons:WeaponState;slowUntil:number;ack:number};
type Pickup={id:WeaponId;x:number;z:number;available:boolean;respawnAt:number};
type Snapshot={serverTime:number;tick:number;players:Net[];pickups:Pickup[];byId?:Map<string,Net>};
type Command={seq:number;clientTime:number;moveX:number;moveY:number;yaw:number;pitch:number;jump:boolean;reload:boolean};
type PendingCommand=Command&{dt:number};
type Shot={id:string;origin:[number,number,number];dir:[number,number,number];weapon:WeaponId;impact?:[number,number,number];hitIds:string[]};

const clamp=(value:number,min:number,max:number)=>Math.max(min,Math.min(max,value));
const angleDelta=(from:number,to:number)=>((to-from+Math.PI*3)%(Math.PI*2))-Math.PI;

export class MultiplayerGame{
  private scene=new T.Scene();private cam=new T.PerspectiveCamera(75,1,.05,ARENA_CAMERA_FAR);private renderer:T.WebGLRenderer;
  private input=new InputManager();private arena=new Arena();private player=new Player();private avatars=new Map<string,Bot>();private pickupMeshes=new Map<WeaponId,T.Mesh>();
  private pending:PendingCommand[]=[];private snaps:Snapshot[]=[];private seq=0;private hud:HUD;private armory:Armory;private feedback:DamageFeedbackSystem;
  private flash:MuzzleFlash;private tracers:BulletTracer;private loop:GameLoop;private desktop?:DesktopInput;private mobile?:MobileInput;
  private resize=()=>{};private owned=new Set<WeaponId>(['ar']);private active:WeaponId='ar';private weapons:WeaponState=Object.fromEntries(WEAPON_IDS.map(id=>[id,{ammo:WEAPON_SPECS[id].magazine,reloadUntil:0}])) as WeaponState;
  private kills=0;private deaths=0;private dead=false;private killer='';private ping=0;private pingTimer=0;private serverClockOffset=0;private hasClockOffset=false;private notice='';private noticeT=0;private rosterHTML='';private slowUntil=0;
  private wasShooting=false;private lastLocalShot=0;private recoilPitch=0;private recoilYaw=0;private gun=new T.Group();private gunFlash:T.Mesh;private gunMaterial=new T.MeshBasicMaterial({color:0x202634});private handMaterial=new T.MeshBasicMaterial({color:0xffffff});private coarse=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  private cameraOffset=new T.Vector3();private visualPosition=new T.Vector3();private remoteTarget=new T.Vector3();private moveIntent=new T.Vector3();
  private snapshotInterval=50;private snapshotJitter=0;private lastSnapshotArrival=0;
  private radarCanvas:HTMLCanvasElement;private radarContext:CanvasRenderingContext2D;private radarPlayers=new Map<string,Net>();private radarTimer=0;

  constructor(private root:HTMLElement,private socket:Socket,private roomCode:string|undefined,private onFatal:(reason:string)=>void){
    const performance=new PerformanceManager();this.renderer=new T.WebGLRenderer({antialias:!this.coarse,powerPreference:'high-performance'});this.renderer.setPixelRatio(performance.pixelRatio);this.renderer.setClearColor(0x16b9dc);root.append(this.renderer.domElement);
    root.insertAdjacentHTML('beforeend','<div class="co-feedback"></div><div class="co-hud"></div><div class="co-mp-roster"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+mobileMarkup());
    this.radarCanvas=root.querySelector('.co-minimap canvas')!;this.radarContext=this.radarCanvas.getContext('2d')!;
    this.hud=new HUD(root.querySelector('.co-hud')!);this.feedback=new DamageFeedbackSystem(root.querySelector('.co-feedback')!);this.armory=new Armory(root,id=>this.socket.emit('match:weapon',id),()=>this.owned,this.restorePointerLock);
    this.scene.add(this.arena.group,new T.HemisphereLight(0xffffff,0x16b9dc,2));this.flash=new MuzzleFlash(this.scene);this.tracers=new BulletTracer(this.scene);this.makeGun();this.makePickups();
    if(this.coarse)this.mobile=new MobileInput(root,this.input);else{this.desktop=new DesktopInput(root,this.input);root.onclick=e=>{if(!(e.target as HTMLElement).closest('.co-armory'))this.restorePointerLock();};}
    this.resize=()=>{this.cam.aspect=root.clientWidth/root.clientHeight;this.cam.updateProjectionMatrix();this.renderer.setSize(root.clientWidth,root.clientHeight,false);this.sizeRadar();};window.addEventListener('resize',this.resize);this.resize();
    this.socket.on('match:snapshot',this.onSnapshot);this.socket.on('match:shot',this.onShot);this.socket.on('match:damage',this.onDamage);this.socket.on('disconnect',this.onDisconnect);this.socket.on('connect_error',this.onConnectError);this.loop=new GameLoop(dt=>this.update(dt));
  }

  start(){this.loop.start();}
  pause(){this.wasShooting=false;this.input.reset();this.loop.stop();const locked=document.pointerLockElement;if(locked&&(locked===this.root||this.root.contains(locked)))document.exitPointerLock?.();}
  resume(){this.loop.start();}
  private restorePointerLock=()=>{if(this.coarse||document.pointerLockElement===this.root)return;this.root.requestPointerLock?.().catch?.(()=>{});};
  private serverNow(){return Date.now()-this.serverClockOffset;}
  private makeGun(){const barrel=new T.Mesh(new T.BoxGeometry(.18,.16,.9),this.gunMaterial);barrel.position.set(.34,-.28,-.8);const pieces:[[number,number,number],[number,number,number]][]=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[geo,pos]of pieces){const mesh=new T.Mesh(new T.BoxGeometry(...geo),this.handMaterial);mesh.position.set(...pos);this.gun.add(mesh);}this.gunFlash=new T.Mesh(new T.OctahedronGeometry(.08),new T.MeshBasicMaterial({color:0xffd45d}));this.gunFlash.position.set(.34,-.25,-1.3);this.gunFlash.visible=false;this.gun.add(barrel,this.gunFlash);this.cam.add(this.gun);this.scene.add(this.cam);}
  private makePickups(){for(const id of WEAPON_IDS.filter(id=>id!=='ar')){const spec=WEAPON_SPECS[id],mesh=new T.Mesh(new T.OctahedronGeometry(.75),new T.MeshBasicMaterial({color:spec.color}));mesh.visible=false;this.pickupMeshes.set(id,mesh);this.scene.add(mesh);}}
  private simulate(state:SimPlayer,command:Command,dt:number){state.yaw=command.yaw;state.pitch=command.pitch;stepPlayer(state,{moveX:command.moveX,moveY:command.moveY,lookX:0,lookY:0,jump:command.jump},dt*(this.slowUntil>this.serverNow()?.65:1));}
  private predict(command:Command,dt:number){const state={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,alive:this.player.alive};this.simulate(state,command,dt);this.player.position.set(state.x,state.y,state.z);this.player.yaw=state.yaw;this.player.pitch=state.pitch;this.player.velocityY=state.velocityY;}

  private onSnapshot=(snapshot:Snapshot)=>{
    if(!Array.isArray(snapshot?.players)||!Array.isArray(snapshot?.pickups))return this.onFatal('多人同步資料無效');
    const arrival=performance.now();if(this.lastSnapshotArrival){const interval=arrival-this.lastSnapshotArrival;this.snapshotJitter=this.snapshotJitter*.8+Math.abs(interval-this.snapshotInterval)*.2;this.snapshotInterval=this.snapshotInterval*.85+interval*.15;}this.lastSnapshotArrival=arrival;
    snapshot.byId=new Map(snapshot.players.map(player=>[player.id,player]));this.snaps.push(snapshot);while(this.snaps.length>12)this.snaps.shift();
    const me=snapshot.byId.get(this.socket.id!);if(!me)return;const wasAlive=this.player.alive,respawned=!wasAlive&&me.alive;this.slowUntil=me.slowUntil;
    this.pending=this.pending.filter(command=>command.seq>me.ack);if(respawned)this.pending.length=0;
    this.visualPosition.copy(this.player.position).add(this.cameraOffset);
    const reconciled:SimPlayer={x:me.x,y:me.y,z:me.z,yaw:me.yaw,pitch:me.pitch,velocityY:me.velocityY,alive:me.alive};for(const command of this.pending)this.simulate(reconciled,command,command.dt);
    const correction=Math.hypot(reconciled.x-this.player.position.x,reconciled.y-this.player.position.y,reconciled.z-this.player.position.z),hardCorrection=respawned||correction>4;
    this.player.position.set(reconciled.x,reconciled.y,reconciled.z);this.player.velocityY=reconciled.velocityY;if(respawned){this.player.yaw=me.yaw;this.player.pitch=me.pitch;}if(hardCorrection)this.cameraOffset.set(0,0,0);else{this.cameraOffset.copy(this.visualPosition).sub(this.player.position);if(Math.hypot(this.cameraOffset.x,this.cameraOffset.z)>4)this.cameraOffset.set(0,0,0);}
    this.player.hp=me.hp;this.player.alive=me.alive;this.handMaterial.color.setHex(me.color);this.active=me.activeWeapon;this.owned=new Set(me.ownedWeapons);this.weapons=me.weapons;this.kills=me.kills;this.deaths=me.deaths;this.dead=!me.alive;
    this.syncAvatars(snapshot.players);this.syncPickups(snapshot.pickups);this.armory.render(this.active);this.updatePanels(snapshot);
  };

  private updatePanels(snapshot:Snapshot){const roster=`<b>${this.roomCode||'房間'} · ${Math.round(this.ping)}ms</b>${[...snapshot.players].sort((a,b)=>b.kills-a.kills).map(player=>`<div><span>${player.name}</span><strong>${player.kills}/${player.deaths}</strong></div>`).join('')}`;if(roster!==this.rosterHTML){this.rosterHTML=roster;this.root.querySelector('.co-mp-roster')!.innerHTML=roster;}this.radarPlayers=snapshot.byId??new Map(snapshot.players.map(player=>[player.id,player]));}
  private syncAvatars(players:Net[]){const ids=new Set(players.map(player=>player.id));for(const[id,avatar]of this.avatars)if(!ids.has(id)){this.scene.remove(avatar.group,avatar.deathGroup);this.avatars.delete(id);}for(const player of players){if(player.id===this.socket.id)continue;let avatar=this.avatars.get(player.id);if(!avatar){avatar=new Bot(player.id,player.name,player.color,player.avatar);avatar.respawn(player.x,player.z);avatar.position.y=player.y-1.65;avatar.group.position.copy(avatar.position);this.avatars.set(player.id,avatar);this.scene.add(avatar.group,avatar.deathGroup);}if(player.alive&&!avatar.alive)avatar.respawn(player.x,player.z);if(!player.alive&&avatar.alive)avatar.damage(100);}}
  private syncPickups(pickups:Pickup[]){for(const pickup of pickups){const mesh=this.pickupMeshes.get(pickup.id);if(!mesh)continue;mesh.position.set(pickup.x,.9,pickup.z);mesh.visible=pickup.available;}}

  private sizeRadar(){const rect=this.radarCanvas?.getBoundingClientRect();if(!rect?.width||!rect.height)return;const ratio=Math.min(window.devicePixelRatio||1,1.5),width=Math.round(rect.width*ratio),height=Math.round(rect.height*ratio);if(this.radarCanvas.width!==width||this.radarCanvas.height!==height){this.radarCanvas.width=width;this.radarCanvas.height=height;}}
  private drawRadar(dt:number){this.radarTimer+=dt;if(this.radarTimer<1/30)return;this.radarTimer%=1/30;const canvas=this.radarCanvas,rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;this.sizeRadar();const ratio=canvas.width/rect.width,ctx=this.radarContext,width=rect.width,height=rect.height,cx=width/2,cy=height/2+4,radius=Math.min(width,height)*.38;ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,width,height);ctx.strokeStyle='#ffffff24';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.moveTo(cx-radius,cy);ctx.lineTo(cx+radius,cy);ctx.moveTo(cx,cy-radius);ctx.lineTo(cx,cy+radius);ctx.stroke();ctx.fillStyle='#dfffff';ctx.font='800 9px Arial';ctx.fillText('戰術雷達',8,14);const cos=Math.cos(this.player.yaw),sin=Math.sin(this.player.yaw);for(const player of this.radarPlayers.values()){if(player.id===this.socket.id||!player.alive)continue;const avatar=this.avatars.get(player.id),x=avatar?.position.x??player.x,z=avatar?.position.z??player.z,dx=x-this.player.position.x,dz=z-this.player.position.z,distance=Math.hypot(dx,dz);if(distance<.001)continue;const right=dx*cos-dz*sin,forward=-dx*sin-dz*cos,scale=radius*Math.min(distance/70,1)/distance,px=cx+right*scale,py=cy-forward*scale;ctx.beginPath();ctx.arc(px,py,distance>70?5:4,0,Math.PI*2);ctx.fillStyle=`#${player.color.toString(16).padStart(6,'0')}`;ctx.fill();if(distance>70){ctx.strokeStyle='#ffffffcc';ctx.lineWidth=1.5;ctx.stroke();}}ctx.save();ctx.translate(cx,cy);ctx.fillStyle='#fff';ctx.shadowColor='#55f1ae';ctx.shadowBlur=7;ctx.beginPath();ctx.moveTo(0,-7);ctx.lineTo(5,6);ctx.lineTo(0,3);ctx.lineTo(-5,6);ctx.closePath();ctx.fill();ctx.restore();}

  private onShot=(shot:Shot)=>{const aimOrigin=new T.Vector3(...shot.origin),direction=new T.Vector3(...shot.dir).normalize(),spec=WEAPON_SPECS[shot.weapon],impact=shot.impact?new T.Vector3(...shot.impact):undefined,end=impact??aimOrigin.clone().addScaledVector(direction,spec.range),muzzle=new T.Vector3();if(shot.id===this.socket.id){this.cam.updateMatrixWorld(true);this.gunFlash.getWorldPosition(muzzle);}else{const avatar=this.avatars.get(shot.id);if(avatar)avatar.muzzlePosition(muzzle);else{const right=new T.Vector3(-direction.z,0,direction.x);if(right.lengthSq()>.0001)right.normalize();muzzle.copy(aimOrigin).addScaledVector(right,.34).addScaledVector(direction,.7).add(new T.Vector3(0,-.27,0));}this.flash.burst(muzzle);}if(shot.weapon==='flame'){for(let i=0;i<4;i++)this.tracers.fire(muzzle,end.clone().add(new T.Vector3((Math.random()-.5)*1.2,(Math.random()-.5)*.6,(Math.random()-.5)*1.2)));}else this.tracers.fire(muzzle,end);if(impact)this.explosion(impact,spec.color);for(const id of shot.hitIds)this.avatars.get(id)?.hit();};
  private explosion(at:T.Vector3,color:number){const mesh=new T.Mesh(new T.SphereGeometry(.6,8,6),new T.MeshBasicMaterial({color,transparent:true,opacity:.85}));mesh.position.copy(at);this.scene.add(mesh);let life=.25;const grow=()=>{life-=.016;mesh.scale.multiplyScalar(1.18);(mesh.material as T.MeshBasicMaterial).opacity=Math.max(0,life*4);if(life>0)requestAnimationFrame(grow);else{this.scene.remove(mesh);mesh.geometry.dispose();(mesh.material as T.Material).dispose();}};grow();}
  private onDamage=(damage:{from:{x:number;z:number};hp:number;name:string;weapon:WeaponId})=>{this.player.hp=damage.hp;this.killer=damage.name;this.notice=`遭 ${damage.name} 使用 ${WEAPON_SPECS[damage.weapon]?.label??'武器'} 擊中`;this.noticeT=.8;this.feedback.damage(25,new T.Vector3(damage.from.x,0,damage.from.z),this.player.position,new T.Vector3(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)));};
  private onDisconnect=()=>this.onFatal('連線已中斷');private onConnectError=()=>this.onFatal('無法連線至遊戲伺服器');
  private measurePing(dt:number){this.pingTimer-=dt;if(this.pingTimer>0)return;this.pingTimer=1;const started=Date.now();this.socket.emit('net:ping',(serverTime:number)=>{this.ping=Date.now()-started;const offset=Date.now()-serverTime-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+offset*.2:offset;this.hasClockOffset=true;});}

  private updateRemotePlayers(dt:number){if(!this.snaps.length)return;const delay=clamp(80+this.ping*.1+this.snapshotJitter*1.5,80,120),renderAt=this.serverNow()-delay;let older=this.snaps[0],newer=this.snaps[0],alpha=0;const latest=this.snaps[this.snaps.length-1];if(renderAt>=latest.serverTime&&this.snaps.length>1){older=this.snaps[this.snaps.length-2];newer=latest;const span=Math.max(1,newer.serverTime-older.serverTime);alpha=1+Math.min(75,renderAt-newer.serverTime)/span;}else{for(let index=1;index<this.snaps.length;index++){if(this.snaps[index].serverTime>=renderAt){older=this.snaps[index-1];newer=this.snaps[index];break;}}alpha=older===newer?0:clamp((renderAt-older.serverTime)/Math.max(1,newer.serverTime-older.serverTime),0,1);}const blend=1-Math.exp(-dt*30);for(const[id,avatar]of this.avatars){const previous=older.byId?.get(id),next=newer.byId?.get(id);if(!previous||!next)continue;this.remoteTarget.set(previous.x+(next.x-previous.x)*alpha,previous.y+(next.y-previous.y)*alpha-1.65,previous.z+(next.z-previous.z)*alpha);avatar.group.position.lerp(this.remoteTarget,blend);avatar.group.rotation.y+=angleDelta(avatar.group.rotation.y,previous.yaw+angleDelta(previous.yaw,next.yaw)*alpha)*blend;avatar.position.copy(avatar.group.position);avatar.updateVisual(dt,Math.abs(next.x-previous.x)+Math.abs(next.z-previous.z)>.02,true);}}

  private update(dt:number){
    this.desktop?.update();this.measurePing(dt);const input=this.input.getState(),yaw=this.player.yaw-input.lookX*.0024,pitch=clamp(this.player.pitch-input.lookY*.0021,-1.35,1.35),command:Command={seq:++this.seq,clientTime:Date.now(),moveX:input.moveX,moveY:input.moveY,yaw,pitch,jump:input.jump,reload:input.reload};this.pending.push({...command,dt});while(this.pending.length>180)this.pending.shift();this.predict(command,dt);this.socket.emit('match:input',command);const forwardX=-Math.sin(yaw),forwardZ=-Math.cos(yaw),rightX=Math.cos(yaw),rightZ=-Math.sin(yaw);this.moveIntent.set(forwardX*input.moveY+rightX*input.moveX,0,forwardZ*input.moveY+rightZ*input.moveX);if(this.moveIntent.lengthSq()>.0001)this.moveIntent.normalize();
    if(input.switchWeapon){const id=WEAPON_IDS[input.switchWeapon-1];if(id&&this.owned.has(id))this.socket.emit('match:weapon',id);}
    const spec=WEAPON_SPECS[this.active],state=this.weapons[this.active],time=Date.now();if(input.shoot&&!this.armory.isOpen&&(!this.wasShooting||time-this.lastLocalShot>=spec.fireDelay*1000)&&state.ammo>0&&state.reloadUntil<=time){this.gunFlash.visible=true;this.recoilPitch=Math.min(.04,this.recoilPitch+.009);this.recoilYaw=clamp(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012);navigator.vibrate?.(8);this.socket.emit('match:fire',{clientTime:command.clientTime});this.lastLocalShot=time;}this.wasShooting=input.shoot;
    this.updateRemotePlayers(dt);for(const mesh of this.pickupMeshes.values())mesh.rotation.y+=dt*2;this.drawRadar(dt);
    this.noticeT=Math.max(0,this.noticeT-dt);this.flash.update(dt);this.tracers.update(dt);this.feedback.update(dt,this.player.hp);this.gunFlash.visible=this.gunFlash.visible&&Math.random()>.45;const recoilDecay=Math.exp(-dt*16);this.recoilPitch*=recoilDecay;this.recoilYaw*=recoilDecay;const horizontalDecay=Math.pow(.5,dt/.12),verticalDecay=Math.pow(.5,dt/.08),moving=this.moveIntent.lengthSq()>.01,correctionAlongMove=(-this.cameraOffset.x)*this.moveIntent.x+(-this.cameraOffset.z)*this.moveIntent.z;if(!moving||correctionAlongMove>=0){this.cameraOffset.x*=horizontalDecay;this.cameraOffset.z*=horizontalDecay;}this.cameraOffset.y*=verticalDecay;if(this.cameraOffset.lengthSq()<1e-6)this.cameraOffset.set(0,0,0);this.visualPosition.copy(this.player.position).add(this.cameraOffset);this.cam.position.copy(this.visualPosition);this.cam.rotation.set(this.player.pitch+this.recoilPitch,this.player.yaw+this.recoilYaw,0,'YXZ');
    const reloading=state.reloadUntil>Date.now();this.hud.render({hp:this.player.hp,ammo:state.ammo,reserve:Infinity,label:spec.label,notice:this.noticeT?this.notice:'',kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:false,kill:false,reloading});this.renderer.render(this.scene,this.cam);
  }

  dispose(){this.loop.stop();window.removeEventListener('resize',this.resize);this.socket.off('match:snapshot',this.onSnapshot);this.socket.off('match:shot',this.onShot);this.socket.off('match:damage',this.onDamage);this.socket.off('disconnect',this.onDisconnect);this.socket.off('connect_error',this.onConnectError);this.desktop?.dispose();this.mobile?.dispose();this.armory.dispose();this.flash.dispose();this.tracers.dispose();this.feedback.dispose();this.handMaterial.dispose();this.gunMaterial.dispose();this.renderer.dispose();}
}
