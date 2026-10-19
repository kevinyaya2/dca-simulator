import * as T from 'three';
import { Bot } from './Bot';
import { Player } from '../player/Player';
import { CollisionSystem } from '../systems/CollisionSystem';
import { navigationPath, navigationGraph, type NavPoint } from '../../../shared/navigation';
import { stepPlayer, PLAYER_MOVE_SPEED } from '../../../shared/arena';
type Route={path:NavPoint[];remaining:number;goal:NavPoint;velocityY:number;last:T.Vector3};
export class BotAI{
  private routes=new Map<string,Route>();
  canSee(bot:Bot,player:Player,c:CollisionSystem,max=38){return bot.alive&&player.alive&&bot.position.distanceTo(player.position)<max&&!c.rayBlocked(bot.position.clone().add(new T.Vector3(0,1.3,0)),player.position);}
  update(bot:Bot,p:Player,dt:number,c:CollisionSystem,_waypoints:[number,number][],canShoot:boolean,onShoot:(hit:boolean)=>void){
    if(!bot.alive||!p.alive)return;bot.cooldown-=dt;
    const visible=this.canSee(bot,p,c,55),playerDist=bot.position.distanceTo(p.position),from={x:bot.position.x,y:bot.position.y,z:bot.position.z};
    let route=this.routes.get(bot.id);
    if(route&&route.last.distanceTo(bot.position)>5)route=undefined;
    if(!route){route={path:[],remaining:0,goal:from,velocityY:0,last:bot.position.clone()};this.routes.set(bot.id,route);}
    route.remaining-=dt;
    const target={x:p.position.x,y:p.position.y-1.65,z:p.position.z};
    if(target.y>1)target.y=0;
    if(route.remaining<=0){
      const chase=visible||target.y< -2||from.y< -2;
      if(chase)route.goal=target;
      else if(!route.path.length){const nodes=navigationGraph().filter(n=>n.y===0);route.goal=nodes[Math.floor(Math.random()*nodes.length)];}
      route.path=navigationPath(from,route.goal);route.remaining=.75;
    }
    while(route.path.length&&Math.hypot(route.path[0].x-from.x,route.path[0].z-from.z)<.25&&Math.abs(route.path[0].y-from.y)<.4)route.path.shift();
    const next=route.path[0];let dx=0,dz=0;
    if(next){dx=next.x-from.x;dz=next.z-from.z;}
    const duration=next?Math.min(dt,Math.hypot(dx,dz)/3.2):dt;
    const state={...from,y:from.y+1.65,yaw:0,pitch:0,velocityY:route.velocityY,jumpsUsed:0,alive:true};
    stepPlayer(state,{moveX:dx,moveY:-dz,lookX:0,lookY:0,jump:false},duration,{boxes:c.boxes,heightAt:(x,z)=>c.groundHeight(x,z)},3.2/PLAYER_MOVE_SPEED);
    bot.position.set(state.x,state.y-1.65,state.z);route.velocityY=state.velocityY;route.last.copy(bot.position);bot.group.position.copy(bot.position);
    if(dx||dz)bot.group.rotation.y=Math.atan2(-dx,-dz);
    if(canShoot&&playerDist<38&&visible&&bot.cooldown<=0){bot.cooldown=1.5+Math.random()*.8;onShoot(Math.random()<Math.max(.18,.35-Math.max(0,playerDist-12)*.0065));}
  }
}
