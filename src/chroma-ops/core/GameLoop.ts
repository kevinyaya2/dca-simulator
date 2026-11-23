export class GameLoop {
  private id=0;private last=0;private running=false;
  constructor(private update:(dt:number,elapsed:number)=>void){}
  start(){if(this.running)return;this.running=true;this.last=0;const tick=(time:number)=>{if(!this.running)return;const elapsed=this.last?Math.max(0,(time-this.last)/1000):0;const dt=Math.min(.05,elapsed);this.last=time;this.update(dt,elapsed);if(this.running)this.id=requestAnimationFrame(tick);};this.id=requestAnimationFrame(tick);}
  stop(){this.running=false;cancelAnimationFrame(this.id);this.id=0;this.last=0;}
}
