import * as T from 'three';
import { disposeResources } from '../systems/DisposeResources';
import { WardenInfectionBurst } from './WardenInfectionBurst';
import { VOID_WARDEN, WARDEN_ATTACKS, WARDEN_ENTRANCE, type WardenAttackKind } from '../../../shared/voidWarden';

export const WARDEN_HEIGHT = 4.8;
export const WARDEN_ANIMATIONS = [
  { id: 'idle', label: '待機' },
  { id: 'walk', label: '走路' },
  { id: 'attack', label: '三連斬' },
] as const;
export type WardenAnimation = typeof WARDEN_ANIMATIONS[number]['id'];
type Point = [number, number, number];
type Ring = [y: number, width: number, depth: number, x?: number, z?: number];
type Face = [Point, Point, Point, number];

const armor = 0x29233a;
const violet = 0x443255;
const chitin = 0x191522;
const embers = 0xff731e;
const octagon = [[1, .42], [.42, 1], [-.42, 1], [-1, .42], [-1, -.42], [-.42, -1], [.42, -1], [1, -.42]];
const footRings: Ring[] = [[-.13,.076,.184,0,.066],[-.073,.084,.177,0,.068],[.06,.045,.061]];
const solePoints = octagon.map(([x,z]) => new T.Vector3(x*footRings[0][1],footRings[0][0],z*footRings[0][2]+footRings[0][4]!));
const hipHeight = 2.22;
const headOffset = 1.42;
const particleLimit = 30;

function glowTexture() {
  const size = 32;
  const pixels = new Uint8Array(size*size*4);
  for (let y=0;y<size;y++) for (let x=0;x<size;x++) {
    const distance = Math.hypot((x+.5)/size-.5,(y+.5)/size-.5)*2;
    const offset = (y*size+x)*4;
    pixels.set([255,255,255,Math.round(255*Math.max(0,1-distance)**2)],offset);
  }
  const texture = new T.DataTexture(pixels,size,size);
  texture.magFilter = texture.minFilter = T.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function faceted(faces: Face[]) {
  const positions: number[] = [];
  const colors: number[] = [];
  const color = new T.Color();
  for (const [a, b, c, tint] of faces) {
    color.setHex(tint);
    for (const [x, y, z] of [a, b, c]) {
      positions.push(x, y, z);
      colors.push(color.r, color.g, color.b);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function quad(faces: Face[], a: Point, b: Point, c: Point, d: Point, color: number, accent = color) {
  faces.push([a, b, c, color], [a, c, d, accent]);
}

// Polygonal cross-sections make each piece a closed, tapered volume.
function loft(rings: Ring[], palette: number[], profile = octagon) {
  const faces: Face[] = [];
  const rows = rings.map(([y, width, depth, x = 0, z = 0]) =>
    profile.map(([u, v]): Point => [x + u * width, y, z + v * depth]));
  const count = profile.length;
  for (let row = 1; row < rows.length; row++) {
    for (let side = 0; side < count; side++) {
      const next = (side + 1) % count;
      quad(faces, rows[row - 1][next], rows[row - 1][side], rows[row][side], rows[row][next],
        palette[side % palette.length], palette[(side + (row % 2)) % palette.length]);
    }
  }
  const top = rows[rows.length - 1];
  for (let side = 1; side < count - 1; side++) {
    faces.push([rows[0][0], rows[0][side], rows[0][side + 1], palette[0]]);
    faces.push([top[0], top[side + 1], top[side], palette[0]]);
  }
  return faces;
}

function mask() {
  // The two cheek plates meet at a vertical ridge and continue to one pointed chin.
  // Only the eye wells interrupt the shell.
  const shell: Point[] = [[0,.192,.32],[.132,.237,.27],[.285,.27,.173],[.321,.092,.17],
    [.277,-.074,.199],[.202,-.224,.267],[0,-.344,.352],[0,-.089,.402]];
  const rim = shell.flatMap((point,index):Point[] => {
    const [x,y,z] = point;
    const [nextX,nextY,nextZ] = shell[(index+1)%shell.length];
    return [point,[(x+nextX)/2,(y+nextY)/2,(z+nextZ)/2]];
  });
  const eyeTilt = .34;
  const eyeCenterX = .161;
  const eyeCenterY = -.12;
  const eyeDepth = (x:number,y:number) => .434-.78*x-.18*y;
  const eye = rim.map((_,index):Point => {
    const angle = (7-index)*Math.PI/8;
    const height = Math.sin(angle);
    const u = Math.cos(angle)*.056*(1-.30*height), v = height*.102;
    const x = eyeCenterX+u*Math.cos(eyeTilt)+v*Math.sin(eyeTilt);
    const y = eyeCenterY+v*Math.cos(eyeTilt)-u*Math.sin(eyeTilt);
    return [x,y,eyeDepth(x,y)];
  });
  const wellCenter: Point = [eyeCenterX-.015,eyeCenterY-.004,eyeDepth(eyeCenterX,eyeCenterY)-.115];
  const shellTints = [0xf1ece1,0xeae5dd,0xe4ddd6,0xe7dfd9,0xf2ebe0,0xf1e9e0,0xf5ede3,0xf3ece4];
  const faceplate: Face[] = [];
  const eyeWells: Face[] = [];
  for (const side of [-1,1]) {
    const plate: Face[] = [];
    const well = eye.map(([x,y,z]):Point => [x-.015,y-.004,z-.105]);
    const mirror = ([x,y,z]:Point):Point => [side*x,y,z];
    for (let i=0;i<eye.length;i++) {
      const next = (i+1)%eye.length;
      quad(plate,rim[i],rim[next],eye[next],eye[i],shellTints[Math.floor(i/2)]);
      quad(plate,eye[i],eye[next],well[next],well[i],0x0c0911);
      eyeWells.push([mirror(wellCenter),mirror(well[i]),mirror(well[next]),0xffffff]);
      if (i<12) {
        const back = ([x,y,z]:Point):Point => [x*.9,y+.011,z-.099];
        quad(plate,rim[i],back(rim[i]),back(rim[next]),rim[next],0xcac0bf);
      }
    }
    for (const [a,b,c,color] of plate) faceplate.push([mirror(a),mirror(b),mirror(c),color]);
  }
  return {faceplate,eyeWells};
}

function capePanel(start: number, span: number, length: number, index: number) {
  const point = (row: number, edge: number): Point => {
    const brokenHem = edge === .5 ? .29 : edge === 0 ? -.51 : -.30;
    const angle = start + (edge - .5)*span + row*(index < 4 ? .064 : -.044);
    const radius = [.46,.72,.97,1.16][row] + (edge === .5 ? .059 : 0);
    const drop = row === 3 ? length+brokenHem : [0,.43,1.01][row];
    return [Math.sin(angle)*radius, -.04-drop + Math.cos(angle)*.12, Math.cos(angle)*radius*.66-.13];
  };
  const faces: Face[] = [];
  const tones = [0x392b4b,0x281d36,0x504060,0x332744,0x59384d];
  for (let row = 0; row < 2; row++) {
    for (const edge of [0,.5]) {
      const tint = (index + row + edge*2) % tones.length;
      quad(faces,point(row,edge),point(row+1,edge),point(row+1,edge+.5),point(row,edge+.5),
        tones[tint],tones[(tint+1)%tones.length]);
    }
  }
  for (const edge of [0,.5]) {
    const wornEdge = index%3 === 0 && edge === .5 ? 0x894a46 : tones[(index+3)%tones.length];
    quad(faces,point(2,edge),point(3,edge),point(3,edge+.5),point(2,edge+.5),wornEdge,tones[(index+1)%tones.length]);
  }
  return faces;
}

const slashDuration = 2.78;
export const WARDEN_SLASH_WINDOWS = [[.41,.59],[.90,1.09],[1.52,1.76]] as const;

// Time, forward step, torso twist and lean, hilt XYZ, blade heading and elevation in degrees.
const slashPoses = [
  [0,0,0,0,.65,1.94,.24,47,-54],
  [.41,.08,-.38,.46,.96,2.03,.66,91,37],
  [.50,.37,.06,.63,.54,1.58,1.22,5,1],
  [.59,.47,.54,.77,-.40,1.13,1.34,-91,-26],
  [.66,.47,.53,.79,-.43,1.10,1.37,-94,-28],
  [.90,.43,.51,.51,-.43,2.04,1.27,-90,36],
  [.99,.60,.04,.66,.30,1.55,1.47,-2,2],
  [1.09,.68,-.43,.76,1.04,1.12,1.08,94,-26],
  [1.17,.68,-.44,.76,1.07,1.10,1.10,96,-27],
  [1.52,.59,-.23,.38,.82,2.55,1.06,55,61],
  [1.64,.86,.06,.69,.49,1.98,1.52,8,16],
  [1.76,1.03,.37,.88,-.20,1.11,1.83,-40,-31],
  [1.92,1.02,.34,.88,-.22,1.05,1.83,-43,-29],
  [2.59,0,0,0,.65,1.94,.24,47,-54],
  [slashDuration,0,0,0,.65,1.94,.24,47,-54],
].map(([time,...values]) => ({time,values}));
const upperArmLength = .69;
const forearmLength = .66;
const armDown = new T.Vector3(0,-1,0);
const weaponScale = 2;

export class VoidWarden {
  readonly group = new T.Group();
  readonly triangleCount: number;
  private readonly hips = new T.Group();
  private readonly body = new T.Group();
  private readonly infectionBurst = new WardenInfectionBurst();
  private readonly head = new T.Group();
  private readonly arms: { shoulder: T.Group; elbow: T.Group; hand: T.Group }[] = [];
  private readonly legs: { thigh: T.Group; shin: T.Group; foot: T.Group }[] = [];
  private readonly cape: T.Mesh[] = [];
  private readonly plates = new T.MeshStandardMaterial({ vertexColors:true, roughness:.78, metalness:.12 });
  private readonly fabric = new T.MeshStandardMaterial({ vertexColors:true, side:T.DoubleSide, roughness:.97 });
  private readonly face = new T.MeshStandardMaterial({ vertexColors:true, side:T.DoubleSide, roughness:.49 });
  private readonly eyeWells = new T.MeshBasicMaterial({ color:0x040306,side:T.DoubleSide });
  private readonly glow = new T.MeshStandardMaterial({ vertexColors:true, color:0xffcd8f, emissive:embers, emissiveIntensity:1.1, roughness:.58 });
  private readonly particleGeometry = new T.BufferGeometry();
  private readonly glowMap = glowTexture();
  private readonly particleMaterial = new T.PointsMaterial({ map:this.glowMap,color:0xffa053,size:.13,
    transparent:true,opacity:.85,depthWrite:false,blending:T.AdditiveBlending });
  private readonly haloMaterial = new T.SpriteMaterial({ map:this.glowMap,color:0xff7430,
    transparent:true,opacity:.24,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false });
  private readonly particlePositions = new Float32Array(particleLimit*3);
  private readonly sole = new T.Vector3();
  private readonly inverseRoot = new T.Matrix4();
  private readonly weaponTipAxis = new T.Vector3();
  private weaponTipDistance = 0;
  private readonly hiltPosition = new T.Vector3();
  private readonly bladeDirection = new T.Vector3();
  private readonly weaponGroup = new T.Group();
  private readonly rootRotation = new T.Quaternion();
  private readonly jointRotation = new T.Quaternion();
  private readonly shoulderPosition = new T.Vector3();
  private readonly elbowDirection = new T.Vector3();
  private readonly handDirection = new T.Vector3();
  private readonly elbowBend = new T.Vector3();
  readonly bladeBase = new T.Object3D();
  readonly bladeTip = new T.Object3D();

  constructor() {
    this.group.name = 'Void Warden';
    this.group.add(this.hips);
    this.hips.position.y = hipHeight;
    this.hips.add(this.body);
    this.body.add(this.head);
    this.head.position.set(0,headOffset,.05);

    this.piece(this.hips, loft([[-.25,.134,.145],[-.075,.326,.221],[.16,.225,.193]], [chitin,armor,violet]));
    this.piece(this.body, loft([[.0,.19,.17],[.31,.245,.222],[.77,.346,.258],[1.08,.439,.233],[1.28,.189,.172]],
      [0x24212d,0x292131,0x3f2f49,0x1b1825,0x352941]));
    this.piece(this.body, loft([[1.08,.174,.12],[1.46,.141,.137]], [chitin,armor]));
    this.piece(this.head,loft([[-.298,.10,.112,0,-.036],[-.158,.221,.165,0,-.055],
      [.095,.282,.215,0,-.081],[.246,.244,.19,0,-.087],[.284,.16,.126,0,-.089]], [chitin,armor]));
    const {faceplate,eyeWells} = mask();
    this.piece(this.head,faceplate,this.face).name = 'Faceplate';
    this.piece(this.head,eyeWells,this.eyeWells).name = 'Recessed eyes';

    const hornColors = [0xd6cac7,0xf0e6d8,0xf6f1e8,0xded7cd,0xede4d8,0xcbbdbd,0xc5b9bc,0xe5d9ce];
    for (const side of [-1,1]) {
      const taller = side===1;
      const tip = WARDEN_HEIGHT-hipHeight-headOffset+(taller ? .033 : -.073);
      this.piece(this.head, loft([
        [.105,.139,.126,side*.207,.105],[.249,.123,.138,side*.295,.053],[.386,.110,.128,side*.375,-.005],
        [.54,.098,.106,side*.432,-.051],[.69,.081,.090,side*(taller ? .463 : .456),-.092],
        [.83,.063,.071,side*(taller ? .444 : .432),-.113],[.946,.042,.049,side*(taller ? .397 : .379),-.137],
        [tip-.07,.024,.027,side*(taller ? .342 : .337),-.158],[tip,.002,.002,side*(taller ? .291 : .307),-.179],
      ], hornColors));
      if (taller) {
        this.piece(this.head,loft([[.642,.045,.055,.415,-.081],[.749,.033,.040,.373,-.086],
          [.841,.002,.003,.304,-.073]],hornColors));
      }

      const shoulder = this.joint(this.body,side*.448,1.016,0);
      const elbow = this.joint(shoulder,0,-upperArmLength,0);
      const hand = this.joint(elbow,0,-forearmLength,0);
      this.arms.push({shoulder,elbow,hand});
      this.piece(shoulder,loft([[-.71,.057,.061],[-.46,.071,.078],[-.18,.106,.109],
        [.02,.153,.144,side*.038],[.13,.095,.091]], [chitin,armor,violet,0x43334c]));
      this.piece(elbow,loft([[-.68,.049,.055],[-.52,.063,.076],[-.24,.094,.094],[-.052,.105,.112],[.07,.064,.069]],
        [armor,chitin,0x332a3e,0x4a3754]));
      this.piece(hand,loft([[-.205,.042,.052],[-.145,.086,.091],[-.04,.091,.092],[.04,.063,.069]], [chitin,armor]));
      const digits: Face[] = [];
      for (let index=0;index<3;index++) {
        const x = (index-1)*.05;
        digits.push(...loft([[-.26,.023,.036,x,.02],[-.16,.032,.053,x,.044],[-.074,.026,.045,x,.045]],
          [armor,chitin,0x51405a]));
      }
      this.piece(hand,digits);

      const thigh = this.joint(this.hips,side*.214,-.07,0);
      const shin = this.joint(thigh,0,-1.045,0);
      const foot = this.joint(shin,0,-.99,0);
      this.legs.push({thigh,shin,foot});
      this.piece(thigh,loft([[-1.08,.063,.078],[-.85,.071,.084],[-.36,.108,.116],[-.06,.136,.133],[.09,.102,.104]],
        [chitin,0x2a2133,0x3a2c44,armor]));
      this.piece(shin,loft([[-.99,.034,.049],[-.76,.045,.055],[-.26,.072,.086],[-.055,.092,.107,0,.015],
        [.07,.063,.072]], [armor,chitin,violet,0x33263c]));
      this.piece(foot,loft(footRings,[chitin,armor,violet]));
    }

    const capeLengths = [1.32,1.96,2.24,1.85,2.01,2.21,1.88,1.40];
    capeLengths.forEach((length,index) => {
      const angle = .67 + index*(2*Math.PI-1.34)/(capeLengths.length-1);
      const panel = this.piece(this.body,capePanel(angle,.87,length,index),this.fabric);
      panel.position.y = 1.15;
      this.cape.push(panel);
    });
    const mantle: Face[] = [];
    for (const [index,start] of [.35,1,1.72,2.47,3.18,3.94,4.69,5.44].entries()) {
      const palette = [0x6a4b6e,0x3b2b4a,0x59445f,0x292033];
      const p = (angle:number, radius:number, y:number):Point => [Math.sin(angle)*radius,y,Math.cos(angle)*radius*.71-.04];
      const a = p(start,.21,1.28), b = p(start+.76,.23,1.31), c = p(start+.74,.69,1.035), d = p(start+.01,.68,1.055);
      quad(mantle,a,b,c,d,palette[index%4],palette[(index+1)%4]);
      mantle.push([d,c,p(start+.42,.88,.79),palette[(index+2)%4]]);
    }
    this.piece(this.body,mantle,this.fabric);
    this.infection();
    this.weapon(this.arms[1].hand);

    let triangles = 0;
    this.group.traverse(object => {
      if (object instanceof T.Mesh) triangles += (object.geometry.index?.count ?? object.geometry.getAttribute('position').count)/3;
    });
    this.triangleCount = triangles;
    this.particleGeometry.setAttribute('position',new T.BufferAttribute(this.particlePositions,3).setUsage(T.DynamicDrawUsage));
    this.particleGeometry.setDrawRange(0,18);
    const particles = new T.Points(this.particleGeometry,this.particleMaterial);
    particles.frustumCulled = false;
    this.group.add(particles,this.infectionBurst.group);
    this.body.add(...this.infectionBurst.emitters);
    this.pose('idle',0,false);
  }

  private joint(parent: T.Object3D, x:number, y:number, z:number) {
    const joint = new T.Group();
    joint.position.set(x,y,z);
    parent.add(joint);
    return joint;
  }

  private piece(parent:T.Object3D, faces:Face[], material:T.Material = this.plates) {
    const mesh = new T.Mesh(faceted(faces),material);
    parent.add(mesh);
    return mesh;
  }

  private infection() {
    const shell: Face[] = [];
    const light: Face[] = [];
    for (const [x,y,z,scale] of [[.078,.69,.254,.46],[-.40,1.23,-.37,1.16],[-.13,1.16,-.48,.69]]) {
      const side = Math.sign(z);
      const halo = new T.Sprite(this.haloMaterial);
      halo.position.set(x,y+.01,z+.24*side);
      halo.scale.setScalar(.83*scale);
      this.body.add(halo);
      const outer = loft([[y-.19*scale,.094*scale,.07*scale,x,z],[y-.08*scale,.26*scale,.16*scale,x,z],
        [y+.11*scale,.24*scale,.19*scale,x,z],[y+.23*scale,.07*scale,.07*scale,x,z]], [0x322232,0x603748,0x211b2b,0x523041]);
      shell.push(...outer);
      light.push(...loft([[y-.175*scale,.02,.022,x,z+.11*side*scale],[y-.06*scale,.117*scale,.082*scale,x,z+.14*side*scale],
        [y+.059*scale,.15*scale,.094*scale,x-.02,z+.16*side*scale],[y+.18*scale,.033,.038,x+.02,z+.125*side*scale]],
        [0xffa345,0xff7530,0xffc164,0xef4814,0xff8422,0xffaf3b]));
      const crack = (dx:number,dy:number,dz:number):Point => [x+dx*scale,y+dy*scale,z+dz*side*scale];
      light.push([crack(-.03,-.03,.235),crack(.022,-.04,.235),crack(-.056,-.34,.11),0xf04513],
        [crack(.03,.05,.244),crack(.06,.016,.239),crack(.195,.142,.14),0xff6922],
        [crack(-.09,.045,.21),crack(-.12,.02,.20),crack(-.24,.12,.05),0xf95624]);
    }
    this.piece(this.body,shell);
    this.piece(this.body,light,this.glow);
  }

  private weapon(hand:T.Group) {
    const spike = this.weaponGroup;
    spike.position.set(0,-.1,.07);
    spike.scale.setScalar(weaponScale);
    hand.add(spike);
    const diamond = [[0,1],[-1,0],[0,-1],[1,0]];
    this.piece(spike,loft([[-.28,.074,.08],[-.13,.078,.085],[.14,.075,.08],[.24,.115,.13],[.40,.061,.068]],
      [0x3e3147,0x211927,0x665467,0x45304d]));
    this.piece(spike,loft([[-.45,.15,.11],[-.37,.28,.13],[-.25,.32,.15],[-.20,.11,.085]],
      [0x877994,0x503553,0xbcb0b5,0x37283d],diamond));
    this.piece(spike,loft([[-2.12,.002,.003,.098],[-1.51,.077,.054,.021],[-.67,.162,.115],
      [-.40,.194,.129],[-.30,.109,.08]], [0xc3adb9,0x78637d,0xd9b8c2,0x93859e],diamond));
    this.piece(spike,loft([[-1.51,.006,.008,.04,.05],[-.73,.022,.014,.015,.113],[-.45,.038,.018,.006,.127]],
      [0xff7530,0xe84d1e],diamond),this.glow);
    this.bladeBase.position.set(0,-.47,0);
    this.bladeTip.position.set(.098,-2.12,0);
    this.weaponTipAxis.copy(this.bladeTip.position).multiplyScalar(weaponScale).add(spike.position);
    this.weaponTipDistance = this.weaponTipAxis.length();
    this.weaponTipAxis.divideScalar(this.weaponTipDistance);
    spike.add(this.bladeBase,this.bladeTip);
  }

  pose(animation:WardenAnimation,seconds:number,enraged:boolean) {
    this.weaponGroup.visible = true;
    const time = seconds*(enraged ? VOID_WARDEN.enrageRate : 1);
    const attackTime = time % slashDuration;
    const stride = time * Math.PI*1.75;
    const breath = Math.sin(time*2.7);
    const walk = animation === 'walk';
    const attack = animation === 'attack';
    let step = 0, yaw = 0, lean = 0, hiltX = 0, hiltY = 0, hiltZ = 0, heading = 0, elevation = 0;
    const swinging = attack && WARDEN_SLASH_WINDOWS.some(([begin,end]) => attackTime>=begin && attackTime<=end);
    if (attack) {
      const right = slashPoses.findIndex(row => row.time > attackTime);
      const {time:from,values:start} = slashPoses[right-1];
      const {time:to,values:end} = slashPoses[right];
      const ratio = (attackTime-from)/(to-from);
      const blend = swinging ? ratio : ratio*ratio*(3-2*ratio);
      [step,yaw,lean,hiltX,hiltY,hiltZ,heading,elevation] = start.map((value,index) => T.MathUtils.lerp(value,end[index],blend));
    }
    this.hips.position.set(0,hipHeight+(walk ? -.06+Math.abs(Math.sin(stride))*.075 : breath*.016),step);
    this.hips.rotation.y = walk ? Math.sin(stride)*.085 : yaw*.21;
    this.body.rotation.set((walk ? .10 : lean) + (enraged ? .06 : 0), yaw*.79, walk ? Math.sin(stride)*.05 : -yaw*.045);
    this.head.rotation.set(-this.body.rotation.x*.68 + breath*.025, -yaw*.34, enraged ? -.07 : breath*.021);
    for (let index=0;index<2;index++) {
      const side = index === 0 ? -1 : 1;
      const sweep = walk ? Math.sin(stride)*side : 0;
      const {thigh,shin,foot} = this.legs[index];
      thigh.rotation.set(sweep*.41,side*.10,side*(walk ? .088 : .145));
      shin.rotation.x = Math.max(0,-sweep)*.66;
      if (attack) {
        const crouch = Math.min(1,lean/.70);
        thigh.rotation.x = (side===1 ? -1.19 : .72)*crouch;
        shin.rotation.x = (side===1 ? 1.68 : .25)*crouch;
      }
      foot.rotation.x = -(thigh.rotation.x+shin.rotation.x)*(attack ? 1 : .65);
      const {shoulder,elbow,hand} = this.arms[index];
      if (side === 1) {
        shoulder.rotation.set(-.12-sweep*.18-(walk ? .19 : 0),0,.14);
        elbow.rotation.set(-.25-Math.max(0,sweep)*.19,0,0);
        hand.rotation.set(-.34,.046,.12);
      } else {
        shoulder.rotation.set(-.04-sweep*.38-lean*.8,-.12,-.14-Math.abs(yaw)*.38);
        elbow.rotation.x = -.21-Math.abs(yaw)*.33;
        hand.rotation.set(-.03,.01,-.05);
      }
    }
    this.plantFeet();
    if (attack) this.swingBlade(hiltX,hiltY,hiltZ,heading,elevation);
    else this.aimBlade(walk ? 39+Math.sin(stride)*4 : 73,-27);
    this.cape.forEach((panel,index) => {
      panel.rotation.x = (walk ? .046 : .012)*Math.sin(time*3.2+index*.48) - lean*.18;
      panel.rotation.z = (walk ? .066 : .025)*Math.sin(time*2.8+index*.42) - yaw*.11;
    });
    this.glow.emissiveIntensity = (enraged ? 2.5 : .9) + (breath+1)*(enraged ? .4 : .16);
    this.haloMaterial.opacity = (enraged ? .53 : .22) + (breath+1)*(enraged ? .08 : .025);
    this.eyeWells.color.setHex(enraged ? 0xff6813 : 0x040306);
    if (enraged) this.eyeWells.color.multiplyScalar(1.1+(breath+1)*.43);
    return swinging;
  }

  private swingBlade(x:number,y:number,z:number,heading:number,elevation:number) {
    const {shoulder,elbow,hand} = this.arms[1];
    shoulder.getWorldPosition(this.shoulderPosition).applyMatrix4(this.inverseRoot);
    this.handDirection.set(x,y,z).sub(this.shoulderPosition);
    const distance = T.MathUtils.clamp(this.handDirection.length(),.12,upperArmLength+forearmLength-.015);
    this.handDirection.normalize();
    const along = (upperArmLength**2-forearmLength**2+distance**2)/(2*distance);
    const outward = Math.sqrt(Math.max(0,upperArmLength**2-along**2));
    // Solve the two arm segments while keeping the elbow out from the torso.
    this.elbowBend.set(.85,-.58,-.37);
    this.elbowBend.addScaledVector(this.handDirection,-this.elbowBend.dot(this.handDirection)).normalize();
    this.elbowDirection.copy(this.handDirection).multiplyScalar(along).addScaledVector(this.elbowBend,outward);
    this.aimJoint(shoulder,armDown,this.elbowDirection);
    this.handDirection.multiplyScalar(distance).sub(this.elbowDirection);
    this.aimJoint(elbow,armDown,this.handDirection);
    this.aimBlade(heading,elevation);
  }

  private aimBlade(heading:number,elevation:number) {
    const {hand} = this.arms[1];
    hand.getWorldPosition(this.hiltPosition).applyMatrix4(this.inverseRoot);
    const azimuth = T.MathUtils.degToRad(heading);
    const pitch = T.MathUtils.degToRad(elevation);
    const minimumDrop = T.MathUtils.clamp((.105-this.hiltPosition.y)/this.weaponTipDistance,-1,1);
    const up = Math.max(Math.sin(pitch),minimumDrop);
    const reach = Math.sqrt(1-up*up);
    this.bladeDirection.set(Math.sin(azimuth)*reach,up,Math.cos(azimuth)*reach);
    this.aimJoint(hand,this.weaponTipAxis,this.bladeDirection);
  }

  entrancePose(elapsed:number) {
    this.pose('idle',elapsed/1000,false);
    const {land,title} = WARDEN_ENTRANCE;
    const rising = T.MathUtils.smoothstep(elapsed,land+80,title+400);
    const slump = 1-rising;
    this.body.rotation.x = .53*slump;
    this.head.rotation.x = .40*slump;
    const brace = T.MathUtils.smoothstep(elapsed,land-125,land+40)*(1-T.MathUtils.smoothstep(elapsed,land+80,land+640));
    if(brace>0){
      for(const {thigh,shin,foot} of this.legs){
        thigh.rotation.x=-.56*brace;
        shin.rotation.x=1.13*brace;
        foot.rotation.x=-.57*brace;
      }
      this.plantFeet();
    }
    for(const [index,{shoulder,elbow}] of this.arms.entries()){
      const side = index===0 ? -1 : 1;
      shoulder.rotation.set(-.26*slump,side*.12*slump,side*(.14+.43*slump));
      elbow.rotation.x = -.23-.48*slump;
    }
    this.weaponGroup.visible = elapsed>=land+130;
    const lift = Math.sin(Math.PI*T.MathUtils.smoothstep(elapsed,land+140,WARDEN_ENTRANCE.finish));
    this.aimBlade(73-27*lift,-27+53*lift);
  }

  combatPose(kind:WardenAttackKind,elapsed:number,enraged:boolean) {
    const t=Math.max(0,elapsed);
    if(kind==='slash'){
      this.pose('attack',Math.min(t,WARDEN_ATTACKS.slash.duration)/1000/(enraged?VOID_WARDEN.enrageRate:1),enraged);
      return;
    }
    this.pose('idle',t/1000,enraged);
    if(kind==='dash'){
      const charge=T.MathUtils.smoothstep(t,0,WARDEN_ATTACKS.dash.windup);
      this.body.rotation.x=.58*charge;
      this.head.rotation.x=-.30*charge;
      this.swingBlade(.58,1.63-.42*charge,.28+.85*charge,24-24*charge,20-22*charge);
    }else if(kind==='leap'){
      const travel=T.MathUtils.smoothstep(t,WARDEN_ATTACKS.leap.windup,WARDEN_ATTACKS.leap.duration);
      this.body.rotation.x=.10+.65*travel;
      this.head.rotation.x=-.34*travel;
      this.swingBlade(.64-.35*travel,2.52-1.31*travel,.70+.76*travel,50-73*travel,71-110*travel);
    }else{
      const pulse=Math.sin(Math.PI*T.MathUtils.smoothstep(t,180,WARDEN_ATTACKS.burst.duration));
      this.body.rotation.x=-.17*pulse;
      this.head.rotation.x=.19*pulse;
      this.arms[0].shoulder.rotation.z=-.90*pulse-.14;
      this.swingBlade(.68+.24*pulse,1.47+.60*pulse,.52,92,12+25*pulse);
      this.glow.emissiveIntensity+=2.8*pulse;
    }
  }

  selfStabPose(elapsed:number){
    this.pose('idle',elapsed/1000,true);
    const pull=T.MathUtils.smoothstep(elapsed,0,410);
    const jab=T.MathUtils.smoothstep(elapsed,450,590);
    this.body.rotation.x=.24*jab-.09*pull;
    this.head.rotation.x=.38*jab;
    this.swingBlade(.87-.56*jab,2.12+.48*pull-.67*jab,.55+.76*pull,59+113*pull,57-71*jab);
  }

  collapsePose(elapsed:number,stand:boolean){
    this.pose('idle',elapsed/1000,false);
    const motion=T.MathUtils.smoothstep(elapsed,0,stand?400:700);
    const kneel=stand?1-motion:motion;
    this.body.rotation.x=kneel*.62;
    this.head.rotation.x=kneel*.42;
    for(const [i,{thigh,shin,foot}] of this.legs.entries()){
      thigh.rotation.x=-(i===0?.82:1.22)*kneel;
      shin.rotation.x=(i===0?1.88:1.63)*kneel;
      foot.rotation.x=-(thigh.rotation.x+shin.rotation.x)*.94;
    }
    this.plantFeet();
    this.aimBlade(75,-31);
  }

  bindingPoints(left:T.Vector3,right:T.Vector3) {
    this.arms[0].hand.getWorldPosition(left);
    this.arms[1].hand.getWorldPosition(right);
  }

  private aimJoint(joint:T.Group,localAxis:T.Vector3,modelDirection:T.Vector3) {
    joint.parent!.getWorldQuaternion(this.jointRotation).invert().multiply(this.rootRotation);
    this.sole.copy(modelDirection).normalize().applyQuaternion(this.jointRotation);
    joint.quaternion.setFromUnitVectors(localAxis,this.sole);
  }

  private plantFeet() {
    // Root transform stays fixed throughout a pose. Refresh it once before IK.
    this.group.getWorldQuaternion(this.rootRotation);
    this.inverseRoot.copy(this.group.matrixWorld).invert();
    this.hips.updateWorldMatrix(false,false);
    let floor = Infinity;
    for (const {thigh,shin,foot} of this.legs) {
      thigh.updateWorldMatrix(false,false);
      shin.updateWorldMatrix(false,false);
      foot.updateWorldMatrix(false,false);
      for (const point of solePoints) {
        this.sole.copy(point).applyMatrix4(foot.matrixWorld).applyMatrix4(this.inverseRoot);
        floor = Math.min(floor,this.sole.y);
      }
    }
    this.hips.position.y -= floor-.006;
  }

  updateParticles(seconds:number,rageElapsed:number|null,low:boolean) {
    const enraged = rageElapsed !== null;
    const count = low ? (enraged ? 10 : 6) : (enraged ? particleLimit : 18);
    this.particleGeometry.setDrawRange(0,count);
    for (let index=0;index<count;index++) {
      const angle = index*2.399963+seconds*(.18+(index%4)*.055);
      const rise = (index*.618+seconds*(enraged ? .39 : .23))%1;
      const radius = .65+(index%5)*.18+rise*.25;
      this.particlePositions[index*3] = Math.cos(angle)*radius;
      this.particlePositions[index*3+1] = .4+rise*3.85;
      this.particlePositions[index*3+2] = Math.sin(angle)*radius;
    }
    const positions=this.particleGeometry.getAttribute('position') as T.BufferAttribute;
    positions.clearUpdateRanges();
    positions.addUpdateRange(0,count*3);
    positions.needsUpdate=true;
    this.particleMaterial.size = enraged ? .16 : .13;
    this.infectionBurst.update(rageElapsed,low);
  }

  dispose() {
    this.group.removeFromParent();
    disposeResources(this.group);
  }
}
