import { HIGH_BOUNTY, rankScores, type ScoreRow } from '../../../shared/bounty';

let nextId=0;
export class TacticalBoard {
  private shell=document.createElement('div');
  private panel:HTMLElement;
  private trigger:HTMLButtonElement;
  private body:HTMLElement;
  private heading:HTMLElement;
  private rows=new Map<string,HTMLElement>();
  private open=false;
  private touch=false;
  private active=true;
  private gestures=new Map<number,boolean>(); // true means an outside-close gesture.
  private suppressClick=false;
  get isOpen(){return this.touch&&this.open;}

  constructor(private root:HTMLElement,touch:boolean){
    const id=`co-tactical-${++nextId}`;
    this.shell.className='co-tactical';this.shell.dataset.gameUi='';
    this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${id}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${id}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`;
    root.append(this.shell);
    this.panel=this.shell.querySelector('.co-mp-roster')!;
    this.trigger=this.shell.querySelector('.co-tactical-trigger')!;
    this.body=this.shell.querySelector('.co-tactical-rows')!;
    this.heading=this.shell.querySelector('.co-tactical-heading b')!;
    this.setTouchMode(touch);
    root.addEventListener('click',this.onClick,true);
    root.addEventListener('pointerdown',this.onPointerDown,true);
    root.addEventListener('pointermove',this.onPointerMove,true);
    root.addEventListener('pointerup',this.onPointerEnd,true);
    root.addEventListener('pointercancel',this.onPointerEnd,true);
    if(!window.PointerEvent){
      root.addEventListener('touchstart',this.onTouchStart,{capture:true,passive:false});
      root.addEventListener('touchmove',this.onTouchMove,{capture:true,passive:false});
      root.addEventListener('touchend',this.onTouchEnd,true);
      root.addEventListener('touchcancel',this.onTouchEnd,true);
    }
    root.addEventListener('armory:open',this.close);
    window.addEventListener('keydown',this.onKey);
    window.addEventListener('blur',this.onBlur);
    window.addEventListener('resize',this.layout);
  }
  setTouchMode(touch:boolean){this.touch=touch;this.root.classList.toggle('co-touch-ui',touch);this.close();}
  setActive(active:boolean){this.active=active;if(!active)this.close();this.shell.hidden=!active;}
  toggle(){
    if(!this.touch||!this.active)return;
    if(this.open){this.close();return;}
    this.open=true;this.panel.hidden=false;this.trigger.setAttribute('aria-expanded','true');
    this.root.dispatchEvent(new Event('tactical:open'));
    this.layout();
  }
  close=()=>{
    this.open=false;this.panel.hidden=this.touch;this.trigger.setAttribute('aria-expanded','false');this.layout();
  };
  private onBlur=()=>{this.close();this.gestures.clear();this.suppressClick=false;};
  private onKey=(event:KeyboardEvent)=>{if(this.isOpen&&event.key==='Escape'){event.preventDefault();this.close();this.trigger.focus({preventScroll:true});}};
  private contains(target:EventTarget|null){return target instanceof Node&&this.shell.contains(target);}
  private consume(event:Event,prevent=false){if(prevent)event.preventDefault();event.stopImmediatePropagation();}
  private onPointerDown=(event:PointerEvent)=>{
    if(!this.touch||!this.active)return;
    this.suppressClick=false;
    if(this.contains(event.target)){
      this.gestures.set(event.pointerId,false);this.consume(event);return;
    }
    if(this.open){
      this.close();this.gestures.set(event.pointerId,true);this.suppressClick=true;
      this.root.setPointerCapture?.(event.pointerId);this.consume(event,true);
    }
  };
  private onPointerMove=(event:PointerEvent)=>{
    if(this.gestures.has(event.pointerId))this.consume(event,this.gestures.get(event.pointerId));
  };
  private onPointerEnd=(event:PointerEvent)=>{
    if(!this.gestures.has(event.pointerId))return;
    const outside=this.gestures.get(event.pointerId);this.gestures.delete(event.pointerId);this.consume(event,outside);
  };
  private onTouchStart=(event:TouchEvent)=>{
    if(!this.touch||!this.active)return;
    this.suppressClick=false;
    const inside=this.contains(event.target),outside=this.open&&!inside;
    if(!inside&&!outside)return;
    if(outside){this.close();this.suppressClick=true;}
    for(const point of Array.from(event.changedTouches))this.gestures.set(point.identifier,outside);
    this.consume(event,outside);
  };
  private onTouchMove=(event:TouchEvent)=>{
    const points=Array.from(event.changedTouches);
    if(points.length&&points.every(point=>this.gestures.has(point.identifier)))this.consume(event,points.some(point=>this.gestures.get(point.identifier)));
  };
  private onTouchEnd=(event:TouchEvent)=>{
    const points=Array.from(event.changedTouches),owned=points.every(point=>this.gestures.has(point.identifier));
    const outside=points.some(point=>this.gestures.get(point.identifier));
    for(const point of points)this.gestures.delete(point.identifier);
    if(owned)this.consume(event,outside);
  };
  private onClick=(event:MouseEvent)=>{
    if(!this.touch||!this.active)return;
    if(this.suppressClick){this.suppressClick=false;this.consume(event,true);return;}
    const target=event.target;
    if(!(target instanceof Element)||!this.contains(target))return;
    this.consume(event);
    if(target.closest('.co-tactical-trigger'))this.toggle();
    else if(target.closest('.co-tactical-close')){this.close();this.trigger.focus({preventScroll:true});}
  };
  update(players:readonly ScoreRow[],roomCode:string|undefined,ping:number){
    this.heading.textContent=`${roomCode||'房間'} · ${Math.round(ping)}ms`;
    const scroll=this.shell.querySelector('.co-tactical-scroll')!,top=scroll.scrollTop;
    const ranked=rankScores(players),ids=new Set(ranked.map(player=>player.id));
    for(const[id,row]of this.rows)if(!ids.has(id)){row.remove();this.rows.delete(id);}
    ranked.forEach((player,index)=>{
      let row=this.rows.get(player.id);
      if(!row){row=document.createElement('div');row.className='co-tactical-row';for(let n=0;n<5;n++)row.append(document.createElement('span'));this.rows.set(player.id,row);}
      const values=[String(player.rank),player.name,String(player.score),String(player.bounty),`${player.kills}/${player.deaths}`];
      values.forEach((value,n)=>{if(row!.children[n].textContent!==value)row!.children[n].textContent=value;});
      row.classList.toggle('is-high-bounty',player.bounty>=HIGH_BOUNTY);
      if(this.body.children[index]!==row)this.body.insertBefore(row,this.body.children[index]??null);
    });
    scroll.scrollTop=top;this.layout();
  }
  private layout=()=>{
    const anchor=this.touch&&!this.open?this.trigger:this.panel;
    this.root.style.setProperty('--co-roster-bottom',`${anchor.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`);
  };
  dispose(){
    this.gestures.clear();this.rows.clear();
    this.root.removeEventListener('click',this.onClick,true);
    this.root.removeEventListener('pointerdown',this.onPointerDown,true);this.root.removeEventListener('pointermove',this.onPointerMove,true);
    this.root.removeEventListener('pointerup',this.onPointerEnd,true);this.root.removeEventListener('pointercancel',this.onPointerEnd,true);
    this.root.removeEventListener('touchstart',this.onTouchStart,true);this.root.removeEventListener('touchmove',this.onTouchMove,true);
    this.root.removeEventListener('touchend',this.onTouchEnd,true);this.root.removeEventListener('touchcancel',this.onTouchEnd,true);
    this.root.removeEventListener('armory:open',this.close);window.removeEventListener('keydown',this.onKey);window.removeEventListener('blur',this.onBlur);window.removeEventListener('resize',this.layout);
    this.root.classList.remove('co-touch-ui');this.root.style.removeProperty('--co-roster-bottom');this.shell.remove();
  }
}
