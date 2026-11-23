import { io } from 'socket.io-client';
import { PerformanceMetrics } from '../shared/performanceMetrics';
import '../src/pages/ChromaOps.css';
import '../src/pages/CombatFeedback.css';
import '../src/pages/Armory.css';
import '../src/pages/MobileControls.css';
import '../src/pages/MultiplayerArena.css';
import '../src/chroma-ops/ui/SniperScope.css';

const params=new URLSearchParams(location.search),metrics=new PerformanceMetrics(1200);
const { MultiplayerGame }=await import(/* @vite-ignore */ (params.get('clientModule')??'/dca-simulator/src/chroma-ops/core/MultiplayerGame.ts'));
const socket=io(params.get('server')!,{transports:['websocket'],autoConnect:false});
const rtt=Number(params.get('rtt')??0);
// Reliable ordered transport fixture. Delay delivery as well as transmission;
// each message is broadcast once so before/game/after listeners stay adjacent.
class DelayedTransport {
  private listeners=new Map<string,Set<(...args:any[])=>void>>();
  private receivers=new Map<string,(...args:any[])=>void>();
  private timers=new Set<ReturnType<typeof setTimeout>>();
  private deliveries={incoming:[] as {at:number;action:()=>void}[],outgoing:[] as {at:number;action:()=>void}[]};
  private scheduled={incoming:false,outgoing:false};
  private outgoingAt=0;private incomingAt=0;private sent=0;private received=0;
  get connected(){return socket.connected;}
  get sendBuffer(){return socket.sendBuffer;}
  private schedule(action:()=>void,incoming:boolean){
    const count=incoming?++this.received:++this.sent;
    const delay=rtt/2+(rtt&&count%17<4?35:0),previous=incoming?this.incomingAt:this.outgoingAt;
    const at=Math.max(performance.now()+delay,previous);
    if(incoming)this.incomingAt=at;else this.outgoingAt=at;
    const direction=incoming?'incoming':'outgoing';
    this.deliveries[direction].push({at,action});this.flush(direction);
  }
  private flush(direction:'incoming'|'outgoing'){
    const queue=this.deliveries[direction];if(this.scheduled[direction]||!queue.length)return;
    this.scheduled[direction]=true;
    const timer=setTimeout(()=>{
      this.timers.delete(timer);this.scheduled[direction]=false;
      // Separate timers with equal deadlines can fire out of order. A single
      // FIFO pump models the reliable ordering guaranteed by a WebSocket.
      while(queue[0]&&queue[0].at<=performance.now())queue.shift()!.action();
      this.flush(direction);
    },Math.max(0,Math.ceil(queue[0].at-performance.now())));
    this.timers.add(timer);
  }
  on(name:string,handler:(...args:any[])=>void){
    let handlers=this.listeners.get(name);
    if(!handlers){
      handlers=new Set();this.listeners.set(name,handlers);
      const receiver=(...args:any[])=>this.schedule(()=>{for(const callback of this.listeners.get(name)??[])callback(...args);},true);
      this.receivers.set(name,receiver);socket.on(name,receiver);
    }
    handlers.add(handler);return this;
  }
  off(name:string,handler:(...args:any[])=>void){this.listeners.get(name)?.delete(handler);return this;}
  emit(name:string,...args:any[]){
    if(name==='net:ping'){
      const callback=args[0];args[0]=(...reply:any[])=>this.schedule(()=>callback(...reply),true);
    }
    this.schedule(()=>socket.emit(name,...args),false);return this;
  }
  dispose(){
    for(const timer of this.timers)clearTimeout(timer);this.timers.clear();
    for(const [name,receiver] of this.receivers)socket.off(name,receiver);
    this.listeners.clear();this.receivers.clear();
    this.deliveries.incoming=[];this.deliveries.outgoing=[];
  }
}
const transport=new DelayedTransport();
const root=document.getElementById('arena')!;
let game:any,code='',playerId='',before:{x:number;y:number;z:number}|undefined;
let sampling=false,lastFrame=0,lastCameraX:number|undefined,backwardFrames=0,frames=0;
const errors:string[]=[];
transport.on('match:snapshot',()=>{
  const p=game?.player.position;before=p?{x:p.x,y:p.y,z:p.z}:undefined;
});
socket.on('room:state',(room:any)=>{
  if(room.state!=='PLAYING'||game)return;
  game=new MultiplayerGame(root,transport,code,room.roundId,(reason:string)=>errors.push(reason),playerId);
  // This is an input fixture, leaving actual game networking, prediction,
  // reconciliation and WebGL rendering running in both browser tabs.
  game.desktop.update=()=>game.input.set({moveX:1,moveY:0,sprint:false,shoot:false});
  game.start();
  transport.on('match:snapshot',()=>{
    if(!sampling||!before)return;
    const p=game.player.position;metrics.record('correction',Math.hypot(p.x-before.x,p.y-before.y,p.z-before.z));
  });
});
function sample(at:number){
  if(sampling&&game?.ready){
    if(lastFrame)metrics.record('frame_ms',at-lastFrame);
    const x=game.cam.position.x;if(lastCameraX!==undefined&&x<lastCameraX-.001)backwardFrames++;
    metrics.record('cameraOffset',game.cameraOffset.length());frames++;lastCameraX=x;lastFrame=at;
  }
  requestAnimationFrame(sample);
}
requestAnimationFrame(sample);
const probe={
  get code(){return code;},get ready(){return !!game?.ready;},
  start:()=>socket.emitWithAck('game:start'),
  reset(){metrics.reset();sampling=true;lastFrame=0;lastCameraX=undefined;backwardFrames=0;frames=0;},
  summary(){return {metrics:metrics.summary(),backwardFrames,frames,pending:game?.pending.length,rtt:game?.ping,inputResets:game?.resyncCount??null,errors,
    connected:socket.connected,renderer:game?.renderer.getContext().getParameter(game.renderer.getContext().RENDERER)};},
  dispose(){sampling=false;game?.dispose();transport.dispose();socket.disconnect();},
};
(window as any).multiplayerProbe=probe;
await new Promise<void>(resolve=>{socket.once('connect',resolve);socket.connect();});
const credentials=params.has('room')
  ?await socket.emitWithAck('room:join',{code:params.get('room'),name:'Browser Guest'})
  :await socket.emitWithAck('room:create','Browser Host');
if(credentials.error)throw new Error(credentials.error);
code=credentials.code;playerId=credentials.playerId;
