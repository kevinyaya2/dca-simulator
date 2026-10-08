export type ArenaBox = { minX: number; maxX: number; minZ: number; maxZ: number; minY: number; maxY: number; color: number };
export type SimInput = { moveX: number; moveY: number; lookX: number; lookY: number; jump: boolean };
export type SimPlayer = { x: number; y: number; z: number; yaw: number; pitch: number; velocityY: number; jumpsUsed: number; alive: boolean };
export type SimWorld = { boxes: readonly ArenaBox[]; heightAt: (x: number, z: number) => number };
export const ARENA_BOUNDS = { minX: -154, maxX: 154, minZ: -140, maxZ: 140, width: 308, depth: 280 } as const;
export const ARENA_CAMERA_FAR = 420;
export const PLAYER_MOVE_SPEED = 6.5;
export const PLAYER_EYE_HEIGHT = 1.65;
export const PLAYER_BODY_HEIGHT = 1.8;
export const PLAYER_RADIUS = 0.42;
export const JUMP_SPEED = 7;
export const GRAVITY = 14;
export const MAX_STEP_HEIGHT = 0.35;
const EPSILON = 0.0001;
export const ARENA_SPAWNS: [number, number][] = [[-132,-106],[-104,-122],[-148,-36],[-130,84],[-78,112],[-26,-116],[28,-122],[84,-106],[138,-82],[142,-18],[126,62],[82,112],[18,126],[-42,112],[-96,58],[-108,-42],[-36,-32],[34,34],[76,12],[-66,8]];
export const ARENA_BUILDINGS = [
  { x: -65, z: 45, color: 0x35c955, openSouth: true },
  { x: 68, z: 44, color: 0x19aee1, openSouth: true },
  { x: -68, z: -47, color: 0xee3c87, openSouth: false },
  { x: 66, z: -48, color: 0xf1a72c, openSouth: false },
];
const rect = (x: number, z: number, w: number, d: number, h: number, color: number, minY = 0): ArenaBox =>
  ({ minX: x-w/2, maxX: x+w/2, minZ: z-d/2, maxZ: z+d/2, minY, maxY: minY+h, color });
export const ARENA_BOXES: ArenaBox[] = [
  rect(-152,0,4,280,19,0x2d58c8), rect(152,0,4,280,19,0xec3478),
  rect(0,-138,308,4,17,0xf3a72d), rect(0,138,308,4,17,0x35c955),
  rect(0,-3,6,6,3,0xf04b55), rect(-22,13,8,3,2,0xffb738),
  rect(24,-14,8,3,2,0x4b75e8), rect(-3,20,3,8,2,0x7a4bd5), rect(5,-25,3,8,2,0x35c955),
  ...ARENA_BUILDINGS.flatMap(b => [
    rect(b.x-11,b.z,3,24,11,b.color), rect(b.x+11,b.z,3,24,11,b.color),
    rect(b.x,b.z+(b.openSouth?-11:11),20,3,11,b.color), rect(b.x,b.z,20,20,.5,b.color,10.75),
  ]),
  rect(-40,-8,12,2,4,0x8d55d5), rect(-34,-19,2,18,4,0x8d55d5), rect(-49,-19,2,18,4,0x8d55d5),
  rect(42,10,13,2,4,0xef4c7b), rect(36,20,2,18,4,0xef4c7b), rect(49,20,2,18,4,0xef4c7b),
  rect(-43,-34,4,4,2,0xffc330), rect(42,34,4,4,2,0x35c955),
  rect(-110,24,18,3,3,0x4b75e8), rect(110,-28,18,3,3,0xffb738), rect(-12,92,32,3,3,0x35c955),
];
export function groundHeight(x: number, z: number) {
  if(x>-22&&x<22&&z>52&&z<72)return 12;
  if(x>-25&&x<-16&&z>40&&z<=52)return z-40;
  if(x>-12&&x<20&&z>88&&z<112)return 6;
  if(x>-38&&x<=-12&&z>88&&z<112)return Math.max(0,(x+38)/26*6);
  return 0;
}
export function overlapsBox(x: number, z: number, box: ArenaBox, radius = PLAYER_RADIUS) {
  const dx = Math.max(box.minX-x, 0, x-box.maxX), dz = Math.max(box.minZ-z, 0, z-box.maxZ);
  return dx*dx + dz*dz < radius*radius;
}
export function blocked(x: number, z: number, radius = PLAYER_RADIUS, feet = 0, boxes: readonly ArenaBox[] = ARENA_BOXES) {
  return boxes.some(box => overlapsBox(x,z,box,radius) && feet < box.maxY-EPSILON && feet+PLAYER_BODY_HEIGHT > box.minY+EPSILON);
}
export function pointBlocked(x: number, y: number, z: number, radius = .04, boxes: readonly ArenaBox[] = ARENA_BOXES) {
  return boxes.some(box => y >= box.minY && y <= box.maxY && overlapsBox(x,z,box,radius));
}
export function rayWallDistance(origin: {x:number;y:number;z:number}, direction: {x:number;y:number;z:number}, max: number,
  world: SimWorld = { boxes: ARENA_BOXES, heightAt: groundHeight }) {
  // Small samples also account for the existing ramp/platform height field.
  for (let distance=.04; distance<max; distance+=.1) {
    const x=origin.x+direction.x*distance, y=origin.y+direction.y*distance, z=origin.z+direction.z*distance;
    if(pointBlocked(x,y,z,.04,world.boxes) || y < world.heightAt(x,z)) return distance;
  }
  return max;
}
function supportHeight(x: number, z: number, ceiling: number, world: SimWorld) {
  let height = world.heightAt(x,z);
  for (const box of world.boxes) {
    if(box.maxY <= ceiling+EPSILON && overlapsBox(x,z,box)) height=Math.max(height,box.maxY);
  }
  return height;
}
export function stepPlayer(player: SimPlayer, input: SimInput, dt: number,
  world: SimWorld = { boxes: ARENA_BOXES, heightAt: groundHeight }) {
  if(!player.alive)return;
  player.yaw-=input.lookX*.0024;
  player.pitch=Math.max(-1.35,Math.min(1.35,player.pitch-input.lookY*.0021));
  let feet=player.y-PLAYER_EYE_HEIGHT;
  let support=supportHeight(player.x,player.z,feet+.02,world);
  let grounded=Math.abs(feet-support)<=.02 && player.velocityY<=0;
  if(grounded) { player.jumpsUsed=0; player.velocityY=0; }
  else if(player.jumpsUsed===0) player.jumpsUsed=1;
  if(input.jump && player.jumpsUsed<2) { player.velocityY=JUMP_SPEED; player.jumpsUsed++; grounded=false; }
  const forwardX=-Math.sin(player.yaw), forwardZ=-Math.cos(player.yaw);
  let moveX=forwardX*input.moveY+Math.cos(player.yaw)*input.moveX;
  let moveZ=forwardZ*input.moveY-Math.sin(player.yaw)*input.moveX;
  const length=Math.hypot(moveX,moveZ);
  if(length>0) { moveX=moveX/length*PLAYER_MOVE_SPEED; moveZ=moveZ/length*PLAYER_MOVE_SPEED; }
  const duration=Math.max(0,Math.min(.25,dt));
  const steps=Math.max(1,Math.ceil(duration/(1/120))), h=duration/steps;
  for(let n=0;n<steps;n++) {
    feet=player.y-PLAYER_EYE_HEIGHT;
    const canMove=(x:number,z:number) => !blocked(x,z,PLAYER_RADIUS,feet,world.boxes)
      && world.heightAt(x,z) <= feet+(grounded?MAX_STEP_HEIGHT:EPSILON);
    const x=player.x+moveX*h;
    if(canMove(x,player.z))player.x=x;
    const z=player.z+moveZ*h;
    if(canMove(player.x,z))player.z=z;
    support=supportHeight(player.x,player.z,feet+.02,world);
    if(grounded && Math.abs(support-feet)<=MAX_STEP_HEIGHT) {
      player.y=support+PLAYER_EYE_HEIGHT;player.velocityY=0;player.jumpsUsed=0;continue;
    }
    grounded=false;
    if(player.jumpsUsed===0)player.jumpsUsed=1;
    let nextFeet=feet+player.velocityY*h-GRAVITY*h*h/2;
    player.velocityY-=GRAVITY*h;
    if(nextFeet>feet) {
      for(const box of world.boxes) {
        if(overlapsBox(player.x,player.z,box) && feet+PLAYER_BODY_HEIGHT<=box.minY+EPSILON && nextFeet+PLAYER_BODY_HEIGHT>box.minY) {
          nextFeet=Math.min(nextFeet,box.minY-PLAYER_BODY_HEIGHT);player.velocityY=0;
        }
      }
    }
    if(player.velocityY<=0 && feet>=support-EPSILON && nextFeet<=support) {
      nextFeet=support;player.velocityY=0;player.jumpsUsed=0;grounded=true;
    }
    player.y=nextFeet+PLAYER_EYE_HEIGHT;
  }
}
