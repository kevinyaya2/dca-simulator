import * as T from 'three';
import { PRISM_BLAST_RADIUS, PRISM_RADIUS, PRISM_SPEED, type PrismOrb } from '../../../shared/prism';
import type { Vec3 } from '../../../shared/combat';
import { WEAPON_SPECS } from '../../../shared/weapons';

const COLORS=[0xffda64,0xff769c,0x7deaff,0xb99aff];
const FORWARD=new T.Vector3(0,0,1);
type OrbView={group:T.Group;direction:T.Vector3;remaining:number;predictionSeconds:number;trail:T.InstancedMesh;trailCount:number};
type Burst={group:T.Group;age:number;duration:number;radius:number;kind:'launch'|'impact'|'unlock';rings:T.Mesh[];shards:T.Mesh[];bolts:T.Line[];flash?:T.Mesh};

export class PrismEffects {
  private readonly sphere=new T.SphereGeometry(1,20,12);
  private readonly ring=new T.TorusGeometry(1,.045,6,32);
  private readonly shard=new T.OctahedronGeometry(1);
  private readonly flame=new T.ConeGeometry(.2,1.4,5);
  private readonly bolt=new T.BufferGeometry().setFromPoints([
    new T.Vector3(0,0,0),new T.Vector3(.15,.44,.2),new T.Vector3(-.22,.61,.25),
    new T.Vector3(.22,1.03,-.12),new T.Vector3(.07,1.52,.13),
  ]);
  private readonly electric=new T.LineBasicMaterial({color:0xbbf1ff,transparent:true,opacity:.85,depthWrite:false,blending:T.AdditiveBlending});
  private readonly materials=COLORS.map(color=>new T.MeshBasicMaterial({
    color,transparent:true,opacity:.72,depthWrite:false,blending:T.AdditiveBlending,
  }));
  private readonly trailMaterial=new T.MeshBasicMaterial({
    color:0xffffff,transparent:true,opacity:.72,depthWrite:false,blending:T.AdditiveBlending,
  });
  private readonly auraMaterials=[0xffdc61,0xffac35].map(color=>new T.MeshBasicMaterial({
    color,transparent:true,opacity:.86,depthWrite:false,
  }));
  private readonly core=new T.MeshBasicMaterial({color:0xfff3ce});
  private badgeMaterial?:T.SpriteMaterial;
  private readonly orbs=new Map<string,OrbView>();
  private readonly auras=new Map<string,T.Group>();
  private readonly bursts:Burst[]=[];
  private readonly reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');

  constructor(private readonly scene:T.Scene,private readonly coarse:boolean){}

  private makeOrb(orb:PrismOrb){
    const group=new T.Group(),direction=new T.Vector3(...orb.direction);
    const center=new T.Mesh(this.sphere,this.core);
    center.scale.setScalar(PRISM_RADIUS*.64);group.add(center);
    const shell=new T.Mesh(this.sphere,this.materials[0]);
    shell.scale.setScalar(PRISM_RADIUS*.92);group.add(shell);
    for(let i=0;i<3;i++){
      const band=new T.Mesh(this.ring,this.materials[i+1]);
      band.rotation.set(i*Math.PI/3,-i*Math.PI/4,0);band.scale.setScalar(PRISM_RADIUS*(1+i*.09));
      group.add(band);
    }
    const trailCount=this.coarse?10:18;
    const trail=new T.InstancedMesh(this.shard,this.trailMaterial,trailCount);
    const shard=new T.Object3D();
    shard.scale.set(.44,.44,1.1);
    for(let i=0;i<trailCount;i++){
      const twist=i*1.2;
      shard.position.set(Math.cos(twist)*(1.5+i*.12),Math.sin(twist)*(1.5+i*.12),-2-i*1.35);
      shard.updateMatrix();
      trail.setMatrixAt(i,shard.matrix);
      trail.setColorAt(i,this.materials[i%COLORS.length].color);
    }
    trail.computeBoundingSphere();trail.count=0;group.add(trail);
    group.quaternion.setFromUnitVectors(FORWARD,direction);
    group.position.set(...orb.position);this.scene.add(group);
    const view={group,direction,remaining:orb.remaining,predictionSeconds:.08,trail,trailCount};
    this.orbs.set(orb.id,view);
    return view;
  }

  syncOrbs(orbs:readonly PrismOrb[]){
    const active=new Set(orbs.map(orb=>orb.id));
    for(const [id,view] of this.orbs){
      if(!active.has(id))this.removeOrb(id,view);
    }
    for(const orb of orbs){
      this.syncLaunch(orb);
    }
  }

  syncLaunch(orb:PrismOrb){
    const view=this.orbs.get(orb.id)??this.makeOrb(orb);
    view.group.position.set(...orb.position);view.remaining=orb.remaining;view.predictionSeconds=.08;
  }

  launch(orb:PrismOrb,muzzle:T.Vector3,showOrb=true){
    if(showOrb&&!this.orbs.has(orb.id))this.makeOrb(orb);
    this.burst('launch',muzzle,3,.32,orb.direction);
  }

  impact(id:string,position:Vec3){
    const view=this.orbs.get(id);
    if(view)this.removeOrb(id,view);
    this.burst('impact',new T.Vector3(...position),PRISM_BLAST_RADIUS,.82);
  }

  private removeOrb(id:string,view:OrbView){
    view.group.removeFromParent();
    view.trail.dispose();
    this.orbs.delete(id);
  }

  unlock(x:number,y:number,z:number){
    this.burst('unlock',new T.Vector3(x,y+.12,z),5,1.5);
  }

  aura(id:string,position:T.Vector3,local=false){
    let aura=this.auras.get(id);
    if(!aura){
      aura=new T.Group();
      const base=new T.Mesh(this.ring,this.auraMaterials[0]);
      base.rotation.x=-Math.PI/2;base.position.y=.07;base.scale.setScalar(local?1.8:1.2);aura.add(base);
      if(!local){
        for(let i=0;i<(this.coarse?6:10);i++){
          const flame=new T.Mesh(this.flame,this.auraMaterials[i%4===0?1:0]);
          const angle=i*Math.PI*(3-Math.sqrt(5));
          flame.position.set(Math.cos(angle)*(.55+i%3*.22),.7+i%4*.39,Math.sin(angle)*(.55+i%3*.22));
          flame.rotation.set(Math.sin(angle)*.22,angle,Math.cos(angle)*.22);aura.add(flame);
        }
        const badge=new T.Sprite(this.getBadgeMaterial());
        badge.position.y=3.62;badge.scale.set(2.8,.64,1);aura.add(badge);
      }
      this.auras.set(id,aura);this.scene.add(aura);
    }
    aura.position.copy(position);
  }

  retainAuras(active:ReadonlySet<string>){
    for(const [id,aura] of this.auras){
      if(!active.has(id)){aura.removeFromParent();this.auras.delete(id);}
    }
  }

  private getBadgeMaterial(){
    if(this.badgeMaterial)return this.badgeMaterial;
    const canvas=document.createElement('canvas');
    canvas.width=280;canvas.height=64;
    const ctx=canvas.getContext('2d')!;
    ctx.fillStyle='#261d2a';ctx.strokeStyle='#ffcf64';ctx.lineWidth=4;
    ctx.fillRect(8,6,264,52);ctx.strokeRect(8,6,264,52);
    ctx.fillStyle='#ffe7a2';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font='bold 34px Arial, sans-serif';ctx.fillText('武器全收集',140,34);
    const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;
    this.badgeMaterial=new T.SpriteMaterial({map,transparent:true,depthTest:true,depthWrite:false});
    return this.badgeMaterial;
  }

  private burst(kind:Burst['kind'],position:T.Vector3,radius:number,duration:number,direction?:Vec3){
    const group=new T.Group(),rings:T.Mesh[]=[],shards:T.Mesh[]=[],bolts:T.Line[]=[];
    group.position.copy(position);
    if(direction)group.quaternion.setFromUnitVectors(FORWARD,new T.Vector3(...direction));
    for(let i=0;i<3;i++){
      const ring=new T.Mesh(this.ring,this.materials[i]);
      if(kind!=='launch')ring.rotation.x=-Math.PI/2+i*.47;
      else ring.position.z=i*.6;
      rings.push(ring);group.add(ring);
    }
    const count=this.reducedMotion.matches?0:kind==='launch'?4:this.coarse?14:26;
    for(let i=0;i<count;i++){
      const shard=new T.Mesh(this.shard,this.materials[i%COLORS.length]);
      shards.push(shard);group.add(shard);
    }
    if(kind==='unlock'&&!this.reducedMotion.matches){
      for(let i=0;i<(this.coarse?4:8);i++){
        const bolt=new T.Line(this.bolt,this.electric);
        bolts.push(bolt);group.add(bolt);
      }
    }
    const flash=kind==='impact'?new T.Mesh(this.sphere,this.materials[0]):undefined;
    if(flash)group.add(flash);
    this.scene.add(group);
    this.bursts.push({group,age:0,duration,radius,kind,rings,shards,bolts,flash});
    this.animateBurst(this.bursts[this.bursts.length-1],0);
  }

  private animateBurst(burst:Burst,t:number){
    const expansion=t<.13&&burst.kind==='impact'?.18*(1-t/.13):1-(1-Math.max(0,(t-.13)/.87))**2;
    if(burst.flash){
      const scale=t<.13?PRISM_RADIUS*(1-t/.13):burst.radius*.45*Math.sin(Math.PI*Math.min(1,(t-.13)/.38));
      burst.flash.scale.setScalar(Math.max(.01,scale));
      burst.flash.visible=t<.51;
    }
    burst.rings.forEach((ring,i)=>{
      const radius=.15+burst.radius*expansion*(1-i*.16);
      ring.scale.set(radius,radius,Math.max(.05,(1-t)*3));
      ring.visible=t<1-i*.13;
    });
    burst.shards.forEach((shard,i)=>{
      const angle=i*Math.PI*(3-Math.sqrt(5)),radius=burst.radius*expansion*(.25+i%6*.13);
      const height=burst.kind==='unlock'?t*(1.6+i%5*.73):Math.sin(t*Math.PI)*(1+i%5*.68);
      shard.position.set(Math.cos(angle)*radius,height,Math.sin(angle)*radius);
      shard.rotation.set(t*4,i,t*8);
      shard.scale.setScalar(Math.max(.01,(1-t)*(burst.kind==='impact'?.55:.24)));
    });
    burst.bolts.forEach((bolt,i)=>{
      const angle=i*2.4+t*11,spread=.48+Math.sin(t*Math.PI)*1.25;
      bolt.position.set(Math.cos(angle)*spread,t*(1.4+i%3*.55),Math.sin(angle)*spread);
      bolt.rotation.set(t*.4,angle,t*.65);
      bolt.scale.setScalar(.35+Math.sin(t*Math.PI)*1.15);
    });
  }

  update(dt:number,advanceFlight:boolean,at:number){
    for(const view of this.orbs.values()){
      if(advanceFlight){
        const elapsed=Math.min(dt,view.predictionSeconds);
        const distance=Math.min(view.remaining,elapsed*PRISM_SPEED);
        view.group.position.addScaledVector(view.direction,distance);view.remaining-=distance;
        view.predictionSeconds-=elapsed;
      }
      const traveled=WEAPON_SPECS.prism.range-view.remaining;
      view.trail.count=Math.max(0,Math.min(view.trailCount,Math.ceil((traveled-2)/1.35)));
      if(!this.reducedMotion.matches)view.group.rotateZ(dt*11);
    }
    for(const aura of this.auras.values()){
      if(this.reducedMotion.matches)continue;
      aura.children.forEach((child,i)=>{
        if(i>0&&child instanceof T.Mesh)child.scale.y=1+Math.sin(at*8+i*1.9)*.42;
      });
    }
    for(let i=this.bursts.length-1;i>=0;i--){
      const burst=this.bursts[i];burst.age+=dt;
      if(burst.age>=burst.duration){burst.group.removeFromParent();this.bursts.splice(i,1);}
      else this.animateBurst(burst,burst.age/burst.duration);
    }
  }

  dispose(){
    this.syncOrbs([]);
    this.retainAuras(new Set());
    for(const burst of this.bursts)burst.group.removeFromParent();
    this.bursts.length=0;
    for(const geometry of [this.sphere,this.ring,this.shard,this.flame,this.bolt])geometry.dispose();
    for(const material of [...this.materials,...this.auraMaterials,this.core,this.electric,this.trailMaterial])material.dispose();
    this.badgeMaterial?.map?.dispose();
    this.badgeMaterial?.dispose();
  }
}
