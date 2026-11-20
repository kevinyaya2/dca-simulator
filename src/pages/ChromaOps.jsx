import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Game } from '../chroma-ops/core/Game';
import Multiplayer from './Multiplayer';
import { readMultiplayerSession } from '../chroma-ops/settings/MultiplayerSession';
import ResumeCard from '../chroma-ops/ui/ResumeCard';
import MouseSensitivityControl from '../chroma-ops/ui/MouseSensitivityControl';
import { useChromaFullscreen } from '../chroma-ops/ui/useChromaFullscreen';
import './ChromaOps.css';
import './CombatFeedback.css';
import '../chroma-ops/ui/BattleFeedback.css';
import './ChromaMenu.css';
import './Armory.css';
import './MobileControls.css';
import '../chroma-ops/ui/SniperScope.css';
import '../chroma-ops/boss/WardenEntrance.css';

const WardenPreview = lazy(() => import('../chroma-ops/boss/WardenPreview'));

function SoloGame({ onBack, fullscreenButton }) {
  const stage = useRef(null);
  useEffect(() => {
    const game = new Game(stage.current);
    game.start();
    return () => game.dispose();
  }, []);
  return <main className="chroma-ops">
    <div className="co-game-stage" ref={stage} />
    <div className="co-start">CHROMA OPS <small>WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡</small></div>
    <button type="button" className="co-exit" onClick={onBack}>← 選擇模式</button>
    {fullscreenButton}
  </main>;
}

export default function ChromaOps() {
  const [mode, setMode] = useState(() => new URLSearchParams(location.search).has('room') ? 'multi' : 'menu');
  const { attachSurface, enter, exit, enterOnFirstTouch, showInstall, canEnter } = useChromaFullscreen();
  const previousSession = readMultiplayerSession();

  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const previous = viewport?.content;
    if (viewport) viewport.content = `${previous}, viewport-fit=cover`;
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = `${import.meta.env.BASE_URL}chroma-ops.webmanifest`;
    const touchIcon = document.createElement('link');
    touchIcon.rel = 'apple-touch-icon';
    touchIcon.href = `${import.meta.env.BASE_URL}chroma-ops-192.png`;
    document.head.append(manifest, touchIcon);
    return () => {
      if (viewport) viewport.content = previous;
      manifest.remove();
      touchIcon.remove();
    };
  }, []);

  const back = () => {
    exit();
    const url = new URL(location.href);
    url.searchParams.delete('room');
    history.replaceState(null, '', url);
    setMode('menu');
  };
  const fullscreenButton = canEnter && <button type="button" className="co-fullscreen" onClick={enter}>全螢幕</button>;

  return <div className="co-surface" ref={attachSurface}>
    {mode === 'solo' ? <SoloGame onBack={back} fullscreenButton={fullscreenButton} />
      : mode === 'multi' || mode === 'resume' ? <Multiplayer resumeOnMount={mode === 'resume'} onBack={back}
        enterFullscreen={enter} exitFullscreen={exit}
        enterOnFirstTouch={enterOnFirstTouch} fullscreenButton={fullscreenButton} />
      : mode === 'warden' ? <Suspense fallback={<main className="co-menu" role="status">載入虛空騎士預覽…</main>}>
        <WardenPreview onBack={back} />
      </Suspense>
      : <main className="co-menu"><section className="co-menu-card">
    <p className="co-eyebrow">NEON CITY ARENA</p><h1>CHROMA OPS</h1><p>選擇你的戰場模式</p>
    <div className="co-mode-grid">
      <button onClick={() => { enter(); setMode('solo'); }}><span>◎</span><b>單機訓練</b><small>對戰 AI、熟悉地圖與武器</small></button>
      <button onClick={() => setMode('multi')}><span>◉</span><b>多人連線</b><small>建立房間、邀請朋友對戰</small></button>
    </div>
    <button type="button" className="co-warden-entry" onClick={() => setMode('warden')}>
      <span><strong>虛空騎士預覽</strong><small>檢視 3D 模型與招式動畫</small></span><span aria-hidden="true">→</span>
    </button>
    {previousSession && <ResumeCard code={previousSession.code} onResume={() => { enter(); setMode('resume'); }} />}
    {showInstall && <details className="co-install">
      <summary>在 iPhone 隱藏瀏覽器工具列</summary>
      <p>在 Safari 點「分享」→「加入主畫面」。如果看到「作為網頁 App 開啟」，請開啟它。之後從主畫面的 Chroma Ops 圖示啟動。</p>
    </details>}
    <MouseSensitivityControl />
  </section></main>}
  </div>;
}
