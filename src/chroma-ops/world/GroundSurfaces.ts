import { ARENA_BOUNDS, type ArenaBox } from '../../../shared/arena';
import { cityBox } from '../../../shared/city';
import { cutEntrances, ENTRY_HOLES } from '../../../shared/underground';

// Later paint regions take priority. Every visible ground point belongs to one polygon,
// including road intersections and the ground above the B1 ceiling.
const paint=[
  cityBox(0,0,ARENA_BOUNDS.width,ARENA_BOUNDS.depth,0,0x19b9dc),
  cityBox(0,0,78,62,0,0xd5edf0),
  cityBox(-65,0,16,180,0,0xe9edf1),cityBox(68,0,16,180,0,0xe9edf1),
  cityBox(0,-64,184,16,0,0xe9edf1),cityBox(0,76,210,12,0,0xe9edf1),
  cityBox(0,24,112,12,0,0xe9edf1),cityBox(0,102,92,16,0,0x99d9df),
];
export const GROUND_SURFACES=paint.flatMap((region,index)=>cutEntrances(region,[...ENTRY_HOLES,...paint.slice(index+1)]));

export function groundCoversBoxTop(box:ArenaBox){
  return box.maxY===0&&!ENTRY_HOLES.some(h=>Math.min(box.maxX,h.maxX)>Math.max(box.minX,h.minX)
    &&Math.min(box.maxZ,h.maxZ)>Math.max(box.minZ,h.minZ));
}
