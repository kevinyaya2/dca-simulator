import test from 'node:test';
import assert from 'node:assert/strict';
import { damageAtDistance, intersectCharacter, resolveShot, KillTracker, type Combatant } from '../shared/combat';
import { rayWallDistance, stepPlayer, type SimWorld } from '../shared/arena';
const empty:SimWorld={boxes:[],heightAt:()=>0};
const target=(id='enemy',x=0,z=-10,y=1.65,yaw=0):Combatant=>({id,x,z,y,yaw,alive:true});
const center=()=>.5;
const box=(minX:number,maxX:number,minZ:number,maxZ:number,minY=0,maxY=4)=>({minX,maxX,minZ,maxZ,minY,maxY,color:0});
test('linear falloff boundaries and head multiplier',()=>{
  assert.equal(damageAtDistance('ar',40),28);assert.equal(damageAtDistance('ar',100),21);assert.equal(damageAtDistance('ar',160),14);assert.equal(damageAtDistance('ar',420,true),28);
  assert.equal(damageAtDistance('smg',12),22);assert.equal(damageAtDistance('smg',36),14);assert.equal(damageAtDistance('smg',60),7);assert.equal(damageAtDistance('smg',420),7);
  assert.equal(damageAtDistance('flame',0,true),20);assert.equal(damageAtDistance('rocket',0,true),100);
});
test('head and body match model, rotate and follow airborne feet',()=>{
  assert.equal(intersectCharacter([0,1.92,0],[0,0,-1],target(),20)?.kind,'head');
  assert.equal(intersectCharacter([0,1.22,0],[0,0,-1],target(),20)?.kind,'body');
  assert.equal(intersectCharacter([.5,1.22,0],[0,0,-1],target(),20)?.kind,'body');
  assert.equal(intersectCharacter([.5,1.22,0],[0,0,-1],target('e',0,-10,1.65,Math.PI/2),20),undefined);
  assert.equal(intersectCharacter([0,4.92,0],[0,0,-1],target('e',0,-10,4.65),20)?.kind,'head');
});
test('closest target or wall stops hits; distant targets do not get wider',()=>{
  const result=resolveShot('ar',[0,1.22,0],[0,0,-1],[target('far',0,-40),target('near')],center,empty);
  assert.equal(result.hits[0].targetId,'near');assert.equal(result.rays[0].kind,'body');
  const blocked=resolveShot('ar',[0,1.22,0],[0,0,-1],[target()],center,{...empty,boxes:[box(-2,2,-6,-5)]});assert.equal(blocked.hits.length,0);assert.equal(blocked.rays[0].end[2],-5);
  assert.equal(resolveShot('ar',[0,1.22,0],[0,0,-1],[target('far',2,-300)],center,empty).hits.length,0);
  assert.equal(resolveShot('ar',[0,1.22,0],[0,0,-1],[target('far',0,-300)],center,empty).hits[0].damage,14);
});
test('shotgun head pellets aggregate to a single hit',()=>{
  const result=resolveShot('shotgun',[0,1.92,0],[0,0,-1],[target()],center,empty);
  assert.equal(result.rays.length,10);assert.equal(result.hits.length,1);assert.equal(result.hits[0].damage,200);assert.equal(result.hits[0].headshot,true);
});
test('flame cone hits several targets once, fades at edges and respects range/walls',()=>{
  const result=resolveShot('flame',[0,1.22,0],[0,0,-1],[target('a',0,-8),target('b',1.6,-10),target('outside',5,-8),target('far',0,-13)],center,empty);
  assert.deepEqual(result.hits.map(h=>h.targetId),['a','b']);assert.equal(result.hits[0].damage,20);assert.ok(result.hits[1].damage<20);assert.equal(result.hits[0].headshot,false);
  const blocked=resolveShot('flame',[0,1.22,0],[0,0,-1],[target()],center,{...empty,boxes:[box(-10,10,-6,-5)]});assert.equal(blocked.hits.length,0);assert.ok(blocked.rays.every(r=>r.end[2]>=-5.0001));
});
test('rocket direct damage is not doubled; splash is occluded and expires harmlessly at range',()=>{
  const result=resolveShot('rocket',[0,1.22,0],[0,0,-1],[target('direct'),target('near',2,-10)],center,empty);
  assert.equal(result.hits.find(h=>h.targetId==='direct')?.damage,100);assert.ok(result.hits.find(h=>h.targetId==='near'));
  const w={...empty,boxes:[box(.8,1.2,-12,-8)]};assert.equal(resolveShot('rocket',[0,1.22,0],[0,0,-1],[target('direct'),target('near',2,-10)],center,w).hits.length,1);
  assert.equal(resolveShot('rocket',[0,1.22,0],[0,0,-1],[target('far',0,-54)],center,empty).hits.length,0);
});
test('analytic walls handle parallel rays, raised cover, origin inside and terrain',()=>{
  const w={...empty,boxes:[box(-1,1,-101,-100)]};assert.equal(rayWallDistance({x:0,y:1,z:0},{x:0,y:0,z:-1},420,w),100);
  assert.equal(rayWallDistance({x:2,y:1,z:0},{x:0,y:0,z:-1},420,w),420);
  assert.equal(rayWallDistance({x:0,y:5,z:0},{x:0,y:0,z:-1},420,w),420);
  assert.equal(rayWallDistance({x:0,y:1,z:-100.5},{x:0,y:0,z:-1},420,w),0);
  assert.ok(rayWallDistance({x:0,y:1,z:0},{x:0,y:0,z:-1},20,{...empty,heightAt:(_x,z)=>z<-5?2:0})<5.2);
});
test('slowing movement preserves jump and gravity',()=>{
  const state={x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,alive:true};const slow={...state};const input={moveX:1,moveY:0,lookX:0,lookY:0,jump:true};stepPlayer(state,input,.1,empty);stepPlayer(slow,input,.1,empty,.65);assert.equal(slow.y,state.y);assert.equal(slow.velocityY,state.velocityY);assert.ok(Math.abs(slow.x/state.x-.65)<1e-8);
});
test('multikill 4 second inclusive boundary, survival milestones and reset',()=>{
  const tracker=new KillTracker('test'),attacker={id:'a',name:'A',alive:true};const kill=(at:number)=>tracker.record(attacker,{id:'b',name:'B'},'ar',true,at);
  assert.equal(kill(0).multi,1);assert.equal(kill(4000).multi,2);const third=kill(8000);assert.equal(third.multi,3);assert.equal(third.title,'勢如破竹');assert.equal(kill(12001).multi,1);assert.equal(kill(12002).title,'大殺特殺');
  tracker.death('a');assert.equal(kill(12003).streak,1);tracker.reset();assert.equal(kill(12004).multi,1);
});
test('posthumous kills have no streak; tenth milestone and event IDs survive round reset',()=>{
  const tracker=new KillTracker('round'),a={id:'a',name:'A',alive:true};let event;
  for(let i=0;i<10;i++)event=tracker.record(a,{id:'b',name:'B'},'ar',false,i*100);
  assert.equal(event?.title,'戰場主宰');assert.equal(event?.streak,10);const old=event!.eventId;tracker.reset();assert.notEqual(tracker.record(a,{id:'b',name:'B'},'ar',false,1200).eventId,old);
  tracker.death('a');const post=tracker.record({...a,alive:false},{id:'b',name:'B'},'flame',false,1300);assert.equal(post.streak,0);assert.equal(post.multi,0);
});

test('eye-height neck gap is a body hit, not an accidental headshot',()=>{
  const result=resolveShot('ar',[0,1.65,0],[0,0,-1],[target()],center,empty);
  assert.equal(result.hits[0].headshot,false);assert.equal(result.hits[0].damage,28);
});
