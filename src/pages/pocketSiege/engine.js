import {
  BOARD_SIZE,
  CARD_DEFS,
  CARD_TYPES,
  CASTLE_HP,
  DRAW_PER_TURN,
  HAND_CAP,
  MAX_RESOURCE,
  SIDES,
  SIDE_LABELS,
  STARTER_DECK,
  STARTING_HAND,
  STARTING_MAX_RESOURCE,
  SUMMON_ZONE_COLS,
} from "./data";

const opponentOf = (side) => (side === SIDES.player ? SIDES.enemy : SIDES.player);
const sideName = (side) => SIDE_LABELS[side] || side;
const centerRowOf = (boardSize) => Math.floor(boardSize.rows / 2);
const WALL_NODE_CARD_ID = "wallNode";
const WALL_GUARD_CARD_ID = "wallGuard";
const EARLY_TURN_PLAYABLE_GUARD_TURNS = 3;
const actionName = (side) => (side === SIDES.player ? "玩家" : "AI");

function cloneSide(side) {
  return {
    ...side,
    hand: [...side.hand],
    deck: [...side.deck],
    discard: [...side.discard],
  };
}

function cloneContext(context) {
  return {
    ...context,
    boardSize: { ...context.boardSize },
    board: context.board.map((unit) => ({ ...unit })),
    player: cloneSide(context.player),
    enemy: cloneSide(context.enemy),
    selectedCardId: context.selectedCardId,
    selectedUnitId: context.selectedUnitId,
    highlightedCells: context.highlightedCells.map((cell) => ({ ...cell })),
    highlightedCastles: [...context.highlightedCastles],
    attackEffects: (context.attackEffects || []).map((effect) => ({
      ...effect,
      from: { ...effect.from },
      to: { ...effect.to },
    })),
    combatLog: [...context.combatLog],
  };
}

function makeDeck() {
  const cards = [];
  for (const [cardId, count] of STARTER_DECK) {
    for (let i = 0; i < count; i += 1) {
      cards.push({
        instanceId: `${cardId}-${i + 1}`,
        cardId,
      });
    }
  }
  return cards;
}

function shuffle(cards) {
  const next = [...cards];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function makeSide(side) {
  return {
    id: side,
    name: sideName(side),
    castleHp: CASTLE_HP,
    hand: [],
    deck: shuffle(makeDeck()),
    discard: [],
    maxResource: STARTING_MAX_RESOURCE,
    currentResource: 0,
    turnsTaken: 0,
  };
}

function addLog(context, message) {
  return {
    ...context,
    combatLog: [message, ...context.combatLog].slice(0, 8),
  };
}

function drawOne(context, side, reason = "抽 1 張牌") {
  const next = cloneContext(context);
  const actor = next[side];
  if (actor.hand.length >= HAND_CAP) {
    return addLog(next, `${actionName(side)}手牌已滿，跳過抽牌。`);
  }
  if (!actor.deck.length) {
    return addLog(next, `${actionName(side)}牌庫已空。`);
  }
  const [card, ...deck] = actor.deck;
  actor.deck = deck;
  actor.hand = [...actor.hand, card];
  return addLog(next, `${actionName(side)}${reason}。`);
}

function drawCards(context, side, count, reason) {
  let next = context;
  for (let i = 0; i < count; i += 1) {
    next = drawOne(next, side, reason);
  }
  if (count === STARTING_HAND && next[side].turnsTaken === 0) {
    next = ensurePlayableCardInHand(next, side, STARTING_MAX_RESOURCE);
  }
  return next;
}

function getCardDef(cardOrId) {
  const cardId = typeof cardOrId === "string" ? cardOrId : cardOrId?.cardId;
  return CARD_DEFS[cardId] || null;
}

function cardCost(cardOrId) {
  return getCardDef(cardOrId)?.cost ?? Number.POSITIVE_INFINITY;
}

function hasPlayableCard(sideState, maxCost) {
  return sideState.hand.some((card) => cardCost(card) <= maxCost);
}

function ensurePlayableCardInHand(context, side, maxCost) {
  if (hasPlayableCard(context[side], maxCost)) return context;

  const next = cloneContext(context);
  const actor = next[side];
  const deckIndex = actor.deck.findIndex((card) => cardCost(card) <= maxCost);
  if (deckIndex === -1) return next;

  const [playableCard] = actor.deck.splice(deckIndex, 1);
  if (actor.hand.length === 0) {
    actor.hand = [...actor.hand, playableCard];
    return next;
  }

  const replaceIndex = actor.hand.reduce((worstIndex, card, index, hand) => {
    if (cardCost(card) > cardCost(hand[worstIndex])) return index;
    return worstIndex;
  }, 0);
  const [displacedCard] = actor.hand.splice(replaceIndex, 1, playableCard);
  actor.deck = displacedCard ? shuffle([...actor.deck, displacedCard]) : actor.deck;
  return next;
}

function movementForDef(def) {
  if (def.type === CARD_TYPES.unit) {
    if (def.range > 1) return 1;
    if (def.range === 1) return 2;
  }
  return def.move || 0;
}

const ORTHOGONAL_DIRECTIONS = [
  { row: -1, col: 0 },
  { row: 1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
];

function preferredAdjacentSpawnOffsets(side) {
  return side === SIDES.player
    ? [
        { row: 0, col: 1 },
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
      ]
    : [
        { row: 0, col: -1 },
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: 1 },
      ];
}

export function getCardByInstance(context, side, instanceId) {
  const card = context[side].hand.find((item) => item.instanceId === instanceId);
  if (!card) return null;
  const def = getCardDef(card);
  return def ? { ...def, instanceId } : null;
}

function isInside(boardSize, row, col) {
  return row >= 0 && row < boardSize.rows && col >= 0 && col < boardSize.cols;
}

export function getUnitAt(context, row, col) {
  return context.board.find((unit) => unit.row === row && unit.col === col && unit.hp > 0) || null;
}

export function getCastleSideAtCell(context, row, col) {
  const castleRow = centerRowOf(context.boardSize);
  if (row !== castleRow) return null;
  if (col === 0) return SIDES.player;
  if (col === context.boardSize.cols - 1) return SIDES.enemy;
  return null;
}

function isOccupied(context, row, col) {
  return Boolean(getUnitAt(context, row, col) || getCastleSideAtCell(context, row, col));
}

function manhattan(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function pointFromUnit(unit) {
  return { row: unit.row, col: unit.col };
}

function pointFromCastle(context, side) {
  return {
    row: centerRowOf(context.boardSize),
    col: side === SIDES.enemy ? context.boardSize.cols - 1 : 0,
  };
}

function pointFromCaster(context, side) {
  return {
    row: centerRowOf(context.boardSize),
    col: side === SIDES.player ? 1 : context.boardSize.cols - 2,
  };
}

function attackKindFor(unit) {
  return unit.range > 1 ? "ranged" : "melee";
}

function addAttackEffect(context, effect) {
  const next = cloneContext(context);
  const sequence = next.nextAttackEffectId || 1;
  next.nextAttackEffectId = sequence + 1;
  next.attackEffects = [
    ...next.attackEffects.slice(-11),
    {
      id: `attack-${next.turn}-${sequence}`,
      owner: effect.owner,
      kind: effect.kind,
      attackerId: effect.attackerId || null,
      targetId: effect.targetId || null,
      targetType: effect.targetType,
      targetSide: effect.targetSide || null,
      from: { ...effect.from },
      to: { ...effect.to },
      label: effect.label,
    },
  ];
  return next;
}

function isAdjacentToFriendlyBuilding(context, side, row, col) {
  return ORTHOGONAL_DIRECTIONS.some(({ row: rowOffset, col: colOffset }) => {
    const piece = getUnitAt(context, row + rowOffset, col + colOffset);
    return piece?.owner === side && piece.kind === CARD_TYPES.building;
  });
}

function isAdjacentToFriendlyUnit(context, side, row, col) {
  return ORTHOGONAL_DIRECTIONS.some(({ row: rowOffset, col: colOffset }) => {
    const piece = getUnitAt(context, row + rowOffset, col + colOffset);
    return piece?.owner === side && piece.kind === CARD_TYPES.unit;
  });
}

function isSummonCell(context, side, row, col, def = null) {
  if (!isInside(context.boardSize, row, col) || isOccupied(context, row, col)) return false;
  const inHomeZone = side === SIDES.player ? col < SUMMON_ZONE_COLS : col >= context.boardSize.cols - SUMMON_ZONE_COLS;
  if (inHomeZone) return true;
  if (def?.type === CARD_TYPES.unit) return isAdjacentToFriendlyBuilding(context, side, row, col);
  if (def?.type === CARD_TYPES.building) return isAdjacentToFriendlyUnit(context, side, row, col);
  return false;
}

function removeCardFromHand(sideState, instanceId) {
  const card = sideState.hand.find((item) => item.instanceId === instanceId);
  return {
    card,
    hand: sideState.hand.filter((item) => item.instanceId !== instanceId),
  };
}

function createBoardPiece({ card, side, row, col, id, turn, ownerTurn }) {
  const def = getCardDef(card);
  return {
    id: `piece-${id}`,
    cardId: def.id,
    name: def.name,
    owner: side,
    kind: def.type,
    row,
    col,
    atk: def.atk || 0,
    hp: def.hp || 1,
    maxHp: def.hp || 1,
    move: movementForDef(def),
    range: def.range || 0,
    icon: def.icon,
    hasActed: false,
    hasMoved: false,
    summonedTurn: turn,
    summonedOwnerTurn: ownerTurn,
  };
}

function spawnWallGuardFromNode(context, node) {
  const spawnCell = preferredAdjacentSpawnOffsets(node.owner)
    .map(({ row, col }) => ({ row: node.row + row, col: node.col + col }))
    .find(({ row, col }) => isInside(context.boardSize, row, col) && !isOccupied(context, row, col));

  if (!spawnCell) return context;

  const next = cloneContext(context);
  const actor = next[node.owner];
  next.board = [
    ...next.board,
    createBoardPiece({
      card: { instanceId: `${WALL_GUARD_CARD_ID}-${next.nextPieceId}`, cardId: WALL_GUARD_CARD_ID },
      side: node.owner,
      row: spawnCell.row,
      col: spawnCell.col,
      id: next.nextPieceId,
      turn: next.turn,
      ownerTurn: actor.turnsTaken,
    }),
  ];
  next.nextPieceId += 1;
  return addLog(next, `${node.name} 生成 1/1 小士兵`);
}

function triggerWallNodeSpawns(context, side) {
  let next = context;
  const wallNodes = next.board.filter((unit) => unit.owner === side && unit.cardId === WALL_NODE_CARD_ID && unit.hp > 0);
  for (const staleWall of wallNodes) {
    const currentWall = next.board.find((unit) => unit.id === staleWall.id);
    if (!currentWall || currentWall.hp <= 0) continue;
    next = spawnWallGuardFromNode(next, currentWall);
  }
  return next;
}

export function isUnitFatigued() {
  return false;
}

function cleanupDead(context) {
  const next = cloneContext(context);
  const dead = next.board.filter((unit) => unit.hp <= 0);
  next.board = next.board.filter((unit) => unit.hp > 0);
  if (!dead.length) return next;
  return addLog(next, `${dead.map((unit) => unit.name).join("、")} 被移除。`);
}

function checkWinner(context) {
  const next = cloneContext(context);
  if (next.player.castleHp <= 0) {
    next.player.castleHp = 0;
    next.winner = SIDES.enemy;
    return addLog(next, "AI 摧毀玩家城堡，獲勝。");
  }
  if (next.enemy.castleHp <= 0) {
    next.enemy.castleHp = 0;
    next.winner = SIDES.player;
    return addLog(next, "玩家摧毀 AI 城堡，獲勝。");
  }
  return next;
}

function spendResource(context, side, cost) {
  const next = cloneContext(context);
  if (next[side].currentResource < cost) return null;
  next[side].currentResource -= cost;
  return next;
}

function clearSelection(context) {
  return {
    ...context,
    selectedCardId: null,
    selectedUnitId: null,
    selectionMode: "none",
    highlightedCells: [],
    highlightedCastles: [],
  };
}

function makeHighlightsForCard(context, side, card) {
  const def = getCardDef(card);
  if (!def) return { cells: [], castles: [] };
  if (def.type === CARD_TYPES.unit || def.type === CARD_TYPES.building) {
    const cells = [];
    for (let row = 0; row < context.boardSize.rows; row += 1) {
      for (let col = 0; col < context.boardSize.cols; col += 1) {
        if (isSummonCell(context, side, row, col, def)) cells.push({ row, col, type: "summon" });
      }
    }
    return { cells, castles: [] };
  }
  const enemySide = opponentOf(side);
  return {
    cells: context.board.filter((unit) => unit.owner === enemySide).map((unit) => ({ row: unit.row, col: unit.col, type: "spell" })),
    castles: [enemySide],
  };
}

function canUnitAct(context, unit) {
  return (
    unit &&
    unit.owner === context.activeSide &&
    unit.hasActed === false &&
    unit.hp > 0 &&
    !context.winner
  );
}

function validMoveCells(context, unit) {
  if (!canUnitAct(context, unit) || unit.move <= 0 || unit.hasMoved) return [];
  const cells = [];
  for (let row = 0; row < context.boardSize.rows; row += 1) {
    for (let col = 0; col < context.boardSize.cols; col += 1) {
      if (row === unit.row && col === unit.col) continue;
      if (manhattan(unit, { row, col }) <= unit.move && !isOccupied(context, row, col)) {
        cells.push({ row, col, type: "move" });
      }
    }
  }
  return cells;
}

function canAttackUnit(unit, target) {
  if (!unit || !target || unit.owner === target.owner || unit.atk <= 0 || unit.range <= 0) return false;
  return manhattan(unit, target) <= unit.range;
}

function bestApproachCellForPoint(context, unit, targetPoint) {
  if (!canUnitAct(context, unit) || unit.atk <= 0 || unit.range <= 0 || unit.move <= 0 || unit.hasMoved) return null;
  const candidates = validMoveCells(context, unit)
    .filter((cell) => manhattan(cell, targetPoint) <= unit.range)
    .sort((a, b) => {
      const aRangeFit = Math.abs(manhattan(a, targetPoint) - unit.range);
      const bRangeFit = Math.abs(manhattan(b, targetPoint) - unit.range);
      const aMoveCost = manhattan(unit, a);
      const bMoveCost = manhattan(unit, b);
      const center = centerRowOf(context.boardSize);
      return aRangeFit - bRangeFit || aMoveCost - bMoveCost || Math.abs(a.row - center) - Math.abs(b.row - center);
    });
  return candidates[0] || null;
}

function canReachAttackUnit(context, unit, target) {
  if (canAttackUnit(unit, target)) return true;
  if (!unit || !target || unit.owner === target.owner || unit.atk <= 0 || unit.range <= 0) return false;
  return Boolean(bestApproachCellForPoint(context, unit, pointFromUnit(target)));
}

function canCounterAttack(unit, target) {
  return unit?.hp > 0 && target?.hp > 0 && canAttackUnit(unit, target);
}

function castleDistance(context, unit, castleSide) {
  return manhattan(unit, {
    row: centerRowOf(context.boardSize),
    col: castleSide === SIDES.enemy ? context.boardSize.cols - 1 : 0,
  });
}

function canAttackCastle(context, unit, castleSide) {
  if (!canUnitAct(context, unit) || unit.atk <= 0 || unit.owner === castleSide) return false;
  return castleDistance(context, unit, castleSide) <= unit.range;
}

function canReachAttackCastle(context, unit, castleSide) {
  if (canAttackCastle(context, unit, castleSide)) return true;
  if (!canUnitAct(context, unit) || unit.atk <= 0 || unit.range <= 0 || unit.owner === castleSide) return false;
  return Boolean(bestApproachCellForPoint(context, unit, pointFromCastle(context, castleSide)));
}

function validAttackTargets(context, unit) {
  if (!canUnitAct(context, unit) || unit.atk <= 0 || unit.range <= 0) return { cells: [], castles: [] };
  const cells = context.board
    .filter((target) => target.owner !== unit.owner && canReachAttackUnit(context, unit, target))
    .map((target) => ({ row: target.row, col: target.col, type: "attack" }));
  const enemyCastle = opponentOf(unit.owner);
  const castles = canReachAttackCastle(context, unit, enemyCastle) ? [enemyCastle] : [];
  return { cells, castles };
}

function makeHighlightsForUnit(context, unit) {
  const moves = validMoveCells(context, unit);
  const attacks = validAttackTargets(context, unit);
  return {
    cells: [...moves, ...attacks.cells],
    castles: attacks.castles,
  };
}

export function createGameContext() {
  let context = {
    boardSize: { ...BOARD_SIZE },
    board: [],
    turn: 0,
    activeSide: SIDES.player,
    phase: "intro",
    player: makeSide(SIDES.player),
    enemy: makeSide(SIDES.enemy),
    selectedCardId: null,
    selectedUnitId: null,
    selectionMode: "none",
    highlightedCells: [],
    highlightedCastles: [],
    attackEffects: [],
    combatLog: [],
    winner: null,
    nextPieceId: 1,
    nextAttackEffectId: 1,
  };

  context = drawCards(context, SIDES.player, STARTING_HAND, "取得起始手牌");
  context = drawCards(context, SIDES.enemy, STARTING_HAND, "取得起始手牌");
  return addLog(context, "城堡戰棋準備完成。");
}

export function beginTurn(context, side) {
  let next = cloneContext(context);
  next.activeSide = side;
  next.phase = "cardPhase";
  next.turn += 1;
  next = clearSelection(next);
  const actor = next[side];
  const nextMax = actor.turnsTaken === 0 ? actor.maxResource : Math.min(actor.maxResource + 1, MAX_RESOURCE);
  actor.maxResource = nextMax;
  actor.currentResource = nextMax;
  actor.turnsTaken += 1;
  next.board = next.board.map((unit) => (unit.owner === side ? { ...unit, hasActed: false, hasMoved: false } : unit));
  next = addLog(next, `${actor.name}回合開始：資源 ${actor.currentResource}/${actor.maxResource}。`);
  for (let i = 0; i < DRAW_PER_TURN; i += 1) next = drawOne(next, side);
  if (actor.turnsTaken <= EARLY_TURN_PLAYABLE_GUARD_TURNS) {
    next = ensurePlayableCardInHand(next, side, actor.currentResource);
  }
  next = triggerWallNodeSpawns(next, side);
  return next;
}

export function enterCommandPhase(context) {
  const next = clearSelection(cloneContext(context));
  next.phase = "commandPhase";
  return addLog(next, `${next[next.activeSide].name}進入指揮階段。`);
}

export function selectCard(context, instanceId) {
  const side = context.activeSide;
  if (side !== SIDES.player || context.phase !== "cardPhase") return context;
  if (context.selectedCardId === instanceId) return clearSelection(cloneContext(context));
  const card = context[side].hand.find((item) => item.instanceId === instanceId);
  if (!card) return context;
  const def = getCardDef(card);
  const highlights = makeHighlightsForCard(context, side, card);
  return {
    ...cloneContext(context),
    selectedCardId: instanceId,
    selectedUnitId: null,
    selectionMode: def.type,
    highlightedCells: highlights.cells,
    highlightedCastles: highlights.castles,
  };
}

export function selectUnit(context, unitId) {
  const unit = context.board.find((item) => item.id === unitId);
  if (!unit || unit.owner !== context.activeSide || !["cardPhase", "commandPhase"].includes(context.phase)) return context;
  if (!canUnitAct(context, unit)) {
    return addLog(clearSelection(cloneContext(context)), `${unit.name}本回合已行動或無法行動。`);
  }
  const highlights = makeHighlightsForUnit(context, unit);
  return {
    ...cloneContext(context),
    selectedCardId: null,
    selectedUnitId: unit.id,
    selectionMode: "unit",
    highlightedCells: highlights.cells,
    highlightedCastles: highlights.castles,
  };
}

function playBoardCard(context, card, row, col) {
  const side = context.activeSide;
  const def = getCardDef(card);
  if (!isSummonCell(context, side, row, col, def)) return addLog(context, "請選擇可召喚的空格。");
  let next = spendResource(context, side, def.cost);
  if (!next) return addLog(context, "資源不足。");
  const actor = next[side];
  const removed = removeCardFromHand(actor, card.instanceId);
  actor.hand = removed.hand;
  actor.discard = [...actor.discard, removed.card];
  next.board = [
    ...next.board,
    createBoardPiece({
      card,
      side,
      row,
      col,
      id: next.nextPieceId,
      turn: next.turn,
      ownerTurn: actor.turnsTaken,
    }),
  ];
  next.nextPieceId += 1;
  next = addLog(next, `${actor.name}召喚 ${def.name}。`);
  return clearSelection(next);
}

function applyDamageToUnit(context, targetId, amount, sourceName) {
  let next = cloneContext(context);
  const target = next.board.find((unit) => unit.id === targetId);
  if (!target) return context;
  target.hp -= amount;
  next = addLog(next, `${sourceName} 對 ${target.name} 造成 ${amount} 傷害。`);
  return cleanupDead(next);
}

function applyDamageToCastle(context, side, amount, sourceName) {
  let next = cloneContext(context);
  next[side].castleHp = Math.max(0, next[side].castleHp - amount);
  next = addLog(next, `${sourceName} 攻擊 ${next[side].name}城堡，造成 ${amount} 傷害。`);
  return checkWinner(next);
}

function playSpellOnUnit(context, card, targetId) {
  const side = context.activeSide;
  const def = getCardDef(card);
  const target = context.board.find((unit) => unit.id === targetId);
  if (!target || target.owner === side) return addLog(context, "請選擇敵方目標。");
  let next = spendResource(context, side, def.cost);
  if (!next) return addLog(context, "資源不足。");
  const actor = next[side];
  const removed = removeCardFromHand(actor, card.instanceId);
  actor.hand = removed.hand;
  actor.discard = [...actor.discard, removed.card];
  next = addAttackEffect(next, {
    owner: side,
    kind: "spell",
    targetType: "unit",
    targetId: target.id,
    from: pointFromCaster(next, side),
    to: pointFromUnit(target),
    label: `${def.name} 命中 ${target.name}`,
  });
  next = applyDamageToUnit(next, targetId, def.damage, def.name);
  return clearSelection(checkWinner(next));
}

function playSpellOnCastle(context, card, castleSide) {
  const side = context.activeSide;
  const def = getCardDef(card);
  if (castleSide === side) return addLog(context, "請選擇敵方城堡。");
  let next = spendResource(context, side, def.cost);
  if (!next) return addLog(context, "資源不足。");
  const actor = next[side];
  const removed = removeCardFromHand(actor, card.instanceId);
  actor.hand = removed.hand;
  actor.discard = [...actor.discard, removed.card];
  next = addAttackEffect(next, {
    owner: side,
    kind: "spell",
    targetType: "castle",
    targetSide: castleSide,
    from: pointFromCaster(next, side),
    to: pointFromCastle(next, castleSide),
    label: `${def.name} 攻擊 ${next[castleSide].name}城堡`,
  });
  next = applyDamageToCastle(next, castleSide, def.damage, def.name);
  return clearSelection(next);
}

function moveSelectedUnit(context, unit, row, col) {
  const canMove = validMoveCells(context, unit).some((cell) => cell.row === row && cell.col === col);
  if (!canMove) return addLog(context, "此格無法移動。");
  const next = cloneContext(context);
  next.board = next.board.map((item) => (item.id === unit.id ? { ...item, row, col, hasMoved: true } : item));
  const moved = next.board.find((item) => item.id === unit.id);
  const highlights = makeHighlightsForUnit(next, moved);
  return {
    ...addLog(next, `${unit.name}移動。`),
    selectedUnitId: unit.id,
    selectedCardId: null,
    selectionMode: "unit",
    highlightedCells: highlights.cells,
    highlightedCastles: highlights.castles,
  };
}

function attackUnit(context, attacker, target) {
  if (!canUnitAct(context, attacker) || !canAttackUnit(attacker, target)) return addLog(context, "目標超出射程。");
  let next = cloneContext(context);
  const attackerPoint = pointFromUnit(attacker);
  const targetPoint = pointFromUnit(target);
  const shouldCounterAttack = canCounterAttack(target, attacker);
  next = addAttackEffect(next, {
    owner: attacker.owner,
    kind: attackKindFor(attacker),
    attackerId: attacker.id,
    targetType: "unit",
    targetId: target.id,
    from: attackerPoint,
    to: targetPoint,
    label: `${attacker.name} 攻擊 ${target.name}`,
  });
  next.board = next.board.map((unit) => (unit.id === attacker.id ? { ...unit, hasActed: true, hasMoved: true } : unit));
  next = applyDamageToUnit(next, target.id, attacker.atk, attacker.name);
  const survivingAttacker = next.board.find((unit) => unit.id === attacker.id);
  if (shouldCounterAttack && survivingAttacker) {
    next = addAttackEffect(next, {
      owner: target.owner,
      kind: attackKindFor(target),
      attackerId: target.id,
      targetType: "unit",
      targetId: survivingAttacker.id,
      from: targetPoint,
      to: attackerPoint,
      label: `${target.name} 反擊 ${survivingAttacker.name}`,
    });
    next = applyDamageToUnit(next, survivingAttacker.id, target.atk, `${target.name}反擊`);
  }
  return clearSelection(checkWinner(next));
}

function attackCastle(context, attacker, castleSide) {
  if (!canAttackCastle(context, attacker, castleSide)) return addLog(context, "城堡超出射程。");
  let next = cloneContext(context);
  next = addAttackEffect(next, {
    owner: attacker.owner,
    kind: attackKindFor(attacker),
    attackerId: attacker.id,
    targetType: "castle",
    targetSide: castleSide,
    from: pointFromUnit(attacker),
    to: pointFromCastle(next, castleSide),
    label: `${attacker.name} 攻擊 ${next[castleSide].name}城堡`,
  });
  next.board = next.board.map((unit) => (unit.id === attacker.id ? { ...unit, hasActed: true, hasMoved: true } : unit));
  next = applyDamageToCastle(next, castleSide, attacker.atk, attacker.name);
  return clearSelection(next);
}

function moveIntoAttackRange(context, attacker, targetPoint) {
  const approach = bestApproachCellForPoint(context, attacker, targetPoint);
  if (!approach) return null;
  const movedContext = moveSelectedUnit(
    {
      ...context,
      selectedUnitId: attacker.id,
      selectedCardId: null,
      selectionMode: "unit",
    },
    attacker,
    approach.row,
    approach.col,
  );
  return movedContext.board.find((unit) => unit.id === attacker.id) ? movedContext : null;
}

function attackUnitWithApproach(context, attacker, target) {
  if (canAttackUnit(attacker, target)) return attackUnit(context, attacker, target);
  const movedContext = moveIntoAttackRange(context, attacker, pointFromUnit(target));
  if (!movedContext) return addLog(context, "目標超出移動後可攻擊範圍。");
  const movedAttacker = movedContext.board.find((unit) => unit.id === attacker.id);
  const currentTarget = movedContext.board.find((unit) => unit.id === target.id);
  if (!movedAttacker || !currentTarget) return clearSelection(movedContext);
  return attackUnit(movedContext, movedAttacker, currentTarget);
}

function attackCastleWithApproach(context, attacker, castleSide) {
  if (canAttackCastle(context, attacker, castleSide)) return attackCastle(context, attacker, castleSide);
  const movedContext = moveIntoAttackRange(context, attacker, pointFromCastle(context, castleSide));
  if (!movedContext) return addLog(context, "城堡超出移動後可攻擊範圍。");
  const movedAttacker = movedContext.board.find((unit) => unit.id === attacker.id);
  if (!movedAttacker) return clearSelection(movedContext);
  return attackCastle(movedContext, movedAttacker, castleSide);
}

export function handleCellClick(context, row, col) {
  if (context.winner) return context;
  if (!isInside(context.boardSize, row, col)) return context;
  const unit = getUnitAt(context, row, col);

  if (context.phase === "cardPhase" && context.selectedCardId) {
    const card = context[context.activeSide].hand.find((item) => item.instanceId === context.selectedCardId);
    const def = getCardDef(card);
    if (!card || !def) return clearSelection(cloneContext(context));
    if (def.type === CARD_TYPES.unit || def.type === CARD_TYPES.building) return playBoardCard(context, card, row, col);
    if (def.type === CARD_TYPES.spell && unit) return playSpellOnUnit(context, card, unit.id);
    return addLog(context, "請選擇單位或城堡目標。");
  }

  const castleSide = getCastleSideAtCell(context, row, col);
  if (castleSide) return handleCastleClick(context, castleSide);

  if (!["cardPhase", "commandPhase"].includes(context.phase)) return context;
  if (unit?.owner === context.activeSide) return selectUnit(context, unit.id);
  if (!context.selectedUnitId) return addLog(context, "請先選擇一個已準備好的己方單位。");
  const selected = context.board.find((item) => item.id === context.selectedUnitId);
  if (!selected) return clearSelection(cloneContext(context));
  if (unit && unit.owner !== context.activeSide) return attackUnitWithApproach(context, selected, unit);
  if (!unit) return moveSelectedUnit(context, selected, row, col);
  return context;
}

export function handleCastleClick(context, castleSide) {
  if (context.winner) return context;
  if (context.phase === "cardPhase" && context.selectedCardId) {
    const card = context[context.activeSide].hand.find((item) => item.instanceId === context.selectedCardId);
    const def = getCardDef(card);
    if (def?.type === CARD_TYPES.spell) return playSpellOnCastle(context, card, castleSide);
  }
  if (["cardPhase", "commandPhase"].includes(context.phase) && context.selectedUnitId) {
    const selected = context.board.find((unit) => unit.id === context.selectedUnitId);
    if (selected) return attackCastleWithApproach(context, selected, castleSide);
  }
  return addLog(
    context,
    "城堡可作為目標：出牌階段先選法術，或指揮階段先選已準備且射程可及的單位，再點敵方城堡。",
  );
}

export function cancelSelection(context) {
  return clearSelection(cloneContext(context));
}

function affordableCards(context, side) {
  return context[side].hand
    .map((card) => ({ card, def: getCardDef(card) }))
    .filter((item) => item.def && item.def.cost <= context[side].currentResource);
}

function preferredSummonCells(context, side, def) {
  const center = centerRowOf(context.boardSize);
  const targetCastle = {
    row: center,
    col: side === SIDES.enemy ? 0 : context.boardSize.cols - 1,
  };
  const cells = [];
  for (let row = 0; row < context.boardSize.rows; row += 1) {
    for (let col = 0; col < context.boardSize.cols; col += 1) {
      if (!isSummonCell(context, side, row, col, def)) continue;
      const homeZoneBonus = side === SIDES.enemy ? col >= context.boardSize.cols - SUMMON_ZONE_COLS : col < SUMMON_ZONE_COLS;
      cells.push({
        row,
        col,
        score: def.cost * 10 - manhattan({ row, col }, targetCastle) * 2 - Math.abs(row - center) + (homeZoneBonus ? 0 : 6),
      });
    }
  }
  return cells.sort((a, b) => b.score - a.score);
}

export function runEnemyCardPhase(context) {
  let next = context;
  const side = SIDES.enemy;
  const maxPlays = 2;
  for (let plays = 0; plays < maxPlays; plays += 1) {
    const options = affordableCards(next, side);
    if (!options.length) break;

    const lethal = options.find((item) => item.def.type === CARD_TYPES.spell && item.def.damage >= next.player.castleHp);
    if (lethal) {
      next = {
        ...next,
        selectedCardId: lethal.card.instanceId,
      };
      next = playSpellOnCastle(next, lethal.card, SIDES.player);
      break;
    }

    const damageSpell = options.find((item) => item.def.type === CARD_TYPES.spell);
    const bestTarget = [...next.board].filter((unit) => unit.owner === SIDES.player).sort((a, b) => a.hp - b.hp || b.atk - a.atk)[0];
    if (damageSpell && bestTarget && bestTarget.hp <= damageSpell.def.damage) {
      next = {
        ...next,
        selectedCardId: damageSpell.card.instanceId,
      };
      next = playSpellOnUnit(next, damageSpell.card, bestTarget.id);
      continue;
    }

    const boardCards = options
      .filter((item) => item.def.type === CARD_TYPES.unit || item.def.type === CARD_TYPES.building)
      .sort((a, b) => b.def.cost - a.def.cost || b.def.hp - a.def.hp);
    const boardCard = boardCards.find((item) => preferredSummonCells(next, side, item.def).length);
    if (boardCard) {
      const [cell] = preferredSummonCells(next, side, boardCard.def);
      next = {
        ...next,
        selectedCardId: boardCard.card.instanceId,
      };
      next = playBoardCard(next, boardCard.card, cell.row, cell.col);
      continue;
    }

    break;
  }
  return clearSelection(next);
}

function chooseAttackTarget(context, unit) {
  const enemyCastle = opponentOf(unit.owner);
  if (canAttackCastle(context, unit, enemyCastle)) return { type: "castle", side: enemyCastle };
  const targets = context.board
    .filter((target) => target.owner !== unit.owner && canAttackUnit(unit, target))
    .sort((a, b) => (a.hp <= unit.atk ? -1 : 1) - (b.hp <= unit.atk ? -1 : 1) || a.hp - b.hp || b.atk - a.atk);
  return targets[0] ? { type: "unit", unit: targets[0] } : null;
}

function moveTowardEnemyCastle(context, unit) {
  const center = centerRowOf(context.boardSize);
  const targetCastle = {
    row: center,
    col: unit.owner === SIDES.enemy ? 0 : context.boardSize.cols - 1,
  };
  const candidates = validMoveCells(context, unit).sort((a, b) => {
    return manhattan(a, targetCastle) - manhattan(b, targetCastle) || Math.abs(a.row - center) - Math.abs(b.row - center);
  });
  if (!candidates.length) return context;
  return moveSelectedUnit(
    {
      ...context,
      selectedUnitId: unit.id,
    },
    unit,
    candidates[0].row,
    candidates[0].col,
  );
}

export function runEnemyCommandPhase(context) {
  let next = context;
  const units = [...next.board]
    .filter((unit) => unit.owner === SIDES.enemy && canUnitAct(next, unit))
    .sort((a, b) => a.col - b.col || Math.abs(a.row - centerRowOf(next.boardSize)) - Math.abs(b.row - centerRowOf(next.boardSize)));

  for (const staleUnit of units) {
    const current = next.board.find((unit) => unit.id === staleUnit.id);
    if (!canUnitAct(next, current)) continue;
    const firstTarget = chooseAttackTarget(next, current);
    if (firstTarget?.type === "castle") {
      next = attackCastle(next, current, firstTarget.side);
      if (next.winner) break;
      continue;
    }
    if (firstTarget?.type === "unit") {
      next = attackUnit(next, current, firstTarget.unit);
      continue;
    }
    next = moveTowardEnemyCastle(next, current);
    const moved = next.board.find((unit) => unit.id === current.id);
    const secondTarget = chooseAttackTarget(next, moved);
    if (secondTarget?.type === "castle") {
      next = attackCastle(next, moved, secondTarget.side);
      if (next.winner) break;
    } else if (secondTarget?.type === "unit") {
      next = attackUnit(next, moved, secondTarget.unit);
    } else {
      next = clearSelection(next);
    }
  }
  return clearSelection(next);
}

export function describePhase(context) {
  if (context.winner) return `${context[context.winner].name}獲勝`;
  if (context.phase === "cardPhase") return "出牌階段";
  if (context.phase === "commandPhase") return "指揮階段";
  return "準備中";
}

export { CARD_DEFS, CARD_TYPES, SIDES };
