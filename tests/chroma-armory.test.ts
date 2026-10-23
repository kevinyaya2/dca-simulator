import test from 'node:test';
import assert from 'node:assert/strict';
import { Armory } from '../src/chroma-ops/ui/Armory.ts';
import { WEAPON_IDS, type WeaponId, type WeaponLevel } from '../shared/weapons.ts';

class UI extends EventTarget {
  dataset:Record<string,string>={};children:UI[]=[];parent:UI|null=null;hidden=false;textContent='';
  attributes=new Map<string,string>();classList={toggle:()=>{}};
  constructor(public kind:string){super();}
  append(child:UI){child.parent=this;this.children.push(child);}
  contains(child:UI):boolean{return child===this||this.children.some(c=>c.contains(child));}
  closest(selector:string){if(selector==='[data-armory]'&&this.dataset.armory)return this;return this.parent?.closest(selector)??null;}
  querySelector(selector:string):UI|null{return this.children.find(c=>c.kind===selector)??null;}
  setAttribute(key:string,value:string){this.attributes.set(key,value);}
  insertAdjacentHTML(){}
  set innerHTML(_value:string){if(this.kind!=='.co-armory-track')return;this.children=[];for(const id of WEAPON_IDS){const card=new UI('button');card.dataset.armory=id;card.append(new UI('small'));card.append(new UI('.co-level'));card.append(new UI('em'));card.append(new UI('.co-weapon-stats'));this.append(card);}}
  scrollIntoView(){}
  remove(){}
}
function dispatch(target:EventTarget,type:string,properties:Record<string,unknown>={}){
  const event=new Event(type,{cancelable:true});for(const [key,value] of Object.entries(properties))Object.defineProperty(event,key,{value});target.dispatchEvent(event);return event;
}
function fixture(run:(f:{armory:Armory;root:UI;box:UI;track:UI;win:EventTarget;chosen:WeaponId[];levels:Partial<Record<WeaponId,WeaponLevel>>})=>void,touch=false){
  const names=['window','HTMLElement','matchMedia','navigator','requestAnimationFrame','document'];
  const previous=names.map(n=>Object.getOwnPropertyDescriptor(globalThis,n));
  const win=Object.assign(new EventTarget(),{PointerEvent:touch?undefined:Event});
  const values=[win,UI,()=>({matches:touch}),{maxTouchPoints:touch?1:0},(cb:()=>void)=>cb(),{pointerLockElement:null}];
  names.forEach((n,i)=>Object.defineProperty(globalThis,n,{value:values[i],configurable:true}));
  const root=new UI('root'),box=new UI('.co-armory'),track=new UI('.co-armory-track'),chosen:WeaponId[]=[];
  root.append(box);box.append(track);
  const levels:Partial<Record<WeaponId,WeaponLevel>>={};
  const armory=new Armory(root as unknown as HTMLElement,id=>chosen.push(id),()=>new Set<WeaponId>(['ar','sniper']),undefined,id=>levels[id]??1);
  try{armory.toggle();run({armory,root,box,track,win,chosen,levels});}finally{armory.dispose();names.forEach((n,i)=>{if(previous[i])Object.defineProperty(globalThis,n,previous[i]!);else Reflect.deleteProperty(globalThis,n);});}
}
function pointer(root:UI,win:EventTarget,target:UI,move=0,cancel=false){
  dispatch(root,'pointerdown',{pointerId:2,button:0,clientX:100,clientY:100,target});
  dispatch(win,'pointermove',{pointerId:2,clientX:100+move,clientY:100,target});
  dispatch(win,cancel?'pointercancel':'pointerup',{pointerId:2,clientX:100+move,clientY:100,target});
  return dispatch(root,'click',{target});
}

test('locked weapons remain scrollable and tapping one never equips or closes',()=>fixture(({armory,root,track,win,chosen})=>{
  const locked=track.children[1];assert.equal(locked.attributes.get('aria-disabled'),'true');assert.equal('disabled' in locked,false);
  pointer(root,win,locked);assert.equal(armory.isOpen,true);assert.deepEqual(chosen,[]);
}));
test('dragging owned, locked or empty track space suppresses the generated click',()=>fixture(({armory,root,track,win,chosen})=>{
  for(const node of [track.children[0],track.children[1],track]){
    pointer(root,win,node,40);assert.equal(armory.isOpen,true);assert.deepEqual(chosen,[]);
  }
  pointer(root,win,track.children[6]);assert.equal(armory.isOpen,false);assert.deepEqual(chosen,['sniper']);
}));
test('cancelled gestures cannot select; outside taps close without firing and do not swallow the next tap',()=>fixture(({armory,root,track,win,chosen})=>{
  pointer(root,win,track.children[0],0,true);assert.equal(armory.isOpen,true);assert.deepEqual(chosen,[]);
  let clicks=0;root.addEventListener('click',()=>clicks++);
  pointer(root,win,root);assert.equal(armory.isOpen,false);assert.equal(clicks,0);
  pointer(root,win,root);assert.equal(clicks,1);
}));
test('touch fallback preserves panel swipes, ignores an existing joystick finger and equips on a new tap',()=>fixture(({armory,root,track,win,chosen})=>{
  const card=track.children[0],locked=track.children[1];
  dispatch(root,'touchstart',{target:locked,changedTouches:[{identifier:2,clientX:100,clientY:100}]});
  dispatch(win,'touchmove',{changedTouches:[{identifier:1,clientX:20,clientY:30},{identifier:2,clientX:30,clientY:100}]});
  dispatch(win,'touchend',{changedTouches:[{identifier:2,clientX:30,clientY:100}]});
  dispatch(root,'click',{target:locked});assert.equal(armory.isOpen,true);assert.deepEqual(chosen,[]);
  dispatch(root,'touchstart',{target:card,changedTouches:[{identifier:3,clientX:100,clientY:100}]});
  dispatch(win,'touchend',{changedTouches:[{identifier:3,clientX:100,clientY:100}]});
  dispatch(root,'click',{target:card});assert.equal(armory.isOpen,false);assert.deepEqual(chosen,['ar']);
},true));

test('armory updates level and actual magazine capacity without changing equipped weapon',()=>fixture(({armory,track,levels,chosen})=>{
  const card=track.children[0],locked=track.children[1];
  assert.equal(card.dataset.level,'1');assert.equal(locked.dataset.level,'0');
  assert.equal(card.querySelector('.co-level')?.textContent,'Lv.1');
  levels.ar=2;armory.render('ar');assert.equal(card.querySelector('em')?.textContent,'38 \u767c\u5f48\u5323');assert.equal(card.dataset.level,'2');
  levels.ar=3;armory.render('ar');assert.equal(card.querySelector('em')?.textContent,'45 \u767c\u5f48\u5323');assert.match(card.querySelector('.co-level')!.textContent,/Lv.3/);
  assert.deepEqual(chosen,[]);
}));

test('pointer locked desktop: wheel selection equips with a left click anywhere, without shooting',()=>fixture(({armory,root,win,chosen})=>{
  Object.defineProperty(document,'pointerLockElement',{value:root,configurable:true});
  dispatch(root,'wheel',{deltaY:-100});
  let leaked=0;root.addEventListener('click',()=>leaked++);
  pointer(root,win,root,40);
  assert.deepEqual(chosen,['sniper']);assert.equal(armory.isOpen,false);assert.equal(leaked,0);
}));
test('pointer locked desktop: clicking locked selection leaves armory open and allows another selection',()=>fixture(({armory,root,win,chosen})=>{
  Object.defineProperty(document,'pointerLockElement',{value:root,configurable:true});
  dispatch(root,'wheel',{deltaY:100});pointer(root,win,root);
  assert.equal(armory.isOpen,true);assert.deepEqual(chosen,[]);
  dispatch(root,'wheel',{deltaY:-100});pointer(root,win,root);
  assert.deepEqual(chosen,['ar']);assert.equal(armory.isOpen,false);
}));
