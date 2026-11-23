import test from 'node:test';
import assert from 'node:assert/strict';
import { MovementClock, MOVEMENT_STEP, replayMovement, simulateMovement, type MovementCommand } from '../shared/movement.ts';
import { MovementQueue } from '../server/src/MovementQueue.ts';
import { PerformanceMetrics } from '../shared/performanceMetrics.ts';
import { NavigationBudget } from '../shared/navigationBudget.ts';
import { beginRound, step, createRoomStepper } from '../server/src/index.ts';
import { KillTracker } from '../shared/combat.ts';
import { ARENA_BOXES, staticArenaWorld, type SimPlayer } from '../shared/arena.ts';
import { platformPosition } from '../shared/movingPlatforms.ts';
import { createWardenRound, stepWarden } from '../server/src/voidWarden.ts';
import { WARDEN_ENTRANCE } from '../shared/voidWarden.ts';

const command=(seq:number):MovementCommand=>({roundId:1,seq,clientTime:seq*1000/60,
  moveX:seq<60?1:seq<120?-1:0,moveY:seq>=120&&seq<180?1:0,
  yaw:seq<90?0:.6,pitch:.1,jump:seq===20||seq===35,reload:seq===140,sprint:seq>=60&&seq<180,aim:false});
const player=():SimPlayer=>({x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true,supportId:null});
const flat={boxes:[],heightAt:()=>0};
function near(a:SimPlayer,b:SimPlayer){
  assert.ok(Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z)<.001,JSON.stringify({a,b}));
  assert.ok(Math.abs(a.velocityY-b.velocityY)<1e-6);assert.equal(a.jumpsUsed,b.jumpsUsed);assert.equal(a.supportId,b.supportId);
}

for(const fps of [30,60,120,144])test(`${fps} FPS generates the same 60Hz running, turning, stopping and double jump`,()=>{
  const predicted=player(),reference=player(),clock=new MovementClock();let seq=0;
  for(let frame=0;frame<fps*4;frame++)clock.advance(1/fps,()=>{
    const input=command(++seq);simulateMovement(predicted,input,flat,(seq-1)/60,seq*1000/60);
  });
  assert.equal(seq,240);
  for(let tick=1;tick<=240;tick++)simulateMovement(reference,command(tick),flat,(tick-1)/60,tick*1000/60);
  near(predicted,reference);
});

for(const fps of [30,60,120,144])for(const rtt of [0,100,250])test(`${fps} FPS / ${rtt}ms RTT preserves command order through jitter and batching`,()=>{
  const clock=new MovementClock(),queue=new MovementQueue(),generated:MovementCommand[]=[],processed:number[]=[];
  const arrivals:{at:number;command:MovementCommand}[]=[];let seq=0,nextServer=0,lastArrival=0;
  const state=player(),reference=player();
  for(let frame=1;frame<=fps*4+fps;frame++){
    const now=frame*1000/fps;
    if(frame<=fps*4)clock.advance(1/fps,()=>{
      const input=command(++seq);generated.push(input);
      lastArrival=Math.max(lastArrival,now+rtt/2+(seq%17<4?35:0));
      arrivals.push({at:lastArrival,command:input});
    });
    while(nextServer<=now){
      while(arrivals[0]&&arrivals[0].at<=nextServer){const arrival=arrivals.shift()!;queue.enqueue(arrival.command,arrival.at);}
      const input=queue.take(nextServer);
      if(input){
        assert.ok(input.seq>queue.processed);simulateMovement(state,input,flat,processed.length/60,input.seq*1000/60);
        queue.markProcessed(input);processed.push(input.seq);
      }
      assert.ok(queue.length<=15);nextServer+=1000/60;
    }
  }
  assert.equal(queue.resetId,0);assert.deepEqual(processed,generated.map(c=>c.seq));
  for(const input of generated)simulateMovement(reference,input,flat,(input.seq-1)/60,input.seq*1000/60);
  near(state,reference);
  // Replay contains movement only; fire/reload/weapon flags are not callbacks.
  const pending=generated.slice(200),base=player(),expected=player();
  const end=replayMovement(base,pending,flat,10,10_000,10_100,10_300);
  pending.forEach((input,i)=>simulateMovement(expected,input,flat,10+i/60,10_000+(i+1)*1000/60,10_100,10_300));
  near(base,expected);assert.ok(Math.abs(end-10-pending.length/60)<1e-8);
});

test('overflow and stale commands are discarded explicitly without false acknowledgements',()=>{
  const queue=new MovementQueue();for(let seq=1;seq<=16;seq++)queue.enqueue(command(seq),0);
  assert.equal(queue.processed,0);assert.equal(queue.discardedThrough,15);assert.equal(queue.resetId,1);assert.equal(queue.length,1);
  const last=queue.take(1)!;assert.equal(last.seq,16);queue.markProcessed(last);
  assert.equal(queue.take(2),undefined);assert.equal(queue.processed,16);
  queue.enqueue(command(17),2);assert.equal(queue.take(253),undefined);
  assert.equal(queue.processed,16);assert.equal(queue.discardedThrough,17);
  queue.enqueue({...command(18),reset:true},254);assert.equal(queue.resetId,3);
  assert.equal(queue.enqueue(command(18),255),false);
});

test('long frame work is bounded and its dropped time is observable',()=>{
  const clock=new MovementClock();let count=0;const result=clock.advance(2,()=>count++);
  assert.equal(count,15);assert.equal(result.steps,15);assert.equal(result.dropped,1.75);
  clock.reset();assert.equal(clock.alpha,0);
});

test('pending replay agrees on moving platforms, buff expiry and changed building terrain',()=>{
  const lift=platformPosition(8,8),state={...player(),x:lift.x,y:lift.y+1.65,z:lift.z,supportId:8};
  const pending=Array.from({length:120},(_,i)=>({...command(i+1),moveX:0,moveY:0,jump:false}));
  const reference={...state},actual={...state},world=staticArenaWorld(new Set(['cover:0:top']));
  replayMovement(actual,pending,world,8,8000,8500,9200);
  pending.forEach((input,i)=>simulateMovement(reference,input,world,8+i/60,8000+(i+1)*1000/60,8500,9200));
  near(actual,reference);assert.ok(actual.supportId!==null);
});

test('replay expires slow and blessing on their authoritative step boundaries',()=>{
  const state=player(),pending=Array.from({length:15},(_,i)=>({...command(i+1),moveX:1,moveY:0,jump:false,sprint:false}));
  replayMovement(state,pending,flat,0,1000,1084,1167);
  // Five steps at 65% * 110%, five at 110%, then five at normal 8 m/s.
  assert.ok(Math.abs(state.x-1.8766666666666667)<.001);assert.equal(state.y,1.65);
});

test('replaying against a destroyed support actually falls instead of retaining its cached floor',()=>{
  const keys=ARENA_BOXES.filter(box=>box.breakKey?.startsWith('cover:0:')).map(box=>box.breakKey!);
  assert.ok(keys.length>0);
  const intact={...player(),x:0,y:4.65,z:-3},destroyed={...intact};
  const pending=Array.from({length:60},(_,i)=>({...command(i+1),moveX:0,moveY:0,jump:false}));
  replayMovement(intact,pending,staticArenaWorld(),0,0);
  replayMovement(destroyed,pending,staticArenaWorld(new Set(keys)),0,0);
  assert.ok(Math.abs(intact.y-4.65)<.001);assert.ok(destroyed.y<2);
});

function fixture(){
  const room={environmentTime:0,code:'TEST',host:'a',roundId:0,state:'LOBBY',players:new Map(['a','b'].map(id=>
    [id,{id,name:id,socketId:id,weapons:{}}])),respawnTimers:new Map(),reconnectTimers:new Map(),killTracker:new KillTracker('test'),shotSequence:0} as unknown as Parameters<typeof beginRound>[1];
  const snapshots:unknown[]=[];
  const io={to:()=>({emit:(name:string,value:unknown)=>{if(name==='match:snapshot')snapshots.push(value);}})} as unknown as Parameters<typeof beginRound>[0];
  beginRound(io,room);room.pickups=[];return {room,io,snapshots};
}

test('real room ticks consume at most one command, never acknowledge a batch or replay a shot',()=>{
  const {room,io,snapshots}=fixture(),p=room.players.get('a')!;
  const original=Date.now;let now=original();Date.now=()=>now;
  try{
    p.x=-100;p.z=-100;p.y=1.65;p.protectUntil=0;
    for(let seq=1;seq<=3;seq++)p.movement!.enqueue({...command(seq),roundId:room.roundId,clientTime:now,moveX:0,moveY:0,jump:false,fire:seq===1},now);
    p.lastReceivedSeq=3;const ammo=p.weapons.ar.ammo;
    for(let seq=1;seq<=3;seq++){
      now+=1000/60;room.lastStep=now;step(io,room,MOVEMENT_STEP);assert.equal(p.lastProcessedSeq,seq);
    }
    assert.equal(p.weapons.ar.ammo,ammo-1);
    now+=1000/60;room.lastStep=now;step(io,room,MOVEMENT_STEP);
    assert.equal(p.lastProcessedSeq,3);assert.equal(p.weapons.ar.ammo,ammo-1);
    assert.ok(!JSON.stringify(snapshots).includes('receivedAt'));
    p.movement!.enqueue({...command(4),fire:true},now);p.movement!.clear();
    assert.equal(p.movement!.take(now),undefined);assert.equal(p.movement!.processed,3);
  }finally{Date.now=original;}
});

test('all rooms update in rotating order even after the shared search time expires',()=>{
  const first=fixture(),second=fixture();second.room.code='NEXT';
  const rooms=new Map([['a',first.room],['b',second.room]]),order:string[]=[];
  const io={to:(code:string)=>({emit:()=>{order.push(code);}})} as unknown as typeof first.io;
  const advance=createRoomStepper(io,rooms);let time=Math.max(first.room.lastStep,second.room.lastStep);
  first.room.lastStep=second.room.lastStep=time;first.room.tick=second.room.tick=2;
  const denied=new NavigationBudget(()=>10,0);
  for(let tick=0;tick<4;tick++)advance(MOVEMENT_STEP,time+=1000/60,denied);
  assert.deepEqual(order.slice(0,2),['TEST','NEXT']);assert.deepEqual(order.slice(2,4),['NEXT','TEST']);
  assert.equal(first.room.tick,6);assert.equal(second.room.tick,6);
});

test('shared navigation limits apply across child budgets while route limits remain per room',()=>{
  let time=0;const shared=new NavigationBudget(()=>time,3,3,2);
  const a=new NavigationBudget(()=>time,3,2048,512,shared),b=new NavigationBudget(()=>time,3,2048,512,shared);
  assert.equal(a.route(),true);assert.equal(b.route(),true);assert.equal(a.route(),false);
  assert.equal(a.sample(),true);assert.equal(b.sample(),true);assert.equal(b.sample(),true);assert.equal(a.sample(),false);
  const timed=new NavigationBudget(()=>time,3),child=new NavigationBudget(()=>time,3,2048,512,timed);
  assert.equal(child.check(),true);time=3;assert.equal(child.check(),false);
});

test('an exhausted cross-room budget preserves a Warden route and still validates movement',()=>{
  const round=createWardenRound(0,0);stepWarden(round,0,1/60,0,[]);
  const boss=round.boss!;boss.state='PATROL';round.route=[{x:boss.x+5,y:boss.y,z:boss.z}];
  round.routeGoal=round.route[0];round.routeScale=boss.scale;round.repathAt=0;
  const before=boss.x;
  stepWarden(round,WARDEN_ENTRANCE.finish+17,1/60,0,[],undefined,new NavigationBudget(()=>0,0));
  assert.ok(boss.x>before);assert.ok(round.route.length>0);assert.equal(round.searchStats?.exhausted,true);
});

test('diagnostic samples remain bounded but retain full-window counts and maximum',()=>{
  const metrics=new PerformanceMetrics(3);for(let value=10;value>=1;value--)metrics.record('tick',value);
  const summary=metrics.summary().tick;assert.equal(summary.samples,3);assert.equal(summary.count,10);
  assert.equal(summary.max,10);assert.equal(summary.p99,3);metrics.reset();assert.deepEqual(metrics.summary(),{});
});
