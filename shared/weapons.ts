export type WeaponId='ar'|'smg'|'flame'|'ice'|'shotgun'|'rocket';
export type WeaponSpec={id:WeaponId;label:string;icon:string;color:number;magazine:number;damage:number;fireDelay:number;reloadTime:number;spread:number;range:number;pellets?:number;splash?:number;slow?:number;burn?:number;description:string};
export const WEAPON_SPECS:Record<WeaponId,WeaponSpec>={
 ar:{id:'ar',label:'AR-01',icon:'▰',color:0x55d6ff,magazine:30,damage:34,fireDelay:.095,reloadTime:1.25,spread:.006,range:50,description:'平衡全自動步槍'},
 smg:{id:'smg',label:'VOLT-9',icon:'≋',color:0xffd05d,magazine:36,damage:20,fireDelay:.06,reloadTime:.9,spread:.018,range:38,description:'高速近距離衝鋒槍'},
 flame:{id:'flame',label:'焰流槍',icon:'✦',color:0xff6b37,magazine:80,damage:8,fireDelay:.1,reloadTime:1.6,spread:.18,range:8,burn:2,description:'近距離燃燒火焰'},
 ice:{id:'ice',label:'霜凍槍',icon:'❄',color:0x78eaff,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:45,slow:1.25,description:'命中使敵人緩速'},
 shotgun:{id:'shotgun',label:'裂片散彈槍',icon:'✹',color:0xc98cff,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:18,pellets:10,description:'近距離高爆發'},
 rocket:{id:'rocket',label:'脈衝火箭炮',icon:'◆',color:0xff5c7e,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:52,splash:5,description:'範圍爆炸傷害'}
};
export const WEAPON_IDS=Object.keys(WEAPON_SPECS) as WeaponId[];
