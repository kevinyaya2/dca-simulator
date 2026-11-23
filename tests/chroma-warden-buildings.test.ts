import { MovementQueue } from '../server/src/MovementQueue.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import { io as connect, type Socket } from 'socket.io-client';
import { NavigationBudget } from '../shared/navigationBudget.ts';
import { NavigationSearch, navigationSteps, navigationGraph, navigationPath, type NavigationStep, type NavigationWalk } from '../shared/navigation.ts';
import { createWardenRound, stepWarden } from '../server/src/voidWarden.ts';
import { createGameServer } from '../server/src/index.ts';
import { ARENA_BOXES, overlapsBox } from '../shared/arena.ts';
import { VOID_WARDEN, WARDEN_ENTRANCE } from '../shared/voidWarden.ts';
import { intactBox } from '../shared/destruction.ts';

const dt=1/60,at=WARDEN_ENTRANCE.finish;
function fixture(x:number,z:number,scale:number){
  const round=createWardenRound(0,0);stepWarden(round,0,dt,0,[]);
  Object.assign(round.boss!,{x,y:0,z,state:'FOLLOW',stateAt:0,scale,kills:4,ownerId:'owner'});
  return {round,boss:round.boss!,owner:{id:'owner',socketId:'s',alive:true,x,y:1.65,z}};
}

test('sample, node and time limits are shared and a paused search can finish without restarting',()=>{
  const sampleBudget=new NavigationBudget(()=>0,3,4,2);
  assert.equal(sampleBudget.route(),true);assert.equal(sampleBudget.route(),false);
  for(let i=0;i<4;i++)assert.equal(sampleBudget.sample(),true);
  assert.equal(sampleBudget.sample(),false);assert.equal(sampleBudget.stats.samples,4);
  const nodes=new NavigationBudget(()=>0,3,10,2);
  assert.equal(nodes.node(),true);assert.equal(nodes.node(),true);assert.equal(nodes.node(),false);
  let now=0;const timed=new NavigationBudget(()=>now);
  assert.equal(timed.check(),true);now=3;assert.equal(timed.check(),false);
  let work=0;
  function* task():Generator<NavigationStep,{x:number;y:number;z:number}[]>{
    for(let i=0;i<9;i++){yield 'sample';work++;}
    return [{x:1,y:0,z:1}];
  }
  const search=new NavigationSearch(task());
  assert.equal(search.advance(new NavigationBudget(()=>0,3,4,2)),undefined);assert.equal(work,4);
  assert.equal(search.advance(new NavigationBudget(()=>0,3,4,2)),undefined);assert.equal(work,8);
  assert.deepEqual(search.advance(new NavigationBudget(()=>0,3,4,2)),[{x:1,y:0,z:1}]);assert.equal(work,9);
});

test('resumed graph search matches an uninterrupted search; invalid coordinates terminate safely',()=>{
  navigationGraph();navigationGraph(true);
  const from={x:12,y:0,z:8},to={x:12,y:-6,z:18};
  const walk:NavigationWalk=function*(a,b){yield 'sample';return Math.hypot(a.x-b.x,a.z-b.z)<40;};
  const search=new NavigationSearch(navigationSteps(from,to,walk,true,true));
  let result;
  for(let i=0;i<200&&result===undefined;i++)result=search.advance(new NavigationBudget(()=>0,3,8,4));
  assert.ok(result&&result.length);
  const uninterrupted=new NavigationSearch(navigationSteps(from,to,walk,true,true)).advance();
  assert.deepEqual(result,uninterrupted);
  assert.deepEqual(navigationPath({...from,x:Infinity},to),[]);
  assert.deepEqual(navigationPath(from,{...to,y:NaN}),[]);
});

test('a stationary grown Warden clears overlapping city and lab slabs without destroying protected structures',()=>{
  for(const location of [{x:-65,z:45},{x:58,z:104}])for(const scale of [2,4,8,20]){
    const {round,boss,owner}=fixture(location.x,location.z,scale);
    stepWarden(round,at,dt,0,[owner]);
    const remaining=ARENA_BOXES.filter(box=>box.breakKey&&intactBox(box,round.destroyed)&&box.maxY>.125&&
      box.minY<.1+VOID_WARDEN.height*scale&&overlapsBox(boss.x,boss.z,box,VOID_WARDEN.radius*scale));
    assert.equal(remaining.length,0);
    assert.ok(round.destroyed.size>0);
    assert.ok([...round.destroyed].every(key=>ARENA_BOXES.some(box=>box.breakKey===key)));
    assert.ok(Number.isFinite(boss.x)&&Number.isFinite(boss.z));
  }
});

test('growth during an attack clears the current body even when attack reach was locked at a smaller scale',()=>{
  const {round,boss,owner}=fixture(-65,45,2);
  stepWarden(round,at,dt,0,[owner]);
  const removed=round.destroyed.size;
  Object.assign(boss,{scale:3,state:'ATTACK',attack:{kind:'slash',scale:2,startedAt:at,rate:1,from:{x:boss.x,y:boss.y,z:boss.z},to:{x:boss.x,y:boss.y,z:boss.z},yaw:0,jumpHeight:0}});
  stepWarden(round,at+17,dt,0,[owner]);
  assert.ok(round.destroyed.size>removed,'newly overlapping upper slabs are removed');
  assert.equal(boss.attack?.scale,2,'the existing attack damage reach stays locked');
});

test('cyclic graph edges and invalid nodes cannot make graph search loop forever',()=>{
  const graph=navigationGraph(true),original=graph.slice();
  const a={x:0,y:0,z:0,edges:[0,1,1,99]},b={x:8,y:0,z:0,edges:[0,2]},invalid={x:NaN,y:0,z:0,edges:[0]},goal={x:16,y:0,z:0,edges:[]};
  graph.splice(0,graph.length,a,b,invalid,goal);
  try{
    const budget=new NavigationBudget(()=>0),from={x:-1,y:0,z:0},to={x:17,y:0,z:0};
    const result=navigationPath(from,to,(start,end)=>start===from?end===a:start===to?end===goal:start===a?end===b:start===b?end===a:false,false,true,budget);
    assert.deepEqual(result,[]);assert.equal(budget.stats.nodes,2);
  }finally{graph.splice(0,graph.length,...original);}
});

test('building searches stay bounded and wait between attempts with eight nearby ground and roof players',()=>{
  navigationGraph();navigationGraph(true);
  for(const spot of [{x:-77.5,z:45},{x:58,z:90}])for(const scale of [2,4,8,20]){
    const {round,boss}=fixture(spot.x,spot.z,scale);
    const players=Array.from({length:8},(_,i)=>({id:i?'enemy'+i:'owner',socketId:'s'+i,alive:true,
      x:spot.x+(i%3-1)*4,y:i>3?7.65:1.65,z:spot.z+(i<4?4:12)}));
    let previousSearch=-Infinity,previousKey='';
    for(let tick=0;tick<180;tick++){
      const time=at+tick*1000/60;stepWarden(round,time,dt,0,players);
      const stats=round.searchStats!;
      assert.ok(stats.samples<=2048);assert.ok(stats.nodes<=512);assert.ok(stats.routes<=1);
      if(stats.routes){
        const key=`${round.searchRetryTarget}:${round.searchScale}`;
        if(previousKey===key)assert.ok(time-previousSearch>=620-1e-6,'same task does not retry every tick');
        previousSearch=time;previousKey=key;
      }
      assert.ok(Number.isFinite(boss.x)&&Number.isFinite(boss.y)&&Number.isFinite(boss.z));
    }
  }
});

test('bridge growth waits nearby instead of walking around the city, and resumes when the owner leaves',()=>{
  const {round,boss,owner}=fixture(10,36,2);
  let walked=0,last={x:boss.x,z:boss.z};
  for(let tick=0;tick<1200;tick++){
    stepWarden(round,at+tick*1000/60,dt,0,[owner]);
    walked+=Math.hypot(boss.x-last.x,boss.z-last.z);last={x:boss.x,z:boss.z};
  }
  assert.ok(walked<12,`nearby owner should not require a city detour (${walked}m)`);
  const previous={x:boss.x,z:boss.z};owner.z=50;
  for(let tick=1200;tick<1380;tick++)stepWarden(round,at+tick*1000/60,dt,0,[owner]);
  assert.ok(Math.hypot(boss.x-previous.x,boss.z-previous.z)>1);
});

function event<T>(socket:Socket,name:string,accept:(value:T)=>boolean=()=>true):Promise<T>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},5000);
    function receive(value:T){if(accept(value)){clearTimeout(timer);socket.off(name,receive);resolve(value);}}
    socket.on(name,receive);
  });
}

test('two clients can move, fire and switch weapons beside an eightfold Warden while snapshots keep arriving',async()=>{
  const server=createGameServer({wardenSpawnDelayMs:0});
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const clients=Array.from({length:2},()=>connect(`http://127.0.0.1:${address.port}`,{transports:['websocket'],forceNew:true,autoConnect:false}));
  type Snapshot={roundId:number;tick:number;players:{id:string;ack:number;activeWeapon:string;x:number;weapons:{ar:{ammo:number};smg:{ammo:number}}}[]};
  try{
    await Promise.all(clients.map(socket=>{const ready=event(socket,'connect');socket.connect();return ready;}));
    const host=await clients[0].emitWithAck('room:create','Building Host');
    const guest=await clients[1].emitWithAck('room:join',{code:host.code,name:'Building Guest'});
    const first=event<Snapshot>(clients[0],'match:snapshot');await clients[0].emitWithAck('game:start');await first;
    const room=server.rooms.get(host.code)!;
    room.pickups=[];
    const ids=[host.playerId,guest.playerId];
    for(const [i,id] of ids.entries()){
      const p=room.players.get(id)!;
      Object.assign(p,{x:-94-i*3,y:1.65,z:49+i*4,hp:1e9,protectUntil:0});
      p.ownedWeapons.push('smg');
    }
    const base=room.players.get(guest.playerId)!;
    for(let i=2;i<8;i++){
      const p=structuredClone({...base,movement:undefined});p.movement=new MovementQueue();Object.assign(p,{id:`enemy${i}`,socketId:`fixture${i}`,x:-77.5+(i%3-1)*4,y:i>3?7.65:1.65,z:45+(i<4?4:12)});
      room.players.set(p.id,p);
    }
    const round=room.warden!;
    Object.assign(round.boss!,{x:-77.5,y:0,z:45,scale:8,kills:12,ownerId:host.playerId,state:'FOLLOW',stateAt:Date.now(),attack:null});
    round.route=[];round.repathAt=0;
    const initial=ids.map(id=>room.players.get(id)!.x);
    const ammo=ids.map(id=>({ar:room.players.get(id)!.weapons.ar.ammo,smg:room.players.get(id)!.weapons.smg.ammo}));
    const arrivals:number[][]=[[],[]];
    clients.forEach((socket,i)=>socket.on('match:snapshot',()=>arrivals[i].push(performance.now())));
    for(let iteration=1;iteration<=8;iteration++){
      const weapon=iteration%2?'smg':'ar';
      await Promise.all(clients.map(async(socket,i)=>{
        const ack=event<Snapshot>(socket,'match:snapshot',s=>s.players.some(p=>p.id===ids[i]&&p.ack===iteration&&p.activeWeapon===weapon));
        const shot=event<{id:string;weapon:string}>(socket,'match:shot',s=>s.id===ids[i]&&s.weapon===weapon);
        socket.emit('match:input',{roundId:room.roundId,seq:iteration,clientTime:Date.now(),moveX:-1,moveY:0,yaw:0,pitch:0,sprint:true});
        socket.emit('match:weapon',{roundId:room.roundId,id:weapon});
        socket.emit('match:fire',{roundId:room.roundId,seq:iteration});
        await Promise.all([ack,shot]);
      }));
      await new Promise(resolve=>setTimeout(resolve,120));
    }
    for(const [i,id] of ids.entries()){
      const p=room.players.get(id)!;
      assert.ok(p.x<initial[i]-.9,'authoritative movement continues away from the building');
      assert.equal(p.weapons.ar.ammo,ammo[i].ar-4);assert.equal(p.weapons.smg.ammo,ammo[i].smg-4);
      assert.ok(arrivals[i].length>=12);
      for(let j=1;j<arrivals[i].length;j++)assert.ok(arrivals[i][j]-arrivals[i][j-1]<500,'snapshots do not stall for seconds');
    }
  }finally{clients.forEach(socket=>socket.disconnect());server.close();}
});
