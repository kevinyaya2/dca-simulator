import { useCallback, useEffect, useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useNavigate } from "react-router-dom";
import { fetchTwseStock, isValidTwseCode } from "../services/twseMarket";

const PRESETS = [
  { code: "2330", label: "台積電" },
  { code: "0050", label: "元大台灣50" },
  { code: "0056", label: "元大高股息" },
];

const numberFormatter = new Intl.NumberFormat("zh-TW");
const moneyFormatter = new Intl.NumberFormat("zh-TW", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function formatNumber(value) {
  return value === null || value === undefined ? "--" : numberFormatter.format(value);
}

function formatPrice(value) {
  return value === null || value === undefined ? "--" : moneyFormatter.format(value);
}

function formatCompact(value) {
  if (value === null || value === undefined) return "--";
  if (Math.abs(value) >= 100000000) return `${(value / 100000000).toFixed(1)} 億`;
  if (Math.abs(value) >= 10000) return `${(value / 10000).toFixed(1)} 萬`;
  return formatNumber(value);
}

function formatDate(value) {
  if (!value) return "--";
  return new Intl.DateTimeFormat("zh-TW", { month: "numeric", day: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function StockTooltip({ active, payload }) {
  if (!active || !payload?.[0]?.payload) return null;
  const point = payload[0].payload;
  return (
    <div className="stockChartTooltip">
      <strong>{formatDate(point.date)}</strong>
      <div><span>收盤</span><b>{formatPrice(point.close)}</b></div>
      <div><span>成交量</span><b>{formatCompact(point.volume)} 股</b></div>
    </div>
  );
}

export default function Stock() {
  const navigate = useNavigate();
  const [input, setInput] = useState("2330");
  const [stock, setStock] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  const loadStock = useCallback(async (code) => {
    const normalizedCode = String(code).trim();
    if (!isValidTwseCode(normalizedCode)) {
      setStatus("error");
      setMessage("請輸入 4 至 6 碼的上市股票或 ETF 代碼。");
      return;
    }

    setStatus("loading");
    setMessage("");
    setStock(null);
    try {
      const nextStock = await fetchTwseStock(normalizedCode);
      setStock(nextStock);
      setInput(normalizedCode);
      setStatus("ready");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "資料載入失敗，請稍後再試。");
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchTwseStock("2330")
      .then((nextStock) => {
        if (!cancelled) {
          setStock(nextStock);
          setStatus("ready");
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "資料載入失敗，請稍後再試。");
        }
      });
    return () => { cancelled = true; };
  }, []);

  const changePercent = useMemo(() => {
    if (stock?.close == null || stock?.change == null) return null;
    const previousClose = stock.close - stock.change;
    return previousClose ? (stock.change / previousClose) * 100 : null;
  }, [stock]);
  const isUp = (stock?.change ?? 0) > 0;
  const isDown = (stock?.change ?? 0) < 0;
  const changeClass = isUp ? "up" : isDown ? "down" : "flat";

  const submit = (event) => {
    event.preventDefault();
    loadStock(input);
  };

  return (
    <div className="oneui stockPage">
      <div className="shell stockShell">
        <header className="top stockTop">
          <button className="backBtn" type="button" onClick={() => navigate("/")}>← 返回</button>
          <div className="stockTitleRow">
            <div><h1 className="title">台股行情</h1><p className="subtitle">上市股票與 ETF｜官方收盤資料</p></div>
            {stock?.date && <div className="stockDateBadge">資料日 {stock.date}</div>}
          </div>
        </header>

        <main className="content stockContent">
          <section className="card stockSearchCard">
            <form className="stockSearchForm" onSubmit={submit}>
              <label htmlFor="stock-code">股票代碼</label>
              <div className="stockSearchRow">
                <input id="stock-code" className="input stockSearchInput" inputMode="numeric" maxLength="6" value={input} onChange={(event) => setInput(event.target.value.replace(/\D/g, ""))} placeholder="例如 2330" />
                <button className="stockSearchButton" type="submit" disabled={status === "loading"}>{status === "loading" ? "載入中" : "查詢"}</button>
              </div>
            </form>
            <div className="stockPresetRow" aria-label="常用標的">
              {PRESETS.map((preset) => <button key={preset.code} type="button" className="stockPreset" onClick={() => loadStock(preset.code)}>{preset.code} {preset.label}</button>)}
            </div>
          </section>

          {status === "loading" && <section className="card stockStateCard"><div className="stockSkeleton stockSkeletonWide" /><div className="stockSkeleton" /><div className="stockSkeleton" /></section>}
          {status === "error" && <section className="card stockStateCard"><div className="sectionTitle">暫時無法載入</div><p className="hint">{message}</p><button className="btn solid stockRetryButton" type="button" onClick={() => loadStock(input)}>重新嘗試</button></section>}

          {status === "ready" && stock && <>
            <section className="card stockHero">
              <div className="stockIdentity"><span>{stock.code}</span><h2>{stock.name}</h2></div>
              <div className="stockPriceRow"><div className="big stockPrice">{formatPrice(stock.close)}</div><div className={`stockChange ${changeClass}`}><strong>{isUp ? "+" : ""}{formatPrice(stock.change)}</strong><span>{changePercent === null ? "--" : `${isUp ? "+" : ""}${changePercent.toFixed(2)}%`}</span></div></div>
              <p className="stockCloseHint">最近收盤價 · {stock.date}</p>
            </section>

            <section className="card">
              <div className="sectionTitle">當日交易資訊</div>
              <div className="stockStatGrid">
                {[['開盤', formatPrice(stock.open)], ['最高', formatPrice(stock.high)], ['最低', formatPrice(stock.low)], ['成交量', `${formatCompact(stock.volume)} 股`], ['成交值', `${formatCompact(stock.value)} 元`], ['成交筆數', formatNumber(stock.transactions)]].map(([label, value]) => <div className="stockStat" key={label}><span>{label}</span><strong>{value}</strong></div>)}
              </div>
            </section>

            <section className="card stockChartCard">
              <div className="stockChartHeader"><div><div className="sectionTitle">近一個月收盤走勢</div><p className="hint">滑過曲線查看每日收盤與成交量</p></div><button className="stockRefresh" type="button" onClick={() => loadStock(stock.code)}>更新</button></div>
              {stock.history.length ? <div className="stockChartWrap"><ResponsiveContainer width="100%" height={260}><AreaChart data={stock.history} margin={{ top: 12, right: 10, left: -10, bottom: 2 }}><defs><linearGradient id="stockArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#3d8cff" stopOpacity={0.38} /><stop offset="100%" stopColor="#3d8cff" stopOpacity={0.02} /></linearGradient></defs><CartesianGrid stroke="rgba(16,16,22,0.1)" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="date" tickFormatter={formatDate} minTickGap={28} tick={{ fontSize: 11, fill: "rgba(16,16,22,0.58)" }} axisLine={false} tickLine={false} /><YAxis dataKey="close" domain={["dataMin - 1", "dataMax + 1"]} tickFormatter={(value) => formatPrice(value)} width={56} tick={{ fontSize: 11, fill: "rgba(16,16,22,0.58)" }} axisLine={false} tickLine={false} /><Tooltip content={<StockTooltip />} /><Area type="monotone" dataKey="close" stroke="#2f8dff" strokeWidth={3} fill="url(#stockArea)" activeDot={{ r: 5, fill: "#2f8dff", strokeWidth: 0 }} /></AreaChart></ResponsiveContainer></div> : <div className="stockNoChart">此標的暫無可用的月線資料。</div>}
            </section>
            <p className="stockDisclaimer">資料來源：臺灣證券交易所公開資料。行情為收盤／延遲資訊，僅供資訊參考，非投資建議。</p>
          </>}
        </main>
      </div>
    </div>
  );
}
