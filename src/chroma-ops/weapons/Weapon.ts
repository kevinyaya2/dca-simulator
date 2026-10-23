import { advanceWeaponReload, collectWeapon, magazineCapacity, type WeaponAmmoState, type WeaponSpec } from '../../../shared/weapons';
export type { WeaponSpec };
export type ShotResult={fired:boolean;empty:boolean;autoReload:boolean};
export class Weapon {
  private state:WeaponAmmoState;
  private time=0;
  private cooldown=0;
  constructor(readonly spec:WeaponSpec){this.state={level:1,ammo:spec.magazine,reloadUntil:0,quickReloadUntil:0};}
  get ammo(){return this.state.ammo;}
  get level(){return this.state.level;}
  get capacity(){return magazineCapacity(this.spec.id,this.level);}
  get reserve(){return Infinity;}
  get reloading(){return this.state.reloadUntil>this.time;}
  get quickReloadSeconds(){return Math.max(0,this.state.quickReloadUntil-this.time);}
  clearBoost(){this.state.quickReloadUntil=0;}
  update(dt:number,shoot:boolean):ShotResult{
    this.time+=dt;this.cooldown=Math.max(0,this.cooldown-dt);
    advanceWeaponReload(this.spec.id,this.state,this.time,false,1);
    if(shoot&&!this.reloading&&this.cooldown<=0&&this.ammo>0){
      this.state.ammo--;this.cooldown=this.spec.fireDelay;
      advanceWeaponReload(this.spec.id,this.state,this.time,false,1);
      return{fired:true,empty:this.ammo===0,autoReload:this.reloading};
    }
    return{fired:false,empty:this.ammo===0,autoReload:false};
  }
  reload(){advanceWeaponReload(this.spec.id,this.state,this.time,true,1);}
  collect(owned:boolean){return collectWeapon(this.spec.id,this.state,owned,this.time,1);}
  refill(){this.state.ammo=this.capacity;this.state.reloadUntil=0;this.cooldown=0;this.clearBoost();}
  addReserve(_:number){}
}
