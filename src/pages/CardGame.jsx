import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_CASH = 100000;
const MAX_ROUNDS = 10;

// 市場事件定義
const MARKET_EVENTS = [
  { id: "boom", name: "大漲 📈", desc: "牛市狂奔", multiplier: 1.25 },
  { id: "up", name: "小漲 📊", desc: "穩定上揚", multiplier: 1.08 },
  { id: "flat", name: "盤整 ➡️", desc: "橫向整理", multiplier: 1.0 },
  { id: "down", name: "小跌 📉", desc: "市場修正", multiplier: 0.95 },
  { id: "crash", name: "大跌 💥", desc: "恐慌性下跌", multiplier: 0.80 },
];

// 卡牌定義
const CARD_DECK = [
  {
    id: "dca",
    name: "定期定額",
    description: "穩健投資，不懼波動",
    riskLevel: "低",
    color: "linear-gradient(135deg, rgba(100, 180, 255, 0.85), rgba(70, 150, 255, 0.85))",
    effect: (market, player) => {
      // 穩定小幅成長，不受市場影響太大
      const baseReturn = 0.06;
      const invested = Math.min(player.cash * 0.4, player.cash);
      const gain = invested * baseReturn;
      return {
        cashChange: -invested,
        assetChange: invested + gain,
        message: `投入 ${fmtMoney(invested)}，獲得 ${fmtMoney(gain)} 收益`,
      };
    },
  },
  {
    id: "buy_dip",
    name: "逢低加碼",
    description: "下跌時效果加倍",
    riskLevel: "中",
    color: "linear-gradient(135deg, rgba(130, 255, 180, 0.85), rgba(90, 220, 140, 0.85))",
    effect: (market, player) => {
      const isDown = market.multiplier < 1.0;
      const multiplier = isDown ? 2.0 : 1.0;
      const invested = Math.min(player.cash * 0.5, player.cash);
      const baseReturn = 0.08 * multiplier;
      const gain = invested * baseReturn;
      return {
        cashChange: -invested,
        assetChange: invested + gain,
        message: isDown 
          ? `逢低買進！投入 ${fmtMoney(invested)}，效果加倍！` 
          : `投入 ${fmtMoney(invested)}，獲得 ${fmtMoney(gain)} 收益`,
      };
    },
  },
  {
    id: "stop_loss",
    name: "停損",
    description: "下跌時減少損失",
    riskLevel: "低",
    color: "linear-gradient(135deg, rgba(255, 220, 120, 0.85), rgba(255, 190, 80, 0.85))",
    effect: (market, player) => {
      const isDown = market.multiplier < 1.0;
      if (isDown) {
        // 下跌時保護資產
        const protectedAmount = player.asset * 0.1;
        return {
          cashChange: 0,
          assetChange: protectedAmount,
          message: `成功停損！保護了 ${fmtMoney(protectedAmount)} 資產`,
        };
      } else {
        // 上漲時小幅獲利
        const invested = Math.min(player.cash * 0.3, player.cash);
        const gain = invested * 0.04;
        return {
          cashChange: -invested,
          assetChange: invested + gain,
          message: `市場穩定，小幅投資 ${fmtMoney(invested)}`,
        };
      }
    },
  },
  {
    id: "all_in",
    name: "ALL IN",
    description: "高風險高報酬",
    riskLevel: "高",
    color: "linear-gradient(135deg, rgba(255, 100, 150, 0.85), rgba(230, 70, 120, 0.85))",
    effect: (market, player) => {
      const invested = player.cash * 0.8; // 投入 80% 現金
      const marketEffect = market.multiplier - 1.0; // -0.2 到 0.25
      const gain = invested * marketEffect * 1.5; // 放大市場效果
      return {
        cashChange: -invested,
        assetChange: invested + gain,
        message: market.multiplier >= 1.0
          ? `All In！投入 ${fmtMoney(invested)}，大賺 ${fmtMoney(gain)}！`
          : `All In！投入 ${fmtMoney(invested)}，虧損 ${fmtMoney(Math.abs(gain))}...`,
      };
    },
  },
  {
    id: "cash_king",
    name: "現金為王",
    description: "保留現金，不投資",
    riskLevel: "極低",
    color: "linear-gradient(135deg, rgba(200, 200, 200, 0.85), rgba(160, 160, 160, 0.85))",
    effect: () => {
      return {
        cashChange: 0,
        assetChange: 0,
        message: "本回合保持觀望，現金不動",
      };
    },
  },
  {
    id: "rebalance",
    name: "資產再平衡",
    description: "調整配置，降低風險",
    riskLevel: "中",
    color: "linear-gradient(135deg, rgba(180, 150, 255, 0.85), rgba(150, 120, 230, 0.85))",
    effect: (market, player) => {
      const targetCashRatio = 0.3;
      const totalValue = player.cash + player.asset;
      const targetCash = totalValue * targetCashRatio;
      const cashDiff = targetCash - player.cash;
      
      if (cashDiff > 0) {
        // 需要賣出資產換現金
        const sellAmount = Math.min(cashDiff, player.asset * 0.3);
        return {
          cashChange: sellAmount,
          assetChange: -sellAmount,
          message: `賣出 ${fmtMoney(sellAmount)} 資產，調整配置`,
        };
      } else {
        // 需要買入資產
        const buyAmount = Math.min(Math.abs(cashDiff), player.cash * 0.3);
        return {
          cashChange: -buyAmount,
          assetChange: buyAmount * 1.02,
          message: `買入 ${fmtMoney(buyAmount)} 資產，調整配置`,
        };
      }
    },
  },
];

const fmtMoney = (n) =>
  new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

// 隨機抽卡（不重複）
function drawCards(deck, count) {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 隨機市場事件
function getRandomMarket() {
  return MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
}

export default function CardGame() {
  const navigate = useNavigate();
  
  // 遊戲狀態
  const [gameState, setGameState] = useState("intro"); // intro, playing, result
  const [round, setRound] = useState(1);
  const [cash, setCash] = useState(INITIAL_CASH);
  const [asset, setAsset] = useState(0);
  
  // 卡牌與市場
  const [currentMarket, setCurrentMarket] = useState(null);
  const [handCards, setHandCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hasPlayedCard, setHasPlayedCard] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  
  // 歷史記錄
  const [history, setHistory] = useState([]);
  const [usedCards, setUsedCards] = useState([]);
  
  // Toast 訊息
  const [toast, setToast] = useState("");

  // 計算總資產
  const totalAsset = useMemo(() => cash + asset, [cash, asset]);
  
  // 計算報酬率
  const roi = useMemo(() => ((totalAsset - INITIAL_CASH) / INITIAL_CASH) * 100, [totalAsset]);
  
  // 投資風格評語
  const investmentStyle = useMemo(() => {
    if (usedCards.length === 0) return "新手投資者";
    
    const riskCount = usedCards.filter(c => c.riskLevel === "高").length;
    const safeCount = usedCards.filter(c => c.riskLevel === "低" || c.riskLevel === "極低").length;
    
    if (riskCount > safeCount * 2) return "激進型投資者 🔥";
    if (safeCount > riskCount * 2) return "保守型投資者 🛡️";
    return "平衡型投資者 ⚖️";
  }, [usedCards]);

  // 開始遊戲
  function startGame() {
    setGameState("playing");
    setCurrentMarket(getRandomMarket());
    setHandCards(drawCards(CARD_DECK, 3));
  }

  // 選擇卡牌
  function selectCard(card) {
    if (hasPlayedCard) {
      showToast("已出牌，請按下一年");
      return;
    }
    if (selectedCard?.id === card.id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
    }
  }

  // 出牌（執行卡牌效果）
  function playCard() {
    if (!selectedCard) {
      showToast("請先選擇一張卡牌");
      return;
    }

    const playerState = { cash, asset };
    const result = selectedCard.effect(currentMarket, playerState);

    // 應用市場效果到資產
    const marketEffect = (asset + result.assetChange) * (currentMarket.multiplier - 1.0);
    const finalAssetChange = result.assetChange + marketEffect;

    // 更新資產
    const newCash = Math.max(0, cash + result.cashChange);
    const newAsset = Math.max(0, asset + finalAssetChange);
    
    setCash(newCash);
    setAsset(newAsset);
    setActionMessage(result.message);

    // 記錄歷史
    const record = {
      round,
      market: currentMarket.name,
      card: selectedCard.name,
      totalAsset: newCash + newAsset,
    };
    setHistory([...history, record]);
    setUsedCards([...usedCards, selectedCard]);
    setHasPlayedCard(true);

    // 顯示訊息
    showToast("已出牌");
  }

  // 下一回合
  function nextRound() {
    if (!actionMessage) {
      showToast("請先出牌");
      return;
    }

    if (round >= MAX_ROUNDS) {
      setGameState("result");
      return;
    }

    setRound(round + 1);
    setCurrentMarket(getRandomMarket());
    setHandCards(drawCards(CARD_DECK, 3));
    setSelectedCard(null);
    setHasPlayedCard(false);
    setActionMessage("");
  }

  // 重新開始
  function resetGame() {
    setGameState("intro");
    setRound(1);
    setCash(INITIAL_CASH);
    setAsset(0);
    setCurrentMarket(null);
    setHandCards([]);
    setSelectedCard(null);
    setHasPlayedCard(false);
    setActionMessage("");
    setHistory([]);
    setUsedCards([]);
    showToast("遊戲已重置");
  }

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 1600);
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
              <div className="title">投資卡牌遊戲</div>
              <div className="subtitle">Deck Builder｜策略投資模擬</div>
            </div>
            {toast ? <div className="toast">{toast}</div> : null}
          </div>
        </header>

        <main className="content">
          {/* 遊戲介紹 */}
          {gameState === "intro" && (
            <section className="card hero cardGameIntro">
              <div className="cardGameTitle">🃏 投資卡牌遊戲</div>
              <div className="cardGameDesc">
                <p>初始資金：{fmtMoney(INITIAL_CASH)}</p>
                <p>遊戲回合：{MAX_ROUNDS} 年</p>
                <p>每回合抽 3 張卡，選 1 張出牌</p>
              </div>
              
              <div className="cardPreview">
                <div className="previewTitle">卡牌類型</div>
                <div className="cardList">
                  {CARD_DECK.slice(0, 4).map((card) => (
                    <div key={card.id} className="miniCard" style={{ background: card.color }}>
                      <div className="miniCardName">{card.name}</div>
                      <div className="miniCardRisk">{card.riskLevel}風險</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn solid fullWidth" onClick={startGame}>
                開始遊戲
              </button>
            </section>
          )}

          {/* 遊戲進行中 */}
          {gameState === "playing" && (
            <>
              {/* 資產總覽 */}
              <section className="card hero">
                <div className="roundIndicator">第 {round} / {MAX_ROUNDS} 年</div>
                <div className="heroRow">
                  <div>
                    <div className="label">總資產</div>
                    <div className="big">{fmtMoney(totalAsset)}</div>
                  </div>
                  <div className="pill">
                    <div className="pillTop">報酬率</div>
                    <div className={`pillBottom ${roi >= 0 ? "pos" : "neg"}`}>
                      {roi.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="grid2">
                  <div className="mini">
                    <div className="label">現金</div>
                    <div className="value">{fmtMoney(cash)}</div>
                  </div>
                  <div className="mini">
                    <div className="label">投資部位</div>
                    <div className="value">{fmtMoney(asset)}</div>
                  </div>
                </div>
              </section>

              {/* 市場狀況 */}
              {currentMarket && (
                <section className="card">
                  <div className="sectionTitle">市場狀況</div>
                  <div className="marketCard">
                    <div className="marketTitle">{currentMarket.name}</div>
                    <div className="marketDesc">{currentMarket.desc}</div>
                    <div className="marketMultiplier">
                      資產波動：
                      <span className={currentMarket.multiplier >= 1.0 ? "pos" : "neg"}>
                        {currentMarket.multiplier >= 1.0 ? "+" : ""}
                        {((currentMarket.multiplier - 1.0) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </section>
              )}

              {/* 手牌 */}
              <section className="card">
                <div className="sectionTitle">你的手牌（選擇一張）</div>
                <div className="cardHand">
                  {handCards.map((card) => (
                    <div
                      key={card.id}
                      className={`gameCard ${selectedCard?.id === card.id ? "selected" : ""}`}
                      onClick={() => selectCard(card)}
                      style={{ background: card.color }}
                    >
                      <div className="gameCardInner">
                        <div className="gameCardName">{card.name}</div>
                        <div className="gameCardDesc">{card.description}</div>
                        <div className="gameCardRisk">
                          <span className="riskBadge">{card.riskLevel}風險</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 行動結果 */}
              {actionMessage && (
                <section className="card actionResult">
                  <div className="sectionTitle">行動結果</div>
                  <div className="resultMessage">{actionMessage}</div>
                </section>
              )}
            </>
          )}

          {/* 遊戲結束 */}
          {gameState === "result" && (
            <>
              <section className="card hero">
                <div className="cardGameTitle">🎊 遊戲結束</div>
                <div className="heroRow">
                  <div>
                    <div className="label">最終資產</div>
                    <div className="big">{fmtMoney(totalAsset)}</div>
                  </div>
                  <div className="pill">
                    <div className="pillTop">總報酬率</div>
                    <div className={`pillBottom ${roi >= 0 ? "pos" : "neg"}`}>
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
                    <div className="label">投資風格</div>
                    <div className="value" style={{ fontSize: "16px" }}>
                      {investmentStyle}
                    </div>
                  </div>
                </div>
              </section>

              {/* 投資歷程 */}
              <section className="card">
                <div className="sectionTitle">投資歷程</div>
                <div className="historyList">
                  {history.map((record, idx) => (
                    <div key={idx} className="historyItem">
                      <div className="historyYear">第 {record.round} 年</div>
                      <div className="historyDetail">
                        <div className="historyMarket">{record.market}</div>
                        <div className="historyCard">{record.card}</div>
                      </div>
                      <div className="historyTotal">{fmtMoney(record.totalAsset)}</div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <div className="spacer" />
        </main>

        {/* 底部操作列 */}
        <footer className="bottomBar">
          {gameState === "playing" && (
            <>
              <button 
                className="btn ghost" 
                onClick={playCard}
                disabled={!selectedCard || actionMessage}
              >
                出牌
              </button>
              <button 
                className="btn solid" 
                onClick={nextRound}
                disabled={!actionMessage}
              >
                {round >= MAX_ROUNDS ? "查看結果" : "下一年"}
              </button>
            </>
          )}
          {gameState === "result" && (
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
