import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBirdType } from "./angry/birds";
import { getLevelConfig, LEVELS, MATERIALS } from "./angry/levels";
import "./AngryBirdLike.css";

const GRAVITY = 980;
const AIR_DRAG = 0.998;
const GROUND_FRICTION = 0.86;
const LAUNCH_MULT = 10.5;
const BIRD_RESTITUTION = 0.42;
const BLOCK_RESTITUTION = 0.12;
const TRAIL_INTERVAL = 0.03;
const EXPLOSION_RADIUS = 150;
const TNT_RADIUS = 170;
const FREEZE_RADIUS = 180;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function vecLen(x, y) {
  return Math.hypot(x, y);
}

function normalize(x, y) {
  const l = vecLen(x, y) || 1;
  return { x: x / l, y: y / l };
}

function rotateVec(vx, vy, deg) {
  const r = (deg * Math.PI) / 180;
  return {
    x: vx * Math.cos(r) - vy * Math.sin(r),
    y: vx * Math.sin(r) + vy * Math.cos(r),
  };
}

function circleRectCollision(circle, rect) {
  const cx = clamp(circle.x, rect.x - rect.w / 2, rect.x + rect.w / 2);
  const cy = clamp(circle.y, rect.y - rect.h / 2, rect.y + rect.h / 2);
  const dx = circle.x - cx;
  const dy = circle.y - cy;
  const d2 = dx * dx + dy * dy;
  if (d2 > circle.r * circle.r) return null;
  const d = Math.sqrt(d2) || 0.0001;
  const nx = dx / d;
  const ny = dy / d;
  return { nx, ny, overlap: circle.r - d, pointX: cx, pointY: cy };
}

function circleCircleCollision(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.hypot(dx, dy) || 0.0001;
  const overlap = a.r + b.r - d;
  if (overlap <= 0) return null;
  return { nx: dx / d, ny: dy / d, overlap };
}

function createAudioEngine() {
  let ctx = null;
  const getCtx = () => {
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
        ctx = null;
      }
    }
    if (ctx?.state === "suspended") ctx.resume();
    return ctx;
  };

  const tone = (freq, time, type = "sine", gain = 0.15, glide = null) => {
    const c = getCtx();
    if (!c) return;
    const t = c.currentTime + time;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + 0.16);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    o.connect(g);
    g.connect(c.destination);
    o.start(t);
    o.stop(t + 0.2);
  };

  return {
    launch() {
      tone(220, 0, "triangle", 0.18, 550);
    },
    hit(power = 1) {
      tone(140 + Math.min(260, power * 0.12), 0, "square", 0.08 + Math.min(0.12, power * 0.00006));
    },
    split() {
      tone(610, 0, "sine", 0.12);
      tone(910, 0.05, "sine", 0.1);
    },
    dash() {
      tone(300, 0, "sawtooth", 0.16, 900);
    },
    boom() {
      tone(80, 0, "square", 0.2, 40);
      tone(150, 0.03, "sawtooth", 0.16, 50);
    },
    win() {
      tone(520, 0, "sine", 0.1);
      tone(680, 0.07, "sine", 0.1);
      tone(860, 0.14, "sine", 0.1);
    },
    lose() {
      tone(300, 0, "triangle", 0.12);
      tone(200, 0.08, "triangle", 0.12);
      tone(120, 0.16, "triangle", 0.12);
    },
  };
}

function initLevel(levelIndex) {
  const cfg = getLevelConfig(levelIndex);
  const blocks = cfg.blocks.map((b, idx) => ({
    id: `b${idx}`,
    x: b.x,
    y: b.y,
    w: b.w,
    h: b.h,
    vx: 0,
    vy: 0,
    hp: b.hp,
    maxHp: b.hp,
    material: b.material,
    mass: MATERIALS[b.material].mass * (b.w * b.h) / 2200,
    alive: true,
  }));

  const targets = cfg.targets.map((t, idx) => ({
    id: `t${idx}`,
    x: t.x,
    y: t.y,
    vx: 0,
    vy: 0,
    r: t.r,
    hp: t.hp,
    maxHp: t.hp,
    alive: true,
  }));
  const props = (cfg.props ?? []).map((p, idx) => ({
    id: `pr${idx}`,
    ...p,
    alive: true,
    cooldown: 0,
  }));

  return {
    cfg,
    queue: [...cfg.birds],
    blocks,
    targets,
    props,
    projectiles: [],
    particles: [],
    floaters: [],
    blasts: [],
    score: 0,
    launched: false,
    settleClock: 0,
    activeType: null,
    cloudDrift: 0,
    trailClock: 0,
    comboWindow: 0,
    comboChain: 0,
    birdsFired: 0,
    levelStartedAt: Date.now(),
  };
}

function spawnBird(world) {
  if (!world.queue.length) return false;
  const id = world.queue.shift();
  const type = getBirdType(id);
  world.activeType = id;
  world.projectiles = [
    {
      id: `p-${Date.now()}`,
      x: world.cfg.sling.x,
      y: world.cfg.sling.y,
      vx: 0,
      vy: 0,
      r: type.radius,
      typeId: id,
      launchedAt: 0,
      abilityUsed: false,
      alive: true,
      exploded: false,
      splitChild: false,
      pierceTimer: 0,
      heavyTimer: 0,
      magnetTimer: 0,
      homingTimer: 0,
      isEgg: false,
    },
  ];
  world.launched = false;
  return true;
}

function addParticles(world, x, y, color, count = 16, speed = 240) {
  for (let i = 0; i < count; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const s = speed * (0.3 + Math.random() * 0.8);
    world.particles.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: 0.3 + Math.random() * 0.35,
      ttl: 0.3 + Math.random() * 0.35,
      size: 2 + Math.random() * 4,
      color,
    });
  }
}

function explodeAt(world, x, y, radius, damageBase, particleColor = "#ff7f6a") {
  world.blasts.push({ x, y, r: 10, life: 0.5, ttl: 0.5 });
  addParticles(world, x, y, particleColor, 30, 360);
  for (const block of world.blocks) {
    if (!block.alive) continue;
    const dx = block.x - x;
    const dy = block.y - y;
    const d = Math.hypot(dx, dy);
    if (d > radius) continue;
    const strength = 1 - d / radius;
    const n = normalize(dx, dy);
    block.vx += n.x * 760 * strength / block.mass;
    block.vy += n.y * 760 * strength / block.mass;
    block.hp -= damageBase * strength;
  }
  for (const target of world.targets) {
    if (!target.alive) continue;
    const dx = target.x - x;
    const dy = target.y - y;
    const d = Math.hypot(dx, dy);
    if (d > radius + target.r) continue;
    const strength = 1 - d / (radius + target.r);
    const n = normalize(dx, dy);
    target.vx += n.x * 760 * strength;
    target.vy += n.y * 820 * strength;
    target.hp -= damageBase * 1.15 * strength;
  }
}

function addFloater(world, x, y, text, color = "#ffffff", size = 22) {
  world.floaters.push({
    x,
    y,
    text,
    color,
    size,
    life: 0.9,
    ttl: 0.9,
    vy: -52,
  });
}

function awardScore(world, base, x, y) {
  if (world.comboWindow > 0) {
    world.comboChain += 1;
  } else {
    world.comboChain = 1;
  }
  world.comboWindow = 1.2;
  const comboBonus = 1 + Math.min(0.6, (world.comboChain - 1) * 0.12);
  const gained = Math.round(base * comboBonus);
  world.score += gained;
  addFloater(world, x, y, `+${gained}`, "#fff1a8", 20);
  if (world.comboChain >= 2) {
    addFloater(world, x, y - 18, `連擊 x${world.comboChain}`, "#9ff8cb", 17);
  }
}

function drawProps(ctx, world) {
  for (const prop of world.props) {
    if (!prop.alive) continue;
    if (prop.type === "spring") {
      ctx.fillStyle = "rgba(102, 185, 255, 0.95)";
      ctx.fillRect(prop.x - prop.w / 2, prop.y - prop.h / 2, prop.w, prop.h);
      ctx.strokeStyle = "rgba(24, 80, 132, 0.95)";
      ctx.lineWidth = 2;
      ctx.strokeRect(prop.x - prop.w / 2, prop.y - prop.h / 2, prop.w, prop.h);
      for (let i = 0; i < 5; i += 1) {
        const x = prop.x - prop.w / 2 + 8 + i * ((prop.w - 16) / 4);
        ctx.beginPath();
        ctx.moveTo(x - 4, prop.y + 3);
        ctx.lineTo(x, prop.y - 3);
        ctx.lineTo(x + 4, prop.y + 3);
        ctx.stroke();
      }
    } else if (prop.type === "tnt") {
      ctx.fillStyle = "rgba(235, 72, 58, 0.96)";
      ctx.fillRect(prop.x - prop.w / 2, prop.y - prop.h / 2, prop.w, prop.h);
      ctx.strokeStyle = "rgba(90, 22, 18, 0.8)";
      ctx.lineWidth = 2;
      ctx.strokeRect(prop.x - prop.w / 2, prop.y - prop.h / 2, prop.w, prop.h);
      ctx.fillStyle = "rgba(255, 246, 220, 0.95)";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("TNT", prop.x, prop.y + 4);
    }
  }
}

function separateTargetFromBlocks(target, blocks, groundY, passes = 4, padding = 0) {
  for (let pass = 0; pass < passes; pass += 1) {
    let moved = false;
    for (const block of blocks) {
      if (!block.alive) continue;
      const col = circleRectCollision({ x: target.x, y: target.y, r: target.r + padding }, block);
      if (!col) continue;
      target.x += col.nx * (col.overlap + 0.6);
      target.y += col.ny * (col.overlap + 0.6);
      moved = true;
    }
    if (target.y + target.r > groundY) {
      target.y = groundY - target.r;
      moved = true;
    }
    if (!moved) break;
  }
}

function formatDuration(ms) {
  const safeMs = Math.max(0, ms || 0);
  const totalSec = Math.floor(safeMs / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getStarRating({ birdsFired, totalBirds, score, blocksCount, clearMs }) {
  let stars = 1;
  const efficientShots = birdsFired <= Math.max(2, Math.floor(totalBirds * 0.65));
  const fastClear = clearMs <= 35000;
  const scoreGate = score >= blocksCount * 220 + 5200;
  if (efficientShots) stars += 1;
  if (fastClear && scoreGate) stars += 1;
  return clamp(stars, 1, 3);
}

export default function AngryBirdLike() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const worldRef = useRef(initLevel(0));
  const phaseRef = useRef("ready");
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const pointerRef = useRef({ dragging: false, x: 0, y: 0 });
  const audioRef = useRef(null);
  const feedbackRef = useRef({ shake: 0, hitSlow: 0, flash: 0 });
  const pausedRef = useRef(false);
  const speedRef = useRef(1);
  const [phase, setPhase] = useState("ready");
  const [hud, setHud] = useState({
    score: 0,
    level: 1,
    birdsLeft: 0,
    birdName: "衝鋒鳥",
    ability: "無主動技能",
    targetsLeft: 0,
    combo: 0,
  });
  const [paused, setPaused] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(1);
  const [aimInfo, setAimInfo] = useState({ active: false, power: 0, angle: 0 });
  const [mobileLandscape, setMobileLandscape] = useState(false);
  const [mobileSettingsOpen, setMobileSettingsOpen] = useState(false);
  const [campaignSummary, setCampaignSummary] = useState({
    startedAt: Date.now(),
    completedAt: null,
    levelScores: Array(LEVELS.length).fill(0),
    levelStars: Array(LEVELS.length).fill(0),
  });

  const setPhaseSafe = useCallback((next) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const applySpeed = useCallback((nextSpeed) => {
    const safe = clamp(nextSpeed, 0.6, 1.4);
    speedRef.current = safe;
    setGameSpeed(safe);
  }, []);

  const togglePause = useCallback(() => {
    const next = !pausedRef.current;
    pausedRef.current = next;
    setPaused(next);
  }, []);

  const triggerImpactFeedback = useCallback((power, vibrate = false) => {
    const f = feedbackRef.current;
    const shakeAdd = Math.min(10, 1.2 + power * 0.012);
    f.shake = Math.max(f.shake, shakeAdd);
    if (power > 150) f.hitSlow = Math.max(f.hitSlow, 0.045);
    f.flash = Math.max(f.flash, Math.min(0.2, power * 0.0006));
    if (vibrate && power > 180 && navigator.vibrate) {
      navigator.vibrate(18);
    }
  }, []);

  const syncHud = useCallback(() => {
    const world = worldRef.current;
    const type = getBirdType(world.activeType);
    setHud({
      score: Math.max(0, Math.round(world.score)),
      level: LEVELS.findIndex((v) => v.id === world.cfg.id) + 1,
      birdsLeft: world.queue.length + (world.launched ? 0 : 1),
      birdName: type.name,
      ability: type.abilityLabel,
      targetsLeft: world.targets.filter((t) => t.alive).length,
      combo: world.comboChain,
    });
  }, []);

  const resetLevel = useCallback((index, options = {}) => {
    const targetLevel = clamp(index, 0, LEVELS.length - 1);
    const w = initLevel(targetLevel);
    for (const target of w.targets) {
      separateTargetFromBlocks(target, w.blocks, w.cfg.groundY, 6, 2);
    }
    spawnBird(w);
    worldRef.current = w;
    if (options.newCampaign) {
      setCampaignSummary({
        startedAt: Date.now(),
        completedAt: null,
        levelScores: Array(LEVELS.length).fill(0),
        levelStars: Array(LEVELS.length).fill(0),
      });
    }
    pointerRef.current.dragging = false;
    setAimInfo({ active: false, power: 0, angle: 0 });
    pausedRef.current = false;
    setPaused(false);
    setPhaseSafe("ready");
    syncHud();
  }, [setPhaseSafe, syncHud]);

  const nextLevel = useCallback(() => {
    const current = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
    const next = Math.min(current + 1, LEVELS.length - 1);
    resetLevel(next);
  }, [resetLevel]);

  const resolveTurnEnd = useCallback(() => {
    const world = worldRef.current;
    world.comboWindow = 0;
    world.comboChain = 0;
    const targetsLeft = world.targets.some((t) => t.alive);
    if (!targetsLeft) {
      audioRef.current?.win();
      const current = LEVELS.findIndex((v) => v.id === world.cfg.id);
      const clearMs = Date.now() - world.levelStartedAt;
      const stars = getStarRating({
        birdsFired: world.birdsFired,
        totalBirds: world.cfg.birds.length,
        score: Math.round(world.score),
        blocksCount: world.cfg.blocks.length,
        clearMs,
      });
      setCampaignSummary((prev) => {
        const nextScores = [...prev.levelScores];
        const nextStars = [...prev.levelStars];
        nextScores[current] = Math.max(nextScores[current], Math.round(world.score));
        nextStars[current] = Math.max(nextStars[current], stars);
        return {
          ...prev,
          levelScores: nextScores,
          levelStars: nextStars,
          completedAt: current === LEVELS.length - 1 ? Date.now() : prev.completedAt,
        };
      });
      setPhaseSafe(current === LEVELS.length - 1 ? "campaignWon" : "won");
      syncHud();
      return;
    }
    const hasNext = spawnBird(world);
    if (hasNext) {
      setPhaseSafe("ready");
    } else {
      audioRef.current?.lose();
      setPhaseSafe("lost");
    }
    syncHud();
  }, [setPhaseSafe, syncHud]);

  const triggerAbility = useCallback(() => {
    const world = worldRef.current;
    if (!world.launched || phaseRef.current !== "flying") return;
    const bird = world.projectiles.find((p) => p.alive && !p.splitChild);
    if (!bird || bird.abilityUsed) return;
    const type = bird.typeId;
    bird.abilityUsed = true;

    if (type === "split") {
      const p1 = rotateVec(bird.vx, bird.vy, -16);
      const p2 = rotateVec(bird.vx, bird.vy, 16);
      world.projectiles.push(
        {
          ...bird,
          id: `${bird.id}-s1`,
          vx: p1.x * 0.96,
          vy: p1.y * 0.96,
          x: bird.x,
          y: bird.y,
          splitChild: true,
        },
        {
          ...bird,
          id: `${bird.id}-s2`,
          vx: p2.x * 0.96,
          vy: p2.y * 0.96,
          x: bird.x,
          y: bird.y,
          splitChild: true,
        },
      );
      addParticles(world, bird.x, bird.y, "#8cb5ff", 20, 260);
      audioRef.current?.split();
    } else if (type === "dash") {
      const n = normalize(bird.vx, bird.vy);
      bird.vx += n.x * 520;
      bird.vy += n.y * 520;
      addParticles(world, bird.x, bird.y, "#ffe27b", 22, 290);
      audioRef.current?.dash();
    } else if (type === "bomb") {
      bird.exploded = true;
      explodeAt(world, bird.x, bird.y, EXPLOSION_RADIUS, 170);
      bird.alive = false;
      audioRef.current?.boom();
    } else if (type === "boomerang") {
      const back = normalize(world.cfg.sling.x - bird.x, world.cfg.sling.y - bird.y - 30);
      const speed = Math.max(420, vecLen(bird.vx, bird.vy) * 0.92);
      bird.vx = back.x * speed;
      bird.vy = back.y * speed;
      addParticles(world, bird.x, bird.y, "#8ce4b0", 20, 260);
      audioRef.current?.dash();
    } else if (type === "pierce") {
      bird.pierceTimer = 1.15;
      addParticles(world, bird.x, bird.y, "#e6eeff", 20, 240);
      audioRef.current?.dash();
    } else if (type === "hammer") {
      bird.heavyTimer = 1.5;
      bird.vy += 260;
      addParticles(world, bird.x, bird.y, "#e3bf8f", 20, 240);
      audioRef.current?.hit(260);
    } else if (type === "freeze") {
      world.blasts.push({ x: bird.x, y: bird.y, r: 10, life: 0.45, ttl: 0.45 });
      for (const block of world.blocks) {
        if (!block.alive) continue;
        const d = vecLen(block.x - bird.x, block.y - bird.y);
        if (d > FREEZE_RADIUS) continue;
        const strength = 1 - d / FREEZE_RADIUS;
        block.hp -= 48 * strength;
        block.frozen = 1.8;
      }
      for (const target of world.targets) {
        if (!target.alive) continue;
        const d = vecLen(target.x - bird.x, target.y - bird.y);
        if (d > FREEZE_RADIUS + target.r) continue;
        const strength = 1 - d / (FREEZE_RADIUS + target.r);
        target.hp -= 42 * strength;
        target.vx *= 0.75;
        target.vy *= 0.75;
      }
      addParticles(world, bird.x, bird.y, "#c9f3ff", 30, 300);
      audioRef.current?.split();
    } else if (type === "magnet") {
      bird.magnetTimer = 1.35;
      addParticles(world, bird.x, bird.y, "#ddc9ff", 24, 260);
      audioRef.current?.dash();
    } else if (type === "guide") {
      bird.homingTimer = 2.1;
      addParticles(world, bird.x, bird.y, "#ffffff", 22, 250);
      audioRef.current?.split();
    } else if (type === "egg") {
      const egg = {
        id: `${bird.id}-egg`,
        x: bird.x,
        y: bird.y + bird.r * 0.6,
        vx: bird.vx * 0.45,
        vy: Math.max(120, bird.vy * 0.2),
        r: 12,
        typeId: "egg",
        launchedAt: performance.now(),
        abilityUsed: true,
        alive: true,
        exploded: false,
        splitChild: true,
        pierceTimer: 0,
        heavyTimer: 0,
        magnetTimer: 0,
        homingTimer: 0,
        isEgg: true,
      };
      world.projectiles.push(egg);
      bird.vx *= 0.82;
      bird.vy = -Math.max(320, Math.abs(bird.vy) * 0.55 + 180);
      addParticles(world, bird.x, bird.y, "#ffd9cf", 24, 250);
      audioRef.current?.split();
    }
  }, []);

  useEffect(() => {
    audioRef.current = createAudioEngine();
    resetLevel(0, { newCampaign: true });
    const prevOverflowX = document.body.style.overflowX;
    const prevOverflowY = document.body.style.overflowY;
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowX = prevOverflowX;
      document.body.style.overflowY = prevOverflowY;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resetLevel]);

  useEffect(() => {
    const check = () => {
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const landscape = coarse && window.innerWidth > window.innerHeight;
      setMobileLandscape(landscape);
      if (!landscape) setMobileSettingsOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  const onPointerDown = useCallback((event) => {
    if (pausedRef.current) return;
    const world = worldRef.current;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const sx = world.cfg.stageWidth / rect.width;
    const sy = world.cfg.stageHeight / rect.height;
    const x = (event.clientX - rect.left) * sx;
    const y = (event.clientY - rect.top) * sy;

    if (phaseRef.current === "flying") {
      triggerAbility();
      return;
    }
    if (phaseRef.current !== "ready") return;
    const bird = world.projectiles.find((p) => p.alive);
    if (!bird || world.launched) return;
    const d = vecLen(x - bird.x, y - bird.y);
    if (d > bird.r + 20) return;
    pointerRef.current = { dragging: true, x, y };
    setAimInfo({ active: true, power: 0, angle: 0 });
    canvasRef.current?.setPointerCapture?.(event.pointerId);
  }, [triggerAbility]);

  const onPointerMove = useCallback((event) => {
    const world = worldRef.current;
    if (pausedRef.current) return;
    if (!pointerRef.current.dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const sx = world.cfg.stageWidth / rect.width;
    const sy = world.cfg.stageHeight / rect.height;
    const x = (event.clientX - rect.left) * sx;
    const y = (event.clientY - rect.top) * sy;
    pointerRef.current.x = x;
    pointerRef.current.y = y;

    const bird = world.projectiles.find((p) => p.alive);
    if (!bird) return;
    // Limit drag to the sling's back side so release always shoots forward.
    const dx = Math.min(x - world.cfg.sling.x, -8);
    const dy = clamp(y - world.cfg.sling.y, -92, 92);
    const dist = vecLen(dx, dy);
    const maxPull = world.cfg.sling.maxPull;
    const powerRatio = clamp(dist / maxPull, 0, 1);
    const angleDeg = Math.round((-Math.atan2(dy, -dx) * 180) / Math.PI);
    setAimInfo({ active: true, power: powerRatio, angle: angleDeg });
    if (dist <= maxPull) {
      bird.x = world.cfg.sling.x + dx;
      bird.y = world.cfg.sling.y + dy;
      return;
    }
    const n = normalize(dx, dy);
    bird.x = world.cfg.sling.x + n.x * maxPull;
    bird.y = world.cfg.sling.y + n.y * maxPull;
  }, []);

  const onPointerUp = useCallback((event) => {
    const world = worldRef.current;
    if (!pointerRef.current.dragging) return;
    pointerRef.current.dragging = false;
    setAimInfo({ active: false, power: 0, angle: 0 });
    canvasRef.current?.releasePointerCapture?.(event.pointerId);
    const bird = world.projectiles.find((p) => p.alive);
    if (!bird) return;
    if (pausedRef.current) {
      bird.x = world.cfg.sling.x;
      bird.y = world.cfg.sling.y;
      return;
    }
    const pullX = world.cfg.sling.x - bird.x;
    const pullY = world.cfg.sling.y - bird.y;
    const power = vecLen(pullX, pullY);
    if (power < 12) {
      bird.x = world.cfg.sling.x;
      bird.y = world.cfg.sling.y;
      return;
    }
    bird.vx = pullX * LAUNCH_MULT;
    bird.vy = pullY * LAUNCH_MULT;
    bird.launchedAt = performance.now();
    world.launched = true;
    world.birdsFired += 1;
    setPhaseSafe("flying");
    audioRef.current?.launch();
    syncHud();
  }, [setPhaseSafe, syncHud]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const update = (dtRaw) => {
      const world = worldRef.current;
      const f = feedbackRef.current;
      const speed = speedRef.current;
      const dtBase = dtRaw * speed;
      const dt = f.hitSlow > 0 ? dtBase * 0.35 : dtBase;
      f.hitSlow = Math.max(0, f.hitSlow - dtRaw);
      f.shake = Math.max(0, f.shake - dtRaw * 18);
      f.flash = Math.max(0, f.flash - dtRaw * 2.8);
      if (pausedRef.current) return;
      world.cloudDrift += dt * 24;
      world.comboWindow = Math.max(0, world.comboWindow - dt);
      if (world.comboWindow <= 0) world.comboChain = 0;
      const isFlying = phaseRef.current === "flying";
      const simulateWorld = isFlying || phaseRef.current === "ready";
      const applyDamage = world.launched;

      for (const p of world.particles) {
        p.life -= dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.96;
        p.vy = p.vy * 0.96 + 180 * dt;
      }
      world.particles = world.particles.filter((p) => p.life > 0);
      for (const fText of world.floaters) {
        fText.life -= dt;
        fText.y += fText.vy * dt;
      }
      world.floaters = world.floaters.filter((fText) => fText.life > 0);

      for (const b of world.blasts) {
        b.life -= dt;
        b.r += 440 * dt;
      }
      world.blasts = world.blasts.filter((b) => b.life > 0);
      for (const prop of world.props) {
        if (!prop.alive) continue;
        prop.cooldown = Math.max(0, prop.cooldown - dt);
      }
      for (const block of world.blocks) {
        if (!block.alive) continue;
        block.frozen = Math.max(0, (block.frozen ?? 0) - dt);
      }

      if (!simulateWorld) return;

      const groundY = world.cfg.groundY;
      if (isFlying) {
        const aliveProjectiles = [];
        world.trailClock += dt;
        for (const bird of world.projectiles) {
          if (!bird.alive) continue;
          bird.pierceTimer = Math.max(0, (bird.pierceTimer ?? 0) - dt);
          bird.heavyTimer = Math.max(0, (bird.heavyTimer ?? 0) - dt);
          bird.magnetTimer = Math.max(0, (bird.magnetTimer ?? 0) - dt);
          bird.homingTimer = Math.max(0, (bird.homingTimer ?? 0) - dt);

          if (bird.heavyTimer > 0) {
            bird.vy += GRAVITY * dt * 0.9;
          }
          if (bird.homingTimer > 0) {
            const target = world.targets
              .filter((t) => t.alive)
              .sort((a, b) => vecLen(a.x - bird.x, a.y - bird.y) - vecLen(b.x - bird.x, b.y - bird.y))[0];
            if (target) {
              const n = normalize(target.x - bird.x, target.y - bird.y);
              bird.vx += n.x * 380 * dt;
              bird.vy += n.y * 380 * dt;
            }
          }
          if (bird.magnetTimer > 0) {
            for (const block of world.blocks) {
              if (!block.alive) continue;
              const dx = bird.x - block.x;
              const dy = bird.y - block.y;
              const d = vecLen(dx, dy);
              if (d > 260 || d < 8) continue;
              const n = normalize(dx, dy);
              const pull = (1 - d / 260) * 220;
              block.vx += (n.x * pull * dt) / block.mass;
              block.vy += (n.y * pull * dt) / block.mass;
            }
            for (const prop of world.props) {
              if (!prop.alive || prop.type !== "tnt") continue;
              const dx = bird.x - prop.x;
              const dy = bird.y - prop.y;
              const d = vecLen(dx, dy);
              if (d > 250 || d < 10) continue;
              const n = normalize(dx, dy);
              const pull = (1 - d / 250) * 120 * dt;
              prop.x += n.x * pull;
              prop.y += n.y * pull;
            }
          }

          bird.vy += GRAVITY * dt;
          bird.vx *= AIR_DRAG;
          bird.vy *= AIR_DRAG;
          bird.x += bird.vx * dt;
          bird.y += bird.vy * dt;

          if (world.trailClock > TRAIL_INTERVAL) {
            const type = getBirdType(bird.typeId);
            world.particles.push({
              x: bird.x,
              y: bird.y,
              vx: (Math.random() - 0.5) * 30,
              vy: (Math.random() - 0.5) * 30,
              life: 0.22,
              ttl: 0.22,
              size: 2 + Math.random() * 2,
              color: type.trail,
            });
          }

          if (bird.y + bird.r > groundY) {
            if (bird.isEgg) {
              bird.alive = false;
              explodeAt(world, bird.x, groundY - 10, EXPLOSION_RADIUS * 0.92, 170, "#ffb8a2");
              audioRef.current?.boom();
              triggerImpactFeedback(300, true);
              continue;
            }
            bird.y = groundY - bird.r;
            bird.vy *= -BIRD_RESTITUTION;
            bird.vx *= GROUND_FRICTION;
          }

          if (bird.x < -180 || bird.x > world.cfg.stageWidth + 200 || bird.y > world.cfg.stageHeight + 220) {
            bird.alive = false;
            continue;
          }

          for (const block of world.blocks) {
            if (!block.alive) continue;
            const col = circleRectCollision({ x: bird.x, y: bird.y, r: bird.r }, block);
            if (!col) continue;
            if (bird.isEgg) {
              bird.alive = false;
              explodeAt(world, bird.x, bird.y, EXPLOSION_RADIUS * 0.92, 172, "#ffb8a2");
              audioRef.current?.boom();
              triggerImpactFeedback(280, true);
              break;
            }
            const pierceWood = bird.pierceTimer > 0 && block.material === "wood";
            if (pierceWood) {
              const impact = vecLen(bird.vx, bird.vy) * 0.46;
              block.hp -= impact;
              bird.vx *= 0.995;
              bird.vy *= 0.995;
              addParticles(world, col.pointX, col.pointY, "#dfad74", 8, 220);
              continue;
            }
            bird.x += col.nx * col.overlap;
            bird.y += col.ny * col.overlap;
            const vn = bird.vx * col.nx + bird.vy * col.ny;
            if (vn < 0) {
              const restitution = bird.heavyTimer > 0 ? BIRD_RESTITUTION * 0.45 : BIRD_RESTITUTION;
              bird.vx -= (1 + restitution) * vn * col.nx;
              bird.vy -= (1 + restitution) * vn * col.ny;
            }
            const impact = Math.abs(vn);
            block.vx += col.nx * impact * 0.45 / block.mass;
            block.vy += col.ny * impact * 0.4 / block.mass;
            const heavyBonus = bird.heavyTimer > 0 ? 1.7 : 1;
            const frozenBonus = block.frozen > 0 ? 1.35 : 1;
            const damage = impact * (block.material === "wood" ? 0.3 : 0.18) * heavyBonus * frozenBonus;
            block.hp -= damage;
            world.score += Math.round(damage * 3);
            addParticles(world, col.pointX, col.pointY, block.material === "wood" ? "#dfad74" : "#a7b2c7", 5, 150);
            audioRef.current?.hit(impact);
            triggerImpactFeedback(impact, world.launched);
          }

          for (const target of world.targets) {
            if (!target.alive) continue;
            const col = circleCircleCollision({ x: bird.x, y: bird.y, r: bird.r }, { x: target.x, y: target.y, r: target.r });
            if (!col) continue;
            if (bird.isEgg) {
              bird.alive = false;
              explodeAt(world, bird.x, bird.y, EXPLOSION_RADIUS * 0.95, 176, "#ffb8a2");
              audioRef.current?.boom();
              triggerImpactFeedback(300, true);
              break;
            }
            bird.x -= col.nx * col.overlap * 0.5;
            bird.y -= col.ny * col.overlap * 0.5;
            target.x += col.nx * col.overlap * 0.5;
            target.y += col.ny * col.overlap * 0.5;
            const relVx = bird.vx - target.vx;
            const relVy = bird.vy - target.vy;
            const relN = relVx * col.nx + relVy * col.ny;
            if (relN > 0) continue;
            const imp = -(1 + 0.52) * relN;
            bird.vx += col.nx * imp * 0.65;
            bird.vy += col.ny * imp * 0.65;
            target.vx -= col.nx * imp * 0.45;
            target.vy -= col.ny * imp * 0.45;
            const heavyBonus = bird.heavyTimer > 0 ? 1.7 : 1;
            target.hp -= Math.abs(relN) * 0.48 * heavyBonus;
            world.score += Math.round(Math.abs(relN) * 4);
            addParticles(world, target.x, target.y, "#a8ff8b", 7, 180);
            audioRef.current?.hit(Math.abs(relN));
            triggerImpactFeedback(Math.abs(relN), world.launched);
          }

          for (const prop of world.props) {
            if (!prop.alive) continue;
            const col = circleRectCollision(
              { x: bird.x, y: bird.y, r: bird.r },
              { x: prop.x, y: prop.y, w: prop.w, h: prop.h },
            );
            if (!col) continue;
            if (prop.type === "spring" && prop.cooldown <= 0 && bird.vy > 40) {
              bird.y = prop.y - prop.h / 2 - bird.r - 1;
              bird.vy = -Math.max(520, Math.abs(bird.vy) * 0.9);
              bird.vx *= 1.04;
              prop.cooldown = 0.22;
              addParticles(world, bird.x, bird.y, "#8dd9ff", 16, 220);
              audioRef.current?.dash();
              triggerImpactFeedback(200, world.launched);
            } else if (prop.type === "tnt") {
              prop.alive = false;
              explodeAt(world, prop.x, prop.y, TNT_RADIUS, 200, "#ff9068");
              audioRef.current?.boom();
              triggerImpactFeedback(320, true);
            }
          }

          aliveProjectiles.push(bird);
        }
        world.trailClock = world.trailClock > TRAIL_INTERVAL ? 0 : world.trailClock;
        world.projectiles = aliveProjectiles;
      }

      for (const block of world.blocks) {
        if (!block.alive) continue;
        block.vy += GRAVITY * dt;
        block.vx *= 0.995;
        block.vy *= 0.995;
        block.x += block.vx * dt;
        block.y += block.vy * dt;

        if (block.y + block.h / 2 > groundY) {
          block.y = groundY - block.h / 2;
          block.vy *= -BLOCK_RESTITUTION;
          block.vx *= GROUND_FRICTION;
        }
      }

      for (let i = 0; i < world.blocks.length; i += 1) {
        const a = world.blocks[i];
        if (!a.alive) continue;
        for (let j = i + 1; j < world.blocks.length; j += 1) {
          const b = world.blocks[j];
          if (!b.alive) continue;
          const dx = b.x - a.x;
          const px = (a.w + b.w) / 2 - Math.abs(dx);
          if (px <= 0) continue;
          const dy = b.y - a.y;
          const py = (a.h + b.h) / 2 - Math.abs(dy);
          if (py <= 0) continue;

          if (px < py) {
            const sx = dx < 0 ? -1 : 1;
            a.x -= sx * px * 0.5;
            b.x += sx * px * 0.5;
            const rv = b.vx - a.vx;
            const impulse = rv * 0.4;
            a.vx += impulse;
            b.vx -= impulse;
          } else {
            const sy = dy < 0 ? -1 : 1;
            a.y -= sy * py * 0.5;
            b.y += sy * py * 0.5;
            const rv = b.vy - a.vy;
            const impulse = rv * 0.35;
            a.vy += impulse;
            b.vy -= impulse;
            const impact = Math.abs(rv);
            if (impact > 120 && applyDamage) {
              a.hp -= impact * 0.02;
              b.hp -= impact * 0.02;
            }
          }
        }
      }

      for (const target of world.targets) {
        if (!target.alive) continue;
        target.vy += GRAVITY * dt;
        target.vx *= 0.994;
        target.vy *= 0.994;
        target.x += target.vx * dt;
        target.y += target.vy * dt;

        if (target.y + target.r > groundY) {
          target.y = groundY - target.r;
          target.vy *= -0.22;
          target.vx *= 0.84;
        }

        for (const block of world.blocks) {
          if (!block.alive) continue;
          const col = circleRectCollision({ x: target.x, y: target.y, r: target.r }, block);
          if (!col) continue;
          const relVx = target.vx - block.vx;
          const relVy = target.vy - block.vy;
          const relN = relVx * col.nx + relVy * col.ny;

          // Stone crush kill: heavy stone pressing from above should instantly squash target.
          const stoneCrush =
            block.material === "stone" &&
            col.ny > 0.45 &&
            (relN < -120 || (block.vy > 180 && col.overlap > target.r * 0.38));

          // Wood should glance/slide left-right on head impact instead of drilling straight down.
          const woodHeadHit =
            block.material === "wood" &&
            col.ny > 0.55 &&
            block.vy > 120 &&
            target.y > block.y;

          if (woodHeadHit) {
            let side = Math.sign(block.x - target.x);
            if (side === 0) side = Math.sign(block.vx) || (Math.sin(block.x + target.x) >= 0 ? 1 : -1);
            const lateral = 110 + Math.min(220, block.vy * 0.35);
            block.vx += side * lateral;
            block.vy *= 0.42;
            block.x += side * Math.min(6, col.overlap + 1.5);
            target.vx -= side * 28;
          }

          target.x += col.nx * col.overlap;
          target.y += col.ny * col.overlap;
          const vn = target.vx * col.nx + target.vy * col.ny;
          if (vn < 0) {
            target.vx -= (1 + 0.3) * vn * col.nx;
            target.vy -= (1 + 0.3) * vn * col.ny;
          }
          const impact = Math.abs(vn);
          if (stoneCrush && applyDamage) {
            target.hp = 0;
            addParticles(world, target.x, target.y, "#9be886", 24, 260);
          } else if (applyDamage) {
            target.hp -= impact * 0.08;
          }
          if (applyDamage) block.hp -= impact * 0.01;
        }

        // Extra pass to keep target from ending up embedded in blocks.
        separateTargetFromBlocks(target, world.blocks, groundY, 2, 1);
      }

      for (const prop of world.props) {
        if (!prop.alive || prop.type !== "tnt") continue;
        for (const block of world.blocks) {
          if (!block.alive) continue;
          const col = circleRectCollision(
            { x: block.x, y: block.y, r: Math.min(block.w, block.h) * 0.36 },
            { x: prop.x, y: prop.y, w: prop.w, h: prop.h },
          );
          if (!col) continue;
          const speed = vecLen(block.vx, block.vy);
          if (speed < 140) continue;
          prop.alive = false;
          explodeAt(world, prop.x, prop.y, TNT_RADIUS, 190, "#ff8a62");
          audioRef.current?.boom();
          triggerImpactFeedback(280, world.launched);
          break;
        }
      }

      for (const block of world.blocks) {
        if (block.alive && block.hp <= 0) {
          block.alive = false;
          awardScore(world, MATERIALS[block.material].score, block.x, block.y - 8);
          addParticles(world, block.x, block.y, block.material === "wood" ? "#d29b60" : "#adb9d0", 18, 260);
        }
      }
      for (const target of world.targets) {
        if (target.alive && target.hp <= 0) {
          target.alive = false;
          awardScore(world, 5000, target.x, target.y - 8);
          addParticles(world, target.x, target.y, "#9be886", 28, 320);
        }
      }

      if (isFlying) {
        const liveTargets = world.targets.filter((t) => t.alive).length;
        if (liveTargets === 0) {
          syncHud();
          resolveTurnEnd();
          return;
        }

        const moving = world.projectiles.some((p) => vecLen(p.vx, p.vy) > 45 && p.alive);
        if (!world.projectiles.length || !moving) {
          world.settleClock += dt;
        } else {
          world.settleClock = 0;
        }

        if (world.settleClock > 0.9) {
          world.settleClock = 0;
          resolveTurnEnd();
        }
        syncHud();
      }
    };

    const draw = () => {
      const world = worldRef.current;
      const f = feedbackRef.current;
      const shakeX = f.shake > 0 ? (Math.random() - 0.5) * f.shake : 0;
      const shakeY = f.shake > 0 ? (Math.random() - 0.5) * f.shake : 0;
      ctx.save();
      ctx.translate(shakeX, shakeY);
      ctx.clearRect(0, 0, world.cfg.stageWidth, world.cfg.stageHeight);

      const sky = ctx.createLinearGradient(0, 0, 0, world.cfg.stageHeight);
      sky.addColorStop(0, "#a8d6ff");
      sky.addColorStop(0.6, "#d7f0ff");
      sky.addColorStop(1, "#f1f7dd");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, world.cfg.stageWidth, world.cfg.stageHeight);

      ctx.globalAlpha = 0.25;
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 5; i += 1) {
        const x = ((i * 280 + world.cloudDrift) % (world.cfg.stageWidth + 320)) - 160;
        const y = 90 + (i % 3) * 42;
        ctx.beginPath();
        ctx.ellipse(x, y, 78, 28, 0, 0, Math.PI * 2);
        ctx.ellipse(x + 36, y - 10, 54, 22, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = "#7cc35d";
      ctx.fillRect(0, world.cfg.groundY, world.cfg.stageWidth, world.cfg.stageHeight - world.cfg.groundY);
      ctx.fillStyle = "rgba(41,93,34,0.25)";
      for (let i = 0; i < world.cfg.stageWidth; i += 34) {
        ctx.fillRect(i, world.cfg.groundY + 6 + (i % 3), 18, 4);
      }

      const bird = world.projectiles.find((p) => p.alive);
      const slingX = world.cfg.sling.x;
      const slingY = world.cfg.sling.y;
      const groundY = world.cfg.groundY;

      // Slingshot base anchored to the ground.
      ctx.fillStyle = "#6f4b34";
      ctx.fillRect(slingX - 46, groundY - 24, 92, 24);
      ctx.fillStyle = "#5e3f2c";
      ctx.fillRect(slingX - 8, groundY - 72, 16, 48);

      ctx.strokeStyle = "#6a4b34";
      ctx.lineWidth = 16;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(slingX - 24, groundY - 20);
      ctx.lineTo(slingX - 24, slingY - 126);
      ctx.lineTo(slingX + 24, slingY - 126);
      ctx.lineTo(slingX + 24, groundY - 20);
      ctx.stroke();

      const canAttachBand = bird && phaseRef.current === "ready" && !world.launched;
      if (canAttachBand) {
        const forkY = slingY - 78;
        const launchDir = normalize(slingX - bird.x, slingY - bird.y);
        const perp = { x: -launchDir.y, y: launchDir.x };
        const startHalf = 20;
        const backCenterX = bird.x - launchDir.x * 12;
        const backCenterY = bird.y - launchDir.y * 12;
        const endHalf = 8;
        const startA = { x: slingX + perp.x * startHalf, y: forkY + perp.y * startHalf };
        const startB = { x: slingX - perp.x * startHalf, y: forkY - perp.y * startHalf };
        const endA = { x: backCenterX + perp.x * endHalf, y: backCenterY + perp.y * endHalf };
        const endB = { x: backCenterX - perp.x * endHalf, y: backCenterY - perp.y * endHalf };

        // Two clean elastic bands from fork to pouch.
        ctx.strokeStyle = "#2f1d12";
        ctx.lineWidth = 4.6;
        ctx.beginPath();
        ctx.moveTo(startA.x, startA.y);
        ctx.lineTo(endA.x, endA.y);
        ctx.moveTo(startB.x, startB.y);
        ctx.lineTo(endB.x, endB.y);
        ctx.stroke();

        // Pouch strip.
        ctx.strokeStyle = "#3a2417";
        ctx.lineWidth = 5.2;
        ctx.beginPath();
        ctx.moveTo(endA.x, endA.y);
        ctx.lineTo(endB.x, endB.y);
        ctx.stroke();
      }

      if (pointerRef.current.dragging && bird) {
        const pullX = slingX - bird.x;
        const pullY = slingY - bird.y;
        const vx = pullX * LAUNCH_MULT;
        const vy = pullY * LAUNCH_MULT;
        let lastX = bird.x;
        let lastY = bird.y;
        ctx.strokeStyle = "rgba(17, 37, 61, 0.55)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        for (let i = 0; i < 30; i += 1) {
          const t = i * 0.075;
          const px = bird.x + vx * t;
          const py = bird.y + vy * t + 0.5 * GRAVITY * t * t;
          ctx.lineTo(px, py);
          lastX = px;
          lastY = py;
          if (py > world.cfg.stageHeight) break;
        }
        ctx.stroke();

        for (let i = 0; i < 30; i += 1) {
          const t = i * 0.075;
          const px = bird.x + vx * t;
          const py = bird.y + vy * t + 0.5 * GRAVITY * t * t;
          const radius = Math.max(1.6, 4.8 - i * 0.12);
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "rgba(16, 28, 48, 0.62)";
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Highlight first impact estimate.
          if (py >= groundY - 2 || i === 29) {
            ctx.strokeStyle = "rgba(255, 224, 96, 0.95)";
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(px, py, 12, 0, Math.PI * 2);
            ctx.stroke();
          }

          if (py > world.cfg.stageHeight) break;
        }

        // Small aim arrow for launch direction.
        const dir = normalize(vx, vy);
        const arrowX = bird.x + dir.x * 42;
        const arrowY = bird.y + dir.y * 42;
        ctx.strokeStyle = "rgba(255, 244, 170, 0.95)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(bird.x, bird.y);
        ctx.lineTo(arrowX, arrowY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(arrowX - dir.x * 10 - dir.y * 6, arrowY - dir.y * 10 + dir.x * 6);
        ctx.lineTo(arrowX - dir.x * 10 + dir.y * 6, arrowY - dir.y * 10 - dir.x * 6);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 244, 170, 0.95)";
        ctx.fill();
      }

      for (const block of world.blocks) {
        if (!block.alive) continue;
        const mat = MATERIALS[block.material];
        const hpRatio = clamp(block.hp / block.maxHp, 0, 1);
        ctx.fillStyle = mat.color;
        ctx.fillRect(block.x - block.w / 2, block.y - block.h / 2, block.w, block.h);
        if (block.frozen > 0) {
          ctx.fillStyle = `rgba(178, 236, 255, ${Math.min(0.45, block.frozen * 0.22)})`;
          ctx.fillRect(block.x - block.w / 2, block.y - block.h / 2, block.w, block.h);
        }
        ctx.strokeStyle = "rgba(33,34,48,0.35)";
        ctx.lineWidth = 2;
        ctx.strokeRect(block.x - block.w / 2, block.y - block.h / 2, block.w, block.h);
        if (hpRatio < 0.78) {
          ctx.strokeStyle = "rgba(35,35,35,0.35)";
          ctx.beginPath();
          ctx.moveTo(block.x - block.w * 0.26, block.y - block.h * 0.2);
          ctx.lineTo(block.x + block.w * 0.22, block.y + block.h * 0.16);
          ctx.moveTo(block.x + block.w * 0.1, block.y - block.h * 0.25);
          ctx.lineTo(block.x - block.w * 0.16, block.y + block.h * 0.25);
          ctx.stroke();
        }
      }

      drawProps(ctx, world);

      for (const target of world.targets) {
        if (!target.alive) continue;
        const hpRatio = clamp(target.hp / target.maxHp, 0, 1);
        ctx.fillStyle = "#7ad860";
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#1d3e15";
        ctx.beginPath();
        ctx.arc(target.x - target.r * 0.32, target.y - 2, 4, 0, Math.PI * 2);
        ctx.arc(target.x + target.r * 0.32, target.y - 2, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(215, 45, 45, ${1 - hpRatio})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.r - 2, -Math.PI * 0.6, Math.PI * 0.6);
        ctx.stroke();
      }

      for (const projectile of world.projectiles) {
        if (!projectile.alive) continue;
        const type = getBirdType(projectile.typeId);
        if (projectile.isEgg) {
          ctx.fillStyle = "#ffc8a8";
          ctx.beginPath();
          ctx.ellipse(projectile.x, projectile.y, projectile.r * 0.95, projectile.r * 1.15, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "rgba(255, 154, 124, 0.78)";
          ctx.beginPath();
          ctx.ellipse(projectile.x + 2, projectile.y + 2, projectile.r * 0.36, projectile.r * 0.42, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#6a3e2f";
          ctx.fillRect(projectile.x - 3, projectile.y - projectile.r - 4, 6, 4);
        } else {
          ctx.fillStyle = type.color;
          ctx.beginPath();
          ctx.arc(projectile.x, projectile.y, projectile.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#0f1324";
          ctx.beginPath();
          ctx.arc(projectile.x - projectile.r * 0.25, projectile.y - 3, 3.2, 0, Math.PI * 2);
          ctx.arc(projectile.x + projectile.r * 0.22, projectile.y - 2, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        if (projectile.typeId === "bomb") {
          ctx.strokeStyle = "rgba(255,172,96,0.9)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(projectile.x, projectile.y - projectile.r - 4, 4, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (projectile.pierceTimer > 0) {
          ctx.strokeStyle = "rgba(238, 244, 255, 0.85)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(projectile.x, projectile.y, projectile.r + 4, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (projectile.magnetTimer > 0) {
          ctx.strokeStyle = "rgba(195, 150, 255, 0.72)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(projectile.x, projectile.y, projectile.r + 12, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      for (const blast of world.blasts) {
        const alpha = clamp(blast.life / blast.ttl, 0, 1);
        ctx.strokeStyle = `rgba(255,126,96,${alpha})`;
        ctx.lineWidth = 6 * alpha;
        ctx.beginPath();
        ctx.arc(blast.x, blast.y, blast.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (const p of world.particles) {
        const a = clamp(p.life / p.ttl, 0, 1);
        ctx.globalAlpha = a;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const fText of world.floaters) {
        const a = clamp(fText.life / fText.ttl, 0, 1);
        ctx.globalAlpha = a;
        ctx.fillStyle = fText.color;
        ctx.font = `900 ${fText.size}px "Segoe UI", "Noto Sans TC", sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(fText.text, fText.x, fText.y);
      }
      ctx.textAlign = "left";
      ctx.globalAlpha = 1;
      if (f.flash > 0) {
        ctx.fillStyle = `rgba(255,255,255,${f.flash})`;
        ctx.fillRect(0, 0, world.cfg.stageWidth, world.cfg.stageHeight);
      }
      ctx.restore();
    };

    const loop = (t) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = Math.min((t - lastRef.current) / 1000, 1 / 25);
      lastRef.current = t;
      update(dt);
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [resolveTurnEnd, syncHud, triggerImpactFeedback]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (pausedRef.current) return;
        if (phaseRef.current === "flying") triggerAbility();
      }
      if (event.code === "KeyP") {
        event.preventDefault();
        togglePause();
      }
      if (event.code === "Digit1") applySpeed(0.8);
      if (event.code === "Digit2") applySpeed(1);
      if (event.code === "Digit3") applySpeed(1.2);
      if (event.code === "KeyR") {
        event.preventDefault();
        const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
        resetLevel(idx);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [applySpeed, resetLevel, togglePause, triggerAbility]);

  const nextBirds = useMemo(() => {
    return worldRef.current.queue.map((id, idx) => ({ id: `${id}-${idx}`, type: getBirdType(id) }));
  }, [hud.level, hud.birdsLeft, phase]);

  const totalCampaignScore = useMemo(
    () => campaignSummary.levelScores.reduce((acc, score) => acc + score, 0),
    [campaignSummary.levelScores],
  );
  const clearedLevels = useMemo(
    () => campaignSummary.levelScores.filter((score) => score > 0).length,
    [campaignSummary.levelScores],
  );
  const campaignTime = useMemo(() => {
    const end = campaignSummary.completedAt ?? Date.now();
    return formatDuration(end - campaignSummary.startedAt);
  }, [campaignSummary.completedAt, campaignSummary.startedAt, phase]);
  const totalStars = useMemo(
    () => campaignSummary.levelStars.reduce((acc, s) => acc + s, 0),
    [campaignSummary.levelStars],
  );
  const maxCampaignStars = LEVELS.length * 3;
  const campaignRank = useMemo(() => {
    const ratio = totalStars / Math.max(1, maxCampaignStars);
    if (ratio >= 0.95) return "神射手";
    if (ratio >= 0.75) return "破壞王";
    if (ratio >= 0.5) return "猛禽學徒";
    return "新手小鳥";
  }, [maxCampaignStars, totalStars]);
  const currentLevelStars = useMemo(() => {
    const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
    return campaignSummary.levelStars[idx] || 0;
  }, [campaignSummary.levelStars, hud.level, phase]);

  return (
    <div className="oneui angry-page">
      <div className="angry-shell">
        <header className="angry-topbar card">
          <button className="angry-btn angry-ghost" onClick={() => navigate("/")}>首頁</button>
          <div className="angry-stats">
            <div><span>關卡</span><strong>{hud.level} / {LEVELS.length}</strong></div>
            <div><span>分數</span><strong>{hud.score.toLocaleString()}</strong></div>
            <div><span>目標</span><strong>{hud.targetsLeft}</strong></div>
            <div><span>★</span><strong>{currentLevelStars} / 3</strong></div>
            <div><span>連擊</span><strong>{hud.combo > 1 ? `x${hud.combo}` : "-"}</strong></div>
          </div>
          <div className="angry-top-actions">
            <button className="angry-btn angry-ghost" onClick={togglePause}>{paused ? "繼續" : "暫停"}</button>
            <button
              className="angry-btn"
              onClick={() => {
                const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
                resetLevel(idx);
              }}
            >
              重來
            </button>
          </div>
        </header>

        <section className="angry-layout">
          <div className="angry-stage card">
            <canvas
              ref={canvasRef}
              className="angry-canvas"
              width={1280}
              height={720}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />

            {phase === "ready" && (
              <div className="angry-overlay angry-overlay-mini">往後拖曳小鳥瞄準，放開即可發射。</div>
            )}
            {aimInfo.active && phase === "ready" && (
              <div className="angry-aim-card">
                <span>力度 {Math.round(aimInfo.power * 100)}%</span>
                <span>角度 {aimInfo.angle}°</span>
              </div>
            )}
            {paused && (phase === "ready" || phase === "flying") && (
              <div className="angry-overlay angry-overlay-mini angry-overlay-pause">已暫停（按 P 或按鈕繼續）</div>
            )}

            {phase === "won" && (
              <div className="angry-overlay">
                <h2>過關成功</h2>
                <p>目標全數清除，繼續下一關。</p>
                <div className="angry-stars-row">{"★".repeat(Math.max(1, currentLevelStars))}</div>
                <div className="angry-overlay-actions">
                  <button
                    className="angry-btn angry-ghost"
                    onClick={() => {
                      const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
                      resetLevel(idx);
                    }}
                  >
                    重玩本關
                  </button>
                  <button className="angry-btn" onClick={nextLevel}>下一關</button>
                </div>
              </div>
            )}

            {phase === "lost" && (
              <div className="angry-overlay">
                <h2>挑戰失敗</h2>
                <p>小鳥用完了，試試不同發射角度。</p>
                <div className="angry-overlay-actions">
                  <button
                    className="angry-btn"
                    onClick={() => {
                      const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
                      resetLevel(idx);
                    }}
                  >
                    再試一次
                  </button>
                </div>
              </div>
            )}

            {phase === "campaignWon" && (
              <div className="angry-overlay angry-overlay-grand">
                <div className="angry-grand-header">
                  <div className="angry-grand-crown">👑</div>
                  <div className="angry-grand-title">
                    <h2>全部通關</h2>
                    <p>十大關卡已完成，恭喜破關!</p>
                  </div>
                  <div className="angry-grand-rank">
                    <span>評級</span>
                    <strong>{campaignRank}</strong>
                  </div>
                </div>
                <div className="angry-grand-divider" />
                <div className="angry-grand-body">
                  <section className="angry-grand-section">
                    <div className="angry-grand-subtitle">戰績摘要</div>
                    <div className="angry-grand-grid">
                      <article className="angry-grand-stat">
                        <span>總分</span>
                        <strong>{totalCampaignScore.toLocaleString()}</strong>
                      </article>
                      <article className="angry-grand-stat">
                        <span>通關時間</span>
                        <strong>{campaignTime}</strong>
                      </article>
                      <article className="angry-grand-stat">
                        <span>完成關卡</span>
                        <strong>{clearedLevels} / {LEVELS.length}</strong>
                      </article>
                      <article className="angry-grand-stat">
                        <span>總星數</span>
                        <strong>{totalStars} / {maxCampaignStars}</strong>
                      </article>
                    </div>
                  </section>
                  <section className="angry-grand-section">
                    <div className="angry-grand-subtitle">關卡成績</div>
                    <div className="angry-level-score-list">
                      {campaignSummary.levelScores.map((score, idx) => (
                        <div key={`sum-${idx}`} className="angry-level-score-item">
                          <span className="angry-level-label">
                            第 {idx + 1} 關
                            <em>{campaignSummary.levelStars[idx] > 0 ? "★".repeat(campaignSummary.levelStars[idx]) : "－"}</em>
                          </span>
                          <strong>{score.toLocaleString()}</strong>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
                <div className="angry-overlay-actions">
                  <button className="angry-btn angry-ghost" onClick={() => navigate("/")}>回首頁</button>
                  <button className="angry-btn" onClick={() => resetLevel(0, { newCampaign: true })}>再挑戰一次</button>
                </div>
              </div>
            )}

            {mobileLandscape && (
              <>
                <button
                  className="angry-mobile-settings-btn"
                  onClick={() => setMobileSettingsOpen((prev) => !prev)}
                  aria-expanded={mobileSettingsOpen}
                  aria-label="開啟遊戲資訊與設定"
                >
                  ⚙️
                </button>
                {mobileSettingsOpen && (
                  <div className="angry-mobile-settings-panel">
                    <div className="angry-mobile-settings-grid">
                      <div><span>關卡</span><strong>{hud.level} / {LEVELS.length}</strong></div>
                      <div><span>分數</span><strong>{hud.score.toLocaleString()}</strong></div>
                      <div><span>目標</span><strong>{hud.targetsLeft}</strong></div>
                      <div><span>★</span><strong>{currentLevelStars} / 3</strong></div>
                    </div>
                    <div className="angry-mobile-settings-row">
                      <button className="angry-btn angry-ghost" onClick={togglePause}>{paused ? "繼續" : "暫停"}</button>
                      <button
                        className="angry-btn"
                        onClick={() => {
                          const idx = LEVELS.findIndex((v) => v.id === worldRef.current.cfg.id);
                          resetLevel(idx);
                        }}
                      >
                        重來
                      </button>
                    </div>
                    <div className="angry-mobile-settings-row">
                      <button className={`angry-speed-btn${Math.abs(gameSpeed - 0.8) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(0.8)}>0.8x</button>
                      <button className={`angry-speed-btn${Math.abs(gameSpeed - 1) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(1)}>1.0x</button>
                      <button className={`angry-speed-btn${Math.abs(gameSpeed - 1.2) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(1.2)}>1.2x</button>
                    </div>
                    <div className="angry-mobile-queue-title">待發射：{nextBirds.length}</div>
                    <div className="angry-mobile-queue">
                      {nextBirds.length ? nextBirds.map((b) => (
                        <div className="angry-queue-item" key={`m-${b.id}`}>
                          <span className="angry-dot small" style={{ background: b.type.color }} />
                          <span>{b.type.name}</span>
                        </div>
                      )) : <div className="angry-empty">沒有剩餘小鳥</div>}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <aside className="angry-panel card">
            <h3>目前小鳥</h3>
            <div className="angry-current">
              <div className="angry-dot" style={{ background: getBirdType(worldRef.current.activeType).color }} />
              <div>
                <div className="angry-bird-name">{hud.birdName}</div>
                <div className="angry-bird-ability">{hud.ability}</div>
              </div>
            </div>

            <h3>待發射隊列</h3>
            <div className="angry-queue">
              {nextBirds.length ? nextBirds.map((b) => (
                <div className="angry-queue-item" key={b.id}>
                  <span className="angry-dot small" style={{ background: b.type.color }} />
                  <span>{b.type.name}</span>
                </div>
              )) : <div className="angry-empty">沒有剩餘小鳥</div>}
            </div>

            <h3>技能操作</h3>
            <p className="angry-help">飛行中點一下螢幕或滑鼠即可觸發技能，也可按 <kbd>Space</kbd>。</p>
            <h3>節奏控制</h3>
            <div className="angry-speed-row">
              <button className={`angry-speed-btn${Math.abs(gameSpeed - 0.8) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(0.8)}>0.8x</button>
              <button className={`angry-speed-btn${Math.abs(gameSpeed - 1) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(1)}>1.0x</button>
              <button className={`angry-speed-btn${Math.abs(gameSpeed - 1.2) < 0.01 ? " active" : ""}`} onClick={() => applySpeed(1.2)}>1.2x</button>
            </div>
            <p className="angry-help">快捷鍵：<kbd>P</kbd> 暫停、<kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> 調速度、<kbd>R</kbd> 重來。</p>

            <div className="angry-legend">
              <div><span className="swatch wood" />木材：血量較低，較好拆。</div>
              <div><span className="swatch stone" />石材：血量較高，建議衝刺或爆炸。</div>
              <div><span className="swatch spring" />彈簧板：可把小鳥彈飛。</div>
              <div><span className="swatch tnt" />炸藥桶：撞擊會引爆範圍傷害。</div>
            </div>
          </aside>
        </section>
      </div>

    </div>
  );
}
