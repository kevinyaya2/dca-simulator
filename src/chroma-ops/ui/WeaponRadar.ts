import { WEAPON_IDS, WEAPON_SPECS, type PickupWeaponId, type WeaponId } from '../../../shared/weapons';
import { projectRadarPoint } from './WardenRadar';

type RadarPickup={id:PickupWeaponId;x:number;y:number;z:number;available:boolean};
const abbreviations:Record<PickupWeaponId,string>={ar:'AR',smg:'SMG',flame:'FL',ice:'ICE',shotgun:'SG',rocket:'RPG',sniper:'SR'};

export function drawWeaponRadar(ctx:CanvasRenderingContext2D,pickups:readonly RadarPickup[],owned:ReadonlySet<WeaponId>,
  player:{x:number;y:number;z:number;yaw:number},cx:number,cy:number,radius:number,height:number){
  const feet=player.y-1.65,cos=Math.cos(player.yaw),sin=Math.sin(player.yaw);
  ctx.save();
  ctx.font='800 9px Arial, sans-serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  const occupied:{x:number;y:number}[]=[];
  for(const pickup of pickups){
    if(!pickup.available||owned.has(pickup.id))continue;
    const projected=projectRadarPoint(pickup.x-player.x,pickup.z-player.z,cos,sin,radius);
    const angle=Math.atan2(projected.y,projected.x),distance=Math.hypot(projected.x,projected.y);
    const candidates=[0,.42,-.42,.84,-.84,1.26,-1.26];
    let x=cx+projected.x,y=cy+projected.y;
    for(const offset of candidates){
      const nextX=cx+Math.cos(angle+offset)*distance,nextY=cy+Math.sin(angle+offset)*distance;
      if(occupied.some(label=>Math.abs(label.x-nextX)<25&&Math.abs(label.y-nextY)<11))continue;
      x=nextX;y=nextY;break;
    }
    occupied.push({x,y});
    const color='#'+WEAPON_SPECS[pickup.id].color.toString(16).padStart(6,'0');
    const floor=pickup.y-feet;
    const glyph=abbreviations[pickup.id]+(floor>2.5?'↑':floor< -2.5?'↓':'');
    const width=ctx.measureText(glyph).width+7;
    ctx.fillStyle='#10162c';ctx.strokeStyle=color;ctx.lineWidth=1;
    ctx.fillRect(x-width/2,y-5.5,width,11);ctx.strokeRect(x-width/2,y-5.5,width,11);
    ctx.fillStyle=color;ctx.fillText(glyph,x,y+.5);
  }
  ctx.fillStyle='#ffe68a';
  ctx.fillText(`掃描 ${WEAPON_IDS.filter(id=>owned.has(id)).length} / ${WEAPON_IDS.length}`,cx,height-8);
  ctx.restore();
}

export function drawSoloWeaponRadar(canvas:HTMLCanvasElement,pickups:readonly RadarPickup[],owned:ReadonlySet<WeaponId>,
  player:{x:number;y:number;z:number;yaw:number}){
  const {width,height}=canvas.getBoundingClientRect();
  if(!width||!height)return;
  const ratio=Math.min(window.devicePixelRatio||1,1.5);
  const pixelWidth=Math.round(width*ratio),pixelHeight=Math.round(height*ratio);
  if(canvas.width!==pixelWidth||canvas.height!==pixelHeight){canvas.width=pixelWidth;canvas.height=pixelHeight;}
  const ctx=canvas.getContext('2d')!,cx=width/2,cy=height/2,radius=Math.min(width,height)*.34;
  ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,width,height);
  ctx.strokeStyle='#fff4';ctx.lineWidth=1;
  ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='#dfffff';ctx.font='800 9px Arial, sans-serif';
  ctx.fillText('光譜掃描儀',8,14);
  drawWeaponRadar(ctx,pickups,owned,player,cx,cy,radius,height);
  ctx.beginPath();ctx.moveTo(cx,cy-6);ctx.lineTo(cx+4,cy+5);ctx.lineTo(cx,cy+3);ctx.lineTo(cx-4,cy+5);ctx.closePath();ctx.fill();
}
