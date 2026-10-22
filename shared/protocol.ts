export const MULTIPLAYER_PROTOCOL_VERSION = 9;
export type RoundEvent<T> = T & { roundId:number };
export type RoomNotice = { id:string; code:string; playerId:string; name:string; kind:'disconnected'|'reconnected'; at:number };
export function isCurrentRound(message:unknown,roundId:number):boolean {
  return typeof message==='object'&&message!==null&&(message as {roundId?:unknown}).roundId===roundId;
}
export type { ShotEvent, HitConfirmation, KillEvent } from './combat.js';
