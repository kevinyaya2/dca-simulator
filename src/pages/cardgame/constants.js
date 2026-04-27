export const INITIAL_CASH = 100000;
export const MONTHLY_CASH_INFLOW = 30000;
export const MAX_ROUNDS = 12;
export const HAND_SIZE = 3;

export const MARKET_EVENTS = [
  {
    id: "boom",
    name: "大漲",
    icon: "📈",
    desc: "風險資產全面噴發",
    multiplier: 1.25,
    tone: "hot",
  },
  {
    id: "up",
    name: "小漲",
    icon: "📊",
    desc: "市場情緒偏多",
    multiplier: 1.08,
    tone: "warm",
  },
  {
    id: "flat",
    name: "盤整",
    icon: "➡️",
    desc: "多空拉鋸，波動有限",
    multiplier: 1.0,
    tone: "neutral",
  },
  {
    id: "down",
    name: "小跌",
    icon: "📉",
    desc: "短期修正，資金轉保守",
    multiplier: 0.95,
    tone: "cool",
  },
  {
    id: "crash",
    name: "大跌",
    icon: "💥",
    desc: "恐慌拋售，風險急升",
    multiplier: 0.8,
    tone: "danger",
  },
];

export const CARD_DECK = [
  {
    id: "cash_king",
    name: "現金為王",
    description: "完全觀望，保留火力",
    riskLevel: "極低",
    color:
      "linear-gradient(140deg, rgba(180, 184, 196, 0.94), rgba(126, 132, 145, 0.94))",
    effect: () => ({
      cashChange: 0,
      assetChange: 0,
      message: "你選擇保持觀望，現金部位不變。",
      summary: "零操作、零波動",
    }),
  },
  {
    id: "dca",
    name: "定期定額",
    description: "穩定買入，平滑進場成本",
    riskLevel: "低",
    color:
      "linear-gradient(140deg, rgba(98, 188, 255, 0.95), rgba(66, 145, 255, 0.95))",
    effect: (market, player) => {
      const invested = Math.min(player.cash * 0.35, player.cash);
      const assetChange = invested * market.multiplier;
      const gain = assetChange - invested;
      return {
        cashChange: -invested,
        assetChange,
        message: `定期定額投入 ${invested.toFixed(0)}，本回合變動 ${gain.toFixed(0)}。`,
        summary: "穩健長線",
      };
    },
  },
  {
    id: "stop_loss",
    name: "停損防守",
    description: "行情差時保護資產，行情好時小幅參與",
    riskLevel: "低",
    color:
      "linear-gradient(140deg, rgba(255, 217, 116, 0.95), rgba(255, 175, 78, 0.95))",
    effect: (market, player) => {
      if (market.multiplier < 1) {
        const protectedAsset = player.asset * 0.1;
        return {
          cashChange: 0,
          assetChange: protectedAsset,
          message: `防守奏效，保住 ${protectedAsset.toFixed(0)} 資產價值。`,
          summary: "下跌防守",
        };
      }

      const invested = Math.min(player.cash * 0.2, player.cash);
      const assetChange = invested * market.multiplier;
      const gain = assetChange - invested;
      return {
        cashChange: -invested,
        assetChange,
        message: `防守轉進攻，投入 ${invested.toFixed(0)}，本回合變動 ${gain.toFixed(0)}。`,
        summary: "低風險參與",
      };
    },
  },
  {
    id: "buy_dip",
    name: "逢低加碼",
    description: "回檔時加重佈局，反彈收益放大",
    riskLevel: "中",
    color:
      "linear-gradient(140deg, rgba(118, 255, 170, 0.95), rgba(78, 215, 128, 0.95))",
    effect: (market, player) => {
      const invested = Math.min(player.cash * 0.5, player.cash);
      const dipBonus = market.multiplier < 1 ? 1.5 : 1;
      const assetChange = invested * market.multiplier * dipBonus;
      const gain = assetChange - invested;
      return {
        cashChange: -invested,
        assetChange,
        message:
          dipBonus > 1
            ? `回檔加碼成功，投入 ${invested.toFixed(0)}，加成後變動 ${gain.toFixed(0)}。`
            : `加碼投入 ${invested.toFixed(0)}，本回合變動 ${gain.toFixed(0)}。`,
        summary: dipBonus > 1 ? "逆勢加碼命中" : "正常加碼",
      };
    },
  },
  {
    id: "rebalance",
    name: "資產再平衡",
    description: "現金與部位回到可控比例",
    riskLevel: "中",
    color:
      "linear-gradient(140deg, rgba(176, 150, 255, 0.95), rgba(132, 110, 228, 0.95))",
    effect: (market, player) => {
      const targetCashRatio = 0.3;
      const totalValue = player.cash + player.asset;
      const targetCash = totalValue * targetCashRatio;
      const cashDiff = targetCash - player.cash;

      if (cashDiff > 0) {
        const sellAmount = Math.min(cashDiff, player.asset * 0.3);
        return {
          cashChange: sellAmount,
          assetChange: -sellAmount,
          message: `賣出 ${sellAmount.toFixed(0)} 部位回補現金。`,
          summary: "降低波動",
        };
      }

      const buyAmount = Math.min(Math.abs(cashDiff), player.cash * 0.3);
      const assetChange = buyAmount * market.multiplier;
      const gain = assetChange - buyAmount;
      return {
        cashChange: -buyAmount,
        assetChange,
        message: `再平衡買入 ${buyAmount.toFixed(0)}，本回合變動 ${gain.toFixed(0)}。`,
        summary: "結構調倉",
      };
    },
  },
  {
    id: "heavy_position",
    name: "重倉進場",
    description: "高倉位換取高波動收益",
    riskLevel: "高",
    color:
      "linear-gradient(140deg, rgba(255, 155, 95, 0.95), rgba(226, 105, 56, 0.95))",
    effect: (market, player) => {
      const invested = Math.min(player.cash * 0.75, player.cash);
      const bonus = market.multiplier < 1 ? 1.4 : 1.2;
      const assetChange = invested * market.multiplier * bonus;
      const gain = assetChange - invested;

      return {
        cashChange: -invested,
        assetChange,
        message: `重倉投入 ${invested.toFixed(0)}，放大後變動 ${gain.toFixed(0)}。`,
        summary: "高倉位波動",
      };
    },
  },
  {
    id: "all_in",
    name: "ALL IN",
    description: "孤注一擲，方向錯誤代價極高",
    riskLevel: "極高",
    color:
      "linear-gradient(140deg, rgba(255, 102, 154, 0.95), rgba(224, 57, 116, 0.95))",
    effect: (market, player) => {
      const invested = player.cash;
      const leverage = market.multiplier >= 1 ? 2.2 : 2.8;
      const assetChange = invested * market.multiplier * leverage;
      const gain = assetChange - invested;
      return {
        cashChange: -invested,
        assetChange,
        message: `ALL IN ${invested.toFixed(0)}，槓桿後變動 ${gain.toFixed(0)}。`,
        summary: market.multiplier >= 1 ? "暴擊收益" : "爆量回撤",
      };
    },
  },
];
