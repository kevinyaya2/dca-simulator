// File: src/pages/SpicyGame.jsx
// 辣度挑戰遊戲 - 關卡推進版
// 使用 requestAnimationFrame 主迴圈，useRef 管理遊戲狀態
// 特色：背景卷軸、小辣椒敵人、Boss 戰、結算系統

import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SpicyGame.css";

// ========== 關卡配置 ==========
const LEVELS = [
  {
    id: 1,
    name: "Jalapeño",
    nameCN: "墨西哥辣椒",
    shu: 8000,
    bossHp: 100,
    fireballSpeed: 3,
    fireballInterval: 2000,
    bossMoveSpeed: 1.5,
    bossEmoji: "🌶️",
    color: "#4CAF50",
    minionKillsRequired: 3,
    scrollSpeed: 3,
    minionSpeed: 2,
    minionSpawnInterval: 1200,
    minionHp: 1,
  },
  {
    id: 2,
    name: "Serrano",
    nameCN: "塞拉諾辣椒",
    shu: 23000,
    bossHp: 120,
    fireballSpeed: 3.5,
    fireballInterval: 1800,
    bossMoveSpeed: 2,
    bossEmoji: "🌶️",
    color: "#8BC34A",
    minionKillsRequired: 4,
    scrollSpeed: 4,
    minionSpeed: 2.5,
    minionSpawnInterval: 1100,
    minionHp: 1,
  },
  {
    id: 3,
    name: "Cayenne",
    nameCN: "卡宴辣椒",
    shu: 50000,
    bossHp: 150,
    fireballSpeed: 4,
    fireballInterval: 1500,
    bossMoveSpeed: 2.5,
    bossEmoji: "🔥",
    color: "#FF9800",
    minionKillsRequired: 5,
    scrollSpeed: 5,
    minionSpeed: 3,
    minionSpawnInterval: 1000,
    minionHp: 2,
  },
  {
    id: 4,
    name: "Habanero",
    nameCN: "哈瓦那辣椒",
    shu: 350000,
    bossHp: 180,
    fireballSpeed: 4.5,
    fireballInterval: 1200,
    bossMoveSpeed: 3,
    bossEmoji: "🔥",
    color: "#FF5722",
    minionKillsRequired: 6,
    scrollSpeed: 6,
    minionSpeed: 3.5,
    minionSpawnInterval: 900,
    minionHp: 2,
  },
  {
    id: 5,
    name: "Ghost Pepper",
    nameCN: "鬼椒",
    shu: 1000000,
    bossHp: 220,
    fireballSpeed: 5,
    fireballInterval: 1000,
    bossMoveSpeed: 3.5,
    bossEmoji: "👻",
    color: "#E91E63",
    minionKillsRequired: 7,
    scrollSpeed: 7,
    minionSpeed: 4,
    minionSpawnInterval: 800,
    minionHp: 2,
  },
  {
    id: 6,
    name: "Trinidad Scorpion",
    nameCN: "千里達毒蠍椒",
    shu: 2000000,
    bossHp: 280,
    fireballSpeed: 5.5,
    fireballInterval: 800,
    bossMoveSpeed: 4,
    bossEmoji: "🦂",
    color: "#9C27B0",
    minionKillsRequired: 8,
    scrollSpeed: 8,
    minionSpeed: 4.5,
    minionSpawnInterval: 700,
    minionHp: 3,
  },
  {
    id: 7,
    name: "Carolina Reaper",
    nameCN: "卡羅萊納死神椒",
    shu: 2200000,
    bossHp: 320,
    fireballSpeed: 6,
    fireballInterval: 700,
    bossMoveSpeed: 4.5,
    bossEmoji: "💀",
    color: "#880E4F",
    minionKillsRequired: 9,
    scrollSpeed: 9,
    minionSpeed: 5,
    minionSpawnInterval: 650,
    minionHp: 3,
  },
  {
    id: 8,
    name: "Pepper X",
    nameCN: "辣椒X",
    shu: 3180000,
    bossHp: 360,
    fireballSpeed: 6.5,
    fireballInterval: 650,
    bossMoveSpeed: 5,
    bossEmoji: "☠️",
    color: "#4A148C",
    minionKillsRequired: 10,
    scrollSpeed: 10,
    minionSpeed: 5.5,
    minionSpawnInterval: 600,
    minionHp: 3,
  },
  {
    id: 9,
    name: "Dragon's Breath",
    nameCN: "龍息辣椒",
    shu: 2480000,
    bossHp: 400,
    fireballSpeed: 7,
    fireballInterval: 600,
    bossMoveSpeed: 5.5,
    bossEmoji: "🐉",
    color: "#B71C1C",
    minionKillsRequired: 11,
    scrollSpeed: 11,
    minionSpeed: 6,
    minionSpawnInterval: 550,
    minionHp: 4,
  },
  {
    id: 10,
    name: "Apollo Pepper",
    nameCN: "阿波羅辣椒",
    shu: 3000000,
    bossHp: 450,
    fireballSpeed: 7.5,
    fireballInterval: 550,
    bossMoveSpeed: 6,
    bossEmoji: "☀️",
    color: "#FF6F00",
    minionKillsRequired: 12,
    scrollSpeed: 12,
    minionSpeed: 6.5,
    minionSpawnInterval: 500,
    minionHp: 4,
  },
  {
    id: 11,
    name: "Komodo Dragon",
    nameCN: "科摩多龍辣椒",
    shu: 2400000,
    bossHp: 500,
    fireballSpeed: 8,
    fireballInterval: 500,
    bossMoveSpeed: 6.5,
    bossEmoji: "🦎",
    color: "#1B5E20",
    minionKillsRequired: 13,
    scrollSpeed: 13,
    minionSpeed: 7,
    minionSpawnInterval: 450,
    minionHp: 4,
  },
  {
    id: 12,
    name: "Inferno King",
    nameCN: "地獄之王",
    shu: 5000000,
    bossHp: 600,
    fireballSpeed: 8.5,
    fireballInterval: 450,
    bossMoveSpeed: 7,
    bossEmoji: "👑",
    color: "#D50000",
    minionKillsRequired: 14,
    scrollSpeed: 14,
    minionSpeed: 7.5,
    minionSpawnInterval: 400,
    minionHp: 5,
  },
  {
    id: 13,
    name: "Satan's Fury",
    nameCN: "撒旦之怒",
    shu: 6500000,
    bossHp: 700,
    fireballSpeed: 9,
    fireballInterval: 400,
    bossMoveSpeed: 7.5,
    bossEmoji: "👿",
    color: "#8B0000",
    minionKillsRequired: 15,
    scrollSpeed: 15,
    minionSpeed: 8,
    minionSpawnInterval: 380,
    minionHp: 5,
  },
  {
    id: 14,
    name: "Volcanic Hell",
    nameCN: "火山地獄",
    shu: 8000000,
    bossHp: 800,
    fireballSpeed: 9.5,
    fireballInterval: 350,
    bossMoveSpeed: 8,
    bossEmoji: "🌋",
    color: "#FF4500",
    minionKillsRequired: 16,
    scrollSpeed: 16,
    minionSpeed: 8.5,
    minionSpawnInterval: 350,
    minionHp: 6,
  },
  {
    id: 15,
    name: "Apocalypse",
    nameCN: "天啟末日",
    shu: 10000000,
    bossHp: 1000,
    fireballSpeed: 10,
    fireballInterval: 300,
    bossMoveSpeed: 8.5,
    bossEmoji: "👹",
    color: "#2C0A0A",
    minionKillsRequired: 18,
    scrollSpeed: 18,
    minionSpeed: 9,
    minionSpawnInterval: 300,
    minionHp: 6,
  },
];

// ========== 遊戲常數 ==========
const GAME_WIDTH = 360;
const GAME_HEIGHT = 640;
const PLAYER_SIZE = 50;
const PROJECTILE_SIZE = 20;
const FIREBALL_SIZE = 24;
const BOSS_WIDTH = 80;
const BOSS_HEIGHT = 70;
const MINION_SIZE = 36;
const PLAYER_Y = GAME_HEIGHT - 80;
const BOSS_Y = 60;
const PROJECTILE_SPEED = 10;
const PLAYER_SPEED = 6;

// ========== AABB 碰撞偵測 ==========
function checkCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

// ========== 格式化 SHU 數字 ==========
function formatSHU(num) {
  return num.toLocaleString();
}

// ========== 音效系統（Web Audio API）==========
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playBeep(frequency = 440, duration = 0.1, type = "sine", volume = 0.3) {
    if (!this.enabled || !this.ctx) return;
    try {
      const oscillator = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
      oscillator.start(this.ctx.currentTime);
      oscillator.stop(this.ctx.currentTime + duration);
    } catch {
      // 靜音失敗不影響遊戲
    }
  }

  shoot() { this.playBeep(880, 0.08, "square", 0.15); }
  hit() { this.playBeep(220, 0.15, "sawtooth", 0.2); }
  minionHit() { this.playBeep(660, 0.1, "triangle", 0.18); }
  hurt() { this.playBeep(150, 0.2, "triangle", 0.25); }
  victory() {
    this.playBeep(523, 0.1, "sine", 0.2);
    setTimeout(() => this.playBeep(659, 0.1, "sine", 0.2), 100);
    setTimeout(() => this.playBeep(784, 0.2, "sine", 0.25), 200);
  }
  gameOver() {
    this.playBeep(200, 0.3, "sawtooth", 0.3);
    setTimeout(() => this.playBeep(150, 0.4, "sawtooth", 0.25), 300);
  }
}

// ========== 主遊戲組件 ==========
export default function SpicyGame() {
  const navigate = useNavigate();

  // UI 狀態（用於觸發 re-render）
  const [gameState, setGameState] = useState("start"); // start | playing | paused | victory | gameover | levelclear
  const [currentLevel, setCurrentLevel] = useState(0);
  const [bossHp, setBossHp] = useState(100);
  const [scovilleLevel, setScovilleLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [bossShake, setBossShake] = useState(false);
  const [playerHit, setPlayerHit] = useState(false);

  // 新增：推進系統狀態
  const [stageMinionKills, setStageMinionKills] = useState(0);
  const [bossPhase, setBossPhase] = useState(false);
  const [minionKills, setMinionKills] = useState(0);
  const [bossKills, setBossKills] = useState(0);

  // 新增：滑動提示
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // UI 快照狀態：用於 React render 同步位置資訊
  const [ui, setUi] = useState({
    playerX: GAME_WIDTH / 2 - PLAYER_SIZE / 2,
    bossX: GAME_WIDTH / 2 - BOSS_WIDTH / 2,
    projectiles: [],
    fireballs: [],
    minions: [],
    bgOffset1: 0,
    bgOffset2: 0,
    bgOffset3: 0,
  });

  // 遊戲邏輯狀態（用 useRef 避免每幀 re-render）
  const gameRef = useRef({
    playerX: GAME_WIDTH / 2 - PLAYER_SIZE / 2,
    bossX: GAME_WIDTH / 2 - BOSS_WIDTH / 2,
    bossDirection: 1,
    projectiles: [],
    fireballs: [],
    minions: [],
    bossHp: 100,
    scoville: 0,
    score: 0,
    stageMinionKills: 0,
    bossPhase: false,
    minionKills: 0,
    bossKills: 0,
    lastFireballTime: 0,
    lastMinionTime: 0,
    isRunning: false,
    animationId: null,
    lastTime: 0,
    keys: { left: false, right: false },
    touchStartX: null,
    projectileIdCounter: 0,
    fireballIdCounter: 0,
    minionIdCounter: 0,
    // 背景偏移
    bgOffset1: 0,
    bgOffset2: 0,
    bgOffset3: 0,
  });

  const gameAreaRef = useRef(null);
  const soundRef = useRef(new SoundManager());

  // 當前關卡資料
  const level = LEVELS[currentLevel];

  // ========== 初始化關卡 ==========
  const initLevel = useCallback((levelIndex, keepStats = false) => {
    const lvl = LEVELS[levelIndex];
    const game = gameRef.current;
    const initPlayerX = GAME_WIDTH / 2 - PLAYER_SIZE / 2;
    const initBossX = GAME_WIDTH / 2 - BOSS_WIDTH / 2;

    game.playerX = initPlayerX;
    game.bossX = initBossX;
    game.bossDirection = 1;
    game.projectiles = [];
    game.fireballs = [];
    game.minions = [];
    game.bossHp = lvl.bossHp;
    game.scoville = keepStats ? game.scoville : 0;
    game.stageMinionKills = 0;
    game.bossPhase = false;
    game.lastFireballTime = 0;
    game.lastMinionTime = 0;
    game.projectileIdCounter = 0;
    game.fireballIdCounter = 0;
    game.minionIdCounter = 0;

    setUi({
      playerX: initPlayerX,
      bossX: initBossX,
      projectiles: [],
      fireballs: [],
      minions: [],
      bgOffset1: game.bgOffset1,
      bgOffset2: game.bgOffset2,
      bgOffset3: game.bgOffset3,
    });

    setBossHp(lvl.bossHp);
    if (!keepStats) setScovilleLevel(0);
    setStageMinionKills(0);
    setBossPhase(false);
    setCurrentLevel(levelIndex);
  }, []);

  // ========== 開始遊戲 ==========
  const startGame = useCallback(() => {
    soundRef.current.init();
    const game = gameRef.current;
    game.score = 0;
    game.minionKills = 0;
    game.bossKills = 0;
    game.scoville = 0;
    game.bgOffset1 = 0;
    game.bgOffset2 = 0;
    game.bgOffset3 = 0;
    setScore(0);
    setMinionKills(0);
    setBossKills(0);
    setShowSwipeHint(true);
    initLevel(0);
    setGameState("playing");
    game.isRunning = true;
  }, [initLevel]);

  // ========== 下一關 ==========
  const nextLevel = useCallback(() => {
    const nextIdx = currentLevel + 1;
    if (nextIdx < LEVELS.length) {
      initLevel(nextIdx, true);
      setGameState("playing");
      gameRef.current.isRunning = true;
    } else {
      setGameState("victory");
    }
  }, [currentLevel, initLevel]);

  // ========== 重試 ==========
  const retry = useCallback(() => {
    initLevel(currentLevel);
    setGameState("playing");
    gameRef.current.isRunning = true;
  }, [currentLevel, initLevel]);

  // ========== 從頭開始 ==========
  const restartFromBeginning = useCallback(() => {
    const game = gameRef.current;
    game.score = 0;
    game.minionKills = 0;
    game.bossKills = 0;
    game.scoville = 0;
    game.bgOffset1 = 0;
    game.bgOffset2 = 0;
    game.bgOffset3 = 0;
    setScore(0);
    setMinionKills(0);
    setBossKills(0);
    setShowSwipeHint(true);
    initLevel(0);
    setGameState("playing");
    game.isRunning = true;
  }, [initLevel]);

  // ========== 暫停/繼續 ==========
  const togglePause = useCallback(() => {
    if (gameState === "playing") {
      gameRef.current.isRunning = false;
      setGameState("paused");
    } else if (gameState === "paused") {
      gameRef.current.isRunning = true;
      gameRef.current.lastTime = performance.now();
      setGameState("playing");
    }
  }, [gameState]);

  // ========== 發射冰淇淋球 ==========
  const shoot = useCallback(() => {
    if (gameState !== "playing") return;
    const game = gameRef.current;
    game.projectiles.push({
      x: game.playerX + PLAYER_SIZE / 2 - PROJECTILE_SIZE / 2,
      y: PLAYER_Y - PROJECTILE_SIZE,
      id: game.projectileIdCounter++,
    });
    soundRef.current.shoot();
  }, [gameState]);

  // ========== 主遊戲迴圈 ==========
  useEffect(() => {
    const game = gameRef.current;
    let uiUpdateCounter = 0;

    const gameLoop = (currentTime) => {
      if (!game.isRunning) {
        game.animationId = requestAnimationFrame(gameLoop);
        return;
      }

      // 計算 delta time（支援 120Hz 螢幕）
      const deltaTime = game.lastTime ? (currentTime - game.lastTime) / 16.67 : 1;
      game.lastTime = currentTime;

      const lvl = LEVELS[currentLevel];

      // ========== 背景卷軸更新 ==========
      const scrollMultiplier = game.bossPhase ? 0.3 : 1;
      game.bgOffset1 = (game.bgOffset1 + lvl.scrollSpeed * 0.3 * deltaTime * scrollMultiplier) % 200;
      game.bgOffset2 = (game.bgOffset2 + lvl.scrollSpeed * 0.6 * deltaTime * scrollMultiplier) % 150;
      game.bgOffset3 = (game.bgOffset3 + lvl.scrollSpeed * 1.0 * deltaTime * scrollMultiplier) % 100;

      // ========== 玩家移動 ==========
      if (game.keys.left) {
        game.playerX = Math.max(0, game.playerX - PLAYER_SPEED * deltaTime);
      }
      if (game.keys.right) {
        game.playerX = Math.min(GAME_WIDTH - PLAYER_SIZE, game.playerX + PLAYER_SPEED * deltaTime);
      }

      // ========== 小辣椒敵人生成（從上方往下）==========
      // Boss 階段也會生成小辣椒，但頻率降低
      const minionInterval = game.bossPhase ? lvl.minionSpawnInterval * 1.5 : lvl.minionSpawnInterval;
      if (currentTime - game.lastMinionTime > minionInterval) {
        const xPos = 30 + Math.random() * (GAME_WIDTH - 60 - MINION_SIZE);
        game.minions.push({
          x: xPos,
          y: -MINION_SIZE,
          hp: lvl.minionHp,
          id: game.minionIdCounter++,
          type: Math.floor(Math.random() * 3),
        });
        game.lastMinionTime = currentTime;
      }

      // ========== 更新小辣椒位置（往下移動）==========
      game.minions = game.minions.filter((m) => {
        m.y += lvl.minionSpeed * deltaTime;
        return m.y < GAME_HEIGHT + MINION_SIZE;
      });

      // ========== Boss 邏輯（只在 bossPhase 時活動）==========
      if (game.bossPhase) {
        // Boss 移動
        game.bossX += lvl.bossMoveSpeed * game.bossDirection * deltaTime;
        if (game.bossX <= 0) {
          game.bossX = 0;
          game.bossDirection = 1;
        } else if (game.bossX >= GAME_WIDTH - BOSS_WIDTH) {
          game.bossX = GAME_WIDTH - BOSS_WIDTH;
          game.bossDirection = -1;
        }

        // Boss 發射火球
        if (currentTime - game.lastFireballTime > lvl.fireballInterval) {
          game.fireballs.push({
            x: game.bossX + BOSS_WIDTH / 2 - FIREBALL_SIZE / 2,
            y: BOSS_Y + BOSS_HEIGHT,
            id: game.fireballIdCounter++,
          });
          game.lastFireballTime = currentTime;
        }
      }

      // ========== 更新投射物位置 ==========
      game.projectiles = game.projectiles.filter((p) => {
        p.y -= PROJECTILE_SPEED * deltaTime;
        return p.y > -PROJECTILE_SIZE;
      });

      // ========== 更新火球位置 ==========
      game.fireballs = game.fireballs.filter((f) => {
        f.y += lvl.fireballSpeed * deltaTime;
        return f.y < GAME_HEIGHT + FIREBALL_SIZE;
      });

      // ========== 投射物與小辣椒碰撞 ==========
      game.projectiles = game.projectiles.filter((p) => {
        const projRect = { x: p.x, y: p.y, width: PROJECTILE_SIZE, height: PROJECTILE_SIZE };
        let hit = false;
        game.minions = game.minions.filter((m) => {
          if (hit) return true;
          const minionRect = { x: m.x, y: m.y, width: MINION_SIZE, height: MINION_SIZE };
          if (checkCollision(projRect, minionRect)) {
            m.hp -= 1;
            if (m.hp <= 0) {
              game.minionKills++;
              game.stageMinionKills++;
              game.score += 50;
              soundRef.current.minionHit();
              // 檢查是否觸發 Boss
              if (!game.bossPhase && game.stageMinionKills >= lvl.minionKillsRequired) {
                game.bossPhase = true;
                setBossPhase(true);
              }
              return false;
            }
            hit = true;
            soundRef.current.minionHit();
          }
          return true;
        });
        return !hit;
      });

      // ========== 投射物與 Boss 碰撞（僅 bossPhase）==========
      if (game.bossPhase) {
        const bossRect = { x: game.bossX, y: BOSS_Y, width: BOSS_WIDTH, height: BOSS_HEIGHT };
        game.projectiles = game.projectiles.filter((p) => {
          const projRect = { x: p.x, y: p.y, width: PROJECTILE_SIZE, height: PROJECTILE_SIZE };
          if (checkCollision(projRect, bossRect)) {
            game.bossHp -= 10;
            game.score += 100;
            soundRef.current.hit();
            setBossShake(true);
            setTimeout(() => setBossShake(false), 150);
            return false;
          }
          return true;
        });
      }

      // ========== 火球與玩家碰撞 ==========
      const playerRect = { x: game.playerX, y: PLAYER_Y, width: PLAYER_SIZE, height: PLAYER_SIZE };
      game.fireballs = game.fireballs.filter((f) => {
        const fireRect = { x: f.x, y: f.y, width: FIREBALL_SIZE, height: FIREBALL_SIZE };
        if (checkCollision(fireRect, playerRect)) {
          game.scoville += 15;
          soundRef.current.hurt();
          setPlayerHit(true);
          setTimeout(() => setPlayerHit(false), 200);
          return false;
        }
        return true;
      });

      // ========== 小辣椒與玩家碰撞 ==========
      game.minions = game.minions.filter((m) => {
        const minionRect = { x: m.x, y: m.y, width: MINION_SIZE, height: MINION_SIZE };
        if (checkCollision(minionRect, playerRect)) {
          game.scoville += 8;
          soundRef.current.hurt();
          setPlayerHit(true);
          setTimeout(() => setPlayerHit(false), 200);
          return false;
        }
        return true;
      });

      // ========== 檢查勝利/失敗 ==========
      if (game.bossPhase && game.bossHp <= 0) {
        game.isRunning = false;
        game.bossKills++;
        game.score += 500 + (currentLevel + 1) * 200;
        soundRef.current.victory();
        if (currentLevel < LEVELS.length - 1) {
          setGameState("levelclear");
        } else {
          setGameState("victory");
        }
        setMinionKills(game.minionKills);
        setBossKills(game.bossKills);
        setScore(game.score);
      }

      if (game.scoville >= 100) {
        game.isRunning = false;
        soundRef.current.gameOver();
        setMinionKills(game.minionKills);
        setBossKills(game.bossKills);
        setScore(game.score);
        setGameState("gameover");
      }

      // ========== 每 N 幀同步 UI 快照 ==========
      uiUpdateCounter++;
      if (uiUpdateCounter >= 4) {
        uiUpdateCounter = 0;
        setBossHp(Math.max(0, game.bossHp));
        setScovilleLevel(Math.min(100, game.scoville));
        setScore(game.score);
        setStageMinionKills(game.stageMinionKills);
        setMinionKills(game.minionKills);

        setUi({
          playerX: game.playerX,
          bossX: game.bossX,
          projectiles: game.projectiles.map((p) => ({ ...p })),
          fireballs: game.fireballs.map((f) => ({ ...f })),
          minions: game.minions.map((m) => ({ ...m })),
          bgOffset1: game.bgOffset1,
          bgOffset2: game.bgOffset2,
          bgOffset3: game.bgOffset3,
        });
      }

      game.animationId = requestAnimationFrame(gameLoop);
    };

    game.animationId = requestAnimationFrame(gameLoop);

    return () => {
      if (game.animationId) {
        cancelAnimationFrame(game.animationId);
      }
    };
  }, [currentLevel]);

  // ========== 鍵盤控制 ==========
  useEffect(() => {
    const game = gameRef.current;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        game.keys.left = true;
        setShowSwipeHint(false);
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        game.keys.right = true;
        setShowSwipeHint(false);
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        shoot();
      }
      if (e.key === "Escape") togglePause();
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") game.keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d") game.keys.right = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [shoot, togglePause]);

  // ========== 觸控控制 ==========
  useEffect(() => {
    const gameArea = gameAreaRef.current;
    if (!gameArea) return;

    const game = gameRef.current;

    const handlePointerDown = (e) => {
      if (gameState !== "playing") return;
      const rect = gameArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      game.touchStartX = x;

      const y = e.clientY - rect.top;
      if (y < GAME_HEIGHT / 2) shoot();
    };

    const handlePointerMove = (e) => {
      if (gameState !== "playing" || game.touchStartX === null) return;
      const rect = gameArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const deltaX = x - game.touchStartX;
      if (Math.abs(deltaX) > 2) {
        setShowSwipeHint(false);
      }
      game.playerX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_SIZE, game.playerX + deltaX));
      game.touchStartX = x;
    };

    const handlePointerUp = () => {
      game.touchStartX = null;
    };

    gameArea.addEventListener("pointerdown", handlePointerDown);
    gameArea.addEventListener("pointermove", handlePointerMove);
    gameArea.addEventListener("pointerup", handlePointerUp);
    gameArea.addEventListener("pointerleave", handlePointerUp);

    return () => {
      gameArea.removeEventListener("pointerdown", handlePointerDown);
      gameArea.removeEventListener("pointermove", handlePointerMove);
      gameArea.removeEventListener("pointerup", handlePointerUp);
      gameArea.removeEventListener("pointerleave", handlePointerUp);
    };
  }, [gameState, shoot]);

  // ========== 渲染 ==========
  return (
    <div className="oneui sv-page">
      <div className="sv-container">
        {/* 頂部導覽 */}
        <header className="sv-header">
          <button className="sv-back-btn" onClick={() => navigate("/")}>
            ← 返回
          </button>
          <h1 className="sv-title">🌶️ 辣度挑戰</h1>
          {(gameState === "playing" || gameState === "paused") ? (
            <button className="sv-pause-btn" onClick={togglePause}>
              {gameState === "playing" ? "⏸️" : "▶️"}
            </button>
          ) : (
            <div className="sv-header-spacer" />
          )}
        </header>

        {/* 遊戲資訊 HUD */}
        {gameState !== "start" && (
          <div className="sv-hud">
            <div className="sv-hud-item">
              <span className="sv-hud-label">關卡</span>
              <span className="sv-hud-value">{level.name}</span>
              <span className="sv-hud-sub">{level.nameCN}</span>
            </div>
            <div className="sv-hud-item sv-hud-shu">
              <span className="sv-hud-label">辣度 SHU</span>
              <span className="sv-hud-value" style={{ color: level.color }}>
                {formatSHU(level.shu)}
              </span>
            </div>
            <div className="sv-hud-item">
              <span className="sv-hud-label">擊敗</span>
              <span className="sv-hud-value">🌶️{minionKills}</span>
            </div>
            <div className="sv-hud-item">
              <span className="sv-hud-label">分數</span>
              <span className="sv-hud-value">{score}</span>
            </div>
          </div>
        )}

        {/* 遊戲區域 */}
        <div
          className="sv-game-area"
          ref={gameAreaRef}
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          {/* 背景卷軸層 */}
          {gameState !== "start" && (
            <>
              <div
                className="sv-bg-layer sv-bg-layer-1"
                style={{ backgroundPositionY: ui.bgOffset1 }}
              />
              <div
                className="sv-bg-layer sv-bg-layer-2"
                style={{ backgroundPositionY: ui.bgOffset2 }}
              />
              <div
                className="sv-bg-layer sv-bg-layer-3"
                style={{ backgroundPositionY: ui.bgOffset3 }}
              />
            </>
          )}

          {/* 滑動提示 */}
          {gameState === "playing" && showSwipeHint && (
            <div className="sv-swipe-hint">
              <span className="sv-swipe-hint-text">← 左右滑動操控 →</span>
            </div>
          )}

          {/* 起始畫面 */}
          {gameState === "start" && (
            <div className="sv-overlay sv-start-screen">
              <div className="sv-start-content">
                <div className="sv-start-icon">🌶️</div>
                <h2>辣椒大戰冰淇淋</h2>
                <p>Spicy Challenge</p>
                <p className="sv-instructions">
                  🎮 左右鍵移動 ｜ 空白鍵發射
                  <br />
                  📱 拖曳移動 ｜ 點擊上方發射
                  <br />
                  <br />
                  🌶️ 擊敗小辣椒 → 闖關 → 打倒Boss!
                </p>
                <button className="sv-btn sv-btn-primary" onClick={startGame}>
                  開始遊戲
                </button>
              </div>
            </div>
          )}

          {/* 暫停畫面 */}
          {gameState === "paused" && (
            <div className="sv-overlay">
              <div className="sv-modal">
                <h2>⏸️ 暫停</h2>
                <button className="sv-btn sv-btn-primary" onClick={togglePause}>
                  繼續遊戲
                </button>
                <button className="sv-btn sv-btn-secondary" onClick={() => navigate("/")}>
                  返回首頁
                </button>
              </div>
            </div>
          )}

          {/* 過關畫面 */}
          {gameState === "levelclear" && (
            <div className="sv-overlay">
              <div className="sv-modal sv-victory-modal">
                <div className="sv-victory-icon">🎉</div>
                <h2>關卡通過！</h2>
                <p>
                  成功擊敗 {level.name}
                  <br />
                  <span style={{ color: level.color }}>{formatSHU(level.shu)} SHU</span>
                </p>
                <div className="sv-stats-grid">
                  <div className="sv-stat">
                    <span className="sv-stat-icon">🌶️</span>
                    <span className="sv-stat-value">{minionKills}</span>
                    <span className="sv-stat-label">小辣椒</span>
                  </div>
                  <div className="sv-stat">
                    <span className="sv-stat-icon">👹</span>
                    <span className="sv-stat-value">{bossKills}</span>
                    <span className="sv-stat-label">大Boss</span>
                  </div>
                </div>
                <p className="sv-score-display">得分：{score}</p>
                <button className="sv-btn sv-btn-primary" onClick={nextLevel}>
                  下一關 →
                </button>
              </div>
            </div>
          )}

          {/* 全通關畫面 */}
          {gameState === "victory" && (
            <div className="sv-overlay">
              <div className="sv-modal sv-victory-modal">
                <div className="sv-victory-icon">🏆</div>
                <h2>恭喜通關！</h2>
                <p>你征服了所有辣椒！</p>
                <div className="sv-stats-grid">
                  <div className="sv-stat">
                    <span className="sv-stat-icon">🌶️</span>
                    <span className="sv-stat-value">{minionKills}</span>
                    <span className="sv-stat-label">小辣椒</span>
                  </div>
                  <div className="sv-stat">
                    <span className="sv-stat-icon">👹</span>
                    <span className="sv-stat-value">{bossKills}</span>
                    <span className="sv-stat-label">大Boss</span>
                  </div>
                  <div className="sv-stat">
                    <span className="sv-stat-icon">🏅</span>
                    <span className="sv-stat-value">{currentLevel + 1}</span>
                    <span className="sv-stat-label">到達關卡</span>
                  </div>
                </div>
                <p className="sv-score-display">最終得分：{score}</p>
                <button className="sv-btn sv-btn-primary" onClick={restartFromBeginning}>
                  再玩一次
                </button>
                <button className="sv-btn sv-btn-secondary" onClick={() => navigate("/")}>
                  返回首頁
                </button>
              </div>
            </div>
          )}

          {/* Game Over 畫面 */}
          {gameState === "gameover" && (
            <div className="sv-overlay sv-gameover-overlay">
              <div className="sv-modal sv-gameover-modal">
                <div className="sv-gameover-icon">🥵</div>
                <h2>太辣了！</h2>
                <p>辣度超標 Game Over</p>
                <div className="sv-stats-grid">
                  <div className="sv-stat">
                    <span className="sv-stat-icon">🌶️</span>
                    <span className="sv-stat-value">{minionKills}</span>
                    <span className="sv-stat-label">小辣椒</span>
                  </div>
                  <div className="sv-stat">
                    <span className="sv-stat-icon">👹</span>
                    <span className="sv-stat-value">{bossKills}</span>
                    <span className="sv-stat-label">大Boss</span>
                  </div>
                  <div className="sv-stat">
                    <span className="sv-stat-icon">🏅</span>
                    <span className="sv-stat-value">{currentLevel + 1}</span>
                    <span className="sv-stat-label">到達關卡</span>
                  </div>
                </div>
                <p className="sv-score-display">得分：{score}</p>
                <button className="sv-btn sv-btn-primary" onClick={retry}>
                  重試本關
                </button>
                <button className="sv-btn sv-btn-secondary" onClick={restartFromBeginning}>
                  從頭開始
                </button>
              </div>
            </div>
          )}

          {/* HP 條（Boss Phase 時顯示）*/}
          {gameState !== "start" && bossPhase && (
            <div className="sv-boss-hp-bar">
              <div className="sv-bar-label">🔥 Boss HP</div>
              <div className="sv-bar-track">
                <div
                  className="sv-bar-fill sv-hp-fill"
                  style={{
                    width: `${(bossHp / level.bossHp) * 100}%`,
                    backgroundColor: level.color,
                  }}
                />
              </div>
            </div>
          )}

          {/* 擊殺進度條（非 Boss Phase 時顯示）*/}
          {gameState !== "start" && !bossPhase && (
            <div className="sv-progress-bar">
              <div className="sv-bar-label">🌶️ 擊殺</div>
              <div className="sv-bar-track">
                <div
                  className="sv-bar-fill sv-progress-fill"
                  style={{ width: `${(stageMinionKills / level.minionKillsRequired) * 100}%` }}
                />
              </div>
              <span className="sv-bar-value">{stageMinionKills}/{level.minionKillsRequired}</span>
            </div>
          )}

          {/* 辣度條 */}
          {gameState !== "start" && (
            <div className="sv-scoville-bar">
              <div className="sv-bar-label">🌡️ 辣度</div>
              <div className="sv-bar-track">
                <div className="sv-bar-fill sv-scoville-fill" style={{ width: `${scovilleLevel}%` }} />
              </div>
              <span className="sv-bar-value">{Math.round(scovilleLevel)}%</span>
            </div>
          )}

          {/* Boss（僅 bossPhase 顯示）*/}
          {gameState !== "start" && bossPhase && (
            <div
              className={`sv-boss ${bossShake ? "sv-shake" : ""}`}
              style={{
                left: ui.bossX,
                top: BOSS_Y,
                width: BOSS_WIDTH,
                height: BOSS_HEIGHT,
              }}
            >
              <span className="sv-boss-emoji">{level.bossEmoji}</span>
              <span className="sv-boss-name">{level.name}</span>
            </div>
          )}

          {/* Boss 來臨警告 */}
          {gameState === "playing" && bossPhase && bossHp === level.bossHp && (
            <div className="sv-boss-warning">⚠️ BOSS 來襲 ⚠️</div>
          )}

          {/* 小辣椒敵人 - JSX map 渲染 */}
          <div className="sv-minions">
            {ui.minions.map((m) => (
              <div
                key={m.id}
                className={`sv-minion sv-minion-type-${m.type}`}
                style={{ left: m.x, top: m.y }}
              >
                🌶️
              </div>
            ))}
          </div>

          {/* 投射物 - JSX map 渲染 */}
          <div className="sv-projectiles">
            {ui.projectiles.map((p) => (
              <div key={p.id} className="sv-projectile" style={{ left: p.x, top: p.y }} />
            ))}
          </div>

          {/* 火球 - JSX map 渲染 */}
          <div className="sv-fireballs">
            {ui.fireballs.map((f) => (
              <div key={f.id} className="sv-fireball" style={{ left: f.x, top: f.y }} />
            ))}
          </div>

          {/* 玩家 */}
          {gameState !== "start" && (
            <div
              className={`sv-player ${playerHit ? "sv-player-hit" : ""}`}
              style={{
                left: ui.playerX,
                top: PLAYER_Y,
                width: PLAYER_SIZE,
                height: PLAYER_SIZE,
              }}
            >
              🍦
            </div>
          )}
        </div>

        {/* 射擊按鈕（行動裝置）*/}
        {gameState === "playing" && (
          <button
            className="sv-shoot-btn"
            onTouchStart={(e) => {
              e.preventDefault();
              shoot();
            }}
            onClick={shoot}
          >
            <span className="sv-shoot-icon">❄️</span>
            <span className="sv-shoot-text">發射冰淇淋</span>
          </button>
        )}
      </div>
    </div>
  );
}
