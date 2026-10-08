import * as THREE from 'three';
import { blocked, rayWallDistance, type ArenaBox } from '../../../shared/arena';
export type Box = ArenaBox;
export class CollisionSystem {
  constructor(public boxes: Box[], private heightAt: (x:number,z:number)=>number = ()=>0) {}
  groundHeight(x:number,z:number) { return this.heightAt(x,z); }
  blocked(x:number,z:number,r=.42) { return blocked(x,z,r,0,this.boxes); }
  rayBlocked(a:THREE.Vector3,b:THREE.Vector3) { return !!this.firstWallHit(a,b.clone().sub(a).normalize(),a.distanceTo(b)); }
  firstWallHit(a:THREE.Vector3,d:THREE.Vector3,max=30) {
    const distance=rayWallDistance(a,d,max,{boxes:this.boxes,heightAt:this.heightAt});
    return distance<max?a.clone().addScaledVector(d,distance):null;
  }
}
