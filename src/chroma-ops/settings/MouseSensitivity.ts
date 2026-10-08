export const DEFAULT_MOUSE_SENSITIVITY = 2;
export const MIN_MOUSE_SENSITIVITY = 0.5;
export const MAX_MOUSE_SENSITIVITY = 4;
export const MOUSE_SENSITIVITY_STEP = 0.1;
export const MOUSE_SENSITIVITY_KEY = 'chroma-mouse-sensitivity';

function normalize(value: number) {
  if (!Number.isFinite(value) || value < MIN_MOUSE_SENSITIVITY || value > MAX_MOUSE_SENSITIVITY) {
    return DEFAULT_MOUSE_SENSITIVITY;
  }
  return Math.round(value * 10) / 10;
}

function load() {
  try {
    const stored = localStorage.getItem(MOUSE_SENSITIVITY_KEY);
    return stored === null || stored.trim() === '' ? DEFAULT_MOUSE_SENSITIVITY : normalize(Number(stored));
  } catch {
    return DEFAULT_MOUSE_SENSITIVITY;
  }
}

let sensitivity = load();
const listeners = new Set<() => void>();
export const getMouseSensitivity = () => sensitivity;
export function setMouseSensitivity(value: number) {
  sensitivity = normalize(value);
  try {
    localStorage.setItem(MOUSE_SENSITIVITY_KEY, String(sensitivity));
  } catch {
    // Keep the in-memory preference even when browser storage is unavailable.
  }
  listeners.forEach(listener => listener());
}
export function subscribeMouseSensitivity(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}
