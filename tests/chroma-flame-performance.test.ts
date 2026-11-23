import test from 'node:test';
import assert from 'node:assert/strict';
import { ARENA_BOXES, arenaWorld, staticArenaWorld, arenaRayCandidates, rayBoxDistance, rayWallDistance, type SimWorld } from '../shared/arena.ts';
import { resolveShot, traceRay, normalize, type Vec3, type Combatant } from '../shared/combat.ts';
import { queryAim } from '../shared/aim.ts';
import { DamageTimeline } from '../shared/damageTimeline.ts';
import type { DamageEvent } from '../shared/protocol.ts';
import { applyWardenDamage, beginRound } from '../server/src/index.ts';
import { KillTracker } from '../shared/combat.ts';
import { createWardenRound, stepWarden } from '../server/src/voidWarden.ts';

const brute=(world:SimWorld):SimWorld=>({boxes:world.boxes.slice(),heightAt:world.heightAt});
const point=(p:Vec3)=>({x:p[0],y:p[1],z:p[2]});
const destroyed=new Set(ARENA_BOXES.filter(b=>b.breakKey?.startsWith('cover:0:')).map(b=>b.breakKey!));

test('grid queries match full scans at boundaries, corners, parallel/vertical rays, outside the map and inside solids',()=>{
  const origins:Vec3[]=[[0,1.65,-3],[16,0,16],[-16,1.65,-16],[-160,0,-144],[160,20,144],[-1000,4,0],[68,7.65,28],[12,2,8],[0,-4.35,18]];
  const directions:Vec3[]=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,1],[-1,.1,-1],[1e-12,1,0]];
  for(const time of [0,8,16])for(const removed of [undefined,destroyed]){
    const world=arenaWorld(time,removed),reference=brute(world);
    for(const origin of origins)for(const raw of directions){
      const dir=normalize(raw);
      for(const max of [0,25,560])assert.equal(rayWallDistance(point(origin),point(dir),max,world),rayWallDistance(point(origin),point(dir),max,reference),JSON.stringify({time,origin,dir,max}));
    }
  }
});

test('seeded rays including grazing cell entries retain exact full-scan distances',()=>{
  let seed=0x1893ab;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
  for(let n=0;n<700;n++){
    const world=arenaWorld(random()*28,n%2?destroyed:undefined),reference=brute(world);
    const origin={x:random()*640-320,y:random()*36-7,z:random()*600-300};
    const dir=point(normalize([random()*2-1,random()*.8-.4,random()*2-1]));
    const max=random()*560;
    assert.equal(rayWallDistance(origin,dir,max,world),rayWallDistance(origin,dir,max,reference),JSON.stringify({origin,dir,max}));
  }
});

test('flame rays, cone damage, aim preview and wall ties remain identical for every Warden scale',()=>{
  const origin:Vec3=[12,1.65,-10],dir:Vec3=[0,0,1];
  for(const scale of [1,4,8,20])for(const time of [0,8])for(const removed of [undefined,destroyed]){
    const targets:Combatant[]=[{id:'boss',kind:'warden',scale,x:12,y:1.65,z:8,yaw:.3,alive:true},
      {id:'peer',x:13,y:1.65,z:4,yaw:0,alive:true}];
    const world=arenaWorld(time,removed),reference=brute(world);
    for(const weapon of ['flame','ar','rocket','sniper'] as const){
      assert.deepEqual(resolveShot(weapon,origin,dir,targets,()=>.5,world),resolveShot(weapon,origin,dir,targets,()=>.5,reference));
      assert.equal(queryAim(weapon,origin,dir,targets,world),queryAim(weapon,origin,dir,targets,reference));
    }
    assert.equal(resolveShot('flame',origin,dir,targets,()=>.5,world).rays.length,25);
  }
  // A target placed exactly at the wall distance must not win the strict tie.
  const world=arenaWorld(0),reference=brute(world),targets:Combatant[]=[{id:'tie',x:0,y:1.65,z:-6.63,yaw:0,alive:true,kind:'warden',scale:1}];
  assert.deepEqual(traceRay([0,1,-10],[0,0,1],25,targets,world),traceRay([0,1,-10],[0,0,1],25,targets,reference));
});

test('candidate work stays local; custom worlds keep full-scan semantics and old worlds keep their platform/terrain versions',()=>{
  const candidates=arenaRayCandidates({x:12,y:1.65,z:-10},{x:0,y:0,z:1},25);
  assert.ok(candidates.length<ARENA_BOXES.length/5);
  assert.equal(new Set(candidates).size,candidates.length);
  const custom:SimWorld={boxes:[{minX:0,maxX:1,minY:0,maxY:3,minZ:0,maxZ:1,color:0}],heightAt:()=>-100};
  assert.equal(rayWallDistance({x:-1,y:1,z:.5},{x:1,y:0,z:0},5,custom),1);
  const intact=staticArenaWorld(),removed=staticArenaWorld(destroyed),origin={x:0,y:5,z:-3},dir={x:0,y:-1,z:0};
  const before=rayWallDistance(origin,dir,10,intact);assert.equal(before,2);
  assert.ok(rayWallDistance(origin,dir,10,removed)>before);
  assert.equal(rayWallDistance(origin,dir,10,intact),before);
  const past=arenaWorld(8),future=arenaWorld(16),liftOrigin={x:68,y:20,z:28};
  const pastDistance=rayWallDistance(liftOrigin,dir,25,past);
  assert.notEqual(pastDistance,rayWallDistance(liftOrigin,dir,25,future));
  assert.equal(rayWallDistance(liftOrigin,dir,25,past),pastDistance);
});

const damage=(hp:number,life=1,serverTime=100):DamageEvent=>({roundId:1,life,serverTime,hp,damage:20,name:'Warden',from:{x:0,z:0}});
test('fatal damage remains terminal through stale/alive snapshots and cannot leak into a respawn',()=>{
  const timeline=new DamageTimeline();
  assert.equal(timeline.accept(damage(70),1),true);
  assert.equal(timeline.reconcile({life:1,hp:100,alive:true},90).hp,70);
  assert.equal(timeline.accept(damage(90,1,99),1),false);
  assert.equal(timeline.accept(damage(0,1,101),1),true);
  assert.deepEqual(timeline.reconcile({life:1,hp:100,alive:true},1000),{life:1,hp:0,alive:false});
  assert.equal(timeline.accept(damage(40,1,102),1),false);
  assert.deepEqual(timeline.reconcile({life:2,hp:100,alive:true},1100),{life:2,hp:100,alive:true});
  assert.equal(timeline.accept(damage(0,1,1200),2),false);
  assert.equal(timeline.accept(damage(80,2,1201),2),true);
  const legacy={...damage(0)};delete legacy.life;delete legacy.serverTime;
  assert.equal(timeline.accept(legacy,2),true);
});

test('Warden damage sends life and server time before the death room state',()=>{
  const events:{name:string;payload:any}[]=[];
  const io={to:()=>({emit:(name:string,payload:unknown)=>events.push({name,payload})})} as unknown as Parameters<typeof beginRound>[0];
  const room={environmentTime:0,code:'FLAME',host:'a',roundId:0,state:'LOBBY',players:new Map(['a','b'].map(id=>[id,{id,name:id,socketId:id,weapons:{}}])),
    respawnTimers:new Map(),reconnectTimers:new Map(),killTracker:new KillTracker('flame'),shotSequence:0} as unknown as Parameters<typeof beginRound>[1];
  beginRound(io,room);room.warden=createWardenRound(Date.now(),0);stepWarden(room.warden,Date.now(),1/60,0,[]);
  room.warden.boss!.state='PATROL';const victim=room.players.get('a')!;victim.protectUntil=0;victim.hp=20;events.length=0;
  try{
    applyWardenDamage(io,room,victim,22,{x:12,y:0,z:8},'slash');
    const index=events.findIndex(event=>event.name==='match:damage');assert.ok(index>=0);
    assert.equal(events[index].payload.life,victim.life);assert.equal(events[index].payload.hp,0);
    assert.ok(Math.abs(events[index].payload.serverTime-Date.now())<100);
    assert.ok(events.findIndex(event=>event.name==='room:state')>index);
  }finally{for(const timer of room.respawnTimers.values())clearTimeout(timer);}
});

 test('unrolled slab intersections exactly match the original axis loop',()=>{
  const reference=(origin:any,direction:any,box:any,max:number)=>{let near=0,far=max;
    for(const axis of ['X','Y','Z']){const key=axis.toLowerCase(),d=direction[key],o=origin[key];
      if(Math.abs(d)<1e-9){if(o<box['min'+axis]||o>box['max'+axis])return null;continue;}
      const a=(box['min'+axis]-o)/d,b=(box['max'+axis]-o)/d;near=Math.max(near,Math.min(a,b));far=Math.min(far,Math.max(a,b));if(near>far)return null;
    }return near<=max?near:null;
  };
  let seed=413;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
  for(let i=0;i<5000;i++){const box=ARENA_BOXES[Math.floor(random()*ARENA_BOXES.length)];
    const origin={x:random()*320-160,y:random()*28-6,z:random()*300-150};
    const direction={x:i%3?random()*2-1:0,y:i%5?random()*2-1:1e-12,z:i%7?random()*2-1:0},max=random()*560;
    assert.equal(rayBoxDistance(origin,direction,box,max),reference(origin,direction,box,max));
  }
});
