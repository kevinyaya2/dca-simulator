import * as T from 'three';
import { FERRIS_WHEEL, cabinBoxes } from '../../../shared/ferrisWheel';

export class FerrisWheel {
  readonly group=new T.Group();
  private rotor=new T.Group();
  private cabins:T.Mesh[][]=[];

  constructor() {
    const {radius,centerY,z}=FERRIS_WHEEL;
    this.rotor.position.set(0,centerY,z);
    for(const [r,color] of [[radius,0xffc330],[radius*.72,0x169ee0]]) {
      const mesh=new T.Mesh(new T.TorusGeometry(r,.65,6,64),new T.MeshBasicMaterial({color}));
      this.rotor.add(mesh);
    }
    for(let n=0;n<12;n++) {
      const spoke=new T.Mesh(new T.BoxGeometry(.3,radius*2,.3),new T.MeshBasicMaterial({color:0xffffff}));
      spoke.rotation.z=n*Math.PI/12;this.rotor.add(spoke);
    }
    const hub=new T.Mesh(new T.CylinderGeometry(1.6,1.6,10,12),new T.MeshBasicMaterial({color:0x55d6ff}));
    hub.rotation.x=Math.PI/2;hub.position.set(0,centerY,z-2);this.group.add(hub,this.rotor);
    // Static support meshes are drawn by Arena from the shared collision boxes.
    for(let id=0;id<FERRIS_WHEEL.cabins;id++) {
      const parts=cabinBoxes(id,0).map(box=>{
        const mesh=new T.Mesh(new T.BoxGeometry(box.maxX-box.minX,box.maxY-box.minY,box.maxZ-box.minZ),new T.MeshBasicMaterial({color:box.color}));
        this.group.add(mesh);return mesh;
      });
      this.cabins.push(parts);
    }
    this.update(0);
  }

  update(seconds:number) {
    this.rotor.rotation.z=seconds/FERRIS_WHEEL.period*Math.PI*2;
    this.cabins.forEach((parts,id)=>cabinBoxes(id,seconds).forEach((b,index)=>parts[index].position.set((b.minX+b.maxX)/2,(b.minY+b.maxY)/2,(b.minZ+b.maxZ)/2)));
  }

  dispose() {
    this.group.traverse(object=>{if(object instanceof T.Mesh){object.geometry.dispose();(object.material as T.Material).dispose();}});
  }
}
