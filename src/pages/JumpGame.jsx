import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ============ 遊戲常數 ============
const GAME_WIDTH = 360;
const GAME_HEIGHT = 640;
const GRAVITY = 0.5;
const JUMP_VELOCITY = -14;
const SPRING_VELOCITY = -20;
const JETPACK_VELOCITY = -8;
const SPRING_SHOES_MULTIPLIER = 1.5;
const MOVE_SPEED = 6;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 50;
const PLATFORM_WIDTH = 70;
const PLATFORM_HEIGHT = 15;
const PLATFORM_GAP_MIN = 60;
const PLATFORM_GAP_MAX = 120;
const INITIAL_PLATFORM_COUNT = 10;

// 道具持續時間 (ms)
const JETPACK_DURATION = 2500;
const SPRING_SHOES_DURATION = 5000;

// 平台類型
const PLATFORM_TYPES = {
  NORMAL: "normal",
  SPRING: "spring",
  MOVING: "moving",
  CRACKED: "cracked",
};

// 道具類型
const POWERUP_TYPES = {
  JETPACK: "jetpack",
  SPRING_SHOES: "springShoes",
  SHIELD: "shield",
  SAFETY_NET: "safetyNet", // 安全網：翻牆時生成安全平台
};

// 成就定義
const ACHIEVEMENTS = {
  FIRST_500: {
    id: "first500",
    title: "初出茅廬",
    desc: "首次達到 500m",
    icon: "🎯",
  },
  SPRING_KING: {
    id: "springKing",
    title: "彈簧王",
    desc: "踩到彈簧平台 10 次",
    icon: "🌀",
  },
  FLIGHT_10S: {
    id: "flight10s",
    title: "飛行達人",
    desc: "噴射背包累積 10 秒",
    icon: "🚀",
  },
  SURVIVOR: {
    id: "survivor",
    title: "倖存者",
    desc: "使用護盾擋下一次死亡",
    icon: "🛡️",
  },
  REACH_1000: {
    id: "reach1000",
    title: "登高望遠",
    desc: "達到 1000m",
    icon: "⛰️",
  },
  REACH_2000: {
    id: "reach2000",
    title: "雲端漫步",
    desc: "達到 2000m",
    icon: "☁️",
  },
};

// 分數稱號里程碑
const SCORE_TITLES = [
  { score: 100, title: "新手起步", icon: "🐣" },
  { score: 300, title: "小試身手", icon: "🌱" },
  { score: 500, title: "初出茅廬", icon: "🎯" },
  { score: 800, title: "漸入佳境", icon: "🔥" },
  { score: 1000, title: "登高望遠", icon: "⛰️" },
  { score: 1500, title: "身手矯健", icon: "🦘" },
  { score: 2000, title: "雲端漫步", icon: "☁️" },
  { score: 3000, title: "天際翱翔", icon: "🦅" },
  { score: 5000, title: "傳說勇者", icon: "👑" },
  { score: 10000, title: "神級玩家", icon: "🏆" },
];

// ============ 工具函數 ============
const generateId = () => Math.random().toString(36).substr(2, 9);

// 邊緣安全區寬度（畫面左右各 15%）
const EDGE_SAFE_ZONE = GAME_WIDTH * 0.15;

// 判斷位置是否在邊緣安全區
const isInEdgeSafeZone = (x) => {
  return x < EDGE_SAFE_ZONE || x > GAME_WIDTH - EDGE_SAFE_ZONE;
};

const createPlatform = (y, type = PLATFORM_TYPES.NORMAL) => {
  let x = Math.random() * (GAME_WIDTH - PLATFORM_WIDTH);

  // 如果在邊緣安全區，易碎平台改為普通平台
  if (isInEdgeSafeZone(x) && type === PLATFORM_TYPES.CRACKED) {
    type = PLATFORM_TYPES.NORMAL;
  }

  return {
    id: generateId(),
    x,
    y,
    width: PLATFORM_WIDTH,
    height: PLATFORM_HEIGHT,
    type,
    state: "normal", // normal, cracked, gone (易碎平台用)
    direction: Math.random() > 0.5 ? 1 : -1,
    speed: 2,
    flash: false,
  };
};

const createPowerup = (x, y, type) => ({
  id: generateId(),
  x,
  y,
  width: 40,
  height: 40,
  type,
  collected: false,
});

const createEnemy = (y) => ({
  id: generateId(),
  x: Math.random() * (GAME_WIDTH - 40),
  y,
  width: 40,
  height: 40,
  direction: Math.random() > 0.5 ? 1 : -1,
  speed: 1.5 + Math.random() * 1,
  vy: 0.5 + Math.random() * 0.5, // 敵人會緩慢向下移動
});

const createBlackhole = (x, y) => ({
  id: generateId(),
  x,
  y,
  radius: 40,
  pullStrength: 0.3,
});

export default function JumpGame() {
  const navigate = useNavigate();

  // ============ UI State ============
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("jumpGameHighScore");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [gameState, setGameState] = useState("ready");
  const [isPaused, setIsPaused] = useState(false);
  const [activeEffects, setActiveEffects] = useState({
    jetpack: false,
    springShoes: false,
    shield: 0,
    safetyNet: 0,
  });
  const [showAchievement, setShowAchievement] = useState(null);
  const [showTitle, setShowTitle] = useState(null);
  const lastTitleMilestone = useRef(0);
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem("jumpGameAchievements");
    return saved ? JSON.parse(saved) : {};
  });

  // ============ Refs ============
  const gameRef = useRef(null);
  const playerDomRef = useRef(null);
  const platformContainerRef = useRef(null);
  const powerupContainerRef = useRef(null);
  const enemyContainerRef = useRef(null);
  const blackholeContainerRef = useRef(null);
  const scoreRef = useRef(0);
  const scoreDomRef = useRef(null);

  // 玩家狀態
  const playerRef = useRef({
    x: GAME_WIDTH / 2 - PLAYER_WIDTH / 2,
    y: GAME_HEIGHT - 150,
    vx: 0,
    vy: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    // 道具效果
    isBoosting: false,
    boostTimer: 0,
    jumpMultiplier: 1,
    springJumpCount: 0, // 彈簧鞋跳躍次數
    shieldCount: 0, // 護盾次數
    safetyNetCount: 0, // 安全網道具次數
    // 動畫狀態
    isJumping: false,
    isFalling: false,
    // 翻牆相關
    wrapCenterPullUntil: 0, // 翻牆後吸附中心的結束時間
    wrapGraceJump: false, // 翻牆後安全跳
    wrapInvincibleUntil: 0, // 翻牆後無敵結束時間
    isWrapping: false, // 正在翻牆（用於視覺效果）
  });

  // 世界狀態
  const worldRef = useRef({
    cameraY: 0,
    maxHeight: 0,
    platforms: [],
    powerups: [],
    enemies: [],
    blackholes: [],
    // 里程碑
    milestone1000: false,
    milestone2000: false,
    // 統計
    springCount: 0,
    jetpackTime: 0,
  });

  // 輸入狀態
  const inputRef = useRef({ left: false, right: false });

  // Ref 同步
  const isPausedRef = useRef(false);
  const highScoreRef = useRef(highScore);
  const achievementsRef = useRef(achievements);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);
  useEffect(() => {
    achievementsRef.current = achievements;
  }, [achievements]);

  // ============ 成就解鎖 ============
  const unlockAchievement = useCallback((achievementKey) => {
    const achievement = ACHIEVEMENTS[achievementKey];
    if (!achievement || achievementsRef.current[achievement.id]) return;

    const newAchievements = {
      ...achievementsRef.current,
      [achievement.id]: true,
    };
    setAchievements(newAchievements);
    localStorage.setItem(
      "jumpGameAchievements",
      JSON.stringify(newAchievements)
    );

    setShowAchievement(achievement);
    setTimeout(() => setShowAchievement(null), 3000);
  }, []);

  // ============ 初始化平台 ============
  const initPlatforms = useCallback(() => {
    const plats = [];
    // 起始平台
    plats.push({
      id: generateId(),
      x: GAME_WIDTH / 2 - PLATFORM_WIDTH / 2,
      y: GAME_HEIGHT - 100,
      width: PLATFORM_WIDTH,
      height: PLATFORM_HEIGHT,
      type: PLATFORM_TYPES.NORMAL,
      state: "normal",
      direction: 1,
      speed: 2,
      flash: false,
    });

    let lastY = GAME_HEIGHT - 100;
    for (let i = 1; i < INITIAL_PLATFORM_COUNT; i++) {
      const gap =
        PLATFORM_GAP_MIN +
        Math.random() * (PLATFORM_GAP_MAX - PLATFORM_GAP_MIN);
      lastY -= gap;

      let type = PLATFORM_TYPES.NORMAL;
      const rand = Math.random();
      if (rand < 0.08) type = PLATFORM_TYPES.SPRING;
      else if (rand < 0.15) type = PLATFORM_TYPES.MOVING;
      else if (rand < 0.22) type = PLATFORM_TYPES.CRACKED;

      plats.push(createPlatform(lastY, type));
    }
    return plats;
  }, []);

  // ============ 渲染 DOM 函數 ============
  const clearContainers = useCallback(() => {
    if (platformContainerRef.current)
      platformContainerRef.current.innerHTML = "";
    if (powerupContainerRef.current) powerupContainerRef.current.innerHTML = "";
    if (enemyContainerRef.current) enemyContainerRef.current.innerHTML = "";
    if (blackholeContainerRef.current)
      blackholeContainerRef.current.innerHTML = "";
  }, []);

  // ============ 重置遊戲 ============
  const resetGame = useCallback(() => {
    const initialPlatforms = initPlatforms();

    playerRef.current = {
      x: GAME_WIDTH / 2 - PLAYER_WIDTH / 2,
      y: GAME_HEIGHT - 150,
      vx: 0,
      vy: 0,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      isBoosting: false,
      boostTimer: 0,
      jumpMultiplier: 1,
      springJumpCount: 0, // 彈簧鞋跳躍次數
      shieldCount: 0, // 護盾次數
      safetyNetCount: 0, // 安全網道具次數
      isJumping: false,
      isFalling: false,
      // 翻牆相關
      wrapCenterPullUntil: 0,
      wrapGraceJump: false,
      wrapInvincibleUntil: 0,
      isWrapping: false,
    };

    worldRef.current = {
      cameraY: 0,
      maxHeight: 0,
      platforms: initialPlatforms,
      powerups: [],
      enemies: [],
      blackholes: [],
      milestone1000: false,
      milestone2000: false,
      springCount: 0,
      jetpackTime: 0,
    };

    inputRef.current = { left: false, right: false };
    scoreRef.current = 0;
    lastTitleMilestone.current = 0;

    setScore(0);
    setShowTitle(null);
    setGameState("playing");
    setIsPaused(false);
    setActiveEffects({
      jetpack: false,
      springShoes: 0,
      shield: 0,
      safetyNet: 0,
    });

    clearContainers();
  }, [initPlatforms, clearContainers]);

  // ============ 遊戲循環 ============
  useEffect(() => {
    if (gameState !== "playing") return;

    let rafId;
    let isRunning = true;
    let lastTime = performance.now();

    const gameLoop = (currentTime) => {
      if (!isRunning) return;

      if (isPausedRef.current) {
        lastTime = currentTime;
        rafId = requestAnimationFrame(gameLoop);
        return;
      }

      const deltaTime = Math.min(currentTime - lastTime, 32);
      lastTime = currentTime;

      const player = playerRef.current;
      const world = worldRef.current;
      const input = inputRef.current;
      const heightInMeters = Math.floor(world.maxHeight / 10);

      // === 更新道具計時器 ===
      if (player.isBoosting) {
        player.boostTimer -= deltaTime;
        world.jetpackTime += deltaTime;
        if (player.boostTimer <= 0) {
          player.isBoosting = false;
          setActiveEffects((e) => ({ ...e, jetpack: false }));
        }
        // 成就檢查
        if (world.jetpackTime >= 10000) {
          unlockAchievement("FLIGHT_10S");
        }
      }
      // 彈簧鞋次數由跳躍時消耗，不需要每幀更新

      // === 處理輸入 ===
      // 基準幀率 60fps，計算時間倍率
      const timeScale = deltaTime / 16.67;

      if (input.left) {
        player.vx = -MOVE_SPEED;
      } else if (input.right) {
        player.vx = MOVE_SPEED;
      } else {
        player.vx *= Math.pow(0.85, timeScale);
      }

      // === 物理更新 ===
      if (player.isBoosting) {
        player.vy = JETPACK_VELOCITY;
      } else {
        player.vy += GRAVITY * timeScale;
      }

      // 黑洞吸引
      for (const bh of world.blackholes) {
        const dx = bh.x - (player.x + player.width / 2);
        const dy = bh.y - (player.y + player.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = bh.pullStrength * (1 - dist / 150) * timeScale;
          player.vy += force * 2;
          player.vx += (dx / dist) * force;
        }
      }

      // 翻牆後微吸附畫面中心
      if (currentTime < player.wrapCenterPullUntil) {
        const centerX = GAME_WIDTH / 2 - player.width / 2;
        player.x += (centerX - player.x) * 0.05 * timeScale;
      }

      player.x += player.vx * timeScale;
      player.y += player.vy * timeScale;

      // 動畫狀態
      player.isJumping = player.vy < -2;
      player.isFalling = player.vy > 2;

      // 穿牆檢測與處理
      let didWrap = false;
      if (player.x + player.width < 0) {
        player.x = GAME_WIDTH;
        didWrap = true;
      } else if (player.x > GAME_WIDTH) {
        player.x = -player.width;
        didWrap = true;
      }

      // 翻牆後效果觸發
      if (didWrap) {
        // 基本效果（永遠觸發）
        // 1. 水平速度衰減
        player.vx *= 0.3;
        // 2. 啟動中心吸附（300ms）
        player.wrapCenterPullUntil = currentTime + 300;
        // 3. 賦予安全跳權限
        player.wrapGraceJump = true;

        // 有安全網道具時的額外效果（消耗一次）
        if (player.safetyNetCount > 0) {
          player.safetyNetCount -= 1;
          setActiveEffects((e) => ({ ...e, safetyNet: player.safetyNetCount }));

          // 4. 短暫無敵（200ms）- 僅安全網道具時
          player.wrapInvincibleUntil = currentTime + 200;
          // 5. 視覺效果 - 僅安全網道具時
          player.isWrapping = true;
          setTimeout(() => {
            player.isWrapping = false;
          }, 150);

          // 6. 生成安全平台
          const safetyPlatform = {
            id: generateId(),
            x: player.x - PLATFORM_WIDTH / 2 + PLAYER_WIDTH / 2, // 置中於玩家
            y: player.y + PLAYER_HEIGHT + 30, // 玩家下方30px
            width: PLATFORM_WIDTH * 1.5, // 稍寬一點更容易落地
            height: PLATFORM_HEIGHT,
            type: PLATFORM_TYPES.NORMAL,
            state: "normal",
            direction: 1,
            speed: 0,
            flash: true, // 閃爍提示
            isSafetyPlatform: true, // 標記為安全平台
          };
          // 確保平台在畫面內
          safetyPlatform.x = Math.max(
            0,
            Math.min(GAME_WIDTH - safetyPlatform.width, safetyPlatform.x)
          );
          world.platforms.push(safetyPlatform);
          // 移除閃爍效果
          setTimeout(() => {
            safetyPlatform.flash = false;
          }, 500);
        }
      }

      // === 更新移動平台 ===
      for (const plat of world.platforms) {
        if (plat.type === PLATFORM_TYPES.MOVING) {
          plat.x += plat.speed * plat.direction * timeScale;
          if (plat.x <= 0 || plat.x + plat.width >= GAME_WIDTH) {
            plat.direction *= -1;
          }
        }
      }

      // === 更新敵人 ===
      for (const enemy of world.enemies) {
        // 1000分數後敵人才會水平移動
        if (scoreRef.current >= 1000) {
          enemy.x += enemy.speed * enemy.direction * timeScale;
          if (enemy.x <= 0 || enemy.x + enemy.width >= GAME_WIDTH) {
            enemy.direction *= -1;
          }
        }
        // 垂直移動（緩慢向下飄）
        enemy.y += enemy.vy * timeScale;
      }

      // === 碰撞檢測（平台）===
      if (player.vy > 0 && !player.isBoosting) {
        const playerBottom = player.y + player.height;
        const playerLeft = player.x;
        const playerRight = player.x + player.width;

        for (const plat of world.platforms) {
          if (plat.state === "gone") continue;

          const platTop = plat.y;
          const platBottom = plat.y + plat.height;
          const platLeft = plat.x;
          const platRight = plat.x + plat.width;

          if (playerRight > platLeft && playerLeft < platRight) {
            if (
              playerBottom >= platTop &&
              playerBottom <= platBottom + player.vy
            ) {
              // 碰撞！
              player.y = platTop - player.height;

              // 安全跳（Grace Jump）: 翻牆後第一次落地必定正常跳躍
              if (player.wrapGraceJump) {
                player.wrapGraceJump = false;
                player.vy = JUMP_VELOCITY * player.jumpMultiplier;
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  setActiveEffects(e => ({ ...e, springShoes: player.springJumpCount }));
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                setTimeout(() => {
                  plat.flash = false;
                }, 150);
                break;
              }

              // 易碎平台邏輯
              if (plat.type === PLATFORM_TYPES.CRACKED) {
                if (plat.state === "normal") {
                  plat.state = "cracked";
                  player.vy = JUMP_VELOCITY * player.jumpMultiplier;
                  if (player.springJumpCount > 0) {
                    player.springJumpCount--;
                    setActiveEffects(e => ({ ...e, springShoes: player.springJumpCount }));
                    if (player.springJumpCount === 0) {
                      player.jumpMultiplier = 1;
                    }
                  }
                  plat.flash = true;
                  setTimeout(() => {
                    plat.flash = false;
                  }, 150);
                } else if (plat.state === "cracked") {
                  plat.state = "gone";
                  continue;
                }
              } else if (plat.type === PLATFORM_TYPES.SPRING) {
                player.vy = SPRING_VELOCITY * player.jumpMultiplier;
                world.springCount++;
                if (world.springCount >= 10) {
                  unlockAchievement("SPRING_KING");
                }
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  setActiveEffects(e => ({ ...e, springShoes: player.springJumpCount }));
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                setTimeout(() => {
                  plat.flash = false;
                }, 150);
              } else {
                player.vy = JUMP_VELOCITY * player.jumpMultiplier;
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  setActiveEffects(e => ({ ...e, springShoes: player.springJumpCount }));
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                setTimeout(() => {
                  plat.flash = false;
                }, 150);
              }
              break;
            }
          }
        }
      }

      // === 碰撞檢測（道具）===
      for (const pu of world.powerups) {
        if (pu.collected) continue;
        if (
          player.x + player.width > pu.x &&
          player.x < pu.x + pu.width &&
          player.y + player.height > pu.y &&
          player.y < pu.y + pu.height
        ) {
          pu.collected = true;

          if (pu.type === POWERUP_TYPES.JETPACK) {
            player.isBoosting = true;
            player.boostTimer = JETPACK_DURATION;
            setActiveEffects((e) => ({ ...e, jetpack: true }));
          } else if (pu.type === POWERUP_TYPES.SPRING_SHOES) {
            player.jumpMultiplier = SPRING_SHOES_MULTIPLIER;
            player.springJumpCount += 5; // 獲得5次加強跳躍
            setActiveEffects((e) => ({ ...e, springShoes: player.springJumpCount }));
          } else if (pu.type === POWERUP_TYPES.SHIELD) {
            player.shieldCount += 1; // 獲得1次護盾
            setActiveEffects((e) => ({ ...e, shield: player.shieldCount }));
          } else if (pu.type === POWERUP_TYPES.SAFETY_NET) {
            player.safetyNetCount += 3; // 獲得3次使用機會
            setActiveEffects((e) => ({
              ...e,
              safetyNet: player.safetyNetCount,
            }));
          }
        }
      }

      // === 碰撞檢測（敵人）===
      for (const enemy of world.enemies) {
        // 只檢測畫面內的敵人
        const enemyScreenY = enemy.y - world.cameraY;
        if (enemyScreenY < -50 || enemyScreenY > GAME_HEIGHT + 50) continue;

        // 翻牆無敵期間跳過敵人碰撞
        if (currentTime < player.wrapInvincibleUntil) continue;

        // 碰撞檢測 (加一點容差讓碰撞更合理)
        const tolerance = 5;
        if (
          player.x + player.width - tolerance > enemy.x + tolerance &&
          player.x + tolerance < enemy.x + enemy.width - tolerance &&
          player.y + player.height - tolerance > enemy.y + tolerance &&
          player.y + tolerance < enemy.y + enemy.height - tolerance
        ) {
          if (player.shieldCount > 0) {
            player.shieldCount -= 1;
            setActiveEffects((e) => ({ ...e, shield: player.shieldCount }));
            unlockAchievement("SURVIVOR");
            enemy.x = -1000;
          } else {
            isRunning = false;
            handleGameOver(world);
            return;
          }
        }
      }

      // === 更新相機 ===
      const playerScreenY = player.y - world.cameraY;
      const cameraThreshold = GAME_HEIGHT * 0.4;
      if (playerScreenY < cameraThreshold) {
        world.cameraY -= cameraThreshold - playerScreenY;
      }

      const currentHeight = -world.cameraY;
      if (currentHeight > world.maxHeight) {
        world.maxHeight = currentHeight;
      }

      // === 里程碑檢查 ===
      if (heightInMeters >= 50 && !achievementsRef.current.first500) {
        unlockAchievement("FIRST_500");
      }
      if (heightInMeters >= 100 && !world.milestone1000) {
        world.milestone1000 = true;
        unlockAchievement("REACH_1000");
      }
      if (heightInMeters >= 200 && !world.milestone2000) {
        world.milestone2000 = true;
        unlockAchievement("REACH_2000");
      }

      // === 生成新平台 ===
      const visibleTop = world.cameraY - 100;
      const highestPlat = Math.min(...world.platforms.map((p) => p.y));

      let gapMin = PLATFORM_GAP_MIN;
      let gapMax = PLATFORM_GAP_MAX;
      if (world.milestone1000) {
        gapMin = 80;
        gapMax = 140;
      }
      if (world.milestone2000) {
        gapMin = 100;
        gapMax = 160;
      }

      if (highestPlat > visibleTop) {
        const gap = gapMin + Math.random() * (gapMax - gapMin);
        const newY = highestPlat - gap;

        let type = PLATFORM_TYPES.NORMAL;
        const rand = Math.random();
        if (rand < 0.08) type = PLATFORM_TYPES.SPRING;
        else if (rand < 0.15) type = PLATFORM_TYPES.MOVING;
        else if (rand < 0.25) type = PLATFORM_TYPES.CRACKED;

        const newPlat = createPlatform(newY, type);
        world.platforms.push(newPlat);

        // 隨機生成道具（機率提高）
        if (Math.random() < 0.15) {
          let puType;
          const rand = Math.random();
          if (rand < 0.4) {
            puType = POWERUP_TYPES.JETPACK; // 40% 火箭
          } else if (rand < 0.6) {
            puType = POWERUP_TYPES.SHIELD; // 20% 護盾
          } else if (rand < 0.8) {
            puType = POWERUP_TYPES.SPRING_SHOES; // 20% 彈簧鞋
          } else {
            puType = POWERUP_TYPES.SAFETY_NET; // 20% 安全網
          }
          world.powerups.push(
            createPowerup(
              newPlat.x + PLATFORM_WIDTH / 2 - 20,
              newY - 50,
              puType
            )
          );
        }
      }

      // === 生成敵人（500m 後）===
      // 限制最多1隻敵人，降低生成機率
      if (heightInMeters >= 50 && world.enemies.length < 1) {
        if (Math.random() < 0.008) {
          // 在畫面外上方生成敵人（玩家看不到的地方）
          const spawnY = world.cameraY - 50;
          const newEnemy = createEnemy(spawnY);

          // 確保敵人不會生成在玩家附近（水平距離至少100px）且不在邊緣安全區
          const distX = Math.abs(newEnemy.x - player.x);
          if (distX > 100 && !isInEdgeSafeZone(newEnemy.x)) {
            world.enemies.push(newEnemy);
          }
        }
      }

      // === 生成黑洞（1500m 後）===
      if (heightInMeters >= 150 && world.blackholes.length < 2) {
        if (Math.random() < 0.001) {
          // 黑洞不在邊緣安全區生成
          const bhX =
            EDGE_SAFE_ZONE +
            Math.random() * (GAME_WIDTH - EDGE_SAFE_ZONE * 2 - 80);
          world.blackholes.push(createBlackhole(bhX, world.cameraY - 100));
        }
      }

      // === 清理畫面外元素 ===
      world.platforms = world.platforms.filter(
        (p) => p.y < world.cameraY + GAME_HEIGHT + 100 && p.state !== "gone"
      );
      world.powerups = world.powerups.filter(
        (p) => !p.collected && p.y < world.cameraY + GAME_HEIGHT + 100
      );
      // 敵人：只保留畫面附近的，被消滅的(x=-1000)也移除
      world.enemies = world.enemies.filter((e) => {
        const screenY = e.y - world.cameraY;
        return e.x > -500 && screenY > -200 && screenY < GAME_HEIGHT + 200;
      });
      world.blackholes = world.blackholes.filter(
        (b) => b.y < world.cameraY + GAME_HEIGHT + 200
      );

      // === 遊戲結束檢查 ===
      if (player.y > world.cameraY + GAME_HEIGHT + 100) {
        if (player.shieldCount > 0) {
          player.shieldCount -= 1;
          setActiveEffects((e) => ({ ...e, shield: player.shieldCount }));
          player.y = world.cameraY + GAME_HEIGHT / 2;
          player.vy = JUMP_VELOCITY;
          unlockAchievement("SURVIVOR");
        } else {
          isRunning = false;
          handleGameOver(world);
          return;
        }
      }

      // === 更新 DOM ===
      updateDOM(player, world);

      rafId = requestAnimationFrame(gameLoop);
    };

    const handleGameOver = (world) => {
      setGameState("gameover");
      const finalScore = Math.floor(world.maxHeight / 10);
      setScore(finalScore);
      if (finalScore > highScoreRef.current) {
        setHighScore(finalScore);
        localStorage.setItem("jumpGameHighScore", finalScore.toString());
      }
      if (playerDomRef.current) {
        playerDomRef.current.classList.add("falling");
      }
    };

    const updateDOM = (player, world) => {
      // 更新分數
      const newScore = Math.floor(world.maxHeight / 10);
      if (newScore !== scoreRef.current) {
        scoreRef.current = newScore;
        setScore(newScore);
        if (scoreDomRef.current) {
          scoreDomRef.current.classList.remove("scoreBounce");
          void scoreDomRef.current.offsetWidth;
          scoreDomRef.current.classList.add("scoreBounce");
        }

        // 檢查是否達到新稱號
        for (let i = SCORE_TITLES.length - 1; i >= 0; i--) {
          const milestone = SCORE_TITLES[i];
          if (
            newScore >= milestone.score &&
            lastTitleMilestone.current < milestone.score
          ) {
            lastTitleMilestone.current = milestone.score;
            setShowTitle(milestone);
            setTimeout(() => setShowTitle(null), 2500);
            break;
          }
        }
      }

      // 更新玩家
      if (playerDomRef.current) {
        let scaleY = 1;
        if (player.isJumping) scaleY = 1.15;
        else if (player.isFalling) scaleY = 0.9;

        playerDomRef.current.style.transform = `translate(${player.x}px, ${
          player.y - world.cameraY
        }px) scaleY(${scaleY})`;
        playerDomRef.current.classList.toggle("boosting", player.isBoosting);
        playerDomRef.current.classList.toggle(
          "hasShield",
          player.shieldCount > 0
        );
        playerDomRef.current.classList.toggle(
          "hasSpringShoes",
          player.springJumpCount > 0
        );
        playerDomRef.current.classList.toggle(
          "hasSafetyNet",
          player.safetyNetCount > 0
        );
        playerDomRef.current.classList.toggle("wrapping", player.isWrapping);
      }

      // 更新平台
      if (platformContainerRef.current) {
        const container = platformContainerRef.current;
        const needed = world.platforms.length;

        while (container.children.length < needed) {
          const div = document.createElement("div");
          div.className = "jumpPlatform normal";
          div.style.cssText = `position:absolute;left:0;top:0;width:${PLATFORM_WIDTH}px;height:${PLATFORM_HEIGHT}px;`;
          container.appendChild(div);
        }
        while (container.children.length > needed) {
          container.removeChild(container.lastChild);
        }

        for (let i = 0; i < world.platforms.length; i++) {
          const plat = world.platforms[i];
          const el = container.children[i];
          if (el) {
            const screenY = plat.y - world.cameraY;
            el.style.transform = `translate(${plat.x}px, ${screenY}px)`;
            el.style.width = `${plat.width}px`; // 動態設定寬度
            el.style.display =
              screenY > -50 && screenY < GAME_HEIGHT + 50 ? "flex" : "none";

            let className = `jumpPlatform ${plat.type}`;
            if (plat.state === "cracked") className += " cracked-state";
            if (plat.flash) className += " flash";
            el.className = className;

            if (
              plat.type === PLATFORM_TYPES.SPRING &&
              !el.querySelector(".jumpSpring")
            ) {
              el.innerHTML = '<div class="jumpSpring">🌀</div>';
            } else if (plat.type !== PLATFORM_TYPES.SPRING) {
              el.innerHTML = "";
            }
          }
        }
      }

      // 更新道具
      if (powerupContainerRef.current) {
        const container = powerupContainerRef.current;
        const visible = world.powerups.filter((p) => !p.collected);

        while (container.children.length < visible.length) {
          const div = document.createElement("div");
          div.className = "jumpPowerup";
          div.style.cssText =
            "position:absolute;left:0;top:0;width:45px;height:45px;";
          container.appendChild(div);
        }
        while (container.children.length > visible.length) {
          container.removeChild(container.lastChild);
        }

        for (let i = 0; i < visible.length; i++) {
          const pu = visible[i];
          const el = container.children[i];
          if (el) {
            const screenY = pu.y - world.cameraY;
            el.style.transform = `translate(${pu.x}px, ${screenY}px)`;
            el.style.display =
              screenY > -60 && screenY < GAME_HEIGHT + 60 ? "flex" : "none";
            el.className = `jumpPowerup ${pu.type}`;
            const icons = {
              jetpack: "🚀",
              springShoes: "👟",
              shield: "🛡️",
              safetyNet: "🪢",
            };
            el.textContent = icons[pu.type] || "⭐";
          }
        }
      }

      // 更新敵人
      if (enemyContainerRef.current) {
        const container = enemyContainerRef.current;
        const enemies = world.enemies.filter((e) => e.x > -500);

        while (container.children.length < enemies.length) {
          const div = document.createElement("div");
          div.className = "jumpEnemy";
          div.style.cssText =
            "position:absolute;left:0;top:0;width:40px;height:40px;";
          div.textContent = "👾";
          container.appendChild(div);
        }
        while (container.children.length > enemies.length) {
          container.removeChild(container.lastChild);
        }

        for (let i = 0; i < enemies.length; i++) {
          const enemy = enemies[i];
          const el = container.children[i];
          if (el) {
            const screenY = enemy.y - world.cameraY;
            // 加入左右翻轉效果表示移動方向
            const scaleX = enemy.direction > 0 ? 1 : -1;
            el.style.transform = `translate(${enemy.x}px, ${screenY}px) scaleX(${scaleX})`;
            el.style.display =
              screenY > -50 && screenY < GAME_HEIGHT + 50 ? "flex" : "none";
          }
        }
      }

      // 更新黑洞
      if (blackholeContainerRef.current) {
        const container = blackholeContainerRef.current;

        while (container.children.length < world.blackholes.length) {
          const div = document.createElement("div");
          div.className = "jumpBlackhole";
          div.style.cssText = "position:absolute;left:0;top:0;";
          container.appendChild(div);
        }
        while (container.children.length > world.blackholes.length) {
          container.removeChild(container.lastChild);
        }

        for (let i = 0; i < world.blackholes.length; i++) {
          const bh = world.blackholes[i];
          const el = container.children[i];
          if (el) {
            const screenY = bh.y - world.cameraY;
            el.style.transform = `translate(${bh.x - bh.radius}px, ${
              screenY - bh.radius
            }px)`;
            el.style.width = `${bh.radius * 2}px`;
            el.style.height = `${bh.radius * 2}px`;
            el.style.display =
              screenY > -100 && screenY < GAME_HEIGHT + 100 ? "flex" : "none";
          }
        }
      }
    };

    rafId = requestAnimationFrame(gameLoop);

    return () => {
      isRunning = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [gameState, unlockAchievement]);

  // ============ 鍵盤控制 ============
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (gameState === "gameover" || gameState === "ready") &&
        (e.key === "Enter" || e.key === " ")
      ) {
        resetGame();
        return;
      }
      if ((e.key === "p" || e.key === "P") && gameState === "playing") {
        setIsPaused((p) => !p);
        return;
      }
      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          inputRef.current.left = true;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          inputRef.current.right = true;
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          inputRef.current.left = false;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          inputRef.current.right = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState, resetGame]);

  // ============ 觸控 & 按鈕控制 ============
  const handleTouchStart = useCallback(
    (e) => {
      if (gameState !== "playing") return;
      const touch = e.touches[0];
      const rect = gameRef.current?.getBoundingClientRect();
      if (!rect) return;
      const touchX = touch.clientX - rect.left;
      if (touchX < rect.width / 2) {
        inputRef.current.left = true;
        inputRef.current.right = false;
      } else {
        inputRef.current.right = true;
        inputRef.current.left = false;
      }
    },
    [gameState]
  );

  const handleTouchEnd = useCallback(() => {
    inputRef.current.left = false;
    inputRef.current.right = false;
  }, []);

  const handleControlPress = useCallback((direction) => {
    if (direction === "left") {
      inputRef.current.left = true;
      inputRef.current.right = false;
    } else {
      inputRef.current.right = true;
      inputRef.current.left = false;
    }
  }, []);

  const handleControlRelease = useCallback(() => {
    inputRef.current.left = false;
    inputRef.current.right = false;
  }, []);

  return (
    <div className="oneui">
      <div className="jumpShell">
        {/* 頂部導航 */}
        <header className="jumpHeader">
          <button className="backBtn" onClick={() => navigate("/")}>
            ← 返回
          </button>
          <h1 className="jumpTitle">🦘 柴剛上岸跳跳</h1>
        </header>

        {/* 分數顯示 */}
        <div className="jumpScoreBar">
          <div className="jumpScoreItem">
            <span className="jumpScoreLabel">分數</span>
            <span className="jumpScoreValue" ref={scoreDomRef}>
              {score}
            </span>
          </div>
          <div className="jumpScoreItem">
            <span className="jumpScoreLabel">最高</span>
            <span className="jumpScoreValue best">{highScore}</span>
          </div>
          <div className="jumpEffects">
            {activeEffects.jetpack && <span className="jumpEffect">🚀</span>}
            {activeEffects.springShoes > 0 && (
              <span className="jumpEffect springShoes">
                👟<span className="effectCount">{activeEffects.springShoes}</span>
              </span>
            )}
            {activeEffects.shield > 0 && (
              <span className="jumpEffect shield">
                🛡️<span className="effectCount">{activeEffects.shield}</span>
              </span>
            )}
            {activeEffects.safetyNet > 0 && (
              <span className="jumpEffect safetyNet">
                🪢<span className="effectCount">{activeEffects.safetyNet}</span>
              </span>
            )}
          </div>
        </div>

        {/* 成就提示 */}
        {showAchievement && (
          <div className="jumpAchievementPopup">
            <span className="achievementIcon">{showAchievement.icon}</span>
            <div className="achievementText">
              <span className="achievementTitle">
                🏆 {showAchievement.title}
              </span>
              <span className="achievementDesc">{showAchievement.desc}</span>
            </div>
          </div>
        )}

        {/* 分數稱號提示 */}
        {showTitle && (
          <div className="jumpTitlePopup">
            <span className="titleIcon">{showTitle.icon}</span>
            <span className="titleText">{showTitle.title}</span>
            <span className="titleScore">{showTitle.score}m 達成！</span>
          </div>
        )}

        {/* 遊戲區域 */}
        <div
          className="jumpGameArea"
          ref={gameRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          <div ref={blackholeContainerRef} className="jumpBlackholeContainer" />
          <div ref={platformContainerRef} className="jumpPlatformContainer" />
          <div ref={powerupContainerRef} className="jumpPowerupContainer" />
          <div ref={enemyContainerRef} className="jumpEnemyContainer" />

          {gameState === "playing" && (
            <div
              ref={playerDomRef}
              className="jumpPlayer"
              style={{ width: PLAYER_WIDTH, height: PLAYER_HEIGHT }}
            >
              <div className="jumpPlayerBody">
                <div className="jumpPlayerFace">
                  <div className="jumpPlayerEye left"></div>
                  <div className="jumpPlayerEye right"></div>
                </div>
              </div>
              <div className="jumpJetpackFlame"></div>
              <div className="jumpShieldAura"></div>
              <div className="jumpSafetyNetAura"></div>
            </div>
          )}

          {gameState === "ready" && (
            <div className="jumpOverlay">
              <div className="jumpOverlayContent">
                <div className="jumpOverlayEmoji">🦘</div>
                <h2>柴剛上岸跳跳</h2>
                <p>⌨️ 方向鍵 / 📱 觸控控制</p>
                <p className="jumpHint">踩平台往上跳！小心怪物和黑洞！</p>
                <div className="jumpPowerupGuide">
                  <span>🚀 噴射背包 (2.5秒)</span>
                  <span>👟 彈簧鞋 (5次)</span>
                  <span>🛡️ 護盾 (免死1次)</span>
                  <span>🪢 安全網 (3次穿牆生成平台)</span>
                </div>
                <button className="jumpStartBtn" onClick={resetGame}>
                  開始遊戲
                </button>
              </div>
            </div>
          )}

          {isPaused && gameState === "playing" && (
            <div className="jumpOverlay">
              <div className="jumpOverlayContent">
                <div className="jumpOverlayEmoji">⏸️</div>
                <h2>遊戲暫停</h2>
                <button
                  className="jumpStartBtn"
                  onClick={() => setIsPaused(false)}
                >
                  繼續遊戲
                </button>
              </div>
            </div>
          )}

          {gameState === "gameover" && (
            <div className="jumpOverlay gameOver">
              <div className="jumpOverlayContent">
                <div className="jumpOverlayEmoji">💀</div>
                <h2>Game Over</h2>
                <p className="jumpFinalScore">分數：{score}m</p>
                {score >= highScore && score > 0 && (
                  <p className="jumpNewRecord">🎉 新紀錄！</p>
                )}
                <button className="jumpStartBtn" onClick={resetGame}>
                  重新開始
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 控制按鈕 */}
        <div className="jumpControls">
          <button
            className="jumpControlBtn left"
            onTouchStart={() => handleControlPress("left")}
            onTouchEnd={handleControlRelease}
            onMouseDown={() => handleControlPress("left")}
            onMouseUp={handleControlRelease}
            onMouseLeave={handleControlRelease}
          >
            ◀️
          </button>
          <button
            className="jumpPauseBtn"
            onClick={() => gameState === "playing" && setIsPaused((p) => !p)}
          >
            {isPaused ? "▶️" : "⏸️"}
          </button>
          <button
            className="jumpControlBtn right"
            onTouchStart={() => handleControlPress("right")}
            onTouchEnd={handleControlRelease}
            onMouseDown={() => handleControlPress("right")}
            onMouseUp={handleControlRelease}
            onMouseLeave={handleControlRelease}
          >
            ▶️
          </button>
        </div>

        <div className="jumpControlHint">
          <span>⌨️ ← → 方向鍵</span>
          <span>📱 點擊左右移動</span>
          <span>P 暫停</span>
        </div>
      </div>
    </div>
  );
}
