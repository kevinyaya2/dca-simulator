import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { io as connect, type Socket } from 'socket.io-client';
import { WEAPON_IDS, WEAPON_SPECS, createWeaponStates, collectWeapon, magazineCapacity, advanceWeaponReload, weaponRange, weaponDamageMultiplier, type WeaponId } from '../shared/weapons.ts';
import { queryAim } from '../shared/aim.ts';
import { resolveShot, KillTracker } from '../shared/combat.ts';
import { beginRound, step, kill, createGameServer } from '../server/src/index.ts';
import { Weapon } from '../src/chroma-ops/weapons/Weapon.ts';
import { WeaponAppearance } from '../src/chroma-ops/weapons/WeaponAppearance.ts';
import { WeaponEffects } from '../src/chroma-ops/systems/WeaponEffects.ts';
import { PickupFeedback } from '../src/chroma-ops/ui/PickupFeedback.ts';
import { weaponMuzzle } from '../src/chroma-ops/weapons/WeaponMuzzle.ts';
import { nearbyPickupHint, type PreviewPickup } from '../src/chroma-ops/ui/PickupPreview.ts';

const empty={boxes:[],heightAt:()=>-100};
const capacities:Record<WeaponId,number[]>={ar:[30,38,45],smg:[36,45,54],flame:[80,100,120],ice:[24,30,36],shotgun:[8,10,12],rocket:[4,5,6],sniper:[5,6,8]};
const ranges:Record<WeaponId,number>={ar:30,smg:45,flame:25,ice:55,shotgun:35,rocket:100,sniper:420};
for(const id of WEAPON_IDS){
  test(`${id}: quick reload lasts eight seconds, refreshes without stacking and expires`,()=>{
    const state=createWeaponStates()[id];state.level=3;state.ammo=magazineCapacity(id,3);
    assert.equal(collectWeapon(id,state,true,1000).kind,'boost');assert.equal(state.quickReloadUntil,9000);
    state.ammo--;advanceWeaponReload(id,state,2000,true);
    assert.ok(Math.abs(state.reloadUntil-(2000+WEAPON_SPECS[id].reloadTime*750))<1e-6);
    advanceWeaponReload(id,state,state.reloadUntil);assert.equal(state.ammo,magazineCapacity(id,3));
    collectWeapon(id,state,true,4000);assert.equal(state.quickReloadUntil,12000);
    collectWeapon(id,state,true,5000);assert.equal(state.quickReloadUntil,13000);
    state.ammo--;advanceWeaponReload(id,state,13000,true);
    assert.ok(Math.abs(state.reloadUntil-(13000+WEAPON_SPECS[id].reloadTime*1000))<1e-6);
    const deadline=state.reloadUntil;collectWeapon(id,state,true,13001);
    assert.equal(state.ammo,magazineCapacity(id,3));assert.equal(state.reloadUntil,0);
    assert.ok(deadline>13001);
  });
  for(const level of [1,2,3] as const)test(`${id} Lv.${level}: additive damage and range apply to hits and aim preview`,()=>{
    const spec=WEAPON_SPECS[id],range=weaponRange(id,level),target={id:'enemy',x:0,y:1.65,z:-10,yaw:0,alive:true};
    assert.equal(range,spec.range*(1+.15*(level-1)));
    assert.equal(weaponDamageMultiplier(level),1+.1*(level-1));
    const result=resolveShot(id,[0,1.22,0],[0,0,-1],[target],()=>.5,empty,false,level);
    assert.equal(result.hits[0].damage,Math.round(spec.damage*weaponDamageMultiplier(level))*(spec.pellets??1));
    const inside={...target,z:-range+1},outside={...target,z:-range-1};
    assert.ok(resolveShot(id,[0,1.22,0],[0,0,-1],[inside],()=>.5,empty,false,level).hits.length);
    assert.equal(resolveShot(id,[0,1.22,0],[0,0,-1],[outside],()=>.5,empty,false,level).hits.length,0);
    assert.equal(queryAim(id,[0,1.22,0],[0,0,-1],[inside],empty,level),'in-range');
    assert.equal(queryAim(id,[0,1.22,0],[0,0,-1],[outside],empty,level),'out-of-range');
    if(level>1){
      const extended={...target,z:-spec.range*1.075};
      assert.equal(queryAim(id,[0,1.22,0],[0,0,-1],[extended],empty,1),'out-of-range');
      assert.equal(queryAim(id,[0,1.22,0],[0,0,-1],[extended],empty,level),'in-range');
    }
  });
  test(`${id}: specified range clips shots and permits targets within range`,()=>{
    assert.equal(WEAPON_SPECS[id].range,ranges[id]);
    const target={id:'target',x:0,y:1.65,z:-ranges[id]+1,yaw:0,alive:true};
    assert.ok(resolveShot(id,[0,1.22,0],[0,0,-1],[target],()=>.5,empty).hits.length);
    assert.equal(resolveShot(id,[0,1.22,0],[0,0,-1],[{...target,z:-ranges[id]-1}],()=>.5,empty).hits.length,0);
  });
  test(`${id}: unlock and upgrades fill the magazine; full-level pickups refill or boost`,()=>{
    const s=createWeaponStates()[id];
    assert.equal(collectWeapon(id,s,false)?.kind,'unlock');assert.equal(s.level,1);
    s.ammo=1;s.reloadUntil=12345;
    const upgraded=collectWeapon(id,s,true)!;
    assert.equal(upgraded.kind,'upgrade');assert.equal(s.ammo,capacities[id][1]);
    assert.equal(s.level,2);assert.equal(s.reloadUntil,0);assert.equal(magazineCapacity(id,s.level),capacities[id][1]);
    collectWeapon(id,s,true);assert.equal(s.level,3);assert.equal(magazineCapacity(id,s.level),capacities[id][2]);
    s.ammo=0;assert.equal(collectWeapon(id,s,true)?.kind,'refill');assert.equal(s.ammo,capacities[id][2]);assert.equal(s.reloadUntil,0);
    assert.equal(collectWeapon(id,s,true).kind,'boost');assert.equal(s.quickReloadUntil,8000);assert.equal(s.level,3);
  });
  test(`${id}: last shot reloads without another trigger; holstered timers and continuous fire work`,()=>{
    const w=new Weapon(WEAPON_SPECS[id]);
    for(let n=0;n<WEAPON_SPECS[id].magazine;n++)assert.equal(w.update(n?WEAPON_SPECS[id].fireDelay:0,true).fired,true);
    assert.equal(w.ammo,0);assert.equal(w.reloading,true);
    assert.equal(w.update(WEAPON_SPECS[id].reloadTime-.01,false).fired,false);assert.equal(w.ammo,0);
    w.update(.02,false);assert.equal(w.ammo,WEAPON_SPECS[id].magazine);assert.equal(w.reloading,false);
    w.update(2,true);w.reload();w.collect(true);
    w.update(WEAPON_SPECS[id].reloadTime+.001,false);assert.equal(w.ammo,capacities[id][1]);
    for(let n=0;n<capacities[id][1];n++)w.update(WEAPON_SPECS[id].fireDelay+.001,true);
    assert.equal(w.reloading,true);assert.equal(w.update(WEAPON_SPECS[id].reloadTime+.001,true).fired,true);
    w.refill();assert.equal(w.level,2);assert.equal(w.ammo,capacities[id][1]);assert.equal(w.reloading,false);
  });
}

function fixture(){
  const room={environmentTime:0,code:'WEAPON',host:'a',roundId:0,state:'LOBBY',players:new Map(['a','b'].map(id=>[id,{id,name:id,socketId:`socket-${id}`,avatar:'',color:0xffffff,x:0,y:1.65,z:0,yaw:0,pitch:0,weapons:createWeaponStates(),lastReceivedSeq:0,lastProcessedSeq:0}])),pickups:[],history:[],tick:0,lastStep:Date.now(),wheelEpoch:0,shotSequence:0,killTracker:new KillTracker('weapons'),respawnTimers:new Map() } as unknown as Parameters<typeof beginRound>[1];
  const events:{name:string;value:any;recipient:string}[]=[];
  const io={to:(recipient:string)=>({emit:(name:string,value:any)=>events.push({recipient,name,value})})} as unknown as Parameters<typeof beginRound>[0];
  beginRound(io,room);events.length=0;
  return{room,io,events,a:room.players.get('a')!,b:room.players.get('b')!};
}
test('server grants pickup once, preserves scoped weapon, upgrades and publishes private round-scoped results',()=>{
  const {room,io,events,a,b}=fixture();
  a.activeWeapon='sniper';a.ownedWeapons.push('sniper');a.input.aim=true;
  Object.assign(a,{x:-140,z:-114,y:1.65});Object.assign(b,{x:a.x,z:a.z,y:a.y});
  const pickup={id:'smg' as const,x:a.x,y:0,z:a.z,available:true,respawnAt:0};room.pickups=[pickup];
  step(io,room,1/60);
  assert.equal(a.activeWeapon,'sniper');assert.equal(a.aiming,true);assert.equal(a.input.aim,true);
  assert.ok(a.ownedWeapons.includes('smg'));assert.ok(!b.ownedWeapons.includes('smg'));
  const first=events.filter(e=>e.name==='match:pickup');assert.equal(first.length,1);assert.equal(first[0].recipient,a.socketId);
  assert.equal(first[0].value.roundId,room.roundId);assert.equal(first[0].value.kind,'unlock');
  pickup.available=true;a.weapons.smg.ammo=5;step(io,room,1/60);
  assert.equal(a.weapons.smg.level,2);assert.equal(a.weapons.smg.ammo,45);assert.equal(a.activeWeapon,'sniper');
  const results=events.filter(e=>e.name==='match:pickup');assert.notEqual(results[0].value.eventId,results[1].value.eventId);
  pickup.available=true;step(io,room,1/60);assert.equal(a.weapons.smg.level,3);
  a.weapons.smg.ammo=54;b.alive=false;pickup.available=true;step(io,room,1/60);assert.equal(pickup.available,false);assert.ok(a.weapons.smg.quickReloadUntil>Date.now());
});
test('server completes holstered reload using upgraded capacity',()=>{
  const {room,io,a}=fixture();room.pickups=[];
  const s=a.weapons.rocket;s.level=2;s.ammo=0;advanceWeaponReload('rocket',s,Date.now());
  collectWeapon('rocket',s,true);assert.equal(s.level,3);assert.equal(s.ammo,6);assert.equal(s.reloadUntil,0);s.ammo=1;advanceWeaponReload('rocket',s,Date.now(),true);
  s.reloadUntil=Date.now()-1;step(io,room,1/60);assert.equal(s.ammo,6);assert.equal(s.reloadUntil,0);
});
test('death retains upgrades and refills on respawn; next round resets ownership and levels',t=>{
  t.mock.timers.enable({apis:['setTimeout']});
  const {room,io,a,b}=fixture();room.pickups=[];
  a.ownedWeapons.push('sniper');a.activeWeapon='sniper';a.weapons.sniper.level=3;a.weapons.sniper.ammo=1;a.weapons.sniper.reloadUntil=Date.now()+10000;
  a.weapons.sniper.quickReloadUntil=Date.now()+8000;
  kill(io,room,b,a,'ar',false);assert.equal(a.alive,false);assert.equal(a.weapons.sniper.quickReloadUntil,0);t.mock.timers.tick(3001);
  assert.equal(a.alive,true);assert.equal(a.weapons.sniper.level,3);assert.equal(a.weapons.sniper.ammo,8);assert.equal(a.weapons.sniper.reloadUntil,0);assert.ok(a.ownedWeapons.includes('sniper'));
  beginRound(io,room);assert.deepEqual(a.ownedWeapons,['ar']);assert.equal(a.activeWeapon,'ar');assert.equal(a.weapons.sniper.level,1);
});
test('single-player upgrades fill immediately, boost timer runs while holstered and refill clears it',()=>{
  const weapon=new Weapon(WEAPON_SPECS.ar);weapon.update(0,true);weapon.reload();
  weapon.collect(true);assert.equal(weapon.ammo,38);assert.equal(weapon.reloading,false);
  weapon.collect(true);weapon.collect(true);assert.equal(weapon.quickReloadSeconds,8);
  weapon.update(3,false);assert.equal(weapon.quickReloadSeconds,5);
  weapon.collect(true);assert.equal(weapon.quickReloadSeconds,8);
  weapon.update(0,true);weapon.reload();weapon.update(1.25*.75+.001,false);assert.equal(weapon.reloading,false);assert.equal(weapon.ammo,45);
  weapon.update(8,false);assert.equal(weapon.quickReloadSeconds,0);
  weapon.collect(true);weapon.refill();assert.equal(weapon.quickReloadSeconds,0);
});
test('nearby preview distinguishes unlock, full-magazine upgrade, refill and boost; hides distant or occluded loot',()=>{
  const eye={x:0,y:1.65,z:0},pickup:PreviewPickup={id:'ar',position:{x:0,y:.9,z:-4},available:true,owned:false,state:{level:1,ammo:30}};
  assert.match(nearbyPickupHint([pickup],eye,empty),/取得 Lv.1/);
  pickup.owned=true;assert.match(nearbyPickupHint([pickup],eye,empty),/升至 Lv.2・彈匣補滿/);
  pickup.state={level:3,ammo:4};assert.match(nearbyPickupHint([pickup],eye,empty),/彈匣補滿/);
  pickup.state.ammo=45;assert.match(nearbyPickupHint([pickup],eye,empty),/快速換彈 8 秒/);
  pickup.available=false;assert.equal(nearbyPickupHint([pickup],eye,empty),'');pickup.available=true;
  assert.equal(nearbyPickupHint([{...pickup,position:{x:0,y:.9,z:-9}}],eye,empty),'');
  const wall={...empty,boxes:[{minX:-2,maxX:2,minY:0,maxY:5,minZ:-3,maxZ:-2,color:0}]};assert.equal(nearbyPickupHint([pickup],eye,wall),'');
});
test('appearance changes only preallocated parts and distinguishes all levels',()=>{
  const gun=new T.Group(),appearance=new WeaponAppearance(gun),count=gun.children.length;
  appearance.update('smg',1);assert.equal(gun.children.filter(c=>c.visible).length,0);
  appearance.update('smg',2);assert.equal(gun.children.filter(c=>c.visible).length,2);
  appearance.update('smg',3);assert.equal(gun.children.filter(c=>c.visible).length,4);
  appearance.update('sniper',3);assert.equal(gun.children.length,count);
});
test('muzzle follows camera, recoil and the longer sniper barrel in the same frame',()=>{
  const camera=new T.PerspectiveCamera(),gun=new T.Group(),flash=new T.Object3D();camera.add(gun);gun.add(flash);
  camera.position.set(12,3,-7);camera.rotation.set(.2,.7,0);gun.rotation.set(.03,.01,0);
  for(const id of WEAPON_IDS){
    const result=weaponMuzzle(flash,id);
    assert.equal(flash.position.z,id==='sniper'?-1.95:-1.3);
    const expected=new T.Vector3(.34,-.25,flash.position.z).applyMatrix4(gun.matrixWorld);
    assert.ok(result.distanceTo(expected)<1e-8);
    camera.position.x+=2;const moved=weaponMuzzle(flash,id);assert.ok(moved.distanceTo(result.clone().add(new T.Vector3(2,0,0)))<1e-8);
  }
});
for(const id of WEAPON_IDS.filter(id=>id!=='flame'))test(`${id}: local tracer remains attached to moving muzzle and confirmation does not duplicate it`,()=>{
  const scene=new T.Scene(),effects=new WeaponEffects(scene,true),origin=new T.Vector3(0,1.65,0),muzzle=new T.Vector3(.34,1.4,-1.3);
  const result=resolveShot(id,origin.toArray() as [number,number,number],[0,0,-1],[],()=>.5,empty);
  const shot={...result,eventId:'test',id:'player',weapon:id,origin:origin.toArray() as [number,number,number],dir:[0,0,-1] as [number,number,number]};
  effects.play(shot,muzzle,true,true,true,false);
  const beams:T.Mesh[]=[];scene.traverse(o=>{if(o instanceof T.Mesh&&o.geometry.type==='CylinderGeometry'&&o.visible)beams.push(o);});
  const expectedMain=(WEAPON_SPECS[id].pellets??1)*2;assert.ok(beams.length>=expectedMain);
  muzzle.x+=1;origin.x+=1;effects.updateLocalMuzzle(muzzle,id,origin,empty);scene.updateMatrixWorld(true);
  for(const mesh of beams.slice(0,2)){
    const start=new T.Vector3(0,-.5,0).applyMatrix4(mesh.matrixWorld);assert.ok(start.distanceTo(muzzle)<1e-5);
  }
  let before=0;scene.traverse(o=>{if(o instanceof T.Mesh&&o.visible)before++;});
  effects.play(shot,muzzle,false,true,false);let after=0;scene.traverse(o=>{if(o instanceof T.Mesh&&o.visible)after++;});assert.equal(after,before);
  const wall={...empty,boxes:[{minX:-10,maxX:10,minY:0,maxY:5,minZ:-.8,maxZ:-.6,color:0}]};
  effects.updateLocalMuzzle(muzzle,id,origin,wall);assert.ok(beams.slice(0,2).every(m=>!m.visible));
  effects.dispose();
});
test('local flame starts at current muzzle, clips walls, retains a short tail and disposes',()=>{
  const scene=new T.Scene(),effects=new WeaponEffects(scene,true),eye=new T.Vector3(0,1.65,0),muzzle=new T.Vector3(.34,1.4,-1.3),direction=new T.Vector3(0,0,-1);
  effects.localFlame(true,muzzle,eye,direction,empty,.04);
  const meshes: T.Mesh[]=[];scene.traverse(o=>{if(o instanceof T.Mesh&&o.geometry.type==='CylinderGeometry'&&o.visible)meshes.push(o);});
  assert.equal(meshes.length,5);
  const start=(mesh:T.Mesh)=>new T.Vector3(0,-.5,0).applyMatrix4(mesh.matrixWorld);
  scene.updateMatrixWorld(true);assert.ok(start(meshes[0]).distanceTo(muzzle)<1e-5);
  eye.x+=2;muzzle.x+=2;direction.set(1,0,0);effects.localFlame(true,muzzle,eye,direction,empty,.04);scene.updateMatrixWorld(true);assert.ok(start(meshes[0]).distanceTo(muzzle)<1e-5);
  effects.localFlame(false,muzzle,eye,direction,empty,.01);effects.update(.2);assert.equal(meshes[0].visible,false);
  const wall={...empty,boxes:[{minX:-10,maxX:10,minY:0,maxY:5,minZ:-.8,maxZ:-.6,color:0}]};
  effects.localFlame(true,muzzle,eye,new T.Vector3(0,0,-1),wall,.04);assert.ok(meshes.every(m=>!m.visible));effects.dispose();assert.equal(scene.children.length,0);
});

test('pickup feedback deduplicates, bounds its queue, uses device hints and releases DOM',()=>{
  class Element {
    className='';hidden=false;dataset:Record<string,string>={};children:Element[]=[];textContent='';removed=false;
    style={setProperty:()=>{}};setAttribute(){}
    append(...elements:Element[]){this.children.push(...elements);}
    replaceChildren(){this.children=[];}remove(){this.removed=true;}
    text():string{return this.textContent+this.children.map(c=>c.text()).join('');}
  }
  const previous=Object.getOwnPropertyDescriptor(globalThis,'document');
  Object.defineProperty(globalThis,'document',{configurable:true,value:{createElement:()=>new Element()}});
  try{
    const root=new Element(),ui=new PickupFeedback(root as unknown as HTMLElement,false);
    const unlocked=collectWeapon('smg',createWeaponStates().smg,false)!;
    ui.push(unlocked,'event-1');const card=root.children[0];assert.match(card.text(),/Q/);assert.equal(card.hidden,false);
    ui.push(unlocked,'event-1');ui.update(2.01);assert.equal(card.hidden,true,'duplicate must not replay');
    const state=createWeaponStates().ar,upgrade=collectWeapon('ar',state,true)!;
    ui.push(upgrade);assert.equal(card.dataset.level,'2');assert.match(card.text(),/30 → 38/);
    for(let n=0;n<5;n++)ui.push(unlocked,`queued-${n}`);
    for(let n=0;n<4;n++)ui.update(2.01);assert.equal(card.hidden,true,'at most three queued notifications');
    ui.dispose();assert.equal(card.removed,true);
    const mobile=new PickupFeedback(root as unknown as HTMLElement,true);mobile.push(unlocked);assert.ok(!root.children[1].text().includes('Q'));mobile.dispose();
  }finally{if(previous)Object.defineProperty(globalThis,'document',previous);else Reflect.deleteProperty(globalThis,'document');}
});

function event(socket:Socket,name:string,predicate:(value:any)=>boolean=()=>true):Promise<any>{
  return new Promise((resolve,reject)=>{const timer=setTimeout(()=>{socket.off(name,receive);reject(Error(`Timed out ${name}`));},5000);const receive=(value:any)=>{if(predicate(value)){clearTimeout(timer);socket.off(name,receive);resolve(value);}};socket.on(name,receive);});
}
test('network: empty AR auto reloads without input; snapshots and reconnect retain weapon state',async()=>{
  const server=createGameServer();await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const url=`http://127.0.0.1:${address.port}`,sockets:Socket[]=[];
  const open=async()=>{const socket=connect(url,{transports:['websocket'],autoConnect:false,reconnection:false});sockets.push(socket);const ready=event(socket,'connect');socket.connect();await ready;return socket;};
  try{
    const a=await open(),b=await open(),seat=await a.emitWithAck('room:create','Tester A');await b.emitWithAck('room:join',{code:seat.code,name:'Tester B'});
    const started=event(a,'match:snapshot');await a.emitWithAck('game:start');const snapshot=await started;
    assert.ok(snapshot.pickups.some((p:any)=>p.id==='ar'));
    const player=(s:any)=>s.players.find((p:any)=>p.id===seat.playerId);
    for(let i=0;i<30;i++){
      const shot=event(a,'match:shot',s=>s.id===seat.playerId);a.emit('match:fire',{roundId:snapshot.roundId,clientTime:Date.now()});await shot;
      if(i<29)await new Promise(resolve=>setTimeout(resolve,120));
    }
    const emptySnapshot=await event(a,'match:snapshot',s=>player(s).weapons.ar.ammo===0);
    assert.ok(player(emptySnapshot).weapons.ar.reloadUntil>Date.now());
    const filled=await event(a,'match:snapshot',s=>player(s).weapons.ar.ammo===30);assert.equal(player(filled).weapons.ar.reloadUntil,0);
    const c=await open(),replayed:any[]=[];c.on('match:pickup',e=>replayed.push(e));const restored=await c.emitWithAck('room:resume',seat);
    assert.deepEqual(restored.room.players.find((p:any)=>p.id===seat.playerId).weapons,player(filled).weapons);assert.equal(replayed.length,0);
  }finally{for(const socket of sockets)socket.disconnect();server.close();}
});
