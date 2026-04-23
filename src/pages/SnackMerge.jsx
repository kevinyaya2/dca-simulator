import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const WIDTH = 320;
const HEIGHT = 520;
const DROP_LINE_Y = 106;
const GAME_OVER_LINE_Y = 142;
const OVERFLOW_GRACE_MS = 3000;
const OVERFLOW_IMMUNITY_MS = 900;
const WALL_PADDING = 14;
const GRAVITY = 0.22;
const AIR_DRAG = 0.996;
const BOUNCE = 0.22;
const MAX_DROP_SPEED = 16;
const PREVIEW_STEP = 18;
const HIGH_SCORE_KEY = "taiwan-snack-merge-high-score";

const SNACKS = [
  { name: "地瓜球", emoji: "🍡", radius: 18, score: 35, fill: "#d88a33", glow: "rgba(216, 138, 51, 0.42)", stroke: "rgba(255, 224, 170, 0.86)", price: "35", tagBg: "linear-gradient(180deg, #f0bb6e, #cf7b2d)", tagBorder: "rgba(255, 220, 163, 0.48)", tagText: "#5b3412" },
  { name: "雞蛋糕", emoji: "🧁", radius: 22, score: 45, fill: "#d9a25f", glow: "rgba(217, 162, 95, 0.38)", stroke: "rgba(255, 235, 201, 0.84)", price: "45", tagBg: "linear-gradient(180deg, #f3d09a, #d79b4c)", tagBorder: "rgba(255, 233, 191, 0.52)", tagText: "#5c3d1e" },
  { name: "蔥油餅", emoji: "🥙", radius: 26, score: 50, fill: "#b69253", glow: "rgba(182, 146, 83, 0.38)", stroke: "rgba(243, 224, 180, 0.82)", price: "50", tagBg: "linear-gradient(180deg, #d8c086, #af8742)", tagBorder: "rgba(237, 220, 174, 0.46)", tagText: "#4c3818" },
  { name: "珍珠奶茶", emoji: "🧋", radius: 31, score: 60, fill: "#8f684f", glow: "rgba(143, 104, 79, 0.34)", stroke: "rgba(240, 220, 204, 0.78)", price: "60", tagBg: "linear-gradient(180deg, #c69a77, #8e6347)", tagBorder: "rgba(231, 208, 189, 0.4)", tagText: "#fff3e6" },
  { name: "雞排", emoji: "🍗", radius: 36, score: 85, fill: "#b8673f", glow: "rgba(184, 103, 63, 0.38)", stroke: "rgba(255, 217, 193, 0.8)", price: "85", tagBg: "linear-gradient(180deg, #e29a63, #ba5f35)", tagBorder: "rgba(248, 206, 178, 0.42)", tagText: "#fff4ea" },
  { name: "烤飯糰", emoji: "🍙", radius: 41, score: 90, fill: "#c9b08a", glow: "rgba(201, 176, 138, 0.34)", stroke: "rgba(252, 246, 236, 0.84)", price: "90", tagBg: "linear-gradient(180deg, #f1e4cc, #c3a47a)", tagBorder: "rgba(255, 245, 228, 0.52)", tagText: "#60462a" },
  { name: "滷肉飯", emoji: "🍚", radius: 47, score: 95, fill: "#b78652", glow: "rgba(183, 134, 82, 0.36)", stroke: "rgba(255, 236, 212, 0.82)", price: "95", tagBg: "linear-gradient(180deg, #e4c192, #af7442)", tagBorder: "rgba(249, 224, 193, 0.48)", tagText: "#5f3918" },
  { name: "熱狗堡", emoji: "🌭", radius: 54, score: 120, fill: "#d75c43", glow: "rgba(215, 92, 67, 0.38)", stroke: "rgba(255, 215, 196, 0.82)", price: "120", tagBg: "linear-gradient(180deg, #f0a56b, #cf4f38)", tagBorder: "rgba(255, 210, 187, 0.42)", tagText: "#fff2e7" },
  { name: "牛肉麵", emoji: "🍜", radius: 62, score: 150, fill: "#b74b2f", glow: "rgba(183, 75, 47, 0.38)", stroke: "rgba(255, 205, 188, 0.82)", price: "150", tagBg: "linear-gradient(180deg, #db8458, #a33d27)", tagBorder: "rgba(246, 197, 179, 0.44)", tagText: "#fff0e8" },
  { name: "海鮮塔", emoji: "🦞", radius: 72, score: 380, fill: "#df6a5b", glow: "rgba(223, 106, 91, 0.4)", stroke: "rgba(255, 216, 205, 0.86)", price: "380", tagBg: "linear-gradient(180deg, #f1a195, #d35e4e)", tagBorder: "rgba(255, 214, 205, 0.48)", tagText: "#fff4f1" },
];

function createNextLevelIndex() {
  return Math.random() < 0.72 ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 4);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readHighScore() {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(HIGH_SCORE_KEY);
  return raw ? Number(raw) || 0 : 0;
}

function createFood(id, level, x) {
  return {
    id,
    level,
    x,
    y: DROP_LINE_Y,
    vx: 0,
    vy: 0,
    r: SNACKS[level].radius,
    mergedAt: 0,
    bornAt: (typeof performance !== "undefined" ? performance.now() : Date.now()),
  };
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function createBurst(x, y, color) {
  return {
    id: `${performance.now()}-${Math.random()}`,
    x,
    y,
    color,
    ttl: 24,
    particles: Array.from({ length: 12 }, (_, index) => {
      const angle = (Math.PI * 2 * index) / 12 + Math.random() * 0.3;
      const speed = 1.4 + Math.random() * 1.8;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        size: 4 + Math.random() * 4,
      };
    }),
  };
}

function getAudioBus(ctx, audioRef) {
  const existing = audioRef.current?.bus;
  if (existing) return existing;

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -24;
  compressor.knee.value = 18;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.003;
  compressor.release.value = 0.18;

  const master = ctx.createGain();
  master.gain.value = 1.85;

  compressor.connect(master);
  master.connect(ctx.destination);

  const bus = { compressor, master };
  audioRef.current.bus = bus;
  return bus;
}

function noteToFreq(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

export default function SnackMerge() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const nextIdRef = useRef(1);
  const animationRef = useRef(null);
  const audioRef = useRef(null);
  const [effects, setEffects] = useState([]);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const gameRef = useRef({
    foods: [],
    previewX: WIDTH / 2,
    currentLevel: createNextLevelIndex(),
    nextLevel: createNextLevelIndex(),
    score: 0,
    best: readHighScore(),
    started: false,
    paused: false,
    gameOver: false,
    comboPopups: [],
    topDangerMs: 0,
  });

  const [ui, setUi] = useState(() => ({
    score: 0,
    best: readHighScore(),
    currentLevel: gameRef.current.currentLevel,
    nextLevel: gameRef.current.nextLevel,
    topLevel: 0,
    started: false,
    paused: false,
    gameOver: false,
    topDangerMs: 0,
    comboPopups: [],
  }));

  const syncUi = useCallback(() => {
    const game = gameRef.current;
    const topLevel = game.foods.reduce((max, food) => Math.max(max, food.level), 0);
    setUi({
      score: game.score,
      best: game.best,
      currentLevel: game.currentLevel,
      nextLevel: game.nextLevel,
      topLevel,
      started: game.started,
      paused: game.paused,
      gameOver: game.gameOver,
      topDangerMs: game.topDangerMs,
      comboPopups: game.comboPopups,
    });
  }, []);

  const ensureAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioRef.current) audioRef.current = new AudioCtx();
    if (audioRef.current.state === "suspended") audioRef.current.resume().catch(() => {});
    getAudioBus(audioRef.current, audioRef);
    return audioRef.current;
  }, []);

  const playTone = useCallback(
    (kind, level = 0) => {
      if (!audioEnabled) return;
      const ctx = ensureAudioContext();
      if (!ctx) return;

      try {
        const now = ctx.currentTime;
        const { compressor } = getAudioBus(ctx, audioRef);
        const playVoice = ({
          start = now,
          duration = 0.16,
          type = "triangle",
          freq = 440,
          endFreq = freq * 0.98,
          volume = 0.12,
          pan = 0,
          attack = 0.006,
          decayTarget = 0.0001,
          filterType = "lowpass",
          filterFreq = 2400,
          q = 0.7,
        }) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();
          const panner = ctx.createStereoPanner();

          osc.type = type;
          osc.frequency.setValueAtTime(freq, start);
          osc.frequency.exponentialRampToValueAtTime(Math.max(50, endFreq), start + duration);

          filter.type = filterType;
          filter.frequency.setValueAtTime(filterFreq, start);
          filter.Q.value = q;

          panner.pan.setValueAtTime(pan, start);

          gain.gain.setValueAtTime(0.0001, start);
          gain.gain.exponentialRampToValueAtTime(volume, start + attack);
          gain.gain.exponentialRampToValueAtTime(decayTarget, start + duration);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(panner);
          panner.connect(compressor);

          osc.start(start);
          osc.stop(start + duration);
        };

        if (kind === "drop") {
          const base = noteToFreq(55 + Math.min(level, 8));
          playVoice({
            duration: 0.08,
            type: "triangle",
            freq: base,
            endFreq: base * 0.74,
            volume: 0.13 + Math.min(level, 8) * 0.008,
            filterFreq: 1500,
            q: 1.1,
          });
          playVoice({
            start: now + 0.008,
            duration: 0.05,
            type: "sine",
            freq: base * 2.02,
            endFreq: base * 1.5,
            volume: 0.04,
            filterFreq: 2600,
            pan: level % 2 === 0 ? -0.08 : 0.08,
          });
          return;
        }

        if (kind === "merge") {
          const root = noteToFreq(67 + Math.min(level, 6));
          playVoice({
            duration: 0.18,
            type: "triangle",
            freq: root,
            endFreq: root * 1.02,
            volume: 0.16,
            filterFreq: 2600,
          });
          playVoice({
            start: now + 0.02,
            duration: 0.2,
            type: "sine",
            freq: root * 1.25,
            endFreq: root * 1.28,
            volume: 0.1,
            filterFreq: 3200,
            pan: -0.12,
          });
          playVoice({
            start: now + 0.04,
            duration: 0.24,
            type: "sine",
            freq: root * 1.5,
            endFreq: root * 1.52,
            volume: 0.085,
            filterFreq: 3600,
            pan: 0.12,
          });
          return;
        }

        if (kind === "gameOver") {
          const first = noteToFreq(50);
          const second = noteToFreq(46);
          const third = noteToFreq(43);
          playVoice({
            duration: 0.18,
            type: "triangle",
            freq: first,
            endFreq: first * 0.84,
            volume: 0.14,
            filterFreq: 1800,
          });
          playVoice({
            start: now + 0.12,
            duration: 0.2,
            type: "triangle",
            freq: second,
            endFreq: second * 0.82,
            volume: 0.13,
            filterFreq: 1500,
          });
          playVoice({
            start: now + 0.24,
            duration: 0.28,
            type: "sine",
            freq: third,
            endFreq: third * 0.78,
            volume: 0.12,
            filterFreq: 1100,
          });
          return;
        }

        if (kind === "toggle") {
          const base = noteToFreq(76);
          playVoice({
            duration: 0.08,
            type: "sine",
            freq: base,
            endFreq: base * 1.03,
            volume: 0.065,
            filterFreq: 3000,
          });
          playVoice({
            start: now + 0.035,
            duration: 0.1,
            type: "triangle",
            freq: base * 1.26,
            endFreq: base * 1.28,
            volume: 0.05,
            filterFreq: 3400,
          });
        }
      } catch {
        // Ignore audio failures.
      }
    },
    [audioEnabled, ensureAudioContext],
  );

  const triggerFeedback = useCallback(
    (type, x, y, color, level = 0) => {
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        if (type === "merge") navigator.vibrate(level >= 6 ? [18, 10, 24] : [12]);
        if (type === "gameOver") navigator.vibrate([30, 14, 30]);
      }

      if (wrapRef.current && type !== "drop") {
        wrapRef.current.classList.remove("snackMergeShake-soft", "snackMergeShake-hard");
        void wrapRef.current.offsetWidth;
        wrapRef.current.classList.add(type === "merge" ? "snackMergeShake-soft" : "snackMergeShake-hard");
      }

      setEffects((prev) => [...prev, createBurst(x, y, color)]);
      playTone(type, level);
    },
    [playTone],
  );

  const saveBestIfNeeded = useCallback(() => {
    const game = gameRef.current;
    if (typeof window === "undefined") return;
    const currentBest = readHighScore();
    if (game.score > currentBest) {
      game.best = game.score;
      window.localStorage.setItem(HIGH_SCORE_KEY, String(game.score));
    } else {
      game.best = currentBest;
    }
  }, []);

  const startGame = useCallback(() => {
    const game = gameRef.current;
    game.started = true;
    game.paused = false;
    game.gameOver = false;
    playTone("toggle");
    syncUi();
  }, [playTone, syncUi]);

  const pauseGame = useCallback(() => {
    const game = gameRef.current;
    if (!game.started || game.gameOver) return;
    game.paused = true;
    syncUi();
  }, [syncUi]);

  const resumeGame = useCallback(() => {
    const game = gameRef.current;
    if (!game.started || game.gameOver) return;
    game.paused = false;
    playTone("toggle");
    syncUi();
  }, [playTone, syncUi]);

  const resetGame = useCallback(() => {
    gameRef.current = {
      foods: [],
      previewX: WIDTH / 2,
      currentLevel: createNextLevelIndex(),
      nextLevel: createNextLevelIndex(),
      score: 0,
      best: readHighScore(),
      started: false,
      paused: false,
      gameOver: false,
      comboPopups: [],
      topDangerMs: 0,
    };
    nextIdRef.current = 1;
    setEffects([]);
    syncUi();
  }, [syncUi]);

  const toggleAudio = useCallback(() => {
    const ctx = ensureAudioContext();
    if (!ctx) return;

    setAudioEnabled((prev) => {
      const next = !prev;
      if (next) window.setTimeout(() => playTone("toggle"), 0);
      return next;
    });
  }, [ensureAudioContext, playTone]);

  const spawnFood = useCallback(() => {
    const game = gameRef.current;
    if (!game.started || game.paused || game.gameOver) return;

    const snack = SNACKS[game.currentLevel];
    const x = clamp(game.previewX, WALL_PADDING + snack.radius, WIDTH - WALL_PADDING - snack.radius);
    game.foods.push(createFood(nextIdRef.current++, game.currentLevel, x));
    game.currentLevel = game.nextLevel;
    game.nextLevel = createNextLevelIndex();
    triggerFeedback("drop", x, DROP_LINE_Y, snack.fill, game.currentLevel);
    syncUi();
  }, [syncUi, triggerFeedback]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEffects((prev) =>
        prev
          .map((effect) => ({
            ...effect,
            ttl: effect.ttl - 1,
            particles: effect.particles.map((particle) => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vy: particle.vy + 0.04,
              size: particle.size * 0.97,
            })),
          }))
          .filter((effect) => effect.ttl > 0),
      );
    }, 16);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const game = gameRef.current;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        game.previewX = clamp(game.previewX - PREVIEW_STEP, WALL_PADDING + 18, WIDTH - WALL_PADDING - 18);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        game.previewX = clamp(game.previewX + PREVIEW_STEP, WALL_PADDING + 18, WIDTH - WALL_PADDING - 18);
      } else if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!game.started) startGame();
        else if (game.paused) resumeGame();
        else spawnFood();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        if (game.started && !game.gameOver) {
          if (game.paused) resumeGame();
          else pauseGame();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pauseGame, resumeGame, spawnFood, startGame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const movePreview = (clientX) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * WIDTH;
      gameRef.current.previewX = clamp(x, WALL_PADDING + 18, WIDTH - WALL_PADDING - 18);
    };

    const handlePointerMove = (event) => movePreview(event.clientX);
    const handlePointerDown = (event) => {
      const game = gameRef.current;
      if (!game.started) {
        startGame();
        return;
      }
      if (game.paused || game.gameOver) return;
      movePreview(event.clientX);
      spawnFood();
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);

    return () => {
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [spawnFood, startGame]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return undefined;

    let lastTime = performance.now();
    let uiFrame = 0;

    const renderSignboard = () => {
      drawRoundedRect(ctx, 26, 18, WIDTH - 52, 52, 14);
      ctx.fillStyle = "#61361d";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 220, 154, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#ffd66e";
      ctx.font = "900 20px DFKai-SB, 'Microsoft JhengHei', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("夜市小吃攤", WIDTH / 2, 40);

      ctx.font = "700 11px DFKai-SB, 'Microsoft JhengHei', sans-serif";
      ctx.fillStyle = "rgba(255, 236, 205, 0.84)";
      ctx.fillText("總鋪師限定・今晚現做", WIDTH / 2, 58);
    };

    const renderBoard = () => {
      ctx.beginPath();
      ctx.moveTo(24, DROP_LINE_Y);
      ctx.lineTo(WIDTH - 24, DROP_LINE_Y);
      ctx.strokeStyle = "rgba(255, 215, 161, 0.32)";
      ctx.setLineDash([8, 8]);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(26, GAME_OVER_LINE_Y);
      ctx.lineTo(WIDTH - 26, GAME_OVER_LINE_Y);
      ctx.strokeStyle = "rgba(255, 113, 113, 0.46)";
      ctx.setLineDash([10, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "rgba(255, 222, 184, 0.9)";
      ctx.font = "600 11px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("放料線", 28, DROP_LINE_Y - 8);
      ctx.fillStyle = "rgba(255, 166, 166, 0.96)";
      ctx.fillText("爆滿線", 28, GAME_OVER_LINE_Y - 8);

      const game = gameRef.current;
      const previewSnack = SNACKS[game.currentLevel];
      const previewX = clamp(
        game.previewX,
        WALL_PADDING + previewSnack.radius,
        WIDTH - WALL_PADDING - previewSnack.radius,
      );

      ctx.save();
      ctx.globalAlpha = game.gameOver ? 0.35 : 0.95;
      ctx.beginPath();
      ctx.arc(previewX, DROP_LINE_Y, previewSnack.radius, 0, Math.PI * 2);
      ctx.fillStyle = previewSnack.fill;
      ctx.shadowColor = previewSnack.glow;
      ctx.shadowBlur = 22;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = previewSnack.stroke;
      ctx.stroke();
      ctx.restore();

      ctx.font = `${previewSnack.radius + 8}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(previewSnack.emoji, previewX, DROP_LINE_Y + 1);

      game.foods.forEach((food) => {
        const snack = SNACKS[food.level];
        ctx.save();
        const pulse = food.mergedAt > 0 ? 1 + Math.max(0, 180 - food.mergedAt) / 360 : 1;
        ctx.translate(food.x, food.y);
        ctx.scale(pulse, pulse);
        ctx.beginPath();
        ctx.arc(0, 0, food.r, 0, Math.PI * 2);
        ctx.fillStyle = snack.fill;
        ctx.shadowColor = snack.glow;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = snack.stroke;
        ctx.stroke();
        ctx.font = `${food.r + 10}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(snack.emoji, 0, 2);
        ctx.restore();
      });

      ctx.fillStyle = "rgba(255, 245, 228, 0.48)";
      ctx.fillRect(22, HEIGHT - 22, WIDTH - 44, 4);

    };

    const render = () => {
      const game = gameRef.current;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      const bg = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      bg.addColorStop(0, "#2a1639");
      bg.addColorStop(0.35, "#4d2030");
      bg.addColorStop(1, "#a94a2e");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      const lantern = ctx.createRadialGradient(260, 36, 12, 260, 36, 84);
      lantern.addColorStop(0, "rgba(255, 222, 146, 0.86)");
      lantern.addColorStop(1, "rgba(255, 222, 146, 0)");
      ctx.fillStyle = lantern;
      ctx.fillRect(180, -10, 160, 150);

      drawRoundedRect(ctx, 8, 8, WIDTH - 16, HEIGHT - 16, 28);
      ctx.fillStyle = "rgba(28, 14, 32, 0.28)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 235, 214, 0.24)";
      ctx.lineWidth = 2;
      ctx.stroke();

      drawRoundedRect(ctx, 14, 78, WIDTH - 28, HEIGHT - 92, 24);
      const board = ctx.createLinearGradient(0, 80, 0, HEIGHT - 20);
      board.addColorStop(0, "rgba(255, 244, 232, 0.18)");
      board.addColorStop(1, "rgba(116, 53, 35, 0.52)");
      ctx.fillStyle = board;
      ctx.fill();

      renderSignboard();
      renderBoard();

      if (!game.started) {
        ctx.save();
        ctx.fillStyle = "rgba(17, 8, 14, 0.54)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        drawRoundedRect(ctx, 34, 154, WIDTH - 68, 170, 24);
        ctx.fillStyle = "rgba(55, 28, 22, 0.94)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 223, 151, 0.8)";
        ctx.stroke();
        ctx.fillStyle = "#ffd772";
        ctx.font = "900 24px DFKai-SB, 'Microsoft JhengHei', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("開始營業", WIDTH / 2, 198);
        ctx.font = "600 13px sans-serif";
        ctx.fillStyle = "rgba(255, 239, 211, 0.92)";
        ctx.fillText("左右移動小吃位置，讓相同食物一路合成。", WIDTH / 2, 228);
        ctx.fillText("別讓食物堆過爆滿線太久，不然就打烊。", WIDTH / 2, 248);
        ctx.fillText("點一下畫面或按 Space 開始", WIDTH / 2, 278);
        ctx.restore();
      }

      if (game.paused && !game.gameOver) {
        ctx.save();
        ctx.fillStyle = "rgba(17, 8, 14, 0.5)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        drawRoundedRect(ctx, 60, 176, WIDTH - 120, 112, 22);
        ctx.fillStyle = "rgba(48, 26, 21, 0.94)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 223, 151, 0.76)";
        ctx.stroke();
        ctx.fillStyle = "#ffd772";
        ctx.font = "900 22px DFKai-SB, 'Microsoft JhengHei', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("暫停中", WIDTH / 2, 214);
        ctx.font = "600 13px sans-serif";
        ctx.fillStyle = "rgba(255, 239, 211, 0.92)";
        ctx.fillText("按 P 或 Space 繼續擺攤", WIDTH / 2, 246);
        ctx.restore();
      }

      if (game.gameOver) {
        ctx.save();
        ctx.fillStyle = "rgba(21, 10, 14, 0.48)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        drawRoundedRect(ctx, 42, 162, WIDTH - 84, 148, 24);
        ctx.fillStyle = "rgba(48, 26, 21, 0.92)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 221, 159, 0.7)";
        ctx.stroke();
        ctx.fillStyle = "#ffd772";
        ctx.textAlign = "center";
        ctx.font = "900 25px DFKai-SB, 'Microsoft JhengHei', sans-serif";
        ctx.fillText("打烊啦", WIDTH / 2, 206);
        ctx.font = "600 14px sans-serif";
        ctx.fillStyle = "rgba(255, 239, 211, 0.92)";
        ctx.fillText("今天的夜市太熱鬧，攤位已經擠不下了。", WIDTH / 2, 234);
        ctx.font = "800 16px sans-serif";
        ctx.fillText(`💰營收 ${game.score.toLocaleString()}`, WIDTH / 2, 268);
        ctx.fillText(`🏆最佳 ${game.best.toLocaleString()}`, WIDTH / 2, 294);
        ctx.restore();
      }
    };

    const step = (timestamp) => {
      const delta = Math.min(32, timestamp - lastTime);
      lastTime = timestamp;
      const game = gameRef.current;

      if (game.started && !game.paused && !game.gameOver) {
        game.foods.forEach((food) => {
          food.mergedAt = Math.max(0, food.mergedAt - delta);
          food.vy = clamp(food.vy + GRAVITY, -100, MAX_DROP_SPEED);
          food.vx *= AIR_DRAG;
          food.x += food.vx;
          food.y += food.vy;

          if (food.x - food.r < WALL_PADDING) {
            food.x = WALL_PADDING + food.r;
            food.vx *= -0.55;
          }

          if (food.x + food.r > WIDTH - WALL_PADDING) {
            food.x = WIDTH - WALL_PADDING - food.r;
            food.vx *= -0.55;
          }

          if (food.y + food.r > HEIGHT - 24) {
            food.y = HEIGHT - 24 - food.r;
            food.vy *= -BOUNCE;
            food.vx *= 0.95;

          }

          if (Math.abs(food.vy) < 0.06) food.vy = 0;
          if (Math.abs(food.vx) < 0.02) food.vx = 0;
        });

        const merges = [];

        for (let i = 0; i < game.foods.length; i += 1) {
          const a = game.foods[i];
          for (let j = i + 1; j < game.foods.length; j += 1) {
            const b = game.foods[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const distance = Math.hypot(dx, dy) || 0.0001;
            const minDistance = a.r + b.r;

            if (distance < minDistance) {
              const overlap = minDistance - distance;
              const nx = dx / distance;
              const ny = dy / distance;
              const pushX = nx * overlap * 0.5;
              const pushY = ny * overlap * 0.5;

              a.x -= pushX;
              a.y -= pushY;
              b.x += pushX;
              b.y += pushY;

              const relative = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
              if (relative < 0) {
                const impulse = (-(1 + BOUNCE) * relative) / 2;
                a.vx -= impulse * nx;
                a.vy -= impulse * ny;
                b.vx += impulse * nx;
                b.vy += impulse * ny;
              }

              if (
                a.level === b.level &&
                a.level < SNACKS.length - 1 &&
                Math.abs(a.vx) + Math.abs(a.vy) + Math.abs(b.vx) + Math.abs(b.vy) < 6
              ) {
                merges.push([a, b]);
              }
            }
          }
        }

        if (merges.length > 0) {
          const removedIds = new Set();

          merges.forEach(([a, b]) => {
            if (removedIds.has(a.id) || removedIds.has(b.id)) return;

            removedIds.add(a.id);
            removedIds.add(b.id);

            const level = a.level + 1;
            const merged = createFood(nextIdRef.current++, level, (a.x + b.x) / 2);
            merged.y = (a.y + b.y) / 2;
            merged.vx = (a.vx + b.vx) * 0.15;
            merged.vy = -2.8;
            merged.mergedAt = 180;
            game.foods.push(merged);
            game.score += SNACKS[level].score;
            const snack = SNACKS[level];
            game.comboPopups.push({
              id: `${performance.now()}-${nextIdRef.current}-${level}`,
              text: `${snack.name} +${snack.score}`,
              x: merged.x,
              y: merged.y,
              ttl: 46,
              fill: snack.fill,
              bg: snack.tagBg,
              border: snack.tagBorder,
              color: snack.tagText,
              glow: snack.glow,
            });
            triggerFeedback("merge", merged.x, merged.y, SNACKS[level].fill, level);
          });

          game.foods = game.foods.filter((food) => !removedIds.has(food.id));
          saveBestIfNeeded();
        }

        const hasOverflow = game.foods.some(
          (food) =>
            food.y - food.r < GAME_OVER_LINE_Y &&
            timestamp - (food.bornAt || 0) > OVERFLOW_IMMUNITY_MS,
        );

        if (hasOverflow) {
          if (game.topDangerMs <= 0) game.topDangerMs = OVERFLOW_GRACE_MS;
          game.topDangerMs = Math.max(0, game.topDangerMs - delta);
        } else if (game.topDangerMs > 0) {
          game.topDangerMs = 0;
        }

        if (hasOverflow && game.topDangerMs <= 0) {
          game.gameOver = true;
          game.paused = false;
          saveBestIfNeeded();
          triggerFeedback("gameOver", WIDTH / 2, HEIGHT / 2, "#ffd772", 8);
        }

        if (game.comboPopups.length > 0) {
          game.comboPopups = game.comboPopups
            .map((popup) => ({ ...popup, ttl: popup.ttl - 1 }))
            .filter((popup) => popup.ttl > 0);
        }

        uiFrame += 1;
        if (uiFrame % 8 === 0) syncUi();
      }

      render();
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [playTone, saveBestIfNeeded, syncUi, triggerFeedback]);

  useEffect(() => {
    syncUi();
  }, [syncUi]);

  useEffect(
    () => () => {
      if (audioRef.current && typeof audioRef.current.close === "function") {
        audioRef.current.close().catch(() => {});
      }
    },
    [],
  );

  const currentSnack = useMemo(() => SNACKS[ui.currentLevel], [ui.currentLevel]);
  const nextSnack = useMemo(() => SNACKS[ui.nextLevel], [ui.nextLevel]);
  const topSnack = useMemo(() => SNACKS[ui.topLevel], [ui.topLevel]);
  const comboOverlayItems = useMemo(
    () =>
      (ui.comboPopups || []).map((popup, index) => {
        const clampedX = clamp(popup.x, 44, WIDTH - 44);
        const clampedY = clamp(popup.y - index * 18, 132, HEIGHT - 54);
        return {
          ...popup,
          style: {
            left: `calc(50% - ${WIDTH / 2}px + ${clampedX}px)`,
            top: `${8 + clampedY}px`,
            background: popup.bg,
            border: `1px solid ${popup.border}`,
            color: popup.color,
            boxShadow: `0 10px 24px ${popup.glow}, 0 6px 18px rgba(25, 10, 6, 0.16)`,
          },
        };
      }),
    [ui.comboPopups],
  );

  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                返回首頁
              </button>
              <div className="title snackMergeNightFont">台灣小吃合成</div>
              <div className="subtitle">把夜市小吃一路合成，別讓攤位被擠到打烊。</div>
            </div>
            <div className="snackMergeHeaderActions">
              <button className="snackMergeToggle" onClick={toggleAudio} type="button">
                {audioEnabled ? "音效開" : "音效關"}
              </button>
              <div
                className="chip"
                style={{
                  alignSelf: "flex-start",
                  marginTop: 8,
                  background: ui.gameOver
                    ? "rgba(255, 105, 97, 0.18)"
                    : ui.paused
                      ? "rgba(152, 188, 255, 0.18)"
                      : "rgba(255, 185, 95, 0.18)",
                  color: ui.gameOver
                    ? "rgba(150, 43, 37, 0.94)"
                    : ui.paused
                      ? "rgba(46, 80, 152, 0.94)"
                      : "rgba(129, 74, 12, 0.94)",
                  border: ui.gameOver
                    ? "1px solid rgba(255, 105, 97, 0.32)"
                    : ui.paused
                      ? "1px solid rgba(152, 188, 255, 0.32)"
                      : "1px solid rgba(255, 185, 95, 0.32)",
                  fontWeight: 900,
                }}
              >
                {ui.gameOver ? "已打烊" : ui.paused ? "暫停中" : "營業中"}
              </div>
            </div>
          </div>
        </header>

        <main className="content">
          <section className="card hero snackMergeHero">

            <div className="snackMergeHeroBanner">
              <span>今晚主打</span>
              <strong>夜市人氣合成攤</strong>
              <span>越貴越大顆</span>
            </div>

            <div className="heroRow">
              <div>
                <div className="label">目前分數</div>
                <div className="big">{ui.score.toLocaleString()}</div>
              </div>
              <div className="pill snackMergeWoodPill">
                <div className="pillTop">最高分</div>
                <div className="pillBottom">{ui.best.toLocaleString()}</div>
              </div>
            </div>

            <div className="grid2">
              <div className="mini snackMergeWoodMini">
                <div className="label">目前小吃</div>
                <div className="value">
                  {currentSnack.emoji} {currentSnack.name}
                </div>
              </div>
              <div className="mini snackMergeWoodMini">
                <div className="label">下一個</div>
                <div className="value">
                  {nextSnack.emoji} {nextSnack.name}
                </div>
              </div>
              <div className="mini snackMergeWoodMini">
                <div className="label">目前最高級</div>
                <div className="value">
                  {topSnack.emoji} {topSnack.name}
                </div>
              </div>
              <div className="mini snackMergeWoodMini">
                <div className="label">操作提示</div>
                <div className="hint">點擊放料，左右移動位置，按 P 可暫停。</div>
              </div>
            </div>
          </section>

          <section className="card snackMergeNightCard">
            <div className="sectionTitle snackMergeNightTitle snackMergeNightFont">遊戲區</div>
            <div className="snackMergeBoard" ref={wrapRef}>
              <canvas
                ref={canvasRef}
                width={WIDTH}
                height={HEIGHT}
                className="snackMergeCanvas"
              />
              <div
                style={{
                  position: "absolute",
                  top: -35,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 6,
                  zIndex: 6,
                }}
                onPointerDown={(event) => event.stopPropagation()}
              >
                {!ui.started ? (
                  <button
                    type="button"
                    onClick={startGame}
                    aria-label="開始"
                    title="開始"
                    style={{
                      border: "1px solid rgba(255, 215, 156, 0.7)",
                      background: "linear-gradient(180deg, rgba(255, 183, 87, 0.92), rgba(214, 120, 34, 0.9))",
                      color: "#3d1f0f",
                      fontWeight: 900,
                      fontSize: 15,
                      lineHeight: 1,
                      borderRadius: 999,
                      width: 34,
                      height: 34,
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    ▶
                  </button>
                ) : ui.paused ? (
                  <button
                    type="button"
                    onClick={resumeGame}
                    aria-label="繼續"
                    title="繼續"
                    style={{
                      border: "1px solid rgba(181, 214, 255, 0.7)",
                      background: "linear-gradient(180deg, rgba(170, 210, 255, 0.92), rgba(81, 128, 194, 0.9))",
                      color: "#10243f",
                      fontWeight: 900,
                      fontSize: 15,
                      lineHeight: 1,
                      borderRadius: 999,
                      width: 34,
                      height: 34,
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    ⏵
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={pauseGame}
                    aria-label="暫停"
                    title="暫停"
                    style={{
                      border: "1px solid rgba(255, 219, 173, 0.7)",
                      background: "linear-gradient(180deg, rgba(255, 224, 177, 0.92), rgba(203, 137, 64, 0.9))",
                      color: "#4c2811",
                      fontWeight: 900,
                      fontSize: 15,
                      lineHeight: 1,
                      borderRadius: 999,
                      width: 34,
                      height: 34,
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    ⏸
                  </button>
                )}
                <button
                  type="button"
                  onClick={resetGame}
                  aria-label="重置"
                  title="重置"
                  style={{
                    border: "1px solid rgba(255, 170, 170, 0.72)",
                    background: "linear-gradient(180deg, rgba(255, 156, 156, 0.94), rgba(196, 76, 76, 0.9))",
                    color: "#4a1313",
                    fontWeight: 900,
                    fontSize: 15,
                    lineHeight: 1,
                    borderRadius: 999,
                    width: 34,
                    height: 34,
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                  }}
                >
                  ↺
                </button>
              </div>
              <div className="snackMergeLantern snackMergeLanternLeft" />
              <div className="snackMergeLantern snackMergeLanternRight" />
              <div className="snackMergeSteam snackMergeSteamA" />
              <div className="snackMergeSteam snackMergeSteamB" />
              <div className="snackMergeSteam snackMergeSteamC" />
              {effects.map((effect) => (
                <div
                  key={effect.id}
                  className="snackMergeBurst"
                  style={{ left: effect.x, top: effect.y }}
                >
                  {effect.particles.map((particle, index) => (
                    <span
                      key={`${effect.id}-${index}`}
                      className="snackMergeParticle"
                      style={{
                        left: particle.x - effect.x,
                        top: particle.y - effect.y,
                        width: particle.size,
                        height: particle.size,
                        background: effect.color,
                        opacity: effect.ttl / 24,
                      }}
                    />
                  ))}
                </div>
              ))}
              {comboOverlayItems.map((popup) => (
                <div
                  key={popup.id}
                  className="snackMergeComboOverlay"
                  style={popup.style}
                >
                  {popup.text}
                </div>
              ))}
            </div>
            <div className="snackMergeLegend">
              <span>{SNACKS[0].emoji} 最平價小吃</span>
              <span>{SNACKS[SNACKS.length - 1].emoji} 最高價招牌餐</span>
            </div>
          </section>

          <section className="card snackMergeNightCard">
            <div className="sectionTitle snackMergeNightTitle snackMergeNightFont">小吃價目表</div>
            <div className="snackMergeTrack">
              {SNACKS.map((snack, index) => (
                <div className="snackMergeStep" key={snack.name}>
                  <div className="snackMergeEmoji">{snack.emoji}</div>
                  <div className="snackMergeMeta">
                    <strong>{snack.name}</strong>
                    <span>Lv.{index + 1}</span>
                  </div>
                  <div
                    className="snackMergePriceTag"
                    style={{
                      background: snack.tagBg,
                      border: `1px solid ${snack.tagBorder}`,
                      color: snack.tagText,
                    }}
                  >
                    NT$ {snack.price}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="spacer" />
        </main>
      </div>
    </div>
  );
}

