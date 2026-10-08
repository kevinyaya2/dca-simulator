import * as THREE from 'three';
import { groundHeight, PLAYER_EYE_HEIGHT } from '../../../shared/arena';
export class Player { position=new THREE.Vector3(-10,1.65,-10); velocityY=0;jumpsUsed=0; hp=100; alive=true; kills=0; deaths=0; yaw=0; pitch=0; color=0x50a6ff; respawn(p:[number,number]){this.position.set(p[0],groundHeight(p[0],p[1])+PLAYER_EYE_HEIGHT,p[1]);this.velocityY=0;this.jumpsUsed=0;this.hp=100;this.alive=true;} damage(n:number){this.hp=Math.max(0,this.hp-n);if(!this.hp)this.alive=false;} }
