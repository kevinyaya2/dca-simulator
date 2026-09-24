import { useEffect, useRef, useState } from 'react';
import { Game } from '../chroma-ops/core/Game';
import Multiplayer from './Multiplayer';
import './ChromaOps.css';
import './CombatFeedback.css';
import './ChromaMenu.css';
import './Armory.css';
import './MobileControls.css';

function SoloGame({ onBack }) { const ref=useRef(null);useEffect(()=>{const game=new Game(ref.current);game.start();return()=>game.dispose();},[]);return <main className="chroma-ops" ref={ref}><button className="co-exit" onClick={onBack}>← 選擇模式</button><div className="co-start">CHROMA OPS <small>WASD / 滑鼠／觸控操作 · 1 AR · 2 SMG</small></div></main>; }
export default function ChromaOps(){const [mode,setMode]=useState(()=>new URLSearchParams(location.search).has('room')?'multi':'menu');if(mode==='solo')return <SoloGame onBack={()=>setMode('menu')}/>;if(mode==='multi')return <Multiplayer onBack={()=>{history.replaceState(null,'',location.pathname);setMode('menu');}}/>;return <main className="co-menu"><section className="co-menu-card"><p className="co-eyebrow">NEON CITY ARENA</p><h1>CHROMA OPS</h1><p>選擇你的戰場模式</p><div className="co-mode-grid"><button onClick={()=>setMode('solo')}><span>◎</span><b>單機訓練</b><small>對戰 AI、熟悉地圖與武器</small></button><button onClick={()=>setMode('multi')}><span>◉</span><b>多人連線</b><small>建立房間、邀請朋友對戰</small></button></div></section></main>;}
