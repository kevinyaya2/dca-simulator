import * as T from 'three';
import { WEAPON_SPECS, type WeaponId, type WeaponLevel } from '../../../shared/weapons';

export const LEVEL_COLORS=[0xb7c8d8,0x52e4e0,0xffd267] as const;
/** Preallocated parts are owned and disposed by the match's scene. */
export class WeaponAppearance {
  private signature='';
  private parts:T.Mesh[]=[];
  private material=new T.MeshBasicMaterial({color:LEVEL_COLORS[0]});
  private accent=new T.MeshBasicMaterial();
  constructor(gun:T.Group){
    const pieces:[number[],number[]][]=[
      [[.012,.045,.62],[.438,-.28,-.8]],
      [[.15,.22,.16],[.34,-.45,-.67]],
      [[.012,.035,.62],[.242,-.28,-.8]],
      [[.14,.025,.32],[.34,-.185,-.84]],
    ];
    for(const [size,position] of pieces){const mesh=new T.Mesh(new T.BoxGeometry(size[0],size[1],size[2]),this.parts.length===3?this.accent:this.material);mesh.position.set(position[0],position[1],position[2]);mesh.visible=false;gun.add(mesh);this.parts.push(mesh);}
  }
  update(id:WeaponId,level:WeaponLevel){
    const signature=`${id}:${level}`;if(signature===this.signature)return;this.signature=signature;
    this.material.color.setHex(LEVEL_COLORS[level-1]);this.accent.color.setHex(WEAPON_SPECS[id].color);
    this.parts.forEach((part,index)=>part.visible=level>=2&&(index<2||level===3));
  }
}
