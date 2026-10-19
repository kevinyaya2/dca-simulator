import test from 'node:test';
import assert from 'node:assert/strict';
import { stepPlayer, groundHeight, blocked, rayWallDistance, arenaWorld, type SimPlayer } from '../shared/arena.ts';
import { CITY_BUILDINGS, CITY_RAMPS } from '../shared/city.ts';
import { liftHeight, LIFT_ID, platformPosition } from '../shared/movingPlatforms.ts';
import { dayNightAt, advanceEnvironment, environmentAtSnapshot } from '../shared/dayNight.ts';
import { PlayerController } from '../src/chroma-ops/player/PlayerController.ts';
import { Player } from '../src/chroma-ops/player/Player.ts';
import { CollisionSystem } from '../src/chroma-ops/systems/CollisionSystem.ts';
import { BotAI } from '../src/chroma-ops/enemies/BotAI.ts';
import { ARENA_BOXES } from '../shared/arena.ts';
import * as T from 'three';

const idle={moveX:0,moveY:0,lookX:0,lookY:0,jump:false};
const player=(x:number,z:number,feet=0):SimPlayer=>({x,y:feet+1.65,z,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true});
const near=(a:number,b:number)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);
function travel(p:SimPlayer,x:number,z:number,time=0){
  for(let n=0;n<1800;n++){
    const dx=x-p.x,dz=z-p.z;if(Math.hypot(dx,dz)<.12)return;
    stepPlayer(p,{...idle,moveX:dx,moveY:-dz},1/120,undefined,1,time+n/120);
  }
  assert.fail(`cannot reach ${x}, ${z}; stopped at ${p.x}, ${p.y-1.65}, ${p.z}`);
}

for(const b of CITY_BUILDINGS){
  test(`${b.name}: doors, return stairs, both upper floors and external ramp are traversable`,()=>{
    const p=player(b.x,b.z+16);travel(p,b.x,b.z+8);near(p.y,1.65);
    travel(p,b.x-7.5,b.z-9);
    for(const base of [0,6]){
      travel(p,b.x-7.5,b.z+.9);near(p.y,base+3+1.65);
      travel(p,b.x-3.5,b.z+.9);travel(p,b.x-3.5,b.z-9);near(p.y,base+6+1.65);
      if(base===0)travel(p,b.x-7.5,b.z-9);
    }
    const first=CITY_RAMPS.find(r=>r.from===0&&r.z0===b.z+25&&Math.abs(r.x-b.x)<20)!;
    const second=CITY_RAMPS.find(r=>r.from===6&&r.z0===b.z+1&&Math.abs(r.x-b.x)<25)!;
    const q=player(first.x,first.z0+1);travel(q,first.x,first.z1);near(q.y,7.65);
    travel(q,b.x+b.side*10,b.z+1);near(q.y,7.65);
    travel(q,first.x,first.z1);
    travel(q,second.x,second.z0);travel(q,second.x,second.z1);near(q.y,13.65);
    travel(q,b.x+b.side*8,b.z+25);travel(q,b.x+b.side*8,b.z+10);near(q.y,13.65);
  });
  test(`${b.name}: real window apertures pass shots while sill and piers block them`,()=>{
    for(const feet of [0,6]){
      const origin={x:b.x+9,y:feet+2,z:b.z+16},direction={x:0,y:0,z:-1};
      assert.equal(rayWallDistance(origin,direction,6),6);
      assert.ok(rayWallDistance({...origin,y:feet+.6},direction,6)<6);
      assert.ok(rayWallDistance({...origin,x:b.x+6},direction,6)<6);
    }
  });
}

test('the middle skywalk has continuous access from both buildings and a clear street below',()=>{
  const west=CITY_BUILDINGS[0],east=CITY_BUILDINGS[1];
  const p=player(west.x+10,west.z,6);
  travel(p,-44,45);travel(p,-44,36);travel(p,44,36);travel(p,44,44);travel(p,east.x-10,44);near(p.y,7.65);
  const street=player(8,30);travel(street,8,40);near(street.y,1.65);
  assert.equal(blocked(0,36),false);
});

test('both roof routes connect to the existing central platform',()=>{
  for(const x of [-60,63]){
    const p=player(x,55.5,12);travel(p,x<0?-18:18,55.5);near(p.y,13.65);
  }
});

test('lift stops at three floors and carries a rider through an entire 28 second cycle',()=>{
  for(const [time,height] of [[0,0],[3,0],[7,6],[10,6],[14,12],[17,12],[21,6],[24,6],[28,0]])near(liftHeight(time),height);
  const p=player(68,28);
  for(let n=0;n<1680;n++){
    stepPlayer(p,idle,1/60,undefined,1,n/60);
    near(p.y,liftHeight((n+1)/60)+1.65);assert.equal(p.supportId,LIFT_ID);assert.equal(p.jumpsUsed,0);
  }
  near(platformPosition(LIFT_ID,15).y,12);
});

test('lift can be boarded, walked off at a landing, jumped from and shot around',()=>{
  const p=player(68,31);travel(p,68,28,0);assert.equal(p.supportId,LIFT_ID);
  const q=player(68,28,6);travel(q,68,34,7);near(q.y,7.65);assert.equal(q.supportId,null);
  const r=player(68,28,12);stepPlayer(r,{...idle,jump:true},1/60,undefined,1,15);assert.equal(r.supportId,null);assert.equal(r.jumpsUsed,1);
  const origin={x:68,y:5.8,z:24},direction={x:0,y:0,z:1};
  assert.ok(rayWallDistance(origin,direction,6,arenaWorld(8))<6);
  assert.equal(rayWallDistance(origin,direction,6,arenaWorld(0)),6);
});

test('external ramp sides cannot teleport a ground player onto upper routes',()=>{
  const p=player(-92,58);travel(p,-91,58);
  stepPlayer(p,{...idle,moveX:1,sprint:true},.25);assert.ok(p.x<-89);near(p.y,1.65);
  assert.ok(groundHeight(-87,58)>6);
});

test('sprinting up stairs at 4 FPS keeps collision and the two-jump budget intact',()=>{
  const b=CITY_BUILDINGS[0],p=player(b.x-7.5,b.z-9);
  for(let n=0;n<2;n++)stepPlayer(p,{...idle,moveY:-1,sprint:true},.25);
  assert.ok(Math.abs(p.y-1.65-3)<.3);assert.equal(p.jumpsUsed,0);
  p.x=b.x+5;p.z=b.z+5;p.y=7.65;
  stepPlayer(p,{...idle,jump:true},.2);stepPlayer(p,{...idle,jump:true},.2);
  assert.equal(p.jumpsUsed,2);
  stepPlayer(p,{...idle,jump:true},.05);assert.equal(p.jumpsUsed,2);
  for(let n=0;n<10;n++)stepPlayer(p,idle,.25);
  near(p.y,7.65);assert.equal(p.jumpsUsed,0);
});

test('solo adapter, server simulation and pending-command replay agree while riding the lift',()=>{
  const sim=player(68,28),solo=new Player(),controller=new PlayerController(),collision=new CollisionSystem(ARENA_BOXES,groundHeight);
  solo.position.set(68,1.65,28);const commands=[];
  for(let n=0;n<240;n++){
    const dt=n%2?1/30:1/60,time=commands.reduce((total,c)=>total+c.dt,0);commands.push({time,dt});
    stepPlayer(sim,idle,dt,undefined,1,time);controller.update(solo,idle,dt,collision,1,time);
  }
  const replay=player(68,28);for(const {time,dt} of commands)stepPlayer(replay,idle,dt,undefined,1,time);
  near(solo.position.y,sim.y);near(replay.y,sim.y);assert.equal(solo.supportId,LIFT_ID);assert.equal(replay.supportId,LIFT_ID);
});

test('ground AI stays off ramp height fields and does not approach the automatic lift',()=>{
  const ai=new BotAI(),collision=new CollisionSystem(ARENA_BOXES,groundHeight),target=new Player();
  for(const [x,z,tx,tz] of [[-81,71,-81,50],[68,32,68,25]]){
    const bot={id:'ground',alive:true,cooldown:1,position:new T.Vector3(x,0,z),group:new T.Group()};
    target.position.set(tx,1.65,tz);
    for(let n=0;n<300;n++)ai.update(bot as any,target,1/60,collision,[[tx,tz]],false,()=>{});
    assert.equal(groundHeight(bot.position.x,bot.position.z),0);
    if(x===68)assert.ok(bot.position.z>=30.6);
  }
});

test('four minute phases blend continuously and wrap cleanly',()=>{
  const expected=[[0,'day',0],[90,'dusk',0],[105,'dusk',.5],[120,'night',1],[209,'night',1],[210,'dawn',1],[225,'dawn',.5],[240,'day',0]] as const;
  for(const [time,phase,night] of expected){const state=dayNightAt(time);assert.equal(state.phase,phase);near(state.night,night);}
  for(const boundary of [90,120,210,240])assert.ok(Math.abs(dayNightAt(boundary-.001).night-dayNightAt(boundary+.001).night)<1e-6);
  assert.deepEqual(dayNightAt(240+105),dayNightAt(105));
});

test('environment advances only during play; clients use server stamps regardless of load time',()=>{
  near(advanceEnvironment(119,20,false),119);near(advanceEnvironment(119,2,true),121);
  const a={environmentTime:104.9,serverTime:1000},b={environmentTime:105,serverTime:1100};
  near(environmentAtSnapshot(a,1150),environmentAtSnapshot(b,1150));
  assert.ok(dayNightAt(environmentAtSnapshot(a,1150)).night>.5);
  near(environmentAtSnapshot(a,900),104.9);near(environmentAtSnapshot(a,5000),105.15);
});
