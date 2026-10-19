import test from 'node:test';
import assert from 'node:assert/strict';
import { InputManager } from '../src/chroma-ops/input/InputManager.ts';
import { DesktopInput } from '../src/chroma-ops/input/DesktopInput.ts';
import { MobileInput } from '../src/chroma-ops/input/MobileInput.ts';

class Element extends EventTarget {
  style={setProperty:()=>{}};
  tabIndex=0;
  constructor(private selector=''){super();}
  closest(selector:string){return this.selector&&selector.includes(this.selector)?this:null;}
  matches(selector:string){return selector===this.selector;}
  querySelector(){return null;}
  getBoundingClientRect(){return {left:0,top:0,width:844,height:390};}
  setPointerCapture(){}
  focus(){}
}
function dispatch(target:EventTarget,type:string,properties:Record<string,unknown>={}) {
  const event=new Event(type,{cancelable:true});
  for(const [key,value] of Object.entries(properties))Object.defineProperty(event,key,{value});
  target.dispatchEvent(event);return event;
}
function withDOM(run:(root:Element,win:EventTarget,doc:EventTarget&{pointerLockElement:Element|null;hidden:boolean})=>void){
  const names=['window','document','HTMLElement'];
  const previous=names.map(name=>Object.getOwnPropertyDescriptor(globalThis,name));
  const root=new Element(),win=Object.assign(new EventTarget(),{PointerEvent:Event}),doc=Object.assign(new EventTarget(),{pointerLockElement:root as Element|null,hidden:false});
  Object.defineProperty(globalThis,'window',{value:win,configurable:true});
  Object.defineProperty(globalThis,'document',{value:doc,configurable:true});
  Object.defineProperty(globalThis,'HTMLElement',{value:Element,configurable:true});
  try{run(root,win,doc);}finally{names.forEach((name,index)=>{if(previous[index])Object.defineProperty(globalThis,name,previous[index]!);else Reflect.deleteProperty(globalThis,name);});}
}

test('desktop Shift, held right click, hotkey 7 and focus loss do not leave sticky actions',()=>withDOM((root,win,doc)=>{
  let resets=0;const input=new InputManager(()=>resets++),desktop=new DesktopInput(root as unknown as HTMLElement,input);
  dispatch(win,'keydown',{key:'w'});desktop.update();assert.equal(input.getState().moveY,1);
  dispatch(root,'mousedown',{button:2});assert.equal(input.aiming,true);
  dispatch(win,'keydown',{key:'Shift'});desktop.update();assert.equal(input.sprinting,true);assert.equal(input.aiming,false);
  dispatch(win,'keyup',{key:'Shift'});desktop.update();assert.equal(input.sprinting,false);assert.equal(input.aiming,false);
  dispatch(root,'mouseup',{button:2});dispatch(root,'mousedown',{button:2});assert.equal(input.aiming,true);
  dispatch(win,'keydown',{key:'7'});assert.equal(input.getState().switchWeapon,7);assert.equal(input.aiming,false);
  assert.equal(dispatch(root,'contextmenu').defaultPrevented,true);
  dispatch(root,'mousedown',{button:0});dispatch(win,'blur');assert.equal(input.getState().shoot,false);assert.ok(resets>0);
  doc.pointerLockElement=null;dispatch(doc,'pointerlockchange');desktop.update();assert.equal(input.getState().moveY,0);
  desktop.dispose();
}));

test('touch can move, look and fire together; aim and sprint toggle independently of finger release',()=>withDOM((root,_win,doc)=>{
  const input=new InputManager(),mobile=new MobileInput(root as unknown as HTMLElement,input);
  const aim=new Element('[data-aim]'),sprint=new Element('[data-sprint]'),fire=new Element('[data-fire]');
  const down=(id:number,x:number,y:number,target:Element=root)=>dispatch(root,'pointerdown',{pointerId:id,clientX:x,clientY:y,target});
  down(1,90,280);dispatch(root,'pointermove',{pointerId:1,clientX:120,clientY:250});
  down(2,680,290,aim);dispatch(root,'pointerup',{pointerId:2});assert.equal(input.aiming,true);
  down(3,780,310,fire);down(4,500,100);dispatch(root,'pointermove',{pointerId:4,clientX:520,clientY:110});
  const state=input.getState();assert.ok(state.moveX>0&&state.moveY>0);assert.equal(state.shoot,true);assert.equal(state.lookX,40);assert.equal(state.lookY,20);
  down(5,630,290,sprint);dispatch(root,'pointerup',{pointerId:5});assert.equal(input.sprinting,true);assert.equal(input.aiming,false);
  dispatch(root,'pointercancel',{pointerId:3});assert.equal(input.getState().shoot,false);
  dispatch(root,'pointerup',{pointerId:1});assert.equal(input.getState().moveX,0);assert.equal(input.sprinting,true);
  doc.hidden=true;dispatch(doc,'visibilitychange');assert.equal(input.sprinting,false);assert.equal(input.aiming,false);
  mobile.dispose();
}));

test('opening the armory or disabling touch clears held aim, sprint and shooting',()=>withDOM((root)=>{
  let resets=0;const input=new InputManager(()=>resets++),mobile=new MobileInput(root as unknown as HTMLElement,input);
  input.set({sprint:true,shoot:true,moveX:1});dispatch(root,'combat:reset');assert.equal(resets,1);assert.equal(input.sprinting,false);assert.equal(input.getState().shoot,false);
  input.set({aim:true});mobile.setEnabled(false);assert.equal(resets,2);assert.equal(input.aiming,false);
  mobile.dispose();
}));
