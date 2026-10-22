import type { ArenaBox } from './arena.js';
import { cityBox } from './city.js';

// A bespoke building, deliberately separate from the square city templates.
export const GLASSHOUSE = { x:58, z:104, width:56, depth:24, floors:[0,6,12], roof:18, name:'CHROMA LAB' } as const;
const structure:ArenaBox[]=[],glass:ArenaBox[]=[],details:ArenaBox[]=[];
const white=0xe9edf1,steel=0x607987,trim=0x99d9df;
const box=(target:ArenaBox[],x:number,z:number,w:number,d:number,top:number,bottom:number,color=white)=>
  target.push(cityBox(x,z,w,d,top,color,bottom));

// Upper levels project beyond the recessed ground-floor frontage.
for(const top of [6,12,18])box(structure,58,104,56.8,24.8,top,top-.3);
box(structure,58,103,55.6,21.6,.02,0);
for(const base of GLASSHOUSE.floors){
  for(const z of [92,base===0?114:116]){
    // Ground-level four-metre doorway, with a solid lintel and glazed side bays.
    for(const x of [43,73]){
      box(glass,x,z,26,.18,base+5.7,base+.4,0xc9f1ed);
      box(structure,x,z,26,.35,base+.4,base,white);
    }
    if(base>0){
      box(glass,58,z,4,.18,base+5.7,base+.4,0xc9f1ed);
      box(structure,58,z,4,.35,base+.4,base,white);
    }
    box(structure,58,z,56,.35,base+6,base+(base===0?4.2:5.7));
    for(let x=30;x<=86;x+=4)if(base>0||x!==58)box(details,x,z,.09,.26,base+5.7,base+.4,steel);
    for(const y of [base+.4,base+3,base+5.7])for(const x of [43,73])box(details,x,z,26,.26,y+.05,y-.05,trim);
    if(base>0)for(const y of [base+.4,base+3,base+5.7])box(details,58,z,4,.26,y+.05,y-.05,trim);
  }
  // Western stair entrance is at the northern end of every floor.
  box(structure,30,base===0?105.25:106.25,.4,base===0?17.5:19.5,base+6,base);
  box(structure,30,94.25,.4,4.5,base+6,base+4.2);
  const centerZ=base===0?103:104,depth=base===0?22:24;
  box(glass,86,centerZ,.18,depth,base+5.7,base+.4,0xc9f1ed);
  box(structure,86,centerZ,.4,depth,base+.4,base);
  box(structure,86,centerZ,.4,depth,base+6,base+5.7);
  for(const z of [92,96,100,104,108,112,base===0?114:116])box(details,86,z,.26,.09,base+5.7,base+.4,steel);
  // Short service core and low cover leave the central through-route open.
  box(structure,38,105,8,.4,base+3.3,base,steel);
  box(structure,34,103,.4,4,base+3.3,base,steel);
  box(structure,72,102,6,1.2,base+1.1,base,white);
}

// Three stacked return stairs: 0 -> 6 -> 12 -> roof. Each tread rises .25m.
for(const base of GLASSHOUSE.floors){
  for(let n=0;n<12;n++){
    const rise=(n+1)*.25;
    box(structure,23.5,94.5+(n+.5)*.75,4,.75,base+rise,base,white);
    box(structure,27.5,103.5-(n+.5)*.75,4,.75,base+3+rise,base+3,white);
    for(const [x,z,y] of [[21.45,94.5+(n+.5)*.75,base+rise],[29.55,103.5-(n+.5)*.75,base+3+rise]]){
      box(structure,x,z,.15,.75,y+1.1,y+.95,trim);
      box(structure,x,z,.15,.12,y+1.1,y,steel);
    }
  }
  box(structure,25.5,104.5,8,2,base+3,base+2.7);
  box(structure,25.5,93.5,8,2,base+6,base+5.7);
  box(structure,29.75,94.25,.5,4.5,base+6,base+5.7);
  box(structure,25.5,105.5,8,.15,base+4.1,base+3,trim);
  box(structure,25.5,92.5,8,.15,base+7.1,base+6,trim);
  for(const x of [21.45,29.55])box(structure,x,104.5,.15,2,base+4.1,base+3,trim);
  box(structure,21.45,93.5,.15,2,base+7.1,base+6,trim);
}
// Open ground approach and full-height roof access beside the last landing.
box(structure,25.5,93.5,8,2,0,-.3);
for(const x of [30,86])box(structure,x,106.25,.2,19.5,19.1,18,steel);
for(const z of [92,116])box(structure,58,z,56,.2,19.1,18,steel);
// Raised rooftop screen, set back so the perimeter remains walkable.
box(structure,58,98,40,.3,21,18,white);
for(const x of [38,78])box(structure,x,102,.3,8,21,18,white);
for(let x=38;x<=78;x+=2)box(details,x,97.8,.1,.1,21,18,steel);
// Entrance canopy, projecting upper cornice, and vertical service fins.
box(structure,58,117,56,6,4.7,4.45,trim);
box(structure,58,116.7,57,.6,18.25,17.85,white);
for(const x of [32,40,48,68,76,84])box(details,x,116.25,.22,.5,4.4,0,steel);

export const GLASSHOUSE_STRUCTURE:readonly ArenaBox[]=structure;
export const GLASSHOUSE_GLASS:readonly ArenaBox[]=glass;
export const GLASSHOUSE_DETAILS:readonly ArenaBox[]=details;
export const GLASSHOUSE_BOXES:readonly ArenaBox[]=[...structure,...glass];
