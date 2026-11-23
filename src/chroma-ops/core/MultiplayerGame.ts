import { DamageTimeline } from '../../../shared/damageTimeline';
import { MOVEMENT_STEP, MAX_INPUT_BACKLOG_MS, MovementClock, replayMovement, simulateMovement, type MovementCommand, type MovementAcknowledgement } from '../../../shared/movement';
import { NetworkDiagnostics } from '../ui/NetworkDiagnostics';
import { observeArenaSize } from '../ui/ArenaSize';
import { PickupPreview } from '../ui/PickupPreview';
import { weaponMuzzle } from '../weapons/WeaponMuzzle';
import { PickupFeedback } from '../ui/PickupFeedback';
import { WeaponAppearance } from '../weapons/WeaponAppearance';
import { TacticalBoard } from '../ui/TacticalBoard';
import { BASE_BOUNTY, SCORE_TARGET } from '../../../shared/bounty';
import { arenaWorld, staticArenaWorld } from '../../../shared/arena';
import { queryAim, aimFromPlayer } from '../../../shared/aim';
import { AimFeedback } from '../ui/AimFeedback';
import { disposeResources } from '../systems/DisposeResources';
import { SniperScope } from '../ui/SniperScope';
import { platformPosition } from '../../../shared/movingPlatforms';
import { environmentAtSnapshot } from '../../../shared/dayNight';
import { GameSettings } from '../ui/GameSettings';
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
import { WeaponEffects } from '../systems/WeaponEffects';
import { BattleFeedback } from '../ui/BattleFeedback';
import { resolveShot, type ShotEvent as LocalShotEvent } from '../../../shared/combat';
import { isCurrentRound, type DamageEvent, type RoundEvent, type ShotEvent, type HitConfirmation, type MultiplayerKillEvent } from '../../../shared/protocol';
import { DamageFeedbackSystem } from '../systems/DamageFeedbackSystem';
import { PerformanceManager, CAMERA_NEAR } from '../systems/PerformanceManager';
import { ARENA_CAMERA_FAR, stepPlayer, type SimPlayer } from '../../../shared/arena';
import { WEAPON_IDS, WEAPON_SPECS, createWeaponStates, magazineCapacity, type WeaponState, type WeaponPickupEvent, type WeaponId } from '../../../shared/weapons';

type Net=MovementAcknowledgement&{id:string;name:string;color:number;x:number;y:number;z:number;yaw:number;pitch:number;velocityY:number;jumpsUsed:number;hp:number;alive:boolean;score:number;bounty:number;kills:number;deaths:number;activeWeapon:WeaponId;ownedWeapons:WeaponId[];weapons:WeaponState;slowUntil:number;burnUntil:number;blessingUntil?:number;ack:number;supportId:number|null;aiming:boolean;sprinting:boolean};
import { WardenEntrance } from '../boss/WardenEntrance';
import { WARDEN_ATTACKS, wardenOwner, type WardenNotice, type WardenSnapshot, type WardenSpawnWarning } from '../../../shared/voidWarden';
import { WardenBlessingView } from '../boss/WardenBlessingView';
import { projectRadarPoint, wardenRadarMarker } from '../ui/WardenRadar';

type Pickup={id:WeaponId;x:number;y:number;z:number;available:boolean;respawnAt:number};
type Snapshot={scoreTarget:number;endsAt:number;environmentTime:number;roundId:number;simulationTime:number;serverTime:number;tick:number;players:Net[];pickups:Pickup[];warden?:WardenSnapshot|null;wardenWarning?:WardenSpawnWarning|null;destroyedBuildingParts?:string[];byId?:Map<string,Net>};
type Command=MovementCommand;
type PendingCommand=MovementCommand;


const clamp=(value:number,min:number,max:number)=>Math.max(min,Math.min(max,value));
const angleDelta=(from:number,to:number)=>((to-from+Math.PI*3)%(Math.PI*2))-Math.PI;

export class MultiplayerGame{
  private scene=new T.Scene();private cam=new T.PerspectiveCamera(75,1,CAMERA_NEAR,ARENA_CAMERA_FAR);private renderer:T.WebGLRenderer;
  private input=new InputManager(()=>this.sendResetInput());private arena=new Arena();private player=new Player();private avatars=new Map<string,Bot>();private pickupMeshes=new Map<WeaponId,T.Mesh>();
  private pending:PendingCommand[]=[];private snaps:Snapshot[]=[];private seq=0;private hud:HUD;private aimFeedback:AimFeedback;private armory:Armory;private feedback:DamageFeedbackSystem;
  private effects:WeaponEffects;private battle:BattleFeedback;private seenShots=new Set<string>();private statusTimer=0;private loop:GameLoop;private settings?:GameSettings;private desktop?:DesktopInput;private mobile?:MobileInput;
  private stopResize=()=>{};private owned=new Set<WeaponId>(['ar']);private active:WeaponId='ar';private weapons:WeaponState=createWeaponStates();
  private score=0;private bounty=BASE_BOUNTY;private scoreTarget=SCORE_TARGET;private endsAt=0;private kills=0;private deaths=0;private dead=false;private killer='';private ping=0;private pingTimer=0;private serverClockOffset=0;private hasClockOffset=false;private notice='';private noticeT=0;private slowUntil=0;
  private disposed=false;private ready=false;private paused=false;private lastLocalShot=0;private recoilPitch=0;private recoilYaw=0;private gun=new T.Group();private gunFlash:T.Mesh;private gunMaterial=new T.MeshBasicMaterial({color:0x202634});private handMaterial=new T.MeshBasicMaterial({color:0xffffff});private coarse=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  private movementClock=new MovementClock();private previousPosition=new T.Vector3();
  private jumpQueued=false;private reloadQueued=false;private requestedWeapon?:WeaponId;
  private life=0;private inputReset=0;private resyncCount=0;private predictionAt=0;
  private diagnostics:NetworkDiagnostics;private damageTimeline=new DamageTimeline();private deathReceivedAt?:number;
  private cameraOffset=new T.Vector3();private visualPosition=new T.Vector3();private remoteTarget=new T.Vector3();
  private pickupPreview:PickupPreview;private pickupFeedback:PickupFeedback;private appearance:WeaponAppearance;
  private tacticalBoard:TacticalBoard;private scope:SniperScope;private physicsTime=0;private awaitingWeapon=false;
  private warden?:WardenEntrance;
  private destroyedParts:ReadonlySet<string>=new Set();
  private blessing:WardenBlessingView;
  private blessingUntil=0;
  private snapshotInterval=50;private snapshotJitter=0;private lastSnapshotArrival=0;
  private radarCanvas:HTMLCanvasElement;private radarContext:CanvasRenderingContext2D;private radarPlayers=new Map<string,Net>();private radarTimer=0;

  constructor(private root:HTMLElement,private socket:Socket,private roomCode:string|undefined,private roundId:number,private onFatal:(reason:string)=>void,private playerId:string,initialSeq=0,roomActions?:{isHost:boolean;onLeave:()=>void;onEnd:()=>void}){
    this.seq=initialSeq;this.diagnostics=new NetworkDiagnostics(root);
    const performanceSettings=new PerformanceManager();this.renderer=new T.WebGLRenderer({antialias:performanceSettings.antialias,powerPreference:'high-performance'});this.renderer.setPixelRatio(performanceSettings.pixelRatio);this.renderer.setClearColor(0x16b9dc);root.append(this.renderer.domElement);
    root.insertAdjacentHTML('beforeend','<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+mobileMarkup());
    this.blessing=new WardenBlessingView(root,this.scene);
    this.tacticalBoard=new TacticalBoard(root,this.coarse);
    this.radarCanvas=root.querySelector('.co-minimap canvas')!;this.radarContext=this.radarCanvas.getContext('2d')!;
    this.hud=new HUD(root.querySelector('.co-hud')!);this.aimFeedback=new AimFeedback(root);this.feedback=new DamageFeedbackSystem(root.querySelector('.co-feedback')!);
    this.armory=new Armory(root,id=>{
      if(!this.ready||this.paused||!this.player.alive||!this.socket.connected)return false;
      this.input.set({aim:false});
      if(id!==this.active){this.requestedWeapon=id;this.awaitingWeapon=true;}
      return true;
    },()=>this.owned,this.restorePointerLock,id=>this.weapons[id].level);
    this.scene.add(this.arena.group,new T.HemisphereLight(0xffffff,0x16b9dc,2));this.effects=new WeaponEffects(this.scene,this.coarse);this.battle=new BattleFeedback(root);this.makeGun();this.appearance=new WeaponAppearance(this.gun);this.pickupFeedback=new PickupFeedback(root,this.coarse);this.pickupPreview=new PickupPreview(root);this.scope=new SniperScope(root,this.gun,this.coarse);this.makePickups();
    if(this.coarse)this.mobile=new MobileInput(root,this.input);else{this.desktop=new DesktopInput(root,this.input);root.onclick=e=>{if(!(e.target as HTMLElement).closest('.co-armory, [data-game-ui], button, input'))this.restorePointerLock();};}
    this.stopResize=observeArenaSize(root,(width,height)=>{this.cam.aspect=width/height;this.cam.updateProjectionMatrix();this.renderer.setSize(width,height,false);this.sizeRadar();});
    this.socket.on('match:pickup',this.onPickup);this.socket.on('match:snapshot',this.onSnapshot);this.socket.on('match:shot',this.onShot);this.socket.on('match:hit',this.onHit);this.socket.on('match:kill',this.onKill);this.socket.on('match:damage',this.onDamage);this.socket.on('match:warden',this.onWardenNotice);this.socket.on('disconnect',this.onDisconnect);this.socket.on('connect_error',this.onConnectError);this.loop=new GameLoop((dt,elapsed)=>this.update(dt,elapsed));this.settings=new GameSettings(root,()=>{this.tacticalBoard.close();this.root.dispatchEvent(new Event('combat:reset'));this.sendResetInput();this.desktop?.setEnabled(false);this.mobile?.setEnabled(false);this.armory.setEnabled(false);},requestLock=>{this.desktop?.setEnabled(true);this.mobile?.setEnabled(true);this.armory.setEnabled(true);if(requestLock)this.restorePointerLock();},true,roomActions?{...roomActions,code:roomCode??''}:undefined);
  }

  start(){if(this.disposed)return;this.paused=false;this.loop.start();}
  pause(){if(this.disposed)return;this.paused=true;this.warden?.hideHud();this.blessing.hide();this.tacticalBoard.setActive(false);this.settings?.setActive(false);this.desktop?.setEnabled(false);this.mobile?.setEnabled(false);this.armory.setEnabled(false);this.input.reset();this.loop.stop();const locked=document.pointerLockElement;if(locked&&(locked===this.root||this.root.contains(locked)))document.exitPointerLock?.();}
  resume(){if(this.disposed)return;this.paused=false;this.tacticalBoard.setActive(true);this.settings?.setActive(true);this.desktop?.setEnabled(true);this.mobile?.setEnabled(true);this.armory.setEnabled(true);this.loop.start();}
  private restorePointerLock=()=>{if(this.disposed||this.paused)return;if(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root)return;try{this.root.requestPointerLock?.()?.catch(()=>{});}catch{/* The settings hint remains available when pointer lock fails. */}};
  private sendResetInput(){
    const weapon=this.requestedWeapon;
    this.jumpQueued=false;this.reloadQueued=false;this.requestedWeapon=undefined;
    this.movementClock.reset();
    if(this.disposed||!this.ready||!this.socket?.connected||!this.player.alive)return;
    const command:Command={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),
      moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:false,reload:false,sprint:false,aim:false,reset:true,weapon};
    this.pending=[command];this.socket.emit('match:input',command);
  }
  private serverNow(){return Date.now()-this.serverClockOffset;}
  private makeGun(){const barrel=new T.Mesh(new T.BoxGeometry(.18,.16,.9),this.gunMaterial);barrel.position.set(.34,-.28,-.8);const pieces:[[number,number,number],[number,number,number]][]=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[geo,pos]of pieces){const mesh=new T.Mesh(new T.BoxGeometry(...geo),this.handMaterial);mesh.position.set(...pos);this.gun.add(mesh);}this.gunFlash=new T.Mesh(new T.OctahedronGeometry(.08),new T.MeshBasicMaterial({color:0xffd45d}));this.gunFlash.position.set(.34,-.25,-1.3);this.gunFlash.visible=false;this.gun.add(barrel,this.gunFlash);this.cam.add(this.gun);this.scene.add(this.cam);}
  private makePickups(){for(const id of WEAPON_IDS){const spec=WEAPON_SPECS[id],mesh=new T.Mesh(new T.OctahedronGeometry(.75),new T.MeshBasicMaterial({color:spec.color}));mesh.visible=false;this.pickupMeshes.set(id,mesh);this.scene.add(mesh);}}
  private predict(command:Command){
    this.previousPosition.copy(this.player.position);
    const state={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,
      velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};
    this.predictionAt+=MOVEMENT_STEP*1000;
    simulateMovement(state,command,staticArenaWorld(this.destroyedParts),this.physicsTime,this.predictionAt,this.slowUntil,this.blessingUntil);
    this.physicsTime+=MOVEMENT_STEP;
    this.player.position.set(state.x,state.y,state.z);this.player.velocityY=state.velocityY;
    this.player.jumpsUsed=state.jumpsUsed;this.player.supportId=state.supportId??null;
  }
  private visualBase(target:T.Vector3){return target.copy(this.previousPosition).lerp(this.player.position,this.movementClock.alpha);}

  private onSnapshot=(snapshot:Snapshot)=>{
    if(this.disposed||this.paused||!isCurrentRound(snapshot,this.roundId))return;
    if(!Array.isArray(snapshot?.players)||!Array.isArray(snapshot?.pickups))return this.onFatal('多人同步資料無效');
    const previousSnapshot=this.snaps[this.snaps.length-1];
    if(previousSnapshot&&snapshot.tick<=previousSnapshot.tick)return;
    const firstSnapshot=!this.ready;this.ready=true;
    const arrival=performance.now();if(this.lastSnapshotArrival){const interval=arrival-this.lastSnapshotArrival;this.diagnostics.record('snapshot_ms',interval);this.snapshotJitter=this.snapshotJitter*.8+Math.abs(interval-this.snapshotInterval)*.2;this.snapshotInterval=this.snapshotInterval*.85+interval*.15;}this.lastSnapshotArrival=arrival;
    snapshot.byId=new Map(snapshot.players.map(player=>[player.id,player]));this.snaps.push(snapshot);while(this.snaps.length>12)this.snaps.shift();
    const parts=snapshot.destroyedBuildingParts??[];
    if(parts.length!==this.destroyedParts.size||parts.some(part=>!this.destroyedParts.has(part))){
      this.destroyedParts=new Set(parts);this.arena.setDestroyed(this.destroyedParts);
    }
    const rawMe=snapshot.byId.get(this.playerId);if(!rawMe)return;const me=this.damageTimeline.reconcile({...rawMe,life:rawMe.life??0},snapshot.serverTime);if(firstSnapshot)this.seq=Math.max(this.seq,me.ack);const wasAlive=this.player.alive,respawned=!wasAlive&&me.alive;this.slowUntil=me.slowUntil;this.blessingUntil=me.alive?(me.blessingUntil??0):0;
    const lifeChanged=this.life!==(me.life??0),reset=firstSnapshot||lifeChanged||this.inputReset!==(me.inputReset??0);
    this.life=me.life??0;this.inputReset=me.inputReset??0;
    this.pending=this.pending.filter(command=>command.seq>Math.max(me.ack,me.discardedThrough??0));
    if(firstSnapshot||lifeChanged||wasAlive!==me.alive){
      this.pending=[];this.movementClock.reset();this.jumpQueued=false;this.reloadQueued=false;
      this.requestedWeapon=undefined;this.seq=Math.max(this.seq,me.ack,me.discardedThrough??0);
      this.resyncCount++;this.armory.close(false);this.mobile?.reset();
      this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen);
    }
    else if(reset){this.movementClock.reset();this.resyncCount++;}
    this.visualPosition.copy(this.cam.position);
    const oldPosition=this.player.position.clone();
    const reconciled:SimPlayer={x:me.x,y:me.y,z:me.z,yaw:me.yaw,pitch:me.pitch,velocityY:me.velocityY,supportId:me.supportId,jumpsUsed:me.jumpsUsed,alive:me.alive};
    this.physicsTime=replayMovement(reconciled,this.pending,staticArenaWorld(this.destroyedParts),snapshot.simulationTime,snapshot.serverTime,this.slowUntil,this.blessingUntil);
    this.predictionAt=snapshot.serverTime+this.pending.length*MOVEMENT_STEP*1000;
    const correction=Math.hypot(reconciled.x-oldPosition.x,reconciled.y-oldPosition.y,reconciled.z-oldPosition.z),hardCorrection=reset||respawned||correction>10;
    this.diagnostics.record('correction',correction);
    this.player.position.set(reconciled.x,reconciled.y,reconciled.z);this.player.velocityY=reconciled.velocityY;
    this.player.jumpsUsed=reconciled.jumpsUsed;this.player.supportId=reconciled.supportId??null;
    if(firstSnapshot||respawned){this.player.yaw=me.yaw;this.player.pitch=me.pitch;}
    if(hardCorrection){this.previousPosition.copy(this.player.position);this.cameraOffset.set(0,0,0);}
    else {
      this.previousPosition.add(this.player.position).sub(oldPosition);
      this.visualBase(oldPosition);this.cameraOffset.copy(this.visualPosition).sub(oldPosition);
    }
    this.player.hp=me.hp;this.player.alive=me.alive;this.handMaterial.color.setHex(me.color);if(this.active!==me.activeWeapon){this.input.set({aim:false});this.awaitingWeapon=false;}this.active=me.activeWeapon;this.awaitingWeapon=!!this.requestedWeapon||this.pending.some(command=>command.weapon!==undefined&&command.weapon!==me.activeWeapon);this.owned=new Set(me.ownedWeapons);this.weapons=me.weapons;this.score=me.score;this.bounty=me.bounty;this.scoreTarget=snapshot.scoreTarget;this.endsAt=snapshot.endsAt;this.kills=me.kills;this.deaths=me.deaths;this.dead=!me.alive;
    this.syncAvatars(snapshot.players);this.syncPickups(snapshot.pickups);this.armory.render(this.active);this.updatePanels(snapshot);
  };

  private updatePanels(snapshot:Snapshot){
    this.tacticalBoard.update(snapshot.players,this.roomCode,this.ping);
    this.radarPlayers=snapshot.byId??new Map(snapshot.players.map(player=>[player.id,player]));
  }

  private syncAvatars(players:Net[]){const ids=new Set(players.map(player=>player.id));for(const[id,avatar]of this.avatars)if(!ids.has(id)){avatar.dispose();this.avatars.delete(id);}for(const player of players){if(player.id===this.playerId)continue;let avatar=this.avatars.get(player.id);if(!avatar){avatar=new Bot(player.id,player.name,player.color);avatar.respawn(player.x,player.z);avatar.position.y=player.y-1.65;avatar.group.position.copy(avatar.position);this.avatars.set(player.id,avatar);this.scene.add(avatar.group,avatar.deathGroup);}if(player.alive&&!avatar.alive)avatar.respawn(player.x,player.z);if(!player.alive&&avatar.alive)avatar.damage(100);}}
  private syncPickups(pickups:Pickup[]){for(const pickup of pickups){const mesh=this.pickupMeshes.get(pickup.id);if(!mesh)continue;mesh.position.set(pickup.x,pickup.y+.9,pickup.z);mesh.visible=pickup.available;}}

  private sizeRadar(){const rect=this.radarCanvas?.getBoundingClientRect();if(!rect?.width||!rect.height)return;const ratio=Math.min(window.devicePixelRatio||1,1.5),width=Math.round(rect.width*ratio),height=Math.round(rect.height*ratio);if(this.radarCanvas.width!==width||this.radarCanvas.height!==height){this.radarCanvas.width=width;this.radarCanvas.height=height;}}
  private drawRadar(dt:number){
    this.radarTimer+=dt;
    if(this.radarTimer<1/30)return;
    this.radarTimer%=1/30;
    const canvas=this.radarCanvas,rect=canvas.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    this.sizeRadar();
    const latest=this.snaps[this.snaps.length-1];
    const royal=wardenOwner(latest?.warden);
    const marker=wardenRadarMarker(latest?.warden??null,latest?.wardenWarning??null,this.playerId);
    const ratio=canvas.width/rect.width,ctx=this.radarContext,width=rect.width,height=rect.height;
    const cx=width/2,cy=height/2+(marker?2:4),radius=Math.min(width,height)*(marker ? .32 : .38);
    ctx.setTransform(ratio,0,0,ratio,0,0);
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle='#ffffff24';
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.arc(cx,cy,radius,0,Math.PI*2);
    ctx.moveTo(cx-radius,cy);ctx.lineTo(cx+radius,cy);
    ctx.moveTo(cx,cy-radius);ctx.lineTo(cx,cy+radius);
    ctx.stroke();
    ctx.fillStyle='#dfffff';
    ctx.font='800 9px Arial';
    ctx.fillText('戰術雷達',8,14);
    const feet=this.player.position.y-1.65,floor=feet< -2?'B1':feet>=9?'RF':feet>=3?'2F':'1F';
    const label='戰術雷達 '+floor+(marker?' · '+marker.label:'');
    if(canvas.getAttribute('aria-label')!==label)canvas.setAttribute('aria-label',label);
    ctx.fillText(floor,60,14);
    const cos=Math.cos(this.player.yaw),sin=Math.sin(this.player.yaw);
    const project=(x:number,z:number)=>projectRadarPoint(x-this.player.position.x,z-this.player.position.z,cos,sin,radius);
    const writeHeight=(difference:number,x:number,y:number)=>{
      if(Math.abs(difference)<=2.5)return;
      ctx.fillStyle='#fff';
      ctx.fillText(difference>0?'▲':'▼',x-4,y-8);
    };
    const drawCrown=(x:number,y:number)=>{
      ctx.fillStyle='#bf65ff';ctx.strokeStyle='#f2ccff';ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(x-6,y-5);ctx.lineTo(x-3,y-3);ctx.lineTo(x,y-8);
      ctx.lineTo(x+3,y-3);ctx.lineTo(x+6,y-5);ctx.lineTo(x+4,y+1);ctx.lineTo(x-4,y+1);
      ctx.closePath();ctx.fill();ctx.stroke();
    };
    for(const player of this.radarPlayers.values()){
      if(player.id===this.playerId||!player.alive)continue;
      const avatar=this.avatars.get(player.id);
      const {x,y,offRadar}=project(avatar?.position.x??player.x,avatar?.position.z??player.z);
      const px=cx+x,py=cy+y;
      ctx.beginPath();
      ctx.arc(px,py,offRadar?5:4,0,Math.PI*2);
      ctx.fillStyle='#'+player.color.toString(16).padStart(6,'0');
      ctx.fill();
      if(offRadar){ctx.strokeStyle='#ffffffcc';ctx.lineWidth=1.5;ctx.stroke();}
      if(player.id===royal)drawCrown(px,py);
      writeHeight(player.y-this.player.position.y,px,py);
    }
    if(marker){
      const {x,y,offRadar}=project(marker.x,marker.z);
      const px=cx+x,py=cy+y;
      ctx.beginPath();
      ctx.moveTo(px,py-7);ctx.lineTo(px+7,py);ctx.lineTo(px,py+7);ctx.lineTo(px-7,py);ctx.closePath();
      ctx.fillStyle=marker.pending?'#172742':marker.color;
      ctx.fill();
      ctx.lineWidth=offRadar?2.2:1.6;
      ctx.strokeStyle=marker.pending?marker.color:'#2f1723';
      ctx.stroke();
      writeHeight(marker.y-feet,px,py);
      ctx.fillStyle=marker.color;
      ctx.fillText('◆ '+marker.label,8,height-5);
    }
    ctx.save();
    ctx.translate(cx,cy);
    ctx.fillStyle='#fff';
    ctx.shadowColor='#55f1ae';ctx.shadowBlur=7;
    ctx.beginPath();
    ctx.moveTo(0,-7);ctx.lineTo(5,6);ctx.lineTo(0,3);ctx.lineTo(-5,6);
    ctx.closePath();ctx.fill();ctx.restore();
    if(royal===this.playerId&&this.player.alive)drawCrown(cx,cy-9);
  }

  private onShot=(shot:RoundEvent<ShotEvent>)=>{
    if(this.disposed||this.paused||!this.ready||!isCurrentRound(shot,this.roundId))return;
    if(this.seenShots.has(shot.eventId))return;this.seenShots.add(shot.eventId);if(this.seenShots.size>512)this.seenShots.delete(this.seenShots.values().next().value!);
    const muzzle=new T.Vector3(),mine=shot.id===this.playerId;
    if(mine){muzzle.set(...shot.origin);}else{const avatar=this.avatars.get(shot.id);if(avatar)avatar.muzzlePosition(muzzle);else muzzle.set(...shot.origin).add(new T.Vector3(.34,-.27,0));}
    this.effects.play(shot,muzzle,!mine,mine,!mine);for(const hit of shot.hits)this.avatars.get(hit.targetId)?.hit();
  };
  private onPickup=(event:WeaponPickupEvent)=>{
    if(this.disposed||this.paused||!isCurrentRound(event,this.roundId))return;
    this.pickupFeedback.push(event,event.eventId);
  };
  private onHit=(event:RoundEvent<HitConfirmation>)=>{if(!this.disposed&&!this.paused&&this.ready&&isCurrentRound(event,this.roundId))this.battle.hit(event);};
  private onKill=(event:RoundEvent<MultiplayerKillEvent>)=>{if(!this.disposed&&!this.paused&&this.ready&&isCurrentRound(event,this.roundId))this.battle.kill(event);};
  private onDamage=(damage:DamageEvent)=>{
    if(this.disposed||this.paused||!this.ready||!isCurrentRound(damage,this.roundId)||!this.damageTimeline.accept(damage,this.life))return;
    this.player.hp=damage.hp;
    if(damage.hp===0){
      this.deathReceivedAt=performance.now();this.player.alive=false;this.dead=true;
      this.pending=[];this.jumpQueued=false;this.reloadQueued=false;this.requestedWeapon=undefined;this.awaitingWeapon=false;
      this.movementClock.reset();this.previousPosition.copy(this.player.position);
      this.input.clearCombat();this.input.set({moveX:0,moveY:0,sprint:false});
    }
    this.killer=damage.name;
    const attack=damage.wardenAttack?WARDEN_ATTACKS[damage.wardenAttack].name:damage.weapon?WEAPON_SPECS[damage.weapon].label:'';
    this.notice=attack?`遭 ${damage.name} 的 ${attack} 擊中`:`遭 ${damage.name} 擊中`;
    this.noticeT=.8;
    this.feedback.damage(damage.damage,new T.Vector3(damage.from.x,0,damage.from.z),this.player.position,new T.Vector3(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)));
  };
  private onWardenNotice=(event:RoundEvent<WardenNotice>)=>{
    if(!this.disposed&&!this.paused&&isCurrentRound(event,this.roundId))this.blessing.announce(event,this.serverNow());
  };
  private onDisconnect=()=>{this.pause();this.socket.sendBuffer.length=0;this.onFatal('連線已中斷');};private onConnectError=()=>this.onFatal('無法連線至遊戲伺服器');
  private measurePing(dt:number){this.pingTimer-=dt;if(this.pingTimer>0)return;this.pingTimer=1;const started=Date.now();this.socket.emit('net:ping',(serverTime:number)=>{if(this.disposed)return;this.ping=Date.now()-started;const offset=Date.now()-serverTime-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+offset*.2:offset;this.hasClockOffset=true;});}

  private updateRemotePlayers(dt:number){if(!this.snaps.length)return;const delay=clamp(80+this.ping*.1+this.snapshotJitter*1.5,80,120),renderAt=this.serverNow()-delay;let older=this.snaps[0],newer=this.snaps[0],alpha=0;const latest=this.snaps[this.snaps.length-1];if(renderAt>=latest.serverTime&&this.snaps.length>1){older=this.snaps[this.snaps.length-2];newer=latest;const span=Math.max(1,newer.serverTime-older.serverTime);alpha=1+Math.min(75,renderAt-newer.serverTime)/span;}else{for(let index=1;index<this.snaps.length;index++){if(this.snaps[index].serverTime>=renderAt){older=this.snaps[index-1];newer=this.snaps[index];break;}}alpha=older===newer?0:clamp((renderAt-older.serverTime)/Math.max(1,newer.serverTime-older.serverTime),0,1);}const blend=1-Math.exp(-dt*30);for(const[id,avatar]of this.avatars){const previous=older.byId?.get(id),next=newer.byId?.get(id);if(!previous||!next)continue;this.remoteTarget.set(previous.x+(next.x-previous.x)*alpha,previous.y+(next.y-previous.y)*alpha-1.65,previous.z+(next.z-previous.z)*alpha);if(next.supportId!==null&&next.supportId===previous.supportId){const a=platformPosition(next.supportId,older.simulationTime),b=platformPosition(next.supportId,newer.simulationTime),now=platformPosition(next.supportId,this.physicsTime);this.remoteTarget.x+=now.x-(a.x+(b.x-a.x)*alpha);this.remoteTarget.y+=now.y-(a.y+(b.y-a.y)*alpha);this.remoteTarget.z+=now.z-(a.z+(b.z-a.z)*alpha);avatar.group.position.copy(this.remoteTarget);}else avatar.group.position.lerp(this.remoteTarget,blend);avatar.group.rotation.y+=angleDelta(avatar.group.rotation.y,previous.yaw+angleDelta(previous.yaw,next.yaw)*alpha)*blend;avatar.position.copy(avatar.group.position);avatar.updateVisual(dt,Math.abs(next.x-previous.x)+Math.abs(next.z-previous.z)>.02,true);}}

  private updateWarden(dt:number){
    const latest=this.snaps[this.snaps.length-1];
    const serverTime=this.hasClockOffset?this.serverNow():latest?.serverTime??this.serverNow();
    if(this.blessing.showSpawnWarning(latest?.wardenWarning??null,serverTime))this.battle.wardenWarning();
    if(!latest?.warden){this.warden?.dispose();this.warden=undefined;return;}
    this.warden??=new WardenEntrance(this.scene,this.root,this.coarse,this.playerId);
    this.warden.update(latest.warden,serverTime,dt);
  }

  private update(dt:number,elapsed=dt){
    if(this.disposed||this.paused)return;
    this.diagnostics.record('frame_ms',elapsed*1000);
    this.measurePing(dt);
    if(!this.ready)return;
    this.diagnostics.beginCombatFrame();
    this.desktop?.update();const input=this.input.getState();
    const blocked=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused;
    const reloadingNow=this.weapons[this.active].reloadUntil>this.serverNow();
    if(this.active!=='sniper'||reloadingNow||input.reload||input.switchWeapon||!this.player.alive||blocked||this.awaitingWeapon){this.input.set({aim:false});input.aim=false;}
    if(blocked){input.shoot=false;input.jump=false;input.reload=false;input.switchWeapon=0;this.jumpQueued=false;this.reloadQueued=false;this.input.clearCombat();}
    const aiming=this.scope.update(this.active,input,this.player.alive,reloadingNow,blocked);
    if(aiming){input.lookX*=.25;input.lookY*=.25;}
    // Look remains display-rate; one-shot edges survive frames with no physics step.
    this.player.yaw-=input.lookX*.0024;this.player.pitch=clamp(this.player.pitch-input.lookY*.0021,-1.35,1.35);
    this.jumpQueued ||= input.jump;this.reloadQueued ||= input.reload;
    if(input.switchWeapon){const id=WEAPON_IDS[input.switchWeapon-1];if(id&&this.owned.has(id)&&id!==this.active){this.requestedWeapon=id;this.awaitingWeapon=true;}}
    let firedLocal=false;
    const spec=WEAPON_SPECS[this.active],state=this.weapons[this.active],time=this.serverNow();
    if(elapsed>MAX_INPUT_BACKLOG_MS/1000){this.sendResetInput();elapsed=0;}
    if(this.player.alive)this.movementClock.advance(elapsed,()=>{
      const command:Command={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),
        moveX:input.moveX,moveY:input.moveY,yaw:this.player.yaw,pitch:this.player.pitch,
        jump:this.jumpQueued,reload:this.reloadQueued,sprint:!!input.sprint,aim:aiming,weapon:this.requestedWeapon};
      this.jumpQueued=false;this.reloadQueued=false;this.requestedWeapon=undefined;
      if(input.shoot&&!blocked&&!this.awaitingWeapon&&time-this.lastLocalShot>=spec.fireDelay*1000&&state.ammo>0&&state.reloadUntil<=time){
        command.fire=true;firedLocal=true;this.recoilPitch=Math.min(.04,this.recoilPitch+.009);
        this.recoilYaw=clamp(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012);navigator.vibrate?.(8);this.lastLocalShot=time;
      }
      this.pending.push(command);this.predict(command);this.socket.emit('match:input',command);
    });
    // A missing connection/snapshot must not grow replay work forever. A reset
    // tells the server exactly which history is abandoned instead of shifting it.
    if(this.pending.length>120)this.sendResetInput();
    this.updateWarden(dt);
    this.updateRemotePlayers(dt);this.blessing.update(this.radarPlayers.values(),this.avatars,this.blessingUntil,this.serverNow(),wardenOwner(this.snaps[this.snaps.length-1]?.warden),this.playerId);for(const mesh of this.pickupMeshes.values())mesh.rotation.y+=dt*2;this.drawRadar(dt);
    this.noticeT=Math.max(0,this.noticeT-dt);this.effects.update(dt);this.feedback.update(dt,this.player.hp);const recoilDecay=Math.exp(-dt*16);this.recoilPitch*=recoilDecay;this.recoilYaw*=recoilDecay;const horizontalDecay=Math.pow(.5,dt/.12),verticalDecay=Math.pow(.5,dt/.08);this.cameraOffset.x*=horizontalDecay;this.cameraOffset.z*=horizontalDecay;this.cameraOffset.y*=verticalDecay;if(this.cameraOffset.lengthSq()<1e-6)this.cameraOffset.set(0,0,0);this.visualBase(this.visualPosition);this.visualPosition.add(this.cameraOffset);this.cam.position.copy(this.visualPosition);this.cam.rotation.set(this.player.pitch,this.player.yaw,0,'YXZ');this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0);this.gun.position.z=this.recoilPitch*2;
    const reloading=state.reloadUntil>this.serverNow();this.appearance.update(this.active,state.level);this.pickupFeedback.update(dt);this.hud.render({quickReloadSeconds:Math.max(0,Math.ceil((state.quickReloadUntil-this.serverNow())/1000)),level:state.level,capacity:magazineCapacity(this.active,state.level),hp:this.player.hp,ammo:state.ammo,reserve:Infinity,label:spec.label,notice:this.noticeT?this.notice:'',kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:false,kill:false,reloading,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1000))});this.cam.updateMatrixWorld(true);this.battle.update(dt,this.cam);
    this.statusTimer+=dt;if(this.statusTimer>=.08){this.statusTimer=0;const time=this.serverNow();for(const p of this.radarPlayers.values())if(p.alive&&(p.burnUntil>time||p.slowUntil>time)){const avatar=this.avatars.get(p.id);if(avatar)this.effects.status(avatar.position.clone().add(new T.Vector3(0,1.22,0)),p.burnUntil>time?'flame':'ice');}}
    this.arena.update(this.physicsTime,environmentAtSnapshot(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const aim=aimFromPlayer({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});const targets:import('../../../shared/combat').Combatant[]=[...this.avatars].map(([id,avatar])=>({id,x:avatar.position.x,y:avatar.position.y+1.65,z:avatar.position.z,yaw:avatar.group.rotation.y,alive:avatar.alive}));const effectWorld=arenaWorld(this.physicsTime,this.destroyedParts);
    const warden=this.snaps[this.snaps.length-1]?.warden;
    const bossTarget=warden&&this.warden?.target(warden,this.playerId);if(bossTarget)targets.push(bossTarget);
    const muzzle=weaponMuzzle(this.gunFlash,this.active);
    if(firedLocal){
      const origin=this.cam.position.toArray() as [number,number,number],direction=this.cam.getWorldDirection(new T.Vector3()).toArray() as [number,number,number];
      const result=this.diagnostics.measure('shotCPU_ms',()=>resolveShot(this.active,origin,direction,targets,Math.random,effectWorld,aiming,state.level));
      const visual:LocalShotEvent={...result,eventId:'local:'+this.seq,id:this.playerId,weapon:this.active,origin,dir:direction};
      this.effects.play(visual,muzzle,true,true,true,false);
    }
    this.pickupPreview.update([...this.pickupMeshes].map(([id,mesh])=>({id,position:mesh.position,available:mesh.visible,owned:this.owned.has(id),state:this.weapons[id]})),this.cam.position,effectWorld,this.player.alive&&!blocked);this.effects.updateLocalMuzzle(muzzle,this.active,this.cam.position,effectWorld);
    this.diagnostics.measure('flameCPU_ms',()=>this.effects.localFlame(this.player.alive&&!blocked&&!this.awaitingWeapon&&input.shoot&&this.active==='flame'&&!reloading&&state.ammo>0,weaponMuzzle(this.gunFlash,this.active),this.cam.position,this.cam.getWorldDirection(new T.Vector3()),effectWorld,dt,targets,state.level));this.aimFeedback.update(blocked||!this.player.alive?'neutral':this.diagnostics.measure('aimCPU_ms',()=>queryAim(this.active,aim.origin,aim.direction,targets,effectWorld,state.level)),this.player.alive&&!blocked);this.scope.render(this.renderer,this.scene,this.cam);
    this.diagnostics.endCombatFrame();
    if(this.deathReceivedAt!==undefined){this.diagnostics.record('deathFeedback_ms',performance.now()-this.deathReceivedAt);this.deathReceivedAt=undefined;}
    this.diagnostics.update(dt,{rtt:this.ping,pending:this.pending.length,camera:this.cameraOffset.length(),resets:this.resyncCount});
  }

  dispose(){
    if(this.disposed)return;
    this.disposed=true;this.paused=true;this.ready=false;
    this.loop.stop();this.diagnostics.dispose();
    this.socket.off('match:pickup',this.onPickup);this.socket.off('match:snapshot',this.onSnapshot);this.socket.off('match:shot',this.onShot);
    this.socket.off('match:hit',this.onHit);this.socket.off('match:kill',this.onKill);this.socket.off('match:damage',this.onDamage);this.socket.off('match:warden',this.onWardenNotice);
    this.socket.off('disconnect',this.onDisconnect);this.socket.off('connect_error',this.onConnectError);
    this.stopResize();this.root.onclick=null;
    this.desktop?.dispose();this.mobile?.dispose();this.tacticalBoard.dispose();this.settings?.dispose();this.armory.dispose();
    this.pickupPreview.dispose();this.pickupFeedback.dispose();this.scope.dispose();this.effects.dispose();this.battle.dispose();this.feedback.dispose();this.hud.dispose();this.aimFeedback.dispose();
    this.warden?.dispose();
    this.warden=undefined;
    this.blessing.dispose();
    for(const avatar of this.avatars.values())avatar.dispose();
    this.avatars.clear();
    // Arena, pickups, first-person meshes and textures are owned by this match.
    disposeResources(this.scene);this.scene.clear();
    this.pickupMeshes.clear();this.pending=[];this.snaps=[];this.radarPlayers.clear();this.seenShots.clear();
    this.renderer.dispose();this.renderer.forceContextLoss();this.renderer.domElement.remove();
    if(document.pointerLockElement===this.root)document.exitPointerLock?.();
    this.root.replaceChildren();
  }
}
