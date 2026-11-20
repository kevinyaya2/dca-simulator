import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import * as T from 'three';
import { WardenCombatFx } from '../src/chroma-ops/boss/WardenCombatFx.ts';
import { VoidWarden } from '../src/chroma-ops/boss/VoidWarden.ts';
import { WardenInfectionBurst } from '../src/chroma-ops/boss/WardenInfectionBurst.ts';
import { disposeResources } from '../src/chroma-ops/systems/DisposeResources.ts';
import { navigationGraph, navigationPath, type NavPoint } from '../shared/navigation.ts';
import { WARDEN_ATTACKS, type WardenAttack, type WardenAttackKind } from '../shared/voidWarden.ts';

const bladeBase=new T.Vector3(12,2,8),bladeTip=new T.Vector3(14,1,10);
function attack(kind:WardenAttackKind,scale=1):WardenAttack{
  return {kind,scale,startedAt:1000,rate:1,from:{x:12,y:0,z:8},to:{x:12,y:0,z:18},yaw:.4,jumpHeight:0,
    rays:Array.from({length:10},(_,i)=>({x:12+Math.sin(i*Math.PI/5)*13,y:0,z:8+Math.cos(i*Math.PI/5)*13}))};
}

test('attack geometry keeps the pre-optimization vertices, colors and opacity',()=>{
  const hash=createHash('sha256');
  for(const coarse of [false,true])for(const scale of [1,3,100])for(const kind of Object.keys(WARDEN_ATTACKS) as WardenAttackKind[]){
    const fx=new WardenCombatFx(coarse),move=attack(kind,scale);
    const mesh=fx.group.children[0] as T.Mesh;
    for(let elapsed=0;elapsed<WARDEN_ATTACKS[kind].duration+300;elapsed+=37){
      fx.update(move,1000+elapsed,false,bladeBase,bladeTip);
      const count=mesh.geometry.drawRange.count;
      hash.update(String(count));
      for(const name of ['position','color','strength']){
        const attribute=mesh.geometry.getAttribute(name);
        hash.update(JSON.stringify(Array.from(attribute.array.slice(0,count*attribute.itemSize))));
      }
    }
    fx.dispose();
  }
  assert.equal(hash.digest('hex'),'d094dac488cbc6cdef7fecc84c4f6f4aaf549edee267b606a705fafb3d17e64c');
});

test('model poses keep pre-optimization world transforms including feet and blade',()=>{
  const model=new VoidWarden(),hash=createHash('sha256');
  const parent=new T.Group();parent.position.set(5,2,-8);parent.rotation.y=.7;parent.scale.setScalar(1.2);parent.add(model.group);
  for(const scale of [1,3])for(const rage of [false,true])for(let t=0;t<5400;t+=73){
    model.group.position.set(12,0,8);model.group.rotation.y=t*.001;model.group.scale.setScalar(scale);
    for(const pose of [()=>model.entrancePose(t),()=>model.pose('walk',t/1000,rage),
      ...(['slash','dash','leap','burst'] as const).map(kind=>()=>model.combatPose(kind,t,rage)),
      ()=>model.selfStabPose(t),()=>model.collapsePose(t,false),()=>model.collapsePose(t,true)]){
      pose();model.updateParticles(t/1000,rage?t/1000:null,false);
      parent.updateWorldMatrix(true,true);
      model.group.traverse(object=>hash.update(JSON.stringify(object.matrixWorld.elements.map(n=>Math.round(n*1e8)))));
    }
  }
  model.dispose();
  assert.equal(hash.digest('hex'),'4718ccf3b6dfe3452661e88dd2944e9773eaef30576fe7b4857afa49e52dafad');
});

test('idle effects draw nothing and active effects upload only their live vertices',()=>{
  const fx=new WardenCombatFx(false),mesh=fx.group.children[0] as T.Mesh,bolts=fx.group.children[1] as T.InstancedMesh;
  try{
    assert.equal(mesh.geometry.drawRange.count,0);
    const attributes=['position','color','strength'].map(name=>mesh.geometry.getAttribute(name) as T.BufferAttribute);
    const versions=()=>attributes.map(attribute=>attribute.version);
    const idle=versions();fx.update(null,0,false,bladeBase,bladeTip);assert.deepEqual(versions(),idle);
    fx.update(attack('burst'),1900,false,bladeBase,bladeTip);
    const count=mesh.geometry.drawRange.count;assert.ok(count>0&&count<=5000);
    for(const attribute of attributes)assert.deepEqual(attribute.updateRanges,[{start:0,count:count*attribute.itemSize}]);
    assert.equal(bolts.count,10);
    assert.deepEqual(bolts.instanceMatrix.updateRanges,[{start:0,count:160}]);
    const active=versions(),boltVersion=bolts.instanceMatrix.version;
    fx.update(null,2000,false,bladeBase,bladeTip);
    assert.equal(mesh.geometry.drawRange.count,0);assert.equal(bolts.count,0);assert.deepEqual(versions(),active);
    assert.equal(bolts.instanceMatrix.version,boltVersion);
    fx.update(attack('slash'),1500,false,bladeBase,bladeTip);
    assert.ok(mesh.geometry.drawRange.count>0);assert.ok(versions().every((version,i)=>version>active[i]));
  }finally{fx.dispose();}
});

test('navigation memoizes directed checks only within one search',()=>{
  const nodes=navigationGraph(true),original=nodes.slice();
  // Tiny isolated graph with repeated edges makes repeated clearance queries deterministic.
  const a={x:0,y:0,z:0,edges:[1,1,2]},b={x:8,y:0,z:0,edges:[0,0]},c={x:16,y:0,z:0,edges:[]};
  nodes.splice(0,nodes.length,a,b,c);
  try{
    const from={x:-1,y:0,z:0},to={x:17,y:0,z:0};
    let blocked=true;
    const calls=new Map<NavPoint,Map<NavPoint,number>>();
    const canWalk=(start:NavPoint,end:NavPoint)=>{
      let row=calls.get(start);if(!row){row=new Map();calls.set(start,row);}row.set(end,(row.get(end)??0)+1);
      if(start===from)return end===a;
      if(start===to)return end===c;
      if(start===a&&end===c)return !blocked;
      return start===a&&end===b||start===c&&end===to;
    };
    assert.deepEqual(navigationPath(from,to,canWalk,false,true),[]);
    assert.equal(calls.get(a)?.get(b),1);assert.equal(calls.get(a)?.get(c),1);
    calls.clear();blocked=false;
    assert.deepEqual(navigationPath(from,to,canWalk,false,true),[a,c,to]);
    assert.equal(calls.get(a)?.get(c),1);
  }finally{nodes.splice(0,nodes.length,...original);}
});

test('infection shards upload only live particles and stop while hidden',()=>{
  const burst=new WardenInfectionBurst(),mesh=burst.group.children[0] as T.Mesh;
  try{
    assert.equal(mesh.geometry.drawRange.count,0);
    burst.update(.4,true);
    const count=mesh.geometry.drawRange.count;assert.ok(count>0&&count<=36*6);
    const positions=mesh.geometry.getAttribute('position') as T.BufferAttribute;
    const colors=mesh.geometry.getAttribute('color') as T.BufferAttribute;
    for(const attribute of [positions,colors])assert.deepEqual(attribute.updateRanges,[{start:0,count:count*3}]);
    const versions=[positions.version,colors.version];
    burst.update(null,true);
    assert.equal(burst.group.visible,false);assert.deepEqual([positions.version,colors.version],versions);
  }finally{disposeResources(burst.group);}
});
