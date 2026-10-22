import test from 'node:test';
import assert from 'node:assert/strict';
import { stepPlayer, blocked, supportHeight, rayWallDistance, ARENA_BOXES, terrainHeight, type SimPlayer } from '../shared/arena.ts';
import { GLASSHOUSE, GLASSHOUSE_BOXES, GLASSHOUSE_GLASS } from '../shared/glasshouse.ts';
import { SAFE_SPAWNS, WEAPON_POINTS } from '../shared/spawns.ts';
import { CITY_PROPS } from '../shared/city.ts';
import { PlayerController } from '../src/chroma-ops/player/PlayerController.ts';
import { Player } from '../src/chroma-ops/player/Player.ts';
import { CollisionSystem } from '../src/chroma-ops/systems/CollisionSystem.ts';

const idle={moveX:0,moveY:0,lookX:0,lookY:0,jump:false};
const player=(x:number,z:number,feet=0):SimPlayer=>({x,z,y:feet+1.65,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true});
const near=(a:number,b:number)=>assert.ok(Math.abs(a-b)<.03,`${a} != ${b}`);
function travel(p:SimPlayer,x:number,z:number,dt=1/120){
  for(let n=0;n<2400;n++){
    const dx=x-p.x,dz=z-p.z;
    const distance=Math.hypot(dx,dz);
    if(distance<.05)return;
    stepPlayer(p,{...idle,moveX:dx,moveY:-dz,sprint:dt>.1},Math.min(dt,distance/(dt>.1?9.6:8)));
  }
  assert.fail(`Cannot reach ${x},${z}; stopped at ${p.x},${p.y-1.65},${p.z}`);
}

test('lab ground doors form a clear north-south route; west stair door is open',()=>{
  const p=player(58,122);travel(p,58,88);near(p.y,1.65);
  travel(p,58,94);travel(p,23.5,94);near(p.y,1.65);
  assert.equal(rayWallDistance({x:58,y:2,z:120},{x:0,y:0,z:-1},32),32);
});

for(const dt of [1/120,.25])test(`lab return stairs reach every floor and roof, then descend at dt=${dt}`,()=>{
  const p=player(23.5,93.5);
  for(const base of GLASSHOUSE.floors){
    travel(p,23.5,104.5,dt);near(p.y,base+4.65);
    travel(p,27.5,104.5,dt);travel(p,27.5,93.5,dt);near(p.y,base+7.65);
    travel(p,32,93.5,dt);near(p.y,base+7.65);
    assert.equal(p.jumpsUsed,0);
    if(base<12){travel(p,27.5,93.5,dt);travel(p,23.5,93.5,dt);}
  }
  travel(p,34,110,dt);near(p.y,19.65);travel(p,32,93.5,dt);travel(p,27.5,93.5,dt);
  for(const base of [12,6,0]){
    travel(p,27.5,104.5,dt);travel(p,23.5,104.5,dt);travel(p,23.5,93.5,dt);
    // Let the last descending step settle at low frame rates.
    for(let n=0;n<60;n++)stepPlayer(p,idle,1/120);
    near(p.y,base+1.65);
    if(base>0)travel(p,27.5,93.5,dt);
  }
});

test('fixed glass and service walls stop players and shots; floors have headroom',()=>{
  for(const base of GLASSHOUSE.floors){
    const facade=base===0?114:116;
    assert.equal(blocked(70,facade,.42,base),true);
    assert.ok(rayWallDistance({x:70,y:base+2,z:facade+4},{x:0,y:0,z:-1},8)<4.1);
    assert.equal(blocked(38,105,.42,base),true);
    assert.ok(rayWallDistance({x:38,y:base+2,z:107},{x:0,y:0,z:-1},4)<2.1);
    assert.equal(blocked(58,104,.42,base+.02),false);
    near(supportHeight(58,104,base+.02),base);
    const p=player(70,facade-2,base);
    for(let n=0;n<120;n++)stepPlayer(p,{...idle,moveY:-1},1/120);
    assert.ok(p.z<facade-.49);near(p.y,base+1.65);
    const jump=player(58,104,base);
    let top=base;
    for(let n=0;n<180;n++){
      stepPlayer(jump,{...idle,jump:n===0||n===12},1/120);
      top=Math.max(top,jump.y-1.65);
    }
    assert.ok(top+1.8<=base+5.7+.03,'jump cannot penetrate ceiling');
    near(jump.y,base+1.65);
  }
  for(const b of GLASSHOUSE_GLASS)assert.ok(ARENA_BOXES.includes(b));
});

test('lab relocation keeps spawns, pickups, street and adjacent buildings clear',()=>{
  assert.ok(SAFE_SPAWNS.some(([x,z])=>x===88&&z===124));
  assert.ok(!WEAPON_POINTS.some(p=>p.x===82&&p.z===112));
  for(const [x,z] of SAFE_SPAWNS)assert.equal(blocked(x,z,.75),false);
  for(const prop of CITY_PROPS)assert.ok(!GLASSHOUSE_BOXES.some(b=>
    prop.minX<b.maxX&&prop.maxX>b.minX&&prop.minZ<b.maxZ&&prop.maxZ>b.minZ&&prop.minY<b.maxY&&prop.maxY>b.minY));
  const street=player(40,84);travel(street,90,84);near(street.y,1.65);
});

test('solo controller and shared server/replay simulation agree on lab stairs',()=>{
  const solo=new Player(),controller=new PlayerController(),collision=new CollisionSystem(ARENA_BOXES,terrainHeight);
  solo.position.set(23.5,1.65,93.5);
  const server=player(23.5,93.5),replay=player(23.5,93.5);
  const commands=[];
  for(const [x,z] of [[23.5,104.5],[27.5,104.5],[27.5,93.5],[32,93.5]]){
    for(let n=0;n<400;n++){
      const dx=x-server.x,dz=z-server.z;if(Math.hypot(dx,dz)<.12)break;
      const input={...idle,moveX:dx,moveY:-dz},dt=n%2?1/30:1/60;
      commands.push({input,dt});stepPlayer(server,input,dt);controller.update(solo,input,dt,collision);
    }
  }
  for(const {input,dt} of commands)stepPlayer(replay,input,dt);
  assert.ok(Math.hypot(server.x-32,server.z-93.5)<.12);near(server.y,7.65);
  for(const p of [replay,{x:solo.position.x,y:solo.position.y,z:solo.position.z}]){
    near(p.x,server.x);near(p.y,server.y);near(p.z,server.z);
  }
});
