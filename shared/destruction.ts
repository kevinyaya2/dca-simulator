import type { ArenaBox } from './arena.js';

export function breakableSections(box:ArenaBox,key:string):ArenaBox[]{
  if(box.maxY<=.05||box.minY<0)return [box];
  const width=box.maxX-box.minX,depth=box.maxZ-box.minZ,height=box.maxY-box.minY;
  const xs=Math.ceil(width/4),zs=Math.ceil(depth/4),ys=Math.ceil(height/4);
  const parts:ArenaBox[]=[];
  for(let i=0;i<xs;i++)for(let j=0;j<zs;j++)for(let k=0;k<ys;k++){
    parts.push({...box,breakKey:`${key}:${i}:${j}:${k}`,
      minX:box.minX+width*i/xs,maxX:box.minX+width*(i+1)/xs,
      minY:box.minY+height*k/ys,maxY:box.minY+height*(k+1)/ys,
      minZ:box.minZ+depth*j/zs,maxZ:box.minZ+depth*(j+1)/zs});
  }
  return parts;
}

export function intactBox(box:ArenaBox,destroyed:ReadonlySet<string>|undefined){
  return !box.breakKey||!destroyed?.has(box.breakKey);
}
