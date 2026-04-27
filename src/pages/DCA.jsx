import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useNavigate } from "react-router-dom";

const fmtMoney = (n) =>
  new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function calcFV({ principal, monthly, ratePct, years }) {
  const months = Math.max(0, Math.round(years * 12));
  const r = ratePct / 100 / 12;

  // 月末投入（一般定期定額常見假設）
  if (r === 0) {
    const fv0 = principal + monthly * months;
    return { fv: fv0, months };
  }

  const pow = Math.pow(1 + r, months);
  const fv = principal * pow + monthly * ((pow - 1) / r); // 月末投入，不再乘(1+r)

  return { fv, months };
}

function buildTrajectory({ principal, monthly, ratePct, years }) {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = ratePct / 100 / 12;

  let totalAsset = principal;
  const rows = [
    {
      month: 0,
      year: 0,
      totalAsset,
      totalInvest: principal,
      profit: totalAsset - principal,
      roiPct: principal > 0 ? ((totalAsset - principal) / principal) * 100 : 0,
    },
  ];

  for (let month = 1; month <= months; month += 1) {
    totalAsset = totalAsset * (1 + monthlyRate) + monthly;
    const totalInvest = principal + monthly * month;
    const profit = totalAsset - totalInvest;
    const roiPct = totalInvest > 0 ? (profit / totalInvest) * 100 : 0;

    rows.push({
      month,
      year: month / 12,
      totalAsset,
      totalInvest,
      profit,
      roiPct,
    });
  }

  return rows;
}

function fmtAxisMoney(value) {
  if (Math.abs(value) >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (Math.abs(value) >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return `${Math.round(value)}`;
}

function DcaTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const point = payload[0]?.payload;
  if (!point) return null;

  return (
    <div className="dcaChartTooltip">
      <div className="dcaChartTooltipTitle">第 {point.month} 個月</div>
      <div className="dcaChartTooltipRow">
        <span>總資產</span>
        <strong>{fmtMoney(point.totalAsset)}</strong>
      </div>
      <div className="dcaChartTooltipRow">
        <span>總投入</span>
        <strong>{fmtMoney(point.totalInvest)}</strong>
      </div>
      <div className="dcaChartTooltipRow">
        <span>累積獲利</span>
        <strong className={point.profit >= 0 ? "pos" : "neg"}>
          {fmtMoney(point.profit)}
        </strong>
      </div>
      <div className="dcaChartTooltipRow">
        <span>報酬率</span>
        <strong className={point.roiPct >= 0 ? "pos" : "neg"}>
          {point.roiPct.toFixed(2)}%
        </strong>
      </div>
    </div>
  );
}

export default function DCA() {
  const navigate = useNavigate();
  const [monthly, setMonthly] = useState(10000); // 每月投入
  const [rate, setRate] = useState(6); // 年化報酬率 %
  const [years, setYears] = useState(10); // 投資年數
  const [principal, setPrincipal] = useState(0); // 起始本金
  const [toast, setToast] = useState("");

  const result = useMemo(() => {
    const safeMonthly = clamp(Number(monthly) || 0, 0, 50000);
    const safeRate = clamp(Number(rate) || 0, 0, 30);
    const safeYears = clamp(Number(years) || 0, 0, 50);
    const safePrincipal = clamp(Number(principal) || 0, 0, 999999999);

    const { fv, months } = calcFV({
      principal: safePrincipal,
      monthly: safeMonthly,
      ratePct: safeRate,
      years: safeYears,
    });

    const totalInvest = safePrincipal + safeMonthly * months;
    const profit = fv - totalInvest;
    const roi = totalInvest > 0 ? profit / totalInvest : 0;

    return {
      fv,
      months,
      totalInvest,
      profit,
      roi,
      safeMonthly,
      safeRate,
      safeYears,
      safePrincipal,
    };
  }, [monthly, rate, years, principal]);

  const pMonthly = useMemo(() => {
    const min = 0,
      max = 50000;
    const v = clamp(result.safeMonthly, min, max);
    return `${((v - min) / (max - min)) * 100}%`;
  }, [result.safeMonthly]);

  const pRate = useMemo(() => {
    const min = 0,
      max = 12;
    const v = clamp(result.safeRate, min, max);
    return `${((v - min) / (max - min)) * 100}%`;
  }, [result.safeRate]);

  const pYears = useMemo(() => {
    const min = 1,
      max = 50;
    const v = clamp(result.safeYears || 1, min, max);
    return `${((v - min) / (max - min)) * 100}%`;
  }, [result.safeYears]);

  const trajectory = useMemo(
    () =>
      buildTrajectory({
        principal: result.safePrincipal,
        monthly: result.safeMonthly,
        ratePct: result.safeRate,
        years: result.safeYears,
      }),
    [result.safePrincipal, result.safeMonthly, result.safeRate, result.safeYears],
  );

  function resetAll() {
    setMonthly(10000);
    setRate(6);
    setYears(10);
    setPrincipal(0);
    setToast("已重設參數");
    window.setTimeout(() => setToast(""), 1600);
  }

  async function copyResult() {
    const text =
      `定期定額模擬結果\n` +
      `起始本金：${fmtMoney(result.safePrincipal)}\n` +
      `每月投入：${fmtMoney(result.safeMonthly)}\n` +
      `年化報酬率：${result.safeRate}%\n` +
      `投資年數：${result.safeYears} 年（${result.months} 個月）\n` +
      `\n總投入：${fmtMoney(result.totalInvest)}\n` +
      `期末資產：${fmtMoney(result.fv)}\n` +
      `預估獲利：${fmtMoney(result.profit)}（${(result.roi * 100).toFixed(
        1,
      )}%）`;

    try {
      await navigator.clipboard.writeText(text);
      setToast("已複製結果到剪貼簿");
    } catch {
      setToast("複製失敗（瀏覽器權限）");
    } finally {
      window.setTimeout(() => setToast(""), 1600);
    }
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
              <div className="title">定期定額模擬器</div>
              <div className="subtitle">
                One UI 風格｜彩色進度條｜月末投入假設
              </div>
            </div>

            {toast ? <div className="toast">{toast}</div> : null}
          </div>
        </header>

        <main className="content">
          {/* 結果卡 */}
          <section className="card hero">
            <div className="heroRow">
              <div>
                <div className="label">期末資產（預估）</div>
                <div className="big">{fmtMoney(result.fv)}</div>
              </div>

              <div className="pill">
                <div className="pillTop">總投入</div>
                <div className="pillBottom">{fmtMoney(result.totalInvest)}</div>
              </div>
            </div>

            <div className="grid2">
              <div className="mini">
                <div className="label">預估獲利</div>
                <div className={`value ${result.profit >= 0 ? "pos" : "neg"}`}>
                  {fmtMoney(result.profit)}
                </div>
                <div className="hint">
                  報酬率約 {(result.roi * 100).toFixed(1)}%
                </div>
              </div>

              <div className="mini">
                <div className="label">投入期間</div>
                <div className="value">{result.safeYears} 年</div>
                <div className="hint">{result.months} 個月</div>
              </div>
            </div>
          </section>

          {/* 參數設定 */}
          <section className="card">
            <div className="sectionTitle">資產波動（互動圖）</div>
            <div className="dcaChartWrap">
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={trajectory} margin={{ top: 10, right: 14, left: 2, bottom: 2 }}>
                  <CartesianGrid stroke="rgba(16,16,22,0.12)" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(16,16,22,0.52)"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(value) => `${Math.round(value / 12)}y`}
                    minTickGap={22}
                  />
                  <YAxis
                    stroke="rgba(16,16,22,0.52)"
                    tick={{ fontSize: 11 }}
                    tickFormatter={fmtAxisMoney}
                    width={52}
                  />
                  <Tooltip content={<DcaTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="totalAsset"
                    stroke="#2f8dff"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 5, strokeWidth: 0, fill: "#2f8dff" }}
                    name="totalAsset"
                  />
                  <Line
                    type="monotone"
                    dataKey="totalInvest"
                    stroke="#ff9f4d"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0, fill: "#ff9f4d" }}
                    name="totalInvest"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="hint">
              滑過曲線可查看每個月份的資產、投入、獲利與報酬率細節。
            </div>
          </section>

          <section className="card">
            <div className="sectionTitle">參數設定</div>

            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">每月投入</div>
                <div className="chip">
                  {fmtMoney(result.safeMonthly).replace("NT$", "NT$ ")}
                </div>
              </div>
              <input
                className="range"
                type="range"
                min="0"
                max="50000"
                step="500"
                value={result.safeMonthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                style={{ "--p": pMonthly }}
              />
              <input
                className="input"
                type="number"
                value={result.safeMonthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                placeholder="例如 10000"
              />
            </div>

            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">年化報酬率</div>
                <div className="chip">{result.safeRate}%</div>
              </div>
              <input
                className="range"
                type="range"
                min="0"
                max="12"
                step="0.5"
                value={result.safeRate}
                onChange={(e) => setRate(Number(e.target.value))}
                style={{ "--p": pRate }}
              />
              <input
                className="input"
                type="number"
                value={result.safeRate}
                onChange={(e) => setRate(Number(e.target.value))}
                placeholder="例如 6"
              />
            </div>

            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">投資年數</div>
                <div className="chip">{result.safeYears} 年</div>
              </div>
              <input
                className="range"
                type="range"
                min="1"
                max="50"
                step="1"
                value={result.safeYears}
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ "--p": pYears }}
              />
              <input
                className="input"
                type="number"
                value={result.safeYears}
                onChange={(e) => setYears(Number(e.target.value))}
                placeholder="例如 10"
              />
            </div>

            <div className="field">
              <div className="fieldTop">
                <div className="fieldLabel">起始本金（可選）</div>
                <div className="chip">
                  {fmtMoney(result.safePrincipal).replace("NT$", "NT$ ")}
                </div>
              </div>
              <input
                className="input"
                type="number"
                value={result.safePrincipal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                placeholder="例如 0 或 50000"
              />
              <div className="hint">
                例：你已經先買一筆 0050，就把那筆金額填進來。
              </div>
            </div>
          </section>

          <div className="spacer" />
        </main>

        <footer className="bottomBar">
          <button className="btn ghost" onClick={resetAll}>
            重設
          </button>
          <button className="btn solid" onClick={copyResult}>
            複製結果
          </button>
        </footer>
      </div>
    </div>
  );
}
