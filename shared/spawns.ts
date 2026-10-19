import { MALL_PICKUP_POINTS, ENTRY_HOLES, inside } from './underground.js';
import { ARENA_SPAWNS, ARENA_BOUNDS, blocked, groundHeight } from './arena.js';
export type SpawnPoint = [number, number];
export type Occupant = { x: number; y?:number; z: number; alive?: boolean };
export const SAFE_SPAWNS = ARENA_SPAWNS.filter(([x,z]) =>
  x>ARENA_BOUNDS.minX+1 && x<ARENA_BOUNDS.maxX-1 && z>ARENA_BOUNDS.minZ+1 && z<ARENA_BOUNDS.maxZ-1
  && !ENTRY_HOLES.some(h=>inside(x,z,h,2)) && groundHeight(x,z)===0 && !blocked(x,z,.75));
const same = (point: SpawnPoint, previous?: SpawnPoint) => previous && point[0]===previous[0] && point[1]===previous[1];
const distance = (point: SpawnPoint, occupant: Occupant) => Math.hypot(point[0]-occupant.x,point[1]-occupant.z);
const randomPoint = (points: SpawnPoint[], random: () => number): SpawnPoint =>
  [...points[Math.min(points.length-1,Math.max(0,Math.floor(random()*points.length)))]] as SpawnPoint;
export function chooseRespawnPoint(occupants: Occupant[], previous?: SpawnPoint, random = Math.random, candidates = SAFE_SPAWNS): SpawnPoint {
  const pool=candidates.filter(point=>!same(point,previous));
  if(!pool.length)throw new Error('No legal respawn candidates');
  const alive=occupants.filter(occupant=>occupant.alive!==false);
  const ranked=pool.map(point=>({point,distance:alive.reduce((nearest,occupant)=>Math.min(nearest,distance(point,occupant)),Infinity)}));
  const safe=ranked.filter(item=>item.distance>=20).map(item=>item.point);
  return randomPoint(safe.length?safe:ranked.sort((a,b)=>b.distance-a.distance).slice(0,3).map(item=>item.point),random);
}
export type WeaponPoint={x:number;y:number;z:number};
export const WEAPON_POINTS:WeaponPoint[]=[...SAFE_SPAWNS.map(([x,z])=>({x,y:0,z})),...MALL_PICKUP_POINTS];
export function initialWeaponPoints(id:string){return id==='smg'?[MALL_PICKUP_POINTS[0]]:id==='shotgun'?[MALL_PICKUP_POINTS[1]]:WEAPON_POINTS.filter(p=>p.y===0);}
export function chooseWeaponPoint(occupants: Occupant[], pickups: Occupant[], previous?: WeaponPoint, random = Math.random, candidates = WEAPON_POINTS): WeaponPoint | null {
  const obstacles=[...occupants.filter(occupant=>occupant.alive!==false),...pickups];
  const pool=candidates.filter(p=>(!previous||p.x!==previous.x||p.y!==previous.y||p.z!==previous.z)&&obstacles.every(o=>Math.hypot(p.x-o.x,p.y-(o.y??0),p.z-o.z)>=8));
  return pool.length?{...pool[Math.min(pool.length-1,Math.max(0,Math.floor(random()*pool.length)))]}:null;
}
