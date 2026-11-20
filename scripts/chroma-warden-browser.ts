// Vite development-only harness. Never imported by the application build.
import * as T from 'three';
import { Arena } from '../src/chroma-ops/world/Arena';
import { VOID_WARDEN, WARDEN_ATTACKS, WARDEN_ENTRANCE, type WardenSnapshot, type WardenAttackKind } from '../shared/voidWarden';

const stats=(values:number[])=>{
  values.sort((a,b)=>a-b);
  return {median:values[Math.floor(values.length/2)],p95:values[Math.ceil(values.length*.95)-1],max:values[values.length-1]};
};
async function run(){
  const baseline=new URLSearchParams(location.search).has('baseline');
  const modulePath=`../src/chroma-ops/boss/WardenEntrance${baseline?'.baseline.local':''}.ts`;
  const {WardenEntrance}=await import(/* @vite-ignore */ modulePath);
  const root=document.querySelector<HTMLElement>('#game')!;
  const renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setSize(960,540);renderer.setPixelRatio(1);root.append(renderer.domElement);
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(75,960/540,.08,600),arena=new Arena();
  camera.position.set(20,5,24);camera.lookAt(12,2,8);
  scene.add(arena.group,new T.HemisphereLight(0xffffff,0x16b9dc,2));
  const view=new WardenEntrance(scene,root,false,'owner');
  let disposed=false;
  const boss:WardenSnapshot={...VOID_WARDEN.location,spawnAt:0,state:'SPAWN',stateAt:0,yaw:0,hp:VOID_WARDEN.maxHp,maxHp:VOID_WARDEN.maxHp,
    targetId:null,ownerId:null,ownerName:null,phaseTwo:false,enraged:false,air:0,attack:null,kills:0,scale:1,heldBounty:0};
  const gl=renderer.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info');
  const result:Record<string,unknown>={renderer:debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER),size:[960,540]};
  const nextFrame=()=>new Promise<number>(resolve=>requestAnimationFrame(resolve));
  try{
    for(const scenario of ['entrance','chase','slash','burst','grown'] as const){
      boss.state=scenario==='entrance'?'SPAWN':scenario==='chase'?'CHASE':'ATTACK';
      boss.scale=scenario==='grown'?3:1;boss.enraged=scenario==='burst';boss.phaseTwo=boss.enraged;
      const kind:WardenAttackKind=scenario==='burst'?'burst':'slash';
      boss.attack=boss.state==='ATTACK'?{kind,startedAt:6000,rate:1,scale:boss.scale,from:{...VOID_WARDEN.location},
        to:{x:12,y:0,z:18},yaw:0,jumpHeight:0,rays:Array.from({length:10},(_,i)=>({x:12+Math.sin(i*Math.PI/5)*13,y:0,z:8+Math.cos(i*Math.PI/5)*13}))}:null;
      const frames:number[]=[],updates:number[]=[],renders:number[]=[];
      let previous=await nextFrame();
      for(let i=0;i<150;i++){
        const stamp=await nextFrame();
        const now=scenario==='entrance'?i/149*WARDEN_ENTRANCE.finish:6000+(i/149)*(WARDEN_ATTACKS[kind].duration+250);
        if(scenario==='chase'){boss.x=12+Math.sin(i/30)*3;boss.z=8+Math.cos(i/30)*3;}
        else{boss.x=12;boss.z=8;}
        const start=performance.now();view.update(boss,now,1/60);const updated=performance.now();
        arena.update(i/60,0,renderer);renderer.render(scene,camera);const rendered=performance.now();
        if(i>=30){frames.push(stamp-previous);updates.push(updated-start);renders.push(rendered-updated);}
        previous=stamp;
      }
      result[scenario]={frame_ms:stats(frames),bossCPU_ms:stats(updates),renderSubmitCPU_ms:stats(renders),drawCalls:renderer.info.render.calls};
    }
    boss.state='CHASE';boss.attack=null;
    view.update(boss,9000,1/60);
    let mutations=0;
    const observer=new MutationObserver(records=>{mutations+=records.length;});
    observer.observe(root,{subtree:true,attributes:true,childList:true,characterData:true});
    for(let i=0;i<10;i++)view.update(boss,9000+i*16,1/60);
    await Promise.resolve();observer.disconnect();result.unchangedHudMutations=mutations;
    view.hideHud();view.update(boss,9200,1/60);
    if(root.querySelector<HTMLElement>('.co-warden-hud')!.hidden)throw new Error('HUD did not resume');
    // State transitions and disposal exercise late joins, allied HUD, all moves and rematches.
    for(const state of ['ENRAGED','DEFEATED','ALLIED','FOLLOW','GUARD','WAIT','DESPAWN'] as const){
      boss.state=state;boss.stateAt=9000;boss.ownerId=state==='ENRAGED'?null:'owner';
      view.update(boss,9300,1/60);renderer.render(scene,camera);
    }
    for(const kind of ['slash','dash','leap','burst'] as const){
      boss.state='ATTACK';boss.attack={kind,startedAt:9000,rate:1,scale:boss.scale,from:{...VOID_WARDEN.location},to:{x:12,y:0,z:18},yaw:0,jumpHeight:0};
      view.update(boss,9800,1/60);renderer.render(scene,camera);
    }
    view.dispose();disposed=true;
    const restarted=new WardenEntrance(scene,root,false,'owner');
    boss.state='SPAWN';boss.spawnAt=10000;restarted.update(boss,12000,1/60);renderer.render(scene,camera);restarted.dispose();
    result.remainingBossHud=root.querySelectorAll('.co-warden-hud,.co-warden-title').length;
    result.glError=gl.getError();
    return result;
  }finally{if(!disposed)view.dispose();arena.dispose();renderer.dispose();}
}
declare global{interface Window{wardenBenchmark:Promise<unknown>}}
window.wardenBenchmark=run();
window.wardenBenchmark.then(result=>{document.querySelector('#result')!.textContent=JSON.stringify(result,null,2);},error=>{document.querySelector('#result')!.textContent=String(error);});
