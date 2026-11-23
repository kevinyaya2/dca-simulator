// Two real browser tabs and a local Socket.IO server; no production room used.
// npx tsx scripts/chroma-multiplayer-browser-check.ts [--compare]
import { spawn, execFileSync } from 'node:child_process';
import { mkdtemp, rm, writeFile, unlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { MovementQueue } from '../server/src/MovementQueue.ts';
import * as current from '../server/src/index.ts';
import { VOID_WARDEN, WARDEN_ENTRANCE } from '../shared/voidWarden.ts';

import { flameBaseline } from './chroma-flame-baseline.ts';
const flame=process.argv.includes('--flame');let baseline:Awaited<ReturnType<typeof flameBaseline>>|undefined;
const repo=fileURLToPath(new URL('../',import.meta.url)),temporary:string[]=[];
const profile=await mkdtemp(path.join(tmpdir(),'chroma-multiplayer-'));
const vite=spawn(process.execPath,[path.join(repo,'node_modules/vite/bin/vite.js'),'--configLoader','native','--host','127.0.0.1','--port','5178','--strictPort'],
  {cwd:repo,windowsHide:true,stdio:['ignore','pipe','pipe']});
const browser=spawn(process.env.BROWSER??'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless=new','--no-first-run','--no-default-browser-check','--remote-debugging-port=0',`--user-data-dir=${profile}`,
  '--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows',
  '--window-size=1000,700','about:blank'],{windowsHide:true,stdio:['ignore','ignore','pipe']});
let socket:WebSocket|undefined,gameServer:ReturnType<typeof current.createGameServer>|undefined;
let viteOutput='';vite.stdout.on('data',chunk=>viteOutput+=chunk);vite.stderr.on('data',chunk=>viteOutput+=chunk);
const pause=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms));
try{
  const endpoint=await new Promise<string>((resolve,reject)=>{
    let output='';const timer=setTimeout(()=>reject(new Error('Browser startup timed out')),15000);
    browser.stderr.on('data',chunk=>{output+=chunk;const match=output.match(/DevTools listening on (ws:\/\/\S+)/);if(match){clearTimeout(timer);resolve(match[1]);}});
    browser.once('error',error=>{clearTimeout(timer);reject(error);});
    browser.once('exit',code=>{clearTimeout(timer);reject(new Error(`Browser exited ${code}: ${output}`));});
  });
  const deadline=Date.now()+15000;
  while(!viteOutput.includes('Local:')){
    if(vite.exitCode!==null||Date.now()>deadline)throw new Error(`Vite not ready: ${viteOutput}`);
    await pause(100);
  }
  socket=new WebSocket(endpoint);await once(socket,'open');
  let id=0;const pending=new Map<number,{resolve:(value:any)=>void;reject:(reason:unknown)=>void;timer:ReturnType<typeof setTimeout>}>();
  const browserErrors:unknown[]=[];
  socket.addEventListener('message',event=>{
    const message=JSON.parse(String(event.data));
    if(message.method==='Runtime.exceptionThrown')browserErrors.push(message.params.exceptionDetails);
    const request=pending.get(message.id);if(!request)return;
    clearTimeout(request.timer);pending.delete(message.id);message.error?request.reject(message.error):request.resolve(message.result);
  });
  const send=(method:string,params:object={},sessionId?:string)=>new Promise<any>((resolve,reject)=>{
    const requestId=++id,timer=setTimeout(()=>{pending.delete(requestId);reject(new Error(`CDP timed out: ${method}`));},30000);
    pending.set(requestId,{resolve,reject,timer});socket!.send(JSON.stringify({id:requestId,method,params,sessionId}));
  });
  const evaluate=async(sessionId:string,expression:string)=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true},sessionId);
    if(result.exceptionDetails)throw new Error(JSON.stringify(result.exceptionDetails));return result.result.value;
  };
  const waitProbe=(sessionId:string,condition:string)=>evaluate(sessionId,`new Promise((resolve,reject)=>{
    const deadline=performance.now()+20000;function check(){if(window.multiplayerProbe&&(${condition}))resolve(true);
    else if(performance.now()>deadline)reject(new Error('Harness not ready'));else setTimeout(check,50);}check();})`);
  const variants:[string,typeof current,string?][]=[];
  if(flame&&process.argv.includes('--compare')){baseline=await flameBaseline();variants.push(['HEAD',baseline.server,baseline.clientModule]);}
  if(!flame&&process.argv.includes('--compare')){
    const suffix=`.browser-${randomUUID()}.local`;
    for(const relative of ['shared/navigation','server/src/voidWarden','server/src/SimulationClock','server/src/index',
      'src/chroma-ops/core/GameLoop','src/chroma-ops/core/MultiplayerGame']){
      const destination=path.join(repo,`${relative}${suffix}.ts`);
      const source=execFileSync('git',['show',`HEAD:${relative}.ts`],{cwd:repo,encoding:'utf8'})
        .replaceAll('/navigation.js',`/navigation${suffix}.js`).replaceAll('./voidWarden.js',`./voidWarden${suffix}.js`)
        .replaceAll('./SimulationClock.js',`./SimulationClock${suffix}.js`).replaceAll("'./GameLoop'",`'./GameLoop${suffix}'`);
      await writeFile(destination,source,{flag:'wx'});temporary.push(destination);
    }
    variants.push(['HEAD',await import(pathToFileURL(temporary[3]).href),`/dca-simulator/src/chroma-ops/core/MultiplayerGame${suffix}.ts`]);
  }
  if(!process.argv.includes('--rematch-only'))variants.push(['working-tree',current]);const results=[];
  for(const [variant,implementation,clientModule] of variants)for(const scenario of (flame?['none','normal','grown']:['none','grown']))for(const rtt of [0,100,250]){
    gameServer=implementation.createGameServer({wardenSpawnDelayMs:60000});
    await new Promise<void>(resolve=>gameServer!.http.listen(0,'127.0.0.1',resolve));
    const address=gameServer.http.address();if(!address||typeof address==='string')throw new Error('No server address');
    const sessions:string[]=[],targets:string[]=[];
    let roomCode='';
    for(let i=0;i<2;i++){
      const {targetId}=await send('Target.createTarget',{url:'about:blank',newWindow:true});targets.push(targetId);
      const {sessionId}=await send('Target.attachToTarget',{targetId,flatten:true});sessions.push(sessionId);
      await send('Runtime.enable',{},sessionId);
      const query=new URLSearchParams({server:`http://127.0.0.1:${address.port}`,chromaDiagnostics:'1',rtt:String(rtt)});
      if(flame)query.set('flame','1');if(i)query.set('room',roomCode);if(clientModule)query.set('clientModule',clientModule);
      await send('Page.navigate',{url:`http://127.0.0.1:5178/dca-simulator/scripts/chroma-multiplayer-browser.html?${query}`},sessionId);
      await waitProbe(sessionId,'window.multiplayerProbe.code');roomCode=await evaluate(sessionId,'window.multiplayerProbe.code');
    }
    await evaluate(sessions[0],'window.multiplayerProbe.start()');
    await Promise.all(sessions.map(session=>waitProbe(session,'window.multiplayerProbe.ready')));
    const room=gameServer.rooms.get(roomCode)!;
    if(flame){for(const p of room.players.values()) {p.activeWeapon='flame';p.ownedWeapons.push('flame');}}
    for(const [i,p] of [...room.players.values()].entries())Object.assign(p,{x:-130,y:1.65,z:-120+i*5,yaw:0,pitch:0,hp:1e9,protectUntil:0});
    if(scenario==='none')room.warden=undefined;
    else {
      const template=[...room.players.values()][0];
      for(let i=2;i<(flame?2:8);i++){
        const p=structuredClone({...template,movement:undefined});
        if(template.movement)p.movement=new MovementQueue();
        Object.assign(p,{id:`fixture${i}`,socketId:`fixture${i}`,x:-77.5+(i%3-1)*4,y:i>3?7.65:1.65,z:45+(i<4?4:12)});
        room.players.set(p.id,p);
      }
      room.warden!.boss={...VOID_WARDEN.location,x:-77.5,z:45,spawnAt:Date.now()-WARDEN_ENTRANCE.finish,state:'FOLLOW',stateAt:Date.now(),yaw:0,
        hp:VOID_WARDEN.alliedHp,maxHp:VOID_WARDEN.maxHp,ownerId:template.id,ownerName:template.name,targetId:null,
        phaseTwo:false,enraged:false,attack:null,air:0,kills:12,scale:8,heldBounty:0};
    }
    if(flame){
      for(const [i,p] of [...room.players.values()].entries())Object.assign(p,{x:12+i*2,y:1.65,z:-10,yaw:Math.PI,pitch:0,hp:1e9});
      if(room.warden?.boss)Object.assign(room.warden.boss,{x:12,z:8,y:0,state:'PATROL',ownerId:null,hp:1e9,maxHp:1e9,scale:scenario==='grown'?8:1,kills:scenario==='grown'?12:0});
    }
    await pause(2000);await Promise.all(sessions.map(session=>evaluate(session,'window.multiplayerProbe.reset()')));
    await pause(4000);
    const clients=await Promise.all(sessions.map(session=>evaluate(session,'window.multiplayerProbe.summary()')));
    let lifecycle:any;
    if(flame&&scenario!=='none'){
      const victim=[...room.players.values()][0];
      Object.assign(victim,{x:12,y:1.65,z:4,hp:22,protectUntil:0});
      const boss=room.warden!.boss!;room.warden!.hits.clear();
      Object.assign(boss,{x:12,y:0,z:8,state:'ATTACK',targetId:victim.id,attack:{kind:'slash',startedAt:Date.now()-450,rate:1,scale:boss.scale,from:{x:12,y:0,z:8},to:{x:12,y:0,z:8},yaw:Math.PI,jumpHeight:0}});
      try{await waitProbe(sessions[0],'window.multiplayerProbe.summary().deaths.length>0');}
      catch(error){console.error(JSON.stringify({variant,scenario,rtt,victim:{hp:victim.hp,alive:victim.alive,x:victim.x,y:victim.y,z:victim.z},boss,client:await evaluate(sessions[0],'window.multiplayerProbe.summary()')}));throw error;}
      await pause(100);const killed=await evaluate(sessions[0],'window.multiplayerProbe.summary()');
      await waitProbe(sessions[0],'window.multiplayerProbe.alive');
      lifecycle={killed,stale:await evaluate(sessions[0],'window.multiplayerProbe.staleDamage()')};
      if(variant==='working-tree'&&(!killed.deaths[0].immediateDead||killed.deaths[0].pending!==0||killed.fireCount!==killed.deaths[0].fireCount||!lifecycle.stale.ignored))throw new Error('Death lifecycle regression');
    }
    results.push({variant,scenario,rtt,clients,lifecycle});console.log(JSON.stringify({progress:variant,scenario,rtt,clients}));
    for(const session of sessions)await evaluate(session,'window.multiplayerProbe.dispose()');
    for(const targetId of targets)await send('Target.closeTarget',{targetId});
    gameServer.close();gameServer=undefined;
  }
  const {targetId:rematchTarget}=await send('Target.createTarget',{url:'about:blank',newWindow:true});
  const {sessionId:rematchSession}=await send('Target.attachToTarget',{targetId:rematchTarget,flatten:true});
  await send('Page.navigate',{url:'http://127.0.0.1:5178/dca-simulator/tests/chroma-rematch.html'},rematchSession);
  const rematch=await evaluate(rematchSession,`new Promise((resolve,reject)=>{
    const deadline=performance.now()+20000;
    function check(){const button=document.getElementById('run'),status=document.getElementById('status');
      if(status?.textContent.startsWith('PASS'))return resolve(status.textContent);
      if(status?.textContent.startsWith('FAIL')||performance.now()>deadline)return reject(new Error(status?.textContent||'Rematch timeout'));
      if(button&&!button.disabled&&status?.textContent==='Ready')button.click();setTimeout(check,50);}check();})`);
  await send('Target.closeTarget',{targetId:rematchTarget});
  console.log(JSON.stringify({results,browserErrors,rematch,notes:[
    'Two real headless Chrome tabs with full game renderers on a local Socket.IO server; four measured seconds after two warmup seconds.',
    flame?'Flame mode: two stationary players hold fire towards a normal/grown Warden (or empty lane). Lethal counterattack starts a real slash just before its contact window, followed by real respawn and a stale-life event fixture.':'The grown scenario includes six additional server-side fixture players. Browser input is a constant rightward run.',
    'Local CPU/GPU contention from two renderers affects frame timing; results do not represent Render or Internet latency.',
    'Transport fixture applies 0/100/250ms RTT with reliable ordered 35ms jitter bursts on both directions (no jitter at RTT zero).',
    'correction measures authoritative reconciliation displacement; backwardFrames counts camera x decreases exceeding 0.001 units.'
  ]},null,2));
  if(browserErrors.length||results.some(result=>result.clients.some(client=>client.errors.length||!client.connected||!client.frames)))process.exitCode=1;
  await send('Browser.close');
}finally{
  await baseline?.dispose();
  gameServer?.close();socket?.close();if(browser.exitCode===null)browser.kill();if(vite.exitCode===null)vite.kill();
  for(const filename of temporary)await unlink(filename);
  if(path.dirname(path.resolve(profile))===path.resolve(tmpdir())&&path.basename(profile).startsWith('chroma-multiplayer-'))
    await rm(profile,{recursive:true,force:true,maxRetries:10,retryDelay:200});
}
