import {
  DEFAULT_MOUSE_SENSITIVITY, MIN_MOUSE_SENSITIVITY, MAX_MOUSE_SENSITIVITY,
  MOUSE_SENSITIVITY_STEP, getMouseSensitivity, setMouseSensitivity, subscribeMouseSensitivity,
} from '../settings/MouseSensitivity';

let nextId = 0;
export class GameSettings {
  private shell: HTMLDivElement;
  private panel: HTMLElement;
  private slider: HTMLInputElement;
  private output: HTMLOutputElement;
  private trigger: HTMLButtonElement;
  private hint: HTMLElement;
  private previousFocus: HTMLElement | null = null;
  private unsubscribe: () => void;
  private open = false;
  private active = true;
  private coarse = matchMedia('(pointer:coarse)').matches || navigator.maxTouchPoints > 0;
  get isOpen() { return this.open; }

  constructor(private root: HTMLElement, private onOpen: () => void,
    private onClose: (requestLock: boolean) => void, multiplayer = false, private roomActions?:{code:string;isHost:boolean;onLeave:()=>void;onEnd:()=>void}) {
    const id = `co-settings-${++nextId}`;
    this.shell = document.createElement('div');
    this.shell.dataset.gameUi = '';
    this.shell.className = 'co-settings-shell';
    this.shell.innerHTML = `<button type="button" class="co-settings-trigger" aria-controls="${id}" aria-expanded="false">${this.coarse ? '設定' : '設定 · F2'}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${id}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${id}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${id}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${id}-range">視角靈敏度 <output for="${id}-range"></output></label>
          <input id="${id}-range" type="range" min="${MIN_MOUSE_SENSITIVITY}" max="${MAX_MOUSE_SENSITIVITY}" step="${MOUSE_SENSITIVITY_STEP}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${multiplayer ? '對戰仍在進行，你仍可能受到攻擊' : '單人遊戲已暫停'}</p>
          ${roomActions ? `<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${roomActions.isHost ? '<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>' : ''}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>` : ''}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse ? '點擊「繼續遊戲」返回戰場' : 'F2 / Esc 關閉 · 關閉後點擊場景繼續'}</p>
        </section>
      </div>`;
    const roomCode=this.shell.querySelector('[data-room-code]');if(roomCode&&roomActions)roomCode.textContent=roomActions.code;
    root.classList.add('co-has-settings');
    root.append(this.shell);
    this.panel = this.shell.querySelector('.co-settings-overlay')!;
    this.slider = this.shell.querySelector('input')!;
    this.output = this.shell.querySelector('output')!;
    this.trigger = this.shell.querySelector('.co-settings-trigger')!;
    this.hint = this.shell.querySelector('.co-lock-hint')!;
    this.shell.addEventListener('click', this.onClick);
    this.slider.addEventListener('input', this.onInput);
    window.addEventListener('keydown', this.onKey, true);
    document.addEventListener('focusin', this.onFocus);
    document.addEventListener('pointerlockchange', this.updateHint);
    document.addEventListener('pointerlockerror', this.updateHint);
    this.unsubscribe = subscribeMouseSensitivity(this.render);
    this.render();
    this.updateHint();
  }
  private render = () => {
    const value = getMouseSensitivity();
    this.slider.value = String(value);
    this.slider.setAttribute('aria-valuetext', `${value.toFixed(1)} 倍`);
    this.output.value = `${value.toFixed(1)} 倍`;
  };
  private onInput = () => setMouseSensitivity(Number(this.slider.value));
  private onClick = (event: MouseEvent) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (target.closest('.co-settings-trigger')) this.show();
    else if (target.closest('[data-reset]')) setMouseSensitivity(DEFAULT_MOUSE_SENSITIVITY);
    else if (target.closest('[data-leave]')) this.roomActions?.onLeave();
    else if (target.closest('[data-end]')) { this.endConfirmation(true); }
    else if (target.closest('[data-confirm-end]')) { this.endConfirmation(false);this.roomActions?.onEnd(); }
    else if (target.closest('[data-cancel-end]')) { this.endConfirmation(false); }
    else if (target.closest('[data-invite]')) {
      const url=new URL(location.href);url.searchParams.set('room',this.roomActions?.code??'');
      navigator.clipboard?.writeText(url.toString()).then(()=>this.inviteStatus('邀請連結已複製')).catch(()=>this.inviteStatus('無法複製，請分享房間碼'));
    }
    else if (target.closest('[data-continue]')) this.close(!this.coarse);
  };
  private inviteStatus(message:string){const status=this.shell.querySelector('[data-room-status]');if(status)status.textContent=message;}
  private endConfirmation(show:boolean){const confirmation=this.shell.querySelector<HTMLElement>('[data-end-confirmation]');if(confirmation){confirmation.hidden=!show;if(show)confirmation.querySelector<HTMLButtonElement>('[data-cancel-end]')?.focus();}}
  private onFocus = (event: FocusEvent) => {
    if (this.open && !this.panel.contains(event.target as Node)) this.slider.focus();
  };
  private onKey = (event: KeyboardEvent) => {
    if (!this.active) return;
    const editable = event.target instanceof HTMLElement && event.target.closest('input, textarea, select, [contenteditable]');
    if (event.key === 'F2' && (this.open || !editable)) {
      event.preventDefault(); event.stopImmediatePropagation();
      if (!event.repeat) { if (this.open) this.close(false); else this.show(); }
      return;
    }
    if (!this.open) return;
    if (event.key === 'Escape') {
      event.preventDefault(); event.stopImmediatePropagation(); this.close(false);
    } else if (event.key === 'Tab') {
      const controls = Array.from(this.panel.querySelectorAll<HTMLElement>('input, button')).filter(control=>!control.closest('[hidden]'));
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  };
  show() {
    if (!this.active || this.open) return;
    this.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.open = true;
    this.panel.hidden = false;
    this.trigger.setAttribute('aria-expanded', 'true');
    this.onOpen();
    if (document.pointerLockElement === this.root) document.exitPointerLock?.();
    this.slider.focus();
    this.updateHint();
  }
  close(requestLock = false, notify = true) {
    if (!this.open) return;
    this.open = false;
    this.endConfirmation(false);
    this.panel.hidden = true;
    this.trigger.setAttribute('aria-expanded', 'false');
    if (notify) {
      (this.previousFocus?.isConnected ? this.previousFocus : this.trigger).focus({ preventScroll: true });
      this.onClose(requestLock);
    }
    this.updateHint();
  }
  setActive(active: boolean) {
    this.active = active;
    if (!active) this.close(false, false);
    this.shell.hidden = !active;
    this.updateHint();
  }
  private updateHint = () => {
    if ((!this.active || this.open) && document.pointerLockElement === this.root) document.exitPointerLock?.();
    this.hint.hidden = this.coarse || !this.active || this.open || document.pointerLockElement === this.root;
  };
  dispose() {
    this.active = false;
    this.close(false, false);
    this.unsubscribe();
    window.removeEventListener('keydown', this.onKey, true);
    document.removeEventListener('focusin', this.onFocus);
    document.removeEventListener('pointerlockchange', this.updateHint);
    document.removeEventListener('pointerlockerror', this.updateHint);
    this.shell.removeEventListener('click', this.onClick);
    this.slider.removeEventListener('input', this.onInput);
    this.root.classList.remove('co-has-settings');
    this.shell.remove();
  }
}
