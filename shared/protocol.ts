export const MULTIPLAYER_PROTOCOL_VERSION = 8;
export type RoundEvent<T> = T & { roundId:number };
export function isCurrentRound(message:unknown,roundId:number):boolean {
  return typeof message==='object'&&message!==null&&(message as {roundId?:unknown}).roundId===roundId;
}
export type { ShotEvent, HitConfirmation, KillEvent } from './combat.js';
