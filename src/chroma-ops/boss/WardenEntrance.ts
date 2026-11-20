import * as T from 'three';
import { VOID_WARDEN, WARDEN_ID, WARDEN_ATTACKS, WARDEN_ENTRANCE as cue, wardenCanBeHit, type WardenSnapshot } from '../../../shared/voidWarden';
import { PLAYER_EYE_HEIGHT } from '../../../shared/arena';
import type { Combatant } from '../../../shared/combat';
import { disposeResources } from '../systems/DisposeResources';
import { VoidWarden } from './VoidWarden';
import { WardenCombatFx } from './WardenCombatFx';

const up = new T.Vector3(0,1,0);
const chains = 4;
const links = 19;
const anchors = [[-2.5,10,-1.2],[2.6,10,.7],[-1.1,10,2.2],[1.3,10,-2.4]] as const;
const fade = (time:number,start:number,end:number) => T.MathUtils.smoothstep(time,start,end);

export class WardenEntrance {
  private readonly model = new VoidWarden();
  private readonly effects = new T.Group();
  private readonly title = document.createElement('div');
  private readonly hud = document.createElement('div');
  private readonly allegiance = document.createElement('small');
  private readonly warning = document.createElement('small');
  private readonly growth = document.createElement('small');
  private readonly meter = document.createElement('progress');
  private readonly combat:WardenCombatFx;
  private readonly ownerRing = new T.Mesh(new T.RingGeometry(1.03,1.18,42),new T.MeshBasicMaterial({
    color:0x50e7cc,transparent:true,opacity:.77,side:T.DoubleSide,depthWrite:false,
  }));
  private readonly chainMesh: T.InstancedMesh;
  private readonly cracks: T.LineSegments<T.BufferGeometry,T.LineBasicMaterial>;
  private readonly rift: T.Mesh<T.PlaneGeometry,T.ShaderMaterial>;
  private readonly sparks: T.Points<T.BufferGeometry,T.ShaderMaterial>;
  private readonly sparkData: Float32Array;
  private readonly left = new T.Vector3();
  private readonly right = new T.Vector3();
  private readonly begin = new T.Vector3();
  private readonly end = new T.Vector3();
  private readonly direction = new T.Vector3();
  private readonly link = new T.Object3D();
  private readonly twist = new T.Quaternion();
  private readonly destination = new T.Vector3();
  private readonly sparkCount: number;
  private motionTime = 0;
  private initialized = false;

  constructor(scene:T.Scene,root:HTMLElement,coarse:boolean,private localId='') {
    this.model.group.visible = false;
    this.effects.position.copy(VOID_WARDEN.location);
    this.combat=new WardenCombatFx(coarse);
    this.ownerRing.rotation.x=-Math.PI/2;
    this.ownerRing.visible=false;
    scene.add(this.effects,this.model.group,this.combat.group,this.ownerRing);

    const linkGeometry = new T.TorusGeometry(.128,.036,5,coarse ? 8 : 12);
    linkGeometry.rotateX(Math.PI/2);
    linkGeometry.rotateZ(Math.PI/2);
    linkGeometry.scale(.78,1.48,.78);
    this.chainMesh = new T.InstancedMesh(linkGeometry,
      new T.MeshStandardMaterial({color:0x352537,roughness:.44,metalness:.58,emissive:0x4e2113,emissiveIntensity:.38}),chains*links);
    this.chainMesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    this.chainMesh.frustumCulled = false;
    this.effects.add(this.chainMesh);

    const cracks = new T.BufferGeometry();
    const crackVertices:number[] = [];
    for(let spoke=0;spoke<9;spoke++){
      const heading=spoke*Math.PI*2/9+.17;
      let px=0,pz=0;
      for(let edge=1;edge<=5;edge++){
        const angle=heading+Math.sin(spoke*4+edge*9)*.23;
        const span=edge*(.62+(spoke%3)*.12);
        const x=Math.cos(angle)*span,z=Math.sin(angle)*span;
        crackVertices.push(px,.034,pz,x,.034,z);
        if(edge===2||edge===4) crackVertices.push(x,.034,z,x+Math.cos(angle+.65)*.53,.034,z+Math.sin(angle+.65)*.53);
        px=x;pz=z;
      }
    }
    cracks.setAttribute('position',new T.Float32BufferAttribute(crackVertices,3));
    this.cracks = new T.LineSegments(cracks,new T.LineBasicMaterial({
      color:0xff792a,transparent:true,blending:T.AdditiveBlending,depthWrite:false,toneMapped:false,
    }));
    this.effects.add(this.cracks);

    this.rift = new T.Mesh(new T.PlaneGeometry(16,16),new T.ShaderMaterial({
      uniforms:{light:{value:0},wave:{value:-1}},transparent:true,depthWrite:false,blending:T.AdditiveBlending,
      vertexShader:`varying vec2 ground;
        void main(){ ground=uv*2.0-1.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader:`varying vec2 ground;
        uniform float light;
        uniform float wave;
        void main(){
          float d=length(ground);
          float r=.08+.84*(1.0-pow(1.0-clamp(wave,0.0,1.0),2.0));
          float ring=(1.0-smoothstep(.007,.042,abs(d-r)))*step(0.0,wave)*pow(1.0-clamp(wave,0.0,1.0),1.2);
          float pool=pow(max(0.0,1.0-d*2.45),2.0)*light;
          vec3 color=mix(vec3(.94,.19,.015),vec3(1.0,.67,.23),clamp(ring+pool*.7,0.0,1.0));
          gl_FragColor=vec4(color,pool*.82+ring*.92);
        }`,
    }));
    this.rift.rotation.x = -Math.PI/2;
    this.rift.position.y = .028;
    this.effects.add(this.rift);

    this.sparkCount=coarse ? 36 : 78;
    this.sparkData=new Float32Array(this.sparkCount*3);
    const sparkGeometry=new T.BufferGeometry();
    sparkGeometry.setAttribute('position',new T.BufferAttribute(this.sparkData,3).setUsage(T.DynamicDrawUsage));
    this.sparks=new T.Points(sparkGeometry,new T.ShaderMaterial({
      uniforms:{opacity:{value:0}},transparent:true,blending:T.AdditiveBlending,depthWrite:false,
      vertexShader:`uniform float opacity;
        void main(){ vec4 p=modelViewMatrix*vec4(position,1.0);
          gl_Position=projectionMatrix*p;
          gl_PointSize=clamp(112.0*sqrt(opacity)/max(3.0,-p.z),1.0,11.0);
        }`,
      fragmentShader:`uniform float opacity;
        void main(){ float d=length(gl_PointCoord-vec2(.5));
          gl_FragColor=vec4(1.0,.41,.08,opacity*(1.0-smoothstep(.11,.5,d)));
        }`,
    }));
    this.sparks.frustumCulled=false;
    this.effects.add(this.sparks);

    this.title.className='co-warden-title';
    this.title.hidden=true;
    this.title.setAttribute('role','status');
    this.title.innerHTML='<span>中立 Boss 登場</span><strong>虛空騎士</strong>';
    this.hud.className='co-warden-hud';
    this.hud.hidden=true;
    const name=document.createElement('span');
    name.textContent=VOID_WARDEN.name;
    this.meter.setAttribute('aria-label',`${VOID_WARDEN.name}生命值`);
    this.allegiance.className='co-warden-allegiance';
    this.warning.className='co-warden-warning';
    this.growth.className='co-warden-growth';
    this.hud.append(name,this.meter,this.allegiance,this.growth,this.warning);
    root.append(this.title,this.hud);
  }

  update(boss:WardenSnapshot,serverNow:number,dt:number) {
    const elapsed=Math.max(0,serverNow-boss.spawnAt);
    const intro=boss.state==='SPAWN';
    this.title.hidden=elapsed<cue.title||elapsed>=cue.title+cue.titleDuration;
    this.hud.hidden=elapsed<cue.title&&intro;
    this.meter.max=boss.ownerId&&boss.state!=='DEFEATED'?VOID_WARDEN.alliedHp:boss.maxHp;
    this.meter.value=boss.hp;
    this.hud.classList.toggle('is-infected',boss.phaseTwo&&!boss.ownerId);
    this.hud.classList.toggle('is-allied',!!boss.ownerId);
    this.hud.classList.toggle('is-owned',boss.ownerId===this.localId);
    const allegiance=boss.ownerId?`◆ ${boss.ownerId===this.localId?'你的隊友':boss.ownerName??'已收編'}`
      : boss.enraged?'狂暴':boss.phaseTwo?'感染階段':'';
    if(this.allegiance.textContent!==allegiance)this.allegiance.textContent=allegiance;
    const size=boss.scale??1;
    const scaleLabel=size>=1000?size.toExponential(1):size.toFixed(2);
    const growth=boss.ownerId?`體型 ×${scaleLabel}`:`賞金 ${boss.heldBounty??0} · 體型 ×${scaleLabel}`;
    if(this.growth.textContent!==growth)this.growth.textContent=growth;
    const warning=boss.state==='ATTACK'&&boss.attack?WARDEN_ATTACKS[boss.attack.kind].name:boss.state==='ENRAGED'?'自刺狂暴':'';
    if(this.warning.textContent!==warning)this.warning.textContent=warning;
    this.ownerRing.visible=!!boss.ownerId&&boss.state!=='DESPAWN'&&boss.state!=='DEFEATED';
    this.effects.visible=intro;
    this.model.group.visible=!intro||elapsed>=cue.reveal;
    const group=this.model.group;
    const collapse=boss.state==='DESPAWN'?Math.max(.001,1-fade(serverNow-boss.stateAt,260,VOID_WARDEN.collapseMs)):1;
    group.scale.setScalar(Math.min(size,1e20)*collapse);
    this.destination.set(boss.x,boss.y+(boss.air??0),boss.z);
    if(!this.initialized||intro){
      group.position.copy(this.destination);
      group.rotation.y=boss.yaw;
      this.initialized=true;
    }else{
      const blend=1-Math.exp(-dt*20);
      group.position.lerp(this.destination,blend);
      group.rotation.y+=Math.atan2(Math.sin(boss.yaw-group.rotation.y),Math.cos(boss.yaw-group.rotation.y))*blend;
    }
    this.ownerRing.position.set(group.position.x,boss.y+.07,group.position.z);
    this.ownerRing.scale.setScalar(Math.min(size,420));
    this.ownerRing.material.color.setHex(boss.ownerId===this.localId?0x52ffe0:0x7fafff);
    if(intro){
      const release=fade(elapsed,cue.breakChains,cue.land);
      group.position.y=boss.y+1.86*(1-release**2);
      if(this.model.group.visible) this.model.entrancePose(elapsed);
      this.showEntrance(elapsed);
      return;
    }
    this.motionTime+=dt;
    const stateElapsed=Math.max(0,serverNow-boss.stateAt);
    const moving=boss.state==='CHASE'||boss.state==='PATROL'||group.position.distanceToSquared(this.destination)>.012;
    const strike=boss.attack?Math.max(0,(serverNow-boss.attack.startedAt)*boss.attack.rate):0;
    if(boss.attack&&(boss.state==='ATTACK'||boss.state==='STAGGER'&&strike<WARDEN_ATTACKS[boss.attack.kind].duration+150))
      this.model.combatPose(boss.attack.kind,strike,boss.enraged);
    else if(boss.state==='ENRAGED')this.model.selfStabPose(stateElapsed);
    else if(boss.state==='DEFEATED'||boss.state==='ALLIED'||boss.state==='DESPAWN')
      this.model.collapsePose(stateElapsed,boss.state==='ALLIED');
    else this.model.pose(moving?'walk':'idle',this.motionTime,boss.enraged);
    let infection=boss.enraged ? this.motionTime+1.2 : null;
    if(boss.state==='ENRAGED')infection=stateElapsed>550?(stateElapsed-550)/1000:null;
    if(boss.state==='ATTACK'&&boss.attack?.kind==='burst'&&strike>=WARDEN_ATTACKS.burst.launch)
      infection=(strike-WARDEN_ATTACKS.burst.launch)/1000;
    this.model.updateParticles(this.motionTime,infection,this.sparkCount<50);
    this.model.bladeBase.getWorldPosition(this.left);
    this.model.bladeTip.getWorldPosition(this.right);
    this.combat.update(boss.attack,serverNow,boss.enraged,this.left,this.right);
  }

  private showEntrance(elapsed:number) {
    const surge=fade(elapsed,0,550)*(1-fade(elapsed,cue.land+150,cue.finish));
    const impact=(elapsed-cue.land)/820;
    this.rift.material.uniforms.light.value=surge;
    this.rift.material.uniforms.wave.value=impact<1 ? impact : -1;
    this.cracks.visible=elapsed>=cue.cracks;
    this.cracks.material.opacity=(.38+.30*Math.sin(elapsed*.019)**2)*surge;
    this.sparks.material.uniforms.opacity.value=surge;
    const seconds=elapsed/1000;
    for(let i=0;i<this.sparkCount;i++){
      const angle=i*2.399963+seconds*.5;
      const phase=(i*.618+seconds*.65)%1;
      const radius=.38+(i%8)*.28+phase*(impact>=0&&impact<1 ? 3.5*impact : .5);
      this.sparkData[i*3]=Math.cos(angle)*radius;
      this.sparkData[i*3+1]=.04+phase*(impact>=0&&impact<1 ? 3.8 : 2.6);
      this.sparkData[i*3+2]=Math.sin(angle)*radius;
    }
    this.sparks.geometry.attributes.position.needsUpdate=true;
    this.updateChains(elapsed);
  }

  private updateChains(elapsed:number) {
    this.chainMesh.visible=elapsed>=cue.chains&&elapsed<cue.land+320;
    if(!this.chainMesh.visible) return;
    if(elapsed>=cue.reveal){
      this.model.bindingPoints(this.left,this.right);
      this.left.sub(this.effects.position);
      this.right.sub(this.effects.position);
    }else{
      this.left.set(-.7,3.8,0);
      this.right.set(.7,3.8,0);
    }
    const drop=fade(elapsed,cue.chains,cue.reveal+110);
    const broken=fade(elapsed,cue.breakChains,cue.land+320);
    const breaking=elapsed>=cue.breakChains;
    let drawn=0;
    for(let chain=0;chain<chains;chain++){
      const [x,y,z]=anchors[chain];
      this.begin.set(x,y,z);
      this.end.copy(chain%2===0 ? this.left : this.right);
      if(chain>=2) this.end.y+=.76;
      this.end.lerp(this.begin,1-drop);
      this.direction.subVectors(this.end,this.begin).normalize().negate();
      for(let i=0;i<links;i++){
        if(breaking&&i>=6&&i<=8) continue;
        const portion=i/(links-1);
        this.link.position.lerpVectors(this.begin,this.end,portion);
        if(breaking){
          const multiplier=i<6 ? .7 : 1.37;
          this.link.position.y-=broken*broken*4.2*multiplier;
          this.link.position.x+=(chain%2===0 ? -1 : 1)*broken*multiplier;
        }
        if(this.link.position.y<.12) continue;
        this.link.quaternion.setFromUnitVectors(up,this.direction);
        this.link.quaternion.multiply(this.twist.setFromAxisAngle(up,(i%2)*Math.PI*.5+broken*(i%3)));
        this.link.updateMatrix();
        this.chainMesh.setMatrixAt(drawn++,this.link.matrix);
      }
    }
    this.chainMesh.count=drawn;
    this.chainMesh.instanceMatrix.needsUpdate=true;
  }

  hideHud() {
    this.title.hidden=true;
    this.hud.hidden=true;
  }

  target(boss:WardenSnapshot,playerId:string):Combatant|null {
    if(!wardenCanBeHit(boss,playerId))return null;
    const {position,rotation}=this.model.group;
    return {id:WARDEN_ID,x:position.x,y:position.y+PLAYER_EYE_HEIGHT,z:position.z,yaw:rotation.y,alive:true,kind:'warden',scale:boss.scale};
  }

  dispose() {
    this.model.dispose();
    this.combat.dispose();
    this.ownerRing.removeFromParent();
    disposeResources(this.ownerRing);
    this.effects.removeFromParent();
    disposeResources(this.effects);
    this.hud.remove();
    this.title.remove();
  }
}
