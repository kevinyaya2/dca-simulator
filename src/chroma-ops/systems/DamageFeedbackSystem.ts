import * as THREE from 'three';
export class DamageFeedbackSystem{
  private flash=0;private directionTime=0;private dir='up';
  constructor(private el:HTMLElement){}
  damage(n:number,attacker:THREE.Vector3,player:THREE.Vector3,forward:THREE.Vector3){const to=attacker.clone().sub(player);to.y=0;to.normalize();forward.y=0;forward.normalize();const front=to.dot(forward),right=to.x*forward.z-to.z*forward.x;this.dir=Math.abs(front)>Math.abs(right)?(front>0?'up':'down'):(right>0?'right':'left');this.flash=Math.min(1,Math.max(.65,this.flash+n/18));this.directionTime=.8;this.el.classList.remove('is-hit');void this.el.offsetWidth;this.el.classList.add('is-hit');}
  update(dt:number,hp:number){this.flash=Math.max(0,this.flash-dt/0.45);this.directionTime=Math.max(0,this.directionTime-dt);const rotations:Record<string,string>={up:'0rad',right:'1.5708rad',down:'3.1416rad',left:'-1.5708rad'};this.el.style.setProperty('--damage-rotation',rotations[this.dir]);this.el.style.setProperty('--damage-flash',String(this.flash*.72));this.el.style.setProperty('--low-hp',String(hp<=30?.1+(30-hp)/180:0));this.el.style.setProperty('--damage-opacity',String(this.directionTime?Math.min(1,this.directionTime*2):0));if(!this.flash)this.el.classList.remove('is-hit');}
  dispose(){this.el.classList.remove('is-hit');}
}
