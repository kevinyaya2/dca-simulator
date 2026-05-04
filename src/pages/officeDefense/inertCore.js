import { towerDefenseToyTheme } from "../../theme/towerDefenseToyTheme";

export const GRID_ROWS = 8;
export const GRID_COLS = 12;

export const PATH = [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [2, 3],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [5, 5],
  [5, 6],
  [5, 7],
  [4, 7],
  [3, 7],
  [3, 8],
  [3, 9],
  [4, 9],
  [5, 9],
  [5, 10],
  [5, 11],
];

export const enemyConfigs = {
  kpi: { id: "kpi", name: "KPI怪", hp: 24, speed: 0.95, reward: 12, icon: "kpiMonster", colorToken: "sunYellow", fxPreset: "spawnBounce" },
  overtime: { id: "overtime", name: "加班怪", hp: 35, speed: 0.72, reward: 16, icon: "overtimeMonster", colorToken: "tomatoRed", fxPreset: "spawnBounce" },
  urgent: { id: "urgent", name: "臨時需求怪", hp: 18, speed: 1.25, reward: 10, icon: "urgentMonster", colorToken: "skyBlue", fxPreset: "spawnBounce" },
};

export const towerConfigs = {
  coffee: {
    id: "coffee",
    name: "提神救命咖啡",
    cost: 45,
    damage: 9,
    range: 2.2,
    cooldown: 0.65,
    icon: "coffeeTower",
    colorToken: "mintGreen",
    fxPreset: "hitPop",
  },
  meeting: {
    id: "meeting",
    name: "無限迴圈會議",
    cost: 65,
    damage: 13,
    range: 2.9,
    cooldown: 1.05,
    icon: "meetingTower",
    colorToken: "tomatoRed",
    fxPreset: "hitPop",
  },
  report: {
    id: "report",
    name: "地獄報表地獄",
    cost: 80,
    damage: 22,
    range: 2.4,
    cooldown: 1.35,
    icon: "reportTower",
    colorToken: "sunYellow",
    fxPreset: "hitPop",
  },
  copier: {
    id: "copier",
    name: "影印機卡紙王",
    cost: 55,
    damage: 7,
    range: 2.6,
    cooldown: 0.45,
    icon: "copierTower",
    colorToken: "mintGreen",
    fxPreset: "hitPop",
    attackType: "single",
  },
  slide: {
    id: "slide",
    name: "PPT神之嘴砲",
    cost: 95,
    damage: 10,
    range: 3.1,
    cooldown: 1.05,
    icon: "slideTower",
    colorToken: "sunYellow",
    fxPreset: "hitPop",
    attackType: "pierce",
    pierceCount: 3,
  },
  legal: {
    id: "legal",
    name: "這個不太OK喔",
    cost: 85,
    damage: 5,
    range: 2.8,
    cooldown: 0.9,
    icon: "legalTower",
    colorToken: "skyBlue",
    fxPreset: "hitPop",
    attackType: "slow",
    slowMultiplier: 0.6,
    slowDuration: 1.4,
  },
  intern: {
    id: "intern",
    name: "免費工具人",
    cost: 50,
    damage: 4,
    range: 2.5,
    cooldown: 0.32,
    icon: "internTower",
    colorToken: "skyBlue",
    fxPreset: "hitPop",
    attackType: "single",
  },
  overtimeGuard: {
    id: "overtimeGuard",
    name: "臨時突擊稽查",
    cost: 110,
    damage: 12,
    range: 2.4,
    cooldown: 1.2,
    icon: "laborTower",
    colorToken: "tomatoRed",
    fxPreset: "hitPop",
    attackType: "splash",
    splashRadius: 1.3,
  },
  budget: {
    id: "budget",
    name: "預算無極限",
    cost: 125,
    damage: 7,
    range: 3.3,
    cooldown: 1.25,
    icon: "budgetTower",
    colorToken: "sunYellow",
    fxPreset: "hitPop",
    attackType: "execute",
    executeThreshold: 0.22,
  },
};

export const waveConfigs = [
  { id: 1, spawns: ["kpi", "kpi", "urgent", "kpi", "overtime"], interval: 1.0 },
  { id: 2, spawns: ["urgent", "kpi", "urgent", "overtime", "kpi", "overtime"], interval: 0.95 },
  { id: 3, spawns: ["overtime", "kpi", "urgent", "overtime", "urgent", "kpi", "overtime"], interval: 0.88 },
  { id: 4, spawns: ["urgent", "urgent", "overtime", "kpi", "overtime", "urgent", "overtime"], interval: 0.82 },
  { id: 5, spawns: ["overtime", "urgent", "overtime", "kpi", "overtime", "urgent", "overtime", "urgent"], interval: 0.76 },
];

export const DIFFICULTY_CONFIG = {
  hpPerCycle: 0.16,
  speedPerCycle: 0.04,
  intervalPerCycle: 0.04,
  minInterval: 0.38,
  checkpointEvery: 10,
  preWaveCountdownSec: 3,
  sellRatio: 0.65,
  upgradeCostFactor: 0.7,
  upgradeDamageFactor: 1.35,
  upgradeRangeBonus: 0.25,
  upgradeCooldownFactor: 0.9,
};

export const pathSet = new Set(PATH.map(([r, c]) => `${r}-${c}`));

export function makeInitialState() {
  return {
    gold: 140,
    baseHp: 20,
    towers: [],
    enemies: [],
    fxBursts: [],
    waveIndex: 0,
    waveNumber: 1,
    spawnedInWave: 0,
    spawnTimer: 0,
    waveInProgress: true,
    gameStatus: "running",
    banner: "Wave 1 開始",
    checkpointWave: 0,
  };
}

export function getColorToken(token) {
  return towerDefenseToyTheme.colors[token] || towerDefenseToyTheme.colors.skyBlue;
}

export function getCellDistance(a, b) {
  return Math.hypot(a.row - b.row, a.col - b.col);
}
