import * as T from 'three';
import type { WeaponId } from '../../../shared/weapons';

/** Matches the base barrel and the longer barrel added by SniperScope. */
export function weaponMuzzle(flash:T.Object3D,id:WeaponId,out=new T.Vector3()){
  if(id==='prism')flash.position.set(.4,-.36,-2.04);
  else flash.position.set(.34,-.25,id==='sniper'?-1.95:-1.3);
  flash.updateWorldMatrix(true,false);
  return flash.getWorldPosition(out);
}
