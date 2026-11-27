import { PLAYER_EYE_HEIGHT, rayBoxDistance, rayWallDistance, type SimWorld } from './arena.js';
import { along, flameTargetPoints, normalize, type Combatant, type PlannedHit, type Vec3 } from './combat.js';
import { WEAPON_SPECS } from './weapons.js';

export const PRISM_SPEED=360;
export const PRISM_RADIUS=2.5;
export const PRISM_BLAST_RADIUS=WEAPON_SPECS.prism.splash!;
const PRISM_EDGE_DAMAGE=50;
const EPSILON=.001;

export type PrismOrb={id:string;ownerId:string;position:Vec3;direction:Vec3;remaining:number};
export type PrismImpact={id:string;position:Vec3};
export type PrismUnlock={id:string;x:number;y:number;z:number};

const point=([x,y,z]:Vec3)=>({x,y,z});
const delta=(a:Vec3,b:Vec3):Vec3=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
const dot=(a:Vec3,b:Vec3)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];

export function launchPrism(id:string,ownerId:string,position:Vec3,direction:Vec3):PrismOrb{
  return {id,ownerId,position,direction:normalize(direction),remaining:WEAPON_SPECS.prism.range};
}

function clearPath(from:Vec3,to:Vec3,world:SimWorld){
  const offset=delta(to,from),distance=Math.hypot(...offset);
  return distance<EPSILON||rayWallDistance(point(from),point(normalize(offset)),distance,world)>=distance-EPSILON;
}

function bodyPoints(target:Combatant,origin:Vec3):Vec3[]{
  if(target.kind==='warden')return flameTargetPoints(target,origin);
  const feet=target.y-PLAYER_EYE_HEIGHT;
  return [[target.x,feet+.45,target.z],[target.x,feet+1.22,target.z],[target.x,feet+1.92,target.z]];
}

function wallDistance(start:Vec3,direction:Vec3,travel:number,world:SimWorld){
  const origin=point(start),dir=point(direction);
  let nearest=rayWallDistance(origin,dir,travel,world);
  const middle=along(start,direction,nearest/2);
  const boxes=world.boxesNear?.(middle[0],middle[2],nearest/2+PRISM_RADIUS)??world.boxes;
  for(const box of boxes){
    // The sides of the orb hit walls. Its core clears floor and ceiling at eye height.
    const hit=rayBoxDistance(origin,dir,{
      minX:box.minX-PRISM_RADIUS,maxX:box.maxX+PRISM_RADIUS,
      minZ:box.minZ-PRISM_RADIUS,maxZ:box.maxZ+PRISM_RADIUS,
      minY:box.minY,maxY:box.maxY,
    },nearest);
    if(hit===null)continue;
    if(hit===0){
      const dx=origin.x-Math.max(box.minX,Math.min(box.maxX,origin.x));
      const dz=origin.z-Math.max(box.minZ,Math.min(box.maxZ,origin.z));
      if(dx*dir.x+dz*dir.z>=0)continue;
    }
    nearest=hit;
  }
  return nearest;
}

export function advancePrism(orb:PrismOrb,dt:number,targets:readonly Combatant[],world:SimWorld){
  const travel=Math.min(orb.remaining,Math.max(0,dt)*PRISM_SPEED);
  if(!travel)return null;
  const start=orb.position, direction=orb.direction;
  const wall=wallDistance(start,direction,travel,world);
  let distance=wall,directId:string|undefined;
  for(const target of targets){
    if(!target.alive||target.id===orb.ownerId)continue;
    for(const sample of bodyPoints(target,start)){
      const offset=delta(sample,start),projection=dot(offset,direction);
      const radiusSquared=PRISM_RADIUS*PRISM_RADIUS;
      const gapSquared=dot(offset,offset);
      if(projection<0&&gapSquared>radiusSquared)continue;
      const chord=radiusSquared-(gapSquared-projection*projection);
      if(chord<0)continue;
      const contact=Math.max(0,projection-Math.sqrt(chord));
      if(contact>=distance||!clearPath(along(start,direction,contact),sample,world))continue;
      distance=contact;
      directId=target.id;
    }
  }
  orb.position=along(start,direction,distance);
  orb.remaining-=distance;
  const hitWall=wall<travel;
  if(!directId&&!hitWall&&orb.remaining>EPSILON)return null;

  const blast=hitWall&&!directId?along(start,direction,Math.max(0,distance-.12)):orb.position;
  const hits:PlannedHit[]=[];
  for(const target of targets){
    if(!target.alive||target.id===orb.ownerId)continue;
    let nearest=PRISM_BLAST_RADIUS,position:Vec3|undefined;
    for(const sample of bodyPoints(target,blast)){
      const gap=Math.hypot(...delta(sample,blast));
      if(gap>nearest||!clearPath(blast,sample,world))continue;
      nearest=gap;
      position=sample;
    }
    if(!position)continue;
    const peak=WEAPON_SPECS.prism.damage;
    const damage=target.id===directId?peak:Math.round(peak+(PRISM_EDGE_DAMAGE-peak)*nearest/PRISM_BLAST_RADIUS);
    hits.push({targetId:target.id,damage,headshot:false,position});
  }
  return {impact:{id:orb.id,position:orb.position} satisfies PrismImpact,hits};
}
