import { useEffect, useRef, useState } from 'react';
import { WARDEN_ANIMATIONS } from './VoidWarden';
import { WardenPreviewScene } from './WardenPreviewScene';
import './WardenPreview.css';

const views = [
  { id: 'front', label: '正面' },
  { id: 'side', label: '側面' },
  { id: 'back', label: '背面' },
];
const emptyStats = { triangles: 0, fps: 0, frameMs: 0, calls: 0 };
const touchDevice = () => matchMedia('(pointer: coarse)').matches;

export default function WardenPreview({ onBack }) {
  const host = useRef(null);
  const preview = useRef(null);
  const [animation, setAnimation] = useState('idle');
  const [enraged, setEnraged] = useState(false);
  const [low, setLow] = useState(touchDevice);
  const [stats, setStats] = useState(emptyStats);
  const [error, setError] = useState('');

  useEffect(() => {
    let scene;
    let cancelled = false;
    try {
      scene = new WardenPreviewScene(host.current, setStats, lost => {
        setError(lost ? '3D 連線暫時中斷，正在等候瀏覽器恢復。' : '');
      });
      preview.current = scene;
    } catch (cause) {
      console.error('Unable to initialize Void Warden preview', cause);
      queueMicrotask(() => {
        if (!cancelled) setError('無法啟動 3D 預覽。請確認瀏覽器已開啟 WebGL 2 與硬體加速。');
      });
    }
    return () => {
      cancelled = true;
      preview.current = null;
      scene?.dispose();
    };
  }, []);

  useEffect(() => {
    preview.current?.setOptions(animation, enraged, low);
  }, [animation, enraged, low]);

  return <main className="warden-preview">
    <header className="warden-topbar">
      <button type="button" className="warden-back" onClick={onBack}><span aria-hidden="true">←</span> 選擇模式</button>
      <span className="warden-brand">CHROMA <strong>OPS</strong></span>
    </header>
    <div className="warden-workspace">
      <section className="warden-viewport" aria-label="模型檢視區">
        <div className="warden-canvas" ref={host} />
        <header className="warden-title">
          <p>VOID WARDEN</p>
          <h1>虛空騎士</h1>
        </header>
        <div className="warden-view-help">拖曳旋轉 · 滾輪或雙指縮放</div>
        {error && <p className="warden-webgl-error" role="status">{error}</p>}
      </section>
      <aside className="warden-controls" aria-label="預覽控制">
        <div className="warden-control-group">
          <h2 id="warden-views">檢視角度</h2>
          <div className="warden-segments" role="group" aria-labelledby="warden-views">
            {views.map(({ id, label }) => <button type="button" disabled={!!error} key={id}
              onClick={() => preview.current?.setView(id)}>{label}</button>)}
          </div>
          <button type="button" disabled={!!error} className="warden-reset"
            onClick={() => preview.current?.setView('reset')}><span aria-hidden="true">↺</span> 重設視角</button>
        </div>
        <div className="warden-control-group">
          <h2 id="warden-animation">動畫</h2>
          <div className="warden-segments" role="group" aria-labelledby="warden-animation">
            {WARDEN_ANIMATIONS.map(({ id, label }) => <button type="button" disabled={!!error} key={id}
              aria-pressed={animation === id} onClick={() => setAnimation(id)}>{label}</button>)}
          </div>
        </div>
        <div className="warden-control-group">
          <h2 id="warden-state">感染狀態</h2>
          <div className="warden-segments" role="group" aria-labelledby="warden-state">
            <button type="button" disabled={!!error} aria-pressed={!enraged} onClick={() => setEnraged(false)}>普通</button>
            <button type="button" disabled={!!error} aria-pressed={enraged} onClick={() => setEnraged(true)}>感染狂暴</button>
          </div>
        </div>
        <div className="warden-control-group warden-performance">
          <h2>即時效能</h2>
          <dl>
            <div><dt>角色三角面</dt><dd data-metric="triangles">{stats.triangles ? stats.triangles.toLocaleString('zh-TW') : '—'}</dd></div>
            <div><dt>每秒幀數</dt><dd data-metric="fps">{stats.fps ? `${Math.round(stats.fps)} FPS` : '—'}</dd></div>
            <div><dt>平均幀時間</dt><dd data-metric="frame">{stats.frameMs ? `${stats.frameMs.toFixed(1)} ms` : '—'}</dd></div>
            <div><dt>繪製呼叫</dt><dd data-metric="calls">{stats.calls || '—'}</dd></div>
          </dl>
          <label className="warden-quality">
            <input type="checkbox" checked={low} disabled={!!error} onChange={event => setLow(event.target.checked)} />
            手機低負載
          </label>
        </div>
      </aside>
    </div>
  </main>;
}
