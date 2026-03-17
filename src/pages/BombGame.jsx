import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ══════════════════════════════════════════════════════════════════════════
// 地圖與格子常數
// ══════════════════════════════════════════════════════════════════════════
const COLS = 15; // 地圖欄數（奇數，便於棋盤牆配置）
const ROWS = 13; // 地圖列數
const TILE = 28; // 每格像素大小
const CANVAS_W = COLS * TILE; // 420
const CANVAS_H = ROWS * TILE; // 364

// 格子類型
const EMPTY = 0;
const WALL = 1; // 不可破壞牆（深灰）
const BLOCK = 2; // 可破壞牆（磚塊）

// 炸彈 / 爆炸時間
const BOMB_DELAY = 3000; // ms，炸彈爆炸延遲
const BLAST_LIFE = 500; // ms，爆炸視覺持續時間
const BLAST_KILL_LIFE = 300; // ms，爆炸傷害判定時間（短於視覺，避免末段誤殺）
const BLAST_RANGE = 3; // 爆炸延伸格數
const ENEMY_COUNT = 8; // 初始敵人數量

// 10 種動物 emoji 池
const ANIMALS = ["🐔", "🐄", "🐷", "🐑", "🐰", "🐻", "🐼", "🐨", "🦊", "🐸"];
const ENEMY_MOVE_MIN = 450; // ms，敵人移動間隔下限
const ENEMY_MOVE_MAX = 870; // ms，敵人移動間隔上限

// 玩家尺寸（在 tile 內置中）
const P_SIZE = TILE - 6;

// ══════════════════════════════════════════════════════════════════════════
// 調色盤
// ══════════════════════════════════════════════════════════════════════════
const COLOR = {
  bg: "#1a1a2e",
  wall: "#0f0f23",
  wallEdge: "#2a2a50",
  block: "#c97c3a",
  blockEdge: "#7a4520",
  blockCrack: "rgba(0,0,0,0.25)",
  empty: "#16213e",
  emptyEdge: "#1e2d4e",
  player: "#ffdd57",
  playerFace: "#e6c200",
  playerEye: "#333",
  playerDead: "#666",
  bomb: "#222",
  bombGlow: "#ff6600",
  bombFuse: "#ff9900",
  blastCenter: "#ff4400",
  blastRay: "#ff8800",
  blastFade: "rgba(255,100,0,0.35)",
  hud: "rgba(255,255,255,0.9)",
};

// ══════════════════════════════════════════════════════════════════════════
// 地圖生成
// ══════════════════════════════════════════════════════════════════════════
/**
 * 建立初始地圖：
 * - 偶 row、偶 col 的交點放不可破壞牆
 * - 邊框設為不可破壞牆
 * - 其餘以一定密度隨機放可破壞牆
 * - 保留玩家出生點 (1,1) 及周圍 2 格安全區
 */
function buildMap() {
  const map = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => {
      // 邊框
      if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) return WALL;
      // 棋盤牆柱
      if (r % 2 === 0 && c % 2 === 0) return WALL;
      return EMPTY;
    }),
  );

  // 隨機放可破壞牆（避開安全區）
  const safe = new Set(["1,1", "2,1", "1,2", "3,1", "1,3"]);
  for (let r = 1; r < ROWS - 1; r++) {
    for (let c = 1; c < COLS - 1; c++) {
      if (map[r][c] === WALL) continue;
      if (safe.has(`${r},${c}`)) continue; // 保護出生區
      if (Math.random() < 0.58) map[r][c] = BLOCK;
    }
  }
  return map;
}

/** 計算地圖中可破壞牆數量 */
function countBlocks(map) {
  let n = 0;
  for (const row of map) for (const t of row) if (t === BLOCK) n++;
  return n;
}

/** 隨機生成敵人，避開玩家出生點周圍 */
function spawnEnemies(map) {
  // 從 10 種動物隨機不重複挑選 ENEMY_COUNT 種
  const shuffled = [...ANIMALS]
    .sort(() => Math.random() - 0.5)
    .slice(0, ENEMY_COUNT);
  const enemies = [];
  const used = new Set(["1,1", "2,1", "1,2", "3,1", "1,3"]);
  for (let i = 0; i < ENEMY_COUNT; i++) {
    let placed = false;
    for (let attempt = 0; attempt < 300 && !placed; attempt++) {
      const r = 1 + Math.floor(Math.random() * (ROWS - 2));
      const c = 1 + Math.floor(Math.random() * (COLS - 2));
      if (
        map[r][c] !== EMPTY ||
        used.has(`${r},${c}`) ||
        Math.abs(r - 1) + Math.abs(c - 1) < 5
      )
        continue;
      used.add(`${r},${c}`);
      enemies.push({
        r,
        c,
        emoji: shuffled[i],
        lastMove: 0,
        moveInterval:
          ENEMY_MOVE_MIN + Math.random() * (ENEMY_MOVE_MAX - ENEMY_MOVE_MIN),
        dead: false,
      });
      placed = true;
    }
  }
  return enemies;
}

// ══════════════════════════════════════════════════════════════════════════
// 初始遊戲狀態（存在 ref，不觸發 re-render）
// ══════════════════════════════════════════════════════════════════════════
function initState() {
  const map = buildMap();
  return {
    map, // ROWS × COLS 格子陣列
    player: {
      r: 1,
      c: 1,
      alive: true,
      shieldCount: 0,
      invincibleUntil: 0,
      blastRange: 2,
    },
    bombs: [], // { r, c, placedAt, ownerCanPass, range }
    blasts: [], // { r, c, startAt, cells: [{r,c}] }
    shields: [], // 地圖上掉落的護盾道具 {r, c}
    fires: [], // 地圖上掉落的火焰範圍道具 {r, c}
    enemies: spawnEnemies(map), // 動物敵人
    bombCount: 0, // 總放炸彈數
    blocksLeft: countBlocks(map),
    blocksDestroyed: 0, // 已炸掉的牆數
    elapsedSec: 0, // 結算用秒數
    gameOver: false,
    won: false,
  };
}

// ══════════════════════════════════════════════════════════════════════════
// 爆炸範圍計算
// ══════════════════════════════════════════════════════════════════════════
/**
 * 依四個方向延伸，碰到 WALL 停止，碰到 BLOCK 停止（含 BLOCK 本身）。
 * 回傳所有爆炸格子的 {r, c} 陣列。
 */
function calcBlastCells(map, br, bc, range = BLAST_RANGE) {
  const cells = [{ r: br, c: bc }]; // 中心
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dr, dc] of dirs) {
    for (let i = 1; i <= range; i++) {
      const nr = br + dr * i;
      const nc = bc + dc * i;
      if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) break;
      if (map[nr][nc] === WALL) break;
      cells.push({ r: nr, c: nc });
      if (map[nr][nc] === BLOCK) break; // 可破壞牆：納入但不穿越
    }
  }
  return cells;
}

// ══════════════════════════════════════════════════════════════════════════
// Canvas 繪圖
// ══════════════════════════════════════════════════════════════════════════
function render(ctx, state, now) {
  const { map, player, bombs, blasts } = state;

  // ── 背景 ──────────────────────────────────────────────────────────────
  ctx.fillStyle = COLOR.bg;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // ── 格子 ──────────────────────────────────────────────────────────────
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * TILE;
      const y = r * TILE;
      const t = map[r][c];

      if (t === WALL) {
        // 不可破壞牆：深色立體感
        ctx.fillStyle = COLOR.wall;
        ctx.fillRect(x, y, TILE, TILE);
        ctx.strokeStyle = COLOR.wallEdge;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
        // 高光邊線
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.beginPath();
        ctx.moveTo(x + 2, y + TILE - 2);
        ctx.lineTo(x + 2, y + 2);
        ctx.lineTo(x + TILE - 2, y + 2);
        ctx.stroke();
      } else if (t === BLOCK) {
        // 可破壞牆：磚塊配色
        ctx.fillStyle = COLOR.block;
        ctx.fillRect(x, y, TILE, TILE);
        ctx.strokeStyle = COLOR.blockEdge;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 1, y + 1, TILE - 2, TILE - 2);
        // 磚塊裂紋紋理
        ctx.strokeStyle = COLOR.blockCrack;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(x + TILE * 0.5, y + 2);
        ctx.lineTo(x + TILE * 0.5, y + TILE - 2);
        ctx.moveTo(x + 2, y + TILE * 0.5);
        ctx.lineTo(x + TILE - 2, y + TILE * 0.5);
        ctx.stroke();
      } else {
        // 空地
        ctx.fillStyle = COLOR.empty;
        ctx.fillRect(x, y, TILE, TILE);
        ctx.strokeStyle = COLOR.emptyEdge;
        ctx.lineWidth = 0.4;
        ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
      }
    }
  }

  // ── 爆炸效果 ──────────────────────────────────────────────────────────
  for (const blast of blasts) {
    const age = now - blast.startAt;
    const life = age / BLAST_LIFE; // 0~1, 1 = 消失
    if (life >= 1) continue;

    for (const cell of blast.cells) {
      const x = cell.c * TILE;
      const y = cell.r * TILE;
      const isCenter = cell.r === blast.r && cell.c === blast.c;

      // 外層光暈（fade out）
      ctx.globalAlpha = (1 - life) * 0.9;
      ctx.fillStyle = isCenter ? COLOR.blastCenter : COLOR.blastRay;
      ctx.fillRect(x + 1, y + 1, TILE - 2, TILE - 2);

      // 內核（pulse）
      if (life < 0.4) {
        ctx.globalAlpha = (1 - life / 0.4) * 0.6;
        ctx.fillStyle = "#ffffff";
        const shrink = life * TILE * 0.5;
        ctx.fillRect(
          x + 3 + shrink,
          y + 3 + shrink,
          TILE - 6 - shrink * 2,
          TILE - 6 - shrink * 2,
        );
      }
      ctx.globalAlpha = 1;
    }
  }

  // ── 炸彈爆炸預警範圍 ──────────────────────────────────────────────────
  for (const bomb of bombs) {
    const age = now - bomb.placedAt;
    const t = age / BOMB_DELAY; // 0~1
    const warnProgress = t; // 0→1（放置起即顯示，越接近爆炸越明顯）
    const pulse = 0.5 + 0.5 * Math.sin(age / 100);
    const blastCells = calcBlastCells(
      state.map,
      bomb.r,
      bomb.c,
      bomb.range ?? BLAST_RANGE,
    );
    for (const cell of blastCells) {
      const wx = cell.c * TILE;
      const wy = cell.r * TILE;
      const isCenter = cell.r === bomb.r && cell.c === bomb.c;
      // 底色：半透明紅橙覆蓋
      ctx.globalAlpha = warnProgress * (0.28 + 0.22 * pulse);
      ctx.fillStyle = isCenter ? "#ff1100" : "#ff6600";
      ctx.fillRect(wx + 1, wy + 1, TILE - 2, TILE - 2);
      // 邊框：明亮警示線
      ctx.globalAlpha = warnProgress * (0.55 + 0.3 * pulse);
      ctx.strokeStyle = isCenter ? "#ff4400" : "#ffaa00";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(wx + 1.5, wy + 1.5, TILE - 3, TILE - 3);
      ctx.globalAlpha = 1;
    }
  }

  // ── 炸彈 ──────────────────────────────────────────────────────────────
  for (const bomb of bombs) {
    const x = bomb.c * TILE;
    const y = bomb.r * TILE;
    const age = now - bomb.placedAt;
    const t = age / BOMB_DELAY; // 0~1
    const pulse = 0.5 + 0.5 * Math.sin(age / 160); // 脈衝 0~1

    const cx = x + TILE / 2;
    const cy = y + TILE / 2;
    const rad = (TILE / 2 - 3) * (0.85 + 0.15 * pulse);
    ctx.shadowColor = COLOR.bombGlow;
    ctx.shadowBlur = 8 + pulse * 10;
    ctx.fillStyle = `rgba(${Math.round(t * 200)}, 0, 0, 1)`;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // 炸彈頂部導火線
    ctx.strokeStyle = COLOR.bombFuse;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + 2, cy - rad);
    ctx.quadraticCurveTo(cx + 10, cy - rad - 8, cx + 6, cy - rad - 14);
    ctx.stroke();

    // 倒數進度環（白色弧線代表剩餘時間）
    const remaining = 1 - t;
    ctx.strokeStyle = `rgba(255,255,255,${0.6 + remaining * 0.4})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(
      cx,
      cy,
      rad + 3,
      -Math.PI / 2,
      -Math.PI / 2 + remaining * Math.PI * 2,
    );
    ctx.stroke();
  }

  // ── 火焰範圍道具（地圖上之掉落物）──────────────────────────────────────
  for (const f of state.fires ?? []) {
    const fx = f.c * TILE + TILE / 2;
    const fy = f.r * TILE + TILE / 2;
    const pulse = 0.5 + 0.5 * Math.sin(now / 280);
    ctx.save();

    // 底板：橙紅放射漸層
    const fgrad = ctx.createRadialGradient(fx, fy - 1, 1, fx, fy, 12);
    fgrad.addColorStop(0, `rgba(255, 220, 60, ${0.95 + 0.05 * pulse})`);
    fgrad.addColorStop(0.5, `rgba(255, 90, 0, ${0.88 + 0.08 * pulse})`);
    fgrad.addColorStop(1, "rgba(200, 0, 0, 0)");
    ctx.fillStyle = fgrad;
    ctx.beginPath();
    ctx.arc(fx, fy, 12, 0, Math.PI * 2);
    ctx.fill();

    // 外發光環（橙色）
    ctx.shadowColor = "#ff6600";
    ctx.shadowBlur = 14 + 8 * pulse;
    ctx.strokeStyle = `rgba(255, 140, 0, ${0.75 + 0.25 * pulse})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(fx, fy, 11 + pulse * 1.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 🔥 emoji
    ctx.globalAlpha = 1;
    ctx.font = `bold ${TILE - 7}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🔥", fx, fy + 1);

    ctx.restore();
  }
  for (const sh of state.shields ?? []) {
    const sx = sh.c * TILE + TILE / 2;
    const sy = sh.r * TILE + TILE / 2;
    const pulse = 0.5 + 0.5 * Math.sin(now / 320);
    ctx.save();

    // 亮眼底板：黃色圓形漸層，強烈對比深色背景
    const grad = ctx.createRadialGradient(sx, sy - 1, 1, sx, sy, 12);
    grad.addColorStop(0, `rgba(255, 240, 60, ${0.92 + 0.08 * pulse})`);
    grad.addColorStop(0.55, `rgba(255, 180, 0, ${0.82 + 0.1 * pulse})`);
    grad.addColorStop(1, `rgba(200, 80, 0, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(sx, sy, 12, 0, Math.PI * 2);
    ctx.fill();

    // 外發光環（青色）
    ctx.shadowColor = "#00f5ff";
    ctx.shadowBlur = 14 + 8 * pulse;
    ctx.strokeStyle = `rgba(0, 245, 255, ${0.7 + 0.3 * pulse})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sx, sy, 11 + pulse * 1.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 🛡 emoji 置中
    ctx.globalAlpha = 1;
    ctx.font = `bold ${TILE - 7}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🛡", sx, sy + 1);

    ctx.restore();
  }

  // ── 玩家（街機小精靈角色）────────────────────────────────────────────
  ctx.save();
  const cx = player.c * TILE + TILE / 2; // tile 水平中心
  const bot = player.r * TILE + TILE - 2; // 角色底部 y

  // 護盾光環（繪於角色底層）
  if (player.shieldCount > 0 && player.alive) {
    const shPulse = 0.5 + 0.5 * Math.sin(now / 230);
    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 3;
    ctx.shadowColor = "#22d3ee";
    ctx.shadowBlur = 12 + 8 * shPulse;
    ctx.globalAlpha = 0.55 + 0.3 * shPulse;
    ctx.beginPath();
    ctx.arc(cx, bot - 11, 15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 0.08 + 0.06 * shPulse;
    ctx.fillStyle = "#22d3ee";
    ctx.beginPath();
    ctx.arc(cx, bot - 11, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }
  // 無敵閃爍
  if (player.invincibleUntil > now) {
    ctx.globalAlpha = Math.sin(now / 55) > 0 ? 1 : 0.22;
  }

  if (player.alive) {
    // 走路動畫：腳依 now 左右搖擺 ±2px
    const swing = Math.sin(now / 130) * 2;

    // 地面陰影
    ctx.globalAlpha =
      player.invincibleUntil > now
        ? Math.sin(now / 55) > 0
          ? 0.22
          : 0.05
        : 0.22;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(cx, bot + 1, 7, 2.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha =
      player.invincibleUntil > now ? (Math.sin(now / 55) > 0 ? 1 : 0.22) : 1;

    // 雙腳（深藍褲管）
    const legH = 5,
      legW = 5;
    const legTop = bot - legH;
    ctx.fillStyle = "#1d4ed8";
    ctx.beginPath();
    ctx.roundRect(cx - 6 - swing, legTop, legW, legH, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(cx + 1 + swing, legTop, legW, legH, 2);
    ctx.fill();
    // 鞋子（深色）
    ctx.fillStyle = "#1e1b4b";
    ctx.beginPath();
    ctx.roundRect(cx - 7 - swing, bot - 3, legW + 2, 4, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(cx + 0 + swing, bot - 3, legW + 2, 4, 2);
    ctx.fill();

    // 身體（白色炸彈服）
    const bodyH = 9,
      bodyW = 14;
    const bodyTop = legTop - bodyH;
    ctx.shadowColor = "rgba(255,255,255,0.35)";
    ctx.shadowBlur = 5;
    ctx.fillStyle = "#e0f2fe";
    ctx.beginPath();
    ctx.roundRect(cx - bodyW / 2, bodyTop, bodyW, bodyH, 3);
    ctx.fill();
    ctx.shadowBlur = 0;
    // 腰帶
    ctx.fillStyle = "#0ea5e9";
    ctx.fillRect(cx - bodyW / 2 + 2, bodyTop + bodyH - 3, bodyW - 4, 3);
    // 胸口 logo 圓點
    ctx.fillStyle = "#ff6b35";
    ctx.beginPath();
    ctx.arc(cx, bodyTop + 3.5, 2, 0, Math.PI * 2);
    ctx.fill();

    // 頭部（膚色）
    const headR = 6,
      headCY = bodyTop - headR + 1;
    ctx.fillStyle = "#fde68a";
    ctx.beginPath();
    ctx.arc(cx, headCY, headR, 0, Math.PI * 2);
    ctx.fill();
    // 頭盔（上半部）
    ctx.fillStyle = "#0284c7";
    ctx.beginPath();
    ctx.arc(cx, headCY, headR, Math.PI, Math.PI * 2);
    ctx.fill();
    // 頭盔中央白條
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.fillRect(cx - 1, headCY - headR, 2, headR);
    // 側邊耳蓋
    ctx.fillStyle = "#0369a1";
    ctx.beginPath();
    ctx.roundRect(cx - headR - 1, headCY - 1, 3, 4, 1);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(cx + headR - 2, headCY - 1, 3, 4, 1);
    ctx.fill();

    // 眼睛（眼白 + 瞳孔）
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx - 2.5, headCY + 1.5, 2, 0, Math.PI * 2);
    ctx.arc(cx + 2.5, headCY + 1.5, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1e1b4b";
    ctx.beginPath();
    ctx.arc(cx - 2, headCY + 2, 1, 0, Math.PI * 2);
    ctx.arc(cx + 3, headCY + 2, 1, 0, Math.PI * 2);
    ctx.fill();

    // 微笑
    ctx.strokeStyle = "rgba(120,60,0,0.7)";
    ctx.lineWidth = 1.2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, headCY + 2.5, 2.8, 0.25, Math.PI - 0.25);
    ctx.stroke();
  } else {
    // 死亡狀態：角色倒地（90° 旋轉），X 眼
    ctx.globalAlpha = 0.7;
    ctx.translate(cx, bot - 11);
    ctx.rotate(Math.PI / 2);
    ctx.translate(-cx, -(bot - 11));

    // 身體（灰）
    ctx.fillStyle = "#555";
    ctx.beginPath();
    ctx.roundRect(cx - 7, bot - 19, 14, 9, 3);
    ctx.fill();
    // 頭
    ctx.fillStyle = "#888";
    ctx.beginPath();
    ctx.arc(cx, bot - 23, 6, 0, Math.PI * 2);
    ctx.fill();
    // X 眼
    ctx.strokeStyle = "#ff4444";
    ctx.lineWidth = 1.8;
    for (const [ex, ey] of [
      [cx - 2.5, bot - 24.5],
      [cx + 2.5, bot - 24.5],
    ]) {
      ctx.beginPath();
      ctx.moveTo(ex - 1.5, ey - 1.5);
      ctx.lineTo(ex + 1.5, ey + 1.5);
      ctx.moveTo(ex + 1.5, ey - 1.5);
      ctx.lineTo(ex - 1.5, ey + 1.5);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  ctx.restore();

  // ── 敵人（動物 emoji）──────────────────────────────────────────
  const enemies = state.enemies ?? [];
  if (enemies.length > 0) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${TILE - 3}px serif`;
    ctx.shadowBlur = 0;
    for (const enemy of enemies) {
      if (enemy.dead) continue;
      ctx.fillText(
        enemy.emoji,
        enemy.c * TILE + TILE / 2,
        enemy.r * TILE + TILE / 2 + 1,
      );
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════
// 主元件
// ══════════════════════════════════════════════════════════════════════════
export default function BombGame() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const stateRef = useRef(initState());
  const rafIdRef = useRef(null);
  const loopFnRef = useRef(null);
  const keysRef = useRef(new Set()); // 目前按住的鍵
  const lastMoveRef = useRef(0); // 控制移動速率
  const vKeysRef = useRef(new Set()); // 虛擬方向鍵（觸控）
  const startTimeRef = useRef(null); // 遊戲開始時間（以 rAF now 初始化）

  // UI state（僅顯示用）
  const [ui, setUi] = useState(() => {
    const init = initState();
    return {
      alive: true,
      gameOver: false,
      won: false,
      bombCount: 0,
      blocksLeft: init.blocksLeft,
      blocksDestroyed: 0,
      enemiesLeft: init.enemies.length,
      elapsedSec: 0,
      shieldCount: 0,
      blastRange: 2,
    };
  });

  const syncUi = useCallback(() => {
    const s = stateRef.current;
    setUi({
      alive: s.player.alive,
      gameOver: s.gameOver,
      won: s.won,
      bombCount: s.bombCount,
      blocksLeft: s.blocksLeft,
      blocksDestroyed: s.blocksDestroyed,
      enemiesLeft: s.enemies.filter((e) => !e.dead).length,
      elapsedSec: s.elapsedSec,
      shieldCount: s.player.shieldCount,
      blastRange: s.player.blastRange,
    });
  }, []);

  // ── 重置 ────────────────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    stateRef.current = initState();
    startTimeRef.current = null; // 下一幀 rAF 重新計時
    syncUi();
  }, [syncUi]);

  // ── 放炸彈 ──────────────────────────────────────────────────────────────
  const placeBomb = useCallback(() => {
    const s = stateRef.current;
    if (!s.player.alive || s.gameOver) return;
    const { r, c } = s.player;
    // 同格已有炸彈則不重複放
    if (s.bombs.some((b) => b.r === r && b.c === c)) return;
    s.bombs.push({
      r,
      c,
      placedAt: performance.now(),
      ownerCanPass: true,
      range: s.player.blastRange,
    });
    s.bombCount++;
    syncUi();
  }, [syncUi]);

  // ── 鍵盤事件 ────────────────────────────────────────────────────────────
  useEffect(() => {
    const onDown = (e) => {
      keysRef.current.add(e.code);
      // 空白鍵放炸彈（keydown 觸發一次，不走持續移動邏輯）
      if (e.code === "Space") {
        e.preventDefault();
        placeBomb();
      }
      if (e.code === "KeyR") handleReset();
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "KeyW",
          "KeyA",
          "KeyS",
          "KeyD",
        ].includes(e.code)
      ) {
        e.preventDefault();
      }
    };
    const onUp = (e) => keysRef.current.delete(e.code);
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [placeBomb, handleReset]);

  // ── 主遊戲迴圈 ──────────────────────────────────────────────────────────
  useEffect(() => {
    loopFnRef.current = (now) => {
      // 首幀初始化計時
      if (startTimeRef.current === null) startTimeRef.current = now;

      const s = stateRef.current;
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) {
        rafIdRef.current = requestAnimationFrame(loopFnRef.current);
        return;
      }

      let needUiSync = false;

      // ── 1. 玩家移動（每 120ms 才移動一格，避免太快）──────────────────
      if (s.player.alive && !s.gameOver && now - lastMoveRef.current > 120) {
        const { r, c } = s.player;
        let nr = r,
          nc = c;
        const keys = keysRef.current;
        const vKeys = vKeysRef.current;
        if (keys.has("ArrowUp") || keys.has("KeyW") || vKeys.has("up")) nr -= 1;
        else if (keys.has("ArrowDown") || keys.has("KeyS") || vKeys.has("down"))
          nr += 1;
        else if (keys.has("ArrowLeft") || keys.has("KeyA") || vKeys.has("left"))
          nc -= 1;
        else if (
          keys.has("ArrowRight") ||
          keys.has("KeyD") ||
          vKeys.has("right")
        )
          nc += 1;

        if (nr !== r || nc !== c) {
          // 邊界 & 牆壁碰撞
          const inBounds = nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS;
          const targetTile = inBounds ? s.map[nr][nc] : WALL;
          // 炸彈碰撞：自己剛放下且還沒離開過 → 可穿越
          const bombAtTarget = inBounds
            ? s.bombs.find((b) => b.r === nr && b.c === nc)
            : null;
          const canPassBomb = !bombAtTarget || bombAtTarget.ownerCanPass;
          if (
            inBounds &&
            targetTile !== WALL &&
            targetTile !== BLOCK &&
            canPassBomb
          ) {
            s.player.r = nr;
            s.player.c = nc;
            // 離開舊格 → 封鎖腳下炸彈（不再允許回踩）
            for (const bomb of s.bombs) {
              if (bomb.ownerCanPass && bomb.r === r && bomb.c === c) {
                bomb.ownerCanPass = false;
              }
            }
          }
          lastMoveRef.current = now;
        }
        // 撿護盾道具
        {
          const shIdx = s.shields.findIndex(
            (sh) => sh.r === s.player.r && sh.c === s.player.c,
          );
          if (shIdx !== -1) {
            s.shields.splice(shIdx, 1);
            s.player.shieldCount++;
            needUiSync = true;
          }
        }
        // 撿火焰範圍道具
        {
          const fIdx = s.fires.findIndex(
            (f) => f.r === s.player.r && f.c === s.player.c,
          );
          if (fIdx !== -1) {
            s.fires.splice(fIdx, 1);
            s.player.blastRange = Math.min(s.player.blastRange + 1, 8);
            needUiSync = true;
          }
        }
      }

      // ── 2. 炸彈爆炸處理 ───────────────────────────────────────────────
      const toExplode = s.bombs.filter((b) => now - b.placedAt >= BOMB_DELAY);
      if (toExplode.length > 0) {
        // 連鎖：先算所有待爆炸炸彈的爆炸格，再看格子裡有無其他炸彈
        const explodedSet = new Set(toExplode.map((b) => `${b.r},${b.c}`));
        let changed = true;
        while (changed) {
          changed = false;
          for (const bomb of s.bombs) {
            if (explodedSet.has(`${bomb.r},${bomb.c}`)) continue;
            const cells = calcBlastCells(s.map, bomb.r, bomb.c, bomb.range);
            for (const cell of cells) {
              if (explodedSet.has(`${cell.r},${cell.c}`)) {
                // 此炸彈被連鎖引爆
                explodedSet.add(`${bomb.r},${bomb.c}`);
                changed = true;
                break;
              }
            }
          }
        }

        for (const key of explodedSet) {
          const [br, bc] = key.split(",").map(Number);
          const bomb = s.bombs.find((b) => b.r === br && b.c === bc);
          const cells = calcBlastCells(
            s.map,
            br,
            bc,
            bomb?.range ?? s.player.blastRange,
          );
          s.blasts.push({ r: br, c: bc, startAt: now, cells });

          // 炸掉可破壞牆
          for (const cell of cells) {
            if (s.map[cell.r][cell.c] === BLOCK) {
              s.map[cell.r][cell.c] = EMPTY;
              s.blocksLeft = Math.max(0, s.blocksLeft - 1);
              s.blocksDestroyed++;
              // 掉落道具：20% 護盾、25% 火焰範圍（互斥）
              const roll = Math.random();
              if (roll < 0.2) {
                s.shields.push({ r: cell.r, c: cell.c });
              } else if (roll < 0.45) {
                s.fires.push({ r: cell.r, c: cell.c });
              }
            }
          }
          // 炸死爆炸範圍內的敵人
          const blastSet = new Set(cells.map((cell) => `${cell.r},${cell.c}`));
          for (const enemy of s.enemies) {
            if (!enemy.dead && blastSet.has(`${enemy.r},${enemy.c}`)) {
              enemy.dead = true;
              needUiSync = true;
            }
          }
        }
        // 移除已爆炸的炸彈
        s.bombs = s.bombs.filter((b) => !explodedSet.has(`${b.r},${b.c}`));
        needUiSync = true;
      }

      // ── 3. 清除過期爆炸 ────────────────────────────────────────────────
      s.blasts = s.blasts.filter((bl) => now - bl.startAt < BLAST_LIFE);

      // ── 4. 敵人移動（隨機方向，每隻有獨立間隔）──────────────────────
      for (const enemy of s.enemies) {
        if (enemy.dead) continue;
        if (now - enemy.lastMove >= enemy.moveInterval) {
          const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ];
          const valid = dirs.filter(([dr, dc]) => {
            const nr = enemy.r + dr;
            const nc = enemy.c + dc;
            return (
              nr >= 0 &&
              nr < ROWS &&
              nc >= 0 &&
              nc < COLS &&
              s.map[nr][nc] === EMPTY &&
              !s.bombs.some((b) => b.r === nr && b.c === nc) &&
              !s.enemies.some(
                (e) => !e.dead && e !== enemy && e.r === nr && e.c === nc,
              )
            );
          });
          if (valid.length > 0) {
            const [dr, dc] = valid[Math.floor(Math.random() * valid.length)];
            enemy.r += dr;
            enemy.c += dc;
          }
          enemy.lastMove = now;
        }
      }

      // ── 5. 玩家碰到爆炸或敵人則死亡 ─────────────────────────────────
      if (s.player.alive && !s.gameOver) {
        const { r, c } = s.player;
        const inBlast = s.blasts.some(
          (bl) =>
            now - bl.startAt < BLAST_KILL_LIFE &&
            bl.cells.some((cell) => cell.r === r && cell.c === c),
        );
        const touchedEnemy = s.enemies.some(
          (e) => !e.dead && e.r === r && e.c === c,
        );
        if ((inBlast || touchedEnemy) && now >= s.player.invincibleUntil) {
          if (s.player.shieldCount > 0) {
            // 護盾抵擋 → 消耗一層 + 1.5s 無敵時間
            s.player.shieldCount--;
            s.player.invincibleUntil = now + 1500;
            needUiSync = true;
          } else {
            s.player.alive = false;
            s.gameOver = true;
            needUiSync = true;
          }
        }
      }

      // ── 6. 勝利判定（炸光全部敵人）──────────────────────────────────
      if (
        !s.gameOver &&
        s.enemies.length > 0 &&
        s.enemies.every((e) => e.dead)
      ) {
        s.won = true;
        s.gameOver = true;
        s.elapsedSec = Math.round((now - startTimeRef.current) / 1000);
        needUiSync = true;
      }
      // 死亡時亦記錄時間
      if (s.gameOver && !s.won && s.elapsedSec === 0) {
        s.elapsedSec = Math.round((now - startTimeRef.current) / 1000);
      }

      // ── 6. 繪製 ───────────────────────────────────────────────────────
      render(ctx, s, now);

      if (needUiSync) syncUi();
      rafIdRef.current = requestAnimationFrame(loopFnRef.current);
    };
  }, [syncUi]);

  // 啟動 / 停止 rAF
  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(loopFnRef.current);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // ── JSX ───────────────────────────────────────────────────────────────
  // D-pad 按鈕共用樣式
  const dpadStyle = {
    width: 62,
    height: 62,
    borderRadius: 16,
    border: "1.5px solid rgba(255,255,255,0.75)",
    background: "rgba(255,255,255,0.65)",
    fontSize: 26,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(16,16,30,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  return (
    <div className="oneui">
      <div className="shell">
        {/* ─── Header ──────────────────────────────────────────────── */}
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">炸彈超人</div>
              <div className="subtitle">Bomberman · 放炸彈 · 不要被炸到</div>
            </div>
            <div
              className="chip"
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                fontWeight: 800,
                whiteSpace: "nowrap",
                background: ui.gameOver
                  ? ui.won
                    ? "rgba(3, 200, 100, 0.18)"
                    : "rgba(200, 30, 60, 0.15)"
                  : "rgba(180, 180, 190, 0.2)",
                color: ui.gameOver
                  ? ui.won
                    ? "rgba(0, 145, 60, 0.95)"
                    : "rgba(200, 30, 60, 0.9)"
                  : "rgba(90, 90, 110, 0.85)",
                border: ui.gameOver
                  ? ui.won
                    ? "1px solid rgba(3, 200, 100, 0.35)"
                    : "1px solid rgba(200, 30, 60, 0.3)"
                  : "1px solid rgba(180, 180, 190, 0.45)",
              }}
            >
              {ui.gameOver ? (ui.won ? "🎉 勝利" : "💥 陣亡") : "🎮 進行中"}
            </div>
          </div>
        </header>

        <main className="content">
          {/* ─── Canvas ──────────────────────────────────────────────── */}
          <section
            className="card"
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <canvas
              ref={canvasRef}
              width={CANVAS_W}
              height={CANVAS_H}
              style={{
                borderRadius: 14,
                border: "1.5px solid rgba(255,255,255,0.5)",
                boxShadow: "0 10px 32px rgba(16, 16, 30, 0.22)",
                display: "block",
                maxWidth: "100%",
              }}
            />

            {/* 覆蓋層：遊戲結束提示 */}
            {ui.gameOver && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 12,
                  background: ui.won
                    ? "linear-gradient(160deg, rgba(0,60,30,0.9), rgba(10,5,30,0.95))"
                    : "linear-gradient(160deg, rgba(247, 238, 238, 0.9), rgba(112, 87, 214, 0.95))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* 大圖示 */}
                <div
                  style={{
                    fontSize: 52,
                    lineHeight: 1,
                    filter: `drop-shadow(0 0 18px ${ui.won ? "#57e89c" : "#ff4444"})`,
                  }}
                >
                  {ui.won ? "🏆" : "💀"}
                </div>

                {/* 標題 */}
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    letterSpacing: 3,
                    color: ui.won ? "#86efac" : "#fca5a5",
                    textShadow: `0 2px 18px ${ui.won ? "#22c55e" : "#ef4444"}`,
                  }}
                >
                  {ui.won ? "STAGE  CLEAR" : "GAME  OVER"}
                </div>

                {/* 統計小面板 */}
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 10,
                    padding: "8px 18px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {[
                    { icon: "⏱", val: `${ui.elapsedSec}s` },
                    { icon: "💣", val: ui.bombCount },
                    { icon: "🧱", val: ui.blocksDestroyed },
                  ].map(({ icon, val }) => (
                    <div
                      key={icon}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        minWidth: 38,
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{icon}</span>
                      <span
                        style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 再玩一次按鈕 */}
                <button
                  onClick={handleReset}
                  style={{
                    marginTop: 4,
                    padding: "11px 36px",
                    fontSize: 14,
                    fontWeight: 900,
                    letterSpacing: 2,
                    border: "none",
                    borderRadius: 999,
                    cursor: "pointer",
                    background: ui.won
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "linear-gradient(135deg, #ef4444, #b91c1c)",
                    color: "#fff",
                    boxShadow: ui.won
                      ? "0 6px 0 #14532d, 0 10px 22px rgba(34,197,94,0.45)"
                      : "0 6px 0 #7f1d1d, 0 10px 22px rgba(239,68,68,0.45)",
                    transform: "translateY(-3px)",
                    transition: "transform 0.1s",
                  }}
                  onPointerDown={(e) =>
                    (e.currentTarget.style.transform = "translateY(2px)")
                  }
                  onPointerUp={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                >
                  再玩一次
                </button>
              </div>
            )}
          </section>

          {/* ─── 狀態列（精簡版）────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "2px 4px 6px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: "💛",
                label: "狀態",
                val: ui.alive ? "存活" : "陣亡",
                col: ui.alive ? "rgba(0,145,60,0.9)" : "rgba(200,30,60,0.9)",
              },
              {
                icon: "🛡",
                label: "護盾",
                val: ui.shieldCount > 0 ? `×${ui.shieldCount}` : "無",
                col: ui.shieldCount > 0 ? "rgba(34,211,238,0.95)" : undefined,
                glow: ui.shieldCount > 0,
              },
              {
                icon: "🔥",
                label: "範圍",
                val: `${ui.blastRange} 格`,
                col:
                  ui.blastRange >= 5
                    ? "rgba(255,80,0,0.95)"
                    : ui.blastRange >= 4
                      ? "rgba(255,140,0,0.95)"
                      : ui.blastRange >= 3
                        ? "rgba(255,200,0,0.9)"
                        : undefined,
                glow: ui.blastRange >= 4,
              },
              { icon: "💣", label: "炸彈", val: `${ui.bombCount} 顆` },
              { icon: "🧱", label: "磚牆", val: `${ui.blocksLeft}` },
              { icon: "🐾", label: "敵人", val: `${ui.enemiesLeft} 隻` },
            ].map(({ icon, label, val, col, glow }) => (
              <div
                key={icon}
                className="chip"
                style={{
                  flex: "1 0 56px",
                  textAlign: "center",
                  fontWeight: 800,
                  color: col,
                  boxShadow:
                    icon === "🔥" && glow
                      ? "0 0 10px rgba(255,120,0,0.55)"
                      : glow
                        ? "0 0 10px rgba(34,211,238,0.45)"
                        : undefined,
                  border:
                    icon === "🔥" && glow
                      ? "1px solid rgba(255,120,0,0.6)"
                      : glow
                        ? "1px solid rgba(34,211,238,0.5)"
                        : undefined,
                }}
              >
                <div style={{ fontSize: 10, marginBottom: 1, opacity: 0.62 }}>
                  {label}
                </div>
                <div>
                  {icon} {val}
                </div>
              </div>
            ))}
          </div>

          {/* ─── 虛擬控制鍵 ──────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 18px 4px",
            }}
          >
            {/* 左：D-pad 方向鍵 3×3 格 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 62px)",
                gridTemplateRows: "repeat(3, 62px)",
                gap: 6,
              }}
            >
              {/* row 0 */}
              <div />
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  vKeysRef.current.add("up");
                }}
                onPointerUp={() => vKeysRef.current.delete("up")}
                onPointerLeave={() => vKeysRef.current.delete("up")}
                onPointerCancel={() => vKeysRef.current.delete("up")}
                style={dpadStyle}
              >
                ↑
              </button>
              <div />
              {/* row 1 */}
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  vKeysRef.current.add("left");
                }}
                onPointerUp={() => vKeysRef.current.delete("left")}
                onPointerLeave={() => vKeysRef.current.delete("left")}
                onPointerCancel={() => vKeysRef.current.delete("left")}
                style={dpadStyle}
              >
                ←
              </button>
              <div
                style={{
                  background: "rgba(255,255,255,0.22)",
                  borderRadius: 14,
                }}
              />
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  vKeysRef.current.add("right");
                }}
                onPointerUp={() => vKeysRef.current.delete("right")}
                onPointerLeave={() => vKeysRef.current.delete("right")}
                onPointerCancel={() => vKeysRef.current.delete("right")}
                style={dpadStyle}
              >
                →
              </button>
              {/* row 2 */}
              <div />
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  vKeysRef.current.add("down");
                }}
                onPointerUp={() => vKeysRef.current.delete("down")}
                onPointerLeave={() => vKeysRef.current.delete("down")}
                onPointerCancel={() => vKeysRef.current.delete("down")}
                style={dpadStyle}
              >
                ↓
              </button>
              <div />
            </div>

            {/* 右：炸彈按鈕（3D 街機風格） */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  if (!ui.gameOver) placeBomb();
                }}
                disabled={ui.gameOver}
                style={{
                  width: 86,
                  height: 86,
                  borderRadius: "50%",
                  background: ui.gameOver
                    ? "rgba(150,150,150,0.4)"
                    : "radial-gradient(circle at 38% 32%, #ff9a3c, #d63000)",
                  border: "2.5px solid rgba(255,255,255,0.72)",
                  fontSize: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: ui.gameOver
                    ? "none"
                    : "0 6px 0 #8b1a00, 0 10px 22px rgba(255,80,0,0.45)",
                  cursor: ui.gameOver ? "not-allowed" : "pointer",
                  touchAction: "none",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                  flexShrink: 0,
                  transform: "translateY(-3px)",
                  transition: "transform 0.08s, box-shadow 0.08s",
                }}
                onPointerUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 0 #8b1a00, 0 10px 22px rgba(255,80,0,0.45)";
                }}
              >
                💣
              </button>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "rgba(255,160,80,0.8)",
                  letterSpacing: 1.5,
                }}
              >
                BOMB
              </span>
            </div>
          </div>

          <div className="spacer" />
        </main>
      </div>
    </div>
  );
}
