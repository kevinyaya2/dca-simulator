import type { ArenaBox } from './arena.js';
import { cityBox } from './city.js';

export const MALL={minX:-90,maxX:90,minZ:-22,maxZ:26,floor:-6} as const;
export type Rect={minX:number;maxX:number;minZ:number;maxZ:number};
export const MALL_ENTRIES=[
  {name:'NORTH',axis:'z',outer:-46,inner:-22,cross:0,kind:'ramp'},
  {name:'SOUTH',axis:'z',outer:50,inner:26,cross:0,kind:'ramp'},
  {name:'WEST',axis:'x',outer:-114,inner:-90,cross:9,kind:'stairs'},
  {name:'EAST',axis:'x',outer:114,inner:90,cross:9,kind:'stairs'},
] as const;
export const ENTRY_HOLES:Rect[]=MALL_ENTRIES.map(e=>e.axis==='z'
  ?{minX:-3,maxX:3,minZ:Math.min(e.outer,e.inner),maxZ:Math.max(e.outer,e.inner)}
  :{minX:Math.min(e.outer,e.inner),maxX:Math.max(e.outer,e.inner),minZ:6,maxZ:12});
export const inside=(x:number,z:number,r:Rect,padding=0)=>x>=r.minX-padding&&x<=r.maxX+padding&&z>=r.minZ-padding&&z<=r.maxZ+padding;
export function undergroundHeight(x:number,z:number):number|null{
  for(let i=0;i<MALL_ENTRIES.length;i++)if(inside(x,z,ENTRY_HOLES[i])){
    const e=MALL_ENTRIES[i],t=((e.axis==='z'?z:x)-e.outer)/(e.inner-e.outer);
    return e.kind==='ramp'?-6*t:-6;
  }
  return inside(x,z,MALL)?-6:null;
}
// Subtract entrance openings from both collision slabs and decorative road tiles.
export function cutEntrances<T extends Rect>(source:T,holes:readonly Rect[]=ENTRY_HOLES):T[]{
  let pieces=[source];
  for(const hole of holes)pieces=pieces.flatMap(r=>{
    const x0=Math.max(r.minX,hole.minX),x1=Math.min(r.maxX,hole.maxX),z0=Math.max(r.minZ,hole.minZ),z1=Math.min(r.maxZ,hole.maxZ);
    if(x0>=x1||z0>=z1)return [r];
    return [
      {...r,maxX:x0},{...r,minX:x1},
      {...r,minX:x0,maxX:x1,maxZ:z0},{...r,minX:x0,maxX:x1,minZ:z1},
    ].filter(p=>p.maxX-p.minX>1e-6&&p.maxZ-p.minZ>1e-6);
  });
  return pieces;
}

const boxes:ArenaBox[]=[
  cityBox(0,2,180,48,-6,0x839baa,-6.4),
  cityBox(0,2,180,48,0,0xc9d9df,-.35),
];
// Perimeter walls leave the four six-metre entrances open.
for(const z of [-22,26])for(const x of [-46.5,46.5])boxes.push(cityBox(x,z,87,.4,0,0x506287,-6));
for(const x of [-90,90]){
  boxes.push(cityBox(x,-8, .4,28,0,0x506287,-6),cityBox(x,19,.4,14,0,0x506287,-6));
}
for(const e of MALL_ENTRIES){
  const middle=(e.outer+e.inner)/2;
  for(const side of [-1,1])boxes.push(e.axis==='z'
    ?cityBox(side*3.2,middle,.4,24,1.1,0x86d9e7,-6)
    :cityBox(middle,e.cross+side*3.2,24,.4,1.1,0x86d9e7,-6));
  if(e.kind==='stairs')for(let n=0;n<24;n++){
    const x=e.outer+Math.sign(e.inner-e.outer)*(n+.5);
    boxes.push(cityBox(x,e.cross,1,6,-n*.25,0xffbd53,-6.3));
  }
}
export const MALL_SHOPS=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((x,i)=>({x,z:2,width:9,depth:12,color:[0xf46baf,0x59d9c1,0xffc45a,0x9d8cef][i%4],name:['ARCADE','CAFE','SPORT','MUSIC','BOOKS','TECH','TOYS','BAKERY'][i]}));
for(const s of MALL_SHOPS){
  boxes.push(cityBox(s.x-4.5,2,.25,12,-.35,s.color,-6));
  for(const z of [-4,8]){
    for(const side of [-1,1])boxes.push(cityBox(s.x+side*3.25,z,2.5,.25,-.35,s.color,-6));
    boxes.push(cityBox(s.x,z,4,.25,-.35,s.color,-2.5));
  }
  // Low counter is physical cover; glowing trims and signs are decorative.
  boxes.push(cityBox(s.x,2,3,1,-5,0x597181,-6));
}
for(const x of [-20,56])boxes.push(cityBox(x,2,.25,12,-.35,0x9d8cef,-6));
export const MALL_BOXES=boxes;
export const MALL_PICKUP_POINTS=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}];
