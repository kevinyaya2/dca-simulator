import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { disposeResources } from '../systems/DisposeResources';
import { observeArenaSize } from '../ui/ArenaSize';
import { VoidWarden, type WardenAnimation } from './VoidWarden';

export type PreviewView = 'front' | 'side' | 'back' | 'reset';
export type PreviewStats = { triangles: number; fps: number; frameMs: number; calls: number };

const angles: Record<PreviewView,number> = { front:0, side:Math.PI/2, back:Math.PI, reset:.34 };
const framing: Record<WardenAnimation,{vertical:number;horizontal:number;center:[number,number,number]}> = {
  idle:{vertical:6.7,horizontal:7.35,center:[1.05,2.18,.34]},
  walk:{vertical:7.8,horizontal:7.6,center:[.62,2.1,.70]},
  attack:{vertical:9.2,horizontal:11.5,center:[.15,2.68,1.58]},
};
const trailLength = 11;
const trailFadeMs = 130;

export class WardenPreviewScene {
  private readonly renderer: T.WebGLRenderer;
  private readonly scene = new T.Scene();
  private readonly camera = new T.PerspectiveCamera(34,1,.1,65);
  private readonly controls: OrbitControls;
  private readonly warden = new VoidWarden();
  private readonly stage = new T.Group();
  private readonly trail = new T.BufferGeometry();
  private readonly trailPosition = new Float32Array((trailLength-1)*6*3);
  private readonly trailColor = new Float32Array((trailLength-1)*6*3);
  private readonly trailSamples = Array.from({length:trailLength},() => ({base:new T.Vector3(),tip:new T.Vector3()}));
  private trailHead = 0;
  private trailCount = 0;
  private lastTrailAt = 0;
  private readonly stopResize: () => void;
  private frame = 0;
  private lastFrame = 0;
  private elapsed = 0;
  private sampleTime = 0;
  private sampleFrames = 0;
  private fittedDistance = 10;
  private animation: WardenAnimation = 'idle';
  private rageElapsed: number | null = null;
  private low = false;
  private width = 0;
  private height = 0;
  private lost = false;

  constructor(host:HTMLElement, private report:(stats:PreviewStats)=>void, private contextStatus:(lost:boolean)=>void) {
    try {
      this.renderer = new T.WebGLRenderer({ antialias:true, alpha:true, powerPreference:'default' });
    } catch (error) {
      this.warden.dispose();
      this.trail.dispose();
      throw error;
    }
    const canvas = this.renderer.domElement;
    canvas.setAttribute('aria-label','虛空騎士 3D 模型');
    canvas.setAttribute('role','img');
    host.append(canvas);
    this.renderer.setClearColor(0x0f1019,0);
    this.renderer.toneMapping = T.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;

    this.controls = new OrbitControls(this.camera,canvas);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.rotateSpeed = .68;
    this.controls.zoomSpeed = .9;
    this.controls.minPolarAngle = .36;
    this.controls.maxPolarAngle = Math.PI*.565;
    this.controls.target.set(...framing.idle.center);
    this.setView('reset');

    this.scene.add(this.warden.group,this.stage,new T.HemisphereLight(0xe2e2ff,0x6e4668,1.8));
    const key = new T.DirectionalLight(0xffe9dd,2.15);
    key.position.set(-3.2,6,4.2);
    const fill = new T.DirectionalLight(0xb5a4ff,1.9);
    fill.position.set(3.5,4,-4.5);
    const rim = new T.DirectionalLight(0xffa274,.65);
    rim.position.set(-4,2,-2.5);
    this.scene.add(key,fill,rim);
    this.buildStage();
    this.buildTrail();

    this.stopResize = observeArenaSize(host,(width,height) => this.resize(width,height));
    canvas.addEventListener('webglcontextlost',this.onContextLost);
    canvas.addEventListener('webglcontextrestored',this.onContextRestored);
    document.addEventListener('visibilitychange',this.onVisibility);
    this.report({triangles:this.warden.triangleCount,fps:0,frameMs:0,calls:0});
    this.onVisibility();
  }

  private buildStage() {
    const base = new T.Mesh(new T.CylinderGeometry(2.23,2.36,.16,48),
      new T.MeshStandardMaterial({color:0x1c1a2a,roughness:.83,metalness:.18}));
    base.position.y = -.079;
    this.stage.add(base);
    const profile = new T.Mesh(new T.CylinderGeometry(2.34,2.18,.07,48),
      new T.MeshStandardMaterial({color:0x282437,roughness:.8}));
    profile.position.y = -.185;
    this.stage.add(profile);
    for (const [r,w,color,opacity] of [[2.09,.014,0xe78759,.64],[1.93,.008,0x856c80,.46],[1.55,.012,0x685978,.35]]) {
      const ring = new T.Mesh(new T.RingGeometry(r,r+w,64),
        new T.MeshBasicMaterial({color,transparent:true,opacity,depthWrite:false}));
      ring.rotation.x = -Math.PI/2;
      ring.position.y = .008;
      this.stage.add(ring);
    }
    const marks: number[] = [];
    for (let index=0;index<48;index++) {
      const angle = index*Math.PI/24;
      const inner = index%6===0 ? 1.84 : 1.99;
      marks.push(Math.cos(angle)*inner,.013,Math.sin(angle)*inner,Math.cos(angle)*2.05,.013,Math.sin(angle)*2.05);
    }
    const tickGeometry = new T.BufferGeometry();
    tickGeometry.setAttribute('position',new T.Float32BufferAttribute(marks,3));
    this.stage.add(new T.LineSegments(tickGeometry,new T.LineBasicMaterial({color:0x9d697c,transparent:true,opacity:.55})));

    const contact = new T.Mesh(new T.PlaneGeometry(3,3),new T.ShaderMaterial({
      transparent:true, depthWrite:false,
      vertexShader:'varying vec2 vUv; void main() { vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader:'varying vec2 vUv; void main() { vec2 p=(vUv-0.5)*vec2(2.0,3.6); gl_FragColor=vec4(0.035,0.017,0.05,(1.0-smoothstep(0.10,0.95,length(p)))*0.61); }',
    }));
    contact.rotation.x = -Math.PI/2;
    contact.position.y = .015;
    this.stage.add(contact);
  }

  private buildTrail() {
    this.trail.setAttribute('position',new T.BufferAttribute(this.trailPosition,3).setUsage(T.DynamicDrawUsage));
    this.trail.setAttribute('color',new T.BufferAttribute(this.trailColor,3).setUsage(T.DynamicDrawUsage));
    this.trail.setDrawRange(0,0);
    const mesh = new T.Mesh(this.trail,new T.MeshBasicMaterial({
      vertexColors:true,side:T.DoubleSide,transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false,toneMapped:false,
    }));
    mesh.frustumCulled = false;
    this.scene.add(mesh);
  }

  private updateTrail(active:boolean,now:number) {
    const sinceSample = now-this.lastTrailAt;
    if (!active && (!this.trailCount || sinceSample>=trailFadeMs)) {
      this.clearTrail();
      return;
    }
    if (active) {
      if (sinceSample<12) return;
      this.lastTrailAt = now;
      const head = this.trailSamples[this.trailHead];
      this.warden.bladeBase.getWorldPosition(head.base);
      this.warden.bladeTip.getWorldPosition(head.tip);
      this.trailHead = (this.trailHead+1)%trailLength;
      this.trailCount = Math.min(trailLength,this.trailCount+1);
    }
    const fade = active ? 1 : (1-sinceSample/trailFadeMs)**1.5;
    let offset = 0;
    for (let age=0;age<this.trailCount-1;age++) {
      const a = this.trailSamples[(this.trailHead+trailLength-1-age)%trailLength];
      const b = this.trailSamples[(this.trailHead+trailLength-2-age)%trailLength];
      const brightness = fade*(1-age/(this.trailCount-1))**1.5;
      for (const point of [a.base,b.base,a.tip,b.base,b.tip,a.tip]) {
        point.toArray(this.trailPosition,offset);
        this.trailColor[offset++] = brightness;
        this.trailColor[offset++] = brightness*(point===a.tip||point===b.tip ? .83 : .31);
        this.trailColor[offset++] = brightness*.14;
      }
    }
    this.trail.attributes.position.needsUpdate = true;
    this.trail.attributes.color.needsUpdate = true;
    this.trail.setDrawRange(0,offset/3);
  }

  private clearTrail() {
    this.trailCount = 0;
    this.lastTrailAt = 0;
    this.trail.setDrawRange(0,0);
  }

  private resize(width:number,height:number) {
    this.width = width;
    this.height = height;
    this.camera.aspect = width/height;
    this.camera.updateProjectionMatrix();
    this.fitCamera();
    this.updateResolution();
  }

  private fitCamera() {
    const previous = this.fittedDistance;
    const {vertical,horizontal,center} = framing[this.animation];
    const viewHeight = Math.max(vertical,horizontal/this.camera.aspect);
    this.fittedDistance = viewHeight/(2*Math.tan(T.MathUtils.degToRad(this.camera.fov/2)));
    this.controls.minDistance = this.fittedDistance*.52;
    this.controls.maxDistance = this.fittedDistance*1.75;
    this.camera.position.sub(this.controls.target).multiplyScalar(this.fittedDistance/previous);
    this.controls.target.set(...center);
    this.camera.position.add(this.controls.target);
    this.controls.update();
  }

  private updateResolution() {
    if (!this.width || !this.height) return;
    const touch = matchMedia('(pointer: coarse)').matches;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.low ? 1 : touch ? 1.5 : 1.8));
    this.renderer.setSize(this.width,this.height,false);
  }

  setView(view:PreviewView) {
    // Reset also discards rotational inertia from the previous pointer gesture.
    const damping = this.controls.enableDamping;
    this.controls.enableDamping = false;
    this.controls.update();
    const distance = this.fittedDistance;
    const elevation = view==='reset' ? .14 : .045;
    const angle = angles[view];
    const target=this.controls.target;
    this.camera.position.set(target.x+Math.sin(angle)*distance*Math.cos(elevation),
      target.y+distance*Math.sin(elevation),target.z+Math.cos(angle)*distance*Math.cos(elevation));
    this.controls.update();
    this.controls.enableDamping = damping;
  }

  setOptions(animation:WardenAnimation,enraged:boolean,low:boolean) {
    const changedFraming = animation !== this.animation;
    const changedRage = enraged !== (this.rageElapsed !== null);
    if (changedFraming || changedRage) {
      this.elapsed = 0;
      this.clearTrail();
    }
    this.animation = animation;
    if (changedRage) this.rageElapsed = enraged ? 0 : null;
    if (changedFraming) this.fitCamera();
    if (this.low !== low) {
      this.low = low;
      this.updateResolution();
    }
  }

  private render = (now:number) => {
    this.frame = requestAnimationFrame(this.render);
    const interval = this.lastFrame ? now-this.lastFrame : 0;
    this.lastFrame = now;
    const delta = Math.min(interval,55)/1000;
    this.elapsed += delta;
    if (this.rageElapsed !== null) this.rageElapsed += delta;
    this.controls.update();
    const swing = this.warden.pose(this.animation,this.elapsed,this.rageElapsed !== null);
    this.warden.updateParticles(this.elapsed,this.rageElapsed,this.low);
    this.updateTrail(swing,now);
    this.renderer.render(this.scene,this.camera);
    if (!interval) return;
    this.sampleTime += interval;
    this.sampleFrames++;
    if (this.sampleTime >= 500) {
      this.report({ triangles:this.warden.triangleCount, fps:1000*this.sampleFrames/this.sampleTime,
        frameMs:this.sampleTime/this.sampleFrames, calls:this.renderer.info.render.calls });
      this.sampleTime = this.sampleFrames = 0;
    }
  };

  private onVisibility = () => {
    cancelAnimationFrame(this.frame);
    this.lastFrame = this.sampleTime = this.sampleFrames = 0;
    if (!document.hidden && !this.lost) this.frame = requestAnimationFrame(this.render);
  };

  private onContextLost = (event:Event) => {
    event.preventDefault();
    this.lost = true;
    this.onVisibility();
    this.contextStatus(true);
  };

  private onContextRestored = () => {
    this.lost = false;
    this.contextStatus(false);
    this.onVisibility();
  };

  dispose() {
    cancelAnimationFrame(this.frame);
    this.stopResize();
    document.removeEventListener('visibilitychange',this.onVisibility);
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('webglcontextlost',this.onContextLost);
    canvas.removeEventListener('webglcontextrestored',this.onContextRestored);
    this.controls.dispose();
    this.warden.dispose();
    disposeResources(this.scene);
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    canvas.remove();
  }
}
