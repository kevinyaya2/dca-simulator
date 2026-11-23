import type { DamageEvent } from './protocol.js';

// A terminal damage event is authoritative for this life even before a snapshot
// arrives. An old alive snapshot must never restart shooting after death.
export class DamageTimeline {
  private life:number|undefined;
  private at=-Infinity;
  private hp:number|undefined;
  private fatal=false;
  private sync(life:number){if(this.life!==life){this.life=life;this.at=-Infinity;this.hp=undefined;this.fatal=false;}}
  accept(event:DamageEvent,life:number){
    this.sync(life);
    if(event.life!==undefined&&event.life!==life||!Number.isFinite(event.hp)||event.hp<0||this.fatal)return false;
    if(event.serverTime!==undefined&&(!Number.isFinite(event.serverTime)||event.serverTime<this.at))return false;
    this.at=event.serverTime??this.at;this.hp=event.hp;this.fatal=event.hp===0;return true;
  }
  reconcile<T extends {life:number;hp:number;alive:boolean}>(state:T,at:number):T{
    this.sync(state.life);
    if(this.fatal)return {...state,hp:0,alive:false};
    return this.hp!==undefined&&at<this.at?{...state,hp:this.hp}:state;
  }
}
