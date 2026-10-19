export type InputState = { moveX:number; moveY:number; lookX:number; lookY:number; shoot:boolean; jump:boolean; reload:boolean; switchWeapon:number; sprint?:boolean; aim?:boolean };
export const emptyInput = (): InputState => ({ moveX:0, moveY:0, lookX:0, lookY:0, shoot:false, jump:false, reload:false, switchWeapon:0, sprint:false, aim:false });
export class InputManager {
  private state = emptyInput();
  constructor(private onReset?:()=>void){}
  set(p: Partial<InputState>) {
    Object.assign(this.state, p);
    if(this.state.sprint || p.reload || p.switchWeapon) this.state.aim=false;
  }
  addLook(x:number,y:number) { this.state.lookX += x; this.state.lookY += y; }
  getState():InputState { const s={...this.state}; this.state.lookX=0; this.state.lookY=0; this.state.jump=false; this.state.reload=false; this.state.switchWeapon=0; return s; }
  get aiming(){return !!this.state.aim;}
  get sprinting(){return !!this.state.sprint;}
  reset() {
    const changed=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;
    this.state=emptyInput();
    if(changed)this.onReset?.();
  }
}
