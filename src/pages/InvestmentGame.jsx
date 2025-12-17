import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_CASH = 100000;
const MARKET_EVENTS = [
  { id: "boom", name: "大漲", desc: "市場情緒高漲", conservative: 0.08, growth: 0.25 },
  { id: "up", name: "小漲", desc: "市場穩定上揚", conservative: 0.05, growth: 0.12 },
  { id: "flat", name: "盤整", desc: "市場橫向整理", conservative: 0.02, growth: 0.0 },
  { id: "down", name: "小跌", desc: "市場修正", conservative: -0.03, growth: -0.10 },
  { id: "crash", name: "大跌", desc: "市場恐慌", conservative: -0.05, growth: -0.20 },
];

function getRandomEvent() {
  return MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
}

const fmtMoney = (n) =>
  new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export default function InvestmentGame() {
  const navigate = useNavigate();
  const [year, setYear] = useState(1);
  const [cash, setCash] = useState(INITIAL_CASH);
  const [conservativeAsset, setConservativeAsset] = useState(0);
  const [growthAsset, setGrowthAsset] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [history, setHistory] = useState([]);
  const [gameState, setGameState] = useState("setup"); // setup, playing, ended
  const [toast, setToast] = useState("");

  const totalAsset = useMemo(() => {
    return cash + conservativeAsset + growthAsset;
  }, [cash, conservativeAsset, growthAsset]);

  const profit = useMemo(() => {
    return totalAsset - INITIAL_CASH;
  }, [totalAsset]);

  const roi = useMemo(() => {
    return ((totalAsset - INITIAL_CASH) / INITIAL_CASH) * 100;
  }, [totalAsset]);

  function startGame() {
    setGameState("playing");
    const event = getRandomEvent();
    setCurrentEvent(event);
  }

  function resetGame() {
    setYear(1);
    setCash(INITIAL_CASH);
    setConservativeAsset(0);
    setGrowthAsset(0);
    setCurrentEvent(null);
    setHistory([]);
    setGameState("setup");
    setToast("遊戲已重置");
    setTimeout(() => setToast(""), 1600);
  }

  function invest(type, amount) {
    if (amount > cash) {
      setToast("現金不足");
      setTimeout(() => setToast(""), 1600);
      return;
    }

    if (type === "conservative") {
      setConservativeAsset((prev) => prev + amount);
    } else if (type === "growth") {
      setGrowthAsset((prev) => prev + amount);
    }
    setCash((prev) => prev - amount);
    setToast(`已投資 ${fmtMoney(amount)}`);
    setTimeout(() => setToast(""), 1600);
  }

  function nextYear() {
    if (!currentEvent) return;

    // 計算資產變動
    const conservativeChange = conservativeAsset * currentEvent.conservative;
    const growthChange = growthAsset * currentEvent.growth;
    const newConservative = conservativeAsset + conservativeChange;
    const newGrowth = growthAsset + growthChange;

    // 記錄歷史
    const record = {
      year,
      event: currentEvent.name,
      cash,
      conservativeAsset,
      growthAsset,
      conservativeChange,
      growthChange,
      totalAsset: totalAsset,
    };
    setHistory((prev) => [...prev, record]);

    // 更新狀態
    setConservativeAsset(newConservative);
    setGrowthAsset(newGrowth);
    setYear((prev) => prev + 1);

    // 檢查遊戲結束
    if (year >= 10) {
      setGameState("ended");
      setCurrentEvent(null);
    } else {
      const nextEvent = getRandomEvent();
      setCurrentEvent(nextEvent);
    }
  }

  function quickInvest(type) {
    const amount = Math.floor(cash * 0.3);
    if (amount > 0) {
      invest(type, amount);
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
              <div className="title">投資遊戲</div>
              <div className="subtitle">回合制投資模擬｜練習資產配置</div>
            </div>
            {toast ? <div className="toast">{toast}</div> : null}
          </div>
        </header>

        <main className="content">
          {/* 遊戲開始畫面 */}
          {gameState === "setup" && (
            <section className="card hero gameIntro">
              <div className="gameTitle">🎮 投資模擬遊戲</div>
              <div className="gameDesc">
                <p>初始資金：{fmtMoney(INITIAL_CASH)}</p>
                <p>遊戲時長：10 年（10 回合）</p>
                <p>目標：透過投資增加資產</p>
              </div>
              <div className="gameRules">
                <div className="ruleItem">
                  <div className="ruleTitle">穩健型資產</div>
                  <div className="ruleText">風險低、波動小</div>
                </div>
                <div className="ruleItem">
                  <div className="ruleTitle">成長型資產</div>
                  <div className="ruleText">風險高、波動大</div>
                </div>
              </div>
              <button className="btn solid fullWidth" onClick={startGame}>
                開始遊戲
              </button>
            </section>
          )}

          {/* 進行中 */}
          {gameState === "playing" && (
            <>
              {/* 資產總覽 */}
              <section className="card hero">
                <div className="gameYear">第 {year} 年</div>
                <div className="heroRow">
                  <div>
                    <div className="label">總資產</div>
                    <div className="big">{fmtMoney(totalAsset)}</div>
                  </div>
                  <div className="pill">
                    <div className="pillTop">
                      {profit >= 0 ? "獲利" : "虧損"}
                    </div>
                    <div className={`pillBottom ${profit >= 0 ? "pos" : "neg"}`}>
                      {fmtMoney(Math.abs(profit))}
                    </div>
                  </div>
                </div>

                <div className="grid2">
                  <div className="mini">
                    <div className="label">現金</div>
                    <div className="value">{fmtMoney(cash)}</div>
                  </div>
                  <div className="mini">
                    <div className="label">報酬率</div>
                    <div className={`value ${profit >= 0 ? "pos" : "neg"}`}>
                      {roi.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </section>

              {/* 市場事件 */}
              {currentEvent && (
                <section className="card">
                  <div className="sectionTitle">市場狀況</div>
                  <div className="eventCard">
                    <div className="eventTitle">{currentEvent.name}</div>
                    <div className="eventDesc">{currentEvent.desc}</div>
                    <div className="eventImpact">
                      <div className="impactItem">
                        <span>穩健型：</span>
                        <span className={currentEvent.conservative >= 0 ? "pos" : "neg"}>
                          {currentEvent.conservative >= 0 ? "+" : ""}
                          {(currentEvent.conservative * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="impactItem">
                        <span>成長型：</span>
                        <span className={currentEvent.growth >= 0 ? "pos" : "neg"}>
                          {currentEvent.growth >= 0 ? "+" : ""}
                          {(currentEvent.growth * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* 持倉狀況 */}
              <section className="card">
                <div className="sectionTitle">持倉狀況</div>
                <div className="grid2">
                  <div className="assetBox conservative">
                    <div className="assetLabel">穩健型</div>
                    <div className="assetValue">{fmtMoney(conservativeAsset)}</div>
                  </div>
                  <div className="assetBox growth">
                    <div className="assetLabel">成長型</div>
                    <div className="assetValue">{fmtMoney(growthAsset)}</div>
                  </div>
                </div>
              </section>

              {/* 投資操作 */}
              <section className="card">
                <div className="sectionTitle">投資決策</div>
                <div className="investActions">
                  <button
                    className="btn ghost"
                    onClick={() => quickInvest("conservative")}
                    disabled={cash < 1000}
                  >
                    投資穩健型（30%）
                  </button>
                  <button
                    className="btn ghost"
                    onClick={() => quickInvest("growth")}
                    disabled={cash < 1000}
                  >
                    投資成長型（30%）
                  </button>
                </div>
              </section>
            </>
          )}

          {/* 遊戲結束 */}
          {gameState === "ended" && (
            <>
              <section className="card hero">
                <div className="gameOver">🎊 遊戲結束</div>
                <div className="heroRow">
                  <div>
                    <div className="label">最終資產</div>
                    <div className="big">{fmtMoney(totalAsset)}</div>
                  </div>
                  <div className="pill">
                    <div className="pillTop">投資報酬率</div>
                    <div className={`pillBottom ${profit >= 0 ? "pos" : "neg"}`}>
                      {roi.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="grid2">
                  <div className="mini">
                    <div className="label">初始資金</div>
                    <div className="value">{fmtMoney(INITIAL_CASH)}</div>
                  </div>
                  <div className="mini">
                    <div className="label">
                      {profit >= 0 ? "總獲利" : "總虧損"}
                    </div>
                    <div className={`value ${profit >= 0 ? "pos" : "neg"}`}>
                      {fmtMoney(Math.abs(profit))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 歷史記錄 */}
              <section className="card">
                <div className="sectionTitle">投資歷程</div>
                <div className="historyList">
                  {history.map((record, idx) => (
                    <div key={idx} className="historyItem">
                      <div className="historyYear">第 {record.year} 年</div>
                      <div className="historyEvent">{record.event}</div>
                      <div className="historyTotal">
                        {fmtMoney(record.totalAsset)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <div className="spacer" />
        </main>

        <footer className="bottomBar">
          {gameState === "playing" && (
            <>
              <button className="btn ghost" onClick={resetGame}>
                重新開始
              </button>
              <button className="btn solid" onClick={nextYear}>
                下一回合
              </button>
            </>
          )}
          {gameState === "ended" && (
            <>
              <button className="btn ghost" onClick={() => navigate("/")}>
                返回首頁
              </button>
              <button className="btn solid" onClick={resetGame}>
                再玩一次
              </button>
            </>
          )}
        </footer>
      </div>
    </div>
  );
}
