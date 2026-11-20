export const VOID_WARDEN = {
  name:'虛空騎士',
  spawnDelayMs:90_000,
  location:{x:12,y:0,z:8},
  maxHp:2000,
  radius:.78,
  height:4.8,
  speed:6.2,
  aggroRange:24,
  leash:36,
  stopDistance:2.25,
  phaseTwoHp:.50,
  enrageHp:.25,
  enrageRate:1.22,
  enragedSpeed:7.75,
  followSpeed:10.8,
  followDistance:3.2,
  guardRadius:12,
  alliedRange:18,
  alliedHp:1000,
  allianceMs:60_000,
  respawnProtectionMs:3000,
  surrenderMs:1250,
  collapseMs:900,
  enrageMs:1180,
} as const;

export const VOID_BLESSING = {durationMs:60_000,damage:1.2,speed:1.1} as const;
export const WARDEN_ID = 'void-warden';
export const WARDEN_ATTACKS = {
  slash:{name:'三連斬',duration:1970,impact:[500,990,1640],range:5.8,angle:Math.PI*5/6,damage:22,recovery:780},
  dash:{name:'高速突刺',duration:1040,windup:680,range:13,width:1.35,damage:34,recovery:950},
  leap:{name:'跳躍下劈',duration:1250,lift:360,windup:690,range:10,radius:6.5,damage:40,recovery:900},
  burst:{name:'感染爆發',duration:1370,launch:790,impact:1220,radius:2.35,range:11,count:10,width:.68,damage:28,recovery:950},
} as const;
export type WardenAttackKind = keyof typeof WARDEN_ATTACKS;
export type WardenPoint = {x:number;y:number;z:number};
export type WardenAttack = {
  kind:WardenAttackKind;
  startedAt:number;
  rate:number;
  from:WardenPoint;
  to:WardenPoint;
  yaw:number;
  jumpHeight:number;
  rays?:WardenPoint[];
};

// These offsets use the same server clock as the snapshot.
export const WARDEN_ENTRANCE = {
  cracks:430, chains:880, reveal:1580, breakChains:3000,
  land:3650, title:4520, finish:5250, titleDuration:1750,
} as const;

export type WardenSnapshot = {
  spawnAt:number;
  state:'SPAWN'|'IDLE'|'CHASE'|'ATTACK'|'STAGGER'|'ENRAGED'|'DEFEATED'|'ALLIED'|'FOLLOW'|'GUARD'|'WAIT'|'DESPAWN';
  stateAt:number;
  x:number;
  y:number;
  z:number;
  yaw:number;
  hp:number;
  maxHp:number;
  targetId:string|null;
  ownerId:string|null;
  ownerName:string|null;
  alliedUntil:number;
  phaseTwo:boolean;
  enraged:boolean;
  air:number;
  attack:WardenAttack|null;
};

export type WardenNotice = {kind:'recruited'|'destroyed'|'player-slain';name:string};
export const wardenCanBeHit=(boss:WardenSnapshot,playerId:string)=>boss.ownerId!==playerId&&
  boss.state!=='SPAWN'&&boss.state!=='DEFEATED'&&boss.state!=='ALLIED'&&boss.state!=='DESPAWN';
export const playerMoveScale=(slowUntil:number,blessingUntil:number,at:number)=>
  (slowUntil>at?.65:1)*(blessingUntil>at&&blessingUntil-VOID_BLESSING.durationMs<=at?VOID_BLESSING.speed:1);
