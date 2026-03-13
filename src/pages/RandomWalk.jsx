import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ── 常數 ──────────────────────────────────────────────────────────────────
const SIZE = 320; // 畫布邊長 (px)
const STEP_SIZE = 4; // 每步移動像素
const CENTER = SIZE / 2;
const SYNC_EVERY = 6; // 每 N 幀同步一次 state，避免高頻 re-render
const STEP_BATCH = 20; // Step 按鈕：每 walker 單次增加的步數

// ── Walker 顏色池 ─────────────────────────────────────────────────────────
const WALKER_COLORS = [
  "rgba(3,  129, 255, 0.80)",
  "rgba(220, 60,  90, 0.80)",
  "rgba(20,  196, 142, 0.80)",
  "rgba(255, 160,  30, 0.80)",
  "rgba(180,  80, 255, 0.80)",
  "rgba(255,  80, 180, 0.80)",
  "rgba( 60, 200, 220, 0.80)",
  "rgba(255, 120,  60, 0.80)",
];

// ── 四個方向向量 ─────────────────────────────────────────────────────────
const DIRS = [
  [0, -STEP_SIZE], // 上
  [0, STEP_SIZE], // 下
  [-STEP_SIZE, 0], // 左
  [STEP_SIZE, 0], // 右
];

// ── 繪製原點標記（每幀最後重繪，保持在最上層）────────────────────────────
function drawOrigin(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(CENTER, CENTER, 5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(16, 16, 40, 0.55)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

// ── 主元件 ────────────────────────────────────────────────────────────────
export default function RandomWalk() {
  const navigate = useNavigate();

  // ── Refs：高頻資料直接存 ref，不觸發 re-render ────────────────────────
  const canvasRef = useRef(null);
  const walkersRef = useRef([]); // { x, y }[]
  const stepsRef = useRef(0); // 所有 walker 的累計步數總和
  const rafIdRef = useRef(null);
  const isRunRef = useRef(false);
  const frameRef = useRef(0);
  const spsRef = useRef(5); // 每幀每個 walker 的步數（ref 確保 loop 讀到最新值）
  const loopFnRef = useRef(null); // 永遠指向最新版 loop 函數

  // ── State：只存需要觸發 UI 重繪的資料 ────────────────────────────────
  const [running, setRunning] = useState(false);
  const [walkerCount, setWalkerCount] = useState(3);
  const [sps, setSps] = useState(5);
  const [stats, setStats] = useState({ total: 0, perWalker: 0, avgDist: 0 });

  // sps 改變時同步到 ref（loop 只讀 ref，不讀 state，避免 stale closure）
  useEffect(() => {
    spsRef.current = sps;
  }, [sps]);

  // ── 初始化畫布：清空、畫原點、重置 walkers ────────────────────────────
  const initCanvas = useCallback((count) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "rgba(244, 249, 255, 1)";
    ctx.fillRect(0, 0, SIZE, SIZE);
    drawOrigin(ctx);
    walkersRef.current = Array.from({ length: count }, () => ({
      x: CENTER,
      y: CENTER,
    }));
    stepsRef.current = 0;
  }, []);

  // walkerCount 改變時自動重新初始化
  useEffect(() => {
    initCanvas(walkerCount);
  }, [initCanvas, walkerCount]);

  // ── 移動所有 walker n 步並增量繪製路徑 ───────────────────────────────
  // 用增量繪製（每幀只畫「新增的線段」），無需重繪歷史路徑，效能最佳
  const doSteps = useCallback((n) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const walkers = walkersRef.current;
    if (!walkers.length) return;

    ctx.save();
    ctx.lineWidth = 1.5;

    for (let w = 0; w < walkers.length; w++) {
      const walker = walkers[w];
      ctx.strokeStyle = WALKER_COLORS[w % WALKER_COLORS.length];
      ctx.beginPath();
      ctx.moveTo(walker.x, walker.y);

      for (let s = 0; s < n; s++) {
        const d = DIRS[Math.floor(Math.random() * 4)];
        walker.x += d[0];
        walker.y += d[1];
        ctx.lineTo(walker.x, walker.y);
      }
      ctx.stroke();
    }

    ctx.restore();

    // 累計步數（n 步 × walker 數量）
    stepsRef.current += n * walkers.length;

    // 原點標記重繪在最上層
    drawOrigin(ctx);
  }, []);

  // ── 將 ref 數值同步進 React state（觸發 UI 更新）────────────────────
  const syncStats = useCallback(() => {
    const walkers = walkersRef.current;
    const count = walkers.length;
    const total = stepsRef.current;

    // 所有 walker 距原點的平均距離
    const avgDist =
      count > 0
        ? walkers.reduce((sum, w) => {
            const dx = w.x - CENTER;
            const dy = w.y - CENTER;
            return sum + Math.sqrt(dx * dx + dy * dy);
          }, 0) / count
        : 0;

    setStats({
      total,
      perWalker: count > 0 ? Math.round(total / count) : 0,
      avgDist,
    });
  }, []);

  // ── 動畫 Loop（userEffect 賦值，符合 React 19 不允許 render 期間寫 ref）
  useEffect(() => {
    loopFnRef.current = () => {
      if (!isRunRef.current) return;
      doSteps(spsRef.current);
      frameRef.current++;
      if (frameRef.current % SYNC_EVERY === 0) syncStats();
      rafIdRef.current = requestAnimationFrame(loopFnRef.current);
    };
  }, [doSteps, syncStats]);

  // ── 控制函數 ─────────────────────────────────────────────────────────
  const start = useCallback(() => {
    if (isRunRef.current) return;
    isRunRef.current = true;
    setRunning(true);
    rafIdRef.current = requestAnimationFrame(loopFnRef.current);
  }, []);

  const pause = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    syncStats();
  }, [syncStats]);

  const reset = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    frameRef.current = 0;
    initCanvas(walkerCount);
    setStats({ total: 0, perWalker: 0, avgDist: 0 });
  }, [initCanvas, walkerCount]);

  // Step：手動前進一批步數（僅暫停時可用）
  const step = useCallback(() => {
    if (isRunRef.current) return;
    doSteps(STEP_BATCH);
    syncStats();
  }, [doSteps, syncStats]);

  // 元件卸載時清除 rAF
  useEffect(
    () => () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    },
    [],
  );

  // 切換 walker 數量：先停止動畫，再更新（useEffect 會觸發 initCanvas）
  const handleWalkerCountChange = useCallback((count) => {
    if (isRunRef.current) {
      isRunRef.current = false;
      setRunning(false);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    }
    frameRef.current = 0;
    setWalkerCount(count); // → 觸發 useEffect → initCanvas(count)
    setStats({ total: 0, perWalker: 0, avgDist: 0 });
  }, []);

  return (
    <div className="oneui">
      <div className="shell">
        {/* ─── Header ──────────────────────────────────────────────────── */}
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">隨機漫步</div>
              <div className="subtitle">
                隨機漫步視覺化 · 多 Walker 即時軌跡
              </div>
            </div>
            <div
              className="chip"
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                background: running
                  ? "rgba(3, 200, 100, 0.15)"
                  : "rgba(180, 180, 190, 0.2)",
                color: running
                  ? "rgba(0, 145, 60, 0.95)"
                  : "rgba(90, 90, 110, 0.85)",
                border: running
                  ? "1px solid rgba(3, 200, 100, 0.35)"
                  : "1px solid rgba(180, 180, 190, 0.45)",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              {running ? "▶ Running" : "⏸ Paused"}
            </div>
          </div>
        </header>

        <main className="content">
          {/* ─── Canvas ─────────────────────────────────────────────────── */}
          <section
            className="card"
            style={{ padding: 12, display: "flex", justifyContent: "center" }}
          >
            <canvas
              ref={canvasRef}
              width={SIZE}
              height={SIZE}
              style={{
                borderRadius: 18,
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 32px rgba(16, 16, 30, 0.14)",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </section>

          {/* ─── Walker 色票 ─────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">Walker 顏色</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 8,
              }}
            >
              {Array.from({ length: walkerCount }, (_, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.55)",
                    border: "1px solid rgba(255, 255, 255, 0.75)",
                    fontSize: 13,
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(16,16,30,0.07)",
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      background: WALKER_COLORS[i % WALKER_COLORS.length],
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  Walker {i + 1}
                </div>
              ))}
            </div>
          </section>

          {/* ─── 統計資訊 ───────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">統計資訊</div>
            <div className="grid2">
              <div className="mini">
                <div className="label">總步數</div>
                <div className="value">{stats.total.toLocaleString()}</div>
                <div className="hint">所有 walker 累計</div>
              </div>
              <div className="mini">
                <div className="label">Walker 數量</div>
                <div className="value">{walkerCount}</div>
              </div>
              <div className="mini">
                <div className="label">每 Walker 步數</div>
                <div className="value">{stats.perWalker.toLocaleString()}</div>
              </div>
              <div className="mini">
                <div className="label">平均距離原點</div>
                <div className="value">{stats.avgDist.toFixed(1)}</div>
                <div className="hint">
                  理論 ≈{" "}
                  {(
                    STEP_SIZE * Math.sqrt(Math.max(stats.perWalker, 0))
                  ).toFixed(1)}{" "}
                  px
                </div>
              </div>
            </div>
          </section>

          {/* ─── 參數設定 ───────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">參數設定</div>

            {/* Walker 數量 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">Walker 數量</div>
                <div className="chip">{walkerCount}</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[1, 2, 3, 5, 8].map((n) => (
                  <button
                    key={n}
                    className={`btn ${walkerCount === n ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 4px", fontSize: 14 }}
                    onClick={() => handleWalkerCountChange(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* 速度 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">速度（steps / walker / frame）</div>
                <div className="chip">{sps}</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[1, 5, 20, 50].map((n) => (
                  <button
                    key={n}
                    className={`btn ${sps === n ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 4px", fontSize: 14 }}
                    onClick={() => setSps(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div className="spacer" />
        </main>

        {/* ─── 底部按鈕列 ─────────────────────────────────────────────── */}
        <div className="bottomBar">
          <button className="btn ghost" onClick={reset}>
            重設
          </button>
          <button className="btn ghost" onClick={step} disabled={running}>
            +{STEP_BATCH} 步
          </button>
          {running ? (
            <button className="btn solid" onClick={pause}>
              暫停
            </button>
          ) : (
            <button className="btn solid" onClick={start}>
              開始
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
