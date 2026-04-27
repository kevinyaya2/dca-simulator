const WORLD_WIDTH = 5600;
const WORLD_HEIGHT = 5600;
const FOOD_TARGET = 1800;
const VIRUS_TARGET = 12;
const BOT_TARGET = 26;
const SPEED_MULTIPLIER = 5;
const BOT_SPEED_MULTIPLIER = 0.78;
const PLAYER_SPEED_MULTIPLIER = 2.35;
const PLAYER_START_MASS = 52;
const PLAYER_RESPAWN_SECONDS = 3.2;
const PLAYER_SPLIT_MERGE_LOCK_SECONDS = 3.2;
const VIRUS_SPLIT_MERGE_LOCK_SECONDS = 1.8;
const MERGE_FOOD_LOCK_SECONDS = 0.45;
const VIRUS_AUTO_MERGE_CHAIN_SECONDS = 6;
const VIRUS_AUTO_MERGE_CONTACT_EPSILON = 2;
const VIRUS_AUTO_MERGE_POST_LOCK_PULL_MULTIPLIER = 2.2;
const AUTO_MERGE_ATTRACT_EXTRA_RANGE = 860;
const AUTO_MERGE_ATTRACT_PULL_PER_SECOND = 260;
const MANUAL_FUSION_LOCK_SECONDS = 0.28;
const MANUAL_FUSION_ANIM_SECONDS = 0.62;
const EJECT_MIN_MASS = 32;
const BOOST_MIN_MASS = 24;
const BOOST_MULTIPLIER = 3.44;
const BOOST_DRAIN_PER_SECOND = 9.5;
const BOT_RETHINK_MIN = 0.55;
const BOT_RETHINK_MAX = 1.25;
const PLAYER_NAME = "\u73a9\u5bb6";
const BOT_NAMES = [
  "\u9905\u865f",
  "\u70b3\u865f",
  "\u4e19\u865f",
  "\u67c4\u865f",
  "\u7a1f\u865f",
  "\u9905\u6d69",
  "\u70b3\u6d69",
  "\u4e19\u6d69",
];
const COLOR_POOL = ["#60f3ff", "#67ffa8", "#ff7bcf", "#8b9dff", "#ffd56e", "#6ee7ff", "#fd92b5", "#87ffcc"];
const BOT_PERSONALITIES = [
  { type: "hunter", label: "獵人", chase: 1.85, food: 0.58, danger: 0.78, split: 1.28 },
  { type: "farmer", label: "農夫", chase: 0.62, food: 1.72, danger: 1, split: 0.45 },
  { type: "baiter", label: "誘餌", chase: 0.88, food: 1.08, danger: 1, split: 0.82 },
  { type: "coward", label: "膽小", chase: 0.42, food: 1.18, danger: 1.72, split: 0.25 },
];
const ZONE_DEFINITIONS = [
  { type: "storm", label: "能量風暴", color: "#ff5fb8", radius: 620 },
  { type: "nebula", label: "高密度星雲", color: "#77e7ff", radius: 760 },
  { type: "blackhole", label: "黑洞", color: "#b58cff", radius: 560 },
];
const SAFE_ZONE_START_RADIUS = 2850;
const SAFE_ZONE_MIN_RADIUS = 950;
const COMBO_WINDOW_SECONDS = 12;
const COMBO_BONUS_PER_STACK = 0.09;
const RESPAWN_PROTECTION_SECONDS = 3;
const BOUNTY_REFRESH_SECONDS = 24;
const REVENGE_SECONDS = 34;
const MASS_MILESTONES = [300, 700, 1400, 2600, 5200];
const MISSION_TEMPLATES = [
  { type: "mass", title: "累積質量", detail: "總質量達到 260", goal: 260, reward: "最大細胞 +45 質量" },
  { type: "kills", title: "獵食時間", detail: "吞噬 2 名對手", goal: 2, reward: "獲得 8 秒磁吸" },
  { type: "powerFoods", title: "能量採集", detail: "吃下 3 個特殊食物", goal: 3, reward: "獲得護盾" },
  { type: "splits", title: "分裂突擊", detail: "成功分裂 3 次", goal: 3, reward: "分裂冷卻歸零" },
  { type: "nebula", title: "星雲採礦", detail: "在高密度星雲停留 8 秒", goal: 8, reward: "全細胞 +12 質量" },
  { type: "rank", title: "衝榜", detail: "排名進入前 8", goal: 8, reward: "獲得 6 秒加速" },
];

let nextId = 1;

function id(prefix) {
  nextId += 1;
  return `${prefix}-${nextId}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function pick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createFoodMass(state) {
  const playerMass = state ? totalMass(state.player) : PLAYER_START_MASS;
  const roll = Math.random();
  if (roll > 0.965) return clamp(rand(playerMass * 0.08, playerMass * 0.15), 8.5, 180);
  if (roll > 0.82) return clamp(rand(playerMass * 0.028, playerMass * 0.055), 3.2, 75);
  return clamp(rand(playerMass * 0.006, playerMass * 0.014), 0.8, 18);
}

function createFoodType(mass) {
  if (mass >= 6 && Math.random() > 0.992) return "nova";
  if (mass >= 4 && Math.random() > 0.987) return pick(["merge", "freeze"]);
  if (mass < 3 || Math.random() > 0.055) return "normal";
  return pick(["speed", "shield", "magnet", "merge", "freeze"]);
}

function foodColorForMass(mass, type = "normal") {
  if (type === "nova") return "#ffffff";
  if (type === "speed") return "#65e7ff";
  if (type === "shield") return "#ffdd66";
  if (type === "magnet") return "#ff7bcf";
  if (type === "merge") return "#a78bfa";
  if (type === "freeze") return "#9defff";
  if (mass >= 8) return pick(["#ffe36e", "#ff9de8", "#a8ff72", "#7cf7ff"]);
  if (mass >= 3) return pick(["#b7ff76", "#8ffcff", "#ffc36e", "#ff8ed6"]);
  return pick(["#98fff8", "#74f7ff", "#7effbe", "#ffd87c", "#ff93d3"]);
}

function radiusFromMass(mass) {
  return Math.sqrt(mass) * 3.9;
}

function speedFromMass(mass) {
  const base = clamp(320 / (Math.sqrt(mass) * 0.92 + 8), 30, 218);
  return clamp(base * SPEED_MULTIPLIER, 120, 980);
}

function vectorLength(x, y) {
  return Math.hypot(x, y) || 0.0001;
}

function normalizeVector(x, y) {
  const len = vectorLength(x, y);
  return { x: x / len, y: y / len };
}

function formatMass(value) {
  return Math.round(value).toLocaleString("en-US");
}

function totalMass(actor) {
  return actor.cells.reduce((sum, cell) => sum + cell.mass, 0);
}

function largestCell(cells) {
  return cells.reduce((largest, cell) => (cell.mass > largest.mass ? cell : largest), cells[0]);
}

function createCell(ownerId, x, y, mass, color, name) {
  return {
    id: id("cell"),
    ownerId,
    x,
    y,
    vx: 0,
    vy: 0,
    mass,
    color,
    name,
    mergeLockUntil: 0,
    autoMergeSource: null,
    autoMergeUntil: 0,
    wobbleSeed: Math.random() * 1000,
  };
}

function createActor(kind, name, color, x, y, mass, personality = null) {
  const displayName = personality ? `[${personality.label}] ${name}` : name;
  return {
    id: id(kind),
    kind,
    name: displayName,
    color,
    personality,
    cells: [createCell("", x, y, mass, color, displayName)],
    effects: { speedUntil: 0, shieldUntil: 0, magnetUntil: 0, freezeUntil: 0 },
    aimX: 0,
    aimY: 0,
    wanderAngle: rand(0, Math.PI * 2),
    rethinkTimer: rand(BOT_RETHINK_MIN, BOT_RETHINK_MAX),
    nerve: rand(0.65, 1.25),
    panicTimer: 0,
    splitCooldown: 0,
    ejectCooldown: 0,
    deadMs: 0,
  };
}

function createZone(type, index, state) {
  const def = ZONE_DEFINITIONS.find((zone) => zone.type === type);
  const angle = (Math.PI * 2 * index) / ZONE_DEFINITIONS.length + rand(-0.35, 0.35);
  const distance = rand(820, 1500);
  return {
    id: id("zone"),
    type: def.type,
    label: def.label,
    color: def.color,
    x: clamp(state.world.width * 0.5 + Math.cos(angle) * distance, def.radius + 120, state.world.width - def.radius - 120),
    y: clamp(state.world.height * 0.5 + Math.sin(angle) * distance, def.radius + 120, state.world.height - def.radius - 120),
    radius: def.radius,
    pulse: rand(0, Math.PI * 2),
  };
}

function spawnFood(state, count) {
  for (let i = 0; i < count; i += 1) {
    const mass = createFoodMass(state);
    const type = createFoodType(mass);
    state.foods.push({
      id: id("food"),
      x: rand(30, state.world.width - 30),
      y: rand(30, state.world.height - 30),
      mass,
      type,
      color: foodColorForMass(mass, type),
      drift: rand(0, Math.PI * 2),
    });
  }
}

function spawnVirus(state, x = rand(80, state.world.width - 80), y = rand(80, state.world.height - 80), vx = 0, vy = 0) {
  state.viruses.push({
    id: id("virus"),
    x,
    y,
    vx,
    vy,
    mass: rand(105, 125),
    feed: 0,
    spin: rand(0, Math.PI * 2),
  });
}

function createBackgroundParticles(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    depth: rand(0.25, 1),
    size: rand(0.8, 3.2),
    hue: rand(170, 330),
    twinkle: rand(0.5, 2.4),
    phase: rand(0, Math.PI * 2),
  }));
}

function placeActorCell(actor, x, y) {
  const cell = actor.cells[0];
  cell.ownerId = actor.id;
  cell.x = x;
  cell.y = y;
}

function centerOfCells(cells) {
  if (cells.length === 0) return { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 };
  let mx = 0;
  let my = 0;
  let sum = 0;
  for (const cell of cells) {
    mx += cell.x * cell.mass;
    my += cell.y * cell.mass;
    sum += cell.mass;
  }
  return { x: mx / sum, y: my / sum };
}

function respawnActor(actor, state, mass = 145) {
  actor.cells = [createCell(actor.id, rand(120, state.world.width - 120), rand(120, state.world.height - 120), mass, actor.color, actor.name)];
  actor.deadMs = 0;
  actor.splitCooldown = 0;
  actor.ejectCooldown = 0;
  actor.effects = { speedUntil: 0, shieldUntil: 0, magnetUntil: 0, freezeUntil: 0 };
}

function addNotice(state, text, color = "#dff8ff", ttl = 3.2) {
  state.notices.unshift({ id: id("notice"), text, color, ttl, maxTtl: ttl });
  if (state.notices.length > 6) state.notices.length = 6;
}

function createMission(completedCount = 0) {
  const template = MISSION_TEMPLATES[completedCount % MISSION_TEMPLATES.length];
  return {
    id: id("mission"),
    type: template.type,
    title: template.title,
    detail: template.detail,
    goal: template.goal,
    reward: template.reward,
    progress: 0,
    completed: false,
    nextIn: 0,
  };
}

function awardMissionReward(state, mission) {
  const player = state.player;
  if (player.cells.length === 0) return;
  const now = state.time;
  if (mission.type === "mass") {
    largestCell(player.cells).mass += 45;
  } else if (mission.type === "kills") {
    player.effects.magnetUntil = Math.max(player.effects.magnetUntil, now + 8);
  } else if (mission.type === "powerFoods") {
    player.effects.shieldUntil = Math.max(player.effects.shieldUntil, now + 14);
  } else if (mission.type === "splits") {
    player.splitCooldown = 0;
  } else if (mission.type === "nebula") {
    for (const cell of player.cells) cell.mass += 12;
  } else if (mission.type === "rank") {
    player.effects.speedUntil = Math.max(player.effects.speedUntil, now + 6);
  }
  makeBurst(state, centerOfCells(player.cells).x, centerOfCells(player.cells).y, "#ffffff", 46, 0.36, 18);
  addNotice(state, `任務完成：${mission.title}，${mission.reward}`, "#ffffff", 3);
}

function getPlayerRank(state) {
  const fullRanking = [state.player, ...state.bots]
    .map((actor) => ({ id: actor.id, mass: totalMass(actor) }))
    .sort((a, b) => b.mass - a.mass);
  return Math.max(1, fullRanking.findIndex((entry) => entry.id === state.player.id) + 1);
}

function registerPlayerKill(state, attackerCell, defeatedCell) {
  const run = state.playerRun;
  run.kills += 1;
  run.combo = state.time <= run.comboUntil ? run.combo + 1 : 1;
  run.comboUntil = state.time + COMBO_WINDOW_SECONDS;
  run.bestCombo = Math.max(run.bestCombo, run.combo);

  const bonusRate = Math.min(0.45, Math.max(0, run.combo - 1) * COMBO_BONUS_PER_STACK);
  if (bonusRate > 0 && attackerCell) {
    const bonusMass = Math.max(8, defeatedCell.mass * bonusRate);
    attackerCell.mass += bonusMass;
    makeBurst(state, attackerCell.x, attackerCell.y, "#ffe36e", radiusFromMass(attackerCell.mass) * 0.45, 0.24, 12);
    addNotice(state, `連段 x${run.combo}：額外 +${formatMass(bonusMass)} 質量`, "#ffe36e", 2.1);
  } else {
    addNotice(state, "吞噬成功：連段開始", "#70ecff", 1.8);
  }

  if (run.combo === 3) {
    state.player.effects.speedUntil = Math.max(state.player.effects.speedUntil, state.time + 4);
    addNotice(state, "三連段：獲得短暫加速", "#70ecff", 2);
  } else if (run.combo === 5) {
    state.player.effects.shieldUntil = Math.max(state.player.effects.shieldUntil, state.time + 10);
    addNotice(state, "五連段：獲得護盾", "#ffe36e", 2);
  }
}

function awardBountyIfNeeded(state, defeatedActor, attackerCell, defeatedMass) {
  if (!state.bounty || state.bounty.actorId !== defeatedActor.id || state.player.cells.length === 0) return;
  const rewardMass = clamp(defeatedMass * 0.22, 28, 160);
  largestCell(state.player.cells).mass += rewardMass;
  state.player.effects.speedUntil = Math.max(state.player.effects.speedUntil, state.time + 5);
  state.player.effects.magnetUntil = Math.max(state.player.effects.magnetUntil, state.time + 5);
  state.bounty.claimed += 1;
  state.bounty.actorId = null;
  state.bounty.expiresAt = state.time + 4;
  makeBurst(state, attackerCell.x, attackerCell.y, "#ffe36e", 70, 0.42, 22);
  addNotice(state, `懸賞完成：+${formatMass(rewardMass)} 質量、加速與磁吸`, "#ffe36e", 3);
}

function setRevengeTarget(state, killerActor) {
  if (!killerActor || killerActor.id === state.player.id) return;
  state.revenge = {
    actorId: killerActor.id,
    name: killerActor.name,
    expiresAt: state.time + REVENGE_SECONDS,
    claimed: state.revenge?.claimed || 0,
  };
  addNotice(state, `復仇目標：${killerActor.name}`, "#ff95da", 2.8);
}

function awardRevengeIfNeeded(state, defeatedActor, attackerCell, defeatedMass) {
  if (!state.revenge || state.revenge.actorId !== defeatedActor.id || state.time > state.revenge.expiresAt) return;
  const rewardMass = clamp(defeatedMass * 0.26, 36, 220);
  largestCell(state.player.cells).mass += rewardMass;
  state.player.effects.shieldUntil = Math.max(state.player.effects.shieldUntil, state.time + 12);
  state.revenge.claimed += 1;
  state.revenge.actorId = null;
  state.revenge.expiresAt = state.time + 5;
  makeBurst(state, attackerCell.x, attackerCell.y, "#ff95da", 78, 0.42, 24);
  addNotice(state, `復仇成功：+${formatMass(rewardMass)} 質量並獲得護盾`, "#ff95da", 3);
}

function updateBountyTarget(state) {
  if (!state.bounty) return;
  if (!state.bounty.actorId && state.time < state.bounty.expiresAt) return;
  const current = state.bounty.actorId ? state.bots.find((bot) => bot.id === state.bounty.actorId && bot.cells.length > 0) : null;
  if (current && state.time < state.bounty.expiresAt) {
    state.bounty.name = current.name;
    state.bounty.mass = Math.round(totalMass(current));
    return;
  }

  const candidates = state.bots
    .filter((bot) => bot.cells.length > 0)
    .map((bot) => ({ bot, mass: totalMass(bot) }))
    .sort((a, b) => b.mass - a.mass);
  const target = candidates[0]?.bot;
  if (!target) return;

  state.bounty.actorId = target.id;
  state.bounty.name = target.name;
  state.bounty.mass = Math.round(totalMass(target));
  state.bounty.expiresAt = state.time + BOUNTY_REFRESH_SECONDS;
  addNotice(state, `新懸賞目標：${target.name}`, "#ffe36e", 2.6);
}

function updateMassMilestones(state) {
  const run = state.playerRun;
  const nextMass = MASS_MILESTONES[run.milestoneIndex] || null;
  if (!nextMass || state.player.cells.length === 0 || totalMass(state.player) < nextMass) return;

  run.milestoneIndex += 1;
  const primary = largestCell(state.player.cells);
  const bonus = clamp(nextMass * 0.08, 28, 180);
  primary.mass += bonus;
  state.player.effects.shieldUntil = Math.max(state.player.effects.shieldUntil, state.time + 8);
  state.player.effects.magnetUntil = Math.max(state.player.effects.magnetUntil, state.time + 5);
  makeBurst(state, primary.x, primary.y, "#ffffff", 82, 0.45, 26);
  addNotice(state, `質量里程碑 ${formatMass(nextMass)}：+${formatMass(bonus)} 並獲得護盾`, "#ffffff", 3);
}

function updatePlayerRunTimers(state) {
  if (state.playerRun.combo > 0 && state.time > state.playerRun.comboUntil) {
    state.playerRun.combo = 0;
  }
}

function makeBurst(state, x, y, color, radius, ttl, count = 12) {
  state.effects.push({ id: id("fx"), x, y, color, radius, ttl, maxTtl: ttl });
  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count + rand(-0.15, 0.15);
    const speed = rand(40, 170);
    state.particles.push({
      id: id("pt"),
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color,
      life: rand(0.22, 0.6),
      maxLife: rand(0.22, 0.6),
      size: rand(2, 6),
    });
  }
}

function makeFusionEffect(state, x, y, color, sources, totalMass) {
  state.effects.push({
    id: id("fx"),
    type: "fusion",
    x,
    y,
    color,
    radius: Math.max(48, radiusFromMass(totalMass) * 1.2),
    ttl: MANUAL_FUSION_ANIM_SECONDS,
    maxTtl: MANUAL_FUSION_ANIM_SECONDS,
    sources: sources.map((source) => ({
      x: source.x,
      y: source.y,
      radius: source.radius,
      mass: source.mass,
    })),
  });
}

function mergeActorCells(actor, state) {
  if (!actor || actor.cells.length < 2) return false;
  const center = centerOfCells(actor.cells);
  const sources = actor.cells.map((cell) => ({
    x: cell.x,
    y: cell.y,
    radius: radiusFromMass(cell.mass),
    mass: cell.mass,
  }));

  let totalMass = 0;
  let vx = 0;
  let vy = 0;
  for (const cell of actor.cells) {
    totalMass += cell.mass;
    vx += cell.vx * cell.mass;
    vy += cell.vy * cell.mass;
  }

  const merged = createCell(actor.id, center.x, center.y, totalMass, actor.color, actor.name);
  merged.vx = vx / Math.max(1, totalMass);
  merged.vy = vy / Math.max(1, totalMass);
  merged.mergeLockUntil = state.time + MANUAL_FUSION_LOCK_SECONDS;
  merged.autoMergeSource = null;
  merged.autoMergeUntil = 0;
  actor.cells = [merged];
  actor.splitCooldown = Math.max(actor.splitCooldown, MANUAL_FUSION_LOCK_SECONDS);

  makeFusionEffect(state, center.x, center.y, actor.color, sources, totalMass);
  makeBurst(state, center.x, center.y, "#ffffff", Math.max(36, radiusFromMass(totalMass) * 1.05), 0.24, 16);
  if (actor.id === state.player.id) addNotice(state, "融合啟動：細胞合而為一", "#9ffbff", 1.8);
  return true;
}

function splitSingleCell(actor, cellIndex, aimX, aimY, state) {
  const cell = actor.cells[cellIndex];
  if (!cell || cell.mass < 40) return false;
  const direction = normalizeVector(aimX, aimY);
  const nextMass = cell.mass / 2;
  cell.mass = nextMass;
  const radius = radiusFromMass(nextMass);
  const force = clamp(540 / (Math.sqrt(nextMass) + 5), 130, 360);
  const clone = createCell(
    actor.id,
    cell.x + direction.x * radius * 1.7,
    cell.y + direction.y * radius * 1.7,
    nextMass,
    actor.color,
    actor.name,
  );
  clone.vx = direction.x * force;
  clone.vy = direction.y * force;
  cell.vx -= direction.x * force * 0.15;
  cell.vy -= direction.y * force * 0.15;
  const lock = state.time + PLAYER_SPLIT_MERGE_LOCK_SECONDS;
  cell.mergeLockUntil = lock;
  cell.autoMergeSource = null;
  cell.autoMergeUntil = 0;
  clone.mergeLockUntil = lock;
  clone.autoMergeSource = null;
  clone.autoMergeUntil = 0;
  actor.cells.push(clone);
  makeBurst(state, clone.x, clone.y, actor.color, radius * 0.86, 0.26, 9);
  return true;
}

function splitActor(actor, aimX, aimY, state) {
  if (actor.splitCooldown > 0) return false;
  if (actor.cells.length >= 16) return false;
  const maxSplit = 16 - actor.cells.length;
  const candidates = actor.cells
    .map((cell, index) => ({ cell, index }))
    .filter(({ cell }) => cell.mass >= 42)
    .sort((a, b) => b.cell.mass - a.cell.mass)
    .slice(0, maxSplit);
  if (candidates.length === 0) return false;
  let didSplit = false;
  for (const { index } of candidates) {
    didSplit = splitSingleCell(actor, index, aimX, aimY, state) || didSplit;
  }
  if (didSplit) actor.splitCooldown = 0.95;
  return didSplit;
}

function ejectMass(actor, aimX, aimY, state) {
  if (actor.ejectCooldown > 0) return;
  const direction = normalizeVector(aimX, aimY);
  let didEject = false;
  for (const cell of actor.cells) {
    if (cell.mass < EJECT_MIN_MASS) continue;
    const ejectMassValue = 14;
    const radius = radiusFromMass(cell.mass);
    cell.mass -= ejectMassValue * 0.52;
    const blobMass = ejectMassValue;
    const blobRadius = radiusFromMass(blobMass);
    state.ejected.push({
      id: id("eject"),
      x: cell.x + direction.x * (radius + blobRadius + 4),
      y: cell.y + direction.y * (radius + blobRadius + 4),
      vx: direction.x * 460 + cell.vx * 0.18,
      vy: direction.y * 460 + cell.vy * 0.18,
      mass: blobMass,
      color: actor.color,
      life: 6.2,
    });
    cell.vx -= direction.x * 36;
    cell.vy -= direction.y * 36;
    didEject = true;
  }
  if (didEject) {
    actor.ejectCooldown = 0.07;
    makeBurst(
      state,
      centerOfCells(actor.cells).x,
      centerOfCells(actor.cells).y,
      actor.color,
      14,
      0.16,
      6,
    );
  }
}

function applyPlayerBoost(player, dt) {
  const boostCells = player.cells.filter((cell) => cell.mass > BOOST_MIN_MASS);
  if (boostCells.length === 0) return 1;
  const drainPerCell = (BOOST_DRAIN_PER_SECOND * dt) / boostCells.length;
  for (const cell of boostCells) {
    cell.mass = Math.max(BOOST_MIN_MASS * 0.82, cell.mass - drainPerCell);
  }
  return BOOST_MULTIPLIER;
}

function repelCells(a, b) {
  const ra = radiusFromMass(a.mass);
  const rb = radiusFromMass(b.mass);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 0.0001;
  const overlap = ra + rb - dist;
  if (overlap <= 0) return;
  const nx = dx / dist;
  const ny = dy / dist;
  const push = overlap * 0.5;
  a.x -= nx * push;
  a.y -= ny * push;
  b.x += nx * push;
  b.y += ny * push;
}

function isVirusAutoMergeCell(cell, now) {
  return cell.autoMergeSource === "virus" && now <= cell.autoMergeUntil;
}

function isVirusAutoMergePair(cellA, cellB, now) {
  return isVirusAutoMergeCell(cellA, now) && isVirusAutoMergeCell(cellB, now);
}

function carryVirusAutoMergeState(target, source) {
  target.autoMergeSource = "virus";
  target.autoMergeUntil = Math.max(target.autoMergeUntil || 0, source.autoMergeUntil || 0);
}

function applyAutoMergeAttraction(actor, now, dt, world) {
  if (actor.cells.length < 2) return;
  for (let i = 0; i < actor.cells.length - 1; i += 1) {
    const cellA = actor.cells[i];
    for (let j = i + 1; j < actor.cells.length; j += 1) {
      const cellB = actor.cells[j];
      if (!isVirusAutoMergePair(cellA, cellB, now)) continue;
      const ra = radiusFromMass(cellA.mass);
      const rb = radiusFromMass(cellB.mass);
      const mergeDist = Math.max(0, ra + rb - VIRUS_AUTO_MERGE_CONTACT_EPSILON);
      const attractRange = mergeDist + AUTO_MERGE_ATTRACT_EXTRA_RANGE;
      const dx = cellB.x - cellA.x;
      const dy = cellB.y - cellA.y;
      const dist = Math.hypot(dx, dy) || 0.0001;
      if (dist <= mergeDist || dist >= attractRange) continue;
      const nx = dx / dist;
      const ny = dy / dist;
      const ratio = clamp((attractRange - dist) / Math.max(1, attractRange - mergeDist), 0, 1);
      const postLockBoost = now >= cellA.mergeLockUntil && now >= cellB.mergeLockUntil
        ? VIRUS_AUTO_MERGE_POST_LOCK_PULL_MULTIPLIER
        : 1;
      const pull = AUTO_MERGE_ATTRACT_PULL_PER_SECOND * postLockBoost * ratio * ratio * dt;
      const totalMass = Math.max(1, cellA.mass + cellB.mass);
      const moveA = pull * clamp(cellB.mass / totalMass, 0.2, 0.8);
      const moveB = pull * clamp(cellA.mass / totalMass, 0.2, 0.8);

      cellA.x += nx * moveA;
      cellA.y += ny * moveA;
      cellB.x -= nx * moveB;
      cellB.y -= ny * moveB;

      cellA.vx += nx * moveA * 28;
      cellA.vy += ny * moveA * 28;
      cellB.vx -= nx * moveB * 28;
      cellB.vy -= ny * moveB * 28;

      cellA.x = clamp(cellA.x, ra, world.width - ra);
      cellA.y = clamp(cellA.y, ra, world.height - ra);
      cellB.x = clamp(cellB.x, rb, world.width - rb);
      cellB.y = clamp(cellB.y, rb, world.height - rb);
    }
  }
}

function canAbsorbCell(attacker, defender, distance) {
  const ratio = attacker.mass / Math.max(1, defender.mass);
  if (ratio <= 1.001) return false;
  const attackerRadius = radiusFromMass(attacker.mass);
  const defenderRadius = radiusFromMass(defender.mass);
  return distance < attackerRadius + defenderRadius;
}

function moveCell(cell, aimX, aimY, dt, world, speedMultiplier = 1) {
  const speed = speedFromMass(cell.mass) * speedMultiplier;
  const accel = speed * 3;
  cell.vx += aimX * accel * dt;
  cell.vy += aimY * accel * dt;

  const velocity = vectorLength(cell.vx, cell.vy);
  if (velocity > speed) {
    cell.vx = (cell.vx / velocity) * speed;
    cell.vy = (cell.vy / velocity) * speed;
  }

  const drag = Math.pow(0.895, dt * 60);
  cell.vx *= drag;
  cell.vy *= drag;

  cell.x += cell.vx * dt;
  cell.y += cell.vy * dt;

  const radius = radiusFromMass(cell.mass);
  if (cell.x < radius) {
    cell.x = radius;
    cell.vx *= -0.26;
  } else if (cell.x > world.width - radius) {
    cell.x = world.width - radius;
    cell.vx *= -0.26;
  }

  if (cell.y < radius) {
    cell.y = radius;
    cell.vy *= -0.26;
  } else if (cell.y > world.height - radius) {
    cell.y = world.height - radius;
    cell.vy *= -0.26;
  }

}

function absorbCell(attacker, defender, state) {
  attacker.mass += defender.mass * 0.98;
  makeBurst(state, defender.x, defender.y, attacker.color, radiusFromMass(defender.mass) * 0.8, 0.2, 8);
}

function tryShieldBlock(state, defenderActor, defenderCell, attackerCell) {
  if (defenderActor.id !== state.player.id || defenderActor.effects.shieldUntil <= state.time) return false;
  defenderActor.effects.shieldUntil = 0;
  const dx = defenderCell.x - attackerCell.x;
  const dy = defenderCell.y - attackerCell.y;
  const direction = normalizeVector(dx, dy);
  defenderCell.vx += direction.x * 520;
  defenderCell.vy += direction.y * 520;
  defenderCell.mass = Math.max(PLAYER_START_MASS * 0.72, defenderCell.mass * 0.82);
  makeBurst(state, defenderCell.x, defenderCell.y, "#ffe36e", radiusFromMass(defenderCell.mass), 0.28, 16);
  addNotice(state, "護盾抵擋了一次吞噬", "#ffe36e", 2.4);
  return true;
}

function applyFoodEffect(state, actor, food) {
  if (actor.id !== state.player.id || food.type === "normal") return;
  state.playerRun.powerFoods += 1;
  const now = state.time;
  if (food.type === "nova") {
    const center = centerOfCells(actor.cells);
    for (const cell of actor.cells) cell.mass += clamp(food.mass * 1.8, 16, 48);
    actor.effects.speedUntil = Math.max(actor.effects.speedUntil, now + 4);
    makeBurst(state, center.x, center.y, "#ffffff", 64, 0.42, 24);
    addNotice(state, "新星食物：全細胞增重並短暫加速", "#ffffff", 2.6);
  } else if (food.type === "merge") {
    for (const cell of actor.cells) {
      cell.mergeLockUntil = Math.min(cell.mergeLockUntil, now + MERGE_FOOD_LOCK_SECONDS);
    }
    actor.splitCooldown = Math.max(0, actor.splitCooldown - 0.7);
    addNotice(state, "融合食物：細胞更快合體", "#a78bfa", 2.2);
  } else if (food.type === "freeze") {
    const center = centerOfCells(actor.cells);
    let frozen = 0;
    for (const bot of state.bots) {
      const botCenter = centerOfCells(bot.cells);
      if (Math.hypot(botCenter.x - center.x, botCenter.y - center.y) > 820) continue;
      bot.effects.freezeUntil = Math.max(bot.effects.freezeUntil || 0, now + 3.2);
      frozen += 1;
    }
    makeBurst(state, center.x, center.y, "#9defff", 92, 0.38, 24);
    addNotice(state, `凍結食物：緩速附近 ${frozen} 名對手`, "#9defff", 2.4);
  } else if (food.type === "speed") {
    actor.effects.speedUntil = Math.max(actor.effects.speedUntil, now + 6);
    addNotice(state, "加速食物：移動速度提升", "#70ecff", 2.2);
  } else if (food.type === "shield") {
    actor.effects.shieldUntil = Math.max(actor.effects.shieldUntil, now + 12);
    addNotice(state, "護盾食物：可抵擋一次吞噬", "#ffe36e", 2.2);
  } else if (food.type === "magnet") {
    actor.effects.magnetUntil = Math.max(actor.effects.magnetUntil, now + 8);
    addNotice(state, "磁吸食物：附近食物會靠近", "#ff91dd", 2.2);
  }
}

function updatePlayerDanger(state) {
  const player = state.player;
  if (player.cells.length === 0) {
    state.danger = null;
    return;
  }

  const center = centerOfCells(player.cells);
  const primary = largestCell(player.cells);
  let nearest = null;
  for (const actor of state.bots) {
    for (const cell of actor.cells) {
      if (cell.mass < primary.mass * 1.08) continue;
      const dx = cell.x - center.x;
      const dy = cell.y - center.y;
      const dist = Math.hypot(dx, dy);
      const range = radiusFromMass(cell.mass) + radiusFromMass(primary.mass) + 920;
      if (dist > range) continue;
      const level = clamp((range - dist) / range, 0, 1);
      if (!nearest || level > nearest.level) nearest = { x: dx, y: dy, level };
    }
  }
  state.danger = nearest ? { ...normalizeVector(nearest.x, nearest.y), level: nearest.level } : null;
}

function updateMagnetFoods(state, dt) {
  if (state.player.cells.length === 0 || state.player.effects.magnetUntil <= state.time) return;
  const center = centerOfCells(state.player.cells);
  for (const food of state.foods) {
    const dx = center.x - food.x;
    const dy = center.y - food.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1 || dist > 520) continue;
    const force = (1 - dist / 520) * (food.type === "normal" ? 340 : 180);
    food.x += (dx / dist) * force * dt;
    food.y += (dy / dist) * force * dt;
  }
}

function isInsideZone(zone, x, y) {
  return Math.hypot(zone.x - x, zone.y - y) <= zone.radius;
}

function zoneSpeedMultiplier(state, x, y) {
  let multiplier = 1;
  for (const zone of state.zones) {
    if (zone.type === "nebula" && isInsideZone(zone, x, y)) multiplier *= 0.74;
  }
  return multiplier;
}

function spawnZoneFood(state, zone, count) {
  for (let i = 0; i < count; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const distance = Math.sqrt(Math.random()) * zone.radius * 0.92;
    const massBoost = zone.type === "nebula" ? rand(1.8, 3.6) : rand(1.2, 2.4);
    const mass = clamp(createFoodMass(state) * massBoost, 2.5, zone.type === "nebula" ? 220 : 140);
    const type = createFoodType(mass);
    state.foods.push({
      id: id("food"),
      x: clamp(zone.x + Math.cos(angle) * distance, 30, state.world.width - 30),
      y: clamp(zone.y + Math.sin(angle) * distance, 30, state.world.height - 30),
      mass,
      type,
      color: foodColorForMass(mass, type),
      drift: rand(0, Math.PI * 2),
    });
  }
}

function applyAreaEvents(state, dt) {
  const actors = [state.player, ...state.bots];
  const safe = state.safeZone;
  safe.radius = clamp(SAFE_ZONE_START_RADIUS - state.time * 5.0, SAFE_ZONE_MIN_RADIUS, SAFE_ZONE_START_RADIUS);

  for (const zone of state.zones) {
    zone.pulse += dt;
    if ((zone.type === "storm" || zone.type === "nebula") && state.foods.length < FOOD_TARGET + 90 && Math.random() < dt * 1.9) {
      spawnZoneFood(state, zone, zone.type === "nebula" ? 3 : 2);
    }
  }

  for (const actor of actors) {
    for (const cell of actor.cells) {
      const safeDist = Math.hypot(cell.x - safe.x, cell.y - safe.y);
      if (safeDist > safe.radius) {
        const pressure = clamp((safeDist - safe.radius) / 700, 0.25, 1.8);
        cell.mass = Math.max(14, cell.mass - (cell.mass * 0.014 + 1.2) * pressure * dt);
      }

      for (const zone of state.zones) {
        const dx = zone.x - cell.x;
        const dy = zone.y - cell.y;
        const dist = Math.hypot(dx, dy);
        if (dist <= 0.001 || dist > zone.radius) continue;
        const amount = 1 - dist / zone.radius;
        if (zone.type === "storm") {
          cell.mass = Math.max(14, cell.mass - (cell.mass * 0.01 + 0.9) * amount * dt);
        } else if (zone.type === "blackhole") {
          const force = 520 * amount * amount;
          cell.vx += (dx / dist) * force * dt;
          cell.vy += (dy / dist) * force * dt;
          if (dist < 72) cell.mass = Math.max(12, cell.mass - (cell.mass * 0.022 + 1.6) * dt);
        }
      }
    }
  }

  for (const food of state.foods) {
    for (const zone of state.zones) {
      if (zone.type !== "blackhole") continue;
      const dx = zone.x - food.x;
      const dy = zone.y - food.y;
      const dist = Math.hypot(dx, dy);
      if (dist <= 0.001 || dist > zone.radius) continue;
      const force = 380 * (1 - dist / zone.radius);
      food.x += (dx / dist) * force * dt;
      food.y += (dy / dist) * force * dt;
    }
  }

  for (const blob of state.ejected) {
    for (const zone of state.zones) {
      if (zone.type !== "blackhole") continue;
      const dx = zone.x - blob.x;
      const dy = zone.y - blob.y;
      const dist = Math.hypot(dx, dy);
      if (dist <= 0.001 || dist > zone.radius) continue;
      const force = 460 * (1 - dist / zone.radius);
      blob.vx += (dx / dist) * force * dt;
      blob.vy += (dy / dist) * force * dt;
    }
  }
}

function updateMission(state, dt) {
  if (!state.mission) return;
  const mission = state.mission;

  if (state.player.cells.length > 0) {
    state.playerRun.surviveSeconds += dt;
    const center = centerOfCells(state.player.cells);
    const inNebula = state.zones.some((zone) => zone.type === "nebula" && isInsideZone(zone, center.x, center.y));
    if (inNebula) state.playerRun.nebulaSeconds += dt;
  }

  if (mission.completed) {
    mission.nextIn -= dt;
    if (mission.nextIn <= 0) {
      state.missionCompleted += 1;
      state.mission = createMission(state.missionCompleted);
      addNotice(state, `新任務：${state.mission.detail}`, "#dff8ff", 2.4);
    }
    return;
  }

  if (mission.base == null) {
    if (mission.type === "kills") mission.base = state.playerRun.kills;
    else if (mission.type === "powerFoods") mission.base = state.playerRun.powerFoods;
    else if (mission.type === "splits") mission.base = state.playerRun.splits;
    else if (mission.type === "nebula") mission.base = state.playerRun.nebulaSeconds;
    else mission.base = 0;
  }

  if (mission.type === "mass") {
    mission.progress = totalMass(state.player);
  } else if (mission.type === "kills") {
    mission.progress = state.playerRun.kills - mission.base;
  } else if (mission.type === "powerFoods") {
    mission.progress = state.playerRun.powerFoods - mission.base;
  } else if (mission.type === "splits") {
    mission.progress = state.playerRun.splits - mission.base;
  } else if (mission.type === "nebula") {
    mission.progress = state.playerRun.nebulaSeconds - mission.base;
  } else if (mission.type === "rank") {
    const rank = getPlayerRank(state);
    mission.progress = Math.max(0, mission.goal - rank + 1);
  }

  const complete = mission.type === "rank"
    ? getPlayerRank(state) <= mission.goal
    : mission.progress >= mission.goal;
  if (complete) {
    mission.completed = true;
    mission.progress = mission.goal;
    mission.nextIn = 2.2;
    awardMissionReward(state, mission);
  }
}

function updateBots(state, dt) {
  const allThreatCells = [state.player, ...state.bots].flatMap((actor) =>
    actor.cells.map((cell) => ({
      actorId: actor.id,
      x: cell.x,
      y: cell.y,
      mass: cell.mass,
      radius: radiusFromMass(cell.mass),
    })),
  );

  for (const bot of state.bots) {
    if (bot.cells.length === 0) continue;
    const personality = bot.personality || BOT_PERSONALITIES[1];
    const center = centerOfCells(bot.cells);
    const primary = largestCell(bot.cells);
    const primaryRadius = radiusFromMass(primary.mass);

    let avoidX = 0;
    let avoidY = 0;
    let avoidPressure = 0;
    let chaseTarget = null;
    let neutralNeighbor = null;
    let nearestFood = null;
    let foodScore = 0;

    bot.rethinkTimer -= dt;
    bot.panicTimer = Math.max(0, bot.panicTimer - dt);
    if (bot.rethinkTimer <= 0) {
      bot.rethinkTimer = rand(BOT_RETHINK_MIN, BOT_RETHINK_MAX);
      bot.wanderAngle += rand(-0.9, 0.9);
    }

    for (const threat of allThreatCells) {
      if (threat.actorId === bot.id) continue;
      const dx = threat.x - center.x;
      const dy = threat.y - center.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 0.001) continue;
      const isPlayerThreat = threat.actorId === state.player.id;
      const dangerRange = primaryRadius + threat.radius + (isPlayerThreat ? 190 : 520);
      const threatRatio = threat.mass / Math.max(1, primary.mass);
      const preyRatio = primary.mass / Math.max(1, threat.mass);

      if (threatRatio > 1.08 && dist < dangerRange * personality.danger) {
        const panicDistance = primaryRadius + threat.radius + 54;
        const noticesPlayerLate = isPlayerThreat && dist > panicDistance && Math.random() > bot.nerve * 0.5;
        if (dist < panicDistance || !noticesPlayerLate) {
          if (isPlayerThreat) bot.panicTimer = Math.max(bot.panicTimer, rand(0.18, 0.55));
          const urgency = isPlayerThreat ? clamp((panicDistance - dist) / Math.max(1, panicDistance), 0.08, 0.88) : 1;
          const force = ((dangerRange - dist) / dangerRange) * clamp(threatRatio, 1, 3.5) * urgency;
          const mistake = isPlayerThreat ? rand(-0.22, 0.22) * (1.4 - bot.nerve) : 0;
          const awayX = -dx / dist;
          const awayY = -dy / dist;
          const sideX = -awayY;
          const sideY = awayX;
          avoidX += awayX * force + sideX * mistake;
          avoidY += awayY * force + sideY * mistake;
          avoidPressure += force;
        }
      }
      // Similar-sized cells are neutral: avoid drifting into a long shoving match.
      if (threatRatio >= 0.82 && threatRatio <= 1.12 && dist < primaryRadius + threat.radius + 180) {
        if (!neutralNeighbor || dist < neutralNeighbor.dist) {
          neutralNeighbor = { dx, dy, dist };
        }
      }
      if (preyRatio > 1.28 && dist < 980 * personality.chase) {
        const playerBonus = threat.actorId === state.player.id && totalMass(state.player) > 280 ? 1.45 : 1;
        const score = (threat.mass * clamp(preyRatio - 1, 0.2, 2.2) * playerBonus * personality.chase) / (dist + 120);
        if (!chaseTarget || score > chaseTarget.score) {
          chaseTarget = { x: threat.x, y: threat.y, dist, mass: threat.mass, score };
        }
      }
    }

    for (const virus of state.viruses) {
      if (primary.mass < 126) continue;
      const dx = virus.x - center.x;
      const dy = virus.y - center.y;
      const dist = Math.hypot(dx, dy);
      const dangerRange = primaryRadius + radiusFromMass(virus.mass) + 260;
      if (dist > 0.001 && dist < dangerRange) {
        const force = ((dangerRange - dist) / dangerRange) * 1.35;
        avoidX -= (dx / dist) * force;
        avoidY -= (dy / dist) * force;
        avoidPressure += force;
      }
    }

    for (const food of state.foods) {
      const dx = food.x - center.x;
      const dy = food.y - center.y;
      const distSq = dx * dx + dy * dy;
      if (distSq > 1200 * 1200) continue;
      const playerIsHunting = state.player.cells.some((playerCell) => playerCell.mass > primary.mass * 1.08);
      const playerPressure = playerIsHunting ? 0.58 : 1;
      const score = (food.mass * playerPressure * personality.food) / (Math.sqrt(distSq) + 80);
      if (score > foodScore) {
        foodScore = score;
        nearestFood = food;
      }
    }

    for (const blob of state.ejected) {
      const dx = blob.x - center.x;
      const dy = blob.y - center.y;
      const distSq = dx * dx + dy * dy;
      if (primary.mass <= blob.mass * 1.08 || distSq > 1000 * 1000) continue;
      const score = (blob.mass * 1.8 * personality.food) / (Math.sqrt(distSq) + 90);
      if (score > foodScore) {
        foodScore = score;
        nearestFood = blob;
      }
    }

    const edgePadding = primaryRadius + 220;
    if (center.x < edgePadding) avoidX += (edgePadding - center.x) / edgePadding;
    if (center.x > state.world.width - edgePadding) avoidX -= (center.x - (state.world.width - edgePadding)) / edgePadding;
    if (center.y < edgePadding) avoidY += (edgePadding - center.y) / edgePadding;
    if (center.y > state.world.height - edgePadding) avoidY -= (center.y - (state.world.height - edgePadding)) / edgePadding;

    let aim = { x: Math.cos(bot.wanderAngle), y: Math.sin(bot.wanderAngle) };
    if (personality.type === "baiter" && primary.mass > EJECT_MIN_MASS + 18 && bot.ejectCooldown <= 0) {
      let nearestVirus = null;
      for (const virus of state.viruses) {
        const dx = virus.x - center.x;
        const dy = virus.y - center.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 760 || dist < primaryRadius + radiusFromMass(virus.mass) + 30) continue;
        if (!nearestVirus || dist < nearestVirus.dist) nearestVirus = { dx, dy, dist };
      }
      if (nearestVirus) ejectMass(bot, nearestVirus.dx, nearestVirus.dy, state);
    }

    if (Math.abs(avoidX) + Math.abs(avoidY) > 0.18) {
      aim = normalizeVector(avoidX, avoidY);
    } else if (chaseTarget && chaseTarget.score > foodScore * 1.35) {
      aim = normalizeVector(chaseTarget.x - center.x, chaseTarget.y - center.y);
      if (
        avoidPressure < 0.2 &&
        bot.splitCooldown <= 0 &&
        bot.cells.length < 8 &&
        primary.mass > chaseTarget.mass * (1.9 / personality.split) &&
        chaseTarget.dist < primaryRadius * 4.2 + 170
      ) {
        splitActor(bot, aim.x, aim.y, state);
      }
    } else if (neutralNeighbor && neutralNeighbor.dist < 220) {
      const repel = normalizeVector(-neutralNeighbor.dx, -neutralNeighbor.dy);
      const tangent = normalizeVector(-neutralNeighbor.dy, neutralNeighbor.dx);
      const tangentSign = Math.random() < 0.5 ? -1 : 1;
      // Break "sticky following": pull away from similar-sized nearby cells.
      aim = normalizeVector(
        repel.x * 0.8 + tangent.x * 0.45 * tangentSign,
        repel.y * 0.8 + tangent.y * 0.45 * tangentSign,
      );
    } else if (nearestFood) {
      aim = normalizeVector(nearestFood.x - center.x, nearestFood.y - center.y);
    }

    const steering = avoidPressure > 0.2 ? 0.2 : 0.12;
    bot.aimX = bot.aimX * (1 - steering) + aim.x * steering;
    bot.aimY = bot.aimY * (1 - steering) + aim.y * steering;

    const panicPenalty = bot.panicTimer > 0 ? 0.62 : 1;
    const frozenPenalty = bot.effects.freezeUntil > state.time ? 0.38 : 1;
    const speedBoost = BOT_SPEED_MULTIPLIER * (bot.effects.speedUntil > state.time ? 1.08 : 1) * panicPenalty * frozenPenalty;
    for (const cell of bot.cells) {
      moveCell(cell, bot.aimX, bot.aimY, dt, state.world, speedBoost * zoneSpeedMultiplier(state, cell.x, cell.y));
    }
  }
}

function handleFoodAndMassIntake(state, actor) {
  for (const cell of actor.cells) {
    const radius = radiusFromMass(cell.mass);
    for (let i = state.foods.length - 1; i >= 0; i -= 1) {
      const food = state.foods[i];
      const dx = food.x - cell.x;
      const dy = food.y - cell.y;
      if (dx * dx + dy * dy <= (radius - 1.4) ** 2) {
        cell.mass += food.mass;
        applyFoodEffect(state, actor, food);
        state.foods.splice(i, 1);
      }
    }
    for (let i = state.ejected.length - 1; i >= 0; i -= 1) {
      const blob = state.ejected[i];
      const dx = blob.x - cell.x;
      const dy = blob.y - cell.y;
      const threshold = radius - radiusFromMass(blob.mass) * 0.35;
      if (dx * dx + dy * dy <= threshold ** 2 && cell.mass > blob.mass * 1.05) {
        cell.mass += blob.mass * 0.94;
        state.ejected.splice(i, 1);
      }
    }
  }
}

function handleVirusInteractions(state, actor) {
  for (let vi = state.viruses.length - 1; vi >= 0; vi -= 1) {
    const virus = state.viruses[vi];
    const vr = radiusFromMass(virus.mass);
    for (let ci = actor.cells.length - 1; ci >= 0; ci -= 1) {
      const cell = actor.cells[ci];
      const cr = radiusFromMass(cell.mass);
      const dx = virus.x - cell.x;
      const dy = virus.y - cell.y;
      const dist = Math.hypot(dx, dy);
      if (dist < cr + vr - 5 && cell.mass > 170) {
        const availableSlots = Math.max(0, 16 - actor.cells.length);
        const maxPieces = Math.min(6, Math.max(2, availableSlots + 1));
        const pieces = clamp(Math.floor(cell.mass / 160), 2, maxPieces);
        const unitMass = cell.mass / pieces;
        cell.mass = unitMass;
        const lock = state.time + VIRUS_SPLIT_MERGE_LOCK_SECONDS;
        cell.mergeLockUntil = lock;
        cell.autoMergeSource = "virus";
        cell.autoMergeUntil = lock + VIRUS_AUTO_MERGE_CHAIN_SECONDS;
        for (let p = 1; p < pieces; p += 1) {
          const angle = (Math.PI * 2 * p) / pieces + rand(-0.15, 0.15);
          const part = createCell(
            actor.id,
            cell.x + Math.cos(angle) * (cr * 0.5),
            cell.y + Math.sin(angle) * (cr * 0.5),
            unitMass,
            actor.color,
            actor.name,
          );
          const impulse = rand(200, 420);
          part.vx = Math.cos(angle) * impulse;
          part.vy = Math.sin(angle) * impulse;
          part.mergeLockUntil = lock;
          part.autoMergeSource = "virus";
          part.autoMergeUntil = lock + VIRUS_AUTO_MERGE_CHAIN_SECONDS;
          actor.cells.push(part);
        }
        makeBurst(state, cell.x, cell.y, "#b6ff5c", cr, 0.28, 18);
        break;
      }
    }
  }
}

function resolveCellVsCell(state) {
  const actors = [state.player, ...state.bots];
  let hasChange = true;
  let guard = 0;
  while (hasChange && guard < 40) {
    hasChange = false;
    guard += 1;
    for (let ai = 0; ai < actors.length; ai += 1) {
      const actorA = actors[ai];
      for (let aci = actorA.cells.length - 1; aci >= 0; aci -= 1) {
        const cellA = actorA.cells[aci];
        for (let bi = ai; bi < actors.length; bi += 1) {
          const actorB = actors[bi];
          const start = actorA.id === actorB.id ? aci - 1 : actorB.cells.length - 1;
          for (let bci = start; bci >= 0; bci -= 1) {
            const cellB = actorB.cells[bci];
            const dx = cellB.x - cellA.x;
            const dy = cellB.y - cellA.y;
            const dist = Math.hypot(dx, dy) || 0.0001;
            const ra = radiusFromMass(cellA.mass);
            const rb = radiusFromMass(cellB.mass);
            const sameOwner = actorA.id === actorB.id;

            if (sameOwner) {
              const canMergeNow = state.time >= cellA.mergeLockUntil && state.time >= cellB.mergeLockUntil;
              const virusAutoPair = isVirusAutoMergePair(cellA, cellB, state.time);
              const mergeDistance = virusAutoPair
                ? Math.max(0, ra + rb - VIRUS_AUTO_MERGE_CONTACT_EPSILON)
                : Math.max(ra, rb) * 0.82;
              if (canMergeNow && dist < mergeDistance) {
                if (cellA.mass >= cellB.mass) {
                  cellA.mass += cellB.mass;
                  if (virusAutoPair) carryVirusAutoMergeState(cellA, cellB);
                  actorB.cells.splice(bci, 1);
                } else {
                  cellB.mass += cellA.mass;
                  if (virusAutoPair) carryVirusAutoMergeState(cellB, cellA);
                  actorA.cells.splice(aci, 1);
                }
                hasChange = true;
                break;
              }
              if (virusAutoPair && canMergeNow) continue;
              if (dist < ra + rb - 3) repelCells(cellA, cellB);
              continue;
            }

            const aCanEat = canAbsorbCell(cellA, cellB, dist);
            const bCanEat = canAbsorbCell(cellB, cellA, dist);
            if (aCanEat) {
              if (actorB.id === state.player.id && state.playerRun.invulnerableUntil > state.time) {
                repelCells(cellA, cellB);
                if (state.time > state.playerRun.protectionNoticeUntil) {
                  state.playerRun.protectionNoticeUntil = state.time + 1.2;
                  addNotice(state, "重生保護：暫時不會被吞噬", "#70ecff", 1.2);
                }
                continue;
              }
              if (tryShieldBlock(state, actorB, cellB, cellA)) continue;
              absorbCell(cellA, cellB, state);
              actorB.cells.splice(bci, 1);
              if (actorB.cells.length === 0) {
                if (actorA.id === state.player.id) {
                  registerPlayerKill(state, cellA, cellB);
                  awardBountyIfNeeded(state, actorB, cellA, cellB.mass);
                  awardRevengeIfNeeded(state, actorB, cellA, cellB.mass);
                } else if (actorB.id === state.player.id) {
                  setRevengeTarget(state, actorA);
                }
                addNotice(state, `${actorA.name} 吃掉了 ${actorB.name} (+${formatMass(cellB.mass)})`, actorA.color);
              }
              hasChange = true;
              break;
            }
            if (bCanEat) {
              if (actorA.id === state.player.id && state.playerRun.invulnerableUntil > state.time) {
                repelCells(cellA, cellB);
                if (state.time > state.playerRun.protectionNoticeUntil) {
                  state.playerRun.protectionNoticeUntil = state.time + 1.2;
                  addNotice(state, "重生保護：暫時不會被吞噬", "#70ecff", 1.2);
                }
                continue;
              }
              if (tryShieldBlock(state, actorA, cellA, cellB)) continue;
              absorbCell(cellB, cellA, state);
              actorA.cells.splice(aci, 1);
              if (actorA.cells.length === 0) {
                if (actorB.id === state.player.id) {
                  registerPlayerKill(state, cellB, cellA);
                  awardBountyIfNeeded(state, actorA, cellB, cellA.mass);
                  awardRevengeIfNeeded(state, actorA, cellB, cellA.mass);
                } else if (actorA.id === state.player.id) {
                  setRevengeTarget(state, actorB);
                }
                addNotice(state, `${actorB.name} 吃掉了 ${actorA.name} (+${formatMass(cellA.mass)})`, actorB.color);
              }
              hasChange = true;
              break;
            }
            if (dist < ra + rb - 2) repelCells(cellA, cellB);
          }
          if (hasChange) break;
        }
        if (hasChange) break;
      }
      if (hasChange) break;
    }
  }
}

function updateParticles(state, dt) {
  for (let i = state.notices.length - 1; i >= 0; i -= 1) {
    state.notices[i].ttl -= dt;
    if (state.notices[i].ttl <= 0) state.notices.splice(i, 1);
  }

  for (let i = state.particles.length - 1; i >= 0; i -= 1) {
    const particle = state.particles[i];
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vx *= Math.pow(0.9, dt * 60);
    particle.vy *= Math.pow(0.9, dt * 60);
    particle.life -= dt;
    if (particle.life <= 0) state.particles.splice(i, 1);
  }

  for (let i = state.effects.length - 1; i >= 0; i -= 1) {
    state.effects[i].ttl -= dt;
    if (state.effects[i].ttl <= 0) state.effects.splice(i, 1);
  }
}

function updateEjected(state, dt) {
  for (let i = state.ejected.length - 1; i >= 0; i -= 1) {
    const blob = state.ejected[i];
    blob.x += blob.vx * dt;
    blob.y += blob.vy * dt;
    blob.vx *= Math.pow(0.93, dt * 60);
    blob.vy *= Math.pow(0.93, dt * 60);
    blob.life -= dt;
    const radius = radiusFromMass(blob.mass);
    if (blob.x < radius || blob.x > state.world.width - radius) blob.vx *= -0.35;
    if (blob.y < radius || blob.y > state.world.height - radius) blob.vy *= -0.35;
    blob.x = clamp(blob.x, radius, state.world.width - radius);
    blob.y = clamp(blob.y, radius, state.world.height - radius);
    if (blob.life <= 0) state.ejected.splice(i, 1);
  }
}

function feedViruses(state) {
  for (let vi = 0; vi < state.viruses.length; vi += 1) {
    const virus = state.viruses[vi];
    const vr = radiusFromMass(virus.mass);
    for (let ei = state.ejected.length - 1; ei >= 0; ei -= 1) {
      const blob = state.ejected[ei];
      const dx = blob.x - virus.x;
      const dy = blob.y - virus.y;
      if (dx * dx + dy * dy < (vr + radiusFromMass(blob.mass)) ** 2) {
        virus.feed += 1;
        virus.mass = clamp(virus.mass + blob.mass * 0.14, 90, 140);
        const direction = normalizeVector(blob.vx, blob.vy);
        state.ejected.splice(ei, 1);
        if (virus.feed >= 11) {
          virus.feed = 0;
          const sx = virus.x + direction.x * vr * 1.7;
          const sy = virus.y + direction.y * vr * 1.7;
          spawnVirus(state, sx, sy, direction.x * 240, direction.y * 240);
          makeBurst(state, sx, sy, "#b6ff5c", 28, 0.26, 15);
        }
      }
    }
  }
}

function updateViruses(state, dt) {
  for (const virus of state.viruses) {
    virus.spin += dt * 0.8;
    if (Math.abs(virus.vx) + Math.abs(virus.vy) > 0.01) {
      virus.x += virus.vx * dt;
      virus.y += virus.vy * dt;
      virus.vx *= Math.pow(0.965, dt * 60);
      virus.vy *= Math.pow(0.965, dt * 60);
    }
    const radius = radiusFromMass(virus.mass);
    virus.x = clamp(virus.x, radius, state.world.width - radius);
    virus.y = clamp(virus.y, radius, state.world.height - radius);
  }
}

function updateCamera(state, dt) {
  const player = state.player;
  const center = centerOfCells(player.cells);
  const mass = totalMass(player);
  const cellSpread = player.cells.reduce((max, cell) => Math.max(max, Math.hypot(cell.x - center.x, cell.y - center.y)), 0);
  const massZoom = 1.18 / Math.pow(Math.max(1, mass) / 120, 0.34);
  const spreadZoom = 640 / Math.max(640, cellSpread * 2.6);
  const targetZoom = clamp(Math.min(massZoom, spreadZoom), 0.08, 0.9);
  state.camera.x += (center.x - state.camera.x) * clamp(dt * 6, 0, 1);
  state.camera.y += (center.y - state.camera.y) * clamp(dt * 6, 0, 1);
  state.camera.zoom += (targetZoom - state.camera.zoom) * clamp(dt * 3.8, 0, 1);
}

function updateLeaderboard(state) {
  state.leaderboard = [state.player, ...state.bots]
    .map((actor) => ({
      id: actor.id,
      name: actor.name,
      mass: Math.round(totalMass(actor)),
      color: actor.color,
      isPlayer: actor.id === state.player.id,
    }))
    .sort((a, b) => b.mass - a.mass)
    .slice(0, 8);
}

function createMinimapActors(state) {
  return [state.player, ...state.bots]
    .filter((actor) => actor.cells.length > 0)
    .map((actor) => {
      const center = centerOfCells(actor.cells);
      return {
        id: actor.id,
        x: (center.x / state.world.width) * 100,
        y: (center.y / state.world.height) * 100,
        mass: Math.round(totalMass(actor)),
        color: actor.color,
        isPlayer: actor.id === state.player.id,
      };
    });
}

function getArenaStatus(state) {
  const center = state.player.cells.length > 0 ? centerOfCells(state.player.cells) : { x: state.camera.x, y: state.camera.y };
  const safeDist = Math.hypot(center.x - state.safeZone.x, center.y - state.safeZone.y);
  const activeZone = state.zones.find((zone) => isInsideZone(zone, center.x, center.y));
  return {
    zone: activeZone ? activeZone.label : "安全航道",
    safeRadius: Math.round(state.safeZone.radius),
    safePercent: Math.round((state.safeZone.radius / SAFE_ZONE_START_RADIUS) * 100),
    outsideSafe: safeDist > state.safeZone.radius,
    pressure: Math.max(0, Math.round(safeDist - state.safeZone.radius)),
  };
}

export function createInitialState() {
  const player = createActor(
    "player",
    PLAYER_NAME,
    "#6ff6ff",
    WORLD_WIDTH * 0.5,
    WORLD_HEIGHT * 0.5,
    PLAYER_START_MASS,
  );
  placeActorCell(player, WORLD_WIDTH * 0.5, WORLD_HEIGHT * 0.5);

  const bots = Array.from({ length: BOT_TARGET }, (_, i) => {
    const startingMass = i < 9 ? rand(28, 46) : i < 19 ? rand(58, 115) : rand(125, 190);
    const angle = rand(0, Math.PI * 2);
    const nearDistance = rand(520, 980);
    const x = i < 6
      ? clamp(WORLD_WIDTH * 0.5 + Math.cos(angle) * nearDistance, 240, WORLD_WIDTH - 240)
      : rand(240, WORLD_WIDTH - 240);
    const y = i < 6
      ? clamp(WORLD_HEIGHT * 0.5 + Math.sin(angle) * nearDistance, 240, WORLD_HEIGHT - 240)
      : rand(240, WORLD_HEIGHT - 240);
    const personality = BOT_PERSONALITIES[i % BOT_PERSONALITIES.length];
    const bot = createActor(
      "bot",
      BOT_NAMES[i % BOT_NAMES.length],
      COLOR_POOL[i % COLOR_POOL.length],
      x,
      y,
      startingMass,
      personality,
    );
    placeActorCell(bot, bot.cells[0].x, bot.cells[0].y);
    return bot;
  });

  const state = {
    world: { width: WORLD_WIDTH, height: WORLD_HEIGHT },
    player,
    bots,
    foods: [],
    viruses: [],
    ejected: [],
    particles: [],
    effects: [],
    notices: [],
    backgroundParticles: createBackgroundParticles(170),
    zones: [],
    safeZone: { x: WORLD_WIDTH * 0.5, y: WORLD_HEIGHT * 0.5, radius: SAFE_ZONE_START_RADIUS },
    playerRun: {
      kills: 0,
      powerFoods: 0,
      splits: 0,
      nebulaSeconds: 0,
      surviveSeconds: 0,
      combo: 0,
      comboUntil: 0,
      bestCombo: 0,
      invulnerableUntil: 0,
      protectionNoticeUntil: 0,
      milestoneIndex: 0,
    },
    mission: createMission(0),
    missionCompleted: 0,
    bounty: { actorId: null, name: "", mass: 0, expiresAt: 0, claimed: 0 },
    revenge: { actorId: null, name: "", expiresAt: 0, claimed: 0 },
    camera: { x: WORLD_WIDTH * 0.5, y: WORLD_HEIGHT * 0.5, zoom: 1 },
    leaderboard: [],
    bestMass: PLAYER_START_MASS,
    danger: null,
    boosting: false,
    playerRespawnMs: 0,
    time: 0,
  };

  spawnFood(state, FOOD_TARGET);
  state.zones = ZONE_DEFINITIONS.map((zone, index) => createZone(zone.type, index, state));
  for (let i = 0; i < VIRUS_TARGET; i += 1) spawnVirus(state);
  updateLeaderboard(state);
  return state;
}

export function updateGame(state, dtMs, input) {
  const dt = clamp(dtMs / 1000, 0.001, 0.033);
  state.time += dt;
  const playerAlive = state.player.cells.length > 0;

  state.player.aimX = input.aimX;
  state.player.aimY = input.aimY;

  state.player.splitCooldown = Math.max(0, state.player.splitCooldown - dt);
  state.player.ejectCooldown = Math.max(0, state.player.ejectCooldown - dt);

  for (const bot of state.bots) {
    bot.splitCooldown = Math.max(0, bot.splitCooldown - dt);
    bot.ejectCooldown = Math.max(0, bot.ejectCooldown - dt);
  }

  if (playerAlive && input.mergeQueued) mergeActorCells(state.player, state);
  if (playerAlive && input.splitQueued) {
    const didSplit = splitActor(state.player, input.aimX, input.aimY, state);
    if (didSplit) state.playerRun.splits += 1;
  }
  if (playerAlive && input.ejectPressed) ejectMass(state.player, input.aimX, input.aimY, state);

  state.boosting = playerAlive && input.boostPressed && state.player.cells.some((cell) => cell.mass > BOOST_MIN_MASS);
  const activeBoost = state.boosting ? applyPlayerBoost(state.player, dt) : 1;
  const playerSpeedBoost = PLAYER_SPEED_MULTIPLIER * (state.player.effects.speedUntil > state.time ? 1.22 : 1) * activeBoost;
  for (const cell of state.player.cells) {
    moveCell(cell, state.player.aimX, state.player.aimY, dt, state.world, playerSpeedBoost * zoneSpeedMultiplier(state, cell.x, cell.y));
  }

  updateBots(state, dt);
  updateMagnetFoods(state, dt);
  updateEjected(state, dt);
  updateViruses(state, dt);
  feedViruses(state);
  applyAreaEvents(state, dt);

  if (state.player.cells.length > 0) {
    handleFoodAndMassIntake(state, state.player);
    handleVirusInteractions(state, state.player);
    applyAutoMergeAttraction(state.player, state.time, dt, state.world);
  }
  for (const bot of state.bots) {
    handleFoodAndMassIntake(state, bot);
    handleVirusInteractions(state, bot);
    applyAutoMergeAttraction(bot, state.time, dt, state.world);
  }

  resolveCellVsCell(state);

  if (state.player.cells.length === 0) {
    if (state.playerRespawnMs <= 0) {
      state.playerRespawnMs = PLAYER_RESPAWN_SECONDS;
      addNotice(state, `你被吞噬了，${PLAYER_RESPAWN_SECONDS.toFixed(1)} 秒後重生`, "#ff95da", PLAYER_RESPAWN_SECONDS);
    }
    state.playerRespawnMs = Math.max(0, state.playerRespawnMs - dt);
    if (state.playerRespawnMs <= 0) {
      respawnActor(state.player, state, PLAYER_START_MASS);
      state.playerRun.invulnerableUntil = state.time + RESPAWN_PROTECTION_SECONDS;
      addNotice(state, "重新進場", "#70ecff", 1.8);
      addNotice(state, `${RESPAWN_PROTECTION_SECONDS} 秒重生保護`, "#70ecff", 1.8);
    }
  } else {
    state.playerRespawnMs = 0;
    state.bestMass = Math.max(state.bestMass, totalMass(state.player));
  }
  for (const bot of state.bots) {
    if (bot.cells.length === 0) respawnActor(bot, state, rand(90, 150));
  }

  while (state.foods.length < FOOD_TARGET) spawnFood(state, Math.min(18, FOOD_TARGET - state.foods.length));
  if (state.foods.length > FOOD_TARGET + 180) state.foods.splice(0, state.foods.length - (FOOD_TARGET + 180));
  while (state.viruses.length < VIRUS_TARGET) spawnVirus(state);
  if (state.viruses.length > VIRUS_TARGET + 4) state.viruses.splice(0, state.viruses.length - (VIRUS_TARGET + 4));
  if (state.ejected.length > 420) state.ejected.splice(0, state.ejected.length - 420);
  if (state.particles.length > 700) state.particles.splice(0, state.particles.length - 700);

  updateParticles(state, dt);
  updatePlayerDanger(state);
  updateCamera(state, dt);
  updateLeaderboard(state);
  updateMassMilestones(state);
  updateBountyTarget(state);
  updatePlayerRunTimers(state);
  updateMission(state, dt);
}

export function getPlayerStats(state) {
  const mass = Math.round(totalMass(state.player));
  const cells = state.player.cells.length;
  const fullRanking = [state.player, ...state.bots]
    .map((actor) => ({ id: actor.id, mass: totalMass(actor) }))
    .sort((a, b) => b.mass - a.mass);
  const rank = Math.max(1, fullRanking.findIndex((entry) => entry.id === state.player.id) + 1);
  const now = state.time;
  return {
    mass,
    cells,
    rank,
    totalPlayers: fullRanking.length,
    bestMass: Math.round(state.bestMass),
    foodCount: state.foods.length,
    splitCooldown: state.player.splitCooldown,
    ejectCooldown: state.player.ejectCooldown,
    canEject: state.player.cells.some((cell) => cell.mass >= EJECT_MIN_MASS),
    ejectMinMass: EJECT_MIN_MASS,
    canBoost: state.player.cells.some((cell) => cell.mass > BOOST_MIN_MASS),
    boostMinMass: BOOST_MIN_MASS,
    boosting: state.boosting,
    respawnMs: state.playerRespawnMs,
    danger: state.danger,
    notices: state.notices.map((notice) => ({ ...notice })),
    minimapActors: createMinimapActors(state),
    mission: state.mission ? {
      id: state.mission.id,
      title: state.mission.title,
      detail: state.mission.detail,
      reward: state.mission.reward,
      progress: Math.max(0, state.mission.progress),
      goal: state.mission.goal,
      completed: state.mission.completed,
      nextIn: state.mission.nextIn,
      type: state.mission.type,
    } : null,
    missionCompleted: state.missionCompleted,
    combo: {
      count: state.playerRun.combo,
      best: state.playerRun.bestCombo,
      timeLeft: Math.max(0, state.playerRun.comboUntil - now),
      window: COMBO_WINDOW_SECONDS,
      kills: state.playerRun.kills,
    },
    bounty: state.bounty ? {
      name: state.bounty.name,
      mass: state.bounty.mass,
      timeLeft: Math.max(0, state.bounty.expiresAt - now),
      claimed: state.bounty.claimed,
      active: Boolean(state.bounty.actorId),
    } : null,
    revenge: state.revenge ? {
      name: state.revenge.name,
      timeLeft: Math.max(0, state.revenge.expiresAt - now),
      claimed: state.revenge.claimed,
      active: Boolean(state.revenge.actorId) && state.revenge.expiresAt > now,
    } : null,
    milestone: {
      next: MASS_MILESTONES[state.playerRun.milestoneIndex] || null,
      completed: state.playerRun.milestoneIndex,
    },
    arena: getArenaStatus(state),
    effects: {
      speed: Math.max(0, state.player.effects.speedUntil - now),
      shield: Math.max(0, state.player.effects.shieldUntil - now),
      magnet: Math.max(0, state.player.effects.magnetUntil - now),
      respawnShield: Math.max(0, state.playerRun.invulnerableUntil - now),
    },
  };
}
