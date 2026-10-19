import type { ArenaBox } from './arena.js';
import { cabinPosition, supportingCabin, wheelBoxes } from './ferrisWheel.js';
import { cityBox } from './city.js';

export const LIFT_ID=8;
export const LIFT={x:68,z:28,width:4,depth:4,period:28} as const;
export function liftHeight(seconds:number):number {
  const t=((seconds%28)+28)%28;
  if(t<3)return 0;
  if(t<7)return (t-3)/4*6;
  if(t<10)return 6;
  if(t<14)return 6+(t-10)/4*6;
  if(t<17)return 12;
  if(t<21)return 12-(t-17)/4*6;
  if(t<24)return 6;
  return 6-(t-24)/4*6;
}
export function platformPosition(id:number,seconds:number){
  return id===LIFT_ID?{x:LIFT.x,y:liftHeight(seconds),z:LIFT.z}:cabinPosition(id,seconds);
}
export function liftBoxes(seconds:number):ArenaBox[]{
  const y=liftHeight(seconds);
  return [cityBox(68,28,4,4,y,0xff4e98,y-.3),cityBox(66.1,28,.2,4,y+1.1,0xffffff,y),cityBox(69.9,28,.2,4,y+1.1,0xffffff,y),cityBox(68,26.1,4,.2,y+1.1,0xffffff,y)];
}
export function movingBoxes(seconds:number){return [...wheelBoxes(seconds),...liftBoxes(seconds)];}
export function supportingPlatform(x:number,feet:number,z:number,seconds:number):number|null {
  if(Math.abs(x-LIFT.x)<2.5&&Math.abs(z-LIFT.z)<2.5)for(const b of liftBoxes(seconds)){
    const dx=Math.max(b.minX-x,0,x-b.maxX),dz=Math.max(b.minZ-z,0,z-b.maxZ);
    if(Math.abs(feet-b.maxY)<.025&&dx*dx+dz*dz<.42*.42)return LIFT_ID;
  }
  return supportingCabin(x,feet,z,seconds);
}
