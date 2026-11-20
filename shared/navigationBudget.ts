export type NavigationStats={samples:number;nodes:number;routes:number;exhausted:boolean};
export class NavigationBudget {
  readonly stats:NavigationStats={samples:0,nodes:0,routes:0,exhausted:false};
  private deadline:number|undefined;
  constructor(private readonly now=()=>performance.now(),private readonly milliseconds=3,
    private readonly maxSamples=2048,private readonly maxNodes=512){}
  check(){
    if(this.stats.exhausted)return false;
    const time=this.now();
    this.deadline??=time+this.milliseconds;
    if(time>=this.deadline){this.stats.exhausted=true;return false;}
    return true;
  }
  sample(){
    if(!this.check())return false;
    if(this.stats.samples>=this.maxSamples){this.stats.exhausted=true;return false;}
    this.stats.samples++;return true;
  }
  node(){
    if(!this.check())return false;
    if(this.stats.nodes>=this.maxNodes){this.stats.exhausted=true;return false;}
    this.stats.nodes++;return true;
  }
  route(){
    if(!this.check()||this.stats.routes)return false;
    this.stats.routes++;return true;
  }
}
