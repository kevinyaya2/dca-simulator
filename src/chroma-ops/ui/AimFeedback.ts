import type { AimState } from '../../../shared/aim';

export class AimFeedback {
  private label=document.createElement('span');
  private state='';
  private reset=()=>this.update('neutral',false);
  constructor(private root:HTMLElement){this.label.className='co-aim-feedback';this.label.hidden=true;root.append(this.label);root.addEventListener('combat:reset',this.reset);root.addEventListener('armory:open',this.reset);}
  update(state:AimState,visible:boolean){
    const next=visible&&(state==='in-range'||state==='out-of-range')?state:'neutral';
    if(next===this.state)return;
    this.state=next;this.root.dataset.aimState=next;
    this.label.textContent=next==='in-range'?'射程內':next==='out-of-range'?'超出射程':'';
    this.label.hidden=next==='neutral';
  }
  dispose(){this.root.removeEventListener('combat:reset',this.reset);this.root.removeEventListener('armory:open',this.reset);delete this.root.dataset.aimState;this.label.remove();}
}
