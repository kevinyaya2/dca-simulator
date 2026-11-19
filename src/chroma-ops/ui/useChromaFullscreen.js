import { useCallback, useEffect, useRef, useState } from 'react';

const isStandalone = () => navigator.standalone === true ||
  matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches;

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

function exitIfOwned(target) {
  if (!target || fullscreenElement() !== target) return;
  try {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    exit?.call(document)?.catch(() => {});
  } catch {
    // The browser can exit independently, including when the tab is hidden.
  }
}

export function useChromaFullscreen() {
  const surface = useRef(null);
  const attachSurface = useCallback(node => { surface.current = node; }, []);
  const attempted = useRef(false);
  const pending = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [supported] = useState(() => !isStandalone() &&
    Boolean(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen) &&
    (document.fullscreenEnabled ?? document.webkitFullscreenEnabled) !== false);
  const [showInstall] = useState(() => /iPhone|iPod/.test(navigator.userAgent) && !isStandalone());

  const enter = useCallback(() => {
    const target = surface.current;
    if (!target || pending.current || fullscreenElement() || isStandalone()) return;
    const request = target.requestFullscreen || target.webkitRequestFullscreen;
    if (!request || (document.fullscreenEnabled ?? document.webkitFullscreenEnabled) === false) return;
    attempted.current = true;
    const attempt = { cancelled: false };
    pending.current = attempt;
    const finish = () => {
      if (pending.current === attempt) pending.current = null;
      if (attempt.cancelled && !pending.current) exitIfOwned(target);
    };
    try {
      const result = target.requestFullscreen
        ? target.requestFullscreen({ navigationUI: 'hide' })
        : target.webkitRequestFullscreen();
      Promise.resolve(result).then(finish, finish);
    } catch {
      finish();
    }
  }, []);

  const exit = useCallback(() => {
    if (pending.current) {
      pending.current.cancelled = true;
      pending.current = null;
    }
    attempted.current = false;
    exitIfOwned(surface.current);
  }, []);

  const enterOnFirstTouch = useCallback(event => {
    if (event.isTrusted && event.pointerType === 'touch' && !attempted.current) enter();
  }, [enter]);

  useEffect(() => {
    const target = surface.current;
    const sync = () => setFullscreen(fullscreenElement() === target);
    document.addEventListener('fullscreenchange', sync);
    document.addEventListener('webkitfullscreenchange', sync);
    return () => {
      document.removeEventListener('fullscreenchange', sync);
      document.removeEventListener('webkitfullscreenchange', sync);
      exit();
      exitIfOwned(target);
    };
  }, [exit]);

  return { attachSurface, enter, exit, enterOnFirstTouch, showInstall, canEnter: supported && !fullscreen };
}
