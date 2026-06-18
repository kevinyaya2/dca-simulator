export const STORAGE_KEY = "dca.kevinLifeRpg.v1";

const DAY_MS = 24 * 60 * 60 * 1000;
const RECENT_EDIT_DAYS = 7;
const ATTRIBUTE_WINDOW_DAYS = 14;
const SCATTER_WINDOW_DAYS = 30;
const STREAK_WINDOW_DAYS = 30;
const WEEKLY_EXP_DAYS = 56;

const LEVEL_TITLES = [
  { level: 1, title: "新手工程師" },
  { level: 25, title: "中階工程師" },
  { level: 50, title: "資深工程師" },
  { level: 75, title: "Tech Lead" },
];

export const SHOP_ITEMS = [
  {
    id: "skin-classic",
    slot: "skin",
    name: "經典冒險者",
    cost: 0,
    icon: "outfitClassic",
    label: "經典冒險者",
    accent: "#6ea8ff",
    blurb: "預設造型，穩定耐看，適合每天穩穩累積任務進度。",
    description: "起始造型，代表生活主線剛剛展開。",
  },
  {
    id: "skin-moon-runner",
    slot: "skin",
    name: "月夜行者",
    cost: 180,
    icon: "outfitMoon",
    label: "月夜行者",
    accent: "#8f7dff",
    blurb: "夜色系造型，適合熬夜後仍能把節奏重新拉回正軌。",
    description: "夜晚節奏更穩定，睡眠路線進入巡航。",
  },
  {
    id: "skin-code-knight",
    slot: "skin",
    name: "程式騎士",
    cost: 420,
    icon: "outfitKnight",
    label: "程式騎士",
    accent: "#3ac7a7",
    blurb: "以深夜 coding 為核心的高階造型，象徵穩定輸出的工程節奏。",
    description: "把學習與自律鍛造成護甲的工程師造型。",
  },
  {
    id: "title-early-bird",
    slot: "title",
    name: "早起先鋒",
    cost: 90,
    icon: "titleLark",
    label: "早起先鋒",
    blurb: "連續早起後解鎖的稱號，代表你有能力掌握一天的開局。",
    description: "給能穩定早起、節奏乾淨的人。",
  },
  {
    id: "title-study-monk",
    slot: "title",
    name: "研讀修行者",
    cost: 90,
    icon: "titleMonk",
    label: "研讀修行者",
    blurb: "給願意穩定讀書的人，用來標記長期學習與耐心累積。",
    description: "適合把 TOEIC 與學習時間慢慢磨滿的人。",
  },
  {
    id: "title-angular-smith",
    slot: "title",
    name: "Angular 鍛造師",
    cost: 120,
    icon: "titleAngular",
    label: "Angular 鍛造師",
    blurb: "專注打磨 Angular 技能的稱號，適合持續練習框架實戰。",
    description: "代表 Angular 練習穩定推進的副稱號。",
  },
  {
    id: "title-balanced-duelist",
    slot: "title",
    name: "平衡決鬥者",
    cost: 120,
    icon: "titleDuel",
    label: "平衡決鬥者",
    blurb: "在工作、學習、娛樂之間保持節奏時，最適合佩戴的稱號。",
    description: "能把娛樂控制在節奏內，仍守住主線的人。",
  },
  {
    id: "badge-7h-club",
    slot: "badge",
    name: "七小時俱樂部",
    cost: 60,
    icon: "badge7h",
    label: "七小時俱樂部",
    blurb: "睡滿七小時的代表徽章，證明休息不是運氣，是紀律。",
    description: "睡滿七小時的基礎徽章，先把底盤穩住。",
  },
  {
    id: "badge-sleep-streak",
    slot: "badge",
    name: "睡眠連擊章",
    cost: 80,
    icon: "badgeStreak",
    label: "睡眠連擊章",
    blurb: "連續守住睡眠節奏後解鎖，用來記錄你穩定的晚間 routine。",
    description: "代表連續早睡不再只是偶發事件。",
  },
  {
    id: "badge-focus-chain",
    slot: "badge",
    name: "專注連鎖章",
    cost: 80,
    icon: "badgeFocus",
    label: "專注連鎖章",
    blurb: "專注完成學習與任務時佩戴，象徵注意力有被好好保留下來。",
    description: "專注鏈條接上後，學習節奏更難斷掉。",
  },
  {
    id: "badge-workout-spark",
    slot: "badge",
    name: "訓練火花章",
    cost: 80,
    icon: "badgeWorkout",
    label: "訓練火花章",
    blurb: "把運動納入日常後的象徵徽章，提醒你身體也要一起升級。",
    description: "提醒自己不要只升知識，也要維持體力。",
  },
  {
    id: "badge-perfect-day",
    slot: "badge",
    name: "完美日紋章",
    cost: 140,
    icon: "badgePerfect",
    label: "完美日紋章",
    blurb: "獻給完成度極高的一天，代表你把作息、學習與執行全部對齊。",
    description: "全任務通關日的紀念章，代表節奏完整。",
  },
];

const ITEM_BY_ID = Object.fromEntries(SHOP_ITEMS.map((item) => [item.id, item]));

const QUEST_DEFS = [
  { id: "bedtime", label: "23:00 前上床", xp: 45, gold: 12 },
  { id: "wake", label: "07:00 前起床", xp: 45, gold: 12 },
  { id: "sleep", label: "睡滿 7 小時", xp: 70, gold: 18 },
  { id: "toeic", label: "多益學習 15 分鐘", xp: 55, gold: 14 },
  { id: "angular", label: "Angular 學習 30 分鐘", xp: 70, gold: 18 },
  { id: "exercise", label: "運動或伸展", xp: 60, gold: 16 },
  { id: "masterDuel", label: "Master Duel 30-60 分鐘", xp: 35, gold: 10 },
];

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pad(number) {
  return String(number).padStart(2, "0");
}

export function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function fromDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function getTodayKey() {
  return toDateKey(new Date());
}

export function addDays(dateKey, delta) {
  const date = fromDateKey(dateKey);
  date.setDate(date.getDate() + delta);
  return toDateKey(date);
}

export function getRecentDateKeys(days, anchorKey = getTodayKey()) {
  const keys = [];
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    keys.push(addDays(anchorKey, -offset));
  }
  return keys;
}

function getRangeDateKeys(startKey, endKey) {
  const keys = [];
  for (let current = startKey; current <= endKey; current = addDays(current, 1)) {
    keys.push(current);
  }
  return keys;
}

export function formatDayLabel(dateKey) {
  const date = fromDateKey(dateKey);
  return date.toLocaleDateString("zh-TW", {
    month: "numeric",
    day: "numeric",
    weekday: "short",
  });
}

export function formatShortDate(dateKey) {
  const date = fromDateKey(dateKey);
  return date.toLocaleDateString("zh-TW", {
    month: "numeric",
    day: "numeric",
  });
}

export function makeEmptyRecord() {
  return {
    bedTime: "",
    wakeTime: "",
    toeicMinutes: 0,
    angularMinutes: 0,
    exerciseDone: false,
    masterDuelMinutes: 0,
  };
}

function buildInitialRecords(todayKey = getTodayKey()) {
  return Object.fromEntries(
    getRecentDateKeys(RECENT_EDIT_DAYS, todayKey).map((dateKey) => [dateKey, makeEmptyRecord()]),
  );
}

export function createInitialState(todayKey = getTodayKey()) {
  return {
    recordsByDate: buildInitialRecords(todayKey),
    wallet: { bonusGold: 0 },
    ownedItems: ["skin-classic"],
    equipped: {
      skin: "skin-classic",
      title: null,
      badge: null,
    },
  };
}

function normalizeMinutesValue(value) {
  const safeNumber = Number(value);
  if (!Number.isFinite(safeNumber)) return 0;
  return clamp(Math.round(safeNumber), 0, 24 * 60);
}

export function normalizeRecord(record) {
  const safeRecord = record && typeof record === "object" ? record : {};
  return {
    bedTime: typeof safeRecord.bedTime === "string" ? safeRecord.bedTime : "",
    wakeTime: typeof safeRecord.wakeTime === "string" ? safeRecord.wakeTime : "",
    toeicMinutes: normalizeMinutesValue(safeRecord.toeicMinutes),
    angularMinutes: normalizeMinutesValue(safeRecord.angularMinutes),
    exerciseDone: Boolean(safeRecord.exerciseDone),
    masterDuelMinutes: normalizeMinutesValue(safeRecord.masterDuelMinutes),
  };
}

export function normalizeSave(raw, todayKey = getTodayKey()) {
  const base = createInitialState(todayKey);
  if (!raw || typeof raw !== "object") return base;

  const rawRecords = raw.recordsByDate && typeof raw.recordsByDate === "object" ? raw.recordsByDate : {};
  const recordsByDate = { ...base.recordsByDate };
  for (const [dateKey, record] of Object.entries(rawRecords)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
      recordsByDate[dateKey] = normalizeRecord(record);
    }
  }

  const ownedItems = Array.isArray(raw.ownedItems)
    ? Array.from(new Set(["skin-classic", ...raw.ownedItems.filter((itemId) => ITEM_BY_ID[itemId])]))
    : ["skin-classic"];

  const wallet =
    raw.wallet && typeof raw.wallet === "object"
      ? { bonusGold: Number(raw.wallet.bonusGold) || 0 }
      : base.wallet;

  const equipped = {
    skin: ownedItems.includes(raw.equipped?.skin) ? raw.equipped.skin : "skin-classic",
    title: ownedItems.includes(raw.equipped?.title) ? raw.equipped.title : null,
    badge: ownedItems.includes(raw.equipped?.badge) ? raw.equipped.badge : null,
  };

  return {
    recordsByDate,
    wallet,
    ownedItems,
    equipped,
  };
}

export function parseTimeToMinutes(timeValue) {
  if (!timeValue || typeof timeValue !== "string") return null;
  const [hours, minutes] = timeValue.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
  return hours * 60 + minutes;
}

function normalizeBedtimeMinutes(timeValue) {
  const minutes = parseTimeToMinutes(timeValue);
  if (minutes == null) return null;
  return minutes < 12 * 60 ? minutes + 24 * 60 : minutes;
}

export function computeSleepMinutes(bedTime, wakeTime) {
  const bedMinutes = parseTimeToMinutes(bedTime);
  const wakeMinutes = parseTimeToMinutes(wakeTime);
  if (bedMinutes == null || wakeMinutes == null) return 0;
  if (wakeMinutes <= bedMinutes) return wakeMinutes + 24 * 60 - bedMinutes;
  return wakeMinutes - bedMinutes;
}

function isBedtimeQuestComplete(bedTime) {
  const normalized = normalizeBedtimeMinutes(bedTime);
  return normalized != null && normalized <= 23 * 60;
}

function isBedtimeLatePenalty(bedTime) {
  const normalized = normalizeBedtimeMinutes(bedTime);
  return normalized != null && normalized > 23 * 60 + 30;
}

function isWakeQuestComplete(wakeTime) {
  const wakeMinutes = parseTimeToMinutes(wakeTime);
  return wakeMinutes != null && wakeMinutes <= 7 * 60;
}

function isWakePenalty(wakeTime) {
  const wakeMinutes = parseTimeToMinutes(wakeTime);
  return wakeMinutes != null && wakeMinutes > 7 * 60;
}

function getLevelInfo(totalXp) {
  let level = 1;
  let remainingXp = Math.max(0, Math.round(totalXp));

  while (level < 100) {
    const threshold = xpToNext(level);
    if (remainingXp < threshold) break;
    remainingXp -= threshold;
    level += 1;
  }

  return {
    level,
    currentXp: level >= 100 ? xpToNext(100) : remainingXp,
    xpToNext: level >= 100 ? xpToNext(100) : xpToNext(level),
    progressPct: level >= 100 ? 100 : clamp((remainingXp / xpToNext(level)) * 100, 0, 100),
  };
}

export function xpToNext(level) {
  return 120 + level * 30;
}

function getLevelTitle(level) {
  let currentTitle = LEVEL_TITLES[0].title;
  for (const definition of LEVEL_TITLES) {
    if (level >= definition.level) currentTitle = definition.title;
  }
  return currentTitle;
}

function getQuestCompletions(record) {
  const sleepMinutes = computeSleepMinutes(record.bedTime, record.wakeTime);
  return {
    sleepMinutes,
    bedtime: isBedtimeQuestComplete(record.bedTime),
    wake: isWakeQuestComplete(record.wakeTime),
    sleep: sleepMinutes >= 420,
    toeic: record.toeicMinutes >= 15,
    angular: record.angularMinutes >= 30,
    exercise: record.exerciseDone,
    masterDuel: record.masterDuelMinutes >= 30 && record.masterDuelMinutes <= 60,
  };
}

function computeEfficiencyScore(previousDay) {
  if (!previousDay) return 100;
  let penalty = 0;
  if (previousDay.sleepMinutes > 0 && previousDay.sleepMinutes < 420) {
    penalty += Math.min(30, Math.round((420 - previousDay.sleepMinutes) / 6));
  }
  if (isBedtimeLatePenalty(previousDay.record.bedTime)) penalty += 10;
  if (isWakePenalty(previousDay.record.wakeTime)) penalty += 10;
  return clamp(100 - penalty, 40, 100);
}

function getDailyFocusScore(day) {
  return clamp(
    (day.quests.angular ? 45 : 0)
      + (day.quests.sleep ? 25 : 0)
      + (day.quests.masterDuel ? 20 : 0)
      + day.efficiencyScore * 0.1,
    0,
    100,
  );
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function computeAttributeBundle(days, currentStreak) {
  const safeDays = days.length ? days : [];
  const earlyBedRate = average(safeDays.map((day) => (day.quests.bedtime ? 100 : 0)));
  const earlyWakeRate = average(safeDays.map((day) => (day.quests.wake ? 100 : 0)));
  const sleepRate = average(safeDays.map((day) => (day.quests.sleep ? 100 : 0)));
  const toeicRate = average(safeDays.map((day) => (day.quests.toeic ? 100 : 0)));
  const angularRate = average(safeDays.map((day) => (day.quests.angular ? 100 : 0)));
  const exerciseRate = average(safeDays.map((day) => (day.quests.exercise ? 100 : 0)));
  const duelRate = average(safeDays.map((day) => (day.quests.masterDuel ? 100 : 0)));
  const efficiencyAvg = average(safeDays.map((day) => day.efficiencyScore));
  const completionRate = average(safeDays.map((day) => day.completionRate));

  const energy = clamp(
    earlyBedRate * 0.4 + earlyWakeRate * 0.25 + sleepRate * 0.35 + (efficiencyAvg - 70) * 0.25,
    0,
    100,
  );
  const focus = clamp(
    angularRate * 0.45 + sleepRate * 0.25 + duelRate * 0.2 + efficiencyAvg * 0.1,
    0,
    100,
  );
  const discipline = clamp(
    completionRate * 0.7 + (Math.min(currentStreak, ATTRIBUTE_WINDOW_DAYS) / ATTRIBUTE_WINDOW_DAYS) * 100 * 0.3,
    0,
    100,
  );
  const knowledge = clamp(toeicRate * 0.4 + angularRate * 0.6, 0, 100);
  const health = clamp(exerciseRate * 0.55 + sleepRate * 0.3 + earlyWakeRate * 0.15, 0, 100);

  return { energy, focus, discipline, knowledge, health };
}

function buildWeeklyExpRows(dailyMap, todayKey) {
  const recentKeys = getRecentDateKeys(WEEKLY_EXP_DAYS, todayKey);
  const rows = [];
  for (let weekIndex = 0; weekIndex < 8; weekIndex += 1) {
    const slice = recentKeys.slice(weekIndex * 7, weekIndex * 7 + 7);
    const exp = slice.reduce((sum, dateKey) => sum + (dailyMap[dateKey]?.xpEarned || 0), 0);
    rows.push({
      week: `W${weekIndex + 1}`,
      label: formatShortDate(slice[0]),
      exp,
    });
  }
  return rows;
}

function getSpentGold(ownedItems) {
  return ownedItems.reduce((sum, itemId) => sum + (ITEM_BY_ID[itemId]?.cost || 0), 0);
}

export function buildDerivedState(saveState, todayKey = getTodayKey()) {
  const normalized = normalizeSave(saveState, todayKey);
  const recordKeys = Object.keys(normalized.recordsByDate).sort();
  const startKey = recordKeys[0] || addDays(todayKey, -(RECENT_EDIT_DAYS - 1));
  const endKey = recordKeys[recordKeys.length - 1] > todayKey ? recordKeys[recordKeys.length - 1] : todayKey;
  const timelineKeys = getRangeDateKeys(startKey, endKey);

  let previousDay = null;
  let currentBedtimeStreak = 0;
  let totalXp = 0;
  let totalGoldEarned = 0;
  const dailyMap = {};

  for (const dateKey of timelineKeys) {
    const record = normalizeRecord(normalized.recordsByDate[dateKey]);
    const quests = getQuestCompletions(record);
    currentBedtimeStreak = quests.bedtime ? currentBedtimeStreak + 1 : 0;
    const completionCount = Object.values(quests).filter(Boolean).length - (quests.sleepMinutes ? 1 : 0);
    const taskCount = 7;
    const perfectDay = completionCount === taskCount;
    const efficiencyScore = computeEfficiencyScore(previousDay);
    const efficiencyMultiplier = 0.8 + efficiencyScore / 500;

    const baseQuestXp = QUEST_DEFS.reduce((sum, quest) => sum + (quests[quest.id] ? quest.xp : 0), 0);
    const streakBonusXp = quests.bedtime ? 10 * Math.min(currentBedtimeStreak, 7) : 0;
    const perfectDayXp = perfectDay ? 80 : 0;
    const questXpTotal = baseQuestXp + streakBonusXp + perfectDayXp;
    const xpEarned = Math.round(questXpTotal * efficiencyMultiplier);

    const goldEarned =
      QUEST_DEFS.reduce((sum, quest) => sum + (quests[quest.id] ? quest.gold : 0), 0) + (perfectDay ? 30 : 0);

    totalXp += xpEarned;
    totalGoldEarned += goldEarned;

    const day = {
      dateKey,
      record,
      sleepMinutes: quests.sleepMinutes,
      quests,
      completionCount,
      completionRate: (completionCount / taskCount) * 100,
      perfectDay,
      efficiencyScore,
      efficiencyMultiplier,
      bedtimeStreak: currentBedtimeStreak,
      streakBonusXp,
      xpEarned,
      goldEarned,
      totalXp,
      totalGoldEarned,
    };
    day.focusScore = getDailyFocusScore(day);
    dailyMap[dateKey] = day;
    previousDay = day;
  }

  const today = dailyMap[todayKey] || {
    dateKey: todayKey,
    record: makeEmptyRecord(),
    sleepMinutes: 0,
    quests: getQuestCompletions(makeEmptyRecord()),
    completionCount: 0,
    completionRate: 0,
    perfectDay: false,
    efficiencyScore: 100,
    efficiencyMultiplier: 1,
    bedtimeStreak: 0,
    streakBonusXp: 0,
    xpEarned: 0,
    goldEarned: 0,
    totalXp,
    totalGoldEarned,
    focusScore: 10,
  };

  const recent14Days = getRecentDateKeys(ATTRIBUTE_WINDOW_DAYS, todayKey).map((dateKey) => dailyMap[dateKey] || {
    dateKey,
    quests: getQuestCompletions(makeEmptyRecord()),
    completionRate: 0,
    efficiencyScore: 100,
  });
  const recent7Days = getRecentDateKeys(RECENT_EDIT_DAYS, todayKey).map((dateKey) => dailyMap[dateKey] || {
    dateKey,
    quests: getQuestCompletions(makeEmptyRecord()),
    completionRate: 0,
    efficiencyScore: 100,
  });
  const attributes = computeAttributeBundle(recent14Days, today.bedtimeStreak);
  const statusBars = computeAttributeBundle(recent7Days, today.bedtimeStreak);
  const levelInfo = getLevelInfo(totalXp);
  const spentGold = getSpentGold(normalized.ownedItems);
  const currentGold = Math.round(totalGoldEarned + normalized.wallet.bonusGold - spentGold);

  return {
    ...normalized,
    dailyMap,
    totalXp,
    totalGoldEarned,
    spentGold,
    currentGold,
    levelInfo,
    currentTitle: getLevelTitle(levelInfo.level),
    attributes,
    statusBars: {
      energy: statusBars.energy,
      focus: statusBars.focus,
      efficiency: average(recent7Days.map((day) => day.efficiencyScore)),
    },
    today,
    recentDateKeys: getRecentDateKeys(RECENT_EDIT_DAYS, todayKey),
    hudStats: {
      totalPerfectDays: timelineKeys.filter((dateKey) => dailyMap[dateKey]?.perfectDay).length,
      currentBedtimeStreak: today.bedtimeStreak,
      totalQuestDays: timelineKeys.length,
    },
    charts: {
      sleepRows: getRecentDateKeys(RECENT_EDIT_DAYS, todayKey).map((dateKey) => ({
        dateKey,
        label: formatShortDate(dateKey),
        sleepHours: Number(((dailyMap[dateKey]?.sleepMinutes || 0) / 60).toFixed(1)),
      })),
      efficiencyRows: getRecentDateKeys(RECENT_EDIT_DAYS, todayKey).map((dateKey) => ({
        dateKey,
        label: formatShortDate(dateKey),
        efficiency: Math.round(dailyMap[dateKey]?.efficiencyScore || 100),
      })),
      completionRows: getRecentDateKeys(RECENT_EDIT_DAYS, todayKey).map((dateKey) => ({
        dateKey,
        label: formatShortDate(dateKey),
        completionRate: Math.round(dailyMap[dateKey]?.completionRate || 0),
      })),
      radarRows: [
        { subject: "Energy", value: Math.round(attributes.energy) },
        { subject: "Focus", value: Math.round(attributes.focus) },
        { subject: "Discipline", value: Math.round(attributes.discipline) },
        { subject: "Knowledge", value: Math.round(attributes.knowledge) },
        { subject: "Health", value: Math.round(attributes.health) },
      ],
      scatterRows: getRecentDateKeys(SCATTER_WINDOW_DAYS, todayKey)
        .map((dateKey) => dailyMap[dateKey])
        .filter(Boolean)
        .map((day) => ({
          dateKey: day.dateKey,
          label: formatShortDate(day.dateKey),
          sleepHours: Number((day.sleepMinutes / 60).toFixed(1)),
          focusScore: Math.round(day.focusScore),
        })),
      weeklyExpRows: buildWeeklyExpRows(dailyMap, todayKey),
      streakRows: getRecentDateKeys(STREAK_WINDOW_DAYS, todayKey).map((dateKey) => ({
        dateKey,
        label: formatShortDate(dateKey),
        streak: dailyMap[dateKey]?.bedtimeStreak || 0,
      })),
    },
  };
}

export function getItemById(itemId) {
  return ITEM_BY_ID[itemId] || null;
}

export function getEquippedItems(derivedState) {
  return {
    skin: getItemById(derivedState.equipped.skin),
    title: getItemById(derivedState.equipped.title),
    badge: getItemById(derivedState.equipped.badge),
  };
}

export function saveToStorage(state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadFromStorage(todayKey = getTodayKey()) {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState(todayKey);
    return normalizeSave(JSON.parse(raw), todayKey);
  } catch {
    return createInitialState(todayKey);
  }
}

export function getQuestDefinitions() {
  return QUEST_DEFS.map((quest) => ({ ...quest }));
}

export function getShopItems() {
  return SHOP_ITEMS.map((item) => ({ ...item }));
}

export function getRecordRewardDelta(previousState, nextState) {
  return {
    xp: nextState.totalXp - previousState.totalXp,
    gold: nextState.totalGoldEarned - previousState.totalGoldEarned,
  };
}

export function getSkinAccent(itemId) {
  return ITEM_BY_ID[itemId]?.accent || "#6ea8ff";
}

export function getSkinSymbol(itemId) {
  return ITEM_BY_ID[itemId]?.symbol || "ADV";
}

export function getDateOffsetFromToday(dateKey, todayKey = getTodayKey()) {
  const diff = fromDateKey(todayKey).getTime() - fromDateKey(dateKey).getTime();
  return Math.round(diff / DAY_MS);
}
