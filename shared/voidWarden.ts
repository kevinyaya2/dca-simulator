export const VOID_WARDEN = {
  name:'虛空騎士',
  spawnDelayMs:90_000,
  warningMs:10_000,
  location:{x:12,y:0,z:8},
  locationLabel:'地圖中央 1F，中央掩體東南側',
  maxHp:6000,
  radius:.78,
  height:4.8,
  speed:6.2,
  aggroRange:420,
  leash:420,
  stopDistance:2.25,
  phaseTwoHp:.50,
  enrageHp:.25,
  enrageRate:1.22,
  enragedSpeed:7.75,
  followSpeed:10.8,
  followDistance:3.2,
  guardRadius:15,
  alliedRange:120,
  searchMs:4000,
  stuckMs:3000,
  alliedHp:3000,
  respawnProtectionMs:3000,
  surrenderMs:1250,
  collapseMs:900,
  enrageMs:1180,
} as const;

export const WARDEN_PATROL=[[80,20],[72,-82],[-24,-96],[-104,-33],[-78,72],[-16,84],[48,84],[12,8]]
  .map(([x,z])=>({x,y:0,z}));
export const wardenGrowth=(kills:number)=>1.2**kills;
export const VOID_BLESSING = {durationMs:60_000,damage:1.2,speed:1.1} as const;
export const WARDEN_ID = 'void-warden';
export const WARDEN_ATTACKS = {
  slash:{name:'三連斬',duration:1970,impact:[500,990,1640],range:7,angle:Math.PI*5/6,damage:22,recovery:780},
  dash:{name:'高速突刺',duration:1040,windup:680,range:16,width:1.6,damage:34,recovery:950},
  leap:{name:'跳躍下劈',duration:1250,lift:360,windup:690,range:12,radius:8,damage:40,recovery:900},
  burst:{name:'感染爆發',duration:1370,launch:790,impact:1220,radius:2.8,range:13,count:10,width:.82,damage:28,recovery:950},
} as const;
export type WardenAttackKind = keyof typeof WARDEN_ATTACKS;
export type WardenPoint = {x:number;y:number;z:number};
export type WardenSpawnWarning = WardenPoint & {spawnAt:number};
export type WardenAttack = {
  kind:WardenAttackKind;
  startedAt:number;
  rate:number;
  scale:number;
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
  state:'SPAWN'|'IDLE'|'PATROL'|'CHASE'|'ATTACK'|'STAGGER'|'ENRAGED'|'DEFEATED'|'ALLIED'|'FOLLOW'|'GUARD'|'WAIT'|'DESPAWN';
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
  phaseTwo:boolean;
  enraged:boolean;
  air:number;
  attack:WardenAttack|null;
  kills:number;
  scale:number;
  heldBounty:number;
};

export type WardenNotice = {kind:'recruited'|'destroyed'|'player-slain';name:string;scoreAwarded?:number;ownerName?:string};
export const wardenOwner=(boss:WardenSnapshot|null|undefined)=>boss?.state==='DESPAWN'?null:boss?.ownerId??null;
export const wardenCanBeHit=(boss:WardenSnapshot,playerId:string)=>boss.ownerId!==playerId&&
  boss.state!=='SPAWN'&&boss.state!=='DEFEATED'&&boss.state!=='ALLIED'&&boss.state!=='DESPAWN';
export const playerMoveScale=(slowUntil:number,blessingUntil:number,at:number)=>
  (slowUntil>at?.65:1)*(blessingUntil>at&&blessingUntil-VOID_BLESSING.durationMs<=at?VOID_BLESSING.speed:1);
