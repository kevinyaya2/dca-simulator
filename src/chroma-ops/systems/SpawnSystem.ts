import * as THREE from 'three';
import { chooseRespawnPoint, type SpawnPoint } from '../../../shared/spawns';
export class SpawnSystem {
  private previous = new Map<string, SpawnPoint>();
  constructor(private points: SpawnPoint[]) {}
  choose(enemies:{position:THREE.Vector3;alive:boolean}[], id='player') {
    const point=chooseRespawnPoint(enemies.map(enemy=>({x:enemy.position.x,z:enemy.position.z,alive:enemy.alive})),this.previous.get(id),Math.random,this.points);
    this.previous.set(id,point);
    return point;
  }
}
