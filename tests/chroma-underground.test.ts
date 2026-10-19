import test from 'node:test';
import assert from 'node:assert/strict';
import { stepPlayer, arenaWorld, terrainHeight, rayWallDistance, type SimPlayer, ARENA_BOXES } from '../shared/arena.ts';
import { MALL_ENTRIES, MALL_SHOPS, MALL_PICKUP_POINTS, ENTRY_HOLES, cutEntrances } from '../shared/underground.ts';
import { navigationPath } from '../shared/navigation.ts';
import { BotAI } from '../src/chroma-ops/enemies/BotAI.ts';
import { Player } from '../src/chroma-ops/player/Player.ts';
import { CollisionSystem } from '../src/chroma-ops/systems/CollisionSystem.ts';
import * as T from 'three';
import { resolveShot } from '../shared/combat.ts';
import { SAFE_SPAWNS } from '../shared/spawns.ts';
import { GROUND_SURFACES, groundCoversBoxTop } from '../src/chroma-ops/world/GroundSurfaces.ts';
const idle={moveX:0,moveY:0,lookX:0,lookY:0,jump:false};
const player=(x:number,z:number,feet=0):SimPlayer=>({x,y:feet+1.65,z,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true});
const near=(a:number,b:number)=>assert.ok(Math.abs(a-b)<.05,`${a} != ${b}`);
function travel(p:SimPlayer,x:number,z:number,dt=1/60){
  for(let n=0;n<2000;n++){
    const dx=x-p.x,dz=z-p.z;if(Math.hypot(dx,dz)<.2)return;
    stepPlayer(p,{...idle,moveX:dx,moveY:-dz,sprint:true},Math.min(dt,Math.hypot(dx,dz)/19.5),undefined,1,n*dt);
  }
  assert.fail(`blocked en route to ${x},${z}: ${JSON.stringify(p)}`);
}
for(const e of MALL_ENTRIES)test(`${e.name} B1 entrance supports sprinting down and back up at low FPS`,()=>{
  const sign=Math.sign(e.outer-e.inner);
  const p=e.axis==='z'?player(0,e.outer+sign*2):player(e.outer+sign*2,9);
  const x=e.axis==='z'?0:e.inner-sign*2,z=e.axis==='z'?e.inner-sign*2:9;
  travel(p,x,z,.1);near(p.y,-4.35);
  travel(p,e.axis==='z'?0:e.outer+sign*2,e.axis==='z'?e.outer+sign*2:9,.1);near(p.y,1.65);
});
test('B1 ring, central hall and every shop have walkable entrances',()=>{
  const p=player(0,-14,-6);
  for(const [x,z] of [[-64,-14],[-64,18],[64,18],[64,-14],[0,-14],[0,18]])travel(p,x,z);
  for(const s of MALL_SHOPS){const q=player(s.x,18,-6);travel(q,s.x,5);near(q.y,-4.35);travel(q,s.x,18);}
});
test('ground and basement players share XZ without snapping between floors; ceiling stops jumps',()=>{
  const top=player(10,10),bottom=player(10,10,-6);
  for(let n=0;n<60;n++){stepPlayer(top,idle,.05);stepPlayer(bottom,idle,.05);}
  near(top.y,1.65);near(bottom.y,-4.35);
  stepPlayer(bottom,{...idle,jump:true},.2);stepPlayer(bottom,{...idle,jump:true},.2);
  for(let n=0;n<60;n++){stepPlayer(bottom,idle,.05);assert.ok(bottom.y+ .15<=-.35+.01);}
  near(bottom.y,-4.35);assert.equal(bottom.jumpsUsed,0);
  const counter=player(-51.5,2,-5);
  stepPlayer(counter,{...idle,jump:true},.2);stepPlayer(counter,{...idle,jump:true},.2);
  let bumped=false;
  for(let n=0;n<80;n++){
    stepPlayer(counter,idle,.025);assert.ok(counter.y+.15<=-.35+.001);
    if(counter.y> -1&&counter.velocityY===0)bumped=true;
  }
  assert.ok(bumped,'double jump from the shop counter must hit the ceiling');near(counter.y,-3.35);
});
test('floor slab blocks shots in both directions; entry aperture and B1 corridor pass rays',()=>{
  assert.ok(rayWallDistance({x:10,y:-4.35,z:10},{x:0,y:1,z:0},10)<5);
  assert.ok(rayWallDistance({x:10,y:1.65,z:10},{x:0,y:-1,z:0},10)<2);
  assert.equal(rayWallDistance({x:-60,y:-4.35,z:18},{x:1,y:0,z:0},120),120);
  assert.equal(rayWallDistance({x:0,y:1.65,z:-47},{x:0,y:-.25,z:1},20),20);
  for(const b of cutEntrances({minX:-154,maxX:154,minZ:-140,maxZ:140}))for(const h of ENTRY_HOLES)
    assert.ok(Math.min(b.maxX,h.maxX)<=Math.max(b.minX,h.minX)||Math.min(b.maxZ,h.maxZ)<=Math.max(b.minZ,h.minZ));
});

test('AI navigation connects every surface entry to B1 and back through real collision',()=>{
  for(const e of MALL_ENTRIES){
    const sign=Math.sign(e.outer-e.inner),from=e.axis==='z'?{x:0,y:0,z:e.outer+sign*2}:{x:e.outer+sign*2,y:0,z:9},to={x:0,y:-6,z:18};
    assert.ok(navigationPath(from,to).length>0,`${e.name} is not connected`);
    const ai=new BotAI(),target=new Player(),collision=new CollisionSystem(ARENA_BOXES,terrainHeight);
    const bot={id:e.name,alive:true,cooldown:1,position:new T.Vector3(from.x,0,from.z),group:new T.Group()};
    target.position.set(to.x,to.y+1.65,to.z);
    const chase=(destination:{x:number;y:number;z:number})=>{
      target.position.set(destination.x,destination.y+1.65,destination.z);
      for(let n=0;n<4200;n++){
        ai.update(bot as any,target,1/30,collision,[],false,()=>{});
        if(bot.position.distanceTo(new T.Vector3(destination.x,destination.y,destination.z))<.5)return;
      }
      assert.fail(`${e.name} AI failed to reach ${JSON.stringify(destination)} from ${JSON.stringify(bot.position)}`);
    };
    chase(to);chase(from);
  }
});

test('surface spawn routes reach the basement and combat never passes through floor slabs',()=>{
  for(const [x,z] of SAFE_SPAWNS)assert.ok(navigationPath({x,y:0,z},{x:0,y:-6,z:18}).length,`isolated spawn ${x},${z}`);
  const top={id:'above',x:10,y:1.65,z:10,yaw:0,alive:true};
  for(const weapon of ['ar','flame','rocket'] as const){
    assert.equal(resolveShot(weapon,[10,-4.35,10],[0,1,0],[top],()=>.5).hits.length,0);
  }
  const target={...top,id:'below',y:-4.35,z:18,x:20};
  assert.equal(resolveShot('ar',[10,-4.35,18],[1,0,0],[target],()=>.5).hits[0]?.targetId,'below');
});

test('spatially filtered simulation matches the full world at floor edges and low frame rates',()=>{
  let seed=42;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
  const world={boxes:[...ARENA_BOXES],heightAt:terrainHeight};
  for(let n=0;n<200;n++){
    const x=-145+random()*290,z=-125+random()*250,feet=n%3===0?-6:n%3===1?0:12;
    const indexed=player(x,z,feet),full={...indexed};
    const input={...idle,moveX:random()-.5,moveY:random()-.5,sprint:true,jump:n%4===0};
    stepPlayer(indexed,input,.25,undefined,1,n/3);stepPlayer(full,input,.25,world,1,n/3);
    assert.deepEqual(indexed,full);
  }
});

test('ground paint has exactly one visible surface at intersections and above B1, with entrances open',()=>{
  const overlap=(a:{minX:number;maxX:number;minZ:number;maxZ:number},b:typeof a)=>
    Math.max(0,Math.min(a.maxX,b.maxX)-Math.max(a.minX,b.minX))*Math.max(0,Math.min(a.maxZ,b.maxZ)-Math.max(a.minZ,b.minZ));
  let area=0;
  for(let i=0;i<GROUND_SURFACES.length;i++){
    const a=GROUND_SURFACES[i];assert.equal(a.maxY,0);
    area+=(a.maxX-a.minX)*(a.maxZ-a.minZ);
    for(const b of GROUND_SURFACES.slice(i+1))assert.equal(overlap(a,b),0,'coplanar road / ground faces overlap');
    for(const h of ENTRY_HOLES)assert.equal(overlap(a,h),0,'paint seals a basement entrance');
  }
  near(area,308*280-4*6*24);
  const roof=ARENA_BOXES.find(b=>b.minX===-90&&b.maxX===90&&b.maxY===0)!;
  assert.equal(groundCoversBoxTop(roof),true,'B1 roof must not draw a second ground-facing cap');
  const stair=ARENA_BOXES.find(b=>b.minX===113&&b.maxX===114&&b.maxY===0)!;
  assert.equal(groundCoversBoxTop(stair),false,'the first basement stair remains visible inside its opening');
});
