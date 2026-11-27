export const MULTIPLAYER_PROTOCOL_VERSION = 19;
import type { KillEvent } from './combat.js';
import type { WeaponId } from './weapons.js';
import type { WardenAttackKind } from './voidWarden.js';
// Additive protocol-18 fields: current servers always send life/serverTime;
// optional fields allow an older protocol-18 server during a paired rollout.
export type DamageEvent=RoundEvent<{life?:number;serverTime?:number;from:{x:number;z:number};hp:number;
  damage:number;name:string;weapon?:WeaponId;wardenAttack?:WardenAttackKind}>;
export type MultiplayerKillEvent = KillEvent & { scoreAwarded:number; attackerBounty:number; victimBounty:number };
export type RoundEvent<T> = T & { roundId:number };
export type RoomNotice = { id:string; code:string; playerId:string; name:string; kind:'disconnected'|'reconnected'; at:number };
export function isCurrentRound(message:unknown,roundId:number):boolean {
  return typeof message==='object'&&message!==null&&(message as {roundId?:unknown}).roundId===roundId;
}
export type { ShotEvent, HitConfirmation, KillEvent } from './combat.js';
