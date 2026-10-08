import test from 'node:test';
import assert from 'node:assert/strict';
import { ARENA_BOXES, groundHeight, blocked, pointBlocked, rayWallDistance, stepPlayer, type SimPlayer, type SimInput } from '../shared/arena.ts';
import { SAFE_SPAWNS, chooseRespawnPoint, chooseWeaponPoint } from '../shared/spawns.ts';
import { Player } from '../src/chroma-ops/player/Player.ts';
import { PlayerController } from '../src/chroma-ops/player/PlayerController.ts';
import { CollisionSystem } from '../src/chroma-ops/systems/CollisionSystem.ts';
import { SpawnSystem } from '../src/chroma-ops/systems/SpawnSystem.ts';
import * as THREE from 'three';

const idle:SimInput={moveX:0,moveY:0,lookX:0,lookY:0,jump:false};
const player=(x=15,z=0,y=1.65):SimPlayer=>({x,y,z,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true});
const step=(p:SimPlayer,seconds:number,input:Partial<SimInput>={})=>{
  for(let n=0;n<Math.round(seconds*120);n++)stepPlayer(p,{...idle,...input},1/120);
};

test('two jump presses, no third jump, landing restores budget',()=>{
  const p=player();stepPlayer(p,{...idle,jump:true},1/120);assert.equal(p.jumpsUsed,1);
  step(p,.475);stepPlayer(p,{...idle,jump:true},1/120);assert.equal(p.jumpsUsed,2);
  const vy=p.velocityY;stepPlayer(p,{...idle,jump:true},1/120);assert(p.velocityY<vy,'third press does not reset velocity');
  let apex=p.y;for(let n=0;n<120;n++){stepPlayer(p,idle,1/120);apex=Math.max(apex,p.y);}
  assert(apex>5.1&&apex<=5.151,'near-apex second jump reaches about 3.5m above floor');
  step(p,1);assert.equal(p.y,1.65);assert.equal(p.jumpsUsed,0);
});

test('walking off cover consumes ground jump and retains only one air jump',()=>{
  const p=player(0,-3,4.65);step(p,.6,{moveX:1});assert(p.x>3.42);assert.equal(p.jumpsUsed,1);
  stepPlayer(p,{...idle,jump:true},1/120);assert.equal(p.jumpsUsed,2);
});

for(const [label,startX,z,height,targetX] of [['2m cover',-28,13,2,-22],['central 3m box',-5,-3,3,0]] as const){
  test(`double jump climbs and lands on ${label}`,()=>{
    const p=player(startX,z);step(p,.25,{moveX:1});
    assert(p.x<targetX-(height===3?3:4)-.40,'walking is blocked by the side');
    stepPlayer(p,{...idle,jump:true},1/120);step(p,.475);stepPlayer(p,{...idle,jump:true},1/120);
    for(let n=0;n<90;n++)stepPlayer(p,{...idle,moveX:p.x<targetX?1:0},1/120);
    step(p,.75);assert(Math.abs(p.x-targetX)<.07);assert.equal(p.y,height+1.65);assert.equal(p.jumpsUsed,0);
    stepPlayer(p,{...idle,jump:true},1/120);assert.equal(p.jumpsUsed,1);assert(p.y>height+1.65);
  });
}

test('double jump cannot climb a 4m wall; movement cannot tunnel at low frame rates',()=>{
  const p=player(-40,-11);stepPlayer(p,{...idle,jump:true},1/120);step(p,.475);stepPlayer(p,{...idle,jump:true},1/120);
  step(p,1,{moveY:-1});assert(p.z<-9.40);step(p,1);assert.equal(p.y,1.65);
  const q=player(-40,-11);stepPlayer(q,{...idle,moveY:-1},.25);assert(q.z<-9.40);
});

test('existing ramps remain walkable and raised platform sides do not teleport players',()=>{
  const p=player(-20,39);step(p,4,{moveY:-1});assert(p.z>52);assert.equal(p.y,13.65);
  const q=player(-39,104);step(q,9,{moveX:1});assert(q.x>-12);assert.equal(q.y,7.65);
  const r=player(24,60);step(r,1,{moveX:-1});assert(r.x>=22);assert.equal(r.y,1.65);
});

test('shared heights block rays through tall walls but allow shooting over low cover',()=>{
  assert(pointBlocked(-40,3.5,-8));assert(!pointBlocked(-22,2.5,13));
  assert(rayWallDistance({x:-40,y:3.5,z:-11},{x:0,y:0,z:1},6)<3);
  assert.equal(rayWallDistance({x:-28,y:2.5,z:13},{x:1,y:0,z:0},12),12);
  assert(!blocked(-65,45),'building interior is not blocked by the overhead roof');
});

test('single-player adapter and shared multiplayer physics yield identical states',()=>{
  const p=new Player();p.position.set(15,1.65,0);
  const state=player();const controller=new PlayerController();const collision=new CollisionSystem(ARENA_BOXES,groundHeight);
  for(let n=0;n<180;n++){
    const input={...idle,moveX:.2,lookX:n===0?100:0,lookY:n===0?50:0,jump:n===0||n===60,shoot:false,reload:false,switchWeapon:0};
    controller.update(p,input,1/120,collision);stepPlayer(state,input,1/120);
    assert.deepEqual([p.position.x,p.position.y,p.position.z,p.velocityY,p.jumpsUsed],[state.x,state.y,state.z,state.velocityY,state.jumpsUsed]);
  }
  p.jumpsUsed=2;p.respawn([15,0]);assert.equal(p.jumpsUsed,0);assert.equal(p.velocityY,0);
});

test('all spawn candidates are legal ground positions',()=>{
  assert.equal(SAFE_SPAWNS.length,20);
  for(const [x,z] of SAFE_SPAWNS){assert(!blocked(x,z,.75));assert.equal(groundHeight(x,z),0);}
});

test('respawns are random within safe candidates and do not repeat each character last point',()=>{
  const previous=SAFE_SPAWNS[0];const enemy={x:SAFE_SPAWNS[1][0],z:SAFE_SPAWNS[1][1],alive:true};
  const seen=new Set();for(let n=0;n<2000;n++){
    const point=chooseRespawnPoint([enemy],previous,()=>n/2000);assert.notDeepEqual(point,previous);
    assert(Math.hypot(point[0]-enemy.x,point[1]-enemy.z)>=20);seen.add(point.join(','));
  }
  assert(seen.size>10);
  const points: [number,number][]=[[0,0],[1,0],[2,0],[3,0],[4,0]];
  assert.deepEqual(chooseRespawnPoint([{x:0,z:0}],undefined,()=>0,points),[4,0]);
  assert.deepEqual(chooseRespawnPoint([{x:0,z:0}],undefined,()=>.99,points),[2,0]);
});

test('weapons avoid players, available pickups and previous point; saturation returns no unsafe point',()=>{
  const occupied=SAFE_SPAWNS.slice(0,9).map(([x,z])=>({x,z,alive:true}));
  const pickups=SAFE_SPAWNS.slice(9,13).map(([x,z])=>({x,z}));const previous=SAFE_SPAWNS[13];
  const seen=new Set();for(let n=0;n<2000;n++){
    const point=chooseWeaponPoint(occupied,pickups,previous,()=>n/2000);assert(point);assert.notDeepEqual(point,previous);
    for(const other of [...occupied,...pickups])assert(Math.hypot(point[0]-other.x,point[1]-other.z)>=8);
    assert(SAFE_SPAWNS.some(candidate=>candidate[0]===point[0]&&candidate[1]===point[1]));seen.add(point.join(','));
  }
  assert(seen.size>=5);
  assert.equal(chooseWeaponPoint(SAFE_SPAWNS.map(([x,z])=>({x,z})),[]),null);
});

test('single-player spawn history is stored per character',()=>{
  const spawns=new SpawnSystem(SAFE_SPAWNS);
  const enemy={position:new THREE.Vector3(...[SAFE_SPAWNS[0][0],0,SAFE_SPAWNS[0][1]]),alive:true};
  const last=new Map<string,[number,number]>();
  for(let n=0;n<200;n++)for(const id of ['player','bot1','bot2']){
    const point=spawns.choose([enemy],id);assert.notDeepEqual(point,last.get(id));last.set(id,point);
  }
});
