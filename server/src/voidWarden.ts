import {
  ARENA_BOUNDS, PLAYER_EYE_HEIGHT, arenaBoxesNear, arenaWorld, overlapsBox, rayWallDistance,
  supportHeight, staticArenaWorld, type SimWorld,
} from '../../shared/arena.js';
import { movingBoxes } from '../../shared/movingPlatforms.js';
import { intactBox } from '../../shared/destruction.js';
import { MALL_ENTRIES } from '../../shared/underground.js';
import { navigationPath } from '../../shared/navigation.js';
import {
  VOID_WARDEN as rules, WARDEN_ATTACKS as moves, WARDEN_ENTRANCE, WARDEN_PATROL, wardenCanBeHit,
  type WardenAttack, type WardenAttackKind, type WardenPoint, type WardenSnapshot, type WardenSpawnWarning,
} from '../../shared/voidWarden.js';

export type WardenPlayer = {id:string;name?:string;x:number;y:number;z:number;alive:boolean;socketId?:string;protectUntil?:number};
type Damage = (victim:WardenPlayer,amount:number,from:WardenPoint,attack:WardenAttackKind)=>void;
type Obstacles = ReturnType<typeof movingBoxes>;
export type WardenRound = {
  spawnAt:number; boss:WardenSnapshot|null; finished:boolean; route:WardenPoint[]; repathAt:number;
  guard:WardenPoint|null; nextActionAt:number; nextAttack:number; hits:Set<string>;
  destroyed:ReadonlySet<string>; patrol:number; retaliator:string|null; lostAt:number; stuckAt:number;
  lastSeen:WardenPoint|null; lastFittingScale:number; retreat:WardenPoint|null;
};

export function createWardenRound(startAt:number,delay:number=rules.spawnDelayMs):WardenRound {
  return {spawnAt:startAt+delay,boss:null,finished:false,route:[],repathAt:0,guard:null,nextActionAt:0,nextAttack:0,hits:new Set(),destroyed:new Set(),patrol:0,retaliator:null,lostAt:0,stuckAt:0,lastSeen:null,lastFittingScale:1,retreat:null};
}

export function wardenSpawnWarning(round:WardenRound|undefined,at:number):WardenSpawnWarning|null {
  if(!round||round.boss||round.finished||at<round.spawnAt-rules.warningMs||at>=round.spawnAt)return null;
  return {...rules.location,spawnAt:round.spawnAt};
}

const gap=(a:WardenPoint,b:WardenPoint)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
const planar=(a:WardenPoint,b:WardenPoint)=>Math.hypot(a.x-b.x,a.z-b.z);
const point=(p:WardenPoint):WardenPoint=>({x:p.x,y:p.y,z:p.z});
const look=(a:WardenPoint,b:WardenPoint)=>Math.atan2(b.x-a.x,b.z-a.z);
const mix=(a:WardenPoint,b:WardenPoint,t:number)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,z:a.z+(b.z-a.z)*t});
const between=(value:number)=>Math.max(0,Math.min(1,value));
const feet=(player:WardenPlayer)=>player.y-PLAYER_EYE_HEIGHT;
const maxStep=.27;

type Terrain={dynamic:Obstacles;round:WardenRound;scale:number;breakable:boolean};

function hasClearance(p:WardenPoint,terrain:Terrain,breakable=false,commit=false) {
  const radius=rules.radius*terrain.scale,height=rules.height*terrain.scale;
  const {dynamic,round}=terrain;
  const candidates=[...arenaBoxesNear(p.x,p.z,Math.min(radius,Math.hypot(ARENA_BOUNDS.width,ARENA_BOUNDS.depth))),...dynamic];
  const hits:string[]=[];
  for(const box of candidates){
    if(box.maxY<=p.y+.025||box.minY>=p.y+height||!intactBox(box,round.destroyed)||!overlapsBox(p.x,p.z,box,radius))continue;
    if(!breakable||!terrain.breakable||p.y<0||!box.breakKey)return false;
    if(commit)hits.push(box.breakKey);
  }
  if(hits.length)round.destroyed=new Set([...round.destroyed,...hits]);
  return true;
}

function canStand(p:WardenPoint,terrain:Terrain,breakable=false,commit=false) {
  const radius=rules.radius*terrain.scale;
  if(p.x<ARENA_BOUNDS.minX+radius||p.x>ARENA_BOUNDS.maxX-radius||
    p.z<ARENA_BOUNDS.minZ+radius||p.z>ARENA_BOUNDS.maxZ-radius)return false;
  if(Math.abs(supportHeight(p.x,p.z,p.y+.24,staticArenaWorld(terrain.round.destroyed))-p.y)>.25)return false;
  return hasClearance({...p,y:p.y+.10},terrain,breakable,commit);
}

function traceWalk(from:WardenPoint,to:WardenPoint,terrain:Terrain,air=0,breakable=false,commit=false) {
  const steps=Math.max(1,Math.ceil(gap(from,to)/maxStep));
  let previous=from;
  for(let i=1;i<=steps;i++){
    const p=mix(from,to,i/steps);
    if(!canStand(p,terrain,breakable,commit)||(air>0&&!hasClearance({...p,y:p.y+air},terrain)))return previous;
    previous=p;
  }
  return previous;
}

function routeTo(from:WardenPoint,to:WardenPoint,terrain:Terrain,near=false,neutral=false) {
  const canWalk=(a:WardenPoint,b:WardenPoint)=>(!neutral||gap(b,rules.location)<=rules.leash)&&gap(traceWalk(a,b,terrain,0,true),b)<.015;
  if(canWalk(from,to))return [to];
  const path=navigationPath(from,to,canWalk,near,terrain.breakable||terrain.round.destroyed.size>0);
  return path.length&&(near||gap(path[path.length-1],to)<.1) ? path : [];
}

function retreatToSurface(boss:WardenPoint,terrain:Terrain) {
  for(const entry of MALL_ENTRIES){
    const beyond=entry.outer+3*Math.sign(entry.outer-entry.inner);
    const exit=entry.axis==='z'?{x:entry.cross,y:0,z:beyond}:{x:beyond,y:0,z:entry.cross};
    const route=routeTo(boss,exit,terrain);
    if(route.length)return {exit,route};
  }
  return null;
}

function limitAdvance(boss:WardenSnapshot,yaw:number,length:number) {
  if(boss.ownerId)return length;
  const dx=boss.x-rules.location.x,dz=boss.z-rules.location.z;
  const outward=dx*Math.sin(yaw)+dz*Math.cos(yaw);
  const exit=-outward+Math.sqrt(Math.max(0,outward**2+rules.leash**2-gap(boss,rules.location)**2));
  return Math.min(length,Math.max(0,exit));
}

function groundPoint(player:WardenPlayer,destroyed?:ReadonlySet<string>) {
  const floor=supportHeight(player.x,player.z,feet(player)+.12,staticArenaWorld(destroyed));
  const y=floor>.55||!Number.isFinite(floor) ? 0 : Math.max(-6,floor);
  return {x:player.x,y,z:player.z};
}

function setState(boss:WardenSnapshot,state:WardenSnapshot['state'],at:number) {
  if(boss.state===state)return;
  boss.state=state;
  boss.stateAt=at;
}

function cancel(round:WardenRound,boss:WardenSnapshot) {
  boss.attack=null;
  boss.targetId=null;
  boss.air=0;
  round.route=[];
  round.repathAt=0;
}

export function suspendWarden(round:WardenRound|undefined,playerId:string,at:number,leaving=false) {
  const boss=round?.boss;
  if(!round||!boss||boss.ownerId!==playerId||boss.state==='DESPAWN')return;
  if(!leaving&&(boss.state==='DEFEATED'||boss.state==='ALLIED'))return;
  cancel(round,boss);
  setState(boss,leaving?'DESPAWN':'WAIT',at);
}

export function damageWarden(round:WardenRound,player:WardenPlayer,amount:number,at:number) {
  const boss=round.boss;
  if(!boss||!player.alive||!player.socketId||!wardenCanBeHit(boss,player.id)||!Number.isFinite(amount)||amount<=0)return;
  const damage=Math.min(boss.hp,amount);
  boss.hp-=damage;
  if(boss.hp>0){
    if(round.retaliator!==player.id)round.repathAt=0;
    round.retaliator=player.id;round.stuckAt=0;
    if(!boss.ownerId&&boss.hp<boss.maxHp*rules.phaseTwoHp)boss.phaseTwo=true;
    return {damage,killed:false,recruited:false};
  }
  cancel(round,boss);
  if(boss.ownerId){
    setState(boss,'DESPAWN',at);
    return {damage,killed:true,recruited:false};
  }
  round.retaliator=null;
  const scoreAwarded=boss.heldBounty;boss.heldBounty=0;
  boss.ownerId=player.id;
  boss.ownerName=player.name??null;
  boss.enraged=false;
  boss.phaseTwo=false;
  setState(boss,'DEFEATED',at);
  return {damage,killed:true,recruited:true,scoreAwarded};
}

function visible(from:WardenPoint,to:WardenPoint,world:SimWorld) {
  const distance=gap(from,to);
  return distance<.001||rayWallDistance(from,{x:(to.x-from.x)/distance,y:(to.y-from.y)/distance,z:(to.z-from.z)/distance},distance,world)>=distance-.025;
}

function exposed(origin:WardenPoint,target:WardenPlayer,height:number,world:SimWorld) {
  return Math.abs(feet(target)-origin.y)<=height&&visible({...origin,y:origin.y+.75},{x:target.x,y:feet(target)+.76,z:target.z},world);
}

function startAttack(round:WardenRound,boss:WardenSnapshot,target:WardenPlayer,at:number,terrain:Terrain,world:SimWorld) {
  if(at<round.nextActionAt||Math.abs(feet(target)-boss.y)>1.6)return false;
  const distance=planar(boss,target),scale=boss.scale;
  const options:WardenAttackKind[]=['slash','dash','leap','burst'];
  const canUse:Record<WardenAttackKind,boolean>={
    slash:distance<=moves.slash.range*scale-.20,dash:distance>=4.8&&distance<=moves.dash.range*scale,
    leap:distance>=3.2&&distance<=moves.leap.range*scale,
    burst:boss.phaseTwo&&distance<=(moves.burst.range+1)*scale,
  };
  const next=options.map((_,i)=>(round.nextAttack+i)%options.length).find(i=>canUse[options[i]]);
  if(next===undefined||!visible({...boss,y:boss.y+1},{x:target.x,y:feet(target)+1,z:target.z},world))return false;
  const kind=options[next],from=point(boss),yaw=look(boss,target),rate=boss.enraged?rules.enrageRate:1;
  let to=from,jumpHeight=0,rays:WardenPoint[]|undefined;
  if(kind==='dash'||kind==='leap'){
    const length=limitAdvance(boss,yaw,Math.min(moves[kind].range*scale,distance+(kind==='dash'?2:.3)));
    const end={x:from.x+Math.sin(yaw)*length,y:from.y,z:from.z+Math.cos(yaw)*length};
    to=traceWalk(from,end,terrain,0,kind==='dash');
    if(planar(from,to)<1.5)return false;
    if(kind==='leap'){
      for(const height of [2.45,1.3,.65,.3]){
        if(hasClearance({...from,y:from.y+height},terrain)&&gap(traceWalk(from,to,terrain,height),to)<.03){jumpHeight=height;break;}
      }
      if(!jumpHeight)return false;
    }
  }else if(kind==='burst'){
    const origin={...from,y:from.y+.85};
    rays=Array.from({length:moves.burst.count},(_,i)=>{
      const angle=yaw+i*Math.PI*2/moves.burst.count,dir={x:Math.sin(angle),y:0,z:Math.cos(angle)};
      const length=Math.max(0,rayWallDistance(origin,dir,Math.min(rules.aggroRange,moves.burst.range*scale),world)-.13);
      return {x:from.x+dir.x*length,y:from.y,z:from.z+dir.z*length};
    }).filter(p=>planar(from,p)>1.4);
  }
  round.nextAttack=(next+1)%options.length;
  round.hits.clear();
  boss.yaw=yaw;
  boss.attack={kind,startedAt:at,rate,scale,from,to,yaw,jumpHeight,rays};
  setState(boss,'ATTACK',at);
  return true;
}

function nearSegment(p:WardenPoint,a:WardenPoint,b:WardenPoint,width:number) {
  const dx=b.x-a.x,dz=b.z-a.z;
  const t=between(((p.x-a.x)*dx+(p.z-a.z)*dz)/Math.max(.001,dx*dx+dz*dz));
  return planar(p,mix(a,b,t))<=width;
}

function runAttack(round:WardenRound,boss:WardenSnapshot,at:number,dt:number,targets:WardenPlayer[],terrain:Terrain,simulationTime:number,deal:Damage) {
  const attack=boss.attack!;
  const {kind,startedAt,rate,from,yaw}=attack;
  const scale=attack.scale??1;
  const elapsed=(at-startedAt)*rate;
  const world=arenaWorld(simulationTime,round.destroyed);
  function hit(source:WardenPoint,stage:number,condition:(p:WardenPlayer)=>boolean){
    for(const p of targets){
      const key=stage+':'+p.id;
      if(!p.alive||(p.protectUntil??0)>at||round.hits.has(key)||!condition(p))continue;
      round.hits.add(key);
      deal(p,moves[kind].damage,source,kind);
    }
  }
  if(kind==='slash'){
    const spec=moves.slash;
    spec.impact.forEach((contact,index)=>{
      if(elapsed<contact||elapsed-dt*1000*rate>=contact)return;
      hit(from,index,p=>planar(p,from)<=spec.range*scale&&
        Math.cos(look(from,p)-yaw)>=Math.cos(spec.angle/2)&&exposed(from,p,1.05,world));
    });
  }else if(kind==='dash'||kind==='leap'){
    const spec=moves[kind];
    const progress=between((elapsed-spec.windup)/(spec.duration-spec.windup));
    if(kind==='leap'&&elapsed<spec.windup){
      const rise=between((elapsed-moves.leap.lift)/(moves.leap.windup-moves.leap.lift));
      boss.air=hasClearance({...boss,y:boss.y+rise*attack.jumpHeight},terrain)?rise*attack.jumpHeight:0;
    }
    if(elapsed>=spec.windup){
      let landing=attack.to;
      if(kind==='leap'&&elapsed-dt*1000*rate<spec.windup){
        const player=targets.find(p=>p.id===boss.targetId);
        if(player&&Math.abs(feet(player)-from.y)<2.6){
          const angle=look(from,player);
          const length=limitAdvance(boss,angle,Math.min(moves.leap.range*scale,planar(from,player)));
          const desired={x:from.x+Math.sin(angle)*length,y:from.y,z:from.z+Math.cos(angle)*length};
          const reached=traceWalk(from,desired,terrain,attack.jumpHeight);
          if(planar(reached,from)>1){
            landing=reached;boss.yaw=angle;boss.attack={...attack,to:landing,yaw:angle};
          }
        }
      }
      const next=mix(from,landing,progress);
      const previous=point(boss);
      const air=kind==='leap'?(1-progress**2)*attack.jumpHeight:0;
      const reached=traceWalk(previous,next,terrain,air,kind==='dash',kind==='dash');
      Object.assign(boss,reached);
      boss.air=air>0&&hasClearance({...reached,y:reached.y+air},terrain)?air:0;
      if(gap(reached,next)>.03)boss.attack={...boss.attack!,to:point(reached)};
      if(kind==='dash'){
        const openedWorld=arenaWorld(simulationTime,round.destroyed);
        hit(previous,0,p=>nearSegment(p,previous,reached,moves.dash.width*scale)&&exposed(reached,p,1.05,openedWorld));
      }
    }
    if(kind==='leap'&&elapsed>=spec.duration)
      hit(boss,0,p=>planar(p,boss)<=moves.leap.radius*scale&&exposed(boss,p,.52,world));
  }else{
    const spec=moves.burst;
    const rays=attack.rays??[];
    if(elapsed>=spec.launch&&elapsed<=spec.impact+20){
      const previous=between((elapsed-spec.launch-dt*1000*rate)/(spec.impact-spec.launch));
      const progress=between((elapsed-spec.launch)/(spec.impact-spec.launch));
      hit(from,0,p=>Math.abs(feet(p)-from.y)<=1.35&&rays.some(end=>
        nearSegment(p,mix(from,end,previous),mix(from,end,progress),spec.width*scale))&&exposed(from,p,1.35,world));
    }
    if(elapsed>=spec.impact&&elapsed-dt*1000*rate<spec.impact)
      hit(from,0,p=>rays.some(end=>planar(p,end)<=spec.radius*scale&&exposed(end,p,.62,world)));
  }
  if(elapsed>=moves[kind].duration){
    boss.air=0;
    round.nextActionAt=at+moves[kind].recovery/rate;
    setState(boss,'STAGGER',at);
  }
}

export function stepWarden(round:WardenRound,at:number,dt:number,simulationTime:number,players:Iterable<WardenPlayer>,deal:Damage=()=>{}) {
  if(round.finished)return;
  if(!round.boss){
    if(at<round.spawnAt)return;
    round.boss={...rules.location,spawnAt:round.spawnAt,state:'SPAWN',stateAt:round.spawnAt,yaw:0,
      hp:rules.maxHp,maxHp:rules.maxHp,targetId:null,ownerId:null,ownerName:null,
      phaseTwo:false,enraged:false,attack:null,air:0,kills:0,scale:1,heldBounty:0};
  }
  const boss=round.boss;
  if(boss.state==='DESPAWN'){
    if(at>=boss.stateAt+rules.collapseMs){round.boss=null;round.finished=true;}
    return;
  }
  if(boss.state==='SPAWN'&&at<round.spawnAt+WARDEN_ENTRANCE.finish)return;
  const seats=[...players],owner=seats.find(p=>p.id===boss.ownerId);
  if(boss.ownerId&&!owner){
    cancel(round,boss);setState(boss,'DESPAWN',at);return;
  }
  if(boss.state==='DEFEATED'){
    if(at<boss.stateAt+rules.surrenderMs)return;
    boss.hp=rules.alliedHp;setState(boss,'ALLIED',at);return;
  }
  if(boss.state==='ALLIED'&&at<boss.stateAt+400)return;
  if(owner&&!owner.socketId){
    suspendWarden(round,owner.id,at);
    if(boss.state==='ALLIED')setState(boss,'WAIT',at);
    return;
  }
  if(owner&&!owner.alive&&!round.guard){
    round.guard=groundPoint(owner,round.destroyed);
    cancel(round,boss);
    setState(boss,'GUARD',at);
  }else if(owner?.alive&&round.guard){
    round.guard=null;
    round.repathAt=0;
  }
  if(boss.state==='ENRAGED'&&at<boss.stateAt+rules.enrageMs)return;
  if(boss.state!=='ATTACK'&&!boss.ownerId&&!boss.enraged&&boss.hp<boss.maxHp*rules.enrageHp){
    cancel(round,boss);boss.enraged=true;setState(boss,'ENRAGED',at);return;
  }
  const dynamic=movingBoxes(simulationTime);
  const roomGround=(p:WardenPlayer)=>groundPoint(p,round.destroyed);
  const terrain:Terrain={dynamic,round,scale:boss.scale,breakable:boss.kills>0&&boss.y>=-.05};
  if(boss.y>=-.05){
    if(round.retreat){round.retreat=null;round.repathAt=0;round.route=[];}
    round.lastFittingScale=boss.scale;
  }else if(round.retreat||(!canStand(boss,terrain)&&round.lastFittingScale<boss.scale)){
    terrain.scale=round.lastFittingScale;
    if(!round.retreat&&at>=round.repathAt){
      const escape=retreatToSurface(boss,terrain);
      round.repathAt=at+620;
      round.retreat=escape?.exit??null;
      round.route=escape?.route??[];
    }
    if(boss.state!=='ATTACK'){
      boss.targetId=null;
      advance(round,boss,terrain,at,dt,'CHASE',rules.speed);
      return;
    }
  }else if(!round.retreat){
    round.lastFittingScale=boss.scale;
  }
  const anchor=round.guard??(owner?roomGround(owner):rules.location);
  const leash=round.guard?rules.guardRadius:owner?rules.alliedRange:rules.leash;
  const targets=seats.filter(p=>p.alive&&!!p.socketId&&p.id!==boss.ownerId&&
    gap(roomGround(p),anchor)<=leash&&gap(roomGround(p),boss)<=rules.aggroRange);
  const world=()=>arenaWorld(simulationTime,round.destroyed);
  if(boss.state==='ATTACK'&&boss.attack){
    runAttack(round,boss,at,dt,targets,terrain,simulationTime,deal);return;
  }
  if(boss.state==='STAGGER'){
    if(at<round.nextActionAt)return;
    boss.attack=null;
  }

  const legal=targets.filter(p=>(p.protectUntil??0)<=at);
  const previous=legal.find(p=>p.id===boss.targetId);
  const retaliator=legal.find(p=>p.id===round.retaliator);
  if(!retaliator){round.retaliator=null;round.stuckAt=0;}
  if(at>=round.repathAt||boss.targetId!==null&&!previous){
    round.repathAt=at+620;
    boss.targetId=null;
    round.route=[];
    const sight=world();
    const sees=(p:WardenPlayer)=>visible({...boss,y:boss.y+Math.min(2.6*boss.scale,12)},p,sight);
    if(retaliator){
      const goal=roomGround(retaliator);
      const route=routeTo(boss,goal,terrain,true,!owner);
      const stalled=!route.length||gap(boss,route[route.length-1])<.18;
      if(stalled)round.stuckAt ||= at;
      else round.stuckAt=0;
      if(!round.stuckAt||at-round.stuckAt<rules.stuckMs){
        boss.targetId=retaliator.id;round.route=route;round.lastSeen=null;round.lostAt=0;
      }else{
        round.retaliator=null;round.stuckAt=0;
      }
    }
    if(!boss.targetId){
      const sorted=legal.sort((a,b)=>gap(roomGround(a),boss)-gap(roomGround(b),boss)||a.id.localeCompare(b.id));
      for(const enemy of sorted){
        if(!sees(enemy))continue;
        const goal=roomGround(enemy);
        const route=routeTo(boss,goal,terrain,false,!owner);
        if(!route.length)continue;
        boss.targetId=enemy.id;round.route=route;round.lastSeen=goal;round.lostAt=0;
        break;
      }
    }
    if(!boss.targetId&&!owner&&previous&&round.lastSeen){
      round.lostAt ||= at;
      if(at-round.lostAt<rules.searchMs){
        boss.targetId=previous.id;
        if(gap(boss,round.lastSeen)>.25)round.route=routeTo(boss,round.lastSeen,terrain,false,true);
      }
    }
    if(!boss.targetId){
      round.lastSeen=null;round.lostAt=0;
      if(owner){
        if(gap(boss,anchor)>(owner.alive?rules.followDistance:.25))
          round.route=routeTo(boss,anchor,terrain,true);
      }else{
        for(let i=0;i<WARDEN_PATROL.length;i++){
          const destination=WARDEN_PATROL[round.patrol];
          if(gap(boss,destination)>.4)round.route=routeTo(boss,destination,terrain,false,true);
          if(round.route.length)break;
          round.patrol=(round.patrol+1)%WARDEN_PATROL.length;
        }
      }
    }
  }
  const target=legal.find(p=>p.id===boss.targetId);
  if(target&&planar(boss,target)<=moves.dash.range*boss.scale&&startAttack(round,boss,target,at,terrain,world()))return;
  const resting=owner?(round.guard?'GUARD':'FOLLOW'):'PATROL';
  if(target&&gap(boss,roomGround(target))<=rules.stopDistance&&
    gap(traceWalk(boss,roomGround(target),terrain),roomGround(target))<.015){
    boss.yaw=look(boss,target);setState(boss,'CHASE',at);return;
  }
  if(!target&&owner?.alive&&gap(boss,anchor)<=rules.followDistance){
    setState(boss,resting,at);return;
  }
  const speed=owner&&!target?rules.followSpeed:boss.enraged?rules.enragedSpeed:rules.speed;
  advance(round,boss,terrain,at,dt,target?'CHASE':resting,speed);
}

function advance(round:WardenRound,boss:WardenSnapshot,terrain:Terrain,at:number,dt:number,state:WardenSnapshot['state'],speed:number) {
  setState(boss,state,at);
  while(round.route.length&&gap(boss,round.route[0])<.08)round.route.shift();
  const next=round.route[0];
  if(!next)return;
  const p=mix(boss,next,Math.min(1,speed*dt/gap(boss,next)));
  const reached=traceWalk(boss,p,terrain,0,true,true);
  if(gap(reached,boss)>.005){
    boss.yaw=look(boss,reached);
    Object.assign(boss,reached);
  }else{
    round.route=[];
    if(state==='PATROL')round.patrol=(round.patrol+1)%WARDEN_PATROL.length;
  }
}
