import { Suspense, lazy, useEffect, useMemo } from "react";
import { useMachine } from "@xstate/react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  CARD_DECK,
  INITIAL_CASH,
  MAX_ROUNDS,
} from "./cardgame/constants";
import {
  computeRoi,
  fmtMoney,
  getCardById,
  getChartRows,
  getInvestmentStyle,
  getMarketById,
  previewCardResult,
} from "./cardgame/engine";
import { cardGameMachine } from "./cardgame/machine";
import ActionPanel from "./cardgame/components/ActionPanel";
import CardGameIntro from "./cardgame/components/CardGameIntro";
import CardHandPanel from "./cardgame/components/CardHandPanel";
import HudPanel from "./cardgame/components/HudPanel";
import MarketEventPanel from "./cardgame/components/MarketEventPanel";
import ResultPanel from "./cardgame/components/ResultPanel";

const TrendChart = lazy(() => import("./cardgame/components/TrendChart"));

export default function CardGame() {
  const navigate = useNavigate();
  const [state, send] = useMachine(cardGameMachine);
  const context = state.context;

  const totalAsset = context.cash + context.asset;
  const roi = computeRoi(totalAsset, context.totalInvested);
  const investmentStyle = getInvestmentStyle(context.usedCards);

  const selectedCard = getCardById(context.selectedCardId);

  const previewMap = useMemo(() => {
    if (!context.market) return {};

    return context.hand.reduce((acc, card) => {
      acc[card.id] = previewCardResult({
        card,
        market: context.market,
        cash: context.cash,
        asset: context.asset,
        totalInvested: context.totalInvested,
      });
      return acc;
    }, {});
  }, [context.market, context.hand, context.cash, context.asset, context.totalInvested]);

  const selectedPreview = selectedCard ? previewMap[selectedCard.id] : null;

  const chartRows = useMemo(
    () =>
      getChartRows(context.history, {
        cash: context.cash,
        asset: context.asset,
        totalInvested: context.totalInvested,
      }),
    [context.history, context.cash, context.asset, context.totalInvested],
  );

  const isIntro = state.matches("intro");
  const isResult = state.matches("result");
  const isResolve = state.matches("resolve");
  const showPlaying = !isIntro && !isResult;

  useEffect(() => {
    if (!context.toast) return undefined;
    const timer = setTimeout(() => send({ type: "DISMISS_TOAST" }), 1600);
    return () => clearTimeout(timer);
  }, [context.toast, send]);

  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")} type="button">
                ← 返回
              </button>
              <div className="title">投資卡牌遊戲</div>
              <div className="subtitle">Deck Builder · HUD Strategy Run</div>
            </div>

            <AnimatePresence>
              {context.toast ? (
                <motion.div
                  key={context.toast}
                  className="toast"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                >
                  {context.toast}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </header>

        <main className="content">
          {isIntro ? (
            <CardGameIntro
              initialCash={INITIAL_CASH}
              maxRounds={MAX_ROUNDS}
              cards={CARD_DECK}
              fmtMoney={fmtMoney}
              onStart={() => send({ type: "START_GAME" })}
            />
          ) : null}

          {showPlaying ? (
            <>
              <HudPanel
                round={context.round}
                maxRounds={MAX_ROUNDS}
                totalAsset={totalAsset}
                cash={context.cash}
                asset={context.asset}
                roi={roi}
                investmentStyle={investmentStyle}
              />

              <section className="card cg-chartSection">
                <div className="sectionTitle">資金波動圖</div>
                <Suspense fallback={<div className="cg-chartFallback">圖表載入中...</div>}>
                  <TrendChart rows={chartRows} />
                </Suspense>
              </section>

              <MarketEventPanel market={context.market} />

              <CardHandPanel
                hand={context.hand}
                selectedCardId={context.selectedCardId}
                previewMap={previewMap}
                onSelect={(cardId) => send({ type: "SELECT_CARD", cardId })}
              />

              <ActionPanel
                selectedCard={selectedCard}
                selectedPreview={selectedPreview}
                lastAction={context.lastAction}
              />
            </>
          ) : null}

          {isResult ? (
            <ResultPanel
              totalAsset={totalAsset}
              roi={roi}
              totalInvested={context.totalInvested}
              investmentStyle={investmentStyle}
              chartSlot={
                <Suspense fallback={<div className="cg-chartFallback">圖表載入中...</div>}>
                  <TrendChart rows={chartRows} />
                </Suspense>
              }
              history={context.history}
              getMarketById={getMarketById}
              getCardById={getCardById}
            />
          ) : null}

          <div className="spacer" />
        </main>

        {(showPlaying || isResult) && (
          <footer className="bottomBar">
            {showPlaying && (
              <>
                <button
                  className="btn ghost"
                  onClick={() => send({ type: "PLAY_CARD" })}
                  disabled={!state.matches("choose") || !context.selectedCardId}
                  type="button"
                >
                  出牌
                </button>
                <button
                  className="btn solid"
                  onClick={() => send({ type: "NEXT_ROUND" })}
                  disabled={!isResolve}
                  type="button"
                >
                  {context.round >= MAX_ROUNDS ? "查看結果" : "下一月"}
                </button>
              </>
            )}

            {isResult && (
              <>
                <button className="btn ghost" onClick={() => navigate("/")} type="button">
                  返回首頁
                </button>
                <button className="btn solid" onClick={() => send({ type: "RESET_GAME" })} type="button">
                  再玩一次
                </button>
              </>
            )}
          </footer>
        )}
      </div>
    </div>
  );
}
