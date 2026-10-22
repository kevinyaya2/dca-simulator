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
  dispatch(win,'keydown',{key:'Shift'});desktop.update();assert.equal(input.sprinting,true);assert.equal(input.aiming,true);
  dispatch(win,'keyup',{key:'Shift'});desktop.update();assert.equal(input.sprinting,false);assert.equal(input.aiming,true);
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
  down(5,630,290,sprint);dispatch(root,'pointerup',{pointerId:5});assert.equal(input.sprinting,true);assert.equal(input.aiming,true);
  down(6,680,290,aim);dispatch(root,'pointerup',{pointerId:6});assert.equal(input.aiming,false);assert.equal(input.sprinting,true);
  down(7,680,290,aim);dispatch(root,'pointerup',{pointerId:7});assert.equal(input.aiming,true);assert.equal(input.sprinting,true);
  dispatch(root,'pointercancel',{pointerId:3});assert.equal(input.getState().shoot,false);
  dispatch(root,'pointerup',{pointerId:1});assert.equal(input.getState().moveX,0);assert.equal(input.sprinting,true);
  doc.hidden=true;dispatch(doc,'visibilitychange');assert.equal(input.sprinting,false);assert.equal(input.aiming,false);
  mobile.dispose();
}));

test('a full reset or disabling touch clears held aim, sprint and shooting',()=>withDOM((root)=>{
  let resets=0;const input=new InputManager(()=>resets++),mobile=new MobileInput(root as unknown as HTMLElement,input);
  input.set({sprint:true,shoot:true,moveX:1});dispatch(root,'combat:reset');assert.equal(resets,1);assert.equal(input.sprinting,false);assert.equal(input.getState().shoot,false);
  input.set({aim:true});mobile.setEnabled(false);assert.equal(resets,2);assert.equal(input.aiming,false);
  mobile.dispose();
}));

test('desktop movement and sprint continue through armory open, selection and close',()=>withDOM((root,win)=>{
  const input=new InputManager(),desktop=new DesktopInput(root as unknown as HTMLElement,input);
  dispatch(win,'keydown',{key:'w'});dispatch(win,'keydown',{key:'Shift'});desktop.update();
  input.set({shoot:true});
  let open=true;root.querySelector=()=>open?({} as any):null;
  dispatch(root,'armory:open');desktop.update();
  let state=input.getState();assert.equal(state.moveY,1);assert.equal(state.sprint,true);assert.equal(state.shoot,false);
  dispatch(win,'keyup',{key:'w'});desktop.update();assert.equal(input.getState().moveY,0);
  dispatch(win,'keydown',{key:'w',target:new Element('button')});desktop.update();assert.equal(input.getState().moveY,1);
  open=false;desktop.update();state=input.getState();assert.equal(state.moveY,1);assert.equal(state.sprint,true);
  dispatch(win,'keyup',{key:'w'});dispatch(win,'keyup',{key:'Shift'});desktop.update();assert.equal(input.getState().moveY,0);assert.equal(input.sprinting,false);
  desktop.dispose();
}));

test('touch joystick stays captured and responsive while the armory is open',()=>withDOM((root)=>{
  let resets=0;const input=new InputManager(()=>resets++),mobile=new MobileInput(root as unknown as HTMLElement,input);
  dispatch(root,'pointerdown',{pointerId:1,clientX:90,clientY:280});
  dispatch(root,'pointermove',{pointerId:1,clientX:110,clientY:260});
  input.set({sprint:true,shoot:true});root.querySelector=()=>({} as any);
  dispatch(root,'armory:open');
  assert.ok(input.getState().moveY>0);assert.equal(input.sprinting,true);assert.equal(input.getState().shoot,false);assert.equal(resets,0);
  dispatch(root,'pointermove',{pointerId:1,clientX:120,clientY:240});
  assert.ok(input.getState().moveY>.7,'the existing joystick finger must still update movement');
  dispatch(root,'pointerup',{pointerId:1});assert.equal(input.getState().moveY,0);
  mobile.dispose();
}));

test('touch fallback keeps a held joystick responsive while browsing weapons',()=>withDOM((root,win)=>{
  Object.assign(win,{PointerEvent:undefined});
  const input=new InputManager(),mobile=new MobileInput(root as unknown as HTMLElement,input);
  dispatch(root,'touchstart',{changedTouches:[{identifier:1,clientX:90,clientY:280}]});
  dispatch(root,'touchmove',{changedTouches:[{identifier:1,clientX:110,clientY:260}]});
  root.querySelector=()=>({} as any);dispatch(root,'armory:open');
  dispatch(root,'touchmove',{changedTouches:[{identifier:1,clientX:120,clientY:240}]});
  assert.ok(input.getState().moveY>.7);
  dispatch(root,'touchend',{changedTouches:[{identifier:1}]});assert.equal(input.getState().moveY,0);
  mobile.dispose();
}));
