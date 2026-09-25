export type HUDData={hp:number;ammo:number;reserve:number;label:string;notice:string;kills:number;deaths:number;dead:boolean;killer:string;hit:boolean;kill:boolean;reloading:boolean};
export class HUD{
  private death=document.createElement('div');private wasDead=false;private hideTimer=0;private signature='';
  constructor(private el:HTMLElement){this.death.className='co-dead';this.death.hidden=true;this.el.parentElement?.append(this.death);}
  render(d:HUDData){
    const reserve=Number.isFinite(d.reserve)?d.reserve:'∞';
    const signature=`${d.hp}|${d.ammo}|${reserve}|${d.label}|${d.notice}|${d.kills}|${d.deaths}|${d.kill}|${d.reloading}`;if(signature!==this.signature){this.signature=signature;this.el.innerHTML=`<div class="co-score">擊殺 ${d.kills} <span>／</span> 死亡 ${d.deaths}</div><div class="co-hp">生命值 <b>${d.hp}</b></div><div class="co-ammo">${d.label}<br><b>${d.ammo} <small>/ ${reserve}</small></b>${d.reloading?'<em>換彈中</em>':''}</div>${d.notice?`<div class="co-notice">${d.notice}</div>`:''}<i class="co-crosshair ${d.kill?'is-kill':''}"></i>`;}
    if(d.dead&&!this.wasDead){window.clearTimeout(this.hideTimer);this.death.hidden=false;this.death.classList.remove('is-leaving');this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${d.killer||'未知敵人'}</b></div><small>正在準備重生…</small></section>`;}
    if(!d.dead&&this.wasDead){this.death.classList.add('is-leaving');this.hideTimer=window.setTimeout(()=>{this.death.hidden=true;this.death.classList.remove('is-leaving');},180);}
    this.el.parentElement?.classList.toggle('co-is-dead',d.dead);this.wasDead=d.dead;
  }
}
