// CPU stress case: npx.cmd tsx scripts/chroma-warden-building-bench.ts
// --baseline compares against HEAD using temporary modules, removed on exit.
import { performance } from 'node:perf_hooks';
import { execFileSync } from 'node:child_process';
import { writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { WARDEN_ENTRANCE } from '../shared/voidWarden.ts';

const baseline=process.argv.includes('--baseline');
const references:string[]=[];
try{
if(baseline){
  const repo=fileURLToPath(new URL('../',import.meta.url));
  for(const relative of ['server/src/voidWarden','shared/navigation']){
    const reference=fileURLToPath(new URL(`../${relative}.building-baseline.local.ts`,import.meta.url));
    const source=execFileSync('git',['show',`HEAD:${relative}.ts`],{cwd:repo,encoding:'utf8'}).replace('/navigation.js','/navigation.building-baseline.local.js');
    writeFileSync(reference,source,{flag:'wx'});references.push(reference);
  }
}
const wardenModule=baseline?'../server/src/voidWarden.building-baseline.local.ts':'../server/src/voidWarden.ts';
const navigationModule=baseline?'../shared/navigation.building-baseline.local.ts':'../shared/navigation.ts';
const {createWardenRound,stepWarden}=await import(wardenModule);
const {navigationGraph}=await import(navigationModule);
navigationGraph();navigationGraph(true);
const scenarios=[];
for(const spot of [{name:'city-west',x:-77.5,z:45},{name:'lab',x:58,z:90}])for(const scale of [2,4,8,20]){
  const samples:number[]=[];
  let maxSamples=0,maxNodes=0,maxRoutes=0,limited=0;
  for(let repeat=0;repeat<3;repeat++){
    const round=createWardenRound(0,0);stepWarden(round,0,1/60,0,[]);
    Object.assign(round.boss!,{x:spot.x,y:0,z:spot.z,scale,kills:4,ownerId:'owner',state:'FOLLOW',stateAt:0});
    const players=Array.from({length:8},(_,i)=>({id:i?'enemy'+i:'owner',socketId:'s'+i,alive:true,
      x:spot.x+(i%3-1)*4,y:i>3?7.65:1.65,z:spot.z+(i<4?4:12)}));
    for(let tick=0;tick<180;tick++){
      const start=performance.now();stepWarden(round,WARDEN_ENTRANCE.finish+tick*1000/60,1/60,0,players);samples.push(performance.now()-start);
      if(round.searchStats){
        maxSamples=Math.max(maxSamples,round.searchStats.samples);maxNodes=Math.max(maxNodes,round.searchStats.nodes);maxRoutes=Math.max(maxRoutes,round.searchStats.routes);
        if(round.searchStats.exhausted)limited++;
      }
    }
  }
  samples.sort((a,b)=>a-b);
  scenarios.push({location:spot.name,scale,median_ms:samples[Math.floor(samples.length/2)],p95_ms:samples[Math.ceil(samples.length*.95)-1],max_ms:samples[samples.length-1],
    maxSearchSamples:maxSamples,maxSearchNodes:maxNodes,maxRoutesPerTick:maxRoutes,limitedTicks:limited});
}
console.log(JSON.stringify({baseline,samplesPerScenario:540,scenarios},null,2));
}finally{for(const reference of references)unlinkSync(reference);}
