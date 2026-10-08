import { ARENA_SPAWNS, ARENA_BOUNDS, blocked, groundHeight } from './arena.js';
export type SpawnPoint = [number, number];
export type Occupant = { x: number; z: number; alive?: boolean };
export const SAFE_SPAWNS = ARENA_SPAWNS.filter(([x,z]) =>
  x>ARENA_BOUNDS.minX+1 && x<ARENA_BOUNDS.maxX-1 && z>ARENA_BOUNDS.minZ+1 && z<ARENA_BOUNDS.maxZ-1
  && groundHeight(x,z)===0 && !blocked(x,z,.75));
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
export function chooseWeaponPoint(occupants: Occupant[], pickups: Occupant[], previous?: SpawnPoint, random = Math.random, candidates = SAFE_SPAWNS): SpawnPoint | null {
  const obstacles=[...occupants.filter(occupant=>occupant.alive!==false),...pickups];
  const pool=candidates.filter(point=>!same(point,previous)&&obstacles.every(occupant=>distance(point,occupant)>=8));
  return pool.length?randomPoint(pool,random):null;
}
