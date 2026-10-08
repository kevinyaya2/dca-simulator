import { InputManager } from './InputManager';
import { getMouseSensitivity } from '../settings/MouseSensitivity';

export class DesktopInput {
  private keys = new Set<string>();
  private enabled = true;
  private get canPlay() { return this.enabled && document.pointerLockElement === this.el; }
  private reset = () => { this.keys.clear(); this.input.reset(); };
  private onLockChange = () => {
    this.reset();
    if (this.canPlay) this.el.focus({ preventScroll: true });
  };
  private onKey = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (event.type === 'keyup') { this.keys.delete(key); return; }
    if (!this.canPlay || (event.target instanceof HTMLElement && event.target.closest('input, button, textarea, select, [contenteditable]'))) return;
    if (!['w', 'a', 's', 'd', ' ', 'r', 'q', '1', '2', '3', '4', '5', '6'].includes(key)) return;
    event.preventDefault();
    const firstPress=!event.repeat&&!this.keys.has(key);
    this.keys.add(key);
    if (key === ' ' && firstPress) this.input.set({ jump: true });
    if (key === 'r') this.input.set({ reload: true });
    if (/^[1-6]$/.test(key)) this.input.set({ switchWeapon: +key });
  };
  private onMove = (event: MouseEvent) => {
    if (this.canPlay) {
      const sensitivity = getMouseSensitivity();
      this.input.addLook(event.movementX * sensitivity, event.movementY * sensitivity);
    }
  };
  private onDown = (event: MouseEvent) => {
    if (event.button === 0 && this.canPlay && !(event.target instanceof HTMLElement && event.target.closest('[data-game-ui], .co-armory, button, input'))) {
      this.input.set({ shoot: true });
    }
  };
  private onUp = (event: MouseEvent) => { if (event.button === 0) this.input.set({ shoot: false }); };
  constructor(private el: HTMLElement, private input: InputManager) {
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('keyup', this.onKey);
    document.addEventListener('mousemove', this.onMove);
    el.tabIndex = -1;
    document.addEventListener('pointerlockchange', this.onLockChange);
    window.addEventListener('blur', this.reset);
    el.addEventListener('mousedown', this.onDown);
    window.addEventListener('mouseup', this.onUp);
  }
  setEnabled(enabled: boolean) { this.enabled = enabled; this.reset(); }
  update() {
    if (!this.canPlay) { this.reset(); return; }
    this.input.set({
      moveX: (this.keys.has('d') ? 1 : 0) - (this.keys.has('a') ? 1 : 0),
      moveY: (this.keys.has('w') ? 1 : 0) - (this.keys.has('s') ? 1 : 0),
    });
  }
  dispose() {
    this.reset();
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('keyup', this.onKey);
    document.removeEventListener('mousemove', this.onMove);
    document.removeEventListener('pointerlockchange', this.onLockChange);
    window.removeEventListener('blur', this.reset);
    this.el.removeEventListener('mousedown', this.onDown);
    window.removeEventListener('mouseup', this.onUp);
  }
}
