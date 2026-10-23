export type WeaponId='ar'|'smg'|'flame'|'ice'|'shotgun'|'rocket'|'sniper';
export type WeaponSpec={id:WeaponId;label:string;icon:string;color:number;magazine:number;damage:number;fireDelay:number;reloadTime:number;spread:number;range:number;pellets?:number;splash?:number;slow?:number;burn?:number;falloff?:{start:number;end:number;minimum:number};headshot?:number;scopedSpread?:number;description:string};
export const WEAPON_SPECS:Record<WeaponId,WeaponSpec>={
 ar:{id:'ar',label:'AR-01',icon:'▰',color:0x55d6ff,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:30,headshot:2,description:'平衡全自動步槍'},
 smg:{id:'smg',label:'VOLT-9',icon:'≋',color:0xffd05d,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:45,headshot:2,description:'高速近距離衝鋒槍'},
 flame:{id:'flame',label:'焰流槍',icon:'✦',color:0xff6b37,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:25,burn:2,description:'近距離燃燒火焰'},
 ice:{id:'ice',label:'霜凍槍',icon:'❄',color:0x78eaff,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:55,headshot:2,slow:1.25,description:'命中使敵人緩速'},
 shotgun:{id:'shotgun',label:'裂片散彈槍',icon:'✹',color:0xc98cff,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:35,headshot:2,pellets:10,description:'近距離高爆發'},
 sniper:{id:'sniper',label:'長弓狙擊槍',icon:'⌖',color:0xe3ff7a,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:'4 倍狙擊鏡・爆頭致命'},
 rocket:{id:'rocket',label:'脈衝火箭炮',icon:'◆',color:0xff5c7e,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:100,splash:5,description:'範圍爆炸傷害'}
};
export const WEAPON_IDS:WeaponId[]=['ar','smg','flame','ice','shotgun','rocket','sniper'];

export type WeaponLevel=1|2|3;
export function weaponDamageMultiplier(level:WeaponLevel=1){return 1+.1*(level-1);}
export function weaponRange(id:WeaponId,level:WeaponLevel=1){return WEAPON_SPECS[id].range*(1+.15*(level-1));}
export const QUICK_RELOAD_SECONDS=8;
export const QUICK_RELOAD_MULTIPLIER=.75;
export type WeaponAmmoState={level:WeaponLevel;ammo:number;reloadUntil:number;quickReloadUntil:number};
export type WeaponState=Record<WeaponId,WeaponAmmoState>;
export type WeaponPickupResult={weapon:WeaponId;kind:'unlock'|'upgrade'|'refill'|'boost';level:WeaponLevel;previousCapacity:number;capacity:number;ammoAdded:number};
export type WeaponPickupEvent=WeaponPickupResult&{roundId:number;eventId:string};
export function magazineCapacity(id:WeaponId,level:WeaponLevel=1){
  return Math.round(WEAPON_SPECS[id].magazine*(1+.25*(level-1)));
}
export function createWeaponStates():WeaponState{
  return Object.fromEntries(WEAPON_IDS.map(id=>[id,{level:1,ammo:magazineCapacity(id),reloadUntil:0,quickReloadUntil:0}])) as WeaponState;
}
export function weaponPickupKind(id:WeaponId,state:Pick<WeaponAmmoState,'level'|'ammo'>,owned:boolean):WeaponPickupResult['kind']{
  return !owned?'unlock':state.level<3?'upgrade':state.ammo<magazineCapacity(id,state.level)?'refill':'boost';
}
/** Mutates only the weapon state. The caller grants ownership when a pickup succeeds. */
export function collectWeapon(id:WeaponId,state:WeaponAmmoState,owned:boolean,time=0,timeScale=1000):WeaponPickupResult{
  const previousCapacity=magazineCapacity(id,state.level),oldAmmo=state.ammo;
  const kind=weaponPickupKind(id,state,owned);
  if(kind==='unlock'){state.level=1;state.ammo=magazineCapacity(id);state.reloadUntil=0;state.quickReloadUntil=0;}
  else if(kind==='upgrade'){state.level=(state.level+1) as WeaponLevel;state.ammo=magazineCapacity(id,state.level);state.reloadUntil=0;}
  else if(kind==='refill'){state.ammo=previousCapacity;state.reloadUntil=0;}
  else state.quickReloadUntil=time+QUICK_RELOAD_SECONDS*timeScale;
  return{weapon:id,kind,level:state.level,previousCapacity,capacity:magazineCapacity(id,state.level),ammoAdded:state.ammo-oldAmmo};
}
export function refillWeapons(states:WeaponState){
  for(const id of WEAPON_IDS){states[id].ammo=magazineCapacity(id,states[id].level);states[id].reloadUntil=0;states[id].quickReloadUntil=0;}
}
export function clearWeaponBoosts(states:WeaponState){for(const id of WEAPON_IDS)states[id].quickReloadUntil=0;}
/** Uses absolute seconds or milliseconds as selected by the caller's timeScale. */
export function advanceWeaponReload(id:WeaponId,state:WeaponAmmoState,time:number,manual=false,timeScale=1000){
  if(state.reloadUntil&&time>=state.reloadUntil){state.ammo=magazineCapacity(id,state.level);state.reloadUntil=0;}
  if(!state.reloadUntil&&(state.ammo===0||(manual&&state.ammo<magazineCapacity(id,state.level)))){
    // A reload keeps the duration chosen at its start, even if the boost expires mid-reload.
    state.reloadUntil=time+WEAPON_SPECS[id].reloadTime*timeScale*(state.quickReloadUntil>time?QUICK_RELOAD_MULTIPLIER:1);
  }
}
