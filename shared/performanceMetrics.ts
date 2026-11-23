export class PerformanceMetrics {
  private metrics=new Map<string,{values:number[];cursor:number;count:number;sum:number;max:number}>();
  constructor(private readonly capacity=600){}
  record(name:string,value:number){
    if(!Number.isFinite(value)||value<0)return;
    let metric=this.metrics.get(name);
    if(!metric){metric={values:[],cursor:0,count:0,sum:0,max:0};this.metrics.set(name,metric);}
    if(metric.values.length<this.capacity)metric.values.push(value);
    else {metric.values[metric.cursor]=value;metric.cursor=(metric.cursor+1)%this.capacity;}
    metric.count++;metric.sum+=value;metric.max=Math.max(metric.max,value);
  }
  summary(){
    return Object.fromEntries([...this.metrics].map(([name,metric])=>{
      const sorted=metric.values.slice().sort((a,b)=>a-b);
      const percentile=(p:number)=>sorted[Math.max(0,Math.ceil(sorted.length*p)-1)]??0;
      return [name,{count:metric.count,sum:metric.sum,mean:metric.sum/metric.count,p50:percentile(.5),p95:percentile(.95),p99:percentile(.99),max:metric.max,samples:sorted.length}];
    }));
  }
  reset(){this.metrics.clear();}
}
