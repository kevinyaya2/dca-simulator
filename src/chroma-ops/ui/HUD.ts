export type HUDData={quickReloadSeconds?:number;level?:number;capacity?:number;score?:number;bounty?:number;scoreTarget?:number;remainingSeconds?:number;hp:number;ammo:number;reserve:number;label:string;notice:string;kills:number;deaths:number;dead:boolean;killer:string;hit:boolean;kill:boolean;reloading:boolean};
const escapeText=(value:string)=>value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!));
export class HUD{
  private death=document.createElement('div');private wasDead=false;private hideTimer=0;private signature='';
  constructor(private el:HTMLElement){this.death.className='co-dead';this.death.hidden=true;this.el.parentElement?.append(this.death);}
  render(d:HUDData){
    const reserve=Number.isFinite(d.reserve)?d.reserve:'∞';
    const seconds=d.remainingSeconds??0;
    const score=d.score===undefined?`擊殺 ${d.kills} <span>／</span> 死亡 ${d.deaths}`:`積分 ${d.score} / ${d.scoreTarget}<small>賞金 ${d.bounty} · ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} · K/D ${d.kills}/${d.deaths}</small>`;
    const signature=`${d.quickReloadSeconds}|${d.level}|${d.capacity}|${d.hp}|${d.ammo}|${reserve}|${d.label}|${d.notice}|${d.kills}|${d.deaths}|${d.kill}|${d.reloading}|${score}`;if(signature!==this.signature){this.signature=signature;this.el.innerHTML=`<div class="co-score">${score}</div><div class="co-hp">生命值 <b>${d.hp}</b></div><div class="co-ammo">${d.label} <span class="co-hud-level">Lv.${d.level??1}</span><br><b>${d.ammo} <small>/ ${d.capacity??reserve}</small></b><small class="co-reserve">&#28961;&#38480;&#20633;&#24392; ${reserve}</small>${d.quickReloadSeconds?`<em class="co-quick-reload">&#24555;&#36895;&#25563;&#24392; ${d.quickReloadSeconds}s &middot; -25%</em>`:''}${d.reloading?'<em>換彈中</em>':''}</div>${d.notice?`<div class="co-notice">${escapeText(d.notice)}</div>`:''}<i class="co-crosshair ${d.kill?'is-kill':''}"></i>`;}
    if(d.dead&&!this.wasDead){window.clearTimeout(this.hideTimer);this.death.hidden=false;this.death.classList.remove('is-leaving');this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${escapeText(d.killer||'未知敵人')}</b></div><small>正在準備重生…</small></section>`;}
    if(!d.dead&&this.wasDead){this.death.classList.add('is-leaving');this.hideTimer=window.setTimeout(()=>{this.death.hidden=true;this.death.classList.remove('is-leaving');},180);}
    this.el.parentElement?.classList.toggle('co-is-dead',d.dead);this.wasDead=d.dead;
  }
  dispose(){
    window.clearTimeout(this.hideTimer);this.death.remove();this.el.replaceChildren();
    this.el.parentElement?.classList.remove('co-is-dead');
  }

}
