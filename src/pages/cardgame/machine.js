import { assign, createMachine } from "xstate";
import {
  advanceToNextRound,
  applyCardEffect,
  canReachResult,
  createBaseContext,
  getCardById,
  startRound,
} from "./engine";

const baseContext = createBaseContext();

export const cardGameMachine = createMachine(
  {
    id: "cardGame",
    initial: "intro",
    context: baseContext,
    on: {
      DISMISS_TOAST: {
        actions: "clearToast",
      },
      RESET_GAME: {
        target: ".intro",
        actions: "resetGame",
      },
    },
    states: {
      intro: {
        on: {
          START_GAME: {
            target: "draw",
            actions: "bootGame",
          },
        },
      },
      draw: {
        entry: "drawRound",
        always: "choose",
      },
      choose: {
        on: {
          SELECT_CARD: {
            actions: "toggleSelected",
          },
          PLAY_CARD: [
            {
              guard: "hasSelectedCard",
              target: "resolve",
              actions: "playSelectedCard",
            },
            {
              actions: "toastSelectCardFirst",
            },
          ],
          NEXT_ROUND: {
            actions: "toastPlayCardFirst",
          },
        },
      },
      resolve: {
        on: {
          PLAY_CARD: {
            actions: "toastAlreadyPlayed",
          },
          NEXT_ROUND: [
            {
              guard: "isFinalRound",
              target: "result",
            },
            {
              target: "nextRound",
            },
          ],
        },
      },
      nextRound: {
        entry: "advanceRound",
        always: "draw",
      },
      result: {
        on: {
          START_GAME: {
            target: "draw",
            actions: "bootGame",
          },
        },
      },
    },
  },
  {
    actions: {
      bootGame: assign(() => createBaseContext()),
      drawRound: assign(({ context }) => startRound(context, context.round)),
      toggleSelected: assign(({ context, event }) => {
        if (event.type !== "SELECT_CARD") return {};
        return {
          selectedCardId:
            context.selectedCardId === event.cardId ? null : event.cardId,
          toast: "",
        };
      }),
      playSelectedCard: assign(({ context }) => {
        const card = getCardById(context.selectedCardId);
        if (!card || !context.market) {
          return { toast: "卡牌資料異常，請重新選牌" };
        }

        const action = applyCardEffect({
          card,
          market: context.market,
          cash: context.cash,
          asset: context.asset,
          totalInvested: context.totalInvested,
          round: context.round,
        });

        return {
          cash: action.nextCash,
          asset: action.nextAsset,
          history: [...context.history, action.historyPoint],
          usedCards: [...context.usedCards, card],
          lastAction: {
            cardId: card.id,
            marketId: context.market.id,
            message: action.message,
            summary: action.summary,
            cashChange: action.cashChange,
            assetChange: action.assetChange,
            totalAsset: action.totalAsset,
            roi: action.roi,
          },
          toast: "已出牌",
        };
      }),
      advanceRound: assign(({ context }) => advanceToNextRound(context)),
      resetGame: assign(() => createBaseContext()),
      clearToast: assign({
        toast: () => "",
      }),
      toastSelectCardFirst: assign({
        toast: () => "請先選擇一張卡牌",
      }),
      toastPlayCardFirst: assign({
        toast: () => "請先出牌再進入下一月",
      }),
      toastAlreadyPlayed: assign({
        toast: () => "本月已出牌，請進入下一月",
      }),
    },
    guards: {
      hasSelectedCard: ({ context }) => Boolean(context.selectedCardId),
      isFinalRound: ({ context }) => canReachResult(context.round),
    },
  },
);
