import test from 'node:test';
import assert from 'node:assert/strict';
import { TacticalBoard } from '../src/chroma-ops/ui/TacticalBoard.ts';
import { MobileInput } from '../src/chroma-ops/input/MobileInput.ts';
import { InputManager } from '../src/chroma-ops/input/InputManager.ts';

class UI extends EventTarget {
  children:UI[]=[];parent:UI|null=null;dataset:Record<string,string>={};hidden=false;textContent='';scrollTop=0;className='';
  attributes=new Map<string,string>();classes=new Set<string>();
  classList={toggle:(key:string,value:boolean)=>value?this.classes.add(key):this.classes.delete(key),remove:(key:string)=>this.classes.delete(key)};
  style={setProperty:()=>{},removeProperty:()=>{}};
  constructor(public tag='div'){super();}
  append(...items:UI[]){for(const item of items){item.remove();item.parent=this;this.children.push(item);}}
  insertBefore(item:UI,before:UI|null){item.remove();item.parent=this;const index=before?this.children.indexOf(before):-1;if(index<0)this.children.push(item);else this.children.splice(index,0,item);}
  remove(){if(this.parent){this.parent.children.splice(this.parent.children.indexOf(this),1);this.parent=null;}}
  contains(item:UI):boolean{return this===item||this.children.some(child=>child.contains(item));}
  matches(selector:string){return selector.startsWith('.')?this.className.split(' ').includes(selector.slice(1)):selector===this.tag;}
  closest(selector:string):UI|null{return selector.split(',').some(part=>this.matches(part.trim()))?this:this.parent?.closest(selector)??null;}
  querySelector(selector:string):UI|null{const parts=selector.split(' ');if(parts.length>1)return this.querySelector(parts[0])?.querySelector(parts.slice(1).join(' '))??null;return this.children.find(child=>child.matches(selector))??this.children.map(child=>child.querySelector(selector)).find(Boolean)??null;}
  setAttribute(key:string,value:string){this.attributes.set(key,value);}
  getBoundingClientRect(){return{left:0,top:0,bottom:44,width:844,height:390};}
  setPointerCapture(){}
  focus(){}
  set innerHTML(_html:string){
    const add=(parent:UI,className:string,tag='div')=>{const child=new UI(tag);child.className=className;parent.append(child);return child;};
    add(this,'co-tactical-trigger','button');
    const panel=add(this,'co-mp-roster','section'),header=add(panel,'co-tactical-heading','header');
    add(header,'','b');add(header,'co-tactical-close','button');
    const scroll=add(panel,'co-tactical-scroll');add(scroll,'co-tactical-columns');add(scroll,'co-tactical-rows');
  }
}
function dispatch(root:UI,type:string,target:UI,properties:Record<string,unknown>={}){
  const event=new Event(type,{cancelable:true});
  for(const[key,value]of Object.entries({target,...properties}))Object.defineProperty(event,key,{value});
  root.dispatchEvent(event);return event;
}
function fixture(run:(f:{board:TacticalBoard;root:UI;win:EventTarget;input:InputManager;panel:UI;trigger:UI})=>void,touchFallback=false){
  const names=['window','document','Node','Element','HTMLElement'];
  const before=names.map(name=>Object.getOwnPropertyDescriptor(globalThis,name));
  const win=Object.assign(new EventTarget(),{PointerEvent:touchFallback?undefined:Event});
  const doc=Object.assign(new EventTarget(),{createElement:(tag:string)=>new UI(tag)});
  const values=[win,doc,UI,UI,UI];names.forEach((name,index)=>Object.defineProperty(globalThis,name,{configurable:true,value:values[index]}));
  const root=new UI(),board=new TacticalBoard(root as unknown as HTMLElement,true),input=new InputManager();
  const mobile=new MobileInput(root as unknown as HTMLElement,input);
  const panel=root.querySelector('.co-mp-roster')!,trigger=root.querySelector('.co-tactical-trigger')!;
  try{run({board,root,win,input,panel,trigger});}finally{
    mobile.dispose();board.dispose();names.forEach((name,index)=>{if(before[index])Object.defineProperty(globalThis,name,before[index]!);else Reflect.deleteProperty(globalThis,name);});
  }
}
const players=Array.from({length:8},(_,i)=>({id:String(i),name:i===0?'<b>長暱稱</b>':`Player ${i}`,score:1000-i*100,bounty:100,kills:10-i,deaths:i}));

test('tactical board starts closed; snapshots retain the panel, row identity, open state and scroll position',()=>fixture(({board,root,panel,trigger})=>{
  assert.equal(panel.hidden,true);assert.equal(trigger.attributes.get('aria-expanded'),'false');
  dispatch(root,'click',trigger);assert.equal(board.isOpen,true);assert.equal(panel.hidden,false);
  board.update(players,'ROOM',20);
  const body=root.querySelector('.co-tactical-rows')!,scroll=root.querySelector('.co-tactical-scroll')!,row=body.children[0];
  assert.equal(body.children.length,8);assert.equal(row.children[1].textContent,'<b>長暱稱</b>');
  scroll.scrollTop=60;board.update(players.map((player,i)=>({...player,score:i===7?1500:player.score})),'ROOM',30);
  assert.equal(body.children[1],row);assert.equal(scroll.scrollTop,60);assert.equal(board.isOpen,true);
  dispatch(root,'click',root.querySelector('.co-tactical-close')!);assert.equal(panel.hidden,true);
  board.setTouchMode(false);assert.equal(panel.hidden,false);assert.equal(board.isOpen,false);
}));

test('outside close consumes the complete pointer gesture and click; the next gameplay gesture works',()=>fixture(({board,root,input,trigger})=>{
  dispatch(root,'click',trigger);
  const down=dispatch(root,'pointerdown',root,{pointerId:2,clientX:650,clientY:200});
  assert.equal(board.isOpen,false);assert.equal(down.defaultPrevented,true);
  dispatch(root,'pointermove',root,{pointerId:2,clientX:700,clientY:200});
  dispatch(root,'pointerup',root,{pointerId:2});
  assert.equal(dispatch(root,'click',root).defaultPrevented,true);
  assert.equal(input.getState().shoot,false);assert.equal(input.getState().lookX,0);
  dispatch(root,'pointerdown',root,{pointerId:3,clientX:650,clientY:200});
  dispatch(root,'pointermove',root,{pointerId:3,clientX:700,clientY:200});
  assert.ok(input.getState().lookX>0);dispatch(root,'pointerup',root,{pointerId:3});
}));

test('a held joystick continues and releases during panel scrolling; opening clears combat only',()=>fixture(({board,root,input,panel,trigger})=>{
  dispatch(root,'pointerdown',root,{pointerId:1,clientX:100,clientY:300});
  dispatch(root,'pointermove',root,{pointerId:1,clientX:120,clientY:260});
  input.set({shoot:true,aim:true,sprint:true});dispatch(root,'click',trigger);
  assert.equal(board.isOpen,true);assert.equal(input.getState().shoot,false);assert.equal(input.aiming,false);assert.equal(input.sprinting,true);
  assert.ok(input.getState().moveY>0);
  dispatch(root,'pointerdown',panel,{pointerId:2,clientX:500,clientY:140});
  dispatch(root,'pointermove',panel,{pointerId:2,clientX:500,clientY:100});
  dispatch(root,'pointermove',root,{pointerId:1,clientX:130,clientY:250});
  assert.ok(input.getState().moveY>.9);assert.equal(input.getState().lookY,0);
  dispatch(root,'pointercancel',panel,{pointerId:2});dispatch(root,'pointerup',root,{pointerId:1});assert.equal(input.getState().moveY,0);
  root.dispatchEvent(new Event('armory:open'));assert.equal(board.isOpen,false);
  board.toggle();board.setActive(false);assert.equal(board.isOpen,false);board.toggle();assert.equal(board.isOpen,false);
  board.setActive(true);board.toggle();assert.equal(board.isOpen,true);
  board.dispose();dispatch(root,'click',trigger);assert.equal(root.children.length,0);
}));

test('touch fallback preserves an existing joystick, isolates scroll and consumes an outside-close touch',()=>fixture(({board,root,input,panel,trigger})=>{
  const touch=(identifier:number,clientX:number,clientY:number)=>({identifier,clientX,clientY});
  dispatch(root,'touchstart',root,{changedTouches:[touch(1,100,300)]});
  dispatch(root,'touchmove',root,{changedTouches:[touch(1,130,270)]});
  dispatch(root,'click',trigger);assert.equal(board.isOpen,true);
  dispatch(root,'touchstart',panel,{changedTouches:[touch(2,450,150)]});
  dispatch(root,'touchmove',panel,{changedTouches:[touch(2,450,100)]});
  dispatch(root,'touchend',panel,{changedTouches:[touch(2,450,100)]});
  dispatch(root,'touchmove',root,{changedTouches:[touch(1,140,250)]});
  assert.ok(input.getState().moveY>.9);assert.equal(input.getState().lookY,0);
  const outside=dispatch(root,'touchstart',root,{changedTouches:[touch(3,650,220)]});
  assert.equal(outside.defaultPrevented,true);assert.equal(board.isOpen,false);
  dispatch(root,'touchend',root,{changedTouches:[touch(3,650,220)]});
  dispatch(root,'touchend',root,{changedTouches:[touch(1,140,250)]});assert.equal(input.getState().moveY,0);
},true));
