import type { ArenaBox } from './arena.js';

export const CITY_BUILDINGS=[{x:-65,z:45,color:0x35c955,name:'WEST ARCADE',side:-1},{x:68,z:44,color:0x19aee1,name:'EAST STATION',side:1}];
export const cityBox=(x:number,z:number,w:number,d:number,top:number,color:number,bottom=0):ArenaBox=>
  ({minX:x-w/2,maxX:x+w/2,minZ:z-d/2,maxZ:z+d/2,minY:bottom,maxY:top,color});
export type CityRamp={x:number;z0:number;z1:number;from:number;to:number;width:number};
export const CITY_RAMPS:CityRamp[]=CITY_BUILDINGS.flatMap(b=>[
  {x:b.x+b.side*16,z0:b.z+25,z1:b.z+1,from:0,to:6,width:4},
  {x:b.x+b.side*22,z0:b.z+1,z1:b.z+25,from:6,to:12,width:4},
]);
export function cityRampHeight(x:number,z:number):number|null {
  for(const ramp of CITY_RAMPS){
    const t=(z-ramp.z0)/(ramp.z1-ramp.z0);
    if(Math.abs(x-ramp.x)<=ramp.width/2&&t>=0&&t<=1)return ramp.from+(ramp.to-ramp.from)*t;
  }
  return null;
}

const structures:ArenaBox[]=[];
for(const b of CITY_BUILDINGS){
  const add=(x:number,z:number,w:number,d:number,top:number,color=b.color,bottom=0)=>structures.push(cityBox(b.x+x,b.z+z,w,d,top,color,bottom));
  // All four facades have a door and actual open windows at both levels.
  for(const base of [0,6])for(const side of [-1,1])for(const axis of ['x','z']){
    const wall=(u:number,width:number,lo:number,hi:number)=>axis==='x'?add(side*12,u,.4,width,hi,b.color,lo):add(u,side*12,width,.4,hi,b.color,lo);
    wall(0,24,base+3.5,base+6);
    for(const u of [-7,7])wall(u,10,base,base+1.2);
    for(const u of [-12,-6,-2,2,6,12])wall(u,.6,base+1.2,base+3.5);
  }
  for(const top of [6,12]){
    // A stairwell opening gives full headroom for the return flight.
    add(-8.65,0,6.3,23.6,top,0xe9edf1,top-.3);
    add(5.15,0,13.3,23.6,top,0xe9edf1,top-.3);
    add(-3.5,-10.15,4,3.3,top,0xe9edf1,top-.3);
    add(-3.5,6.7,4,10.2,top,0xe9edf1,top-.3);
    for(const base of [top-6]){
      for(let n=0;n<12;n++){
        add(-7.5,-8+(n+.5)*.65,4,.65,base+(n+1)*.25,0xffc330,base);
        add(-3.5,-.2-(n+.5)*.65,4,.65,base+3+(n+1)*.25,0xffc330,base+3);
      }
      add(-5.5,.9,8,2.2,base+3,0xffc330,base+2.7);
    }
  }
  // Roof rails leave corner entries for the high walkways and external ramp.
  for(const side of [-1,1]){
    add(side*12,0,.25,10,13.1,0xffffff,12);
    add(0,side*12,6,.25,13.1,0xffffff,12);
  }
  add(b.side*18,-1,12,4,6,0xffc330,5.7);
  add(b.side*15,27,18,4,12,0xffc330,11.7);
  add(b.side*8,20.5,4,17,12,0xffc330,11.7);
}
// The middle bridge leaves the entire street below open.
structures.push(cityBox(0,36,88,4,6,0xffc330,5.7));
for(const z of [34,38])structures.push(cityBox(0,z,80,.2,7.1,0xffffff,6));
for(const [x,z,width] of [[-48.5,45,11],[50,44,12]])structures.push(cityBox(x,z,width,4,6,0xffc330,5.7));
for(const x of [-44,44]){
  structures.push(cityBox(x,40.5,4,9,6,0xffc330,5.7));
  for(const side of [-1,1])structures.push(cityBox(x+side*2,41.5,.2,3,7.1,0xffffff,6));
}
for(const x of [-36,36])structures.push(cityBox(x,36,1.2,1.2,5.7,0x6d78a0));
for(const [x,width] of [[-37.5,35],[38,36]]){
  structures.push(cityBox(x,55.5,width,4,12,0xffc330,11.7));
  for(const z of [53.5,57.5])structures.push(cityBox(x,z,width,.2,13.1,0xffffff,12));
}
// Lift landings and guides are outside its swept platform volume.
for(const top of [6,12])structures.push(cityBox(68,31,4,2,top,0xe9edf1,top-.3));
for(const x of [65,71])structures.push(cityBox(x,25,.35,.35,14,0x6678ae));
export const CITY_BOXES=structures;

export const CITY_GARDENS=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,70],[115,65],[-30,112],[38,112]] as const;
export const CITY_LAMPS=[[-50,-64],[50,-64],[-38,36],[38,36],[-100,12],[105,-10],[-40,80],[42,80],[-16,-90],[16,-90]] as const;
export const CITY_PROPS:ArenaBox[]=[
  ...CITY_GARDENS.map(([x,z])=>cityBox(x,z,5,5,.8,0xf04b94)),
  ...[[-40,5],[40,3],[-105,72],[108,68]].flatMap(([x,z])=>[
    cityBox(x,z,4,1,.65,0xffc330),cityBox(x,z+.5,4,.2,1.3,0xffc330,.65),
  ]),
  ...CITY_LAMPS.map(([x,z])=>cityBox(x,z,.25,.25,4.6,0xd7e4f0)),
];
export const CITY_SPAWNS:[number,number][]=[[-132,-106],[-104,-122],[-148,-36],[-130,84],[-78,112],[-26,-116],[28,-122],[84,-106],[138,-82],[142,-18],[126,62],[82,112],[18,126],[-42,112],[-96,58],[-108,-42],[-36,-32],[34,34],[100,12],[-40,8]];
export const CITY_WAYPOINTS:[number,number][]=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]];
