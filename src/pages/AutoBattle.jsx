import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const GAME_WIDTH = 500;
const GAME_HEIGHT = 520;

const BOARD_PADDING_X = 10;
const BOARD_PADDING_Y = 14;

// Distance from the top of the board to the battle area container
const BATTLE_TOP = 80;

const BOARD_WIDTH = GAME_WIDTH - BOARD_PADDING_X * 2;
// Keep the battle area fully inside the fixed board height
const BOARD_HEIGHT = GAME_HEIGHT - BATTLE_TOP - BOARD_PADDING_Y * 2;

const PLAYER_BASE_Y = BOARD_HEIGHT - 42;
const ENEMY_BASE_Y = 24;

const BASE_RADIUS = 36;

// Visual enemy base is positioned with a small offset in JSX (top: ENEMY_BASE_Y - 8).
// Its true centerline in the battlefield coordinate system is therefore:
const ENEMY_BASE_CENTER_Y = ENEMY_BASE_Y + (BASE_RADIUS - 8);

const PLAYER_BASE_MAX_HP = 240;
const ENEMY_BASE_MAX_HP = 240;

const ENERGY_MAX = 100;
const ENERGY_REGEN_PER_SEC = 10;

function getStageParams(stage) {
  const s = Math.max(1, stage);
  const t = s - 1;

  // 逐關變難，但不要暴增（偏休閒）
  const enemyEnergyRegenPerSec = clamp(6.0 + t * 0.55, 5.8, 12.5);
  const enemyMaxUnitsOnField = clamp(4 + Math.floor(t / 2), 4, 10);

  const spawnMinSec = clamp(2.6 - t * 0.1, 1.35, 2.6);
  const spawnMaxSec = clamp(3.8 - t * 0.1, spawnMinSec + 0.7, 3.8);

  const enemyStartEnergy = clamp(24 + t * 2.5, 20, 60);
  const enemyBaseMaxHp = Math.round(ENEMY_BASE_MAX_HP * (1 + t * 0.08));

  const enemyUnitHpMul = clamp(1 + t * 0.06, 1, 1.8);
  const enemyUnitAtkMul = clamp(1 + t * 0.05, 1, 1.6);

  // 玩家能量上限隨關卡增加
  const playerEnergyMax = Math.round(ENERGY_MAX + t * 10);

  return {
    enemyEnergyRegenPerSec,
    enemyMaxUnitsOnField,
    spawnMinSec,
    spawnMaxSec,
    enemyStartEnergy,
    enemyBaseMaxHp,
    enemyUnitHpMul,
    enemyUnitAtkMul,
    playerEnergyMax,
  };
}

const TICK_MS = 50;

const UNIT_CATALOG = [
  {
    id: "kitty",
    name: "小貓衝衝",
    emoji: "🐱",
    cost: 5,
    maxHp: 55,
    atk: 10,
    atkCd: 0.8,
    range: 28,
    speed: 56,
    role: "近戰",
    spawnCd: 1,
  },
  {
    id: "bunny",
    name: "兔兔射手",
    emoji: "🐰",
    cost: 10,
    maxHp: 55,
    atk: 12,
    atkCd: 0.6,
    range: 95,
    speed: 48,
    role: "遠程",
    spawnCd: 1.5,
  },
  {
    id: "panda",
    name: "胖胖坦",
    emoji: "🐼",
    cost: 10,
    maxHp: 140,
    atk: 12,
    atkCd: 0.95,
    range: 30,
    speed: 32,
    role: "坦克",
    spawnCd: 1.5,
  },
  {
    id: "fox",
    name: "狐狸法師",
    emoji: "🦊",
    cost: 15,
    maxHp: 60,
    atk: 18,
    atkCd: 1.1,
    range: 130,
    speed: 40,
    role: "法術",
    spawnCd: 2,
  },
];

const SKILL = {
  id: "bubble",
  name: "泡泡結界",
  emoji: "🫧",
  cost: 20,
  cooldownSec: 4,
  durationSec: 3.8,
  slowMultiplier: 0.5,
  zoneTop: 150,
  zoneBottom: 290,
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rngNext(seed) {
  // LCG (deterministic, no Math.random)
  const nextSeed = (seed * 1664525 + 1013904223) >>> 0;
  return { seed: nextSeed, value: nextSeed / 4294967296 };
}

function rngPick(seed, list) {
  if (!list.length) return { seed, item: null };
  const r = rngNext(seed);
  const idx = Math.floor(r.value * list.length);
  return { seed: r.seed, item: list[idx] };
}

function fmt(num) {
  return Math.round(num);
}

function createUnit({ id, side, y, xJitter, uid, hpMul = 1, atkMul = 1 }) {
  const base = UNIT_CATALOG.find((u) => u.id === id);
  if (!base) return null;

  const maxHp = Math.max(1, Math.round(base.maxHp * hpMul));
  const atk = Math.max(1, Math.round(base.atk * atkMul));

  return {
    uid: `${side}-${uid}`,
    typeId: id,
    side,
    name: base.name,
    emoji: base.emoji,
    cost: base.cost,
    role: base.role,

    maxHp,
    hp: maxHp,

    atk,
    atkCd: base.atkCd,
    cdLeft: 0,
    range: base.range,

    speed: base.speed,

    y,
    xJitter,

    bubbledUntilMs: 0,
    lastBubbleCastId: 0,

    lastHitAt: 0,
  };
}

function findFrontTarget(units, self) {
  const enemies = units.filter((u) => u.side !== self.side && u.hp > 0);
  if (enemies.length === 0) return null;

  if (self.side === "player") {
    // 往上走，找「在自己上方」最近的敵人
    let best = null;
    let bestDist = Infinity;
    for (const e of enemies) {
      const dist = self.y - e.y;
      if (dist < 0) continue;
      if (dist < bestDist) {
        bestDist = dist;
        best = e;
      }
    }
    return best;
  }

  // enemy 往下走，找「在自己下方」最近的敵人
  let best = null;
  let bestDist = Infinity;
  for (const e of enemies) {
    const dist = e.y - self.y;
    if (dist < 0) continue;
    if (dist < bestDist) {
      bestDist = dist;
      best = e;
    }
  }
  return best;
}

function stepGame(prev, dtSec) {
  const nowMs = prev.timeMs + dtSec * 1000;
  const stageParams = getStageParams(prev.stage || 1);

  const clampUnitY = (y, side) => {
    const minY = side === "player" ? ENEMY_BASE_CENTER_Y : 0;
    const maxY = side === "enemy" ? PLAYER_BASE_Y : BOARD_HEIGHT;
    return clamp(y, minY, maxY);
  };

  const next = {
    ...prev,
    timeMs: nowMs,
    player: { ...prev.player },
    enemy: { ...prev.enemy },
    effects: { ...prev.effects },
    units: prev.units,
    log: prev.log,
  };

  if (next.phase !== "playing") return next;

  // Boss spawn logic (every 5 stages, at 80% enemy HP)
  const isBossStage = next.stage % 5 === 0;
  if (isBossStage && !next.bossSpawned) {
    const enemyHpPct = next.enemy.baseHp / next.enemy.baseMaxHp;
    if (enemyHpPct <= 0.8) {
      const pickedRes = rngPick(next.randSeed, UNIT_CATALOG);
      const picked = pickedRes.item;
      next.randSeed = pickedRes.seed;

      const jitterRes = rngNext(next.randSeed);
      next.randSeed = jitterRes.seed;
      const xJitter = 0.5;

      next.idCounter += 1;

      const bossHpMul = stageParams.enemyUnitHpMul * 2.5;
      const bossAtkMul = stageParams.enemyUnitAtkMul * 0.7;

      const boss = createUnit({
        id: picked.id,
        side: "enemy",
        y: ENEMY_BASE_Y + 18,
        xJitter,
        uid: next.idCounter,
        hpMul: bossHpMul,
        atkMul: bossAtkMul,
      });
      boss.isBoss = true;
      boss.bossScale = 1.8;
      // Slower attack speed for boss
      boss.atkCd = boss.atkCd * 1.5;

      // Boss shockwave effect - push player units back
      for (const u of next.units) {
        if (u.side === "player" && u.hp > 0) {
          const midline = BOARD_HEIGHT / 2;
          if (u.y < midline) {
            u.y = clampUnitY(u.y + 80, u.side);
          }
          u.shockwaveUntilMs = nowMs + 600;
        }
      }

      next.units = [...next.units, boss];
      next.bossSpawned = true;
      next.log = [
        ...next.log.slice(-4),
        `💀 魔王降臨！${picked.emoji} ${picked.name} (Boss)！`,
      ];
    }
  }

  // Get player energy max from state
  const playerEnergyMax = next.player.energyMax || ENERGY_MAX;

  // energy regen
  next.player.energy = clamp(
    next.player.energy + ENERGY_REGEN_PER_SEC * dtSec,
    0,
    playerEnergyMax,
  );
  next.enemy.energy = clamp(
    next.enemy.energy + stageParams.enemyEnergyRegenPerSec * dtSec,
    0,
    ENERGY_MAX,
  );

  // skill timers
  next.player.skillCdLeft = Math.max(0, next.player.skillCdLeft - dtSec);

  // spawn cooldowns
  const oldSpawnCds = next.player.spawnCds || {
    kitty: 0,
    bunny: 0,
    panda: 0,
    fox: 0,
  };
  next.player.spawnCds = {
    kitty: Math.max(0, oldSpawnCds.kitty - dtSec),
    bunny: Math.max(0, oldSpawnCds.bunny - dtSec),
    panda: Math.max(0, oldSpawnCds.panda - dtSec),
    fox: Math.max(0, oldSpawnCds.fox - dtSec),
  };
  if (next.effects.bubbleUntilMs && nowMs >= next.effects.bubbleUntilMs) {
    next.effects.bubbleUntilMs = 0;
  }

  // enemy AI spawn
  next.enemy.spawnCdLeft = Math.max(0, next.enemy.spawnCdLeft - dtSec);
  if (next.enemy.spawnCdLeft <= 0) {
    const enemyCount = next.units.reduce(
      (acc, u) => (u.side === "enemy" && u.hp > 0 ? acc + 1 : acc),
      0,
    );
    if (enemyCount >= stageParams.enemyMaxUnitsOnField) {
      next.enemy.spawnCdLeft = 0.95;
    } else {
      const affordable = UNIT_CATALOG.filter(
        (u) => u.cost <= next.enemy.energy,
      );
      if (affordable.length > 0 && next.units.length < 500) {
        const pickedRes = rngPick(next.randSeed, affordable);
        const picked = pickedRes.item;
        next.randSeed = pickedRes.seed;

        const jitterRes = rngNext(next.randSeed);
        next.randSeed = jitterRes.seed;
        const xJitter = 0.55 + (jitterRes.value * 0.18 - 0.09);

        next.idCounter += 1;

        const spawn = createUnit({
          id: picked.id,
          side: "enemy",
          y: ENEMY_BASE_Y + 18,
          xJitter,
          uid: next.idCounter,
          hpMul: stageParams.enemyUnitHpMul,
          atkMul: stageParams.enemyUnitAtkMul,
        });

        next.enemy.energy -= picked.cost;
        const cdRes = rngNext(next.randSeed);
        next.randSeed = cdRes.seed;
        next.enemy.spawnCdLeft =
          stageParams.spawnMinSec +
          cdRes.value * (stageParams.spawnMaxSec - stageParams.spawnMinSec);

        next.units = [...next.units, spawn];
        next.log = [
          ...next.log.slice(-4),
          `🔴 敵方派出 ${picked.emoji} ${picked.name}`,
        ];
      } else {
        next.enemy.spawnCdLeft = 0.9;
      }
    }
  }

  const bubbleActive = !!next.effects.bubbleUntilMs;
  const bubbleCastId = next.effects.bubbleCastId || 0;

  // Simulate units
  const unitsById = new Map(next.units.map((u) => [u.uid, { ...u }]));
  const unitsList = [...unitsById.values()];

  // We'll process in a stable order (front-to-back) to reduce jitter
  unitsList.sort((a, b) => a.y - b.y);

  for (const unit of unitsList) {
    if (unit.hp <= 0) continue;

    unit.cdLeft = Math.max(0, unit.cdLeft - dtSec);

    const target = findFrontTarget(unitsList, unit);
    const dir = unit.side === "player" ? -1 : 1;

    const inBubbleZone =
      bubbleActive &&
      unit.side === "enemy" &&
      unit.y >= SKILL.zoneTop &&
      unit.y <= SKILL.zoneBottom;

    // Bubble skill effect: while inside the zone, enemies are slowed.
    // Additionally, each bubble cast applies a one-time "bubble pop" on each enemy:
    // knockback + halve current HP + add bubbled VFX.
    if (inBubbleZone && unit.lastBubbleCastId !== bubbleCastId) {
      unit.lastBubbleCastId = bubbleCastId;
      unit.bubbledUntilMs = Math.max(unit.bubbledUntilMs || 0, nowMs + 900);
      unit.hp = Math.max(1, Math.ceil(unit.hp * 0.5));
      unit.lastHitAt = nowMs;
      unit.y = clampUnitY(unit.y - 52, unit.side);
    }

    const speedMultiplier = inBubbleZone ? SKILL.slowMultiplier : 1;

    // Shockwave slow effect
    const inShockwave = unit.shockwaveUntilMs && nowMs < unit.shockwaveUntilMs;
    const shockwaveMultiplier = inShockwave ? 0.3 : 1;

    if (target) {
      const dist = Math.abs(unit.y - target.y);
      if (dist <= unit.range) {
        if (unit.cdLeft <= 0) {
          unit.cdLeft = unit.atkCd;

          // AOE attack for fox only (not boss)
          const base = UNIT_CATALOG.find((u) => u.id === unit.typeId);
          const hasAoe = base && base.aoe;

          if (hasAoe) {
            const aoeRadius = base.aoeRadius || 45;
            for (const e of unitsList) {
              if (e.side !== unit.side && e.hp > 0) {
                const aoeDist = Math.abs(e.y - target.y);
                if (aoeDist <= aoeRadius) {
                  e.hp = Math.max(0, e.hp - unit.atk);
                  e.lastHitAt = nowMs;
                  e.y = clampUnitY(e.y + dir * 3, e.side);
                  unitsById.set(e.uid, e);
                }
              }
            }
          } else {
            target.hp = Math.max(0, target.hp - unit.atk);
            target.lastHitAt = nowMs;
            target.y = clampUnitY(target.y + dir * 3, target.side);
          }
        }
      } else {
        unit.y = clampUnitY(
          unit.y +
            dir * unit.speed * speedMultiplier * shockwaveMultiplier * dtSec,
          unit.side,
        );
      }
    } else {
      // no unit target, walk towards base
      unit.y = clampUnitY(
        unit.y + dir * unit.speed * speedMultiplier * dtSec,
        unit.side,
      );

      if (unit.side === "player") {
        const distToEnemyBase = Math.abs(unit.y - ENEMY_BASE_Y);
        if (distToEnemyBase <= BASE_RADIUS + unit.range) {
          if (unit.cdLeft <= 0) {
            unit.cdLeft = unit.atkCd;
            next.enemy.baseHp = Math.max(0, next.enemy.baseHp - unit.atk);
            next.enemy.baseLastHitAt = nowMs;
          }
        }
      } else {
        const distToPlayerBase = Math.abs(unit.y - PLAYER_BASE_Y);
        if (distToPlayerBase <= BASE_RADIUS + unit.range) {
          if (unit.cdLeft <= 0) {
            unit.cdLeft = unit.atkCd;
            next.player.baseHp = Math.max(0, next.player.baseHp - unit.atk);
            next.player.baseLastHitAt = nowMs;
          }
        }
      }
    }

    unitsById.set(unit.uid, unit);
    if (target) unitsById.set(target.uid, target);
  }

  // Clean up dead units and reward energy for killing enemies
  const allUnits = [...unitsById.values()];
  let energyGained = 0;

  for (const u of allUnits) {
    if (u.hp <= 0 && u.side === "enemy") {
      // Player kills enemy → gain energy equal to enemy's cost
      energyGained += u.cost;
    }
  }

  if (energyGained > 0) {
    const playerEnergyMax = next.player.energyMax || ENERGY_MAX;
    next.player.energy = clamp(
      next.player.energy + energyGained,
      0,
      playerEnergyMax,
    );
  }

  const survivors = allUnits.filter((u) => u.hp > 0);

  // End conditions
  if (next.player.baseHp <= 0) {
    next.phase = "ended";
    next.winner = "enemy";
    next.log = [...next.log.slice(-4), "😵 我方基地被推倒了…"];
  } else if (next.enemy.baseHp <= 0) {
    next.phase = "ended";
    next.winner = "player";
    next.log = [...next.log.slice(-4), "🎉 你贏了！可愛大軍推倒敵方基地！"];
  }

  next.units = survivors;

  return next;
}

function buildInitialState() {
  return buildStageState(1, false);
}

function buildStageState(stage, keepAutoBattle = false) {
  const s = Math.max(1, stage);
  const stageParams = getStageParams(s);

  return {
    phase: "playing", // playing | ended
    winner: null,
    timeMs: 0,

    paused: false,

    stage: s,

    idCounter: 1,
    randSeed: (123456789 + s * 99991) >>> 0,

    player: {
      baseMaxHp: PLAYER_BASE_MAX_HP,
      baseHp: PLAYER_BASE_MAX_HP,
      energy: 60,
      energyMax: stageParams.playerEnergyMax,
      skillCdLeft: 0,
      baseLastHitAt: 0,
      spawnCds: {
        kitty: 0,
        bunny: 0,
        panda: 0,
        fox: 0,
      },
    },

    enemy: {
      baseMaxHp: stageParams.enemyBaseMaxHp,
      baseHp: stageParams.enemyBaseMaxHp,
      energy: stageParams.enemyStartEnergy,
      spawnCdLeft: stageParams.spawnMinSec + 0.6,
      baseLastHitAt: 0,
    },

    effects: {
      bubbleUntilMs: 0,
      bubbleCastId: 0,
    },

    units: [],

    bossSpawned: false,

    log: [`🗺️ 第 ${s} 關開始！用能量派兵推塔～`],

    autoBattle: keepAutoBattle,
  };
}

export default function AutoBattle() {
  const navigate = useNavigate();

  const [view, setView] = useState(() => buildInitialState());

  const isPlaying = view.phase === "playing";
  const isPaused = !!view.paused;

  const playerBaseHpPct = useMemo(() => {
    const maxHp = view.player.baseMaxHp || PLAYER_BASE_MAX_HP;
    return clamp((view.player.baseHp / maxHp) * 100, 0, 100);
  }, [view.player.baseHp, view.player.baseMaxHp]);

  const enemyBaseHpPct = useMemo(() => {
    const maxHp = view.enemy.baseMaxHp || ENEMY_BASE_MAX_HP;
    return clamp((view.enemy.baseHp / maxHp) * 100, 0, 100);
  }, [view.enemy.baseHp, view.enemy.baseMaxHp]);

  const bubbleActive = !!view.effects.bubbleUntilMs;
  const bubbleLeftSec = bubbleActive
    ? Math.max(0, (view.effects.bubbleUntilMs - view.timeMs) / 1000)
    : 0;

  const togglePause = () => {
    setView((current) => {
      if (current.phase !== "playing") return current;
      return { ...current, paused: !current.paused };
    });
  };

  const restartStage = () => {
    setView((current) =>
      buildStageState(current.stage || 1, current.autoBattle),
    );
  };

  const nextStage = () => {
    setView((current) =>
      buildStageState((current.stage || 1) + 1, current.autoBattle),
    );
  };

  useEffect(() => {
    if (view.phase !== "ended") return;
    if (view.winner !== "player") return;

    const t = window.setTimeout(() => {
      nextStage();
    }, 1200);
    return () => window.clearTimeout(t);
  }, [view.phase, view.winner, view.stage]);

  const spawnPlayer = (typeId) => {
    setView((current) => {
      if (current.phase !== "playing") return current;

      const unitDef = UNIT_CATALOG.find((u) => u.id === typeId);
      if (!unitDef) return current;
      if (current.player.energy < unitDef.cost) return current;
      if (current.units.length >= 500) return current;
      const spawnCd = current.player.spawnCds?.[typeId] ?? 0;
      if (spawnCd > 0) return current;

      const jitterRes = rngNext(current.randSeed);
      const xJitter = 0.45 + (jitterRes.value * 0.18 - 0.09);
      const uid = current.idCounter + 1;

      const spawn = createUnit({
        id: typeId,
        side: "player",
        y: PLAYER_BASE_Y - 18,
        xJitter,
        uid,
      });

      return {
        ...current,
        randSeed: jitterRes.seed,
        idCounter: uid,
        player: {
          ...current.player,
          energy: current.player.energy - unitDef.cost,
          spawnCds: {
            ...current.player.spawnCds,
            [typeId]: unitDef.spawnCd,
          },
        },
        units: [...current.units, spawn],
        log: [
          ...current.log.slice(-4),
          `🔵 你派出 ${unitDef.emoji} ${unitDef.name}`,
        ],
      };
    });
  };

  const toggleAutoBattle = () => {
    setView((current) => {
      if (current.phase !== "playing") return current;
      return {
        ...current,
        autoBattle: !current.autoBattle,
        log: [
          ...current.log.slice(-4),
          current.autoBattle ? "⏸️ 關閉自動戰鬥" : "🤖 開啟自動戰鬥",
        ],
      };
    });
  };

  const castBubble = () => {
    setView((current) => {
      if (current.phase !== "playing") return current;
      if (current.player.skillCdLeft > 0) return current;
      if (current.player.energy < SKILL.cost) return current;

      const nextCastId = (current.effects.bubbleCastId || 0) + 1;

      return {
        ...current,
        player: {
          ...current.player,
          energy: current.player.energy - SKILL.cost,
          skillCdLeft: SKILL.cooldownSec,
        },
        effects: {
          ...current.effects,
          bubbleUntilMs: current.timeMs + SKILL.durationSec * 1000,
          bubbleCastId: nextCastId,
        },
        log: [
          ...current.log.slice(-4),
          `🫧 你施放「${SKILL.name}」！敵方變慢了～`,
        ],
      };
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setView((prev) => {
        if (prev.phase !== "playing" || prev.paused) return prev;

        let result = stepGame(prev, TICK_MS / 1000);

        // Auto battle logic
        if (result.autoBattle && result.player.energy > 0) {
          // Try to cast bubble skill if available and energy > 70
          if (
            result.player.energy >= SKILL.cost &&
            result.player.skillCdLeft <= 0 &&
            result.player.energy > 70
          ) {
            const nextCastId = (result.effects.bubbleCastId || 0) + 1;
            result = {
              ...result,
              player: {
                ...result.player,
                energy: result.player.energy - SKILL.cost,
                skillCdLeft: SKILL.cooldownSec,
              },
              effects: {
                ...result.effects,
                bubbleUntilMs: result.timeMs + SKILL.durationSec * 1000,
                bubbleCastId: nextCastId,
              },
            };
          }

          // Try to spawn units - wait for enough energy for priority units
          if (result.units.length < 500) {
            // Check what enemy units are currently on the field
            const enemyUnits = result.units.filter(
              (u) => u.side === "enemy" && u.hp > 0,
            );
            const enemyTypes = new Set(enemyUnits.map((u) => u.typeId));

            // Build priority based on enemy composition
            let priority = [];

            // If enemy has fox or bunny, prioritize those first
            if (enemyTypes.has("fox")) priority.push("fox");
            if (enemyTypes.has("bunny")) priority.push("bunny");

            // Then add the rest in standard priority
            if (!priority.includes("bunny")) priority.push("bunny");
            if (!priority.includes("panda")) priority.push("panda");
            if (!priority.includes("fox")) priority.push("fox");
            if (!priority.includes("kitty")) priority.push("kitty");

            // Find the highest priority unit we can afford
            let picked = null;
            for (const id of priority) {
              const unit = UNIT_CATALOG.find((u) => u.id === id);
              const spawnCd = result.player.spawnCds?.[id] ?? 0;
              if (unit && result.player.energy >= unit.cost && spawnCd <= 0) {
                picked = unit;
                break;
              }
            }

            // Only spawn if we found a unit to spawn
            // Don't spawn kitty unless we have very low energy or emergency
            const shouldSpawn =
              picked &&
              (picked.id !== "kitty" ||
                result.player.energy >= result.player.energyMax * 0.9 ||
                enemyUnits.length >= 5);

            if (shouldSpawn) {
              const jitterRes = rngNext(result.randSeed);
              const xJitter = 0.45 + (jitterRes.value * 0.18 - 0.09);
              const uid = result.idCounter + 1;

              const spawn = createUnit({
                id: picked.id,
                side: "player",
                y: PLAYER_BASE_Y - 18,
                xJitter,
                uid,
              });

              result = {
                ...result,
                randSeed: jitterRes.seed,
                idCounter: uid,
                player: {
                  ...result.player,
                  energy: result.player.energy - picked.cost,
                  spawnCds: {
                    ...result.player.spawnCds,
                    [picked.id]: picked.spawnCd,
                  },
                },
                units: [...result.units, spawn],
              };
            }
          }
        }

        return result;
      });
    }, TICK_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const canSpawn = (u) => {
    const spawnCd = view.player.spawnCds?.[u.id] ?? 0;
    return (
      isPlaying && !isPaused && view.player.energy >= u.cost && spawnCd <= 0
    );
  };
  const canCast =
    isPlaying &&
    !isPaused &&
    view.player.energy >= SKILL.cost &&
    view.player.skillCdLeft <= 0;

  return (
    <div className="oneui">
      <div className="shell" style={{ maxWidth: 560 }}>
        <div className="top">
          <div className="titleRow">
            <div>
              <div className="title">🐾 柴剛推線（自動戰鬥）</div>
              <div className="subtitle">派兵 + 泡泡結界</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <button className="backBtn" onClick={togglePause}>
                {isPaused ? "▶ 繼續" : "⏸ 暫停"}
              </button>
              <button
                className="backBtn"
                onClick={toggleAutoBattle}
                style={{
                  background: view.autoBattle
                    ? "linear-gradient(135deg, rgba(120,255,180,0.88), rgba(130,255,200,0.88))"
                    : undefined,
                }}
              >
                {view.autoBattle ? "🤖 自動中" : "🤖 自動"}
              </button>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="card" style={{ padding: 14 }}>
            <div
              className="ab-board"
              style={{
                width: GAME_WIDTH,
                height: GAME_HEIGHT,
                maxWidth: "100%",
                margin: "0 auto",
                borderRadius: 26,
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.7)",
                background:
                  "radial-gradient(520px 360px at 50% 20%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.12) 58%, rgba(255,255,255,0.08) 100%), linear-gradient(180deg, rgba(170, 210, 255, 0.32) 0%, rgba(255, 170, 220, 0.22) 38%, rgba(255, 200, 140, 0.24) 100%)",
              }}
            >
              {isPaused && (
                <div
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 52,
                    zIndex: 7,
                    padding: "8px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.60)",
                    boxShadow: "0 10px 22px rgba(16,16,30,0.10)",
                    fontSize: 12,
                    color: "rgba(16,16,22,0.82)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  ⏸️ 已暫停
                </div>
              )}

              {/* Game Over Overlay */}
              {view.phase === "ended" && view.winner === "enemy" && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(16, 16, 22, 0.35)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    style={{
                      padding: "28px 36px",
                      borderRadius: 28,
                      border: "1px solid rgba(255,255,255,0.72)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.62))",
                      boxShadow: "0 26px 70px rgba(16,16,30,0.22)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 42, marginBottom: 12 }}>😵</div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 950,
                        color: "rgba(16,16,22,0.92)",
                        marginBottom: 6,
                      }}
                    >
                      第 {view.stage} 關失敗
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(16,16,22,0.58)",
                        marginBottom: 20,
                      }}
                    >
                      我方基地被推倒了…
                    </div>
                    <button
                      onClick={restartStage}
                      style={{
                        padding: "14px 32px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.72)",
                        background:
                          "linear-gradient(135deg, rgba(255,120,180,0.88), rgba(130,185,255,0.88))",
                        boxShadow: "0 14px 40px rgba(16,16,30,0.18)",
                        fontSize: 15,
                        fontWeight: 900,
                        color: "rgba(255,255,255,0.98)",
                        cursor: "pointer",
                        transition:
                          "transform 0.15s ease, box-shadow 0.15s ease",
                      }}
                      onMouseDown={(e) =>
                        (e.currentTarget.style.transform = "scale(0.96)")
                      }
                      onMouseUp={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      🔄 重開本關
                    </button>
                  </div>
                </div>
              )}

              {/* Board header */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  padding: "10px 12px 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 10,
                  zIndex: 5,
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.75, minWidth: 50 }}>
                  敵方基地
                </div>
                <div
                  className="ab-hpRail"
                  style={{ flex: 1, marginRight: "auto" }}
                >
                  <div
                    className="ab-hpFill enemy"
                    style={{ width: `${enemyBaseHpPct}%` }}
                  />
                </div>
                <div style={{ minWidth: 36 }} />
              </div>

              {/* Stage / status (centered above battle area) */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 44,
                  zIndex: 6,
                  display: "grid",
                  placeItems: "center",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    padding: "7px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.70)",
                    background: "rgba(255,255,255,0.58)",
                    boxShadow: "0 12px 26px rgba(16,16,30,0.10)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    color: "rgba(16,16,22,0.86)",
                    textAlign: "center",
                    lineHeight: "18px",
                    fontSize: 14,
                    fontWeight: 900,
                    minWidth: 180,
                  }}
                >
                  {view.phase === "ended" ? (
                    <div
                      style={{ fontSize: 13, fontWeight: 800, opacity: 0.92 }}
                    >
                      {view.winner === "player"
                        ? `🎉 第 ${view.stage} 關通關！準備進入下一關…`
                        : `😵 第 ${view.stage} 關失敗：重開本關再試一次`}
                    </div>
                  ) : (
                    <>
                      <div>第 {view.stage} 關</div>
                      <div
                        style={{ fontSize: 13, fontWeight: 800, opacity: 0.92 }}
                      >
                        {bubbleActive ? `🫧 ${bubbleLeftSec.toFixed(1)}s` : ""}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Battle area */}
              <div
                style={{
                  position: "absolute",
                  left: BOARD_PADDING_X,
                  right: BOARD_PADDING_X,
                  top: BATTLE_TOP,
                  height: BOARD_HEIGHT + BOARD_PADDING_Y * 2,
                  padding: BOARD_PADDING_Y,
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: 22,
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.58), rgba(255,255,255,0.28))",
                    border: "1px solid rgba(255,255,255,0.55)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55)",
                  }}
                >
                  {/* lane */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      bottom: 0,
                      width: 6,
                      transform: "translateX(-50%)",
                      borderRadius: 999,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.18))",
                      opacity: 0.85,
                    }}
                  />

                  {/* enemy base */}
                  <div
                    className={
                      view.enemy.baseLastHitAt &&
                      view.timeMs - view.enemy.baseLastHitAt < 180
                        ? "ab-base hit"
                        : "ab-base"
                    }
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: ENEMY_BASE_Y - 8,
                      transform: "translateX(-50%)",
                      width: BASE_RADIUS * 2,
                      height: BASE_RADIUS * 2,
                      borderRadius: 999,
                      background:
                        "linear-gradient(135deg, rgba(255,170,220,0.75), rgba(170,210,255,0.62))",
                      border: "1px solid rgba(255,255,255,0.75)",
                      display: "grid",
                      placeItems: "center",
                      boxShadow: "0 16px 38px rgba(16,16,30,0.14)",
                      zIndex: 3,
                    }}
                  >
                    <div style={{ fontSize: 22 }}>🏰</div>
                  </div>

                  {/* player base */}
                  <div
                    className={
                      view.player.baseLastHitAt &&
                      view.timeMs - view.player.baseLastHitAt < 180
                        ? "ab-base hit"
                        : "ab-base"
                    }
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: PLAYER_BASE_Y - BASE_RADIUS,
                      transform: "translateX(-50%)",
                      width: BASE_RADIUS * 2,
                      height: BASE_RADIUS * 2,
                      borderRadius: 999,
                      background:
                        "linear-gradient(135deg, rgba(255,200,140,0.72), rgba(255,170,220,0.55))",
                      border: "1px solid rgba(255,255,255,0.75)",
                      display: "grid",
                      placeItems: "center",
                      boxShadow: "0 16px 38px rgba(16,16,30,0.14)",
                      zIndex: 3,
                    }}
                  >
                    <div style={{ fontSize: 22 }}>🏡</div>
                  </div>

                  {/* units */}
                  {view.units.map((u) => {
                    const xPercent = clamp(u.xJitter, 0.34, 0.66) * 100;
                    const recentlyHit =
                      u.lastHitAt && view.timeMs - u.lastHitAt < 140;
                    const bubbled =
                      u.bubbledUntilMs && u.bubbledUntilMs > view.timeMs;
                    const inShockwave =
                      u.shockwaveUntilMs && u.shockwaveUntilMs > view.timeMs;
                    const hpPct = clamp((u.hp / u.maxHp) * 100, 0, 100);

                    const unitClassName = [
                      "ab-unit",
                      recentlyHit ? "hit" : "",
                      bubbled ? "bubbled" : "",
                      inShockwave ? "shockwave" : "",
                      u.isBoss ? "boss" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    const unitSize = u.isBoss ? 42 * 3 : 42;
                    const emojiSize = u.isBoss ? 22 * 3 : 22;

                    return (
                      <div
                        key={u.uid}
                        className={unitClassName}
                        style={{
                          position: "absolute",
                          left: `${xPercent}%`,
                          top: u.y,
                          transform: "translate(-50%, -50%)",
                          width: unitSize,
                          height: unitSize,
                          borderRadius: 16,
                          border:
                            u.side === "player"
                              ? "1px solid rgba(120, 210, 255, 0.55)"
                              : "1px solid rgba(255, 150, 180, 0.55)",
                          background:
                            u.side === "player"
                              ? "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.38))"
                              : "linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.32))",
                          boxShadow: "0 14px 28px rgba(16,16,30,0.10)",
                          display: "grid",
                          placeItems: "center",
                          zIndex: 4,
                        }}
                        title={`${u.emoji} ${u.name}（${u.role}）${u.isBoss ? " - BOSS" : ""}`}
                      >
                        <div
                          className="ab-emoji"
                          style={{
                            fontSize: emojiSize,
                            lineHeight: `${emojiSize}px`,
                          }}
                        >
                          {u.emoji}
                        </div>
                        <div
                          className="ab-unitHp"
                          style={{
                            position: "absolute",
                            left: 6,
                            right: 6,
                            bottom: -6,
                            height: 6,
                            borderRadius: 999,
                            overflow: "hidden",
                            background: "rgba(16,16,22,0.16)",
                            border: "1px solid rgba(255,255,255,0.55)",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${hpPct}%`,
                              background:
                                u.side === "player"
                                  ? "linear-gradient(90deg, rgba(120,210,255,0.92), rgba(130,185,255,0.92))"
                                  : "linear-gradient(90deg, rgba(255,120,180,0.92), rgba(255,170,220,0.92))",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Controls (moved outside board, so it won't cover the battlefield) */}
            <div style={{ height: 12 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 12, opacity: 0.75, minWidth: 50 }}>
                我方基地
              </div>
              <div className="ab-hpRail" style={{ flex: 1 }}>
                <div
                  className="ab-hpFill"
                  style={{ width: `${playerBaseHpPct}%` }}
                />
              </div>
              <div style={{ minWidth: 36 }} />
            </div>

            <div style={{ height: 8 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 12, opacity: 0.75, minWidth: 50 }}>
                能量
              </div>
              <div className="ab-hpRail" style={{ flex: 1 }}>
                <div
                  className="ab-hpFill"
                  style={{
                    width: `${(view.player.energy / (view.player.energyMax || ENERGY_MAX)) * 100}%`,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  minWidth: 36,
                  textAlign: "right",
                }}
              >
                {fmt(view.player.energy)}
              </div>
            </div>

            <div style={{ height: 10 }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
              }}
            >
              {UNIT_CATALOG.map((u) => {
                const spawnCd = view.player.spawnCds?.[u.id] ?? 0;
                return (
                  <button
                    key={u.id}
                    className={canSpawn(u) ? "ab-card" : "ab-card disabled"}
                    onClick={() => spawnPlayer(u.id)}
                    disabled={!canSpawn(u)}
                    title={`${u.name}｜${u.role}｜花費 ${u.cost}`}
                  >
                    <div style={{ fontSize: 18 }}>{u.emoji}</div>
                    <div style={{ fontSize: 12, fontWeight: 800 }}>
                      {spawnCd > 0 ? `${spawnCd.toFixed(1)}s` : u.cost}
                    </div>
                    <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                      {u.name}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ height: 10 }} />

            <button
              className={canCast ? "ab-skill" : "ab-skill disabled"}
              onClick={castBubble}
              disabled={!canCast}
              title={`${SKILL.name}｜花費 ${SKILL.cost}｜CD ${SKILL.cooldownSec}s`}
            >
              <span style={{ fontSize: 18, marginRight: 8 }}>
                {SKILL.emoji}
              </span>
              <span style={{ fontWeight: 900 }}>{SKILL.name}</span>
              <span style={{ marginLeft: 10, opacity: 0.75 }}>
                {view.player.skillCdLeft > 0
                  ? `CD ${view.player.skillCdLeft.toFixed(1)}s`
                  : `能量 ${SKILL.cost}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
