import { WEAPON_SPECS, weaponPickupKind, type WeaponId, type WeaponAmmoState } from '../../../shared/weapons';
import { rayWallDistance, type SimWorld } from '../../../shared/arena';

type Point={x:number;y:number;z:number};
export type PreviewPickup={id:WeaponId;position:Point;available:boolean;owned:boolean;state:Pick<WeaponAmmoState,'level'|'ammo'>};
export function nearbyPickupHint(pickups:PreviewPickup[],eye:Point,world:SimWorld):string{
  let nearest=7,selected:PreviewPickup|undefined;
  for(const pickup of pickups){
    if(!pickup.available)continue;
    const dx=pickup.position.x-eye.x,dy=pickup.position.y-eye.y,dz=pickup.position.z-eye.z,distance=Math.hypot(dx,dy,dz);
    if(distance>nearest)continue;
    if(distance>.001&&rayWallDistance(eye,{x:dx/distance,y:dy/distance,z:dz/distance},distance,world)<distance-.05)continue;
    nearest=distance;selected=pickup;
  }
  if(!selected)return '';
  const kind=weaponPickupKind(selected.id,selected.state,selected.owned);
  const effect=kind==='unlock'?'取得 Lv.1':kind==='upgrade'?`升至 Lv.${selected.state.level+1}・彈匣補滿`:kind==='refill'?'彈匣補滿':'快速換彈 8 秒・換彈時間 -25%';
  return `${WEAPON_SPECS[selected.id].label}｜${effect}`;
}
export class PickupPreview{
  private el=document.createElement('div');private signature='';
  constructor(root:HTMLElement){this.el.className='co-pickup-preview';this.el.hidden=true;root.append(this.el);}
  update(pickups:PreviewPickup[],eye:Point,world:SimWorld,enabled:boolean){
    const hint=enabled?nearbyPickupHint(pickups,eye,world):'';
    if(hint===this.signature)return;this.signature=hint;this.el.textContent=hint;this.el.hidden=!hint;
  }
  dispose(){this.el.remove();}
}
