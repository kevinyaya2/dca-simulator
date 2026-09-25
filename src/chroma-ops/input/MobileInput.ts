import { InputManager } from './InputManager';

export class MobileInput {
  private joyId:number|null=null; private lookId:number|null=null; private shootId:number|null=null;
  private ox=0; private oy=0; private lx=0; private ly=0;
  private options={passive:false};
  private resetControls=()=>{this.joyId=null;this.lookId=null;this.shootId=null;this.input.set({moveX:0,moveY:0,lookX:0,lookY:0,shoot:false});this.el.style.setProperty('--joy-x','0px');this.el.style.setProperty('--joy-y','0px');};
  private stopShooting=()=>{this.shootId=null;this.input.set({shoot:false});};
  private onVisibility=()=>{if(document.hidden)this.resetControls();};
  private begin=(id:number,x:number,y:number,target:EventTarget|null)=>{
    const r=this.el.getBoundingClientRect();
    if(target instanceof HTMLElement&&target.closest('.co-armory'))return;
    const button=target instanceof HTMLElement?target.closest('[data-fire],[data-jump],[data-reload],[data-weapon]'):null;
    if(button?.matches('[data-jump]'))this.input.set({jump:true});
    else if(button?.matches('[data-reload]'))this.input.set({reload:true});
    else if(button?.matches('[data-weapon]')){this.stopShooting();this.el.dispatchEvent(new CustomEvent('armory'));}
    else if(button?.matches('[data-fire]')){this.shootId=id;this.input.set({shoot:true});}
    else if(x<r.left+r.width*.48&&this.joyId===null){this.joyId=id;this.ox=x;this.oy=y;}
    else if(this.lookId===null){this.lookId=id;this.lx=x;this.ly=y;}
  };
  private movePoint=(id:number,x:number,y:number)=>{
    if(id===this.joyId){const dx=Math.max(-52,Math.min(52,x-this.ox)),dy=Math.max(-52,Math.min(52,y-this.oy));this.input.set({moveX:dx/52,moveY:-dy/52});this.el.style.setProperty('--joy-x',`${dx}px`);this.el.style.setProperty('--joy-y',`${dy}px`);}
    if(id===this.lookId){this.input.addLook(x-this.lx,y-this.ly);this.lx=x;this.ly=y;}
  };
  private end=(id:number)=>{if(id===this.joyId){this.joyId=null;this.input.set({moveX:0,moveY:0});this.el.style.setProperty('--joy-x','0px');this.el.style.setProperty('--joy-y','0px');}if(id===this.lookId)this.lookId=null;if(id===this.shootId){this.shootId=null;this.input.set({shoot:false});}};
  private onPointerDown=(e:PointerEvent)=>{e.preventDefault();this.begin(e.pointerId,e.clientX,e.clientY,e.target);this.el.setPointerCapture?.(e.pointerId);};
  private onPointerMove=(e:PointerEvent)=>{e.preventDefault();this.movePoint(e.pointerId,e.clientX,e.clientY);};
  private onPointerUp=(e:PointerEvent)=>{e.preventDefault();this.end(e.pointerId);};
  private onTouchStart=(e:TouchEvent)=>{e.preventDefault();for(const touch of Array.from(e.changedTouches))this.begin(touch.identifier,touch.clientX,touch.clientY,e.target);};
  private onTouchMove=(e:TouchEvent)=>{e.preventDefault();for(const touch of Array.from(e.changedTouches))this.movePoint(touch.identifier,touch.clientX,touch.clientY);};
  private onTouchEnd=(e:TouchEvent)=>{e.preventDefault();for(const touch of Array.from(e.changedTouches))this.end(touch.identifier);};
  constructor(private el:HTMLElement,private input:InputManager){
    if(window.PointerEvent){el.addEventListener('pointerdown',this.onPointerDown,this.options);el.addEventListener('pointermove',this.onPointerMove,this.options);el.addEventListener('pointerup',this.onPointerUp,this.options);el.addEventListener('pointercancel',this.onPointerUp,this.options);}
    else {el.addEventListener('touchstart',this.onTouchStart,this.options);el.addEventListener('touchmove',this.onTouchMove,this.options);el.addEventListener('touchend',this.onTouchEnd,this.options);el.addEventListener('touchcancel',this.onTouchEnd,this.options);}
    window.addEventListener('blur',this.resetControls);window.addEventListener('orientationchange',this.resetControls);document.addEventListener('visibilitychange',this.onVisibility);
  }
  dispose(){this.resetControls();if(window.PointerEvent){this.el.removeEventListener('pointerdown',this.onPointerDown);this.el.removeEventListener('pointermove',this.onPointerMove);this.el.removeEventListener('pointerup',this.onPointerUp);this.el.removeEventListener('pointercancel',this.onPointerUp);}else{this.el.removeEventListener('touchstart',this.onTouchStart);this.el.removeEventListener('touchmove',this.onTouchMove);this.el.removeEventListener('touchend',this.onTouchEnd);this.el.removeEventListener('touchcancel',this.onTouchEnd);}window.removeEventListener('blur',this.resetControls);window.removeEventListener('orientationchange',this.resetControls);document.removeEventListener('visibilitychange',this.onVisibility);}
}
