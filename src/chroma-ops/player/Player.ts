import * as THREE from 'three';
export class Player { position=new THREE.Vector3(-10,1.65,-10); velocityY=0; hp=100; alive=true; kills=0; deaths=0; yaw=0; pitch=0; respawn(p:[number,number]){this.position.set(p[0],1.65,p[1]);this.velocityY=0;this.hp=100;this.alive=true;} damage(n:number){this.hp=Math.max(0,this.hp-n);if(!this.hp)this.alive=false;} }
