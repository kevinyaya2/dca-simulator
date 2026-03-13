import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ── 常數 ──────────────────────────────────────────────
const EPS = 1e-12;

const RANK_TYPE_OPTIONS = [
  { label: "白金 / 鑽石段（4 勝升段）", value: 4, isHighest: false },
  { label: "大師段（5 勝升段）", value: 5, isHighest: true },
];

const SUBTIER_OPTIONS = [
  { label: "V", value: 0 },
  { label: "IV", value: 1 },
  { label: "III", value: 2 },
  { label: "II", value: 3 },
  { label: "I", value: 4 },
];

// ── 數學工具 ──────────────────────────────────────────
function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

/** Gauss-Jordan 消去法，回傳解向量或 null */
function solveLinear(matrix, vector) {
  const n = matrix.length;
  const a = matrix.map((r) => [...r]);
  const b = [...vector];

  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let row = col + 1; row < n; row++) {
      if (Math.abs(a[row][col]) > Math.abs(a[pivot][col])) pivot = row;
    }
    if (Math.abs(a[pivot][col]) < EPS) return null;

    [a[col], a[pivot]] = [a[pivot], a[col]];
    [b[col], b[pivot]] = [b[pivot], b[col]];

    const piv = a[col][col];
    for (let j = col; j < n; j++) a[col][j] /= piv;
    b[col] /= piv;

    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const f = a[row][col];
      if (Math.abs(f) < EPS) continue;
      for (let j = col; j < n; j++) a[row][j] -= f * a[col][j];
      b[row] -= f * b[col];
    }
  }
  return b;
}

/** 馬丁格爾函數 M(n)，用於計算升段機率 */
function makeMartingale(p) {
  return (n) => {
    if (n >= 0) {
      if (p === 0.5) return n;
      const factor = p / (2 * p - 1);
      return factor * (1 - ((1 - p) / p) ** n);
    }
    return 1 - (1 - p) ** n;
  };
}

/**
 * 非 V 段（IV-I）：用線性方程組求期望場數
 * 狀態範圍 -2 ~ k-1，到達 k 即升段，-3 即降段
 */
function calcNonFloorExpected(p, k, start) {
  const q = 1 - p;
  const states = [];
  for (let s = -2; s <= k - 1; s++) states.push(s);
  const size = states.length;
  const mat = Array.from({ length: size }, () => Array(size).fill(0));
  const vec = Array(size).fill(1);

  for (let i = 0; i < size; i++) {
    const s = states[i];
    mat[i][i] = 1;
    const winNext = s < 0 ? 1 : s + 1;
    if (winNext >= -2 && winNext <= k - 1) mat[i][winNext + 2] -= p;
    const loseNext = s - 1;
    if (loseNext >= -2 && loseNext <= k - 1) mat[i][loseNext + 2] -= q;
  }

  const sol = solveLinear(mat, vec);
  return sol ? (sol[start + 2] ?? Infinity) : Infinity;
}

/** 非 V 段（IV-I）的完整統計 */
function calcSegmentStats(p, k, netWins) {
  p = clamp(p, 0, 1);
  if (p <= 0) return { expected: netWins >= -2 ? 3 + netWins : 0, upProb: 0 };
  if (p >= 1) {
    if (netWins >= k) return { expected: 0, upProb: 1 };
    if (netWins < 0) return { expected: k, upProb: 1 };
    return { expected: k - netWins, upProb: 1 };
  }

  const M = makeMartingale(p);
  const upProb = clamp((M(netWins) - M(-3)) / (M(k) - M(-3)), 0, 1);
  const expected = Math.max(calcNonFloorExpected(p, k, netWins), 0);
  return { expected, upProb };
}

/** V 段（有保底不降段）的完整統計 */
function calcVFloorStats(p, k, netWins) {
  p = clamp(p, 0, 1);
  const q = 1 - p;
  const target = k;
  const start = Math.floor(clamp(netWins, 0, target - 1));

  if (p <= 0) return { expected: Infinity, upProb: 0 };
  if (p >= 1) return { expected: target - start, upProb: 1 };

  const size = target;
  const mat = Array.from({ length: size }, () => Array(size).fill(0));
  const vec = Array(size).fill(1);

  for (let i = 0; i < size; i++) {
    if (i === 0) {
      mat[0][0] = p;
      if (size > 1) mat[0][1] = -p;
      continue;
    }
    mat[i][i] = 1;
    mat[i][i - 1] = -q;
    if (i + 1 < size) mat[i][i + 1] = -p;
  }

  const sol = solveLinear(mat, vec);
  return { expected: sol ? (sol[start] ?? Infinity) : Infinity, upProb: 1 };
}

/** 從當前位置到本大段 I 的期望場數 */
function calcToTierI(curTier, curStats, baseStats, vFloorBase) {
  if (curTier === 4) return 0;
  if (baseStats.upProb <= EPS) return Infinity;

  const size = 4; // V, IV, III, II
  const mat = Array.from({ length: size }, () => Array(size).fill(0));
  const vec = Array(size).fill(0);

  for (let t = 0; t < size; t++) {
    const s = t === curTier ? curStats : t === 0 ? vFloorBase : baseStats;
    vec[t] = s.expected;
    if (t === 0) {
      mat[0][0] = s.upProb;
      mat[0][1] = -s.upProb;
      continue;
    }
    mat[t][t] = 1;
    mat[t][t - 1] = -(1 - s.upProb);
    if (t + 1 < size) mat[t][t + 1] = -s.upProb;
  }

  const sol = solveLinear(mat, vec);
  return sol ? (sol[curTier] ?? Infinity) : Infinity;
}

/** 從當前位置到下一大段 V 的期望場數 */
function calcToNextBigTierV(curTier, curStats, baseStats, vFloorBase) {
  if (baseStats.upProb <= EPS) return Infinity;

  const size = 5; // V, IV, III, II, I
  const mat = Array.from({ length: size }, () => Array(size).fill(0));
  const vec = Array(size).fill(0);

  for (let t = 0; t < size; t++) {
    const s = t === curTier ? curStats : t === 0 ? vFloorBase : baseStats;
    vec[t] = s.expected;
    if (t === 0) {
      mat[0][0] = s.upProb;
      mat[0][1] = -s.upProb;
      continue;
    }
    mat[t][t] = 1;
    mat[t][t - 1] = -(1 - s.upProb);
    if (t < 4) mat[t][t + 1] = -s.upProb;
  }

  const sol = solveLinear(mat, vec);
  return sol ? (sol[curTier] ?? Infinity) : Infinity;
}

/** 彙整所有計算結果 */
function runCalculation(p, k, netWins, tier) {
  const curStats =
    tier === 0
      ? calcVFloorStats(p, k, netWins)
      : calcSegmentStats(p, k, netWins);
  const baseStats = calcSegmentStats(p, k, 0);
  const vFloorBase = calcVFloorStats(p, k, 0);

  return {
    leaveExpected: curStats.expected,
    upProb: curStats.upProb,
    toTierI: calcToTierI(tier, curStats, baseStats, vFloorBase),
    toNextBigV: calcToNextBigTierV(tier, curStats, baseStats, vFloorBase),
  };
}

// ── 格式化 ────────────────────────────────────────────
function fmtMatches(v) {
  return Number.isFinite(v) ? v.toFixed(2) : "∞";
}
function fmtPercent(v) {
  return Number.isFinite(v) ? `${(v * 100).toFixed(2)}%` : "∞";
}

// ── 元件 ──────────────────────────────────────────────
export default function MDCalculator() {
  const navigate = useNavigate();

  const [rankType, setRankType] = useState(4);
  const [subtier, setSubtier] = useState(0);
  const [netWins, setNetWins] = useState(0);
  const [winRate, setWinRate] = useState(55);
  const [results, setResults] = useState(null);
  const [snapshot, setSnapshot] = useState(null);
  const [toast, setToast] = useState("");

  const minNet = subtier === 0 ? 0 : -2;
  const maxNet = rankType - 1;

  const netWinHint =
    subtier === 0 ? `範圍 0 ~ ${maxNet}` : `範圍 -2 ~ ${maxNet}`;

  const winRatePct = useMemo(() => {
    const v = clamp(winRate, 0, 100);
    return `${v}%`;
  }, [winRate]);

  function handleRankTypeChange(val) {
    setRankType(val);
    setNetWins((prev) =>
      clamp(Math.trunc(Number(prev)), subtier === 0 ? 0 : -2, val - 1),
    );
  }

  function handleSubtierChange(val) {
    setSubtier(val);
    const newMin = val === 0 ? 0 : -2;
    setNetWins((prev) => clamp(Math.trunc(Number(prev)), newMin, maxNet));
  }

  function handleNetWinsChange(raw) {
    const n = Math.trunc(Number(raw));
    if (!Number.isFinite(n)) return;
    setNetWins(clamp(n, minNet, maxNet));
  }

  function showToast(msg) {
    setToast(msg);
    window.setTimeout(() => setToast(""), 1800);
  }

  function handleCalculate() {
    const p = clamp(winRate / 100, 0, 1);
    const res = runCalculation(p, rankType, netWins, subtier);
    const rankConfig = RANK_TYPE_OPTIONS.find((o) => o.value === rankType);
    const tierLabel =
      SUBTIER_OPTIONS.find((o) => o.value === subtier)?.label ?? "-";
    setResults(res);
    setSnapshot({
      rankType,
      tierLabel,
      winRate,
      isHighest: rankConfig?.isHighest ?? false,
    });
    showToast("計算完成 ✓");
  }

  function handleReset() {
    setRankType(4);
    setSubtier(0);
    setNetWins(0);
    setWinRate(55);
    setResults(null);
    setSnapshot(null);
    showToast("已重設");
  }

  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">MD 段位計算器</div>
              <div className="subtitle">
                Yu-Gi-Oh! Master Duel｜升降段期望&nbsp;&amp;&nbsp;機率試算
              </div>
            </div>
            {toast && <div className="toast">{toast}</div>}
          </div>
        </header>

        <main className="content">
          {/* ─── 結果卡 ─── */}
          {results && snapshot ? (
            <section className="card hero">
              <div className="heroRow">
                <div>
                  <div className="label">離開當前小段（期望）</div>
                  <div className="big">
                    {fmtMatches(results.leaveExpected)}
                    <span
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 4 }}
                    >
                      局
                    </span>
                  </div>
                </div>
                <div className="pill">
                  <div className="pillTop">升段機率</div>
                  <div className="pillBottom">{fmtPercent(results.upProb)}</div>
                </div>
              </div>

              <div className="grid2" style={{ marginTop: 14 }}>
                <div className="mini">
                  <div className="label">到本大段 I（期望）</div>
                  <div className="value">
                    {fmtMatches(results.toTierI)}
                    <span style={{ fontSize: 13, marginLeft: 3 }}>局</span>
                  </div>
                  <div className="hint">
                    從當前小段 {snapshot.tierLabel} 出發
                  </div>
                </div>
                <div className="mini">
                  <div className="label">到下一大段 V（期望）</div>
                  <div className="value">
                    {snapshot.isHighest
                      ? "最高段位"
                      : `${fmtMatches(results.toNextBigV)} 局`}
                  </div>
                  <div className="hint">
                    K = {snapshot.rankType}｜勝率 {snapshot.winRate.toFixed(1)}%
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section
              className="card hero"
              style={{ textAlign: "center", padding: "28px 18px" }}
            >
              <div style={{ fontSize: 36 }}>🎴</div>
              <div className="label" style={{ marginTop: 10, fontSize: 13 }}>
                輸入參數後點擊「開始計算」
              </div>
            </section>
          )}

          {/* ─── 參數設定 ─── */}
          <section className="card">
            <div className="sectionTitle">參數設定</div>

            {/* 大段類型 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">大段類型</div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {RANK_TYPE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    className={`btn ${rankType === opt.value ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 8px", fontSize: 13 }}
                    onClick={() => handleRankTypeChange(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 當前小段 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">當前小段</div>
                <div className="chip">
                  {SUBTIER_OPTIONS.find((o) => o.value === subtier)?.label}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {SUBTIER_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    className={`btn ${subtier === opt.value ? "solid" : "ghost"}`}
                    style={{ flex: 1, padding: "10px 4px", fontSize: 14 }}
                    onClick={() => handleSubtierChange(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 當前勝場數 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">當前勝場數（淨）</div>
                <div className="chip">{netWins}</div>
              </div>
              <input
                className="range"
                type="range"
                min={minNet}
                max={maxNet}
                step={1}
                value={netWins}
                onChange={(e) => handleNetWinsChange(e.target.value)}
                style={{
                  "--p": `${((netWins - minNet) / (maxNet - minNet)) * 100}%`,
                }}
              />
              <input
                className="input"
                type="number"
                value={netWins}
                min={minNet}
                max={maxNet}
                onChange={(e) => handleNetWinsChange(e.target.value)}
              />
              <div className="hint" style={{ marginTop: 6, fontSize: 12 }}>
                {netWinHint}
                {subtier !== 0 && "　（負值代表當前失敗扣分）"}
              </div>
            </div>

            {/* 平均勝率 */}
            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">平均勝率</div>
                <div className="chip">{winRate.toFixed(1)}%</div>
              </div>
              <input
                className="range"
                type="range"
                min={0}
                max={100}
                step={0.5}
                value={winRate}
                onChange={(e) => setWinRate(Number(e.target.value))}
                style={{ "--p": winRatePct }}
              />
              <input
                className="input"
                type="number"
                value={winRate}
                min={0}
                max={100}
                step={0.1}
                onChange={(e) =>
                  setWinRate(clamp(Number(e.target.value), 0, 100))
                }
              />
            </div>
          </section>

          <div className="spacer" />
        </main>

        {/* ─── 底部按鈕列 ─── */}
        <div className="bottomBar">
          <button className="btn ghost" onClick={handleReset}>
            重設
          </button>
          <button className="btn solid" onClick={handleCalculate}>
            開始計算
          </button>
        </div>
      </div>
    </div>
  );
}
