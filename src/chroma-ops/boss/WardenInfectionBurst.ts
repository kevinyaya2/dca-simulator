import * as T from 'three';

const shardCount = 72;
const openingDuration = 1.1;
const emberCycle = 1.65;
const hot = new T.Color(0xffca62);
const orange = new T.Color(0xff6b16);
const cooling = new T.Color(0xbc2906);

const shards = Array.from({length:shardCount},(_,index) => {
  const angle = index*2.399963;
  return {
    emitter:index%2,
    side:Math.cos(angle),
    outward:.66+Math.abs(Math.sin(angle))*.68,
    spread:.6+(index%9)*.17,
    lift:1.2+(index%11)*.26,
    delay:(index*.618)%1,
    lifetime:.49+(index%13)*.043,
    size:.046+(index%7)*.012,
  };
});

export class WardenInfectionBurst {
  readonly group = new T.Group();
  readonly emitters = [new T.Object3D(),new T.Object3D()];
  private readonly sources = [new T.Vector3(),new T.Vector3()];
  private readonly geometry = new T.BufferGeometry();
  private readonly vertices = new Float32Array(shardCount*18);
  private readonly colors = new Float32Array(shardCount*18);
  private readonly inverse = new T.Matrix4();
  private readonly shockwave: T.Mesh<T.PlaneGeometry,T.ShaderMaterial>;

  constructor() {
    this.group.name = 'Infection burst';
    this.group.visible = false;
    this.emitters[0].position.set(.07,.72,.41);
    this.emitters[1].position.set(-.38,1.24,-.58);
    this.geometry.setAttribute('position',new T.BufferAttribute(this.vertices,3).setUsage(T.DynamicDrawUsage));
    this.geometry.setAttribute('color',new T.BufferAttribute(this.colors,3).setUsage(T.DynamicDrawUsage));
    const sparks = new T.Mesh(this.geometry,new T.MeshBasicMaterial({
      vertexColors:true,side:T.DoubleSide,depthWrite:false,transparent:true,
      blending:T.AdditiveBlending,toneMapped:false,
    }));
    sparks.frustumCulled = false;
    sparks.renderOrder = 2;
    this.group.add(sparks);

    this.shockwave = new T.Mesh(new T.PlaneGeometry(4.65,4.65),new T.ShaderMaterial({
      uniforms:{progress:{value:0}},
      depthWrite:false,transparent:true,blending:T.AdditiveBlending,toneMapped:false,
      vertexShader:`
        varying vec2 point;
        void main() {
          point=uv*2.0-1.0;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }`,
      fragmentShader:`
        varying vec2 point;
        uniform float progress;
        void main() {
          float distance=length(point);
          float radius=0.12+0.80*(1.0-pow(1.0-progress,2.0));
          float rim=1.0-smoothstep(0.007,0.031,abs(distance-radius));
          float glow=1.0-smoothstep(0.022,0.11,abs(distance-radius));
          float wake=1.0-smoothstep(0.008,0.035,abs(distance-radius*0.76));
          float fade=smoothstep(0.0,0.08,progress)*pow(1.0-progress,1.4);
          vec3 color=mix(vec3(1.0,0.17,0.015),vec3(1.0,0.72,0.27),rim);
          gl_FragColor=vec4(color,(rim*0.77+glow*0.23+wake*0.23)*fade);
        }`,
    }));
    this.shockwave.rotation.x = -Math.PI/2;
    this.shockwave.position.y = .028;
    this.shockwave.renderOrder = 1;
    this.group.add(this.shockwave);
  }

  update(elapsed:number|null,low:boolean) {
    this.group.visible = elapsed !== null;
    if (elapsed === null) return;
    this.shockwave.visible = elapsed < .82;
    this.shockwave.material.uniforms.progress.value = Math.min(1,elapsed/.82);
    this.group.updateWorldMatrix(true,false);
    this.inverse.copy(this.group.matrixWorld).invert();
    for (const [index,emitter] of this.emitters.entries()) {
      emitter.getWorldPosition(this.sources[index]).applyMatrix4(this.inverse);
    }

    const opening = elapsed < openingDuration;
    const count = opening ? (low ? 36 : shardCount) : (low ? 14 : 32);
    const clock = opening ? elapsed : elapsed-openingDuration;
    const speed = opening ? 1 : .52;
    let offset = 0;
    for (let index=0;index<count;index++) {
      const {emitter,side,outward,spread,lift,delay,lifetime,size} = shards[index];
      const age = opening ? clock-delay*.12 : (clock+delay*emberCycle)%emberCycle;
      if (age<0 || age>=lifetime) continue;
      const source = this.sources[emitter];
      const direction = emitter===0 ? 1 : -1;
      const progress = age/lifetime;
      const impulse = opening ? .34*(1-Math.exp(-8*age)) : 0;
      const x = source.x+side*spread*(speed*age+impulse);
      const y = source.y+(lift*speed-1.7*age)*age;
      const z = source.z+direction*outward*(speed*age+impulse*.73);
      const width = size*(1-progress*.59);
      const tail = width*(opening ? 3.5 : 2.5);
      const fade = Math.min(1,age/.032)*(1-progress)**1.25*(opening ? 1.14 : .95);
      offset = this.vertex(offset,x,y+width,z,hot,fade);
      offset = this.vertex(offset,x-width,y,z+width*.45,orange,fade*.8);
      offset = this.vertex(offset,x-side*tail,y-tail,z-direction*tail*.5,cooling,fade*.42);
      offset = this.vertex(offset,x,y+width,z,hot,fade);
      offset = this.vertex(offset,x+width,y,z-width*.45,orange,fade*.8);
      offset = this.vertex(offset,x-side*tail,y-tail,z-direction*tail*.5,cooling,fade*.42);
    }
    this.geometry.setDrawRange(0,offset/3);
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
  }

  private vertex(offset:number,x:number,y:number,z:number,color:T.Color,strength:number) {
    this.vertices[offset] = x;
    this.vertices[offset+1] = y;
    this.vertices[offset+2] = z;
    this.colors[offset] = color.r*strength;
    this.colors[offset+1] = color.g*strength;
    this.colors[offset+2] = color.b*strength;
    return offset+3;
  }
}
