import { blocked, supportHeight } from './arena.js';
import { MALL_ENTRIES } from './underground.js';
import { LIFT } from './movingPlatforms.js';
import { FERRIS_WHEEL } from './ferrisWheel.js';
export type NavPoint={x:number;y:number;z:number};
type Node=NavPoint&{edges:number[]};
export function walkSegment(a:NavPoint,b:NavPoint){
  const steps=Math.ceil(Math.hypot(b.x-a.x,b.y-a.y,b.z-a.z)*2);
  for(let i=0;i<=steps;i++){
    const t=steps?i/steps:0,x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t,y=a.y+(b.y-a.y)*t;
    if(Math.abs(x-LIFT.x)<2.8&&Math.abs(z-LIFT.z)<2.8)return false;
    if(Math.abs(x-FERRIS_WHEEL.x)<FERRIS_WHEEL.radius+4&&Math.abs(z-FERRIS_WHEEL.z)<3.5)return false;
    if(blocked(x,z,.45,y+.35)||Math.abs(supportHeight(x,z,y+.35)-y)>.38)return false;
  }
  return true;
}
let graph:Node[]|undefined;
export function navigationGraph():Node[]{
  if(graph)return graph;
  const nodes:Node[]=[],grid=new Map<string,number>();
  const add=(x:number,y:number,z:number)=>{nodes.push({x,y,z,edges:[]});return nodes.length-1;};
  const link=(a:number,b:number)=>{if(walkSegment(nodes[a],nodes[b])){nodes[a].edges.push(b);nodes[b].edges.push(a);}};
  for(let x=-144;x<=144;x+=8)for(let z=-128;z<=128;z+=8){
    const p={x,y:0,z};if(walkSegment(p,p))grid.set(`${x},${z}`,add(x,0,z));
  }
  for(const [key,id]of grid){const [x,z]=key.split(',').map(Number);for(const [dx,dz]of [[8,0],[0,8],[8,8],[8,-8]]){const other=grid.get(`${x+dx},${z+dz}`);if(other!==undefined)link(id,other);}}
  const mallIds:number[]=[];
  for(const x of [-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const z of [-14,18])mallIds.push(add(x,-6,z));
  for(const x of [-88,-64,0,64,88])mallIds.push(add(x,-6,9));
  for(const a of mallIds)for(const b of mallIds)if(a<b&&Math.hypot(nodes[a].x-nodes[b].x,nodes[a].z-nodes[b].z)<=30)link(a,b);
  for(const e of MALL_ENTRIES){
    const sign=Math.sign(e.outer-e.inner),point=(value:number,y:number)=>e.axis==='z'?{x:0,y,z:value}:{x:value,y,z:9};
    let previous=-1,first=-1;
    for(let n=0;n<=14;n++){
      const t=Math.max(0,Math.min(1,(n-1)/12)),p=point(n===0?e.outer+sign:n===14?e.inner-sign:e.outer+(e.inner-e.outer)*t,-6*t);
      const id=add(p.x,p.y,p.z);if(previous>=0)link(previous,id);else first=id;previous=id;
    }
    for(const id of grid.values())if(Math.hypot(nodes[id].x-nodes[first].x,nodes[id].z-nodes[first].z)<13)link(first,id);
    for(const id of mallIds)if(Math.hypot(nodes[id].x-nodes[previous].x,nodes[id].z-nodes[previous].z)<20)link(previous,id);
  }
  graph=nodes;return nodes;
}
function closest(p:NavPoint,nodes:Node[]){
  const sorted=nodes.map((n,id)=>({id,d:Math.hypot(n.x-p.x,n.z-p.z)+Math.abs(n.y-p.y)*4})).sort((a,b)=>a.d-b.d);
  return sorted.find(({id,d})=>d<30&&walkSegment(p,nodes[id]))?.id;
}
export function navigationPath(from:NavPoint,to:NavPoint):NavPoint[]{
  const nodes=navigationGraph(),start=closest(from,nodes),goal=closest(to,nodes);
  if(start===undefined||goal===undefined)return [];
  const open=new Set([start]),cost=new Map([[start,0]]),previous=new Map<number,number>();
  while(open.size){
    let current=-1,best=Infinity;
    for(const id of open){const n=nodes[id],g=nodes[goal],score=cost.get(id)!+Math.hypot(n.x-g.x,n.y-g.y,n.z-g.z);if(score<best){current=id;best=score;}}
    if(current===goal){const path:number[]=[goal];while(previous.has(path[0]))path.unshift(previous.get(path[0])!);while(path.length>1&&walkSegment(from,nodes[path[1]]))path.shift();return [...path.map(id=>nodes[id]),...(walkSegment(nodes[goal],to)?[to]:[])];}
    open.delete(current);
    for(const next of nodes[current].edges){const a=nodes[current],b=nodes[next],nextCost=cost.get(current)!+Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);if(nextCost<(cost.get(next)??Infinity)){cost.set(next,nextCost);previous.set(next,current);open.add(next);}}
  }
  return [];
}
