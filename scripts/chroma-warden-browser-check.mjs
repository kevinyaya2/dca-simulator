// Requires a running Vite dev server and a Chromium browser (or BROWSER env path).
// Run: node scripts/chroma-warden-browser-check.mjs [--baseline]
import { spawn } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const profile=await mkdtemp(path.join(tmpdir(),'chroma-warden-browser-'));
const repo=fileURLToPath(new URL('../',import.meta.url));
const references=[];
const browser=process.env.BROWSER??'C:/Program Files/Google/Chrome/Application/chrome.exe';
const child=spawn(browser,['--headless=new','--no-first-run','--no-default-browser-check','--remote-debugging-port=0',
  `--user-data-dir=${profile}`,'--disable-background-timer-throttling','--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows','--window-size=1000,700','about:blank'],{windowsHide:true,stdio:['ignore','ignore','pipe']});
let socket;
let browserLog='';
child.stderr.on('data',chunk=>{browserLog+=chunk;});
try{
  if(process.argv.includes('--baseline'))for(const name of ['WardenCombatFx','VoidWarden','WardenEntrance','WardenInfectionBurst']){
    const reference=path.join(repo,`src/chroma-ops/boss/${name}.baseline.local.ts`);
    let source=execFileSync('git',['show',`HEAD:src/chroma-ops/boss/${name}.ts`],{cwd:repo,encoding:'utf8'});
    for(const dependency of ['WardenCombatFx','VoidWarden','WardenInfectionBurst'])source=source.replaceAll(`'./${dependency}'`,`'./${dependency}.baseline.local'`);
    await writeFile(reference,source,{flag:'wx'});references.push(reference);
  }
  const endpoint=await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('Browser startup timed out')),15000);
    let log='';child.stderr.on('data',chunk=>{log+=chunk;const match=log.match(/DevTools listening on (ws:\/\/\S+)/);if(match){clearTimeout(timer);resolve(match[1]);}});
    child.once('error',error=>{clearTimeout(timer);reject(error);});
    child.once('exit',code=>{clearTimeout(timer);reject(new Error(`Browser exited ${code}: ${log}`));});
  });
  socket=new WebSocket(endpoint);await once(socket,'open');
  let seq=0;const pending=new Map(),errors=[];
  socket.addEventListener('close',()=>{for(const request of pending.values())request.reject(new Error(`Browser connection closed: ${browserLog}`));pending.clear();});
  socket.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails);
    if(message.method==='Runtime.consoleAPICalled'&&message.params.type==='error')errors.push(message.params.args);
    const request=pending.get(message.id);
    if(request){pending.delete(message.id);message.error?request.reject(message.error):request.resolve(message.result);}
  });
  const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{
    const id=++seq;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params,sessionId}));
  });
  const {targetId}=await send('Target.createTarget',{url:'about:blank'});
  const {sessionId}=await send('Target.attachToTarget',{targetId,flatten:true});
  await send('Runtime.enable',{},sessionId);
  const url='http://127.0.0.1:5173/dca-simulator/scripts/chroma-warden-browser.html'+(process.argv.includes('--baseline')?'?baseline':'');
  await send('Page.navigate',{url},sessionId);
  const timeout=setTimeout(()=>{console.error('Benchmark timed out');socket.close();child.kill();process.exitCode=1;},120000);
  const result=await send('Runtime.evaluate',{expression:`new Promise((resolve,reject)=>{
    const start=performance.now();
    function wait(){if(window.wardenBenchmark)window.wardenBenchmark.then(resolve,reject);
      else if(performance.now()-start>20000)reject(new Error('Harness did not load'));else setTimeout(wait,100);}wait();
  })`,awaitPromise:true,returnByValue:true},sessionId);
  clearTimeout(timeout);
  if(result.exceptionDetails)throw new Error(JSON.stringify(result.exceptionDetails));
  console.log(JSON.stringify({results:result.result.value,errors},null,2));
  if(errors.length||result.result.value.glError||result.result.value.remainingBossHud||
    !process.argv.includes('--baseline')&&result.result.value.unchangedHudMutations!==0)process.exitCode=1;
  const screenshotArg=process.argv.find(arg=>arg.startsWith('--screenshot='));
  if(screenshotArg){const screenshot=await send('Page.captureScreenshot',{format:'png'},sessionId);await writeFile(screenshotArg.slice(13),Buffer.from(screenshot.data,'base64'));}
  const exited=once(child,'exit');await send('Browser.close');await exited;
}finally{
  socket?.close();if(child.exitCode===null)child.kill();
  for(const reference of references)await rm(reference);
  // Only remove the unique profile created above, directly within the temp directory.
  if(path.dirname(path.resolve(profile))===path.resolve(tmpdir())&&path.basename(profile).startsWith('chroma-warden-browser-'))
    await rm(profile,{recursive:true,force:true,maxRetries:10,retryDelay:200});
}
