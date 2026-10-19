import type { ArenaBox } from './arena.js';

export const FERRIS_WHEEL = { x: 0, z: -90, radius: 22, centerY: 22.2, cabins: 8, period: 60, width: 6, depth: 4 } as const;
export const CABIN_COLORS = [0xff4e98, 0x36d8c4, 0xffc330, 0x4b75e8, 0xc98cff, 0xff783d, 0x55d6ff, 0x92e34f];
const box = (x:number,y:number,z:number,w:number,h:number,d:number,color:number):ArenaBox =>
  ({minX:x-w/2,maxX:x+w/2,minY:y-h/2,maxY:y+h/2,minZ:z-d/2,maxZ:z+d/2,color});

// Supports are behind the open boarding side and outside the cabin path.
export const WHEEL_SUPPORTS: ArenaBox[] = [-1,1].flatMap(side => [
  box(side*8,10.5,-94,1.2,21,1.2,0xffc330),
  box(side*8,.25,-94,4,.5,4,0x243c70),
]).concat([box(0,21.2,-94,17,1.2,1.2,0xffc330)]);

export function cabinPosition(id:number,seconds:number) {
  const angle=(seconds/FERRIS_WHEEL.period+id/FERRIS_WHEEL.cabins)*Math.PI*2;
  return {x:FERRIS_WHEEL.x+Math.sin(angle)*FERRIS_WHEEL.radius,
    y:FERRIS_WHEEL.centerY-Math.cos(angle)*FERRIS_WHEEL.radius,z:FERRIS_WHEEL.z};
}

export function cabinBoxes(id:number,seconds:number):ArenaBox[] {
  const {x,y,z}=cabinPosition(id,seconds),color=CABIN_COLORS[id];
  return [
    box(x,y-.2,z,6,.4,4,color),
    box(x-2.9,y+.55,z,.2,1.1,4,color),
    box(x+2.9,y+.55,z,.2,1.1,4,color),
    box(x,y+.55,z-1.9,5.6,1.1,.2,color),
  ];
}

export function wheelBoxes(seconds:number):ArenaBox[] {
  return Array.from({length:FERRIS_WHEEL.cabins},(_,id)=>cabinBoxes(id,seconds)).flat();
}

export function supportingCabin(x:number,feet:number,z:number,seconds:number):number|null {
  for(let id=0;id<FERRIS_WHEEL.cabins;id++) {
    for(const b of cabinBoxes(id,seconds)) {
      const dx=Math.max(b.minX-x,0,x-b.maxX),dz=Math.max(b.minZ-z,0,z-b.maxZ);
      if(Math.abs(feet-b.maxY)<.025&&dx*dx+dz*dz<.42*.42)return id;
    }
  }
  return null;
}
