export const DAY_NIGHT_PERIOD=240;
export type DayPhase='day'|'dusk'|'night'|'dawn';
const smooth=(t:number)=>t*t*(3-2*t);
export function dayNightAt(seconds:number):{phase:DayPhase;night:number;cycleTime:number}{
  const t=((seconds%DAY_NIGHT_PERIOD)+DAY_NIGHT_PERIOD)%DAY_NIGHT_PERIOD;
  if(t<90)return {phase:'day',night:0,cycleTime:t};
  if(t<120)return {phase:'dusk',night:smooth((t-90)/30),cycleTime:t};
  if(t<210)return {phase:'night',night:1,cycleTime:t};
  return {phase:'dawn',night:1-smooth((t-210)/30),cycleTime:t};
}
export function advanceEnvironment(seconds:number,dt:number,playing:boolean){
  return seconds+(playing?Math.max(0,dt):0);
}
export function environmentAtSnapshot(snapshot:{environmentTime:number;serverTime:number},serverNow:number){
  // Bound extrapolation when snapshots stop arriving; reconnects hydrate from the server again.
  return snapshot.environmentTime+Math.max(0,Math.min(.25,(serverNow-snapshot.serverTime)/1000));
}
