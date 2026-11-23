import { stepPlayer, type SimPlayer, type SimWorld } from './arena.js';
import { playerMoveScale } from './voidWarden.js';
import type { WeaponId } from './weapons.js';

export const MOVEMENT_STEP = 1 / 60;
export const MAX_INPUT_BACKLOG_MS = 250;
export const MAX_INPUT_BACKLOG = 15;

export type MovementCommand = {
  roundId:number; seq:number; clientTime:number; life?:number;
  moveX:number; moveY:number; yaw:number; pitch:number;
  jump:boolean; reload?:boolean; sprint?:boolean; aim?:boolean;
  weapon?:WeaponId; fire?:boolean; reset?:boolean;
};
export type MovementAcknowledgement = {
  ack:number; inputReset:number; discardedThrough:number; life:number;
};

// The accumulator is independent of display refresh rate. Excess time is
// explicitly reported rather than generating an unbounded burst of commands.
export class MovementClock {
  private accumulator = 0;
  get alpha(){return this.accumulator/MOVEMENT_STEP;}
  reset(){this.accumulator=0;}
  advance(seconds:number,step:()=>void){
    const total=this.accumulator+Math.max(0,seconds);
    const dropped=Math.max(0,total-MAX_INPUT_BACKLOG_MS/1000);
    this.accumulator=Math.min(total,MAX_INPUT_BACKLOG_MS/1000);
    let steps=0;
    while(this.accumulator+1e-10>=MOVEMENT_STEP){
      this.accumulator=Math.max(0,this.accumulator-MOVEMENT_STEP);
      step();steps++;
    }
    return {steps,dropped};
  }
}

export function simulateMovement(player:SimPlayer,command:MovementCommand,world:SimWorld,
  simulationTime:number,at:number,slowUntil=0,blessingUntil=0){
  player.yaw=command.yaw;player.pitch=command.pitch;
  stepPlayer(player,{...command,lookX:0,lookY:0},MOVEMENT_STEP,world,
    playerMoveScale(slowUntil,blessingUntil,at),simulationTime);
}

export function replayMovement(player:SimPlayer,commands:readonly MovementCommand[],world:SimWorld,
  simulationTime:number,serverTime:number,slowUntil=0,blessingUntil=0){
  for(const command of commands){
    simulateMovement(player,command,world,simulationTime,serverTime+MOVEMENT_STEP*1000,slowUntil,blessingUntil);
    simulationTime+=MOVEMENT_STEP;serverTime+=MOVEMENT_STEP*1000;
  }
  return simulationTime;
}
