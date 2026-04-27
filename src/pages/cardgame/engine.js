import {
  CARD_DECK,
  HAND_SIZE,
  INITIAL_CASH,
  MARKET_EVENTS,
  MAX_ROUNDS,
  MONTHLY_CASH_INFLOW,
} from "./constants";

export function fmtMoney(n) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function getRandomMarket() {
  return MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
}

export function drawCards(deck = CARD_DECK, count = HAND_SIZE) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export function getCardById(cardId) {
  return CARD_DECK.find((card) => card.id === cardId) || null;
}

export function getMarketById(marketId) {
  return MARKET_EVENTS.find((market) => market.id === marketId) || null;
}

export function computeRoi(totalAsset, totalInvested) {
  if (!totalInvested) return 0;
  return ((totalAsset - totalInvested) / totalInvested) * 100;
}

export function applyCardEffect({ card, market, cash, asset, totalInvested, round }) {
  const result = card.effect(market, { cash, asset });

  const nextCash = Math.max(0, cash + result.cashChange);
  const nextAsset = Math.max(0, asset + result.assetChange);
  const totalAsset = nextCash + nextAsset;
  const roi = computeRoi(totalAsset, totalInvested);

  const historyPoint = {
    round,
    marketId: market.id,
    cardId: card.id,
    cash: nextCash,
    asset: nextAsset,
    totalAsset,
    totalInvested,
    roi,
  };

  return {
    nextCash,
    nextAsset,
    totalAsset,
    roi,
    historyPoint,
    message: result.message,
    summary: result.summary,
    cashChange: result.cashChange,
    assetChange: result.assetChange,
  };
}

export function previewCardResult({ card, market, cash, asset, totalInvested }) {
  if (!card || !market) return null;
  const result = card.effect(market, { cash, asset });
  const projectedCash = Math.max(0, cash + result.cashChange);
  const projectedAsset = Math.max(0, asset + result.assetChange);
  const projectedTotal = projectedCash + projectedAsset;
  const projectedRoi = computeRoi(projectedTotal, totalInvested);
  return {
    projectedCash,
    projectedAsset,
    projectedTotal,
    projectedRoi,
    delta: projectedTotal - (cash + asset),
  };
}

export function getInvestmentStyle(usedCards) {
  if (!usedCards.length) {
    return "新手觀察中";
  }

  const riskCount = usedCards.filter((card) => card.riskLevel === "高" || card.riskLevel === "極高").length;
  const safeCount = usedCards.filter(
    (card) => card.riskLevel === "低" || card.riskLevel === "極低",
  ).length;

  if (riskCount > safeCount * 2) return "激進型投資者";
  if (safeCount > riskCount * 2) return "保守型投資者";
  return "平衡型投資者";
}

export function getChartRows(history, fallbackSnapshot) {
  if (!history.length) {
    const totalAsset = fallbackSnapshot.cash + fallbackSnapshot.asset;
    return [
      {
        round: 0,
        totalAsset,
        totalInvested: fallbackSnapshot.totalInvested,
        roi: computeRoi(totalAsset, fallbackSnapshot.totalInvested),
      },
    ];
  }

  return history.map((point) => ({
    round: point.round,
    totalAsset: point.totalAsset,
    totalInvested: point.totalInvested,
    roi: point.roi,
  }));
}

export function createBaseContext() {
  const totalAsset = INITIAL_CASH;
  return {
    round: 1,
    cash: INITIAL_CASH,
    asset: 0,
    totalInvested: INITIAL_CASH,
    market: null,
    hand: [],
    selectedCardId: null,
    history: [
      {
        round: 0,
        marketId: "init",
        cardId: "init",
        cash: INITIAL_CASH,
        asset: 0,
        totalAsset,
        totalInvested: INITIAL_CASH,
        roi: 0,
      },
    ],
    usedCards: [],
    toast: "",
    lastAction: null,
  };
}

export function startRound(context, round = context.round) {
  return {
    ...context,
    round,
    market: getRandomMarket(),
    hand: drawCards(),
    selectedCardId: null,
    lastAction: null,
  };
}

export function advanceToNextRound(context) {
  const nextRound = context.round + 1;
  return {
    ...context,
    round: nextRound,
    cash: context.cash + MONTHLY_CASH_INFLOW,
    totalInvested: context.totalInvested + MONTHLY_CASH_INFLOW,
    selectedCardId: null,
    lastAction: null,
  };
}

export function canReachResult(round) {
  return round >= MAX_ROUNDS;
}
