export type InputState = { moveX:number; moveY:number; lookX:number; lookY:number; shoot:boolean; jump:boolean; reload:boolean; switchWeapon:number; armory:boolean; weaponMove:number };
export const emptyInput = (): InputState => ({ moveX:0, moveY:0, lookX:0, lookY:0, shoot:false, jump:false, reload:false, switchWeapon:0,armory:false,weaponMove:0 });
export class InputManager {
  private state = emptyInput();
  set(p: Partial<InputState>) { Object.assign(this.state, p); }
  addLook(x:number,y:number) { this.state.lookX += x; this.state.lookY += y; }
  getState():InputState { const s={...this.state}; this.state.lookX=0; this.state.lookY=0; this.state.jump=false; this.state.reload=false; this.state.switchWeapon=0;this.state.armory=false;this.state.weaponMove=0; return s; }
  reset() { this.state=emptyInput(); }
}
