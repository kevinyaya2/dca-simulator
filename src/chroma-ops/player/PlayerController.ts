import { Player } from './Player';
import type { InputState } from '../input/InputManager';
import { CollisionSystem } from '../systems/CollisionSystem';
import { stepPlayer, type SimPlayer } from '../../../shared/arena';

export class PlayerController {
  update(player: Player, input: InputState, dt: number, collision: CollisionSystem, moveScale=1) {
    const state: SimPlayer = {
      x: player.position.x, y: player.position.y, z: player.position.z,
      yaw: player.yaw, pitch: player.pitch, velocityY: player.velocityY,
      jumpsUsed: player.jumpsUsed, alive: player.alive,
    };
    stepPlayer(state,input,dt,{boxes:collision.boxes,heightAt:(x,z)=>collision.groundHeight(x,z)},moveScale);
    player.position.set(state.x,state.y,state.z);
    player.yaw=state.yaw;player.pitch=state.pitch;
    player.velocityY=state.velocityY;player.jumpsUsed=state.jumpsUsed;
  }
}
