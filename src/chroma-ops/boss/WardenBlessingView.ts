import * as T from 'three';
import { VOID_WARDEN, type WardenNotice, type WardenSpawnWarning } from '../../../shared/voidWarden';
import { disposeResources } from '../systems/DisposeResources';

type BlessedSeat={id:string;alive:boolean;connected?:boolean;blessingUntil?:number};
type Avatar={group:T.Group};
const BLESSING_COLOR=0xbb78ff;

export class WardenBlessingView {
  private readonly badge=document.createElement('div');
  private readonly timer=document.createElement('b');
  private readonly notice=document.createElement('div');
  private readonly spawnNotice=document.createElement('div');
  private readonly spawnCountdown=document.createElement('b');
  private readonly royalBadge=document.createElement('div');
  private ownerMark?:T.Group;
  private readonly aura=new Map<string,T.Group>();
  private readonly auraGeometry=new T.RingGeometry(.82,.97,30);
  private readonly auraMaterial=new T.MeshBasicMaterial({
    color:BLESSING_COLOR,transparent:true,opacity:.69,depthWrite:false,side:T.DoubleSide,
  });
  private noticeUntil=0;
  private lastWarningAt:number|null=null;

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
    this.spawnNotice.className='co-warden-spawn-warning';
    this.spawnNotice.hidden=true;
    this.spawnNotice.setAttribute('role','status');
    const warningTitle=document.createElement('strong');
    warningTitle.textContent=`${VOID_WARDEN.name}即將登場`;
    const location=document.createElement('span');
    location.textContent=VOID_WARDEN.locationLabel;
    this.spawnCountdown.setAttribute('aria-hidden','true');
    this.spawnNotice.append(warningTitle,location,this.spawnCountdown);
    this.royalBadge.className='co-warden-royal';
    this.royalBadge.textContent='♛ 紫光王者';
    this.royalBadge.hidden=true;
    root.append(this.badge,this.notice,this.spawnNotice,this.royalBadge);
  }

  showSpawnWarning(warning:WardenSpawnWarning|null,at:number){
    const remaining=warning?warning.spawnAt-at:0;
    this.spawnNotice.hidden=remaining<=0||remaining>VOID_WARDEN.warningMs;
    if(!warning||this.spawnNotice.hidden)return false;
    const label=`${Math.ceil(remaining/1000)} 秒`;
    if(this.spawnCountdown.textContent!==label)this.spawnCountdown.textContent=label;
    if(this.lastWarningAt===warning.spawnAt)return false;
    this.lastWarningAt=warning.spawnAt;
    return true;
  }

  announce(event:WardenNotice,at:number){
    const messages={
      recruited:`${event.name} 擊敗並收編了虛空騎士`,
      destroyed:`${event.name} 擊倒了已收編的虛空騎士`,
      'player-slain':`${event.name} 被虛空騎士擊倒`,
    };
    const award=event.scoreAwarded??0;
    this.notice.textContent=event.kind==='player-slain'&&award
      ? `${messages[event.kind]} · ${event.ownerName?`${event.ownerName} +${award} 積分`:`騎士賞金 +${award}`}`
      : `${messages[event.kind]}${award?` · +${award} 積分`:''}`;
    this.notice.hidden=false;
    this.noticeUntil=at+3400;
  }

  update(players:Iterable<BlessedSeat>,avatars:ReadonlyMap<string,Avatar>,until:number,at:number,ownerId:string|null=null,localId=''){
    this.badge.hidden=until<=at;
    this.root.classList.toggle('co-warden-blessed',!this.badge.hidden);
    if(!this.badge.hidden){
      const next=`${Math.ceil((until-at)/1000)}s`;
      if(this.timer.textContent!==next)this.timer.textContent=next;
    }
    this.notice.hidden=at>=this.noticeUntil;
    this.royalBadge.hidden=ownerId===null||ownerId!==localId;
    if(this.ownerMark)this.ownerMark.visible=false;
    const active=new Set<string>();
    for(const p of players){
      const avatar=avatars.get(p.id);
      if(p.id===ownerId&&p.alive&&p.connected!==false&&avatar){
        this.ownerMark??=this.createOwnerMark();
        this.ownerMark.visible=true;
        this.ownerMark.position.copy(avatar.group.position);
      }
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

  private createOwnerMark(){
    const mark=new T.Group(),canvas=document.createElement('canvas');
    canvas.width=128;canvas.height=96;
    const ctx=canvas.getContext('2d');
    if(ctx){
      ctx.fillStyle='#edc6ff';ctx.strokeStyle='#8b26ff';ctx.shadowColor='#ac36ff';ctx.shadowBlur=20;ctx.lineWidth=5;
      ctx.beginPath();
      ctx.moveTo(19,25);ctx.lineTo(44,42);ctx.lineTo(64,16);ctx.lineTo(84,42);
      ctx.lineTo(109,25);ctx.lineTo(99,65);ctx.lineTo(29,65);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillRect(30,72,68,6);
      const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
      const crown=new T.Sprite(new T.SpriteMaterial({map:texture,transparent:true,depthWrite:false}));
      crown.position.y=2.55;crown.scale.set(1.65,1.24,1);
      mark.add(crown);
    }
    const ring=new T.Mesh(new T.RingGeometry(.95,1.19,36),new T.MeshBasicMaterial({
      color:0xbb53ff,transparent:true,opacity:.84,depthWrite:false,side:T.DoubleSide,
    }));
    ring.rotation.x=-Math.PI/2;ring.position.y=.08;
    mark.add(ring);
    this.scene.add(mark);
    return mark;
  }

  hide(){
    this.badge.hidden=true;this.notice.hidden=true;this.spawnNotice.hidden=true;this.royalBadge.hidden=true;
    if(this.ownerMark)this.ownerMark.visible=false;
    this.root.classList.remove('co-warden-blessed');
  }

  dispose(){
    for(const aura of this.aura.values())aura.removeFromParent();
    this.aura.clear();
    this.auraGeometry.dispose();this.auraMaterial.dispose();
    if(this.ownerMark){this.ownerMark.removeFromParent();disposeResources(this.ownerMark);}
    this.root.classList.remove('co-warden-blessed');
    this.badge.remove();this.notice.remove();this.spawnNotice.remove();this.royalBadge.remove();
  }
}
