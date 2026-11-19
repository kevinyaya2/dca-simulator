import { WEAPON_IDS, WEAPON_SPECS, magazineCapacity, weaponRange, weaponDamageMultiplier, type WeaponId, type WeaponLevel } from '../../../shared/weapons';

type Gesture={x:number;y:number;inside:boolean;moved:boolean;touch:boolean;card:HTMLElement|null};
export class Armory {
  private suppressMouseClick=false;
  private touchRelease:{x:number;y:number;expires:number}|null=null;
  private gestures=new Map<number,Gesture>();
  private scrollFrame:number|undefined;
  private enabled=true;
  private open=false;
  private selected=0;
  private active:WeaponId='ar';
  private signature='';
  private box:HTMLElement;
  private track:HTMLElement;
  private trigger:HTMLElement|null;
  private coarse=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  private get pointerLocked(){return !this.coarse&&document.pointerLockElement===this.root;}
  private equip(id:WeaponId){
    if(!this.owned().has(id)||this.choose(id)===false)return;
    this.close();
  }
  private selectCard(card:HTMLElement){
    const id=card.dataset.armory as WeaponId,index=WEAPON_IDS.indexOf(id);
    if(index<0)return;
    this.selected=index;this.render();this.equip(id);
  }
  private consume(event:Event){event.preventDefault();event.stopImmediatePropagation();}
  private start(id:number,x:number,y:number,target:EventTarget|null,event:Event,touch:boolean){
    if(!touch)this.suppressMouseClick=false;
    this.touchRelease=null;
    if(!this.open||!(target instanceof HTMLElement))return;
    const inside=this.pointerLocked||this.box.contains(target);
    this.gestures.set(id,{x,y,inside,moved:false,touch,card:inside?target.closest('[data-armory]'):null});
    if(!inside)this.consume(event);
  }
  private moveGesture(id:number,x:number,y:number){
    if(this.pointerLocked)return;
    const gesture=this.gestures.get(id);
    if(gesture&&Math.hypot(x-gesture.x,y-gesture.y)>8)gesture.moved=true;
  }
  private end(id:number,x:number,y:number,event:Event,cancelled=false){
    const gesture=this.gestures.get(id);if(!gesture)return;
    this.gestures.delete(id);
    const tap=!cancelled&&!gesture.moved;
    if(!gesture.inside){
      this.consume(event);
      if(tap)this.close();
    }else if(gesture.touch&&tap&&gesture.card){
      // Safari can retain the original event target through implicit pointer capture.
      const hit=document.elementFromPoint(x,y)?.closest('[data-armory]');
      if(hit===gesture.card)this.selectCard(gesture.card);
    }
    if(gesture.touch){
      this.touchRelease={x,y,expires:Date.now()+500};
      if(tap&&event.cancelable)event.preventDefault();
    }else if(!tap||!gesture.inside){
      this.suppressMouseClick=true;
    }
  }
  private onPointerDown=(e:PointerEvent)=>{if(e.button!==0)return;this.start(e.pointerId,e.clientX,e.clientY,e.target,e,e.pointerType==='touch');};
  private onPointerMove=(e:PointerEvent)=>this.moveGesture(e.pointerId,e.clientX,e.clientY);
  private onPointerUp=(e:PointerEvent)=>{this.moveGesture(e.pointerId,e.clientX,e.clientY);this.end(e.pointerId,e.clientX,e.clientY,e);};
  private onPointerCancel=(e:PointerEvent)=>this.end(e.pointerId,e.clientX,e.clientY,e,true);
  private onTouchStart=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches))this.start(t.identifier,t.clientX,t.clientY,t.target??e.target,e,true);};
  private onTouchMove=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY);};
  private onTouchEnd=(e:TouchEvent)=>{for(const t of Array.from(e.changedTouches)){this.moveGesture(t.identifier,t.clientX,t.clientY);this.end(t.identifier,t.clientX,t.clientY,e,e.type==='touchcancel');}};
  private onClick=(event:MouseEvent)=>{
    const release=this.touchRelease;
    if(release&&Date.now()<release.expires&&event.detail>0&&Math.hypot(event.clientX-release.x,event.clientY-release.y)<25){
      this.touchRelease=null;this.consume(event);return;
    }
    if(this.suppressMouseClick){this.suppressMouseClick=false;this.consume(event);return;}
    if(this.coarse&&event.detail>0&&(!('pointerType' in event)||event.pointerType==='touch')){
      if(this.open)this.consume(event);
      return;
    }
    if(!this.open||!(event.target instanceof HTMLElement))return;
    this.consume(event);
    if(this.pointerLocked){this.equip(WEAPON_IDS[this.selected]);return;}
    if(!this.box.contains(event.target)){this.close();return;}
    const card=event.target.closest<HTMLElement>('[data-armory]');
    if(card)this.selectCard(card);
  };
  private onWheel=(event:WheelEvent)=>{if(!this.open)return;event.preventDefault();this.move(event.deltaY>0?1:-1);};
  private onArmory=()=>this.toggle();
  private onInterrupted=()=>this.close(false);
  private onVisibility=()=>{if(document.hidden)this.close(false);};
  private onKey=(event:KeyboardEvent)=>{
    if(!this.enabled||event.repeat||event.key.toLowerCase()!=='q'||(event.target instanceof HTMLElement&&event.target.closest('input, textarea, select, [contenteditable]')))return;
    event.preventDefault();this.toggle();
  };
  constructor(private root:HTMLElement,private choose:(id:WeaponId)=>void|boolean,private owned:()=>Set<WeaponId>,private afterClose?:()=>void,private level:(id:WeaponId)=>WeaponLevel=()=>1){
    const hint=this.coarse?'左右滑動選擇，點擊已取得武器裝備':'滾輪選擇，滑鼠左鍵裝備目前選取武器';
    root.insertAdjacentHTML('beforeend',`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${hint}</small></div><div class="co-armory-track"></div></div>`);
    this.box=root.querySelector('.co-armory')!;this.track=this.box.querySelector('.co-armory-track')!;
    this.trigger=root.querySelector('[data-weapon]');
    this.track.innerHTML=WEAPON_IDS.map(id=>{const w=WEAPON_SPECS[id];return `<button type="button" class="co-weapon-card" data-armory="${id}" style="--weapon:#${w.color.toString(16).padStart(6,'0')}"><span>${w.icon}</span><b>${w.label}</b><strong class="co-level"></strong><small></small><em></em><div class="co-weapon-stats"></div></button>`;}).join('');
    root.addEventListener('pointerdown',this.onPointerDown,true);
    window.addEventListener('pointermove',this.onPointerMove,true);window.addEventListener('pointerup',this.onPointerUp,true);window.addEventListener('pointercancel',this.onPointerCancel,true);
    if(!window.PointerEvent){root.addEventListener('touchstart',this.onTouchStart,{capture:true,passive:false});window.addEventListener('touchmove',this.onTouchMove,true);window.addEventListener('touchend',this.onTouchEnd,{capture:true,passive:false});window.addEventListener('touchcancel',this.onTouchEnd,true);}
    window.addEventListener('blur',this.onInterrupted);window.addEventListener('orientationchange',this.onInterrupted);
    document.addEventListener('visibilitychange',this.onVisibility);root.addEventListener('combat:reset',this.onInterrupted);
    root.addEventListener('click',this.onClick,true);root.addEventListener('wheel',this.onWheel,{passive:false});root.addEventListener('armory',this.onArmory);window.addEventListener('keydown',this.onKey);this.render('ar');
  }
  get isOpen(){return this.open;}
  setEnabled(enabled:boolean){this.enabled=enabled;if(!enabled)this.close(false);}
  close(restorePointerLock=true){
    this.gestures.clear();this.suppressMouseClick=false;this.touchRelease=null;
    if(this.scrollFrame!==undefined){cancelAnimationFrame(this.scrollFrame);this.scrollFrame=undefined;}
    if(!this.open)return;
    this.open=false;this.box.hidden=true;this.signature='';
    this.trigger?.setAttribute('aria-expanded','false');
    if(restorePointerLock)this.afterClose?.();
  }
  toggle(){if(!this.enabled)return;if(this.open){this.close();return;}this.root.dispatchEvent(new Event('armory:open'));this.open=true;this.box.hidden=false;this.trigger?.setAttribute('aria-expanded','true');const index=WEAPON_IDS.indexOf(this.active);if(index>=0)this.selected=index;this.render();this.scrollSelected(false);}
  move(delta:number){this.selected=(this.selected+delta+WEAPON_IDS.length)%WEAPON_IDS.length;this.render();this.scrollSelected();}
  render(active:WeaponId=this.active){
    this.active=active;this.box.hidden=!this.open;
    const owned=this.owned(),signature=`${this.open}|${active}|${this.selected}|${WEAPON_IDS.map(id=>`${owned.has(id)}:${this.level(id)}`).join('|')}`;
    if(signature===this.signature)return;this.signature=signature;
    WEAPON_IDS.forEach((id,index)=>{
      const card=this.track.children[index] as HTMLButtonElement,has=owned.has(id),spec=WEAPON_SPECS[id],level=this.level(id);
      card.classList.toggle('active',id===active);card.classList.toggle('focus',index===this.selected);card.classList.toggle('locked',!has);card.setAttribute('aria-disabled',String(!has));card.dataset.level=has?String(level):'0';
      (card.querySelector('small') as HTMLElement).textContent=has?spec.description:'尚未取得';
      const badge=card.querySelector('.co-level'),capacity=card.querySelector('em');
      if(badge)badge.textContent=has?`Lv.${level}${level===3?' · 滿級':''}`:'未解鎖';
      if(capacity)capacity.textContent=`${magazineCapacity(id,level)} 發彈匣`;
      const stats=card.querySelector('.co-weapon-stats');
      if(stats)stats.textContent=`${spec.pellets?'每顆':'傷害'} ${Math.round(spec.damage*weaponDamageMultiplier(level))} · 射程 ${Number(weaponRange(id,level).toFixed(2))}`;
    });
  }
  private scrollSelected(smooth=true){
    if(this.scrollFrame!==undefined)cancelAnimationFrame(this.scrollFrame);
    this.scrollFrame=requestAnimationFrame(()=>{
      this.scrollFrame=undefined;
      if(!this.open)return;
      const card=this.track.children[this.selected] as HTMLElement;
      const left=card.offsetLeft+(card.offsetWidth-this.track.clientWidth)/2;
      this.track.scrollTo({left,behavior:smooth?'smooth':'instant'});
    });
  }
  dispose(){
    this.enabled=false;this.open=false;this.close();this.box.remove();
    window.removeEventListener('blur',this.onInterrupted);window.removeEventListener('orientationchange',this.onInterrupted);
    document.removeEventListener('visibilitychange',this.onVisibility);this.root.removeEventListener('combat:reset',this.onInterrupted);
    this.root.removeEventListener('pointerdown',this.onPointerDown,true);this.root.removeEventListener('touchstart',this.onTouchStart,true);
    window.removeEventListener('pointermove',this.onPointerMove,true);window.removeEventListener('pointerup',this.onPointerUp,true);window.removeEventListener('pointercancel',this.onPointerCancel,true);
    window.removeEventListener('touchmove',this.onTouchMove,true);window.removeEventListener('touchend',this.onTouchEnd,true);window.removeEventListener('touchcancel',this.onTouchEnd,true);
    this.root.removeEventListener('click',this.onClick,true);this.root.removeEventListener('wheel',this.onWheel);this.root.removeEventListener('armory',this.onArmory);window.removeEventListener('keydown',this.onKey);
  }
}
