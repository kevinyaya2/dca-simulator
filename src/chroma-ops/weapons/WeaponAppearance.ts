import * as T from 'three';
import { WEAPON_SPECS, type WeaponId, type WeaponLevel } from '../../../shared/weapons';

export const LEVEL_COLORS=[0xb7c8d8,0x52e4e0,0xffd267] as const;
export function createPrismCannon(){
  const group=new T.Group();
  const metal=new T.MeshBasicMaterial({color:0x282343});
  const casing=new T.MeshBasicMaterial({color:0x584768});
  const barrel=new T.Mesh(new T.CylinderGeometry(.21,.28,1.05,6),metal);
  barrel.rotation.x=-Math.PI/2;barrel.position.z=-.28;group.add(barrel);
  const housing=new T.Mesh(new T.BoxGeometry(.51,.46,.5),casing);
  housing.position.z=.22;group.add(housing);
  const colors=[0xffd25b,0xff738d,0x77dcff];
  for(let i=0;i<colors.length;i++){
    const ring=new T.Mesh(new T.TorusGeometry(.22+i*.05,.032,6,12),new T.MeshBasicMaterial({color:colors[i]}));
    ring.position.z=-.72-i*.15;group.add(ring);
  }
  const crystal=new T.Mesh(new T.OctahedronGeometry(.16),new T.MeshBasicMaterial({color:0xffefb3}));
  crystal.position.set(0,.25,.07);crystal.scale.set(.8,.8,1.8);group.add(crystal);
  return group;
}

/** Preallocated parts are owned and disposed by the match's scene. */
export class WeaponAppearance {
  private signature='';
  private parts:T.Mesh[]=[];
  private material=new T.MeshBasicMaterial({color:LEVEL_COLORS[0]});
  private accent=new T.MeshBasicMaterial();
  private readonly prism=createPrismCannon();
  constructor(gun:T.Group){
    const pieces:[number[],number[]][]=[
      [[.012,.045,.62],[.438,-.28,-.8]],
      [[.15,.22,.16],[.34,-.45,-.67]],
      [[.012,.035,.62],[.242,-.28,-.8]],
      [[.14,.025,.32],[.34,-.185,-.84]],
    ];
    for(const [size,position] of pieces){const mesh=new T.Mesh(new T.BoxGeometry(size[0],size[1],size[2]),this.parts.length===3?this.accent:this.material);mesh.position.set(position[0],position[1],position[2]);mesh.visible=false;gun.add(mesh);this.parts.push(mesh);}
    this.prism.position.set(.4,-.36,-.92);this.prism.visible=false;gun.add(this.prism);
  }
  update(id:WeaponId,level:WeaponLevel){
    const signature=`${id}:${level}`;if(signature===this.signature)return;this.signature=signature;
    this.material.color.setHex(LEVEL_COLORS[level-1]);this.accent.color.setHex(WEAPON_SPECS[id].color);
    this.parts.forEach((part,index)=>part.visible=level>=2&&(index<2||level===3));
    this.prism.visible=id==='prism';
  }
}
