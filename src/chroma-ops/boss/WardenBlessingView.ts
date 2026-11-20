import * as T from 'three';
import type { WardenNotice } from '../../../shared/voidWarden';

type BlessedSeat={id:string;alive:boolean;blessingUntil?:number};
type Avatar={group:T.Group};
const BLESSING_COLOR=0xbb78ff;

export class WardenBlessingView {
  private readonly badge=document.createElement('div');
  private readonly timer=document.createElement('b');
  private readonly notice=document.createElement('div');
  private readonly aura=new Map<string,T.Group>();
  private readonly auraGeometry=new T.RingGeometry(.82,.97,30);
  private readonly auraMaterial=new T.MeshBasicMaterial({
    color:BLESSING_COLOR,transparent:true,opacity:.69,depthWrite:false,side:T.DoubleSide,
  });
  private noticeUntil=0;

  constructor(private root:HTMLElement,private scene:T.Scene){
    this.badge.className='co-warden-buff';
    this.badge.hidden=true;
    this.badge.title='武器傷害 +20% · 移動速度 +10%';
    const label=document.createElement('span');
    label.textContent='虛空祝福';
    const symbol=document.createElement('i');
    symbol.setAttribute('aria-hidden','true');
    symbol.textContent='◆';
    this.badge.append(symbol,label,this.timer);
    this.notice.className='co-warden-notice';
    this.notice.hidden=true;
    this.notice.setAttribute('role','status');
    root.append(this.badge,this.notice);
  }

  announce(event:WardenNotice,at:number){
    const messages={
      recruited:`${event.name} 擊敗並收編了虛空騎士`,
      destroyed:`${event.name} 擊倒了已收編的虛空騎士`,
      'player-slain':`${event.name} 被虛空騎士擊倒`,
    };
    this.notice.textContent=messages[event.kind];
    this.notice.hidden=false;
    this.noticeUntil=at+3400;
  }

  update(players:Iterable<BlessedSeat>,avatars:ReadonlyMap<string,Avatar>,until:number,at:number){
    this.badge.hidden=until<=at;
    this.root.classList.toggle('co-warden-blessed',!this.badge.hidden);
    if(!this.badge.hidden){
      const next=`${Math.ceil((until-at)/1000)}s`;
      if(this.timer.textContent!==next)this.timer.textContent=next;
    }
    this.notice.hidden=at>=this.noticeUntil;
    const active=new Set<string>();
    for(const p of players){
      const avatar=avatars.get(p.id);
      if(!p.alive||(p.blessingUntil??0)<=at||!avatar)continue;
      active.add(p.id);
      let aura=this.aura.get(p.id);
      if(!aura){
        aura=new T.Group();
        for(const [height,tilt] of [[.05,-Math.PI/2],[1.43,-Math.PI*.32]]){
          const ring=new T.Mesh(this.auraGeometry,this.auraMaterial);
          ring.rotation.x=tilt;
          ring.position.y=height;
          if(height>1)ring.scale.setScalar(.77);
          aura.add(ring);
        }
        this.aura.set(p.id,aura);
        this.scene.add(aura);
      }
      aura.position.copy(avatar.group.position);
      aura.rotation.y=at/600;
    }
    for(const [id,aura] of this.aura){
      if(!active.has(id)){aura.removeFromParent();this.aura.delete(id);}
    }
  }

  hide(){this.badge.hidden=true;this.notice.hidden=true;this.root.classList.remove('co-warden-blessed');}

  dispose(){
    for(const aura of this.aura.values())aura.removeFromParent();
    this.aura.clear();
    this.auraGeometry.dispose();this.auraMaterial.dispose();
    this.root.classList.remove('co-warden-blessed');
    this.badge.remove();this.notice.remove();
  }
}
