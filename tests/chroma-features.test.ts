import test from 'node:test';
import assert from 'node:assert/strict';
import { stepPlayer, arenaWorld, rayWallDistance, type SimPlayer, type SimWorld, ARENA_BOXES, groundHeight, PLAYER_MOVE_SPEED, SPRINT_MULTIPLIER } from '../shared/arena.ts';
import { cabinPosition, supportingCabin } from '../shared/ferrisWheel.ts';
import { resolveShot, damageAtDistance } from '../shared/combat.ts';
import { WEAPON_IDS, WEAPON_SPECS } from '../shared/weapons.ts';
import { InputManager } from '../src/chroma-ops/input/InputManager.ts';
import { Weapon } from '../src/chroma-ops/weapons/Weapon.ts';
import { Player } from '../src/chroma-ops/player/Player.ts';
import { PlayerController } from '../src/chroma-ops/player/PlayerController.ts';
import { CollisionSystem } from '../src/chroma-ops/systems/CollisionSystem.ts';

const idle={moveX:0,moveY:0,lookX:0,lookY:0,jump:false};
const empty:SimWorld={boxes:[],heightAt:()=>0};
const player=(x=0,y=1.85,z=-90):SimPlayer=>({x,y,z,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true});
const near=(a:number,b:number,tolerance=1e-6)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);

test('passenger rides a full revolution without slipping or consuming jumps',()=>{
  const p=player();
  for(let n=0;n<3600;n++) {
    stepPlayer(p,idle,1/60,undefined,1,n/60);
    const cabin=cabinPosition(0,(n+1)/60);
    near(p.x,cabin.x);near(p.y,cabin.y+1.65);near(p.z,cabin.z);
    assert.equal(p.supportId,0);assert.equal(p.jumpsUsed,0);
  }
});

test('jumping detaches from a cabin, allows one air jump, and then lands',()=>{
  const p=player();
  stepPlayer(p,{...idle,jump:true},1/60,undefined,1,0);
  assert.equal(p.supportId,null);assert.equal(p.jumpsUsed,1);
  const x=p.x;
  for(let n=1;n<20;n++)stepPlayer(p,{...idle,moveY:-1},1/60,undefined,1,n/60);
  near(p.x,x);
  stepPlayer(p,{...idle,jump:true},1/60,undefined,1,20/60);
  assert.equal(p.jumpsUsed,2);
  for(let n=21;n<240;n++)stepPlayer(p,idle,1/60,undefined,1,n/60);
  near(p.y,1.65);assert.equal(p.jumpsUsed,0);
});

test('walk through the open cabin entrance, then walk off and fall normally',()=>{
  const p=player(0,1.65,-87.5);
  for(let n=0;n<15;n++)stepPlayer(p,{...idle,moveY:1},1/120,undefined,1,n/120);
  assert.equal(p.supportId,0);
  for(let n=15;n<80;n++)stepPlayer(p,{...idle,moveY:-1},1/120,undefined,1,n/120);
  assert.equal(p.supportId,null);assert.equal(p.jumpsUsed,0);near(p.y,1.65);
});

test('cabin rails stop sprinting and cannot be tunneled at low frame rates',()=>{
  const p=player();stepPlayer(p,{...idle,moveX:1,sprint:true},.25,undefined,1,0);
  const cabin=cabinPosition(0,.25);
  assert.ok(p.x<cabin.x+2.8);assert.equal(p.supportId,0);
});

test('standing on a cabin railing also carries the passenger',()=>{
  const p=player(2.9,2.95,-90);
  for(let n=0;n<180;n++){
    stepPlayer(p,idle,1/60,undefined,1,n/60);
    const c=cabinPosition(0,(n+1)/60);near(p.x,c.x+2.9);near(p.y,c.y+1.1+1.65);
    assert.equal(p.supportId,0);
  }
});

test('falling onto an ascending cabin attaches to its floor',()=>{
  const p=player(cabinPosition(0,15).x,25.5,-90);
  p.velocityY=-5;p.jumpsUsed=2;
  let landed=false;
  for(let n=0;n<90;n++){
    stepPlayer(p,idle,1/120,undefined,1,15+n/120);
    if(p.supportId===0){landed=true;break;}
  }
  assert.ok(landed);assert.equal(p.jumpsUsed,0);
});

test('replaying pending commands and the single-player adapter use the same wheel physics',()=>{
  const p=new Player();p.position.set(0,1.85,-90);
  const authoritative=player(),controller=new PlayerController(),collision=new CollisionSystem(ARENA_BOXES,groundHeight);
  let checkpoint:SimPlayer|undefined;
  for(let n=0;n<180;n++){
    controller.update(p,{...idle,shoot:false,reload:false,switchWeapon:0},1/60,collision,1,n/60);
    stepPlayer(authoritative,idle,1/60,undefined,1,n/60);
    near(p.position.x,authoritative.x);near(p.position.y,authoritative.y);
    if(n===170)checkpoint={...authoritative};
  }
  for(let n=171;n<180;n++)stepPlayer(checkpoint!,idle,1/60,undefined,1,n/60);
  assert.deepEqual(checkpoint,authoritative);
});

test('cabin shot occlusion follows the historical wheel time',()=>{
  const origin={x:0,y:.05,z:-84},direction={x:0,y:0,z:-1};
  assert.ok(rayWallDistance(origin,direction,12,arenaWorld(0))<6);
  assert.equal(rayWallDistance(origin,direction,12,arenaWorld(3.75)),12);
  assert.equal(supportingCabin(0,.2,-90,0),0);
});

test('configured sprint speed stacks with slow and preserves jump physics',()=>{
  const a=player(0,1.65,0),b={...a},c={...a};
  for(let n=0;n<120;n++){
    stepPlayer(a,{...idle,moveX:1,jump:n===0},1/120,empty);
    stepPlayer(b,{...idle,moveX:1,sprint:true,jump:n===0},1/120,empty);
    stepPlayer(c,{...idle,moveX:1,sprint:true,jump:n===0},1/120,empty,.65);
  }
  const sprintSpeed=PLAYER_MOVE_SPEED*SPRINT_MULTIPLIER;
  near(a.x,PLAYER_MOVE_SPEED);near(b.x,sprintSpeed);near(c.x,sprintSpeed*.65);near(a.y,b.y);near(a.velocityY,b.velocityY);
});

test('sprint preserves aim in either order; reload, switching and reset still clear actions',()=>{
  const input=new InputManager();input.set({aim:true});assert.equal(input.aiming,true);
  input.set({sprint:true});assert.equal(input.aiming,true);
  input.set({sprint:false});assert.equal(input.aiming,true);
  input.set({aim:false});input.set({sprint:true});input.set({aim:true});assert.equal(input.aiming,true);
  input.set({aim:true});input.set({reload:true});assert.equal(input.aiming,false);
  input.getState();input.set({aim:true});input.set({switchWeapon:7});assert.equal(input.aiming,false);
  input.set({sprint:true,shoot:true});input.reset();assert.equal(input.sprinting,false);assert.equal(input.getState().shoot,false);
});

test('sniper retains old hotkeys, deals 80 body and 160 head damage without falloff',()=>{
  assert.deepEqual(WEAPON_IDS,['ar','smg','flame','ice','shotgun','rocket','sniper']);
  for(const distance of [1,100,420]){assert.equal(damageAtDistance('sniper',distance),80);assert.equal(damageAtDistance('sniper',distance,true),160);}
  const target={id:'enemy',x:0,y:1.65,z:-50,yaw:0,alive:true};
  assert.equal(resolveShot('sniper',[0,1.22,0],[0,0,-1],[target],()=>.5,empty,true).hits[0].damage,80);
  assert.equal(resolveShot('sniper',[0,1.92,0],[0,0,-1],[target],()=>.5,empty,true).hits[0].damage,160);
});

test('4x scope improves sniper spread and only affects the sniper',()=>{
  const hip=resolveShot('sniper',[0,1.65,0],[0,0,-1],[],()=>1,empty,false).rays[0];
  const scope=resolveShot('sniper',[0,1.65,0],[0,0,-1],[],()=>1,empty,true).rays[0];
  assert.ok(Math.abs(hip.end[0])>Math.abs(scope.end[0])*39);
  assert.deepEqual(resolveShot('ar',[0,1,0],[0,0,-1],[],()=>1,empty,true),resolveShot('ar',[0,1,0],[0,0,-1],[],()=>1,empty,false));
});

test('sniper enforces 5 shots, 1 second cadence and 2.5 second reload',()=>{
  const w=new Weapon(WEAPON_SPECS.sniper);
  assert.equal(w.update(0,true).fired,true);assert.equal(w.ammo,4);
  assert.equal(w.update(.5,true).fired,false);
  assert.equal(w.update(.5,true).fired,true);
  for(let n=0;n<3;n++)assert.equal(w.update(1,true).fired,true);
  assert.equal(w.ammo,0);assert.equal(w.update(1,true).autoReload,true);
  w.update(2.4,false);assert.equal(w.ammo,0);w.update(.11,false);assert.equal(w.ammo,5);
});
