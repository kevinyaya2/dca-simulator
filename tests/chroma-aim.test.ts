import test from 'node:test';
import assert from 'node:assert/strict';
import { queryAim, aimFromPlayer } from '../shared/aim.ts';
import { resolveShot, type Combatant, type Vec3 } from '../shared/combat.ts';
import { WEAPON_IDS, WEAPON_SPECS } from '../shared/weapons.ts';
import { arenaWorld, type SimWorld } from '../shared/arena.ts';
import { cityBox } from '../shared/city.ts';
import { GLASSHOUSE_GLASS } from '../shared/glasshouse.ts';
import { uniqueBoxTops } from '../src/chroma-ops/world/GroundSurfaces.ts';

const empty:SimWorld={boxes:[],heightAt:()=>-100};
const origin:Vec3=[0,1.22,0],dir:Vec3=[0,0,-1];
const target=(z:number,x=0):Combatant=>({id:'target',x,y:1.65,z,yaw:0,alive:true});

for(const id of WEAPON_IDS)test(`${id}: preview checks range, cover and living targets without changing them`,()=>{
  const range=WEAPON_SPECS[id].range,inside=target(-range+.5),outside=target(-range-2);
  assert.equal(queryAim(id,origin,dir,[inside],empty),'in-range');
  if(range<420)assert.equal(queryAim(id,origin,dir,[outside],empty),'out-of-range');
  assert.equal(queryAim(id,origin,dir,[{...inside,alive:false}],empty),'neutral');
  assert.equal(queryAim(id,origin,dir,[],empty),'neutral');
  const before=structuredClone(inside),wall={...empty,boxes:[cityBox(0,-2,20,.3,5,0)]};
  assert.equal(queryAim(id,origin,dir,[inside],wall),'blocked');
  assert.equal(queryAim(id,origin,dir,[],wall),'blocked','cover must not reveal if somebody is behind it');
  assert.deepEqual(inside,before);
});

test('flame preview follows the cone; shotgun and rocket preview only the centre line',()=>{
  const side=target(-10,1.5);
  assert.equal(queryAim('flame',origin,dir,[side],empty),'in-range');
  assert.equal(queryAim('shotgun',origin,dir,[side],empty),'neutral');
  assert.equal(queryAim('rocket',origin,dir,[side],empty),'neutral');
  assert.equal(queryAim('flame',origin,dir,[target(-20,2)],empty),'out-of-range');
  assert.equal(queryAim('flame',origin,dir,[target(-10,4)],empty),'neutral');
});

test('glass, real window holes and moving lift use the same occlusion as shots',()=>{
  const pane=GLASSHOUSE_GLASS[0],x=(pane.minX+pane.maxX)/2,z=(pane.minZ+pane.maxZ)/2;
  const enemy={...target(z-3,x),y:1.65};
  assert.equal(queryAim('sniper',[x,2,z+3],dir,[enemy],{...empty,boxes:[pane]}),'blocked');
  assert.equal(queryAim('sniper',[68,5.8,24],[0,0,1],[{...target(32,68),y:5.45}],arenaWorld(8)),'blocked');
  assert.equal(queryAim('sniper',[-56,2,61],dir,[{...target(53,-56),y:1.65}],arenaWorld(0)),'in-range');
});

test('scoped sniper stays on the centre at 400m for every random sample; hip fire retains spread',()=>{
  for(const sample of [0,.17,.5,.83,1]){
    const shot=resolveShot('sniper',origin,dir,[target(-400)],()=>sample,empty,true);
    assert.deepEqual(shot.rays[0].dir,dir);assert.equal(shot.hits[0]?.damage,80);
    assert.equal(shot.hits[0]?.targetId,'target');
  }
  assert.notDeepEqual(resolveShot('sniper',origin,dir,[],()=>1,empty,false).rays[0].dir,dir);
  const head=resolveShot('sniper',[0,1.92,0],dir,[target(-400)],()=>0,empty,true);
  assert.equal(head.hits[0]?.damage,160);
  const aim=aimFromPlayer({x:1,y:2,z:3,yaw:0,pitch:0});
  assert.deepEqual(aim.origin,[1,2,3]);assert.ok(aim.direction.every((v,i)=>v===dir[i]));
});

test('overlapping floor and skywalk tops have one visible surface with intact coverage',()=>{
  const a=cityBox(0,0,8,8,6,1,5.7),b=cityBox(3,0,4,4,6,2,5.7),other=cityBox(0,0,8,8,12,3,11.7);
  const original=structuredClone([a,b,other]),tops=uniqueBoxTops([a,b,other]);
  for(let i=0;i<tops.length;i++)for(let j=i+1;j<tops.length;j++){
    const x=tops[i],y=tops[j];if(x.maxY!==y.maxY)continue;
    assert.ok(Math.min(x.maxX,y.maxX)-Math.max(x.minX,y.minX)<=1e-6||Math.min(x.maxZ,y.maxZ)-Math.max(x.minZ,y.minZ)<=1e-6);
  }
  const area=tops.filter(t=>t.maxY===6).reduce((sum,t)=>sum+(t.maxX-t.minX)*(t.maxZ-t.minZ),0);
  assert.equal(area,68);assert.deepEqual([a,b,other],original);
  assert.equal(tops.find(t=>t.minX<=3&&t.maxX>=3&&t.minZ<=0&&t.maxZ>=0&&t.maxY===6)?.color,2);
});
