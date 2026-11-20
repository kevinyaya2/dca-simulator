import type { WardenSnapshot, WardenSpawnWarning } from '../../../shared/voidWarden';

export function wardenRadarMarker(boss:WardenSnapshot|null,warning:WardenSpawnWarning|null,playerId:string){
  if(boss){
    if(boss.state==='DESPAWN')return null;
    const color=boss.ownerId===playerId?'#56ffe1':boss.ownerId?'#94bfff':'#ff974f';
    return {x:boss.x,y:boss.y,z:boss.z,color,pending:false,label:'虛空騎士'};
  }
  if(!warning)return null;
  return {x:warning.x,y:warning.y,z:warning.z,color:'#ffcf76',pending:true,label:'騎士出生點'};
}

export function projectRadarPoint(dx:number,dz:number,cos:number,sin:number,radius:number){
  const distance=Math.hypot(dx,dz);
  const scale=radius/Math.max(70,distance);
  return {x:(dx*cos-dz*sin)*scale,y:(dx*sin+dz*cos)*scale,offRadar:distance>70};
}
