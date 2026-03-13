import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ── 常數 ──────────────────────────────────────────────────────────────────
const COLS = 48; // 格子欄數
const ROWS = 48; // 格子列數
const CANVAS_W = 320;
const CANVAS_H = 320;
const CELL_W = CANVAS_W / COLS;
const CELL_H = CANVAS_H / ROWS;
const CELL_R = Math.min(CELL_W, CELL_H) * 0.38; // 圓角半徑（可愛圓角格子）

// ── 可愛調色盤：依「存活世代」顯示不同顏色（越老越飽和）──────────────────
// 使用 age（0=剛出生, 1=一般, 2+=老細胞）決定顏色
const CELL_COLORS = [
  { fill: "#7ee7ff", stroke: "#38bdf8" }, // 剛誕生：亮青藍
  { fill: "#38bdf8", stroke: "#2563eb" }, // 中生代：亮藍
  { fill: "#1d4ed8", stroke: "#1e3a8a" }, // 老細胞：深藍
];
// ── Grid 工具函數 ─────────────────────────────────────────────────────────

/** 建立空白 grid（每個 cell 儲存 age：0=死亡，1+=存活世代數）*/
function makeEmpty() {
  return new Uint8Array(COLS * ROWS); // 0 = dead，≥1 = alive (age)
}

/** 隨機填充 grid，density 為存活機率 */
function makeRandom(density = 0.28) {
  const g = new Uint8Array(COLS * ROWS);
  for (let i = 0; i < g.length; i++) {
    g[i] = Math.random() < density ? 1 : 0;
  }
  return g;
}

/** 計算下一代 grid（Conway 規則） */
function nextGen(cur) {
  const next = new Uint8Array(COLS * ROWS);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let neighbors = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = (r + dr + ROWS) % ROWS; // 週期邊界
          const nc = (c + dc + COLS) % COLS;
          if (cur[nr * COLS + nc] > 0) neighbors++;
        }
      }
      const alive = cur[r * COLS + c] > 0;
      if (alive && (neighbors === 2 || neighbors === 3)) {
        // 存活：age + 1（上限 2 以顯示「老細胞」顏色）
        next[r * COLS + c] = Math.min(cur[r * COLS + c] + 1, 2);
      } else if (!alive && neighbors === 3) {
        // 誕生
        next[r * COLS + c] = 1;
      }
      // else: 死亡 → 保持 0
    }
  }
  return next;
}

/** 計算存活細胞數 */
function countAlive(grid) {
  let n = 0;
  for (let i = 0; i < grid.length; i++) if (grid[i] > 0) n++;
  return n;
}

// ── 繪製 Grid 到 Canvas ───────────────────────────────────────────────────
function drawGrid(ctx, grid) {
  // 背景
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // 格線（淡）
  ctx.strokeStyle = "rgba(200, 220, 245, 0.6)";
  ctx.lineWidth = 0.5;
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath();
    ctx.moveTo(c * CELL_W, 0);
    ctx.lineTo(c * CELL_W, CANVAS_H);
    ctx.stroke();
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * CELL_H);
    ctx.lineTo(CANVAS_W, r * CELL_H);
    ctx.stroke();
  }

  // 存活細胞（圓角矩形，可愛風格）
  const pad = 1.5; // cell 內縮 padding
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const age = grid[r * COLS + c];
      if (age === 0) continue;

      const colorIdx = Math.min(age - 1, CELL_COLORS.length - 1);
      const { fill, stroke } = CELL_COLORS[colorIdx];
      const x = c * CELL_W + pad;
      const y = r * CELL_H + pad;
      const w = CELL_W - pad * 2;
      const h = CELL_H - pad * 2;
      const rad = CELL_R;

      ctx.beginPath();
      ctx.moveTo(x + rad, y);
      ctx.lineTo(x + w - rad, y);
      ctx.arcTo(x + w, y, x + w, y + rad, rad);
      ctx.lineTo(x + w, y + h - rad);
      ctx.arcTo(x + w, y + h, x + w - rad, y + h, rad);
      ctx.lineTo(x + rad, y + h);
      ctx.arcTo(x, y + h, x, y + h - rad, rad);
      ctx.lineTo(x, y + rad);
      ctx.arcTo(x, y, x + rad, y, rad);
      ctx.closePath();

      ctx.fillStyle = fill;

      // 新生細胞比較亮，老細胞比較穩
      ctx.shadowColor = fill;
      ctx.shadowBlur = age === 1 ? 10 : age === 2 ? 6 : 4;

      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }
}

// ── 主元件 ────────────────────────────────────────────────────────────────
export default function GameOfLife() {
  const navigate = useNavigate();

  // gridRef：高頻資料避免走 state，只在需要 UI 更新時 sync
  const canvasRef = useRef(null);
  const gridRef = useRef(makeRandom());
  const rafIdRef = useRef(null);
  const isRunRef = useRef(false);
  const genRef = useRef(0);
  const loopFnRef = useRef(null);
  const lastTimeRef = useRef(0);

  const [running, setRunning] = useState(false);
  const [fps, setFps] = useState(10); // 每秒世代數
  const [stats, setStats] = useState({ gen: 0, alive: 0 });

  const fpsRef = useRef(fps);
  useEffect(() => {
    fpsRef.current = fps;
  }, [fps]);

  // ── 重新繪製當前 grid 到 Canvas ─────────────────────────────────────────
  const render = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawGrid(ctx, gridRef.current);
  }, []);

  // ── 同步統計資料到 state ────────────────────────────────────────────────
  const syncStats = useCallback(() => {
    setStats({ gen: genRef.current, alive: countAlive(gridRef.current) });
  }, []);

  // 初始化
  useEffect(() => {
    render();
  }, [render]);

  // ── 動畫 Loop（time-based，用 fps ref 控制實際世代速率）─────────────────
  useEffect(() => {
    loopFnRef.current = (timestamp) => {
      if (!isRunRef.current) return;
      const interval = 1000 / fpsRef.current;
      if (timestamp - lastTimeRef.current >= interval) {
        lastTimeRef.current = timestamp;
        gridRef.current = nextGen(gridRef.current);
        genRef.current++;
        render();
        // 每 5 代同步一次 state，降低 re-render 頻率
        if (genRef.current % 5 === 0) syncStats();
      }
      rafIdRef.current = requestAnimationFrame(loopFnRef.current);
    };
  }, [render, syncStats]);

  // ── 控制函數 ─────────────────────────────────────────────────────────────
  const start = useCallback(() => {
    if (isRunRef.current) return;
    isRunRef.current = true;
    lastTimeRef.current = 0;
    setRunning(true);
    rafIdRef.current = requestAnimationFrame(loopFnRef.current);
  }, []);

  const pause = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    syncStats();
  }, [syncStats]);

  const step = useCallback(() => {
    if (isRunRef.current) return;
    gridRef.current = nextGen(gridRef.current);
    genRef.current++;
    render();
    syncStats();
  }, [render, syncStats]);

  const randomize = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    genRef.current = 0;
    gridRef.current = makeRandom();
    render();
    syncStats();
  }, [render, syncStats]);

  const reset = useCallback(() => {
    isRunRef.current = false;
    setRunning(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    genRef.current = 0;
    gridRef.current = makeEmpty();
    render();
    setStats({ gen: 0, alive: 0 });
  }, [render]);

  // 元件卸載清除 rAF
  useEffect(
    () => () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    },
    [],
  );

  // ── 點擊 Canvas 切換 Cell 狀態 ───────────────────────────────────────────
  const handleCanvasClick = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      const px = (e.clientX - rect.left) * scaleX;
      const py = (e.clientY - rect.top) * scaleY;
      const c = Math.floor(px / CELL_W);
      const r = Math.floor(py / CELL_H);
      if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return;

      // 複製一份 grid（避免直接 mutate ref 中的 Uint8Array）
      const next = new Uint8Array(gridRef.current);
      const idx = r * COLS + c;
      next[idx] = next[idx] > 0 ? 0 : 1; // 切換死/生
      gridRef.current = next;
      render();
      syncStats();
    },
    [render, syncStats],
  );

  // 計算存活率（%）
  const alivePct =
    stats.alive > 0 ? ((stats.alive / (COLS * ROWS)) * 100).toFixed(1) : "0.0";

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
              <div className="title">細胞遊戲</div>
              <div className="subtitle">
                Conway's Game of Life · 點擊格子繪製 · 週期邊界
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
              width={CANVAS_W}
              height={CANVAS_H}
              onClick={handleCanvasClick}
              style={{
                borderRadius: 18,
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 32px rgba(16, 16, 30, 0.14)",
                display: "block",
                maxWidth: "100%",
                cursor: "crosshair",
              }}
            />
          </section>

          {/* ─── 色碼說明 ────────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">細胞世代顏色</div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              {[
                { label: "剛誕生", color: "rgba(180, 230, 255, 0.95)" },
                { label: "第 2 代", color: "rgba(100, 180, 255, 0.95)" },
                { label: "老細胞", color: "rgba(60, 130, 240, 0.95)" },
              ].map(({ label, color }) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    padding: "8px 4px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.52)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(16,16,22,0.7)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 5,
                      background: color,
                      display: "inline-block",
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </section>

          {/* ─── 統計 ────────────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">模擬狀態</div>
            <div className="grid2">
              <div className="mini">
                <div className="label">世代數</div>
                <div className="value">{stats.gen.toLocaleString()}</div>
              </div>
              <div className="mini">
                <div className="label">存活細胞</div>
                <div
                  className="value"
                  style={{ color: "rgba(3, 129, 255, 0.9)" }}
                >
                  {stats.alive.toLocaleString()}
                </div>
              </div>
              <div className="mini">
                <div className="label">總格子數</div>
                <div className="value">{(COLS * ROWS).toLocaleString()}</div>
                <div className="hint">
                  {COLS} × {ROWS}
                </div>
              </div>
              <div className="mini">
                <div className="label">存活率</div>
                <div className="value">{alivePct}%</div>
              </div>
            </div>
          </section>

          {/* ─── 速度控制 ────────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">速度（世代 / 秒）</div>
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">Generation per second</div>
                <div className="chip">{fps} fps</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[2, 5, 10, 20, 60].map((n) => (
                  <button
                    key={n}
                    className={`btn ${fps === n ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 2px", fontSize: 13 }}
                    onClick={() => setFps(n)}
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
            清空
          </button>
          <button className="btn ghost" onClick={randomize}>
            隨機
          </button>
          <button className="btn ghost" onClick={step} disabled={running}>
            +1 代
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
