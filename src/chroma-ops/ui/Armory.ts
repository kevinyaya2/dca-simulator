import { WEAPON_IDS, WEAPON_SPECS, type WeaponId } from '../../../shared/weapons';

type Gesture={x:number;y:number;inside:boolean;moved:boolean};
export class Armory {
  private skipOpeningClick=false;
  private suppressClick=false;
  private gestures=new Map<number,Gesture>();
  private enabled=true;
  private open=false;
  private selected=0;
  private active:WeaponId='ar';
  private signature='';
  private box:HTMLElement;
  private track:HTMLElement;
  private coarse=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  private equip(id:WeaponId){if(!this.owned().has(id))return false;this.choose(id);this.active=id;this.render(id);this.close();return true;}
  private consume(event:Event){event.preventDefault();event.stopImmediatePropagation();}
  private start(id:number,x:number,y:number,target:EventTarget|null,event:Event){
    if(!this.open){this.suppressClick=false;return;}
    if(!this.open||!(target instanceof HTMLElement))return;
    this.skipOpeningClick=false;
    if(!this.gestures.size)this.suppressClick=false;
    const inside=this.box.contains(target);
    this.gestures.set(id,{x,y,inside,moved:false});
    if(!inside)this.consume(event);
  }
  private moveGesture(id:number,x:number,y:number){
    const gesture=this.gestures.get(id);
    if(gesture&&Math.hypot(x-gesture.x,y-gesture.y)>8){gesture.moved=true;this.suppressClick=true;}
  }
  private end(id:number,event:Event,cancelled=false){
    const gesture=this.gestures.get(id);if(!gesture)return;
    this.gestures.delete(id);
    if(cancelled||gesture.moved)this.suppressClick=true;
    if(!gesture.inside){this.consume(event);if(!cancelled&&!gesture.moved)this.close();this.suppressClick=true;}
  }
  private onPointerDown=(e:PointerEvent)=>{if(e.button!==0)return;this.start(e.pointerId,e.clientX,e.clientY,e.target,e);};
  private onPointerMove=(e:PointerEvent)=>this.moveGesture(e.pointerId,e.clientX,e.clientY);
  private onPointerUp=(e:PointerEvent)=>{this.moveGesture(e.pointerId,e.clientX,e.clientY);this.end(e.pointerId,e);};
  private onPointerCancel=(e:PointerEvent)=>this.end(e.pointerId,e,true);
  private onTouchStart=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches))this.start(t.identifier,t.clientX,t.clientY,e.target,e);};
  private onTouchMove=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY);};
  private onTouchEnd=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches)){this.moveGesture(t.identifier,t.clientX,t.clientY);this.end(t.identifier,e,e.type==='touchcancel');}};
  private onClick=(event:MouseEvent)=>{
    if(this.suppressClick){this.suppressClick=false;this.consume(event);return;}
    if(!this.open||!(event.target instanceof HTMLElement))return;
    if(this.skipOpeningClick){this.skipOpeningClick=false;this.consume(event);return;}
    this.consume(event);
    if(!this.box.contains(event.target)){this.close();return;}
    const card=event.target.closest<HTMLElement>('[data-armory]');if(!card)return;
    const id=card.dataset.armory as WeaponId,index=WEAPON_IDS.indexOf(id);
    if(index<0)return;
    this.selected=index;this.render();this.equip(id);
  };
  private onWheel=(event:WheelEvent)=>{if(!this.open)return;event.preventDefault();this.move(event.deltaY>0?1:-1);};
  private onArmory=()=>{this.toggle();this.skipOpeningClick=this.open;};
  private onKey=(event:KeyboardEvent)=>{
    if(!this.enabled||event.repeat||event.key.toLowerCase()!=='q'||(event.target instanceof HTMLElement&&event.target.closest('input, textarea, select, [contenteditable]')))return;
    event.preventDefault();this.toggle();
  };
  constructor(private root:HTMLElement,private choose:(id:WeaponId)=>void,private owned:()=>Set<WeaponId>,private afterClose?:()=>void){
    const hint=this.coarse?'左右滑動選擇，點擊已取得武器裝備':'滾輪瀏覽，點擊已取得武器裝備';
    root.insertAdjacentHTML('beforeend',`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${hint}</small></div><div class="co-armory-track"></div></div>`);
    this.box=root.querySelector('.co-armory')!;this.track=this.box.querySelector('.co-armory-track')!;
    this.track.innerHTML=WEAPON_IDS.map(id=>{const w=WEAPON_SPECS[id];return `<button type="button" class="co-weapon-card" data-armory="${id}" style="--weapon:#${w.color.toString(16).padStart(6,'0')}"><span>${w.icon}</span><b>${w.label}</b><small></small><em>${w.magazine} 發彈匣</em></button>`;}).join('');
    root.addEventListener('pointerdown',this.onPointerDown,true);
    window.addEventListener('pointermove',this.onPointerMove,true);window.addEventListener('pointerup',this.onPointerUp,true);window.addEventListener('pointercancel',this.onPointerCancel,true);
    if(!window.PointerEvent){root.addEventListener('touchstart',this.onTouchStart,{capture:true,passive:false});window.addEventListener('touchmove',this.onTouchMove,true);window.addEventListener('touchend',this.onTouchEnd,true);window.addEventListener('touchcancel',this.onTouchEnd,true);}
    root.addEventListener('click',this.onClick,true);root.addEventListener('wheel',this.onWheel,{passive:false});root.addEventListener('armory',this.onArmory);window.addEventListener('keydown',this.onKey);this.render('ar');
  }
  get isOpen(){return this.open;}
  setEnabled(enabled:boolean){this.enabled=enabled;if(!enabled)this.close();}
  close(){if(!this.open)return;this.open=false;this.skipOpeningClick=false;this.gestures.clear();this.box.hidden=true;this.signature='';this.afterClose?.();}
  toggle(){if(!this.enabled)return;if(this.open){this.close();return;}this.suppressClick=false;this.root.dispatchEvent(new Event('armory:open'));this.open=true;this.box.hidden=false;const index=WEAPON_IDS.indexOf(this.active);if(index>=0)this.selected=index;this.render();this.scrollSelected(false);}
  move(delta:number){this.selected=(this.selected+delta+WEAPON_IDS.length)%WEAPON_IDS.length;this.render();this.scrollSelected();}
  render(active:WeaponId=this.active){
    this.active=active;this.box.hidden=!this.open;
    const owned=this.owned(),signature=`${this.open}|${active}|${this.selected}|${WEAPON_IDS.map(id=>owned.has(id)?1:0).join('')}`;
    if(signature===this.signature)return;this.signature=signature;
    WEAPON_IDS.forEach((id,index)=>{const card=this.track.children[index] as HTMLButtonElement,has=owned.has(id),spec=WEAPON_SPECS[id];card.classList.toggle('active',id===active);card.classList.toggle('focus',index===this.selected);card.classList.toggle('locked',!has);card.setAttribute('aria-disabled',String(!has));(card.querySelector('small') as HTMLElement).textContent=has?spec.description:'\u5c1a\u672a\u53d6\u5f97';});
  }
  private scrollSelected(smooth=true){requestAnimationFrame(()=>{if(this.open)(this.track.children[this.selected] as HTMLElement)?.scrollIntoView({behavior:smooth?'smooth':'auto',block:'nearest',inline:'center'});});}
  dispose(){
    this.gestures.clear();this.box.remove();
    this.root.removeEventListener('pointerdown',this.onPointerDown,true);this.root.removeEventListener('touchstart',this.onTouchStart,true);
    window.removeEventListener('pointermove',this.onPointerMove,true);window.removeEventListener('pointerup',this.onPointerUp,true);window.removeEventListener('pointercancel',this.onPointerCancel,true);
    window.removeEventListener('touchmove',this.onTouchMove,true);window.removeEventListener('touchend',this.onTouchEnd,true);window.removeEventListener('touchcancel',this.onTouchEnd,true);
    this.root.removeEventListener('click',this.onClick,true);this.root.removeEventListener('wheel',this.onWheel);this.root.removeEventListener('armory',this.onArmory);window.removeEventListener('keydown',this.onKey);
  }
}
