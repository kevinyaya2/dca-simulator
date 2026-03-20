import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CrossyRoad.css";

// ══════════════════════════════════════════════════════════════════════════
// 常數
// ══════════════════════════════════════════════════════════════════════════
const CANVAS_W = 420;
const CANVAS_H = 560;
const TILE = 42; // 一格大小
const COLS = Math.floor(CANVAS_W / TILE); // 10
const VISIBLE_ROWS = Math.ceil(CANVAS_H / TILE) + 2; // 可見列數+緩衝

// 地形類型
const TERRAIN = { GRASS: 0, ROAD: 1, RIVER: 2, RAIL: 3 };

// 難度曲線
const BASE_VEHICLE_SPEED = 1.2;
const BASE_LOG_SPEED = 0.8;
const SPEED_INC = 0.003; // 每前進一格的速度增幅

// 後方壓力：靜止幾秒後畫面開始推進
const IDLE_PUSH_DELAY = 4000; // ms
const PUSH_SPEED = 0.4; // 像素/幀

// 收集物
const COLLECTIBLES = [
  { emoji: "💰", name: "金幣", points: 10 },
  { emoji: "🍗", name: "雞排", points: 25 },
  { emoji: "🧋", name: "珍奶", points: 50 },
  { emoji: "🍔", name: "漢堡", points: 15 },
  { emoji: "🍕", name: "披薩", points: 20 },
  { emoji: "🍟", name: "薯條", points: 15 },
  { emoji: "🍩", name: "甜甜圈", points: 20 },
  { emoji: "🍱", name: "便當", points: 30 },
  { emoji: "🍦", name: "冰淇淋", points: 25 },
  { emoji: "🍤", name: "炸蝦", points: 35 },
];

// 車輛
const VEHICLES = [
  { emoji: "🚗", w: 1.4, speed: 1.0, name: "轎車", color: "#cc3333" },
  { emoji: "🛵", w: 1.0, speed: 1.3, name: "機車", color: "#22aa55" },
  { emoji: "🚕", w: 1.4, speed: 1.1, name: "計程車", color: "#e8c000" },
  { emoji: "🚓", w: 1.5, speed: 1.6, name: "警車", color: "#2255cc" },
  { emoji: "🚌", w: 2.0, speed: 0.8, name: "公車", color: "#dd6600" },
  { emoji: "🐓", w: 1.0, speed: 1.4, name: "公雞", color: "#e87c1e" },
  { emoji: "🐄", w: 1.5, speed: 0.9, name: "牛", color: "#885533" },
  { emoji: "🐘", w: 2.2, speed: 0.7, name: "大象", color: "#7a7a8a" },
];

// Game Over 梗語錄
const GAMEOVER_MSGS = [
  "🐕 可惡…我只是想平凡地走一段路而已啊！",
  "🚗 等等！這種速度是認真的嗎！？",
  "💦 不妙…這是陷阱！？我閃不掉！",
  "👔 又來了嗎…這種壓力，我不會輸的！",
  "📱 什麼！？剛剛那個速度…根本看不清！",
  "🛵 嘖…動作太快了，我跟不上節奏…",
  "🌊 沒有立足點…難道我要在這裡倒下嗎！？",
  "🚕 機會只有一瞬間…我卻沒抓住…",
  "🐓 判斷失誤…我太大意了…",
  "🐄 一瞬間的遲疑…就是致命傷…",
  "🐘 力量的差距…還是太大了嗎…",
  "🐾 還沒結束…下次，我一定會走得更遠！",
];

// ══════════════════════════════════════════════════════════════════════════
// 音效系統
// ══════════════════════════════════════════════════════════════════════════
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) {
    try {
      _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch {
      _audioCtx = null;
    }
  }
  if (_audioCtx?.state === "suspended") _audioCtx.resume();
  return _audioCtx;
}

function playHop() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g);
  g.connect(ctx.destination);
  o.type = "sine";
  o.frequency.setValueAtTime(440, t);
  o.frequency.exponentialRampToValueAtTime(660, t + 0.08);
  g.gain.setValueAtTime(0.25, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  o.start(t);
  o.stop(t + 0.1);
}

function playCollect() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  [880, 1320].forEach((freq, i) => {
    const t = ctx.currentTime + i * 0.08;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    o.type = "sine";
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.3, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    o.start(t);
    o.stop(t + 0.15);
  });
}

function playDeath() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g);
  g.connect(ctx.destination);
  o.type = "sawtooth";
  o.frequency.setValueAtTime(300, t);
  o.frequency.exponentialRampToValueAtTime(60, t + 0.5);
  g.gain.setValueAtTime(0.4, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
  o.start(t);
  o.stop(t + 0.55);
}

function playSplash() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  const bufSize = Math.floor(ctx.sampleRate * 0.3);
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filt = ctx.createBiquadFilter();
  filt.type = "lowpass";
  filt.frequency.setValueAtTime(800, t);
  filt.frequency.exponentialRampToValueAtTime(100, t + 0.3);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.4, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
  src.connect(filt);
  filt.connect(g);
  g.connect(ctx.destination);
  src.start(t);
  src.stop(t + 0.3);
}

// ══════════════════════════════════════════════════════════════════════════
// 地圖生成
// ══════════════════════════════════════════════════════════════════════════
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRow(rowIndex, difficulty) {
  // 前幾列強制草地
  if (rowIndex <= 2) return makeGrassRow(rowIndex);
  // 隨機地形，隨難度變更概率
  const r = Math.random();
  const roadChance = Math.min(0.45 + difficulty * 0.003, 0.55);
  const riverChance = roadChance + Math.min(0.2 + difficulty * 0.002, 0.3);
  if (r < roadChance) return makeRoadRow(rowIndex, difficulty);
  if (r < riverChance) return makeRiverRow(rowIndex, difficulty);
  return makeGrassRow(rowIndex);
}

function makeGrassRow(rowIndex) {
  // 草地上放樹和收集物
  const obstacles = [];
  const collectibles = [];
  for (let c = 0; c < COLS; c++) {
    if (Math.random() < 0.15) {
      obstacles.push({ col: c, emoji: pick(["🌳", "🌲", "🪨"]) });
    } else if (Math.random() < 0.06) {
      collectibles.push({ col: c, type: pick(COLLECTIBLES) });
    }
  }
  return {
    type: TERRAIN.GRASS,
    rowIndex,
    obstacles,
    collectibles,
    vehicles: [],
    logs: [],
    dir: 0,
    speed: 0,
  };
}

function makeRoadRow(rowIndex, difficulty) {
  const dir = Math.random() < 0.5 ? -1 : 1;
  const vType = pick(VEHICLES);
  const speedMult = BASE_VEHICLE_SPEED + difficulty * SPEED_INC;
  const speed = vType.speed * speedMult * dir;
  const vehicles = [];
  // 隨機放幾台車（初始位置分散）
  const count = randInt(1, 3);
  const spacing = COLS / count;
  for (let i = 0; i < count; i++) {
    vehicles.push({
      x: (i * spacing + Math.random() * spacing * 0.8) * TILE,
      w: vType.w * TILE,
      emoji: vType.emoji,
      color: vType.color,
      speed,
    });
  }
  const collectibles = [];
  if (Math.random() < 0.08) {
    collectibles.push({ col: randInt(1, COLS - 2), type: pick(COLLECTIBLES) });
  }
  return {
    type: TERRAIN.ROAD,
    rowIndex,
    obstacles: [],
    collectibles,
    vehicles,
    logs: [],
    dir,
    speed,
  };
}

function makeRiverRow(rowIndex, difficulty) {
  const dir = Math.random() < 0.5 ? -1 : 1;
  const speedMult = BASE_LOG_SPEED + difficulty * SPEED_INC * 0.5;
  const speed = speedMult * dir;
  const logs = [];
  const count = randInt(2, 4);
  const spacing = COLS / count;
  for (let i = 0; i < count; i++) {
    const logW = randInt(2, 4) * TILE;
    logs.push({
      x: (i * spacing + Math.random() * spacing * 0.4) * TILE,
      w: logW,
      speed,
    });
  }
  const collectibles = [];
  if (Math.random() < 0.1) {
    // 收集物在木頭上
    const log = pick(logs);
    collectibles.push({
      col: Math.floor(log.x / TILE) + 1,
      type: pick(COLLECTIBLES),
      onLog: true,
    });
  }
  return {
    type: TERRAIN.RIVER,
    rowIndex,
    obstacles: [],
    collectibles,
    vehicles: [],
    logs,
    dir,
    speed,
  };
}

// ══════════════════════════════════════════════════════════════════════════
// 繪圖
// ══════════════════════════════════════════════════════════════════════════
const COLORS = {
  grass1: "#7ec850",
  grass2: "#6db840",
  road1: "#555566",
  road2: "#4a4a5a",
  roadLine: "rgba(255,255,200,0.3)",
  river1: "#3d9ee0",
  river2: "#3590d0",
  log: "#8B5E3C",
  logLight: "#A0724A",
  sidebar: "#444",
};

function drawRow(ctx, row, offsetY) {
  const y = offsetY;
  const h = TILE;

  // 背景
  switch (row.type) {
    case TERRAIN.GRASS: {
      ctx.fillStyle = row.rowIndex % 2 === 0 ? COLORS.grass1 : COLORS.grass2;
      ctx.fillRect(0, y, CANVAS_W, h);
      // 小草紋理
      ctx.fillStyle = "rgba(0,80,0,0.08)";
      for (let i = 0; i < COLS * 2; i++) {
        const gx = (i * 21 + row.rowIndex * 7) % CANVAS_W;
        ctx.fillRect(gx, y + h - 6, 2, 6);
      }
      break;
    }
    case TERRAIN.ROAD: {
      ctx.fillStyle = row.rowIndex % 2 === 0 ? COLORS.road1 : COLORS.road2;
      ctx.fillRect(0, y, CANVAS_W, h);
      // 路面虛線
      ctx.fillStyle = COLORS.roadLine;
      for (let i = 0; i < COLS; i++) {
        ctx.fillRect(i * TILE + 8, y + h / 2 - 1, TILE - 16, 2);
      }
      // 道路邊線
      ctx.fillStyle = "rgba(255,255,200,0.15)";
      ctx.fillRect(0, y, CANVAS_W, 2);
      ctx.fillRect(0, y + h - 2, CANVAS_W, 2);
      break;
    }
    case TERRAIN.RIVER: {
      ctx.fillStyle = row.rowIndex % 2 === 0 ? COLORS.river1 : COLORS.river2;
      ctx.fillRect(0, y, CANVAS_W, h);
      // 波浪紋理
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      const waveOff = (Date.now() * 0.002 + row.rowIndex * 30) % (TILE * 2);
      ctx.beginPath();
      for (let x = -TILE; x < CANVAS_W + TILE; x += 4) {
        const wy = y + h / 2 + Math.sin((x + waveOff) * 0.08) * 3;
        x === -TILE ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
      }
      ctx.stroke();
      break;
    }
  }

  // 木頭
  for (const log of row.logs) {
    const lx =
      (((log.x % (CANVAS_W + log.w * 2)) + CANVAS_W + log.w) %
        (CANVAS_W + log.w * 2)) -
      log.w;
    drawLog(ctx, lx, y + 4, log.w, h - 8);
  }

  // 車輛
  for (const v of row.vehicles) {
    const vx =
      (((v.x % (CANVAS_W + v.w * 2)) + CANVAS_W + v.w) % (CANVAS_W + v.w * 2)) -
      v.w;
    drawVehicle(ctx, v.emoji, vx, y, v.w, h, v.speed > 0, v.color);
  }

  // 樹/石頭障礙
  for (const obs of row.obstacles) {
    const ox = obs.col * TILE + TILE / 2;
    const oy = y + h / 2;
    // 底色圓圈讓障礙物更明顯
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.beginPath();
    ctx.arc(ox, oy + 2, TILE * 0.42, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#000"; // reset before emoji
    ctx.globalAlpha = 1;
    ctx.font = `${TILE - 4}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(obs.emoji, ox, oy);
  }

  // 收集物
  for (const c of row.collectibles) {
    if (c.collected) continue;
    ctx.fillStyle = "#000"; // reset before emoji
    ctx.globalAlpha = 1;
    ctx.font = `${TILE - 12}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const bounce = Math.sin(Date.now() * 0.005 + c.col) * 3;
    ctx.fillText(c.type.emoji, c.col * TILE + TILE / 2, y + h / 2 + bounce);
  }
}

function drawLog(ctx, x, y, w, h) {
  // 木頭主體
  ctx.fillStyle = COLORS.log;
  const r = h / 2;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fill();
  // 高光
  ctx.fillStyle = COLORS.logLight;
  ctx.beginPath();
  ctx.roundRect(x + 3, y + 2, w - 6, h * 0.4, r);
  ctx.fill();
  // 木紋
  ctx.strokeStyle = "rgba(0,0,0,0.15)";
  ctx.lineWidth = 1;
  for (let i = 1; i < Math.floor(w / 20); i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * 20, y + 4);
    ctx.lineTo(x + i * 20, y + h - 4);
    ctx.stroke();
  }
}

function drawVehicle(ctx, emoji, x, y, w, h, flipX, bgColor) {
  ctx.save();
  if (flipX) {
    ctx.translate(x + w / 2, y + h / 2);
    ctx.scale(-1, 1);
    ctx.translate(-w / 2, -h / 2);
  } else {
    ctx.translate(x, y);
  }
  // 實心車身背景
  ctx.fillStyle = bgColor || "#cc3333";
  ctx.beginPath();
  ctx.roundRect(1, 4, w - 2, h - 8, 7);
  ctx.fill();
  // 頂面高光
  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.beginPath();
  ctx.roundRect(3, 6, w - 6, Math.round((h - 16) * 0.45), 5);
  ctx.fill();
  // border
  ctx.strokeStyle = "rgba(0,0,0,0.35)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(1, 4, w - 2, h - 8, 7);
  ctx.stroke();
  // emoji
  ctx.font = `${h - 8}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000"; // reset alpha so emoji renders fully opaque
  ctx.globalAlpha = 1;
  ctx.fillText(emoji, w / 2, h / 2);
  ctx.restore();
}

// Minecraft 像素風格柴犬
const SHIBA_MAP = (() => {
  const O = "#e8943a"; // 橙色主體
  const C = "#fff0c8"; // 奶白口鼻
  const N = "#111111"; // 黑色眼鼻
  const E = "#c06010"; // 深橙耳朵
  const _ = null;
  return [
    [_, E, _, _, _, _, E, _], // 0 耳朵
    [_, E, O, _, _, O, E, _], // 1 頭+耳
    [_, O, O, O, O, O, O, _], // 2 頭頂
    [_, O, N, O, O, N, O, _], // 3 眼睛
    [_, O, C, C, C, C, O, _], // 4 口鼻上
    [_, O, C, N, N, C, O, _], // 5 鼻孔
    [O, O, O, O, O, O, O, O], // 6 身體寬
    [_, O, O, O, O, O, O, _], // 7 身體下
  ];
})();

function drawShiba(ctx, x, y, size, _facing, hopOffset) {
  const ps = Math.round(size / 8); // 每像素大小
  const totalW = ps * 8;
  const ox = Math.round(x + (size - totalW) / 2);
  const oy = Math.round(y + (hopOffset || 0));

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const color = SHIBA_MAP[row][col];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(ox + col * ps, oy + row * ps, ps, ps);
    }
  }
  // 陰影
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.beginPath();
  ctx.ellipse(
    ox + totalW / 2,
    oy + ps * 8 + 2,
    totalW * 0.36,
    3,
    0,
    0,
    Math.PI * 2,
  );
  ctx.fill();
}

function drawDeadline(ctx, y) {
  // 後方壓力線 — 斬殺線追來
  const gradient = ctx.createLinearGradient(0, y - 40, 0, y);
  gradient.addColorStop(0, "rgba(200, 0, 0, 0)");
  gradient.addColorStop(1, "rgba(200, 0, 0, 0.5)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, y - 40, CANVAS_W, 40);

  ctx.fillStyle = "rgba(255, 50, 50, 0.7)";
  ctx.fillRect(0, y, CANVAS_W, 3);

  ctx.font = "bold 14px sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.textAlign = "center";
  ctx.fillText("👔 斬殺線追上來了！快走！", CANVAS_W / 2, y - 10);
}

// ══════════════════════════════════════════════════════════════════════════
// 主元件
// ══════════════════════════════════════════════════════════════════════════
export default function CrossyRoad() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [displayState, setDisplayState] = useState("ready");
  const [displayScore, setDisplayScore] = useState(0);
  const [displayHighScore, setDisplayHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem("crossy_highscore")) || 0;
    } catch {
      return 0;
    }
  });
  const [displayCombo, setDisplayCombo] = useState(0);
  const [displayMaxRow, setDisplayMaxRow] = useState(0);
  const [displayGameOverMsg, setDisplayGameOverMsg] = useState("");

  // 遊戲核心狀態全用 ref，避免 re-render
  const gs = useRef({
    state: "ready", // ready | playing | gameover
    player: {
      col: Math.floor(COLS / 2),
      row: 0,
      targetCol: Math.floor(COLS / 2),
      targetRow: 0,
    },
    rows: [], // 地圖列
    cameraRow: 0, // 鏡頭追蹤的列
    score: 0,
    highScore: 0,
    maxRow: 0, // 玩家到過的最遠列
    combo: 0,
    comboTimer: 0,
    lastMoveTime: 0,
    pushOffset: 0, // 後方壓力偏移（像素）
    deathReason: "",
    hopAnim: 0, // 跳動動畫 (0~1)
    floatTexts: [], // 浮字提示
    gameOverMsg: "",
  });
  const rafRef = useRef(null);
  const lastFrameRef = useRef(0);

  // 初始化地圖
  const initGame = useCallback(() => {
    const state = gs.current;
    state.state = "playing";
    state.player = {
      col: Math.floor(COLS / 2),
      row: 0,
      targetCol: Math.floor(COLS / 2),
      targetRow: 0,
      pixelX: Math.floor(COLS / 2) * TILE,
    };
    state.rows = [];
    state.cameraRow = 0;
    state.score = 0;
    state.maxRow = 0;
    state.combo = 0;
    state.comboTimer = 0;
    state.lastMoveTime = Date.now();
    state.pushOffset = 0;
    state.hopAnim = 0;
    state.floatTexts = [];
    state.deathReason = "";
    state.gameOverMsg = "";

    // 預生成地圖
    for (let i = -2; i < VISIBLE_ROWS + 10; i++) {
      state.rows.push(generateRow(i, 0));
    }

    state.highScore = displayHighScore;
    setDisplayState("playing");
    setDisplayScore(0);
    setDisplayCombo(0);
    setDisplayMaxRow(0);
    setDisplayGameOverMsg("");
  }, [displayHighScore]);

  // 結束遊戲
  const endGame = useCallback((reason) => {
    const state = gs.current;
    if (state.state !== "playing") return;
    state.state = "gameover";
    state.deathReason = reason;
    state.gameOverMsg = pick(GAMEOVER_MSGS);

    if (reason === "water") playSplash();
    else playDeath();

    // 更新最高分
    if (state.score > state.highScore) {
      state.highScore = state.score;
      try {
        localStorage.setItem("crossy_highscore", String(state.score));
      } catch {
        /* ignore */
      }
      setDisplayHighScore(state.score);
    }
    setDisplayMaxRow(state.maxRow);
    setDisplayGameOverMsg(state.gameOverMsg);
    setDisplayState("gameover");
  }, []);

  // 輔助函式
  const addFloatText = useCallback((state, text, col, row, color) => {
    state.floatTexts.push({
      text,
      col,
      row,
      life: 70,
      maxLife: 70,
      color: color || "#fff",
    });
  }, []);

  const getRowData = useCallback((state, rowIndex) => {
    return state.rows.find((r) => r.rowIndex === rowIndex);
  }, []);

  // 更新邏輯
  const update = useCallback(
    (state, dt) => {
      const now = Date.now();

      // 更新跳動動畫
      if (state.hopAnim > 0) {
        state.hopAnim = Math.max(0, state.hopAnim - dt * 8);
      }

      // combo timer
      if (state.comboTimer > 0) {
        state.comboTimer--;
        if (state.comboTimer <= 0) {
          state.combo = 0;
          setDisplayCombo(0);
        }
      }

      // 浮字
      state.floatTexts = state.floatTexts.filter((ft) => {
        ft.life--;
        return ft.life > 0;
      });

      // 鏡頭追蹤
      const targetCam = state.player.row;
      state.cameraRow += (targetCam - state.cameraRow) * 0.1;

      // 移動車輛
      for (const row of state.rows) {
        for (const v of row.vehicles) {
          v.x += v.speed * dt * 60;
          const totalW = CANVAS_W + v.w * 2;
          if (v.speed > 0 && v.x > CANVAS_W + v.w) v.x -= totalW;
          if (v.speed < 0 && v.x < -v.w * 2) v.x += totalW;
        }
        for (const log of row.logs) {
          log.x += log.speed * dt * 60;
          const totalW = CANVAS_W + log.w * 2;
          if (log.speed > 0 && log.x > CANVAS_W + log.w) log.x -= totalW;
          if (log.speed < 0 && log.x < -log.w * 2) log.x += totalW;
        }
      }

      // 後方壓力
      const idleTime = now - state.lastMoveTime;
      if (idleTime > IDLE_PUSH_DELAY) {
        state.pushOffset += PUSH_SPEED;
        const deadlineRow =
          state.cameraRow - (CANVAS_H / TILE) * 0.5 + state.pushOffset / TILE;
        if (state.player.row <= deadlineRow + 0.5) {
          endGame("pushed");
        }
      } else {
        state.pushOffset = Math.max(0, state.pushOffset - 0.5);
      }

      // 碰撞檢測
      const playerRow = getRowData(state, state.player.row);
      if (playerRow) {
        const px = state.player.pixelX ?? state.player.col * TILE;
        const pw = TILE;
        const margin = 6;

        if (playerRow.type === TERRAIN.ROAD) {
          for (const v of playerRow.vehicles) {
            const vx =
              (((v.x % (CANVAS_W + v.w * 2)) + CANVAS_W + v.w) %
                (CANVAS_W + v.w * 2)) -
              v.w;
            if (px + pw - margin > vx && px + margin < vx + v.w) {
              endGame("vehicle");
              return;
            }
          }
        }

        if (playerRow.type === TERRAIN.RIVER) {
          let onLog = false;
          for (const log of playerRow.logs) {
            const lx =
              (((log.x % (CANVAS_W + log.w * 2)) + CANVAS_W + log.w) %
                (CANVAS_W + log.w * 2)) -
              log.w;
            if (px + pw - margin > lx && px + margin < lx + log.w) {
              onLog = true;
              const drift = log.speed * dt * 60;
              state.player.pixelX =
                (state.player.pixelX ?? state.player.col * TILE) + drift;
              if (
                state.player.pixelX < 0 ||
                state.player.pixelX + TILE > CANVAS_W
              ) {
                endGame("water");
                return;
              }
              state.player.col = Math.round(state.player.pixelX / TILE);
              break;
            }
          }
          if (!onLog) {
            endGame("water");
            return;
          }
        }
      }
    },
    [endGame, getRowData],
  );

  // 繪製邏輯
  const draw = useCallback((ctx, state) => {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    const camRowCenter = state.state === "ready" ? 0 : state.cameraRow;
    const visStartRow = Math.floor(camRowCenter - CANVAS_H / TILE / 2) - 2;
    const visEndRow = Math.ceil(camRowCenter + CANVAS_H / TILE / 2) + 2;

    for (const row of state.rows) {
      if (row.rowIndex < visStartRow || row.rowIndex > visEndRow) continue;
      const screenY =
        CANVAS_H - (row.rowIndex - camRowCenter + CANVAS_H / TILE / 2) * TILE;
      drawRow(ctx, row, screenY);
    }

    if (state.state === "playing" || state.state === "gameover") {
      const px = state.player.pixelX ?? state.player.col * TILE;
      const py =
        CANVAS_H -
        (state.player.row - camRowCenter + CANVAS_H / TILE / 2) * TILE;
      const hopY = -Math.sin(state.hopAnim * Math.PI) * 10;
      drawShiba(ctx, px, py, TILE, 0, hopY);
    }

    if (state.state === "playing" && state.pushOffset > 0) {
      const deadlineRow =
        state.cameraRow - (CANVAS_H / TILE) * 0.5 + state.pushOffset / TILE;
      const deadlineY =
        CANVAS_H - (deadlineRow - camRowCenter + CANVAS_H / TILE / 2) * TILE;
      drawDeadline(ctx, deadlineY);
    }

    for (let i = 0; i < state.floatTexts.length; i++) {
      const ft = state.floatTexts[i];
      const t = ft.life / ft.maxLife; // 1→0
      const fx = ft.col * TILE + TILE / 2;
      const rise = (1 - t) * 48;
      const fy =
        CANVAS_H -
        (ft.row - camRowCenter + CANVAS_H / TILE / 2) * TILE -
        rise -
        i * 18;
      // fade in fast, linger, fade out
      const alpha = t > 0.8 ? (1 - t) * 5 : t < 0.25 ? t * 4 : 1;
      const scale = t > 0.7 ? 1 + (1 - t) * 1.5 : 1;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(fx, fy);
      ctx.scale(scale, scale);
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(0,0,0,0.75)";
      ctx.strokeText(ft.text, 0, 0);
      ctx.fillStyle = ft.color || "#fff";
      ctx.fillText(ft.text, 0, 0);
      ctx.restore();
    }

    if (state.state === "ready") {
      ctx.fillStyle = "rgba(20, 20, 40, 0.7)";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      ctx.fillStyle = "#fff";
      ctx.font = "bold 36px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("\uD83D\uDC15 天天過馬路", CANVAS_W / 2, CANVAS_H / 2 - 60);

      ctx.font = "18px sans-serif";
      ctx.fillText("Crossy Shiba", CANVAS_W / 2, CANVAS_H / 2 - 25);

      ctx.font = "14px sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.fillText("按任意方向鍵 或 點擊開始", CANVAS_W / 2, CANVAS_H / 2 + 20);

      ctx.font = "12px sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fillText(
        "↑ / 空白鍵：前進　← →：左右移動",
        CANVAS_W / 2,
        CANVAS_H / 2 + 50,
      );

      drawShiba(
        ctx,
        CANVAS_W / 2 - TILE / 2,
        CANVAS_H / 2 + 70,
        TILE * 1.5,
        0,
        Math.sin(performance.now() * 0.003) * 5,
      );

      if (state.highScore > 0) {
        ctx.font = "bold 14px sans-serif";
        ctx.fillStyle = "rgba(255,220,100,0.9)";
        ctx.fillText(
          `\uD83C\uDFC6 最高分：${state.highScore}`,
          CANVAS_W / 2,
          CANVAS_H / 2 + 140,
        );
      }
    }

    if (state.state === "gameover") {
      // gameover 由 React DOM overlay 負責，canvas 不繪製
    }
  }, []);

  // 玩家移動
  const movePlayer = useCallback(
    (dCol, dRow) => {
      const state = gs.current;
      if (state.state === "ready") {
        initGame();
        return;
      }
      if (state.state === "gameover") {
        initGame();
        return;
      }
      if (state.state !== "playing") return;
      if (state.hopAnim > 0.1) return; // 動畫中不可再跳

      const newCol = state.player.col + dCol;
      const newRow = state.player.row + dRow;

      // 邊界檢查
      if (newCol < 0 || newCol >= COLS) return;

      // 取得目標列的地形
      const targetRowData = getRowData(state, newRow);
      if (!targetRowData) return;

      // 草地障礙物碰撞
      if (targetRowData.type === TERRAIN.GRASS) {
        for (const obs of targetRowData.obstacles) {
          if (obs.col === newCol) return; // 被樹擋住
        }
      }

      // 移動
      state.player.col = newCol;
      state.player.row = newRow;
      state.player.pixelX = newCol * TILE;
      state.hopAnim = 1;
      state.lastMoveTime = Date.now();
      playHop();

      // 計分：向前
      if (newRow > state.maxRow) {
        const diff = newRow - state.maxRow;
        state.maxRow = newRow;
        state.score += diff;

        // combo
        if (dRow > 0) {
          state.combo++;
          state.comboTimer = 60;
          if (state.combo > 1) {
            state.score += Math.floor(state.combo / 3);
            const comboColor =
              state.combo >= 10
                ? "#ff4444"
                : state.combo >= 5
                  ? "#ff8833"
                  : "#ffdd22";
            addFloatText(
              state,
              `🔥 ×${state.combo}`,
              newCol,
              newRow,
              comboColor,
            );
          }
        }

        setDisplayScore(state.score);
        setDisplayCombo(state.combo);

        // 生成新列
        while (
          state.rows[state.rows.length - 1].rowIndex <
          newRow + VISIBLE_ROWS + 5
        ) {
          const nextIdx = state.rows[state.rows.length - 1].rowIndex + 1;
          state.rows.push(generateRow(nextIdx, nextIdx));
        }
        // 清理舊列
        while (
          state.rows.length > 0 &&
          state.rows[0].rowIndex < newRow - VISIBLE_ROWS - 5
        ) {
          state.rows.shift();
        }
      }

      // 收集物
      if (targetRowData.collectibles) {
        for (const c of targetRowData.collectibles) {
          if (!c.collected && c.col === newCol) {
            c.collected = true;
            state.score += c.type.points;
            setDisplayScore(state.score);
            playCollect();
            const ptColor =
              c.type.points >= 40
                ? "#c084fc"
                : c.type.points >= 25
                  ? "#34d399"
                  : "#fbbf24";
            addFloatText(
              state,
              `${c.type.emoji} +${c.type.points}`,
              newCol,
              newRow,
              ptColor,
            );
          }
        }
      }
    },
    [initGame, addFloatText, getRowData],
  );

  // 鍵盤事件
  useEffect(() => {
    const onKey = (e) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          " ",
          "w",
          "a",
          "s",
          "d",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
        case " ":
          movePlayer(0, 1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          movePlayer(0, -1);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          movePlayer(-1, 0);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          movePlayer(1, 0);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [movePlayer]);

  // 遊戲主迴圈
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const loop = (time) => {
      rafRef.current = requestAnimationFrame(loop);
      const dt = Math.min((time - (lastFrameRef.current || time)) / 1000, 0.1);
      lastFrameRef.current = time;

      const state = gs.current;

      if (state.state === "playing") {
        update(state, dt);
      }
      draw(ctx, state);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [endGame, update, draw]);

  // 觸控 / 手勢
  const touchStartRef = useRef(null);
  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY, time: Date.now() };
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      e.preventDefault();
      if (!touchStartRef.current) {
        movePlayer(0, 1);
        return;
      }
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartRef.current.x;
      const dy = t.clientY - touchStartRef.current.y;
      const elapsed = Date.now() - touchStartRef.current.time;
      touchStartRef.current = null;

      const threshold = 25;
      if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
        // 點擊 → 前進
        movePlayer(0, 1);
      } else if (elapsed < 400 && Math.abs(dx) > Math.abs(dy)) {
        // 左右滑動 → 左右移動
        movePlayer(dx > 0 ? 1 : -1, 0);
      } else if (elapsed < 400 && Math.abs(dy) >= Math.abs(dx)) {
        // 上滑 → 前進；下滑 → 倒退
        movePlayer(0, dy < 0 ? 1 : -1);
      }
    },
    [movePlayer],
  );

  const handleCanvasClick = useCallback(() => {
    const state = gs.current;
    if (state.state === "ready" || state.state === "gameover") {
      initGame();
    }
  }, [initGame]);

  return (
    <div className="oneui">
      <div className="crossy-container">
        <div className="crossy-header">
          <button className="backBtn" onClick={() => navigate("/")}>
            ← 返回
          </button>
          <h1>🐕 天天過馬路</h1>
          <p className="subtitle">Crossy Shiba · 閃車 · 過河 · 活下去！</p>
        </div>

        <div className="crossy-score-board">
          <div className="crossy-score-item">
            <span className="crossy-score-label">分數</span>
            <span className="crossy-score-value">{displayScore}</span>
          </div>
          <div className="crossy-score-divider" />
          <div className="crossy-score-item">
            <span className="crossy-score-label">🏆 最高</span>
            <span className="crossy-score-value">{displayHighScore}</span>
          </div>
        </div>
        {displayCombo > 1 && (
          <div
            key={displayCombo}
            className={`crossy-combo ${
              displayCombo >= 10
                ? "combo-inferno"
                : displayCombo >= 5
                  ? "combo-hot"
                  : "combo-warm"
            }`}
          >
            <span className="combo-fire">
              {displayCombo >= 10 ? "🔥🔥" : "🔥"}
            </span>
            <span className="combo-text">COMBO</span>
            <span className="combo-count">×{displayCombo}</span>
            {displayCombo >= 5 && (
              <span className="combo-bonus">
                +{Math.floor(displayCombo / 3)} pts
              </span>
            )}
          </div>
        )}

        <div className="crossy-game-area">
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            onClick={handleCanvasClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

          {/* Game Over 覆蓋層 — JumpGame 風格 */}
          {displayState === "gameover" &&
            (() => {
              const isNew =
                displayScore > 0 && displayScore >= displayHighScore;
              const getEmoji = () => {
                if (displayScore >= 50) return "🏆";
                if (displayScore >= 30) return "⭐";
                if (displayScore >= 15) return "😅";
                if (displayMaxRow >= 5) return "🐾";
                return "💀";
              };
              return (
                <div className="jumpOverlay gameOver">
                  <div className="jumpOverlayContent">
                    <div className="jumpOverlayEmoji bounce">{getEmoji()}</div>
                    <h2>{isNew ? "🎉 新紀錄！" : "Game Over"}</h2>
                    <div className="jumpResultStats">
                      <div className="jumpResultScore">
                        <span className="jumpResultLabel">本次分數</span>
                        <span className="jumpResultValue">
                          {displayScore} 格
                        </span>
                      </div>
                      <div className="jumpResultBest">
                        <span className="jumpResultLabel">通過馬路</span>
                        <span className="jumpResultValue">
                          {displayMaxRow} 條
                        </span>
                      </div>
                      <div className="jumpResultBest">
                        <span className="jumpResultLabel">🏆 最高紀錄</span>
                        <span className="jumpResultValue">
                          {Math.max(displayScore, displayHighScore)} 格
                        </span>
                      </div>
                    </div>
                    <p className="jumpResultMessage">{displayGameOverMsg}</p>
                    <button className="jumpStartBtn" onClick={initGame}>
                      🔄 再來一次
                    </button>
                  </div>
                </div>
              );
            })()}
        </div>

        <div className="crossy-instructions">
          <span>
            <span className="key">↑</span> / <span className="key">W</span> 前進
          </span>
          <span>
            <span className="key">←</span> <span className="key">A</span>{" "}
            <span className="key">D</span> <span className="key">→</span> 左右
          </span>
          <span>📱 點擊前進，左右滑動移動</span>
        </div>
      </div>
    </div>
  );
}
