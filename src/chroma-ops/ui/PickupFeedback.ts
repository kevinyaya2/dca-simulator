import { WEAPON_SPECS, type WeaponPickupResult } from '../../../shared/weapons';

/** Uses match time rather than timers, so feedback pauses and disposes with the game. */
export class PickupFeedback {
  private el=document.createElement('div');
  private queue:WeaponPickupResult[]=[];
  private remaining=0;
  private seen=new Set<string>();
  constructor(root:HTMLElement,private coarse:boolean){
    this.el.className='co-pickup-feedback';this.el.hidden=true;
    this.el.setAttribute('role','status');this.el.setAttribute('aria-live','polite');
    root.append(this.el);
  }
  push(result:WeaponPickupResult,eventId?:string){
    if(eventId){if(this.seen.has(eventId))return;this.seen.add(eventId);if(this.seen.size>256)this.seen.delete(this.seen.values().next().value!);}
    if(this.queue.length<3)this.queue.push(result);
    if(!this.remaining)this.next();
  }
  private next(){
    const result=this.queue.shift();this.el.hidden=!result;if(!result)return;
    const spec=WEAPON_SPECS[result.weapon];
    this.el.dataset.level=String(result.level);this.el.style.setProperty('--weapon',`#${spec.color.toString(16).padStart(6,'0')}`);
    const title=result.kind==='unlock'?'取得新武器':result.kind==='upgrade'?`升至 Lv.${result.level}`:result.kind==='boost'?'滿級・快速換彈':'滿級・彈藥補滿';
    const detail=result.kind==='unlock'?(this.coarse?'點擊武器庫選擇裝備':'按 Q 開啟武器庫裝備'):result.kind==='upgrade'?`${result.previousCapacity} → ${result.capacity} 發彈匣 · 已補滿`:result.kind==='boost'?'換彈時間 -25% · 持續 8 秒・重拾刷新':`${result.capacity} 發彈匣 · +${result.ammoAdded} 發`;
    this.el.replaceChildren();
    const icon=document.createElement('span'),body=document.createElement('div'),heading=document.createElement('strong'),name=document.createElement('b'),description=document.createElement('small');
    icon.textContent=spec.icon;heading.textContent=title;name.textContent=`${spec.label} · Lv.${result.level}`;description.textContent=detail;
    body.append(heading,name,description);this.el.append(icon,body);this.remaining=2;
  }
  update(dt:number){if(this.remaining){this.remaining=Math.max(0,this.remaining-dt);if(!this.remaining)this.next();}}
  dispose(){this.el.remove();this.queue=[];this.seen.clear();}
}
