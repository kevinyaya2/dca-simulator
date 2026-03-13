import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ── 常數 ──────────────────────────────────────────────────────────────────
const SIZE = 320; // 畫布邊長（px）
const SYNC_EVERY = 6; // 每 N 幀才把 ref 數值同步進 React state，避免高頻 re-render
const STEP_BATCH = 200; // Step 按鈕每次新增的點數

// ── Helper：繪製四分之一圓弧（每幀最後執行，確保覆蓋在點的上層）────────────
function drawArc(ctx) {
  ctx.save();
  ctx.beginPath();
  // 圓心固定在左下角 (0, SIZE)，半徑 = SIZE
  ctx.arc(0, SIZE, SIZE, -Math.PI / 2, 0);
  ctx.strokeStyle = "rgba(20, 20, 40, 0.55)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

// ── Helper：在畫布上繪製單一 1×1 像素點 ──────────────────────────────────
//   x, y ∈ [0, 1]；數學座標系 y 向上為正，需翻轉為 Canvas 座標
function paintDot(ctx, x, y, inside) {
  const px = Math.floor(x * SIZE);
  const py = Math.floor((1 - y) * SIZE);
  ctx.fillStyle = inside
    ? "rgba(3, 129, 255, 0.72)" // 藍色 → 圓內
    : "rgba(235, 70, 120, 0.60)"; // 粉紅 → 圓外
  ctx.fillRect(px, py, 1, 1);
}

// ── 主元件 ────────────────────────────────────────────────────────────────
export default function MonteCarloPi() {
  const navigate = useNavigate();

  // ── Refs：模擬核心資料，不觸發 re-render ────────────────────────────────
  const canvasRef = useRef(null);
  const totalRef = useRef(0); // 總投點數
  const insideRef = useRef(0); // 落在圓內的點數
  const rafIdRef = useRef(null); // rAF handle，用於取消
  const isRunRef = useRef(false); // 動畫是否執行中
  const frameRef = useRef(0); // 幀計數，用來分批同步 state
  const ppsRef = useRef(100); // 每幀新增點數（ref 讓 loop 永遠讀到最新值）

  // loopFnRef 永遠指向最新版的 loop 函數。
  // 每次 render 都會更新這個 ref，解決 rAF 遞迴呼叫 + stale closure 問題：
  //   rafIdRef = rAF(loopFnRef.current) → 執行時讀 ref，而非捕捉舊 closure
  const loopFnRef = useRef(null);

  // ── State：只存需要觸發畫面更新的值 ──────────────────────────────────────
  const [running, setRunning] = useState(false);
  const [pps, setPps] = useState(100);
  const [stats, setStats] = useState({ total: 0, inside: 0, pi: 0, error: 0 });

  // pps state 改變時同步到 ppsRef（loop 只讀 ref，不讀 state，避免 closure 過期）
  useEffect(() => {
    ppsRef.current = pps;
  }, [pps]);

  // ── 初始化畫布（填底色 + 畫弧）─────────────────────────────────────────
  const initCanvas = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "rgba(244, 249, 255, 1)";
    ctx.fillRect(0, 0, SIZE, SIZE);
    drawArc(ctx);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  // ── 批次新增 n 個隨機點並繪製到 Canvas ──────────────────────────────────
  const addPoints = useCallback((n) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    for (let i = 0; i < n; i++) {
      const x = Math.random();
      const y = Math.random();
      const inside = x * x + y * y <= 1;
      totalRef.current++;
      if (inside) insideRef.current++;
      paintDot(ctx, x, y, inside);
    }
    // 重繪弧線，確保不被點覆蓋
    drawArc(ctx);
  }, []);

  // ── 將 ref 數值同步進 React state（觸發 UI 更新）────────────────────────
  const syncStats = useCallback(() => {
    const t = totalRef.current;
    const ins = insideRef.current;
    const pi = t > 0 ? (4 * ins) / t : 0;
    setStats({ total: t, inside: ins, pi, error: Math.abs(pi - Math.PI) });
  }, []);

  // ── 動畫 Loop ───────────────────────────────────────────────────────────
  // addPoints / syncStats 都是 useCallback(fn, [])，引用穩定，effect 只跑一次。
  // 把賦值放進 useEffect，避免 React 19 「Cannot update ref during render」錯誤。
  useEffect(() => {
    loopFnRef.current = () => {
      if (!isRunRef.current) return;
      addPoints(ppsRef.current);
      frameRef.current++;
      if (frameRef.current % SYNC_EVERY === 0) syncStats();
      rafIdRef.current = requestAnimationFrame(loopFnRef.current);
    };
  }, [addPoints, syncStats]);

  // ── 控制函數 ─────────────────────────────────────────────────────────────
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
    syncStats(); // 暫停時立即同步一次，讓數字是最新的
  }, [syncStats]);

  const reset = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    totalRef.current = 0;
    insideRef.current = 0;
    frameRef.current = 0;
    setStats({ total: 0, inside: 0, pi: 0, error: 0 });
    initCanvas();
  }, [initCanvas]);

  // step：手動新增一批點，只在暫停時生效
  const step = useCallback(() => {
    if (isRunRef.current) return;
    addPoints(STEP_BATCH);
    syncStats();
  }, [addPoints, syncStats]);

  // ── Cleanup：元件卸載時取消 rAF ──────────────────────────────────────────
  useEffect(
    () => () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    },
    [],
  );

  // ── 衍生值：收斂提示條件 ──────────────────────────────────────────────────
  const converging = stats.total >= 5_000 && stats.error < 0.02;
  const stable = stats.total >= 50_000 && stats.error < 0.005;

  // 圓內百分比（理論值 π/4 ≈ 78.54%）
  const insidePct =
    stats.total > 0 ? ((stats.inside / stats.total) * 100).toFixed(2) : null;

  return (
    <div className="oneui">
      <div className="shell">
        {/* ─── Header ─────────────────────────────────────────────────── */}
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">蒙地卡羅 π</div>
              <div className="subtitle">
                隨機投點法估算圓周率 · HTML5 Canvas 視覺化
              </div>
            </div>
            {/* 狀態 Badge */}
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
          {/* ─── Canvas ──────────────────────────────────────────────── */}
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
                cursor: "default",
              }}
            />
          </section>

          {/* ─── π 大顯示 ────────────────────────────────────────────── */}
          <section className="card hero" style={{ textAlign: "center" }}>
            <div className="label">估算 π 值</div>
            <div
              className="big"
              style={{ fontSize: 44, letterSpacing: 2, marginTop: 6 }}
            >
              {stats.total > 0 ? stats.pi.toFixed(7) : "—"}
            </div>
            <div className="hint" style={{ marginTop: 6 }}>
              Math.PI = {Math.PI.toFixed(7)}
              {stats.total > 0 && (
                <span
                  style={{
                    marginLeft: 10,
                    padding: "2px 9px",
                    borderRadius: 999,
                    background: "rgba(16, 16, 30, 0.07)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  誤差 {stats.error.toFixed(7)}
                </span>
              )}
            </div>

            {/* 收斂提示 */}
            {stable ? (
              <div
                style={{
                  marginTop: 12,
                  display: "inline-block",
                  padding: "5px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(0, 155, 70, 0.95)",
                  background: "rgba(0, 200, 80, 0.11)",
                  border: "1px solid rgba(0, 200, 80, 0.25)",
                }}
              >
                ✅ 估算已趨穩定
              </div>
            ) : converging ? (
              <div
                style={{
                  marginTop: 12,
                  display: "inline-block",
                  padding: "5px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(3, 129, 255, 0.9)",
                  background: "rgba(3, 129, 255, 0.09)",
                  border: "1px solid rgba(3, 129, 255, 0.22)",
                }}
              >
                📉 數值持續收斂中
              </div>
            ) : null}
          </section>

          {/* ─── 統計資訊 ────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">統計資訊</div>
            <div className="grid2">
              <div className="mini">
                <div className="label">總點數</div>
                <div className="value">{stats.total.toLocaleString()}</div>
              </div>
              <div className="mini">
                <div className="label">圓內點數</div>
                <div
                  className="value"
                  style={{ color: "rgba(3, 129, 255, 0.9)" }}
                >
                  {stats.inside.toLocaleString()}
                </div>
                <div className="hint">藍色點</div>
              </div>
              <div className="mini">
                <div className="label">圓外點數</div>
                <div
                  className="value"
                  style={{ color: "rgba(215, 60, 110, 0.9)" }}
                >
                  {(stats.total - stats.inside).toLocaleString()}
                </div>
                <div className="hint">粉紅點</div>
              </div>
              <div className="mini">
                <div className="label">圓內比例</div>
                <div className="value">
                  {insidePct !== null ? `${insidePct}%` : "—"}
                </div>
                <div className="hint">理論值 ≈ 78.54%</div>
              </div>
            </div>
          </section>

          {/* ─── 速度控制 ────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">每幀新增點數</div>
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">速度（pts / frame）</div>
                <div className="chip">{pps.toLocaleString()}</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[10, 100, 500, 1000].map((n) => (
                  <button
                    key={n}
                    className={`btn ${pps === n ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 4px", fontSize: 13 }}
                    onClick={() => setPps(n)}
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
            +{STEP_BATCH}
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
