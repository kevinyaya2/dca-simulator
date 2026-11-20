import * as T from 'three';
import { WARDEN_ATTACKS as moves, type WardenAttack, type WardenPoint } from '../../../shared/voidWarden';
import { ARENA_BOUNDS } from '../../../shared/arena';
import { disposeResources } from '../systems/DisposeResources';

const segments=42;
const capacity=5000;
const amber=new T.Color(0xffa04b);
const warning=new T.Color(0xff4f27);
const hit=new T.Color(0xffdcc0);

export class WardenCombatFx {
  readonly group=new T.Group();
  private readonly geometry=new T.BufferGeometry();
  private readonly positions=new Float32Array(capacity*3);
  private readonly colors=new Float32Array(capacity*3);
  private readonly accents=new Float32Array(capacity);
  private readonly bolts:T.InstancedMesh;
  private readonly boltMatrix=new T.Matrix4();
  private cursor=0;
  private readonly emitter=new T.Vector3();
  private readonly corners=Array.from({length:4},()=>new T.Vector3());
  private readonly trail=Array.from({length:8},()=>({base:new T.Vector3(),tip:new T.Vector3(),at:0}));
  private trailIndex=0;
  private trailCount=0;
  private trailAttack=0;

  constructor(coarse:boolean){
    this.geometry.setAttribute('position',new T.BufferAttribute(this.positions,3).setUsage(T.DynamicDrawUsage));
    this.geometry.setAttribute('color',new T.BufferAttribute(this.colors,3).setUsage(T.DynamicDrawUsage));
    this.geometry.setAttribute('strength',new T.BufferAttribute(this.accents,1).setUsage(T.DynamicDrawUsage));
    this.geometry.setDrawRange(0,0);
    const mesh=new T.Mesh(this.geometry,new T.ShaderMaterial({
      transparent:true,depthWrite:false,side:T.DoubleSide,vertexColors:true,toneMapped:false,
      vertexShader:`attribute float strength; varying vec4 tint;
        void main(){ tint=vec4(color,strength); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader:`varying vec4 tint; void main(){ gl_FragColor=tint; }`,
    }));
    mesh.frustumCulled=false;
    mesh.renderOrder=1;
    this.group.add(mesh);
    this.bolts=new T.InstancedMesh(new T.IcosahedronGeometry(.29,coarse?0:1),
      new T.MeshBasicMaterial({color:0xff762d,toneMapped:false}),moves.burst.count);
    this.bolts.count=0;
    this.bolts.instanceMatrix.setUsage(T.DynamicDrawUsage);
    this.bolts.frustumCulled=false;
    this.group.add(this.bolts);
  }

  update(attack:WardenAttack|null,serverNow:number,enraged:boolean,bladeBase:T.Vector3,bladeTip:T.Vector3){
    this.cursor=0;
    this.bolts.count=0;
    if(attack){
      const t=Math.max(0,(serverNow-attack.startedAt)*attack.rate);
      const scale=attack.scale??1;
      const color=enraged?warning:amber;
      const {from,to}=attack;
      switch(attack.kind){
        case 'slash': {
          const spec=moves.slash;
          const index=spec.impact.findIndex(impact=>t<=impact+135);
          if(index<0)break;
          const remaining=spec.impact[index]-t;
          const alpha=remaining>=0?.12+.19*(1-Math.min(1,remaining/550)):.38*(1+remaining/135);
          this.fan(from,spec.range*scale,attack.yaw,spec.angle,remaining<0?hit:color,alpha);
          break;
        }
        case 'dash': {
          const pulse=t>=moves.dash.windup;
          if(t<moves.dash.duration+145)
            this.strip(from,to,moves.dash.width*scale,pulse?hit:color,pulse?.31*(1-Math.max(0,t-moves.dash.duration)/145):.19);
          break;
        }
        case 'leap': {
          const impact=t-moves.leap.duration;
          if(impact<230){
            this.fan(to,moves.leap.radius*scale,0,Math.PI*2,impact>=0?hit:color,impact>=0?.42*(1-impact/230):.21);
            if(impact>=0){
              const radius=moves.leap.radius*scale*(.28+.72*impact/230);
              this.arc(to,radius,0,Math.PI*2,hit,.94*(1-impact/230),.16);
            }
          }
          break;
        }
        case 'burst': {
          const spec=moves.burst;
          const rays=attack.rays??[];
          if(t>spec.impact+210)break;
          const elapsed=(t-spec.launch)/(spec.impact-spec.launch);
          for(const [i,end] of rays.entries()){
            if(elapsed<1)this.strip(from,end,spec.width*scale,color,t<spec.launch?.16:.25);
            this.fan(end,spec.radius*scale,0,Math.PI*2,elapsed>=1?hit:color,elapsed>=1?.38*(1-(t-spec.impact)/210):.18);
            if(elapsed>=0&&elapsed<1){
              this.emitter.set(T.MathUtils.lerp(from.x,end.x,elapsed),from.y+.83,T.MathUtils.lerp(from.z,end.z,elapsed));
              this.boltMatrix.makeTranslation(this.emitter.x,this.emitter.y,this.emitter.z);
              this.bolts.setMatrixAt(i,this.boltMatrix);
              this.bolts.count++;
            }
          }
          if(this.bolts.count){
            this.bolts.instanceMatrix.clearUpdateRanges();
            this.bolts.instanceMatrix.addUpdateRange(0,this.bolts.count*16);
            this.bolts.instanceMatrix.needsUpdate=true;
          }
          break;
        }
      }
    }
    this.drawBladeTrail(attack,serverNow,bladeBase,bladeTip);
    this.geometry.setDrawRange(0,this.cursor);
    if(this.cursor)for(const name of ['position','color','strength']){
      const attribute=this.geometry.getAttribute(name) as T.BufferAttribute;
      attribute.clearUpdateRanges();
      attribute.addUpdateRange(0,this.cursor*attribute.itemSize);
      attribute.needsUpdate=true;
    }
  }

  private drawBladeTrail(attack:WardenAttack|null,now:number,base:T.Vector3,tip:T.Vector3){
    if(!attack||attack.kind!=='slash'){
      this.trailCount=0;
      return;
    }
    if(this.trailAttack!==attack.startedAt){this.trailCount=0;this.trailAttack=attack.startedAt;}
    const time=(now-attack.startedAt)*attack.rate;
    if(moves.slash.impact.some(mark=>time>=mark-100&&time<=mark+105)){
      const sample=this.trail[this.trailIndex];
      sample.base.copy(base);sample.tip.copy(tip);sample.at=now;
      this.trailIndex=(this.trailIndex+1)%this.trail.length;
      this.trailCount=Math.min(this.trailCount+1,this.trail.length);
    }
    for(let i=0;i<this.trailCount-1;i++){
      const a=this.trail[(this.trailIndex+this.trail.length-i-1)%this.trail.length];
      const b=this.trail[(this.trailIndex+this.trail.length-i-2)%this.trail.length];
      const alpha=(1-(now-b.at)/125)*.64;
      if(alpha<=0)break;
      this.triangle(a.base,a.tip,b.tip,amber,alpha);
      this.triangle(a.base,b.tip,b.base,amber,alpha);
    }
  }

  private vertex(p:WardenPoint,color:T.Color,alpha:number){
    const offset=this.cursor*3;
    this.positions[offset]=T.MathUtils.clamp(p.x,ARENA_BOUNDS.minX,ARENA_BOUNDS.maxX);
    this.positions[offset+1]=T.MathUtils.clamp(p.y+.065,-10,650);
    this.positions[offset+2]=T.MathUtils.clamp(p.z,ARENA_BOUNDS.minZ,ARENA_BOUNDS.maxZ);
    this.colors[offset]=color.r;
    this.colors[offset+1]=color.g;
    this.colors[offset+2]=color.b;
    this.accents[this.cursor++]=Math.max(0,alpha);
  }

  private triangle(a:WardenPoint,b:WardenPoint,c:WardenPoint,color:T.Color,alpha:number){
    this.vertex(a,color,alpha);this.vertex(b,color,alpha);this.vertex(c,color,alpha);
  }

  private ringPoint(out:T.Vector3,center:WardenPoint,radius:number,angle:number){
    return out.set(center.x+Math.sin(angle)*radius,center.y,center.z+Math.cos(angle)*radius);
  }

  private fan(center:WardenPoint,radius:number,yaw:number,angle:number,color:T.Color,alpha:number){
    for(let i=0;i<segments;i++){
      const a=yaw-angle/2+angle*i/segments,b=yaw-angle/2+angle*(i+1)/segments;
      this.triangle(center,this.ringPoint(this.corners[0],center,radius,a),this.ringPoint(this.corners[1],center,radius,b),color,alpha);
    }
    this.arc(center,radius,yaw,angle,color,Math.min(.82,alpha*2.8),.095);
  }

  private arc(center:WardenPoint,radius:number,yaw:number,angle:number,color:T.Color,alpha:number,width:number){
    for(let i=0;i<segments;i++){
      const a=yaw-angle/2+angle*i/segments,b=yaw-angle/2+angle*(i+1)/segments;
      const left=this.ringPoint(this.corners[0],center,radius,a),right=this.ringPoint(this.corners[1],center,radius,b);
      const innerLeft=this.ringPoint(this.corners[2],center,radius-width,a),innerRight=this.ringPoint(this.corners[3],center,radius-width,b);
      this.triangle(left,innerLeft,right,color,alpha);
      this.triangle(right,innerLeft,innerRight,color,alpha);
    }
  }

  private strip(from:WardenPoint,to:WardenPoint,width:number,color:T.Color,alpha:number){
    const dx=to.x-from.x,dz=to.z-from.z,length=Math.hypot(dx,dz)||1;
    const x=dz/length*width,z=-dx/length*width;
    const [a,b,c,d]=this.corners;
    a.set(from.x-x,from.y,from.z-z);b.set(from.x+x,from.y,from.z+z);
    c.set(to.x-x,to.y,to.z-z);d.set(to.x+x,to.y,to.z+z);
    this.triangle(a,b,c,color,alpha);
    this.triangle(c,b,d,color,alpha);
    for(let side=-1;side<=1;side+=2){
      a.set(from.x+x*side,from.y,from.z+z*side);b.set(to.x+x*side,to.y,to.z+z*side);
      c.set(from.x+x*(side*.92),from.y,from.z+z*(side*.92));d.set(to.x+x*(side*.92),to.y,to.z+z*(side*.92));
      this.triangle(a,c,b,color,alpha*2.6);
      this.triangle(b,c,d,color,alpha*2.6);
    }
  }

  dispose(){this.group.removeFromParent();disposeResources(this.group);}
}
