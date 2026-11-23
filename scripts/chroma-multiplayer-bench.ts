// CPU comparison only; socket encoding is represented by JSON.stringify.
// npm run bench:multiplayer -- --compare [--ref=HEAD]
import { performance } from 'node:perf_hooks';
import { execFileSync } from 'node:child_process';
import { writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { randomUUID } from 'node:crypto';
import { KillTracker } from '../shared/combat.ts';
import { VOID_WARDEN, WARDEN_ENTRANCE } from '../shared/voidWarden.ts';
import { NavigationBudget } from '../shared/navigationBudget.ts';
import * as current from '../server/src/index.ts';
import { advanceRoomClock } from '../server/src/SimulationClock.ts';

const stats=(values:number[])=>{
  values.sort((a,b)=>a-b);const at=(p:number)=>values[Math.ceil(values.length*p)-1];
  return {p50:at(.5),p95:at(.95),p99:at(.99),max:at(1)};
};
const root=fileURLToPath(new URL('../',import.meta.url)),temporary:string[]=[];
const reference=process.argv.find(arg=>arg.startsWith('--ref='))?.slice(6)??'HEAD';
try{
  const variants:[string,typeof current][]=[];
  if(process.argv.includes('--compare')){
    const suffix=`.bench-${randomUUID()}.local`;
    for(const relative of ['shared/navigation','server/src/voidWarden','server/src/SimulationClock','server/src/index']){
      const path=fileURLToPath(new URL(`../${relative}${suffix}.ts`,import.meta.url));
      let source=execFileSync('git',['show',`${reference}:${relative}.ts`],{cwd:root,encoding:'utf8'});
      source=source.replaceAll('/navigation.js',`/navigation${suffix}.js`)
        .replaceAll('./voidWarden.js',`./voidWarden${suffix}.js`).replaceAll('./SimulationClock.js',`./SimulationClock${suffix}.js`);
      writeFileSync(path,source,{flag:'wx'});temporary.push(path);
    }
    variants.push([reference,await import(pathToFileURL(temporary[3]).href)]);
  }
  variants.push(['working-tree',current]);
  const original=Date.now;let now=0;Date.now=()=>now;
  const results=[];
  try{
    for(const [variant,implementation] of variants)for(const players of [2,8])for(const roomCount of [1,4])for(const scenario of ['none','normal','grown']){
      const samples:number[]=[];
      for(let repeat=0;repeat<3;repeat++){
        now=0;
        const io={to:()=>({emit:(_name:string,payload:unknown)=>{JSON.stringify(payload);}})} as unknown as Parameters<typeof current.beginRound>[0];
        const rooms=new Map<string,Parameters<typeof current.beginRound>[1]>();
        for(let n=0;n<roomCount;n++){
          const room={environmentTime:0,code:`BENCH${n}`,host:'0',roundId:0,state:'LOBBY',players:new Map(Array.from({length:players},(_,i)=>
            [String(i),{id:String(i),name:`Player ${i}`,socketId:String(i),weapons:{}}])),respawnTimers:new Map(),reconnectTimers:new Map(),killTracker:new KillTracker('bench'),shotSequence:0} as unknown as Parameters<typeof current.beginRound>[1];
          implementation.beginRound(io,room,0);room.pickups=[];
          if(scenario==='none')room.warden=undefined;
          else room.warden!.boss={...VOID_WARDEN.location,x:-77.5,z:45,spawnAt:0,state:'FOLLOW',stateAt:0,yaw:0,
            hp:VOID_WARDEN.alliedHp,maxHp:VOID_WARDEN.maxHp,ownerId:'0',ownerName:'Player 0',targetId:null,
            phaseTwo:false,enraged:false,attack:null,air:0,kills:scenario==='grown'?12:0,scale:scenario==='grown'?8:1,heldBounty:0};
          for(const p of room.players.values()){p.hp=1e9;p.protectUntil=0;}
          rooms.set(room.code,room);
        }
        const stepRooms=implementation.createRoomStepper?.(io,rooms);
        for(let tick=0;tick<720;tick++){
          now=WARDEN_ENTRANCE.finish+(tick+1)*1000/60;
          for(const room of rooms.values())for(const [i,p] of [...room.players.values()].entries()){
            p.x=-77.5+(i%3-1)*4;p.y=i>3?7.65:1.65;p.z=45+(i<4?4:12);
            const input={roundId:room.roundId,seq:tick+1,clientTime:now,moveX:0,moveY:0,yaw:0,pitch:0,jump:false};
            if(p.movement)p.movement.enqueue(input,now);else Object.assign(p.input,input);
          }
          const started=performance.now();
          if(stepRooms)stepRooms(1/60,now,new NavigationBudget());
          else for(const room of rooms.values())if(advanceRoomClock(room,now,1/60))implementation.step(io,room,1/60);
          if(tick>=120)samples.push(performance.now()-started);
        }
      }
      results.push({variant,players,rooms:roomCount,scenario,samples:samples.length,allRoomsTick_ms:stats(samples)});
    }
  }finally{Date.now=original;}
  console.log(JSON.stringify({baselineReference:reference,notes:[
    'Three rounds per scenario; 120 warmup ticks then 600 measured ticks per round.',
    'Players are held at ground/roof stress positions; inputs are neutral. Includes room physics, boss, history and JSON snapshot serialization.',
    'No live sockets, browser/GPU, Internet, event-loop latency, or camera corrections are measured.',
    'P99 below 16.7ms is a local target, not a bound on Render Free.'
  ],results},null,2));
}finally{for(const path of temporary)unlinkSync(path);}
