import { useEffect, useMemo, useRef, useState } from "react";
import { useMachine } from "@xstate/react";
import { useNavigate } from "react-router-dom";
import { CARD_DEFS, CARD_TYPES, describePhase, getCardByInstance, getCastleSideAtCell, isUnitFatigued, SIDES } from "./pocketSiege/engine";
import { pocketSiegeMachine } from "./pocketSiege/machine";
import "./PocketSiege.css";

const typeLabel = {
  [CARD_TYPES.unit]: "單位",
  [CARD_TYPES.building]: "建築",
  [CARD_TYPES.spell]: "法術",
};

function HudResource({ sideState }) {
  return (
    <div className="psHudResource" aria-label={`${sideState.name}資源`}>
      <b>{sideState.currentResource}/{sideState.maxResource}</b>
      <span className="psHudPips">
        {Array.from({ length: 8 }).map((_, idx) => (
          <span key={`pip-${idx}`} className={idx < sideState.currentResource ? "isFull" : idx < sideState.maxResource ? "isReady" : ""} />
        ))}
      </span>
    </div>
  );
}

const ATTACK_EFFECT_DURATION = 720;

function BoardCastle({ side, sideState, highlighted, hit }) {
  return (
    <div className={`psBoardCastle psBoardCastle-${side} ${highlighted ? "isTarget" : ""} ${hit ? "isHit" : ""}`}>
      <span className="psBoardCastleRoof" />
      <span className="psBoardCastleBody">
        <span />
        <span />
        <span />
      </span>
      <strong>{sideState.castleHp}</strong>
    </div>
  );
}

function UnitToken({ unit, selected, attacking, hit, context }) {
  const exhausted = isUnitFatigued(context, unit);
  const acted = unit.hasActed;
  return (
    <div className={`psUnit psUnit-${unit.owner} ${selected ? "isSelected" : ""} ${exhausted ? "isExhausted" : ""} ${acted ? "hasActed" : ""} ${attacking ? "isAttacking" : ""} ${hit ? "isHit" : ""}`}>
      <span className="psUnitIcon">{unit.icon}</span>
      <span className="psUnitStat psAtk">{unit.atk}</span>
      <span className="psUnitStat psHp">{unit.hp}</span>
      {exhausted && <span className="psUnitStatus">眠</span>}
      {acted && <span className="psUnitStatus">已</span>}
    </div>
  );
}

function toBoardPercent(point, boardSize) {
  return {
    x: ((point.col + 0.5) / boardSize.cols) * 100,
    y: ((point.row + 0.5) / boardSize.rows) * 100,
  };
}

function AttackEffect({ effect, boardSize }) {
  const from = toBoardPercent(effect.from, boardSize);
  const to = toBoardPercent(effect.to, boardSize);
  const angle = Math.atan2(effect.to.row - effect.from.row, effect.to.col - effect.from.col);

  return (
    <span
      className={`psAttackFx psAttackFx-${effect.owner} psAttackFx-${effect.kind}`}
      style={{
        "--psFromX": `${from.x}%`,
        "--psFromY": `${from.y}%`,
        "--psToX": `${to.x}%`,
        "--psToY": `${to.y}%`,
        "--psAttackAngle": `${angle}rad`,
      }}
      aria-hidden="true"
    >
      <span className="psAttackProjectile" />
      <span className="psAttackImpact" />
    </span>
  );
}

function HandCard({ def, selected, disabled, onClick }) {
  return (
    <button
      type="button"
      className={`psHandCard psCard-${def.tone} ${selected ? "isSelected" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="psCardCost">{def.cost}</span>
      <span className="psCardArt">{def.icon}</span>
      <span className="psCardName">{def.name}</span>
      <span className="psCardType">{typeLabel[def.type]}</span>
      <span className="psCardText">{def.summary}</span>
    </button>
  );
}

function CombatLog({ entries }) {
  return (
    <div className="psLog" aria-label="戰鬥紀錄">
      {entries.slice(0, 5).map((entry, idx) => (
        <span key={`${entry}-${idx}`}>{entry}</span>
      ))}
    </div>
  );
}

export default function PocketSiege() {
  const navigate = useNavigate();
  const [state, send] = useMachine(pocketSiegeMachine);
  const context = state.context;
  const { boardSize } = context;
  const isIntro = state.matches("intro");
  const isGameOver = state.matches("gameOver");
  const isPlayerCardPhase = state.matches({ playerTurn: "cardPhase" });
  const isPlayerTurn = state.matches("playerTurn");
  const player = context.player;
  const enemy = context.enemy;
  const selectedCard = context.selectedCardId ? getCardByInstance(context, SIDES.player, context.selectedCardId) : null;
  const selectedUnit = context.selectedUnitId ? context.board.find((unit) => unit.id === context.selectedUnitId) : null;
  const [attackEffects, setAttackEffects] = useState([]);
  const seenAttackEffectIds = useRef(new Set());
  const attackTimers = useRef(new Map());

  const boardCells = useMemo(() => {
    const cells = [];
    for (let row = 0; row < boardSize.rows; row += 1) {
      for (let col = 0; col < boardSize.cols; col += 1) {
        cells.push({ row, col });
      }
    }
    return cells;
  }, [boardSize.cols, boardSize.rows]);

  const unitMap = useMemo(() => {
    const map = new Map();
    for (const unit of context.board) map.set(`${unit.row}-${unit.col}`, unit);
    return map;
  }, [context.board]);

  const highlightMap = useMemo(() => {
    const map = new Map();
    for (const cell of context.highlightedCells) map.set(`${cell.row}-${cell.col}`, cell.type);
    return map;
  }, [context.highlightedCells]);

  const selectedUnitHasAttackTarget = useMemo(() => {
    if (!selectedUnit) return false;
    return context.highlightedCastles.length > 0 || context.highlightedCells.some((cell) => cell.type === "attack");
  }, [context.highlightedCastles.length, context.highlightedCells, selectedUnit]);

  useEffect(() => {
    const effects = context.attackEffects || [];
    if (!effects.length) {
      seenAttackEffectIds.current.clear();
      for (const timer of attackTimers.current.values()) window.clearTimeout(timer);
      attackTimers.current.clear();
      window.setTimeout(() => setAttackEffects([]), 0);
      return;
    }

    const freshEffects = effects.filter((effect) => !seenAttackEffectIds.current.has(effect.id));
    if (!freshEffects.length) return;

    for (const effect of freshEffects) {
      seenAttackEffectIds.current.add(effect.id);
      const timer = window.setTimeout(() => {
        attackTimers.current.delete(effect.id);
        setAttackEffects((current) => current.filter((item) => item.id !== effect.id));
      }, ATTACK_EFFECT_DURATION);
      attackTimers.current.set(effect.id, timer);
    }

    setAttackEffects((current) => [...current, ...freshEffects].slice(-12));
  }, [context.attackEffects]);

  useEffect(() => {
    const timers = attackTimers.current;
    return () => {
      for (const timer of timers.values()) window.clearTimeout(timer);
      timers.clear();
    };
  }, []);

  const animationMarkers = useMemo(() => {
    const attackers = new Set();
    const targets = new Set();
    const castles = new Set();
    for (const effect of attackEffects) {
      if (effect.attackerId) attackers.add(effect.attackerId);
      if (effect.targetType === "unit" && effect.targetId) targets.add(effect.targetId);
      if (effect.targetType === "castle" && effect.targetSide) castles.add(effect.targetSide);
    }
    return { attackers, targets, castles };
  }, [attackEffects]);

  const round = Math.max(1, Math.ceil(context.turn / 2));

  return (
    <div className="oneui launchpadRoot psPage">
      <div className="psShell">
        <header className="psTopbar">
          <button className="psBackBtn" type="button" onClick={() => navigate("/")}>選單</button>
          <div className="psHudSide psHudPlayer">
            <span>{player.name}</span>
            <strong>{player.castleHp} 耐久</strong>
            <small>手牌 {player.hand.length} / 牌庫 {player.deck.length}</small>
            <HudResource sideState={player} />
          </div>
          <div className="psHudCenter">
            <span>第 {round} 回合</span>
            <strong>{describePhase(context)}</strong>
            <small>{context.activeSide === SIDES.player ? "你的回合" : "AI 回合"}</small>
          </div>
          <div className="psHudSide psHudEnemy">
            <span>{enemy.name}</span>
            <strong>{enemy.castleHp} 耐久</strong>
            <small>手牌 {enemy.hand.length} / 牌庫 {enemy.deck.length}</small>
            <HudResource sideState={enemy} />
          </div>
        </header>

        <main className="psArena">
          <section className="psBoardWrap">
            <div
              className="psBoard"
              style={{
                "--psRows": boardSize.rows,
                "--psCols": boardSize.cols,
              }}
            >
              {boardCells.map(({ row, col }) => {
                const unit = unitMap.get(`${row}-${col}`);
                const highlight = highlightMap.get(`${row}-${col}`);
                const castleSide = getCastleSideAtCell(context, row, col);
                const castleHighlighted = castleSide && context.highlightedCastles.includes(castleSide);
                const visibleHighlight = castleHighlighted ? "attack" : highlight;
                const zone = col < 2 ? "playerZone" : col >= boardSize.cols - 2 ? "enemyZone" : "";
                return (
                  <button
                    key={`${row}-${col}`}
                    type="button"
                    className={`psCell ${zone} ${castleSide ? "hasCastle" : ""} ${visibleHighlight ? `is-${visibleHighlight}` : ""}`}
                    onClick={() => (castleSide ? send({ type: "CASTLE_CLICK", side: castleSide }) : send({ type: "CELL_CLICK", row, col }))}
                    aria-label={`第 ${row + 1} 列，第 ${col + 1} 欄`}
                  >
                    {castleSide ? (
                      <BoardCastle
                        side={castleSide}
                        sideState={context[castleSide]}
                        highlighted={Boolean(castleHighlighted)}
                        hit={animationMarkers.castles.has(castleSide)}
                      />
                    ) : unit && (
                      <UnitToken
                        unit={unit}
                        selected={context.selectedUnitId === unit.id}
                        attacking={animationMarkers.attackers.has(unit.id)}
                        hit={animationMarkers.targets.has(unit.id)}
                        context={context}
                      />
                    )}
                  </button>
                );
              })}
              <div className="psAttackLayer" aria-hidden="true">
                {attackEffects.map((effect) => (
                  <AttackEffect key={effect.id} effect={effect} boardSize={boardSize} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <div className="psBottomDock">
          <CombatLog entries={context.combatLog} />

          <section className="psHand" aria-label="玩家手牌">
            <div className="psHandTrack">
              {player.hand.map((card) => {
                const def = CARD_DEFS[card.cardId];
                return (
                  <HandCard
                    key={card.instanceId}
                    def={def}
                    selected={context.selectedCardId === card.instanceId}
                    disabled={!isPlayerCardPhase || def.cost > player.currentResource || Boolean(context.winner)}
                    onClick={() => send({ type: "SELECT_CARD", cardId: card.instanceId })}
                  />
                );
              })}
            </div>
          </section>

          <footer className="psActionBar">
            <div className="psSelectedInfo">
              {selectedCard ? (
                <>
                  <strong>{selectedCard.name}</strong>
                  <span>{selectedCard.summary}</span>
                </>
              ) : selectedUnit ? (
                <>
                  <strong>{selectedUnit.name}</strong>
                  <span>
                    {selectedUnitHasAttackTarget
                      ? "射程內有敵人，可直接點紅色目標攻擊；攻擊後不能移動。"
                      : "藍格移動；進入射程後可點紅色敵方攻擊。"}
                  </span>
                </>
              ) : (
                <>
                  <strong>{isPlayerTurn ? describePhase(context) : "AI 回合"}</strong>
                  <span>{isPlayerTurn ? "可出牌、移動與攻擊，完成後結束回合。" : "等待 AI 行動與反擊結算..."}</span>
                </>
              )}
            </div>
            <button type="button" className="psActionBtn psPrimary psEndTurnBtn" onClick={() => send({ type: "END_TURN" })} disabled={!isPlayerTurn}>
              結束回合
            </button>
          </footer>
        </div>

        {(isIntro || isGameOver) && (
          <div className={`psOverlay ${isGameOver ? "isGameOver" : "isIntro"}`}>
            <div className="psModal">
              <span className="psModalKicker">Pocket Siege</span>
              <h1>{isGameOver ? `${context[context.winner]?.name || "勝者"}獲勝` : "城堡戰棋"}</h1>
              <p>{isGameOver ? "城堡防線已被突破。" : "5 x 7 橫向戰場上的手牌、資源與戰棋攻防。"}</p>
              <div className="psModalRules" aria-label="規則提示">
                <span>近戰移動 2</span>
                <span>遠程移動 1</span>
                <span>射程內會反擊</span>
              </div>
              <button
                type="button"
                className="psActionBtn psPrimary"
                onClick={() => send({ type: isGameOver ? "RESET_GAME" : "START_GAME" })}
              >
                {isGameOver ? "再戰一局" : "開始對戰"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
