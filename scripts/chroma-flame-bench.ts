// CPU-only before/after: npm run bench:flame -- --compare [--ref=cc9fb4d]
import { performance } from 'node:perf_hooks';
import * as T from 'three';
import * as combat from '../shared/combat.ts';
import * as arena from '../shared/arena.ts';
import * as aim from '../shared/aim.ts';
import * as effects from '../src/chroma-ops/systems/WeaponEffects.ts';
import * as server from '../server/src/index.ts';
import { VOID_WARDEN, WARDEN_ENTRANCE } from '../shared/voidWarden.ts';
import { NavigationBudget } from '../shared/navigationBudget.ts';
import { PerformanceMetrics } from '../shared/performanceMetrics.ts';
import { flameBaseline } from './chroma-flame-baseline.ts';

const stats=(values:number[])=>{
  values.sort((a,b)=>a-b);const at=(p:number)=>values[Math.max(0,Math.ceil(values.length*p)-1)];
  return {p50:at(.5),p95:at(.95),p99:at(.99),max:at(1)};
};
const reference=process.argv.find(arg=>arg.startsWith('--ref='))?.slice(6)??'HEAD';
const baseline=process.argv.includes('--compare')?await flameBaseline(reference):undefined;
try{
  const variants=[...(baseline?[{name:reference,...baseline}]:[]),{name:'working-tree',server,combat,arena,aim,effects}];
  const micro=[],matrix=[];
  for(const variant of variants){
    for(const scale of [1,4,8,20]){
      const world=variant.arena.arenaWorld(10),origin:[number,number,number]=[12,1.65,-10],dir:[number,number,number]=[0,0,1];
      const targets:combat.Combatant[]=[{id:'boss',kind:'warden',scale,x:12,y:1.65,z:8,yaw:0,alive:true}];
      const fx=new variant.effects.WeaponEffects(new T.Scene(),false),muzzle=new T.Vector3(12.34,1.38,-8.7),eye=new T.Vector3(...origin),direction=new T.Vector3(...dir);
      for(const [metric,work] of [
        ['AR_shot',()=>variant.combat.resolveShot('ar',origin,dir,targets,()=>.5,world)],
        ['flame_shot',()=>variant.combat.resolveShot('flame',origin,dir,targets,()=>.5,world)],
        ['flame_frame',()=>{fx.localFlame(true,muzzle,eye,direction,world,1/60,targets);variant.aim.queryAim('flame',origin,dir,targets,world);}]
      ] as const){
        const samples=[];
        for(let tick=0;tick<160;tick++){const started=performance.now();work();if(tick>=40)samples.push(performance.now()-started);}
        micro.push({variant:variant.name,scale,metric,samples:samples.length,ms:stats(samples)});
      }
      fx.dispose();
    }
    const original=Date.now;let now=0;Date.now=()=>now;
    try{
      for(const players of [2,8])for(const roomCount of [1,4])for(const scenario of ['none','normal','grown']){
        const samples:number[]=[];let shotSummary:unknown;
        for(let repeat=0;repeat<2;repeat++){
          now=0;
          const io={to:()=>({emit:(_name:string,payload:unknown)=>{JSON.stringify(payload);}})} as unknown as Parameters<typeof server.beginRound>[0];
          const rooms=new Map<string,Parameters<typeof server.beginRound>[1]>(),metrics=new PerformanceMetrics(10000);
          for(let n=0;n<roomCount;n++){
            const room={environmentTime:0,code:`FLAME${n}`,host:'0',roundId:0,state:'LOBBY',players:new Map(Array.from({length:players},(_,i)=>
              [String(i),{id:String(i),name:`Player ${i}`,socketId:String(i),weapons:{}}])),respawnTimers:new Map(),reconnectTimers:new Map(),killTracker:new combat.KillTracker('flame'),shotSequence:0} as unknown as Parameters<typeof server.beginRound>[1];
            variant.server.beginRound(io,room,0);room.pickups=[];
            for(const p of room.players.values()){p.activeWeapon='flame';p.ownedWeapons.push('flame');p.hp=1e9;p.protectUntil=0;}
            if(scenario==='none')room.warden=undefined;
            else room.warden!.boss={...VOID_WARDEN.location,x:12,z:8,spawnAt:0,state:'PATROL',stateAt:0,yaw:0,hp:1e9,maxHp:1e9,
              ownerId:null,ownerName:null,targetId:null,phaseTwo:false,enraged:false,attack:null,air:0,kills:scenario==='grown'?12:0,scale:scenario==='grown'?8:1,heldBounty:0};
            rooms.set(room.code,room);
          }
          const tickRooms=variant.server.createRoomStepper(io,rooms,metrics);
          for(let tick=0;tick<72;tick++){
            now=WARDEN_ENTRANCE.finish+(tick+1)*1000/60;
            for(const room of rooms.values())for(const [i,p] of [...room.players.values()].entries()){
              Object.assign(p,{x:12+(i%3-1)*.6,y:1.65,z:-10-Math.floor(i/3)*.6});
              p.movement!.enqueue({roundId:room.roundId,life:p.life,seq:tick+1,clientTime:now,moveX:0,moveY:0,yaw:Math.PI,pitch:0,jump:false,fire:tick%5===0},now);
            }
            const started=performance.now();tickRooms(1/60,now,new NavigationBudget());
            if(tick>=12)samples.push(performance.now()-started);
          }
          shotSummary=metrics.summary().shotCPU_ms??null;
        }
        const row={variant:variant.name,players,rooms:roomCount,scenario,samples:samples.length,allRoomsTick_ms:stats(samples),shotCPU_ms:shotSummary};
        matrix.push(row);console.log(JSON.stringify({progress:row}));
      }
    }finally{Date.now=original;}
  }
  console.log(JSON.stringify({reference,micro,matrix,notes:[
    'CPU only: no browser frames, GPU time, live network or Render measurements.',
    'Micro tests: 40 warmup and 120 measured calls per scale and metric; flame_frame includes real nine-tongue local flame work plus aim preview.',
    'Matrix: two fresh rounds, 12 warmup then 60 measured ticks each. Every player fires a flame command every five ticks. Includes physics, boss, history, encoding via JSON.stringify and diagnostic instrumentation.',
    'Matrix positions are held near a boss with very high health; damage, rays and firing cadence are unchanged. Sample windows are short and maxima are observations, not bounds.',
    'Baseline modules come from the requested Git reference and are cleaned up on exit.'
  ]},null,2));
}finally{await baseline?.dispose();}
