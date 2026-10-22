import { useEffect, useRef, useState } from 'react';
import { Game } from '../chroma-ops/core/Game';
import Multiplayer from './Multiplayer';
import { readMultiplayerSession } from '../chroma-ops/settings/MultiplayerSession';
import ResumeCard from '../chroma-ops/ui/ResumeCard';
import MouseSensitivityControl from '../chroma-ops/ui/MouseSensitivityControl';
import './ChromaOps.css';
import './CombatFeedback.css';
import '../chroma-ops/ui/BattleFeedback.css';
import './ChromaMenu.css';
import './Armory.css';
import './MobileControls.css';
import '../chroma-ops/ui/SniperScope.css';

function SoloGame({ onBack }) { const ref=useRef(null);useEffect(()=>{const game=new Game(ref.current);game.start();return()=>game.dispose();},[]);return <main className="chroma-ops" ref={ref}><button className="co-exit" onClick={onBack}>← 選擇模式</button><div className="co-start">CHROMA OPS <small>WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡</small></div></main>; }
export default function ChromaOps() {
  const [mode, setMode] = useState(() => new URLSearchParams(location.search).has('room') ? 'multi' : 'menu');
  const previousSession = readMultiplayerSession();
  if (mode === 'solo') return <SoloGame onBack={() => setMode('menu')} />;
  if (mode === 'multi' || mode === 'resume') return <Multiplayer resumeOnMount={mode === 'resume'} onBack={() => {
    const url = new URL(location.href);url.searchParams.delete('room');history.replaceState(null, '', url);setMode('menu');
  }} />;
  return <main className="co-menu"><section className="co-menu-card">
    <p className="co-eyebrow">NEON CITY ARENA</p><h1>CHROMA OPS</h1><p>選擇你的戰場模式</p>
    <div className="co-mode-grid">
      <button onClick={() => setMode('solo')}><span>◎</span><b>單機訓練</b><small>對戰 AI、熟悉地圖與武器</small></button>
      <button onClick={() => setMode('multi')}><span>◉</span><b>多人連線</b><small>建立房間、邀請朋友對戰</small></button>
    </div>
    {previousSession && <ResumeCard code={previousSession.code} onResume={() => setMode('resume')} />}
    <MouseSensitivityControl />
  </section></main>;
}
