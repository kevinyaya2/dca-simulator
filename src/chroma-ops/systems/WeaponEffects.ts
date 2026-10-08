import * as T from 'three';
import { WEAPON_SPECS, type WeaponId } from '../../../shared/weapons';
import { along, type ShotEvent } from '../../../shared/combat';
type Particle={position:T.Vector3;velocity:T.Vector3;life:number;duration:number;size:number;color:T.Color;style:number};
type Beam={mesh:T.Mesh;core:T.Mesh;life:number;duration:number};
type Flame={mesh:T.Mesh;life:number};
type Ring={mesh:T.Mesh;life:number;duration:number;radius:number};
// One depth-tested draw call for sparks, embers, frost and smoke. Soft sprites are procedural.
export class WeaponEffects{
  private group=new T.Group();private particles:Particle[];private beams:Beam[];private rings:Ring[];private flames:Flame[];private flameCursor=0;private flameGeometry=new T.CylinderGeometry(1,.25,1,8,1,true);private cursor=0;private beamCursor=0;private ringCursor=0;
  private geometry=new T.BufferGeometry();private material:T.ShaderMaterial;private points:T.Points;private cylinder=new T.CylinderGeometry(1,1,1,6,1,true);private ringGeometry=new T.RingGeometry(.88,1,48);
  private positions:Float32Array;private colors:Float32Array;private sizes:Float32Array;private alphas:Float32Array;private styles:Float32Array;
  constructor(private scene:T.Scene,private coarse=false){
    const count=coarse?320:900;this.positions=new Float32Array(count*3);this.colors=new Float32Array(count*3);this.sizes=new Float32Array(count);this.alphas=new Float32Array(count);this.styles=new Float32Array(count);
    this.particles=Array.from({length:count},()=>({position:new T.Vector3(),velocity:new T.Vector3(),life:0,duration:1,size:0,color:new T.Color(),style:0}));
    for(const [name,array,itemSize] of [['position',this.positions,3],['color',this.colors,3],['size',this.sizes,1],['alpha',this.alphas,1],['style',this.styles,1]] as const)this.geometry.setAttribute(name,new T.BufferAttribute(array,itemSize).setUsage(T.DynamicDrawUsage));
    this.material=new T.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,blending:T.NormalBlending,uniforms:{time:{value:0}},
      vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*500./max(.1,-p.z),0.,120.);vColor=color;vAlpha=alpha;vStyle=style;}`,
      fragmentShader:`uniform float time;varying vec3 vColor;varying float vAlpha;varying float vStyle;
      float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float smoothNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(noise(i),noise(i+vec2(1.,0.)),f.x),mix(noise(i+vec2(0.,1.)),noise(i+vec2(1.,1.)),f.x),f.y);}
      void main(){vec2 uv=gl_PointCoord*2.-1.;float r=length(uv);float a=pow(max(0.,1.-r),2.);vec3 color=vColor;
      if(vStyle>1.5&&vStyle<2.5){float phase=time*3.;uv=mat2(cos(phase),-sin(phase),sin(phase),cos(phase))*uv;float diamond=abs(uv.x)+abs(uv.y);a=pow(max(0.,1.-diamond),.7);color=mix(vColor,vec3(.95,1.,1.),pow(max(0.,1.-diamond),6.));}
      if(vStyle>.5&&vStyle<1.5){vec2 flow=uv*vec2(2.8,4.)+vec2(time*1.5,-time*5.);float turbulence=smoothNoise(flow)*.6+smoothNoise(flow*2.)*.25;
        float flame=length(uv*vec2(1.05,.8))+turbulence*.3;float core=pow(max(0.,1.-flame),3.);a=(1.-smoothstep(.15,1.,flame))*.16;
        color=mix(vColor*.65,vec3(1.,.85,.32),core);}
      if(vStyle>2.5){a=pow(max(0.,1.-r),1.3)*.16;}
      gl_FragColor=vec4(color,a*vAlpha);
      #include <colorspace_fragment>
      }` ,vertexColors:true});
    this.points=new T.Points(this.geometry,this.material);this.points.frustumCulled=false;this.group.add(this.points);
    this.beams=Array.from({length:coarse?32:64},()=>{const mesh=new T.Mesh(this.cylinder,new T.MeshBasicMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending})),core=new T.Mesh(this.cylinder,new T.MeshBasicMaterial({color:0xffffff,transparent:true,depthWrite:false,blending:T.AdditiveBlending}));mesh.visible=core.visible=false;this.group.add(mesh,core);return{mesh,core,life:0,duration:1};});
    this.rings=Array.from({length:8},()=>{const mesh=new T.Mesh(this.ringGeometry,new T.MeshBasicMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending}));mesh.visible=false;this.group.add(mesh);return{mesh,life:0,duration:1,radius:1};});
    this.flames=Array.from({length:coarse?24:48},()=>{
      const material=new T.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,side:T.DoubleSide,blending:T.NormalBlending,uniforms:{time:{value:0},opacity:{value:1}},
      vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`});
      const mesh=new T.Mesh(this.flameGeometry,material);mesh.visible=false;this.group.add(mesh);return{mesh,life:0};
    });
    scene.add(this.group);
  }
  private particle(position:T.Vector3,color:number,size:number,life:number,style=0,velocity?:T.Vector3){
    const p=this.particles[this.cursor++%this.particles.length];p.position.copy(position);p.color.setHex(color);p.size=size;p.life=p.duration=life;p.style=style;p.velocity.copy(velocity??new T.Vector3((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2));
  }
  private beam(from:T.Vector3,to:T.Vector3,color:number,duration:number,width=.022){
    const b=this.beams[this.beamCursor++%this.beams.length],delta=to.clone().sub(from),distance=delta.length();if(distance<.01)return;
    b.mesh.position.copy(from).addScaledVector(delta,.5);b.core.position.copy(b.mesh.position);const rotation=new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());b.mesh.quaternion.copy(rotation);b.core.quaternion.copy(rotation);
    b.mesh.scale.set(width,distance,width);b.core.scale.set(width*.24,distance,width*.24);(b.mesh.material as T.MeshBasicMaterial).color.setHex(color);b.life=b.duration=duration;b.mesh.visible=b.core.visible=true;
  }
  play(shot:ShotEvent,muzzle:T.Vector3,showMuzzle=true){
    const spec=WEAPON_SPECS[shot.weapon],origin=new T.Vector3(...shot.origin),id=shot.weapon;
    if(showMuzzle)this.muzzle(muzzle,id);
    if(id==='flame'){
      // Each tongue follows a clipped authoritative cone ray; no particles beyond its endpoint.
      const stride=this.coarse?3:2;
      for(let n=0;n<shot.rays.length;n+=stride){const ray=shot.rays[n],end=new T.Vector3(...ray.end),delta=end.clone().sub(muzzle),distance=delta.length();if(distance<.1)continue;
        const flame=this.flames[this.flameCursor++%this.flames.length];flame.mesh.position.copy(muzzle).addScaledVector(delta,.5);flame.mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());flame.mesh.scale.set(.05+distance*.018,distance,.05+distance*.018);flame.life=.16;flame.mesh.visible=true;
      }

      for(let n=0;n<shot.rays.length;n+=stride){const ray=shot.rays[n],distance=origin.distanceTo(new T.Vector3(...ray.end));
        for(let k=0;k<(this.coarse?5:9);k++){const t=(k+.25)/ (this.coarse?5:9),at=new T.Vector3(...along(shot.origin,ray.dir,distance*t));if(distance*t<1.3)at.lerp(muzzle,1-distance*t/1.3);
          this.particle(at,t<.2?0xfff5c0:t<.6?0xffa02e:0xff4621,.15+t*.4,.12+Math.random()*.12,1,new T.Vector3(0,.4,0));
          if(k%3===0)this.particle(at,0xffac44,.055,.18,0,new T.Vector3(0,.3,0));
        }
      }
    }else for(const ray of shot.rays){
      const end=new T.Vector3(...ray.end);this.beam(muzzle,end,spec.color,id==='smg'?.075:id==='ice'?.16:.105,id==='ice'?.035:id==='rocket'?.06:.02);
      if(id==='smg'){
        const delta=end.clone().sub(muzzle),right=new T.Vector3(-delta.z,0,delta.x).normalize();let previous=muzzle.clone().lerp(end,.2);
        for(let n=1;n<=3;n++){const next=muzzle.clone().lerp(end,.2+n*.12).addScaledVector(right,(n%2?1:-1)*.045);this.beam(previous,next,0xffd05d,.06,.007);previous=next;}
      }
      if(id==='ice'||id==='rocket'||id==='smg'){
        const count=this.coarse?4:10;
        for(let n=1;n<=count;n++){const at=muzzle.clone().lerp(end,n/(count+1));
          this.particle(at,spec.color,id==='rocket'?.48:id==='ice'?.16:.045,id==='rocket'?.4:.2,id==='rocket'?3:id==='ice'?2:0,new T.Vector3(0,.12,0));
        }
      }
    }
    for(const [index,ray] of shot.rays.entries())if(ray.kind!=='range'&&(id!=='flame'||index%4===0)){
      const end=new T.Vector3(...ray.end);this.impact(end,id,ray.kind==='head',new T.Vector3(...ray.dir).negate());
    }
    if(id==='rocket'&&shot.rays[0]?.kind!=='range')this.explosion(new T.Vector3(...along(shot.rays[0].end,shot.rays[0].dir,-.1)));
  }
  muzzle(at:T.Vector3,id:WeaponId){const color=WEAPON_SPECS[id].color;for(let n=0;n<(this.coarse?3:7);n++)this.particle(at,n===0?0xffffff:color,n===0?.32:.08,.04+Math.random()*.035);}
  private impact(at:T.Vector3,id:WeaponId,head:boolean,normal:T.Vector3){
    const count=id==='flame'?(this.coarse?2:4):this.coarse?4:id==='ice'?16:10,color=head?0xffda69:WEAPON_SPECS[id].color;
    this.particle(at.clone().addScaledVector(normal,.035),0xffffff,.26,.065);
    for(let n=0;n<count;n++){
      const velocity=new T.Vector3((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(normal,1);
      this.particle(at.clone().addScaledVector(normal,.04),color,id==='ice'?.12:.055,.14+Math.random()*.2,id==='ice'?2:0,velocity);
    }
    if(id==='ice')this.particle(at.clone().addScaledVector(normal,.05),0x84ddff,.8,.32,3,new T.Vector3());
  }
  private explosion(at:T.Vector3){
    const count=this.coarse?25:65;
    for(let n=0;n<count;n++)this.particle(at,n<10?0xfff5d5:n<count*.6?0xff742d:0x937f98,n<10?.55:.85,.18+Math.random()*.55,n<count*.6?1:3,new T.Vector3((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));
    const ring=this.rings[this.ringCursor++%8];ring.mesh.position.copy(at);ring.mesh.rotation.x=-Math.PI/2;ring.life=ring.duration=.35;ring.radius=5;(ring.mesh.material as T.MeshBasicMaterial).color.setHex(0xff9b59);ring.mesh.visible=true;
  }
  status(at:T.Vector3,id:'flame'|'ice'){this.particle(at,WEAPON_SPECS[id].color,id==='flame'?.22:.16,.22,id==='flame'?1:2,new T.Vector3(0,.5,0));}
  update(dt:number){
    this.material.uniforms.time.value+=dt;
    this.particles.forEach((p,n)=>{p.life=Math.max(0,p.life-dt);if(p.life){p.position.addScaledVector(p.velocity,dt);if(p.style===0||p.style===2)p.velocity.y-=dt*3;}
      p.position.toArray(this.positions,n*3);p.color.toArray(this.colors,n*3);this.sizes[n]=p.life?p.size*(p.style===3?1+(1-p.life/p.duration):1):0;this.alphas[n]=p.life/p.duration;this.styles[n]=p.style;
    });
    for(const attribute of Object.values(this.geometry.attributes))attribute.needsUpdate=true;
    for(const b of this.beams){b.life=Math.max(0,b.life-dt);b.mesh.visible=b.core.visible=b.life>0;(b.mesh.material as T.MeshBasicMaterial).opacity=.32*b.life/b.duration;(b.core.material as T.MeshBasicMaterial).opacity=b.life/b.duration;}
    for(const f of this.flames){f.life=Math.max(0,f.life-dt);f.mesh.visible=f.life>0;const m=f.mesh.material as T.ShaderMaterial;m.uniforms.time.value=this.material.uniforms.time.value;m.uniforms.opacity.value=f.life/.16;}
    for(const r of this.rings){r.life=Math.max(0,r.life-dt);r.mesh.visible=r.life>0;r.mesh.scale.setScalar(Math.max(.01,r.radius*(1-r.life/r.duration)));(r.mesh.material as T.MeshBasicMaterial).opacity=r.life/r.duration*.65;}
  }
  dispose(){this.scene.remove(this.group);this.geometry.dispose();this.material.dispose();this.cylinder.dispose();this.ringGeometry.dispose();this.flameGeometry.dispose();for(const f of this.flames)(f.mesh.material as T.Material).dispose();for(const b of this.beams){(b.mesh.material as T.Material).dispose();(b.core.material as T.Material).dispose();}for(const r of this.rings)(r.mesh.material as T.Material).dispose();this.group.clear();}
}
