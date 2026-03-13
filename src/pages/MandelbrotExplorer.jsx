import { useState, useRef, useEffect, useCallback, useTransition } from "react";
import { useNavigate } from "react-router-dom";

// ── 常數 ──────────────────────────────────────────────────────────────────
const SIZE = 320;

// 初始視角：x ≈ [-2.5, 1]，y ≈ [-1.75, 1.75]，scale = 每 pixel 代表的複數單位寬
const INITIAL_VIEW = { cx: -0.5, cy: 0, scale: 3.5 / SIZE };

// ── Ultra Fractal 經典 5 色調色盤（循環使用）────────────────────────────
// deep-blue → sky-blue → cyan-white → orange → near-black → back to start
const UF_STOPS = [
  [0, 7, 100],
  [32, 107, 203],
  [237, 255, 255],
  [255, 170, 0],
  [0, 2, 0],
];

// t ∈ [0, 1)，對應調色盤五個停駐點的線性插值（尾端接回頭部形成循環）
function ufColor(t) {
  const n = UF_STOPS.length;
  const pos = (((t % 1) + 1) % 1) * n; // 確保 [0, n)
  const i = Math.floor(pos);
  const f = pos - i;
  const a = UF_STOPS[i];
  const b = UF_STOPS[(i + 1) % n];
  return [
    Math.round(a[0] + f * (b[0] - a[0])),
    Math.round(a[1] + f * (b[1] - a[1])),
    Math.round(a[2] + f * (b[2] - a[2])),
  ];
}

// ── 核心渲染：用 ImageData 進行 pixel-level 操作（遠比逐點 fillRect 快）
// 演算法：對每個 pixel 映射到複數 c = (cr, ci)，迭代 z → z² + c，
//         記錄逃逸迭代次數，用平滑著色消除等高線感（banding）
function drawMandelbrot(ctx, view, maxIter) {
  const img = ctx.createImageData(SIZE, SIZE);
  const data = img.data;
  const { cx, cy, scale } = view;
  const half = SIZE / 2;

  for (let py = 0; py < SIZE; py++) {
    for (let px = 0; px < SIZE; px++) {
      // pixel → 複數平面座標
      const cr = cx + (px - half) * scale;
      const ci = cy + (py - half) * scale;

      let zr = 0,
        zi = 0,
        iter = 0;
      // 逃逸條件：|z|² > 4（即 |z| > 2）
      while (iter < maxIter && zr * zr + zi * zi <= 4) {
        const tmp = zr * zr - zi * zi + cr;
        zi = 2 * zr * zi + ci;
        zr = tmp;
        iter++;
      }

      const idx = (py * SIZE + px) * 4;

      if (iter >= maxIter) {
        // 在 Mandelbrot 集合內 → 黑色
        data[idx] = data[idx + 1] = data[idx + 2] = 0;
      } else {
        // 平滑著色（去除 banding）：
        //   smooth = iter + 1 - log₂(log₂(|z|))
        //   補償最後一次迭代後 |z| 的超出量，使顏色連續漸變
        const mag2 = zr * zr + zi * zi;
        const smooth = iter + 1 - Math.log2(Math.log2(Math.sqrt(mag2)));

        // 讓調色盤在整個迭代範圍內循環 4 次（控制色帶密度）
        const t = (smooth / maxIter) * 4;
        const [r, g, b] = ufColor(t);
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
      }
      data[idx + 3] = 255; // alpha = 不透明
    }
  }

  ctx.putImageData(img, 0, 0);
}

// ── 主元件 ────────────────────────────────────────────────────────────────
export default function MandelbrotExplorer() {
  const navigate = useNavigate();

  const canvasRef = useRef(null);
  // viewRef 與 view state 並存：
  //   view state → 觸發 useEffect 重繪
  //   viewRef    → wheel / click handler 在 closure 中讀最新值，不依賴 stale closure
  const viewRef = useRef(INITIAL_VIEW);

  // useTransition：標記更新為低優先「transition」，isPending 作為渲染中指示器
  // startTransition 包裹 setView / setMaxIter，讓 React 知道這是可延遲的更新
  const [isPending, startTransition] = useTransition();

  const [view, setView] = useState(INITIAL_VIEW);
  const [maxIter, setMaxIter] = useState(128);

  // 縮放倍率：initial scale / current scale（越小的 scale = 放得越大）
  const zoomLevel = INITIAL_VIEW.scale / view.scale;

  // ── 重繪：view 或 maxIter 改變時觸發 ────────────────────────────────────
  // 用 requestAnimationFrame 讓繪圖跟隨瀏覽器 paint cycle，避免不必要的重複計算
  useEffect(() => {
    viewRef.current = view; // 同步 ref
    const id = requestAnimationFrame(() => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) drawMandelbrot(ctx, view, maxIter);
    });
    return () => cancelAnimationFrame(id);
  }, [view, maxIter]);

  // ── 滾輪縮放：以游標所在的複數座標為固定點縮放 ────────────────────────
  // 數學推導：設游標對應複數 m = cx + (px - half) * scale
  //   縮放後 m 不變：newCx = m - (px - half) * newScale
  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = SIZE / rect.width; // DPR / CSS scaling 補正
      const scaleY = SIZE / rect.height;
      const px = (e.clientX - rect.left) * scaleX;
      const py = (e.clientY - rect.top) * scaleY;
      const v = viewRef.current;
      const half = SIZE / 2;
      const mx = v.cx + (px - half) * v.scale; // cursor → complex
      const my = v.cy + (py - half) * v.scale;
      const factor = e.deltaY < 0 ? 0.5 : 2.0; // scroll up = zoom in
      const newScale = v.scale * factor;
      startTransition(() =>
        setView({
          cx: mx - (px - half) * newScale,
          cy: my - (py - half) * newScale,
          scale: newScale,
        }),
      );
    },
    [startTransition],
  );

  // passive: false 必要，才能 preventDefault 阻止頁面滾動
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // ── 點擊放大：以點擊位置為中心縮小 scale 至 ×2 ────────────────────────
  const handleClick = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const px = (e.clientX - rect.left) * (SIZE / rect.width);
      const py = (e.clientY - rect.top) * (SIZE / rect.height);
      const v = viewRef.current;
      const half = SIZE / 2;
      const mx = v.cx + (px - half) * v.scale;
      const my = v.cy + (py - half) * v.scale;
      const newScale = v.scale * 0.5;
      startTransition(() =>
        setView({
          cx: mx - (px - half) * newScale,
          cy: my - (py - half) * newScale,
          scale: newScale,
        }),
      );
    },
    [startTransition],
  );

  const handleReset = useCallback(
    () => startTransition(() => setView(INITIAL_VIEW)),
    [startTransition],
  );

  // ── 格式化縮放倍率顯示 ────────────────────────────────────────────────
  function fmtZoom(z) {
    if (z >= 1e9) return `${(z / 1e9).toFixed(2)} G×`;
    if (z >= 1e6) return `${(z / 1e6).toFixed(2)} M×`;
    if (z >= 1e3) return `${(z / 1e3).toFixed(2)} K×`;
    return `${z.toFixed(2)}×`;
  }

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
              <div className="title">曼德博集合</div>
              <div className="subtitle">碎形探索器 · 滾輪縮放 · 點擊放大</div>
            </div>
            <div
              className="chip"
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                background: isPending
                  ? "rgba(255, 160, 30, 0.15)"
                  : "rgba(3, 200, 100, 0.12)",
                color: isPending
                  ? "rgba(180, 100, 0, 0.9)"
                  : "rgba(0, 145, 60, 0.9)",
                border: isPending
                  ? "1px solid rgba(255, 160, 30, 0.35)"
                  : "1px solid rgba(3, 200, 100, 0.3)",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              {isPending ? "⏳ 渲染中" : "✓ 就緒"}
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
              onClick={handleClick}
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

          {/* ─── 視角資訊 ───────────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">視角資訊</div>
            <div className="grid2">
              <div className="mini">
                <div className="label">縮放倍率</div>
                <div className="value" style={{ fontSize: 20 }}>
                  {fmtZoom(zoomLevel)}
                </div>
              </div>
              <div className="mini">
                <div className="label">迭代深度</div>
                <div className="value" style={{ fontSize: 20 }}>
                  {maxIter}
                </div>
              </div>
              <div className="mini">
                <div className="label">中心 Re（實部）</div>
                <div
                  className="value"
                  style={{ fontSize: 13, fontVariantNumeric: "tabular-nums" }}
                >
                  {view.cx.toFixed(8)}
                </div>
              </div>
              <div className="mini">
                <div className="label">中心 Im（虛部）</div>
                <div
                  className="value"
                  style={{ fontSize: 13, fontVariantNumeric: "tabular-nums" }}
                >
                  {view.cy.toFixed(8)}
                </div>
              </div>
            </div>
          </section>

          {/* ─── 迭代深度控制 ───────────────────────────────────────────── */}
          <section className="card">
            <div className="sectionTitle">迭代深度（Max Iterations）</div>
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">越高越精細，渲染越久</div>
                <div className="chip">{maxIter}</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[64, 128, 256, 512].map((n) => (
                  <button
                    key={n}
                    className={`btn ${maxIter === n ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 4px", fontSize: 13 }}
                    onClick={() => startTransition(() => setMaxIter(n))}
                    disabled={isPending}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ─── 操作說明 ───────────────────────────────────────────────── */}
          <section className="card">
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 18,
                background: "rgba(255, 255, 255, 0.55)",
                border: "1px solid rgba(255, 255, 255, 0.75)",
                fontSize: 12,
                color: "rgba(16, 16, 22, 0.65)",
                lineHeight: 1.9,
              }}
            >
              🖱 <strong>滾輪</strong>：以游標為中心縮放（×2 / ÷2）
              <br />
              🖱 <strong>點擊</strong>：以點擊位置為中心放大 2×
              <br />
              📐 <strong>原理</strong>：對每 pixel 映射複數 c，迭代 z → z² +
              c，用逃逸速度著色
              <br />
              🎨 <strong>著色</strong>：平滑著色（smooth
              coloring）消除等高線色帶
            </div>
          </section>

          <div className="spacer" />
        </main>

        {/* ─── 底部按鈕列 ─────────────────────────────────────────────── */}
        <div className="bottomBar">
          <button
            className="btn ghost"
            onClick={handleReset}
            disabled={isPending}
          >
            重設視角
          </button>
        </div>
      </div>
    </div>
  );
}
