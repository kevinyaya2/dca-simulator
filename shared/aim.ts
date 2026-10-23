import { ARENA_CAMERA_FAR, rayWallDistance, type SimWorld } from './arena.js';
import { aimDirection, intersectCharacter, flameTargetPoints, FLAME_CONE_ANGLE, type Vec3, type Combatant } from './combat.js';
import { weaponRange, type WeaponLevel, type WeaponId } from './weapons.js';

export type AimState='neutral'|'in-range'|'out-of-range'|'blocked';
// A geometric preview, never a damage prediction or a way to see through cover.
export function queryAim(id:WeaponId,origin:Vec3,direction:Vec3,targets:readonly Combatant[],world:SimWorld,level:WeaponLevel=1):AimState {
  const range=weaponRange(id,level),previewRange=Math.max(ARENA_CAMERA_FAR,range+2),point={x:origin[0],y:origin[1],z:origin[2]};
  const wall=rayWallDistance(point,{x:direction[0],y:direction[1],z:direction[2]},previewRange,world);
  let nearest=wall,state:AimState=wall<previewRange?'blocked':'neutral';
  for(const target of targets){
    if(!target.alive)continue;
    const hit=intersectCharacter(origin,direction,target,nearest);
    if(hit&&hit.distance<nearest){nearest=hit.distance;state=nearest<=range?'in-range':'out-of-range';}
  }
  if(id!=='flame')return state;
  // Same body samples and 12-degree cone as flame damage; occlusion is checked
  // independently for every sample, including targets away from the centre ray.
  let visibleDistance=Infinity;
  for(const target of targets){
    if(!target.alive)continue;
    for(const sample of flameTargetPoints(target)){
      const x=sample[0]-origin[0],y=sample[1]-origin[1],z=sample[2]-origin[2],distance=Math.hypot(x,y,z);
      if(distance<.001||distance>previewRange)continue;
      const dir={x:x/distance,y:y/distance,z:z/distance};
      if(dir.x*direction[0]+dir.y*direction[1]+dir.z*direction[2]<Math.cos(FLAME_CONE_ANGLE))continue;
      if(rayWallDistance(point,dir,distance,world)>=distance-.001)visibleDistance=Math.min(visibleDistance,distance);
    }
  }
  return visibleDistance<Infinity?(visibleDistance<=range?'in-range':'out-of-range'):state==='blocked'?'blocked':'neutral';
}

export function aimFromPlayer(player:{x:number;y:number;z:number;yaw:number;pitch:number}) {
  return {origin:[player.x,player.y,player.z] as Vec3,direction:aimDirection(player.yaw,player.pitch)};
}
