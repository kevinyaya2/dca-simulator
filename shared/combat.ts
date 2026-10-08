import { ARENA_BOXES, groundHeight, PLAYER_EYE_HEIGHT, rayBoxDistance, rayWallDistance, type SimWorld } from './arena.js';
import { WEAPON_SPECS, type WeaponId } from './weapons.js';
export type Vec3=[number,number,number];
export type Combatant={id:string;x:number;y:number;z:number;yaw:number;alive:boolean};
export type ShotRay={dir:Vec3;end:Vec3;kind:'range'|'wall'|'body'|'head';targetId?:string};
export type PlannedHit={targetId:string;damage:number;headshot:boolean;position:Vec3};
export type ShotResult={rays:ShotRay[];hits:PlannedHit[]};
export type ShotEvent=ShotResult&{eventId:string;id:string;weapon:WeaponId;origin:Vec3;dir:Vec3};
export type ConfirmedHit=PlannedHit&{killed:boolean};
export type HitConfirmation={eventId:string;weapon:WeaponId;hits:ConfirmedHit[]};
export type KillEvent={eventId:string;at:number;attackerId:string;attackerName:string;victimId:string;victimName:string;weapon:WeaponId;headshot:boolean;multi:number;streak:number;title?:string};
const world:SimWorld={boxes:ARENA_BOXES,heightAt:groundHeight};
const point=(v:Vec3)=>({x:v[0],y:v[1],z:v[2]});
const dot=(a:Vec3,b:Vec3)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const sub=(a:Vec3,b:Vec3):Vec3=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
const length=(v:Vec3)=>Math.hypot(...v);
export const normalize=(v:Vec3):Vec3=>{const l=length(v)||1;return v.map(n=>n/l) as Vec3;};
export const along=(origin:Vec3,dir:Vec3,t:number):Vec3=>[origin[0]+dir[0]*t,origin[1]+dir[1]*t,origin[2]+dir[2]*t];
export const aimDirection=(yaw:number,pitch:number):Vec3=>[-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)];
export function offsetDirection(base:Vec3,x:number,y:number):Vec3{
  const right=normalize(Math.abs(base[1])>.999?[1,0,0]:[-base[2],0,base[0]]);
  const up:Vec3=[right[1]*base[2]-right[2]*base[1],right[2]*base[0]-right[0]*base[2],right[0]*base[1]-right[1]*base[0]];
  return normalize([base[0]+right[0]*x+up[0]*y,base[1]+right[1]*x+up[1]*y,base[2]+right[2]*x+up[2]*y]);
}
export function damageAtDistance(id:WeaponId,distance:number,headshot=false){
  const s=WEAPON_SPECS[id],f=s.falloff;
  const multiplier=f?1-(1-f.minimum)*Math.max(0,Math.min(1,(distance-f.start)/(f.end-f.start))):1;
  return Math.max(1,Math.round(s.damage*multiplier*(headshot?(s.headshot??1):1)));
}
export function intersectCharacter(origin:Vec3,dir:Vec3,target:Combatant,max:number){
  const c=Math.cos(target.yaw),s=Math.sin(target.yaw),dx=origin[0]-target.x,dz=origin[2]-target.z;
  const o={x:c*dx-s*dz,y:origin[1]-(target.y-PLAYER_EYE_HEIGHT),z:s*dx+c*dz};
  const d={x:c*dir[0]-s*dir[2],y:dir[1],z:s*dir[0]+c*dir[2]};
  // Rest-pose boxes match the actual head, torso, arms, and legs. Animation is cosmetic.
  const regions=[
    {kind:'head' as const,minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},
    {kind:'body' as const,minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},
    {kind:'body' as const,minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},
    ...[-1,1].map(sign=>({kind:'body' as const,minX:sign*.48-.08,maxX:sign*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),
    ...[-1,1].map(sign=>({kind:'body' as const,minX:sign*.22-.095,maxX:sign*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095})),
  ];
  let best:{distance:number;kind:'head'|'body'}|undefined;
  for(const region of regions){const distance=rayBoxDistance(o,d,region,max);if(distance!==null&&(!best||distance<best.distance))best={distance,kind:region.kind};}
  return best;
}
export function traceRay(origin:Vec3,dir:Vec3,range:number,targets:Combatant[],simulationWorld=world):ShotRay{
  let distance=rayWallDistance(point(origin),point(dir),range,simulationWorld);
  let kind:ShotRay['kind']=distance<range?'wall':'range',targetId:string|undefined;
  for(const target of targets){if(!target.alive)continue;const hit=intersectCharacter(origin,dir,target,distance);if(hit&&hit.distance<distance){distance=hit.distance;kind=hit.kind;targetId=target.id;}}
  return{dir,end:along(origin,dir,distance),kind,targetId};
}
export function resolveShot(id:WeaponId,origin:Vec3,base:Vec3,targets:Combatant[],rng= Math.random,simulationWorld=world):ShotResult{
  const spec=WEAPON_SPECS[id],rays:ShotRay[]=[],hits=new Map<string,PlannedHit>();
  const add=(targetId:string,damage:number,headshot:boolean,position:Vec3)=>{
    const old=hits.get(targetId);if(old){old.damage+=damage;old.headshot ||= headshot;}else hits.set(targetId,{targetId,damage,headshot,position});
  };
  if(id==='flame'){
    const angle=12*Math.PI/180;
    rays.push(traceRay(origin,base,spec.range,targets,simulationWorld));
    for(let n=0;n<24;n++){const radius=Math.sqrt((n+.5)/24)*Math.tan(angle),phase=n*2.399963;const dir=offsetDirection(base,Math.cos(phase)*radius,Math.sin(phase)*radius);rays.push(traceRay(origin,dir,spec.range,targets,simulationWorld));}
    for(const target of targets){if(!target.alive)continue;const feet=target.y-PLAYER_EYE_HEIGHT;
      let selected:{position:Vec3;angle:number}|undefined;
      for(const offset of [[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]]){
        const position:Vec3=[target.x+offset[0],feet+offset[1],target.z+offset[2]],delta=sub(position,origin),distance=length(delta);
        if(distance>spec.range||distance<.001)continue;const dir=normalize(delta),a=Math.acos(Math.max(-1,Math.min(1,dot(dir,base))));
        if(a<=angle&&rayWallDistance(point(origin),point(dir),distance,simulationWorld)>=distance-.001&&(!selected||a<selected.angle))selected={position,angle:a};
      }
      if(selected)add(target.id,Math.round(spec.damage*(1-.4*selected.angle/angle)),false,selected.position);
    }
  }else{
    for(let n=0;n<(spec.pellets??1);n++){
      const dir=offsetDirection(base,(rng()-.5)*spec.spread,(rng()-.5)*spec.spread),ray=traceRay(origin,dir,spec.range,targets,simulationWorld);rays.push(ray);
      if(id!=='rocket'&&ray.targetId)add(ray.targetId,damageAtDistance(id,length(sub(ray.end,origin)),ray.kind==='head'),ray.kind==='head',ray.end);
    }
    if(id==='rocket'){
      const ray=rays[0];if(ray.kind!=='range'){
        const explosion=along(ray.end,ray.dir,-.06);
        for(const target of targets){if(!target.alive)continue;const position:Vec3=[target.x,target.y-PLAYER_EYE_HEIGHT+1.22,target.z],delta=sub(position,explosion),distance=length(delta);
          if(target.id===ray.targetId)add(target.id,spec.damage,false,ray.end);
          else if(distance<(spec.splash??0)&&rayWallDistance(point(explosion),point(normalize(delta)),distance,simulationWorld)>=distance-.001)add(target.id,Math.max(1,Math.round(spec.damage*(1-distance/spec.splash!))),false,position);
        }
      }
    }
  }
  return{rays,hits:[...hits.values()]};
}
export class KillTracker{
  private states=new Map<string,{last:number;multi:number;streak:number}>();private sequence=0;
  constructor(private prefix='kill'){}
  reset(){this.states.clear();}
  death(id:string){this.states.delete(id);}
  remove(id:string){this.states.delete(id);}
  record(attacker:{id:string;name:string;alive:boolean},victim:{id:string;name:string},weapon:WeaponId,headshot:boolean,at:number):KillEvent{
    this.death(victim.id);const previous=this.states.get(attacker.id);
    const state=attacker.alive?{last:at,multi:previous&&at-previous.last<=4000?previous.multi+1:1,streak:(previous?.streak??0)+1}:{last:at,multi:0,streak:0};
    if(attacker.alive)this.states.set(attacker.id,state);
    const titles:Record<number,string>={3:'勢如破竹',5:'大殺特殺',7:'無人能擋',10:'戰場主宰'};
    return{eventId:`${this.prefix}:${++this.sequence}`,at,attackerId:attacker.id,attackerName:attacker.name,victimId:victim.id,victimName:victim.name,weapon,headshot,multi:state.multi,streak:state.streak,title:titles[state.streak]};
  }
}
