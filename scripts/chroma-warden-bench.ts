// Development-only CPU benchmark; does not measure browser frames or GPU time.
// Run: npx.cmd tsx scripts/chroma-warden-bench.ts
import { performance } from 'node:perf_hooks';
import * as T from 'three';
import { VoidWarden } from '../src/chroma-ops/boss/VoidWarden.ts';
import { WardenCombatFx } from '../src/chroma-ops/boss/WardenCombatFx.ts';
import { createWardenRound, stepWarden } from '../server/src/voidWarden.ts';
import { WARDEN_ENTRANCE, WARDEN_ATTACKS, type WardenAttack } from '../shared/voidWarden.ts';
import { beginRound, step as stepRoom } from '../server/src/index.ts';
import { KillTracker } from '../shared/combat.ts';

const stats=(samples:number[])=>{
  samples.sort((a,b)=>a-b);
  return {median:samples[Math.floor(samples.length/2)],p95:samples[Math.ceil(samples.length*.95)-1],max:samples[samples.length-1]};
};
const base=new T.Vector3(),tip=new T.Vector3();
const results:Record<string,unknown>={};
for(const scenario of ['entrance','chase','slash','burst','grown'] as const){
  const model=new VoidWarden(),fx=new WardenCombatFx(false);
  const attack:WardenAttack={kind:scenario==='burst'?'burst':'slash',startedAt:0,rate:1,scale:scenario==='grown'?3:1,
    from:{x:12,y:0,z:8},to:{x:12,y:0,z:18},yaw:0,jumpHeight:0,
    rays:Array.from({length:10},(_,i)=>({x:12+Math.sin(i*Math.PI/5)*13,y:0,z:8+Math.cos(i*Math.PI/5)*13}))};
  model.group.scale.setScalar(attack.scale);
  const samples:number[]=[];
  for(let i=0;i<2400;i++){
    const time=(i%180)*1000/60;
    const start=performance.now();
    if(scenario==='entrance')model.entrancePose((i%315)*1000/60);
    else if(scenario==='chase')model.pose('walk',time/1000,false);
    else model.combatPose(attack.kind,time%(WARDEN_ATTACKS[attack.kind].duration+250),scenario==='burst');
    model.updateParticles(time/1000,scenario==='burst'?time/1000:null,false);
    model.bladeBase.getWorldPosition(base);model.bladeTip.getWorldPosition(tip);
    fx.update(scenario==='entrance'||scenario==='chase'?null:attack,time,scenario==='burst',base,tip);
    const elapsed=performance.now()-start;
    if(i>=600)samples.push(elapsed);
  }
  results[`${scenario}:clientCPU_ms`]=stats(samples);
  model.dispose();fx.dispose();
}
const serverSamples:number[]=[];
let cold=0;
for(let repeat=0;repeat<6;repeat++){
  const round=createWardenRound(0,0);
  const players=Array.from({length:8},(_,i)=>({id:String(i),socketId:String(i),alive:true,x:-90+i*22,y:1.65,z:-80+i*12}));
  for(let i=0;i<1200;i++){
    const at=WARDEN_ENTRANCE.finish+i*1000/60;
    // Move targets to exercise replanning rather than only stationary route reuse.
    for(let j=0;j<players.length;j++)players[j].x=-90+j*22+Math.sin(i/60)*10;
    const start=performance.now();
    stepWarden(round,at,1/60,i/60,players);
    const elapsed=performance.now()-start;
    if(repeat===0&&i===0)cold=elapsed;
    if(repeat>0)serverSamples.push(elapsed);
  }
}
results.serverColdStep_ms=cold;
results.serverStep_ms=stats(serverSamples);
// Whole room tick, including eight players, history and snapshot construction.
// Stub only transport emission; no sockets or wall-clock timers are started.
const tickSamples:number[]=[];
const realNow=Date.now;
let simulatedNow=0;
Date.now=()=>simulatedNow;
try{
  const io={to:()=>({emit:()=>{}})} as unknown as Parameters<typeof beginRound>[0];
  for(let repeat=0;repeat<6;repeat++){
    simulatedNow=0;
    const room={environmentTime:0,code:'BENCH',host:'0',roundId:0,state:'LOBBY',players:new Map(Array.from({length:8},(_,i)=>
      [String(i),{id:String(i),name:`Player ${i}`,socketId:String(i),color:0xffffff,weapons:{}}])),
      respawnTimers:new Map(),reconnectTimers:new Map(),killTracker:new KillTracker('bench'),shotSequence:0,
    } as unknown as Parameters<typeof beginRound>[1];
    beginRound(io,room,0);room.pickups=[];
    for(const p of room.players.values()){p.hp=1e9;p.protectUntil=0;}
    for(let i=0;i<1200;i++){
      simulatedNow=WARDEN_ENTRANCE.finish+i*1000/60;room.lastStep=simulatedNow;
      for(const [j,p] of [...room.players.values()].entries()){
        p.x=-90+j*22+Math.sin(i/60)*10;p.y=1.65;p.z=-80+j*12;
      }
      const start=performance.now();stepRoom(io,room,1/60);const elapsed=performance.now()-start;
      if(repeat>0)tickSamples.push(elapsed);
    }
  }
}finally{Date.now=realNow;}
results.roomTick_ms=stats(tickSamples);
console.log(JSON.stringify(results,null,2));
