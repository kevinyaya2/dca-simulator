import test from 'node:test';
import assert from 'node:assert/strict';
import { beginRound, step as stepRoom } from '../server/src/index.ts';
import { KillTracker } from '../shared/combat.ts';
import { isCurrentRound } from '../shared/protocol.ts';
import { Bot } from '../src/chroma-ops/enemies/Bot.ts';
import { GameLoop } from '../src/chroma-ops/core/GameLoop.ts';
import * as T from 'three';
import { disposeResources } from '../src/chroma-ops/systems/DisposeResources.ts';

function roomFixture(){
  const players=new Map(['host','guest'].map((id,index)=>[id,{
    id,name:id,avatar:'',color:0xffffff,x:index*30,y:1.65,z:0,yaw:1,pitch:.2,velocityY:0,jumpsUsed:0,
    hp:100,alive:true,kills:10-index,deaths:3,life:2,lastShot:10,lastReceivedSeq:25000+index*8000,lastProcessedSeq:24990,
    input:{seq:25000,moveX:1,moveY:0,sprint:true,aim:true},activeWeapon:'sniper',ownedWeapons:['ar','sniper'],weapons:{},slowUntil:100,burn:null,
  }]));
  return {environmentTime:173,code:'REMATCH',host:'host',roundId:1,state:'GAME_OVER',players,pickups:[],history:[{at:0}],tick:8000,lastStep:Date.now(),wheelEpoch:0,
    respawnTimers:new Map(),shotSequence:20,killTracker:new KillTracker('rematch')} as unknown as Parameters<typeof beginRound>[1];
}

test('a new round accepts freshly numbered client commands after a long first round',()=>{
  const room=roomFixture();const states:unknown[]=[];
  const io={to:()=>({emit:(_name:string,value:unknown)=>states.push(value)})} as unknown as Parameters<typeof beginRound>[0];
  beginRound(io,room);
  for(const p of room.players.values()){
    assert.equal(p.lastReceivedSeq,0,'new clients start at seq=1; retaining old seq rejects all their inputs');
    assert.equal(p.lastProcessedSeq,0);
    assert.ok(1>p.lastReceivedSeq);
    assert.equal(p.input.sprint,false);assert.equal(p.input.aim,false);assert.equal(p.activeWeapon,'ar');
  }
  assert.equal(room.history.length,0);assert.equal(states.length,1);assert.equal(room.environmentTime,173);
});

test('twenty rematches isolate round IDs and reset input acknowledgements, ticks and history',()=>{
  const room=roomFixture();const io={to:()=>({emit:()=>{}})} as unknown as Parameters<typeof beginRound>[0];
  for(let n=0;n<20;n++){
    const oldId=room.roundId;
    for(const p of room.players.values()){p.lastReceivedSeq=30000;p.lastProcessedSeq=29999;}
    room.tick=9999;
    beginRound(io,room);
    assert.equal(room.roundId,oldId+1);assert.equal(room.tick,0);assert.equal(room.history.length,0);
    assert.equal(isCurrentRound({roundId:oldId,seq:90000},room.roundId),false);
    assert.equal(isCurrentRound({roundId:room.roundId,seq:1},room.roundId),true);
    for(const p of room.players.values()){assert.equal(p.lastReceivedSeq,0);assert.equal(p.lastProcessedSeq,0);assert.equal(p.hp,100);}
  }
});

test('server environment pauses in results and lobby, then resumes across a round reset',()=>{
  const room=roomFixture(),io={to:()=>({emit:()=>{}})} as unknown as Parameters<typeof beginRound>[0];
  stepRoom(io,room,30);assert.equal(room.environmentTime,173);
  room.state='LOBBY';stepRoom(io,room,30);assert.equal(room.environmentTime,173);
  beginRound(io,room);assert.equal(room.environmentTime,173);assert.equal(room.lastStep,room.wheelEpoch);
  stepRoom(io,room,1/60);assert.ok(Math.abs(room.environmentTime-(173+1/60))<1e-8);
});

test('death fragments release cloned materials on expiry and respawn; avatar disposal releases GPU resources once',()=>{
  const previous=Object.getOwnPropertyDescriptor(globalThis,'document');
  Object.defineProperty(globalThis,'document',{configurable:true,value:{createElement:()=>({width:0,height:0,getContext:()=>({fillText:()=>{}})})}});
  try{
    const bot=new Bot('peer','Peer',0x123456);let fragmentDisposals=0,geometryDisposals=0,materialDisposals=0,textureDisposals=0;
    const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();
    bot.group.traverse(object=>{
      if(object instanceof T.Mesh)geometries.add(object.geometry);
      if(object instanceof T.Mesh||object instanceof T.Sprite)materials.add(object.material as T.Material);
    });
    for(const geometry of geometries)geometry.addEventListener('dispose',()=>geometryDisposals++);
    for(const material of materials){material.addEventListener('dispose',()=>materialDisposals++);const map=(material as T.SpriteMaterial).map;if(map)map.addEventListener('dispose',()=>textureDisposals++);}
    for(let n=0;n<100;n++){
      bot.damage(100);assert.equal(bot.deathGroup.children.length,6);
      for(const part of bot.deathGroup.children)(part as T.Mesh).material.addEventListener('dispose',()=>fragmentDisposals++);
      if(n%2===0)bot.updateVisual(2,false,false);
      bot.respawn(0,0);assert.equal(bot.deathGroup.children.length,0);
    }
    assert.equal(fragmentDisposals,600);assert.equal(geometryDisposals,0,'fragment geometry belongs to the live character');
    bot.dispose();bot.dispose();
    assert.equal(geometryDisposals,geometries.size);assert.equal(materialDisposals,materials.size);assert.equal(textureDisposals,1);
  }finally{if(previous)Object.defineProperty(globalThis,'document',previous);else Reflect.deleteProperty(globalThis,'document');}
});

test('shared geometry, materials and name textures are disposed once per scene cleanup',()=>{
  const root=new T.Group(),geometry=new T.BoxGeometry(),texture=new T.Texture(),material=new T.MeshBasicMaterial({map:texture});
  root.add(new T.Mesh(geometry,material),new T.Mesh(geometry,material));
  let geometries=0,materials=0,textures=0;
  geometry.addEventListener('dispose',()=>geometries++);material.addEventListener('dispose',()=>materials++);texture.addEventListener('dispose',()=>textures++);
  disposeResources(root);assert.deepEqual([geometries,materials,textures],[1,1,1]);
});

test('city instancing releases mesh-owned buffers as well as shared resources',()=>{
  const group=new T.Group(),geometry=new T.BoxGeometry(),material=new T.MeshBasicMaterial();
  const a=new T.InstancedMesh(geometry,material,4),b=new T.InstancedMesh(geometry,material,3);group.add(a,b);
  a.setColorAt(0,new T.Color('red'));
  let buffers=0,geometries=0,materials=0;
  for(const mesh of [a,b])mesh.addEventListener('dispose',()=>buffers++);
  geometry.addEventListener('dispose',()=>geometries++);material.addEventListener('dispose',()=>materials++);
  disposeResources(group,a);assert.deepEqual([buffers,geometries,materials],[2,1,1]);
});

test('repeated start/resume and stop leave at most one animation loop',()=>{
  const names=['requestAnimationFrame','cancelAnimationFrame'];const previous=names.map(name=>Object.getOwnPropertyDescriptor(globalThis,name));
  const frames=new Map<number,FrameRequestCallback>();let next=0,updates=0;
  Object.defineProperty(globalThis,names[0],{configurable:true,value:(cb:FrameRequestCallback)=>{frames.set(++next,cb);return next;}});
  Object.defineProperty(globalThis,names[1],{configurable:true,value:(id:number)=>frames.delete(id)});
  try{
    for(let round=0;round<20;round++){
      const loop=new GameLoop(()=>updates++);loop.start();loop.start();assert.equal(frames.size,1);
      const [id,cb]=[...frames][0];frames.delete(id);cb((round+1)*1000);assert.equal(frames.size,1);
      loop.stop();loop.stop();assert.equal(frames.size,0);
    }
    assert.equal(updates,20);
  }finally{names.forEach((name,index)=>{if(previous[index])Object.defineProperty(globalThis,name,previous[index]!);else Reflect.deleteProperty(globalThis,name);});}
});
