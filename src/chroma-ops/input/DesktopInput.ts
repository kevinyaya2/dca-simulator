import { InputManager } from './InputManager';
export class DesktopInput {
  private keys=new Set<string>(); private onKey=(e:KeyboardEvent)=>{ const k=e.key.toLowerCase(); if(['w','a','s','d',' ','r','1','2','3','4','5'].includes(k)) e.preventDefault(); if(e.type==='keydown') this.keys.add(k); else this.keys.delete(k); if(e.type==='keydown'){ if(k===' ') this.input.set({jump:true}); if(k==='r') this.input.set({reload:true}); if(/^[1-5]$/.test(k)) this.input.set({switchWeapon:+k}); }};
  private onMove=(e:MouseEvent)=>{ if(document.pointerLockElement===this.el) this.input.addLook(e.movementX,e.movementY); };
  private onDown=(e:MouseEvent)=>{ if(e.button===0) this.input.set({shoot:true}); };
  private onUp=(e:MouseEvent)=>{ if(e.button===0) this.input.set({shoot:false}); };
  constructor(private el:HTMLElement,private input:InputManager){ window.addEventListener('keydown',this.onKey);window.addEventListener('keyup',this.onKey);document.addEventListener('mousemove',this.onMove);el.addEventListener('mousedown',this.onDown);window.addEventListener('mouseup',this.onUp); }
  update(){ this.input.set({moveX:(this.keys.has('d')?1:0)-(this.keys.has('a')?1:0),moveY:(this.keys.has('w')?1:0)-(this.keys.has('s')?1:0)}); }
  dispose(){window.removeEventListener('keydown',this.onKey);window.removeEventListener('keyup',this.onKey);document.removeEventListener('mousemove',this.onMove);this.el.removeEventListener('mousedown',this.onDown);window.removeEventListener('mouseup',this.onUp);}
}
