import { MALL_BOXES, undergroundHeight } from './underground.js';
import { WHEEL_SUPPORTS } from './ferrisWheel.js';
import { movingBoxes, platformPosition, supportingPlatform } from './movingPlatforms.js';
import { CITY_BOXES, CITY_PROPS, CITY_SPAWNS, CITY_BUILDINGS, cityRampHeight } from './city.js';
import { GLASSHOUSE_BOXES } from './glasshouse.js';
import { breakableSections, intactBox } from './destruction.js';
export type ArenaBox = { minX: number; maxX: number; minZ: number; maxZ: number; minY: number; maxY: number; color: number;breakKey?:string };
export type SimInput = { moveX: number; moveY: number; lookX: number; lookY: number; jump: boolean; sprint?: boolean; aim?: boolean };
export type SimPlayer = { x: number; y: number; z: number; yaw: number; pitch: number; velocityY: number; jumpsUsed: number; alive: boolean; supportId?: number | null };
export type RayPoint={x:number;y:number;z:number};
export type SimWorld = { boxes: readonly ArenaBox[]; heightAt: (x: number, z: number) => number;destroyed?:ReadonlySet<string>;
  rayCandidates?:(origin:RayPoint,direction:RayPoint,max:number)=>Iterable<ArenaBox> };
export const ARENA_BOUNDS = { minX: -154, maxX: 154, minZ: -140, maxZ: 140, width: 308, depth: 280 } as const;
export const ARENA_CAMERA_FAR = 560;
export const PLAYER_MOVE_SPEED = 8;
export const SPRINT_MULTIPLIER = 1.2;
export const PLAYER_EYE_HEIGHT = 1.65;
export const PLAYER_BODY_HEIGHT = 1.8;
export const PLAYER_RADIUS = 0.42;
export const JUMP_SPEED = 7;
export const GRAVITY = 14;
export const MAX_STEP_HEIGHT = 0.35;
const EPSILON = 0.0001;
export const ARENA_SPAWNS: [number,number][] = CITY_SPAWNS;
export const ARENA_BUILDINGS = CITY_BUILDINGS.map(b=>({...b,openSouth:true}));
const rect = (x: number, z: number, w: number, d: number, h: number, color: number, minY = 0): ArenaBox =>
  ({ minX: x-w/2, maxX: x+w/2, minZ: z-d/2, maxZ: z+d/2, minY, maxY: minY+h, color });
export const ARENA_BOXES: ArenaBox[] = [
  ...WHEEL_SUPPORTS,...CITY_BOXES,...CITY_PROPS,...MALL_BOXES,...GLASSHOUSE_BOXES,
  rect(-152,0,4,280,19,0x2d58c8), rect(152,0,4,280,19,0xec3478),
  rect(0,-138,308,4,17,0xf3a72d), rect(0,138,308,4,17,0x35c955),
  ...[
  rect(0,-3,6,6,3,0xf04b55), rect(-22,13,8,3,2,0xffb738),
  rect(24,-14,8,3,2,0x4b75e8), rect(-3,20,3,8,2,0x7a4bd5), rect(5,-25,3,8,2,0x35c955),
  rect(-40,-8,12,2,4,0x8d55d5), rect(-34,-19,2,18,4,0x8d55d5), rect(-49,-19,2,18,4,0x8d55d5),
  rect(42,10,13,2,4,0xef4c7b), rect(36,20,2,18,4,0xef4c7b), rect(49,20,2,18,4,0xef4c7b),
  rect(-43,-34,4,4,2,0xffc330), rect(42,34,4,4,2,0x35c955),
  rect(-12,92,32,3,3,0x35c955),
  ].flatMap((box,index)=>breakableSections(box,`cover:${index}`)),
];
export function staticArenaWorld(destroyed?:ReadonlySet<string>):SimWorld {
  return {boxes:ARENA_BOXES,heightAt:terrainHeight,destroyed,
    rayCandidates:(origin,direction,max)=>arenaRayCandidates(origin,direction,max,destroyed)};
}
const filteredArenas=new WeakMap<ReadonlySet<string>,ArenaBox[]>();
export function arenaWorld(seconds:number,destroyed?:ReadonlySet<string>):SimWorld {
  let boxes=ARENA_BOXES;
  if(destroyed?.size){
    const cached=filteredArenas.get(destroyed);
    boxes=cached??ARENA_BOXES.filter(box=>intactBox(box,destroyed));
    if(!cached)filteredArenas.set(destroyed,boxes);
  }
  const dynamic=movingBoxes(seconds);
  return {boxes:[...boxes,...dynamic],heightAt:terrainHeight,
    rayCandidates:(origin,direction,max)=>arenaRayCandidates(origin,direction,max,destroyed,dynamic)};
}
export function groundHeight(x: number, z: number) {
  const ramp=cityRampHeight(x,z);if(ramp!==null)return ramp;
  if(x>-22&&x<22&&z>52&&z<72)return 12;
  if(x>-25&&x<-16&&z>40&&z<=52)return z-40;
  if(x>-12&&x<20&&z>88&&z<112)return 6;
  if(x>-38&&x<=-12&&z>88&&z<112)return Math.max(0,(x+38)/26*6);
  return 0;
}
// Ground surface remains available for ground-only spawns; physics can also support floors below it.
export function terrainHeight(x:number,z:number){return undergroundHeight(x,z)??groundHeight(x,z);}
const spatialCells=new Map<string,ArenaBox[]>();
let minCellX=Infinity,maxCellX=-Infinity,minCellZ=Infinity,maxCellZ=-Infinity;
for(const box of ARENA_BOXES)for(let x=Math.floor(box.minX/16);x<=Math.floor(box.maxX/16);x++)for(let z=Math.floor(box.minZ/16);z<=Math.floor(box.maxZ/16);z++){
  const key=`${x},${z}`,cell=spatialCells.get(key)||[];cell.push(box);spatialCells.set(key,cell);
  minCellX=Math.min(minCellX,x);maxCellX=Math.max(maxCellX,x);minCellZ=Math.min(minCellZ,z);maxCellZ=Math.max(maxCellZ,z);
}
// Supercover DDA over the same immutable cells used by player collision.
// No ray results are cached: terrain versions and moving platforms belong to
// the world which supplied the query, including historical shooting worlds.
export function arenaRayCandidates(origin:RayPoint,direction:RayPoint,max:number,destroyed?:ReadonlySet<string>,dynamic:readonly ArenaBox[]=[]):ArenaBox[]{
  if(![origin.x,origin.y,origin.z,direction.x,direction.y,direction.z,max].every(Number.isFinite)||max<0)
    return [...ARENA_BOXES.filter(box=>intactBox(box,destroyed)),...dynamic];
  let start=0,end=max;
  for(const [o,d,min,maxBound] of [[origin.x,direction.x,minCellX*16,(maxCellX+1)*16],
    [origin.z,direction.z,minCellZ*16,(maxCellZ+1)*16]]){
    if(Math.abs(d)<1e-9){if(o<min||o>maxBound)return [...dynamic];continue;}
    const a=(min-o)/d,b=(maxBound-o)/d;start=Math.max(start,Math.min(a,b));end=Math.min(end,Math.max(a,b));
    if(start>end)return [...dynamic];
  }
  const found=new Set<ArenaBox>();
  const visit=(x:number,z:number)=>{for(const box of spatialCells.get(`${x},${z}`)??[])if(intactBox(box,destroyed))found.add(box);};
  const x=origin.x+direction.x*start,z=origin.z+direction.z*start;
  let ix=Math.floor(x/16),iz=Math.floor(z/16);
  const sx=Math.abs(direction.x)<1e-9?0:Math.sign(direction.x),sz=Math.abs(direction.z)<1e-9?0:Math.sign(direction.z);
  let tx=sx?((sx>0?(ix+1)*16:ix*16)-origin.x)/direction.x:Infinity;
  let tz=sz?((sz>0?(iz+1)*16:iz*16)-origin.z)/direction.z:Infinity;
  const dx=sx?16/Math.abs(direction.x):Infinity,dz=sz?16/Math.abs(direction.z):Infinity;
  // Include neighbours at the entry point; a ray can touch a box at t=0.
  const boundaryX=Math.abs(x/16-Math.round(x/16))<1e-9,boundaryZ=Math.abs(z/16-Math.round(z/16))<1e-9;
  if(boundaryX)visit(Math.round(x/16)-1,iz);
  if(boundaryZ)visit(ix,Math.round(z/16)-1);
  if(boundaryX&&boundaryZ)visit(Math.round(x/16)-1,Math.round(z/16)-1);
  const limit=(maxCellX-minCellX+maxCellZ-minCellZ+8)*2;
  for(let steps=0;steps<limit;steps++){
    visit(ix,iz);
    if(Math.min(tx,tz)>end||!sx&&!sz)break;
    if(Math.abs(tx-tz)<1e-9){visit(ix+sx,iz);visit(ix,iz+sz);ix+=sx;iz+=sz;tx+=dx;tz+=dz;}
    else if(tx<tz){ix+=sx;tx+=dx;}else{iz+=sz;tz+=dz;}
  }
  for(const box of dynamic)found.add(box);
  return [...found];
}
export function arenaBoxesNear(x:number,z:number,radius=1){
  const found=new Set<ArenaBox>();
  for(let ix=Math.floor((x-radius)/16);ix<=Math.floor((x+radius)/16);ix++)for(let iz=Math.floor((z-radius)/16);iz<=Math.floor((z+radius)/16);iz++)for(const box of spatialCells.get(`${ix},${iz}`)||[])found.add(box);
  return [...found];
}
export function overlapsBox(x: number, z: number, box: ArenaBox, radius = PLAYER_RADIUS) {
  const dx = Math.max(box.minX-x, 0, x-box.maxX), dz = Math.max(box.minZ-z, 0, z-box.maxZ);
  return dx*dx + dz*dz < radius*radius;
}
export function blocked(x: number, z: number, radius = PLAYER_RADIUS, feet = 0, boxes: readonly ArenaBox[] = ARENA_BOXES) {
  if(boxes===ARENA_BOXES)boxes=arenaBoxesNear(x,z,radius);
  return boxes.some(box => overlapsBox(x,z,box,radius) && feet < box.maxY-EPSILON && feet+PLAYER_BODY_HEIGHT > box.minY+EPSILON);
}
export function pointBlocked(x: number, y: number, z: number, radius = .04, boxes: readonly ArenaBox[] = ARENA_BOXES) {
  return boxes.some(box => y >= box.minY && y <= box.maxY && overlapsBox(x,z,box,radius));
}
// Slab intersection works for parallel rays and origins inside a solid.
export function rayBoxDistance(origin:{x:number;y:number;z:number}, direction:{x:number;y:number;z:number},
  box:{minX:number;maxX:number;minY:number;maxY:number;minZ:number;maxZ:number}, max:number):number|null {
  let near=0,far=max;
  // Keep the original X/Y/Z slab order without dynamic property names in this hot path.
  if(Math.abs(direction.x)<1e-9){if(origin.x<box.minX||origin.x>box.maxX)return null;}
  else {const a=(box.minX-origin.x)/direction.x,b=(box.maxX-origin.x)/direction.x;
    near=Math.max(near,Math.min(a,b));far=Math.min(far,Math.max(a,b));if(near>far)return null;}
  if(Math.abs(direction.y)<1e-9){if(origin.y<box.minY||origin.y>box.maxY)return null;}
  else {const a=(box.minY-origin.y)/direction.y,b=(box.maxY-origin.y)/direction.y;
    near=Math.max(near,Math.min(a,b));far=Math.min(far,Math.max(a,b));if(near>far)return null;}
  if(Math.abs(direction.z)<1e-9){if(origin.z<box.minZ||origin.z>box.maxZ)return null;}
  else {const a=(box.minZ-origin.z)/direction.z,b=(box.maxZ-origin.z)/direction.z;
    near=Math.max(near,Math.min(a,b));far=Math.min(far,Math.max(a,b));if(near>far)return null;}
  return near<=max?near:null;
}
export function rayWallDistance(origin: {x:number;y:number;z:number}, direction: {x:number;y:number;z:number}, max: number,
  world: SimWorld = { boxes: ARENA_BOXES, heightAt: terrainHeight }) {
  let nearest=max;
  const candidates=world.rayCandidates?.(origin,direction,max)??(world.boxes===ARENA_BOXES?arenaRayCandidates(origin,direction,max,world.destroyed):world.boxes);
  for(const box of candidates){const hit=rayBoxDistance(origin,direction,box,nearest);if(hit!==null)nearest=hit;}
  // Only the height field is sampled; boxes are intersected once regardless of range.
  for(let distance=0;distance<=nearest;distance+=.1){
    if(origin.y+direction.y*distance<world.heightAt(origin.x+direction.x*distance,origin.z+direction.z*distance))return distance;
  }
  return nearest;
}
export function supportHeight(x: number, z: number, ceiling: number, world: SimWorld={boxes:ARENA_BOXES,heightAt:terrainHeight}) {
  let height = world.heightAt(x,z);
  for (const box of world.boxes===ARENA_BOXES?arenaBoxesNear(x,z):world.boxes) {
    if(!intactBox(box,world.destroyed))continue;
    if(box.maxY <= ceiling+EPSILON && overlapsBox(x,z,box)) height=Math.max(height,box.maxY);
  }
  return height;
}
export function stepPlayer(player: SimPlayer, input: SimInput, dt: number,
  world: SimWorld = { boxes: ARENA_BOXES, heightAt: terrainHeight }, moveScale=1, timeSeconds?:number) {
  if(!player.alive)return;
  if(world.boxes===ARENA_BOXES)world={...world,boxes:arenaBoxesNear(player.x,player.z,7).filter(box=>intactBox(box,world.destroyed))};
  const staticWorld=world;
  if(timeSeconds!==undefined)world={...staticWorld,boxes:[...staticWorld.boxes,...movingBoxes(timeSeconds)]};
  player.yaw-=input.lookX*.0024;
  player.pitch=Math.max(-1.35,Math.min(1.35,player.pitch-input.lookY*.0021));
  let feet=player.y-PLAYER_EYE_HEIGHT;
  let support=supportHeight(player.x,player.z,feet+.02,world);
  let grounded=Math.abs(feet-support)<=.02 && player.velocityY<=0;
  if(grounded) { player.jumpsUsed=0; player.velocityY=0; }
  else if(player.jumpsUsed===0) player.jumpsUsed=1;
  if(input.jump && player.jumpsUsed<2) { player.velocityY=JUMP_SPEED; player.jumpsUsed++; grounded=false; }
  const forwardX=-Math.sin(player.yaw), forwardZ=-Math.cos(player.yaw);
  let moveX=forwardX*input.moveY+Math.cos(player.yaw)*input.moveX;
  let moveZ=forwardZ*input.moveY-Math.sin(player.yaw)*input.moveX;
  const length=Math.hypot(moveX,moveZ);
  if(length>0) { moveX=moveX/length*PLAYER_MOVE_SPEED*moveScale*(input.sprint?SPRINT_MULTIPLIER:1.0); moveZ=moveZ/length*PLAYER_MOVE_SPEED*moveScale*(input.sprint?SPRINT_MULTIPLIER:1.0); }
  const duration=Math.max(0,Math.min(.25,dt));
  const steps=Math.max(1,Math.ceil(duration/(1/120))), h=duration/steps;
  for(let n=0;n<steps;n++) {
    if(timeSeconds!==undefined) {
      const before=timeSeconds+n*h, after=before+h;
      const id=grounded?supportingPlatform(player.x,player.y-PLAYER_EYE_HEIGHT,player.z,before):null;
      if(id!==null) {
        const a=platformPosition(id,before),b=platformPosition(id,after);
        player.x+=b.x-a.x;player.y+=b.y-a.y;player.z+=b.z-a.z;
      }
      world={...staticWorld,boxes:[...staticWorld.boxes,...movingBoxes(after)]};
    }
    feet=player.y-PLAYER_EYE_HEIGHT;
    const canMove=(x:number,z:number) => !blocked(x,z,PLAYER_RADIUS,feet+(grounded?MAX_STEP_HEIGHT:0),world.boxes)
      && world.heightAt(x,z) <= feet+(grounded?MAX_STEP_HEIGHT:EPSILON);
    const x=player.x+moveX*h;
    if(canMove(x,player.z))player.x=x;
    const z=player.z+moveZ*h;
    if(canMove(player.x,z))player.z=z;
    support=supportHeight(player.x,player.z,feet+(grounded?MAX_STEP_HEIGHT:.04),world);
    if(grounded && Math.abs(support-feet)<=MAX_STEP_HEIGHT) {
      player.y=support+PLAYER_EYE_HEIGHT;player.velocityY=0;player.jumpsUsed=0;continue;
    }
    grounded=false;
    if(player.jumpsUsed===0)player.jumpsUsed=1;
    let nextFeet=feet+player.velocityY*h-GRAVITY*h*h/2;
    player.velocityY-=GRAVITY*h;
    if(nextFeet>feet) {
      for(const box of world.boxes) {
        if(overlapsBox(player.x,player.z,box) && feet+PLAYER_BODY_HEIGHT<=box.minY+EPSILON && nextFeet+PLAYER_BODY_HEIGHT>box.minY) {
          nextFeet=Math.min(nextFeet,box.minY-PLAYER_BODY_HEIGHT);player.velocityY=0;
        }
      }
    }
    if(player.velocityY<=0 && feet>=support-(timeSeconds!==undefined?.04:EPSILON) && nextFeet<=support) {
      nextFeet=support;player.velocityY=0;player.jumpsUsed=0;grounded=true;
    }
    player.y=nextFeet+PLAYER_EYE_HEIGHT;
  }
  if(timeSeconds!==undefined)player.supportId=player.velocityY<=0?supportingPlatform(player.x,player.y-PLAYER_EYE_HEIGHT,player.z,timeSeconds+duration):null;
}
