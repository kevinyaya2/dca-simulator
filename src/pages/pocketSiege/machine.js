import { assign, createMachine } from "xstate";
import {
  beginTurn,
  cancelSelection,
  createGameContext,
  enterCommandPhase,
  handleCastleClick,
  handleCellClick,
  runEnemyCardPhase,
  runEnemyCommandPhase,
  selectCard,
} from "./engine";
import { SIDES } from "./data";

const baseContext = createGameContext();

export const pocketSiegeMachine = createMachine(
  {
    id: "pocketSiege",
    initial: "intro",
    context: baseContext,
    on: {
      RESET_GAME: {
        target: ".setup",
        actions: "resetGame",
      },
    },
    states: {
      intro: {
        on: {
          START_GAME: {
            target: "setup",
            actions: "resetGame",
          },
        },
      },
      setup: {
        always: "playerTurn.draw",
      },
      playerTurn: {
        initial: "draw",
        states: {
          draw: {
            entry: "beginPlayerTurn",
            always: [
              { guard: "hasWinner", target: "#pocketSiege.gameOver" },
              { target: "cardPhase" },
            ],
          },
          cardPhase: {
            always: [{ guard: "hasWinner", target: "#pocketSiege.gameOver" }],
            on: {
              SELECT_CARD: {
                actions: "selectPlayerCard",
              },
              CELL_CLICK: {
                actions: "clickCell",
              },
              CASTLE_CLICK: {
                actions: "clickCastle",
              },
              CANCEL: {
                actions: "cancel",
              },
              END_TURN: {
                target: "#pocketSiege.enemyTurn.draw",
                actions: "cancel",
              },
            },
          },
          commandPhase: {
            entry: "enterPlayerCommandPhase",
            always: [{ guard: "hasWinner", target: "#pocketSiege.gameOver" }],
            on: {
              CELL_CLICK: {
                actions: "clickCell",
              },
              CASTLE_CLICK: {
                actions: "clickCastle",
              },
              CANCEL: {
                actions: "cancel",
              },
              END_TURN: {
                target: "#pocketSiege.enemyTurn.draw",
                actions: "cancel",
              },
            },
          },
        },
      },
      enemyTurn: {
        initial: "draw",
        states: {
          draw: {
            entry: "beginEnemyTurn",
            always: [
              { guard: "hasWinner", target: "#pocketSiege.gameOver" },
              { target: "cardPhase" },
            ],
          },
          cardPhase: {
            entry: "runEnemyCards",
            always: [
              { guard: "hasWinner", target: "#pocketSiege.gameOver" },
              { target: "commandPhase" },
            ],
          },
          commandPhase: {
            entry: "runEnemyCommands",
            always: [{ guard: "hasWinner", target: "#pocketSiege.gameOver" }],
            after: {
              650: "#pocketSiege.playerTurn.draw",
            },
          },
        },
      },
      gameOver: {
        on: {
          START_GAME: {
            target: "setup",
            actions: "resetGame",
          },
        },
      },
    },
  },
  {
    actions: {
      resetGame: assign(() => createGameContext()),
      beginPlayerTurn: assign(({ context }) => beginTurn(context, SIDES.player)),
      beginEnemyTurn: assign(({ context }) => beginTurn(context, SIDES.enemy)),
      enterPlayerCommandPhase: assign(({ context }) => enterCommandPhase(context)),
      selectPlayerCard: assign(({ context, event }) => {
        if (event.type !== "SELECT_CARD") return context;
        return selectCard(context, event.cardId);
      }),
      clickCell: assign(({ context, event }) => {
        if (event.type !== "CELL_CLICK") return context;
        return handleCellClick(context, event.row, event.col);
      }),
      clickCastle: assign(({ context, event }) => {
        if (event.type !== "CASTLE_CLICK") return context;
        return handleCastleClick(context, event.side);
      }),
      cancel: assign(({ context }) => cancelSelection(context)),
      runEnemyCards: assign(({ context }) => runEnemyCardPhase(context)),
      runEnemyCommands: assign(({ context }) => runEnemyCommandPhase(enterCommandPhase(context))),
    },
    guards: {
      hasWinner: ({ context }) => Boolean(context.winner),
    },
  },
);
