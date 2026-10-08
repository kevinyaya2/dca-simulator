import { useId, useSyncExternalStore } from 'react';
import {
  DEFAULT_MOUSE_SENSITIVITY, MIN_MOUSE_SENSITIVITY, MAX_MOUSE_SENSITIVITY,
  MOUSE_SENSITIVITY_STEP, getMouseSensitivity, setMouseSensitivity, subscribeMouseSensitivity,
} from '../settings/MouseSensitivity';
import './GameSettings.css';

export default function MouseSensitivityControl() {
  const id = useId();
  const value = useSyncExternalStore(subscribeMouseSensitivity, getMouseSensitivity);
  return <section className="co-sensitivity" aria-label="視角設定">
    <label htmlFor={id}>視角靈敏度 <output htmlFor={id}>{value.toFixed(1)} 倍</output></label>
    <input id={id} type="range" min={MIN_MOUSE_SENSITIVITY} max={MAX_MOUSE_SENSITIVITY}
      step={MOUSE_SENSITIVITY_STEP} value={value} aria-valuetext={`${value.toFixed(1)} 倍`}
      onChange={event => setMouseSensitivity(Number(event.target.value))} />
    <p>滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。</p>
    <button type="button" onClick={() => setMouseSensitivity(DEFAULT_MOUSE_SENSITIVITY)}>恢復預設（2 倍）</button>
  </section>;
}
