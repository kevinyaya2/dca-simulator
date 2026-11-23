import { PerformanceMetrics } from '../../../shared/performanceMetrics';

// Opt-in, match-local overlay: ?chromaDiagnostics=1. No telemetry upload.
export class NetworkDiagnostics {
  private element?:HTMLPreElement;
  private elapsed=0;
  private combatMilliseconds=0;
  readonly metrics=new PerformanceMetrics(600);
  constructor(root:HTMLElement){
    if(new URLSearchParams(location.search).get('chromaDiagnostics')!=='1')return;
    this.element=document.createElement('pre');this.element.dataset.gameUi='diagnostics';
    this.element.setAttribute('aria-label','Network diagnostics');
    Object.assign(this.element.style,{position:'absolute',top:'55px',left:'8px',zIndex:'80',
      pointerEvents:'none',font:'11px monospace',padding:'8px',color:'#b9ffce',background:'#001b25dd',whiteSpace:'pre-wrap'});
    root.append(this.element);
  }
  record(name:string,value:number){if(this.element)this.metrics.record(name,value);}
  beginCombatFrame(){this.combatMilliseconds=0;}
  measure<T>(name:string,work:()=>T):T{
    if(!this.element)return work();
    const started=performance.now();
    try{return work();}finally{const elapsed=performance.now()-started;this.combatMilliseconds+=elapsed;this.record(name,elapsed);}
  }
  endCombatFrame(){this.record('combatCPU_ms',this.combatMilliseconds);}
  update(dt:number,values:{rtt:number;pending:number;camera:number;resets:number}){
    if(!this.element)return;
    this.elapsed+=dt;if(this.elapsed<.25)return;this.elapsed=0;
    const stats=this.metrics.summary();
    const format=(name:string)=>{const s=stats[name];return s?`${s.p50.toFixed(2)} / ${s.p95.toFixed(2)} / ${s.p99.toFixed(2)} / ${s.max.toFixed(2)}`:'—';};
    this.element.textContent=`Network diagnostics (P50/P95/P99/max)\nFrame ms: ${format('frame_ms')}\nSnapshot ms: ${format('snapshot_ms')}\nCorrection units: ${format('correction')}\nShot CPU ms: ${format('shotCPU_ms')}\nFlame CPU ms: ${format('flameCPU_ms')}\nAim CPU ms: ${format('aimCPU_ms')}\nCombat CPU ms: ${format('combatCPU_ms')}\nDamage to render ms: ${format('deathFeedback_ms')}\nRTT: ${values.rtt} ms | Pending: ${values.pending}\nCamera offset: ${values.camera.toFixed(3)} | Resets: ${values.resets}`;
  }
  dispose(){this.element?.remove();this.metrics.reset();}
}
