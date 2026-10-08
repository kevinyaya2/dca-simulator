import * as T from 'three';
import { WEAPON_SPECS } from '../../../shared/weapons';
import type { HitConfirmation, KillEvent } from '../../../shared/combat';
export class BattleFeedback{
  private el=document.createElement('div');private feed=document.createElement('div');private banner=document.createElement('div');private marker=document.createElement('div');
  private entries:{el:HTMLElement;life:number}[]=[];private numbers:{el:HTMLElement;life:number;position:T.Vector3}[]=[];
  private seen=new Set<string>();private ids:string[]=[];private markerLife=0;private markerRank=0;private bannerLife=0;private bannerAttacker='';private audio?:AudioContext;private disposed=false;
  private unlock=()=>{if(!this.audio){try{this.audio=new AudioContext();}catch{return;}}void this.audio.resume().catch(()=>{});};
  constructor(private root:HTMLElement){this.el.className='co-battle-feedback';this.feed.className='co-kill-feed';this.banner.className='co-kill-banner';this.marker.className='co-hit-marker';this.banner.hidden=this.marker.hidden=true;this.el.append(this.feed,this.banner,this.marker);root.append(this.el);root.addEventListener('pointerdown',this.unlock);root.addEventListener('keydown',this.unlock);}
  private accept(id:string){if(this.seen.has(id))return false;this.seen.add(id);this.ids.push(id);if(this.ids.length>1024)this.seen.delete(this.ids.shift()!);return true;}
  hit(event:HitConfirmation){if(!this.accept(`hit:${event.eventId}`)||!event.hits.length)return;
    const rank=event.hits.some(h=>h.killed)?3:event.hits.some(h=>h.headshot)?2:1;
    if(rank>=this.markerRank||!this.markerLife){this.markerRank=rank;this.marker.className=`co-hit-marker ${rank===3?'is-kill':rank===2?'is-head':''}`;this.marker.hidden=false;this.markerLife=.18;}
    this.tone(rank);
    for(const hit of event.hits){if(hit.damage<=0)continue;const el=document.createElement('span');el.className=`co-damage-number ${hit.killed?'is-kill':hit.headshot?'is-head':''}`;el.textContent=String(hit.damage);this.el.append(el);this.numbers.push({el,life:.7,position:new T.Vector3(...hit.position)});if(this.numbers.length>24)this.numbers.shift()!.el.remove();}
  }
  kill(event:KillEvent){if(!this.accept(`kill:${event.eventId}`))return;
    const entry=document.createElement('div');entry.className='co-kill-entry';
    const attacker=document.createElement('b'),weapon=document.createElement('span'),victim=document.createElement('b');attacker.textContent=event.attackerName;weapon.textContent=`${WEAPON_SPECS[event.weapon].icon}${event.headshot?' · 爆頭':''}`;weapon.title=WEAPON_SPECS[event.weapon].label;victim.textContent=event.victimName;entry.append(attacker,weapon,victim);this.feed.prepend(entry);this.entries.push({el:entry,life:6});while(this.entries.length>5)this.entries.shift()!.el.remove();
    const multi=event.multi>=2?(['','','雙殺','三連殺','四連殺','五連殺'][event.multi]??`${event.multi} 連殺`):'';
    if(!multi&&!event.title)return;
    // Upgrade the same attacker's banner in place; other announcements replace it.
    const same=this.bannerAttacker===event.attackerId&&this.bannerLife>0;this.bannerAttacker=event.attackerId;this.banner.replaceChildren();const name=document.createElement('small'),title=document.createElement('strong');name.textContent=event.attackerName;title.textContent=[multi,event.title].filter(Boolean).join(' · ');this.banner.append(name,title);this.banner.hidden=false;this.bannerLife=2;if(!same){this.banner.classList.remove('is-entering');void this.banner.offsetWidth;this.banner.classList.add('is-entering');}
  }
  private tone(rank:number){const context=this.audio;if(!context||context.state!=='running')return;const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(rank===3?660:rank===2?1040:780,context.currentTime);oscillator.frequency.exponentialRampToValueAtTime(rank===3?980:500,context.currentTime+.075);gain.gain.setValueAtTime(.045,context.currentTime);gain.gain.exponentialRampToValueAtTime(.001,context.currentTime+.09);oscillator.connect(gain).connect(context.destination);oscillator.start();oscillator.stop(context.currentTime+.1);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};}
  update(dt:number,camera:T.Camera){if(this.disposed)return;this.markerLife=Math.max(0,this.markerLife-dt);if(!this.markerLife){this.marker.hidden=true;this.markerRank=0;}this.bannerLife=Math.max(0,this.bannerLife-dt);this.banner.hidden=this.bannerLife===0;this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25));
    this.entries=this.entries.filter(e=>{e.life-=dt;if(e.life<=0){e.el.remove();return false;}e.el.style.opacity=String(Math.min(1,e.life/.4));return true;});
    this.numbers=this.numbers.filter(n=>{n.life-=dt;if(n.life<=0){n.el.remove();return false;}const p=n.position.clone().project(camera),visible=p.z>=-1&&p.z<=1&&Math.abs(p.x)<1.1&&Math.abs(p.y)<1.1;n.el.hidden=!visible;n.el.style.left=`${(p.x*.5+.5)*100}%`;n.el.style.top=`calc(${(-p.y*.5+.5)*100}% - ${(1-n.life/.7)*34}px)`;n.el.style.opacity=String(Math.min(1,n.life/.2));return true;});
  }
  dispose(){this.disposed=true;this.root.removeEventListener('pointerdown',this.unlock);this.root.removeEventListener('keydown',this.unlock);void this.audio?.close().catch(()=>{});this.el.remove();this.entries=[];this.numbers=[];this.seen.clear();}
}
