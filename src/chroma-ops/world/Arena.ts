import * as T from 'three';
import { FerrisWheel } from './FerrisWheel';
import { SAFE_SPAWNS } from '../../../shared/spawns';
import { ARENA_BOUNDS, ARENA_BOXES, terrainHeight, type ArenaBox } from '../../../shared/arena';
import { CITY_BUILDINGS, CITY_RAMPS, CITY_GARDENS, CITY_LAMPS, CITY_WAYPOINTS, cityBox } from '../../../shared/city';
import { cutEntrances, MALL_ENTRIES, MALL_SHOPS } from '../../../shared/underground';
import { liftBoxes } from '../../../shared/movingPlatforms';
import { dayNightAt } from '../../../shared/dayNight';
import { disposeResources } from '../systems/DisposeResources';

type Palette={material:T.MeshBasicMaterial;base:T.Color;night:number;glow?:T.Color};
export class Arena {
  readonly group=new T.Group();
  readonly wheel=new FerrisWheel();
  readonly boxes=ARENA_BOXES;
  readonly spawns=SAFE_SPAWNS;
  readonly waypoints=CITY_WAYPOINTS;
  private lift:T.Mesh[]=[];
  private palette:Palette[]=[];
  private pools=new T.Group();
  private poolMaterial=new T.MeshBasicMaterial({color:0xffdd92,transparent:true,opacity:0,depthWrite:false});
  private unitBox=new T.BoxGeometry(1,1,1);
  private matrix=new T.Matrix4();
  private daySky=new T.Color(0x16b9dc);
  private sunset=new T.Color(0xc779a4);
  private nightSky=new T.Color(0x100c35);
  private sky=new T.Color();
  private lastNight=-1;
  groundHeight(x:number,z:number){return terrainHeight(x,z);}

  constructor(){
    this.group.add(this.wheel.group,this.pools);
    this.drawBoxes(ARENA_BOXES.filter(b=>b.maxY>0));
    this.drawBoxes(ARENA_BOXES.filter(b=>b.maxY<=0),undefined,true);
    this.drawBoxes([
      cityBox(0,0,ARENA_BOUNDS.width,ARENA_BOUNDS.depth,0,0x19b9dc,-.05),
      cityBox(0,0,78,62,.025,0xd5edf0,-.05),
      cityBox(-65,0,16,180,.03,0xe9edf1,-.04),cityBox(68,0,16,180,.03,0xe9edf1,-.04),
      cityBox(0,-64,184,16,.03,0xe9edf1,-.04),cityBox(0,76,210,12,.03,0xe9edf1,-.04),
      cityBox(0,24,112,12,.03,0xe9edf1,-.04),cityBox(0,102,92,16,.03,0x99d9df,-.04),
      cityBox(0,62,44,20,12,0x188bd0),cityBox(4,100,32,24,6,0x795ad8),
    ].flatMap(b=>b.maxY<1?cutEntrances(b):[b]));
    for(const ramp of CITY_RAMPS)this.ramp(ramp.x,ramp.z0,ramp.x,ramp.z1,ramp.from,ramp.to,ramp.width);
    this.ramp(-20.5,40,-20.5,52,0,12,9);
    this.ramp(-38,100,-12,100,0,6,24);
    for(const e of MALL_ENTRIES){
      if(e.kind==='ramp')this.ramp(0,e.outer,0,e.inner,0,-6,6);
      const sign=this.sign(`B1  ${e.name}  MALL`,e.axis==='z'?0:e.outer,2.8,e.axis==='z'?e.outer:e.cross,0x75ffe1);sign.rotation.y=e.name==='NORTH'?Math.PI:e.name==='WEST'?-Math.PI/2:e.name==='EAST'?Math.PI/2:0;
    }
    this.makeWindows();this.makeStreet();this.makeMall();
    this.lift=liftBoxes(0).map(b=>{const mesh=new T.Mesh(new T.BoxGeometry(b.maxX-b.minX,b.maxY-b.minY,b.maxZ-b.minZ),new T.MeshBasicMaterial({color:b.color}));this.group.add(mesh);return mesh;});
    for(const b of CITY_BUILDINGS)this.sign(b.name,b.x,5,b.z+12.35,b.color);
    this.sign('SKY WALK  /  6m',0,7.8,38.15,0xffc330);
    this.sign('FERRIS PLAZA',0,3,-85,0xff4e98);
    this.sign('LIFT  0 / 6 / 12',68,13.6,25.75,0xff4e98);
    const seen=new Set<T.MeshBasicMaterial>();
    this.group.traverse(object=>{
      if(!(object instanceof T.Mesh))return;
      const materials=Array.isArray(object.material)?object.material:[object.material];
      for(const material of materials){
        if(!(material instanceof T.MeshBasicMaterial)||material===this.poolMaterial||seen.has(material))continue;
        seen.add(material);
        const color=material.color.getHex(),path=[0xe9edf1,0xd5edf0,0x99d9df,0xffffff].includes(color);
        const glow=material.userData.glow as number|undefined;
        this.palette.push({material,base:material.color.clone(),night:material.userData.fixedLight?1:(path?.63:.38),glow:glow===undefined?undefined:new T.Color(glow)});
      }
    });
    // The wheel stays readable and becomes a pink / violet night landmark.
    this.wheel.group.traverse(object=>{if(object instanceof T.Mesh){const entry=this.palette.find(p=>p.material===object.material);if(entry){entry.night=.85;const color=entry.base.getHex();if(color===0xffc330)entry.glow=new T.Color(0xff78d8);if(color===0x169ee0)entry.glow=new T.Color(0x9b85ff);}}});
    this.update(0,0);
  }

  private drawBoxes(boxes:readonly ArenaBox[],glow?:number,fixedLight=false){
    const batches=new Map<number,ArenaBox[]>();
    for(const box of boxes){const items=batches.get(box.color)||[];items.push(box);batches.set(box.color,items);}
    for(const [color,items] of batches){
      const material=new T.MeshBasicMaterial({color});material.userData.fixedLight=fixedLight;if(glow!==undefined)material.userData.glow=glow;
      const mesh=new T.InstancedMesh(this.unitBox,material,items.length);
      items.forEach((b,index)=>{this.matrix.makeScale(b.maxX-b.minX,b.maxY-b.minY,b.maxZ-b.minZ);this.matrix.setPosition((b.minX+b.maxX)/2,(b.minY+b.maxY)/2,(b.minZ+b.maxZ)/2);mesh.setMatrixAt(index,this.matrix);});
      mesh.instanceMatrix.needsUpdate=true;this.group.add(mesh);
    }
  }

  private ramp(x0:number,z0:number,x1:number,z1:number,y0:number,y1:number,width:number){
    const length=Math.hypot(x1-x0,z1-z0),rx=(z1-z0)/length*width/2,rz=-(x1-x0)/length*width/2,bottom=Math.min(y0,y1)-.1;
    const vertices=[x0-rx,y0,z0-rz,x0+rx,y0,z0+rz,x1+rx,y1,z1+rz,x1-rx,y1,z1-rz,x0-rx,bottom,z0-rz,x0+rx,bottom,z0+rz,x1+rx,bottom,z1+rz,x1-rx,bottom,z1-rz];
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
    geometry.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]);geometry.computeVertexNormals();
    this.group.add(new T.Mesh(geometry,new T.MeshBasicMaterial({color:0xffc330,side:T.DoubleSide})));
  }

  private makeWindows(){
    const frames:ArenaBox[]=[];
    for(const b of CITY_BUILDINGS)for(const base of [0,6])for(const side of [-1,1])for(const axis of ['x','z'])for(const [u,w] of [[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){
      const add=(offset:number,width:number,y:number,height:number)=>frames.push(axis==='x'?cityBox(b.x+side*12.23,b.z+offset,.05,width,y+height/2,0xd4fff6,y-height/2):cityBox(b.x+offset,b.z+side*12.23,width,.05,y+height/2,0xd4fff6,y-height/2));
      for(const y of [base+1.23,base+3.47])add(u,w,y,.08);
      for(const offset of [u-w/2,u+w/2])add(offset,.08,base+2.35,2.3);
      if(b.name.includes('STUDIO')||b.name.includes('GALLERY'))add(u,.06,base+2.35,2.3);
      if(b.name.includes('GARDEN')||b.name.includes('MARKET'))add(u,w,base+2.7,.06);
    }
    this.drawBoxes(frames,0x75ffe1);

  }

  private makeMall(){
    this.drawBoxes([
      cityBox(0,2,32,24,-5.98,0xc3addf,-6),
      ...[-14,18].map(z=>cityBox(0,z,176,8,-5.98,0x57b8be,-6)),
      ...[-64,64].map(x=>cityBox(x,2,8,40,-5.98,0x57b8be,-6)),
    ],undefined,true);
    const trims:ArenaBox[]=[];
    for(const s of MALL_SHOPS){
      this.sign(s.name,s.x,-1.4,8.2,s.color);
      this.sign(s.name,s.x,-1.4,-4.2,s.color);
      for(const z of [-4.2,8.2])trims.push(cityBox(s.x,z,8,.08,-.65,s.color,-.8));
    }
    for(const z of [-14,18])trims.push(cityBox(0,z,168,.35,-.42,0x75ffe1,-.5));
    for(const x of [-64,0,64])trims.push(cityBox(x,2,.35,38,-.42,0xffd776,-.5));
    this.drawBoxes(trims,undefined,true);
    this.sign('B1  COLOR MALL',0,-1.6,2,0x75ffe1);
    this.sign('NORTH EXIT',0,-1.5,-20,0x75ffe1);
    this.sign('SOUTH EXIT',0,-1.5,24,0x75ffe1).rotation.y=Math.PI;
    this.sign('WEST EXIT',-88,-1.5,9,0x75ffe1).rotation.y=Math.PI/2;
    this.sign('EAST EXIT',88,-1.5,9,0x75ffe1).rotation.y=-Math.PI/2;
  }

  private makeStreet(){
    const trunkGeometry=new T.CylinderGeometry(.28,.4,3,6),leafGeometry=new T.IcosahedronGeometry(1,0);
    const trunk=new T.InstancedMesh(trunkGeometry,new T.MeshBasicMaterial({color:0xffa72c}),CITY_GARDENS.length);
    const leaves=new T.InstancedMesh(leafGeometry,new T.MeshBasicMaterial({color:0xffffff}),CITY_GARDENS.length*5);
    const colors=[0xff4eaa,0xffd34e,0x4eddb5,0x98e94b,0x66d9ff];
    CITY_GARDENS.forEach(([x,z],id)=>{
      this.matrix.makeTranslation(x,2.1,z);trunk.setMatrixAt(id,this.matrix);
      for(let n=0;n<5;n++){const angle=n*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1);this.matrix.setPosition(x+Math.sin(angle)*1.1,3.7+(n%2)*.8,z+Math.cos(angle)*1.1);leaves.setMatrixAt(id*5+n,this.matrix);leaves.setColorAt(id*5+n,new T.Color(colors[n]));}
    });this.group.add(trunk,leaves);
    const heads=CITY_LAMPS.map(([x,z])=>cityBox(x+.65,z,1.5,.65,4.9,0xfff2d1,4.6));this.drawBoxes(heads,0xffe39c);
    const poolGeometry=new T.CircleGeometry(4.5,16);
    for(const [x,z] of CITY_LAMPS){const pool=new T.Mesh(poolGeometry,this.poolMaterial);pool.rotation.x=-Math.PI/2;pool.position.set(x+.65,.045,z);this.pools.add(pool);}
  }

  private sign(text:string,x:number,y:number,z:number,color:number){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=96;
    const context=canvas.getContext('2d')!;context.fillStyle='#12203b';context.fillRect(0,0,512,96);
    context.strokeStyle='#'+color.toString(16).padStart(6,'0');context.lineWidth=10;context.strokeRect(3,3,506,90);
    context.fillStyle='#ffffff';context.font='bold 32px Arial';context.textAlign='center';context.fillText(text,256,60);
    const material=new T.MeshBasicMaterial({map:new T.CanvasTexture(canvas),side:T.DoubleSide});material.userData.glow=0xffffff;
    const mesh=new T.Mesh(new T.PlaneGeometry(8,1.5),material);mesh.position.set(x,y,z);this.group.add(mesh);return mesh;
  }

  update(seconds:number,environmentSeconds=seconds,renderer?:T.WebGLRenderer){
    this.wheel.update(seconds);
    liftBoxes(seconds).forEach((b,index)=>this.lift[index]?.position.set((b.minX+b.maxX)/2,(b.minY+b.maxY)/2,(b.minZ+b.maxZ)/2));
    const {night}=dayNightAt(environmentSeconds);
    if(Math.abs(night-this.lastNight)>1e-5){
      for(const entry of this.palette){entry.material.color.copy(entry.base);if(entry.glow)entry.material.color.lerp(entry.glow,night);else entry.material.color.multiplyScalar(1-night*(1-entry.night));}
      this.poolMaterial.opacity=night*.16;this.pools.visible=night>.01;this.lastNight=night;
    }
    if(renderer){
      if(night<.5)this.sky.copy(this.daySky).lerp(this.sunset,night*2);else this.sky.copy(this.sunset).lerp(this.nightSky,night*2-1);
      renderer.setClearColor(this.sky);
    }
  }
  dispose(){this.group.removeFromParent();disposeResources(this.group);this.group.clear();}
}
