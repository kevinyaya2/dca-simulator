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
};

// 道具類型
const POWERUP_TYPES = {
  JETPACK: "jetpack",
  SPRING_SHOES: "springShoes",
  SHIELD: "shield",
  SAFETY_NET: "safetyNet", // 安全網：翻牆時生成安全平台
  PORTAL: "portal", // 傳送門：瞬移至當前高度的0.5倍
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
  // 道具使用次數成就
  // 噴射背包
  POWERUP_JETPACK_10: {
    id: "jetpack10",
    title: "火箭學徒",
    desc: "使用噴射背包 10 次",
    icon: "🚀",
  },
  POWERUP_JETPACK_20: {
    id: "jetpack20",
    title: "火箭專家",
    desc: "使用噴射背包 20 次",
    icon: "🚀",
  },
  POWERUP_JETPACK_30: {
    id: "jetpack30",
    title: "火箭大師",
    desc: "使用噴射背包 30 次",
    icon: "🚀",
  },
  POWERUP_JETPACK_40: {
    id: "jetpack40",
    title: "火箭傳奇",
    desc: "使用噴射背包 40 次",
    icon: "🚀",
  },
  POWERUP_JETPACK_50: {
    id: "jetpack50",
    title: "火箭之神",
    desc: "使用噴射背包 50 次",
    icon: "🚀",
  },
  // 彈簧鞋
  POWERUP_SPRINGSHOES_10: {
    id: "springShoes10",
    title: "彈跳高手",
    desc: "使用彈簧鞋 10 次",
    icon: "👟",
  },
  POWERUP_SPRINGSHOES_20: {
    id: "springShoes20",
    title: "彈跳專家",
    desc: "使用彈簧鞋 20 次",
    icon: "👟",
  },
  POWERUP_SPRINGSHOES_30: {
    id: "springShoes30",
    title: "彈跳大師",
    desc: "使用彈簧鞋 30 次",
    icon: "👟",
  },
  POWERUP_SPRINGSHOES_40: {
    id: "springShoes40",
    title: "彈跳傳奇",
    desc: "使用彈簧鞋 40 次",
    icon: "👟",
  },
  POWERUP_SPRINGSHOES_50: {
    id: "springShoes50",
    title: "彈跳之神",
    desc: "使用彈簧鞋 50 次",
    icon: "👟",
  },
  // 護盾
  POWERUP_SHIELD_10: {
    id: "shield10",
    title: "鐵壁守護",
    desc: "使用護盾擋下 10 次傷害",
    icon: "🛡️",
  },
  POWERUP_SHIELD_20: {
    id: "shield20",
    title: "鋼鐵堡壘",
    desc: "使用護盾擋下 20 次傷害",
    icon: "🛡️",
  },
  POWERUP_SHIELD_30: {
    id: "shield30",
    title: "不朽之盾",
    desc: "使用護盾擋下 30 次傷害",
    icon: "🛡️",
  },
  POWERUP_SHIELD_40: {
    id: "shield40",
    title: "傳奇守護",
    desc: "使用護盾擋下 40 次傷害",
    icon: "🛡️",
  },
  POWERUP_SHIELD_50: {
    id: "shield50",
    title: "無敵戰神",
    desc: "使用護盾擋下 50 次傷害",
    icon: "🛡️",
  },
  // 安全網
  POWERUP_SAFETYNET_10: {
    id: "safetyNet10",
    title: "安全專家",
    desc: "使用安全網 10 次",
    icon: "🪢",
  },
  POWERUP_SAFETYNET_20: {
    id: "safetyNet20",
    title: "穿牆大師",
    desc: "使用安全網 20 次",
    icon: "🪢",
  },
  POWERUP_SAFETYNET_30: {
    id: "safetyNet30",
    title: "空間掌控",
    desc: "使用安全網 30 次",
    icon: "🪢",
  },
  POWERUP_SAFETYNET_40: {
    id: "safetyNet40",
    title: "次元行者",
    desc: "使用安全網 40 次",
    icon: "🪢",
  },
  POWERUP_SAFETYNET_50: {
    id: "safetyNet50",
    title: "時空主宰",
    desc: "使用安全網 50 次",
    icon: "🪢",
  },
  // 傳送門
  POWERUP_PORTAL_10: {
    id: "portal10",
    title: "空間學徒",
    desc: "使用傳送門 10 次",
    icon: "🌀",
  },
  POWERUP_PORTAL_20: {
    id: "portal20",
    title: "傳送專家",
    desc: "使用傳送門 20 次",
    icon: "🌀",
  },
  POWERUP_PORTAL_30: {
    id: "portal30",
    title: "傳送大師",
    desc: "使用傳送門 30 次",
    icon: "🌀",
  },
  POWERUP_PORTAL_40: {
    id: "portal40",
    title: "時空旅者",
    desc: "使用傳送門 40 次",
    icon: "🌀",
  },
  POWERUP_PORTAL_50: {
    id: "portal50",
    title: "維度之主",
    desc: "使用傳送門 50 次",
    icon: "🌀",
  },
};

// 分數稱號里程碑 - 基礎稱號（固定）
const BASE_SCORE_TITLES = [
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

// 動態稱號生成規則
const DYNAMIC_TITLE_LEVELS = [
  // 10k-100k: 每 +10k
  {
    start: 20000,
    end: 100000,
    step: 10000,
    titles: [
      "重力挑戰者",
      "高度征服者",
      "天空探索者",
      "雲端支配者",
      "空域主宰",
      "無界行者",
      "天際開拓者",
      "星空挑戰者",
    ],
    icon: "🌊",
  },
  // 100k-1M: 每 ×2 倍
  {
    start: 100000,
    end: 1000000,
    multiplier: 2,
    titles: [
      "維度破壞者",
      "空間主宰",
      "現實超越者",
      "世界邊界行者",
      "極限追尋者",
    ],
    icon: "💎",
  },
  // 1M+: 每 ×5 倍
  {
    start: 1000000,
    end: Infinity,
    multiplier: 5,
    titles: ["宇宙旅人", "時空超越者", "次元主宰", "全能神明", "無限存在"],
    icon: "🌌",
  },
];

// 動態計算稱號函數
const getScoreTitle = (score) => {
  // 1. 先檢查基礎稱號
  for (let i = BASE_SCORE_TITLES.length - 1; i >= 0; i--) {
    if (score >= BASE_SCORE_TITLES[i].score) {
      return {
        milestoneScore: BASE_SCORE_TITLES[i].score,
        title: BASE_SCORE_TITLES[i].title,
        icon: BASE_SCORE_TITLES[i].icon,
      };
    }
  }

  // 2. 動態稱號（高分段）
  for (const level of DYNAMIC_TITLE_LEVELS) {
    if (score >= level.start && score < level.end) {
      let milestoneScore;
      let titleIndex;

      if (level.step) {
        // 線性增長（每 +step）
        const stepsFromStart = Math.floor((score - level.start) / level.step);
        milestoneScore = level.start + stepsFromStart * level.step;
        titleIndex = Math.min(stepsFromStart, level.titles.length - 1);
      } else if (level.multiplier) {
        // 倍數增長（每 ×multiplier）
        let current = level.start;
        let index = 0;
        while (
          current * level.multiplier <= score &&
          current * level.multiplier < level.end
        ) {
          current *= level.multiplier;
          index++;
        }
        milestoneScore = current;
        titleIndex = Math.min(index, level.titles.length - 1);
      }

      return {
        milestoneScore,
        title: level.titles[titleIndex],
        icon: level.icon,
      };
    }
  }

  // 3. 超高分（備用）
  return {
    milestoneScore: Math.floor(score / 5000000) * 5000000,
    title: "超越神話",
    icon: "🛸",
  };
};

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

  return {
    id: generateId(),
    x,
    y,
    width: PLATFORM_WIDTH,
    height: PLATFORM_HEIGHT,
    type,
    direction: Math.random() > 0.5 ? 1 : -1,
    speed: 2,
    flash: false,
  };
};

const createPowerup = (x, y, type, platformId = null) => {
  const size = type === POWERUP_TYPES.PORTAL ? 45 : 40;
  return {
    id: generateId(),
    x,
    y,
    width: size,
    height: size,
    type,
    collected: false,
    platformId, // 關聯的平台 ID（用於跟隨移動）
    offsetX: 0, // 相對平台的 X 偏移
    offsetY: -50, // 相對平台的 Y 偏移（預設在平台上方50px）
  };
};

const createEnemy = (y) => ({
  id: generateId(),
  x: Math.random() * (GAME_WIDTH - 40),
  y,
  centerY: y, // 中心高度（上下浮動的基準點）
  floatRange: 30, // 上下浮動範圍（±30px）
  floatDirection: Math.random() > 0.5 ? 1 : -1, // 浮動方向
  floatSpeed: 0.3 + Math.random() * 0.2, // 浮動速度 0.3-0.5（很慢）
  width: 40,
  height: 40,
  direction: Math.random() > 0.5 ? 1 : -1,
  speed: 2.5 + Math.random() * 2, // 水平移動速度 2.5-4.5
  vy: 6, // 被踩後的掉落速度
  isBounced: false, // 是否已被踩（變成彈跳平台）
  rotation: 0, // 旋轉角度
  rotateSpeed: 8, // 掉落時旋轉速度
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
    teleporting: false,
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

  // DOM Map refs (用於 id 對齊，避免殘影)
  const platformDomMap = useRef(new Map());
  const powerupDomMap = useRef(new Map());
  const enemyDomMap = useRef(new Map());
  const blackholeDomMap = useRef(new Map());

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
    // 傳送門相關
    isTeleporting: false, // 傳送中（視覺效果）
    lastPortalTime: 0, // 上次使用 Portal 的時間（cooldown）
    prevY: GAME_HEIGHT - 150, // 上一幀的 Y 位置（用於踩敵判定）
    jumpType: "normal", // 當前跳躍類型
  });

  // 世界狀態
  const worldRef = useRef({
    cameraY: 0,
    maxHeightPx: 0, // 最高高度（像素）
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

  // Timeout 集中管理
  const timeoutsRef = useRef([]);
  const safeTimeout = useCallback((fn, t) => {
    const id = setTimeout(fn, t);
    timeoutsRef.current.push(id);
    return id;
  }, []);

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

  // activeEffects 定期同步（避免 game loop 中頻繁 setState）
  useEffect(() => {
    if (gameState !== "playing") return;
    const id = setInterval(() => {
      const p = playerRef.current;
      setActiveEffects({
        jetpack: p.isBoosting,
        springShoes: p.springJumpCount,
        shield: p.shieldCount,
        safetyNet: p.safetyNetCount,
        teleporting: p.isTeleporting,
      });
    }, 250);
    return () => clearInterval(id);
  }, [gameState]);

  // 清理所有 timeouts
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  // ============ 成就解鎖 ============
  const unlockAchievement = useCallback(
    (achievementKey) => {
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
      safeTimeout(() => setShowAchievement(null), 3000);
    },
    [safeTimeout]
  );

  // 檢查道具使用次數成就
  const checkPowerupAchievements = useCallback(
    (usage) => {
      // 噴射背包
      if (usage.jetpack >= 10) unlockAchievement("POWERUP_JETPACK_10");
      if (usage.jetpack >= 20) unlockAchievement("POWERUP_JETPACK_20");
      if (usage.jetpack >= 30) unlockAchievement("POWERUP_JETPACK_30");
      if (usage.jetpack >= 40) unlockAchievement("POWERUP_JETPACK_40");
      if (usage.jetpack >= 50) unlockAchievement("POWERUP_JETPACK_50");
      // 彈簧鞋
      if (usage.springShoes >= 10) unlockAchievement("POWERUP_SPRINGSHOES_10");
      if (usage.springShoes >= 20) unlockAchievement("POWERUP_SPRINGSHOES_20");
      if (usage.springShoes >= 30) unlockAchievement("POWERUP_SPRINGSHOES_30");
      if (usage.springShoes >= 40) unlockAchievement("POWERUP_SPRINGSHOES_40");
      if (usage.springShoes >= 50) unlockAchievement("POWERUP_SPRINGSHOES_50");
      // 護盾
      if (usage.shield >= 10) unlockAchievement("POWERUP_SHIELD_10");
      if (usage.shield >= 20) unlockAchievement("POWERUP_SHIELD_20");
      if (usage.shield >= 30) unlockAchievement("POWERUP_SHIELD_30");
      if (usage.shield >= 40) unlockAchievement("POWERUP_SHIELD_40");
      if (usage.shield >= 50) unlockAchievement("POWERUP_SHIELD_50");
      // 安全網
      if (usage.safetyNet >= 10) unlockAchievement("POWERUP_SAFETYNET_10");
      if (usage.safetyNet >= 20) unlockAchievement("POWERUP_SAFETYNET_20");
      if (usage.safetyNet >= 30) unlockAchievement("POWERUP_SAFETYNET_30");
      if (usage.safetyNet >= 40) unlockAchievement("POWERUP_SAFETYNET_40");
      if (usage.safetyNet >= 50) unlockAchievement("POWERUP_SAFETYNET_50");
      // 傳送門
      if (usage.portal >= 10) unlockAchievement("POWERUP_PORTAL_10");
      if (usage.portal >= 20) unlockAchievement("POWERUP_PORTAL_20");
      if (usage.portal >= 30) unlockAchievement("POWERUP_PORTAL_30");
      if (usage.portal >= 40) unlockAchievement("POWERUP_PORTAL_40");
      if (usage.portal >= 50) unlockAchievement("POWERUP_PORTAL_50");
    },
    [unlockAchievement]
  );

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
      else if (rand < 0.18) type = PLATFORM_TYPES.MOVING;

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

    // 清空 DOM Map（避免重置遊戲後殘留舊引用）
    platformDomMap.current.clear();
    powerupDomMap.current.clear();
    enemyDomMap.current.clear();
    blackholeDomMap.current.clear();
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
      // 傳送門相關
      isTeleporting: false,
      lastPortalTime: 0,
      prevY: GAME_HEIGHT - 150, // 上一幀的 Y 位置
      jumpType: "normal",
    };

    worldRef.current = {
      cameraY: 0,
      maxHeightPx: 0,
      platforms: initialPlatforms,
      powerups: [],
      enemies: [],
      blackholes: [],
      milestone1000: false,
      milestone2000: false,
      springCount: 0,
      jetpackTime: 0,
      // 道具使用次數統計
      powerupUsage: {
        jetpack: 0,
        springShoes: 0,
        shield: 0,
        safetyNet: 0,
        portal: 0,
      },
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
      const scoreMeters = Math.floor(world.maxHeightPx / 10);

      // === 更新道具計時器 ===
      if (player.isBoosting) {
        player.boostTimer -= deltaTime;
        world.jetpackTime += deltaTime;
        if (player.boostTimer <= 0) {
          player.isBoosting = false;
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
        player.jumpType = "jetpack";
      } else {
        player.vy += GRAVITY * timeScale;
      }

      // 黑洞吸引
      for (const bh of world.blackholes) {
        const dx = bh.x - (player.x + player.width / 2);
        const dy = bh.y - (player.y + player.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const safeDist = Math.max(dist, 20); // 防止距離過近速度爆炸
          const force = bh.pullStrength * (1 - dist / 150) * timeScale;
          player.vy += force * 2;
          player.vx += (dx / safeDist) * force;
        }
      }

      // 翻牆後微吸附畫面中心
      if (currentTime < player.wrapCenterPullUntil) {
        const centerX = GAME_WIDTH / 2 - player.width / 2;
        player.x += (centerX - player.x) * 0.05 * timeScale;
      }

      // 保存前一幀位置（用於踩敵判定）
      player.prevY = player.y;

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
          world.powerupUsage.safetyNet += 1;
          checkPowerupAchievements(world.powerupUsage);

          // 4. 短暫無敵（200ms）- 僅安全網道具時
          player.wrapInvincibleUntil = currentTime + 200;
          // 5. 視覺效果 - 僅安全網道具時
          player.isWrapping = true;
          safeTimeout(() => {
            player.isWrapping = false;
          }, 150);

          // 6. 生成安全平台
          const safetyPlatformY = player.y + PLAYER_HEIGHT + 30;

          // 先清理該位置附近的舊平台（避免重疊）
          world.platforms = world.platforms.filter((p) => {
            const distY = Math.abs(p.y - safetyPlatformY);
            return distY > 50; // 與新平台垂直距離超過50px才保留
          });

          const safetyPlatform = {
            id: generateId(),
            x: player.x - PLATFORM_WIDTH / 2 + PLAYER_WIDTH / 2, // 置中於玩家
            y: safetyPlatformY, // 玩家下方30px
            width: PLATFORM_WIDTH * 1.5, // 稍寬一點更容易落地
            height: PLATFORM_HEIGHT,
            type: PLATFORM_TYPES.NORMAL,
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
          safeTimeout(() => {
            safetyPlatform.flash = false;
          }, 500);
        }
      }

      // === 更新移動平台 ===
      for (const plat of world.platforms) {
        if (plat.type === PLATFORM_TYPES.MOVING) {
          const oldX = plat.x;
          plat.x += plat.speed * plat.direction * timeScale;
          // 碰到邊界時反轉方向並修正位置
          if (plat.x <= 0) {
            plat.x = 0;
            plat.direction *= -1;
          } else if (plat.x + plat.width >= GAME_WIDTH) {
            plat.x = GAME_WIDTH - plat.width;
            plat.direction *= -1;
          }

          // 同步移動平台上的道具（X 和 Y 都要更新）
          const deltaX = plat.x - oldX;
          for (const pu of world.powerups) {
            if (pu.platformId === plat.id && !pu.collected) {
              pu.x += deltaX;
              // 根據平台當前位置重新計算 Y 座標（保持相對偏移）
              pu.y = plat.y + pu.offsetY;
            }
          }
        }
      }

      // === 更新敵人 ===
      for (const enemy of world.enemies) {
        if (enemy.isBounced) {
          // 被踩後：旋轉掉落
          enemy.y += enemy.vy * timeScale;
          enemy.rotation += enemy.rotateSpeed * timeScale;
        } else {
          // 正常敵人：1000分數後才會水平移動
          if (scoreRef.current >= 1000) {
            enemy.x += enemy.speed * enemy.direction * timeScale;
            if (enemy.x <= 0 || enemy.x + enemy.width >= GAME_WIDTH) {
              enemy.direction *= -1;
            }
          }

          // 上下浮動（很慢的速度）
          enemy.y += enemy.floatSpeed * enemy.floatDirection * timeScale;
          const distFromCenter = enemy.y - enemy.centerY;
          if (distFromCenter > enemy.floatRange) {
            enemy.floatDirection = -1;
            enemy.y = enemy.centerY + enemy.floatRange;
          } else if (distFromCenter < -enemy.floatRange) {
            enemy.floatDirection = 1;
            enemy.y = enemy.centerY - enemy.floatRange;
          }
        }
      }

      // === 碰撞檢測（平台）===
      if (player.vy > 0 && !player.isBoosting) {
        const playerBottom = player.y + player.height;
        const playerLeft = player.x;
        const playerRight = player.x + player.width;

        for (const plat of world.platforms) {
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
                player.jumpType =
                  player.springJumpCount > 0 ? "springShoes" : "normal";
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  world.powerupUsage.springShoes += 1;
                  checkPowerupAchievements(world.powerupUsage);
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                safeTimeout(() => {
                  plat.flash = false;
                }, 150);
                break;
              }

              if (plat.type === PLATFORM_TYPES.SPRING) {
                player.vy = SPRING_VELOCITY * player.jumpMultiplier;
                player.jumpType = "spring";
                world.springCount++;
                if (world.springCount >= 10) {
                  unlockAchievement("SPRING_KING");
                }
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  world.powerupUsage.springShoes += 1;
                  checkPowerupAchievements(world.powerupUsage);
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                safeTimeout(() => {
                  plat.flash = false;
                }, 150);
              } else {
                player.vy = JUMP_VELOCITY * player.jumpMultiplier;
                player.jumpType =
                  player.springJumpCount > 0 ? "springShoes" : "normal";
                if (player.springJumpCount > 0) {
                  player.springJumpCount--;
                  world.powerupUsage.springShoes += 1;
                  checkPowerupAchievements(world.powerupUsage);
                  if (player.springJumpCount === 0) {
                    player.jumpMultiplier = 1;
                  }
                }
                plat.flash = true;
                safeTimeout(() => {
                  plat.flash = false;
                }, 150);
              }
              break;
            }
          }
        }

        // 立即清理已消失的平台（避免渲染殘影）
        world.platforms = world.platforms.filter((p) => p.state !== "gone");
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
            world.powerupUsage.jetpack += 1;
            checkPowerupAchievements(world.powerupUsage);
          } else if (pu.type === POWERUP_TYPES.SPRING_SHOES) {
            player.jumpMultiplier = SPRING_SHOES_MULTIPLIER;
            player.springJumpCount += 5; // 獲得5次加強跳躍
          } else if (pu.type === POWERUP_TYPES.SHIELD) {
            player.shieldCount += 1; // 獲得1次護盾
          } else if (pu.type === POWERUP_TYPES.SAFETY_NET) {
            player.safetyNetCount += 3; // 獲得3次使用機會
          } else if (pu.type === POWERUP_TYPES.PORTAL) {
            // === Portal 傳送邏輯 ===
            // 1. 計算順移距離 = 當前高度 × 0.5
            const currentHeightPx = world.maxHeightPx;
            const teleportDistance = currentHeightPx * 0.5;
            let targetY = player.y - teleportDistance;

            // 2. 安全性檢查
            let isSafe = true;

            // 不可落在黑洞半徑內（80px）
            for (const bh of world.blackholes) {
              const dist = Math.sqrt(
                Math.pow(player.x + player.width / 2 - bh.x, 2) +
                  Math.pow(targetY + player.height / 2 - bh.y, 2)
              );
              if (dist < bh.radius + 40) {
                isSafe = false;
                break;
              }
            }

            // 不可落在敵人 ±80px 內
            if (isSafe) {
              for (const enemy of world.enemies) {
                const distY = Math.abs(targetY - enemy.y);
                const distX = Math.abs(player.x - enemy.x);
                if (distY < 80 && distX < 80) {
                  isSafe = false;
                  break;
                }
              }
            }

            // 3. 執行傳送（如果安全）
            if (isSafe && teleportDistance > 50) {
              // 統計使用次數
              world.powerupUsage.portal += 1;
              checkPowerupAchievements(world.powerupUsage);

              // 傳送前視覺效果
              player.isTeleporting = true;
              safeTimeout(() => {
                player.isTeleporting = false;
              }, 150);

              // 執行瞬移
              player.y = targetY;
              player.vy = JUMP_VELOCITY * 0.8;

              // 傳送後保護機制
              player.wrapGraceJump = true; // 一次安全跳
              player.wrapInvincibleUntil = currentTime + 300; // 300ms 無敵
              player.lastPortalTime = currentTime; // 記錄使用時間

              // 在傳送目標附近生成安全平台（確保有落腳點）
              // 根據傳送距離動態調整平台數量（避免前期過密）
              let platformsToGenerate;
              if (teleportDistance < 1000) {
                platformsToGenerate = 2; // 前期：2個平台
              } else if (teleportDistance < 3000) {
                platformsToGenerate = 3; // 中期：3個平台
              } else if (teleportDistance < 8000) {
                platformsToGenerate = 4; // 高分：4個平台
              } else {
                platformsToGenerate = 5; // 超高分：5個平台
              }

              // 先清理傳送目標區域的舊平台（避免重疊）
              const cleanupRangeStart = targetY - 50;
              const cleanupRangeEnd = targetY + 500;
              world.platforms = world.platforms.filter(
                (p) => p.y < cleanupRangeStart || p.y > cleanupRangeEnd
              );

              for (let i = 0; i < platformsToGenerate; i++) {
                const platformY = targetY + 100 + i * 80; // 從玩家下方100px開始，每個間隔80px
                const platformX = Math.random() * (GAME_WIDTH - PLATFORM_WIDTH);

                const safetyPlat = {
                  id: generateId(),
                  x: platformX,
                  y: platformY,
                  width: PLATFORM_WIDTH,
                  height: PLATFORM_HEIGHT,
                  type: PLATFORM_TYPES.NORMAL,
                  state: "normal",
                  direction: 1,
                  speed: 0,
                  flash: false,
                };
                world.platforms.push(safetyPlat);
              }
            }
            // 如果不安全，Portal 作廢（collected 已設為 true）
          }
        }
      }

      // === 碰撞檢測（敵人）===
      for (const enemy of world.enemies) {
        // 已被踩的敵人不再造成傷害
        if (enemy.isBounced) continue;

        // 只檢測畫面內的敵人
        const enemyScreenY = enemy.y - world.cameraY;
        if (enemyScreenY < -50 || enemyScreenY > GAME_HEIGHT + 50) continue;

        // 翻牆無敵期間跳過敵人碰撞
        if (currentTime < player.wrapInvincibleUntil) continue;

        const playerBottom = player.y + player.height;
        const playerLeft = player.x;
        const playerRight = player.x + player.width;

        // 水平重疊檢查
        const hasHorizontalOverlap =
          playerRight > enemy.x && playerLeft < enemy.x + enemy.width;

        
        // 踩敵判定（
        const prevPlayerBottom = player.prevY + player.height;
        const isStompingEnemy =
          player.vy > 0 && // 玩家正在下落
          hasHorizontalOverlap &&
          prevPlayerBottom <= enemy.y && // 前一幀在敵人上方
          playerBottom >= enemy.y && // 當前幀接觸敵人頂部
          playerBottom <= enemy.y + enemy.height * 0.5; // 接觸敵人上半部

        if (isStompingEnemy) {
          // 彈簧鞋加成
          const springShoesMultiplier =
            player.springJumpCount > 0 ? SPRING_SHOES_MULTIPLIER : 1;

          player.vy =
            SPRING_VELOCITY *
            1.5 *
            player.jumpMultiplier *
            springShoesMultiplier;

          player.jumpType = "enemy";

          // 消耗彈簧鞋次數
          if (player.springJumpCount > 0) {
            player.springJumpCount--;
            world.powerupUsage.springShoes += 1;
            checkPowerupAchievements(world.powerupUsage);
            if (player.springJumpCount === 0) {
              player.jumpMultiplier = 1;
            }
          }

          enemy.isBounced = true;
          enemy.vy = 6;
          enemy.direction = 0;
          continue;
        }

        
        // 非普通跳躍狀態：碰撞直接擊殺敵人（不彈跳）
        //    包含：噴射背包、彈簧、彈簧鞋「側撞」
        const isNotNormalJump =
          player.isBoosting || player.jumpType !== "normal";

        if (isNotNormalJump && hasHorizontalOverlap) {
          const verticalOverlap =
            playerBottom > enemy.y && player.y < enemy.y + enemy.height;

          if (verticalOverlap) {
            enemy.isBounced = true;
            enemy.vy = 6;
            enemy.direction = 0;
            continue;
          }
        }

        // 一般碰撞（側邊或下方）
        const tolerance = 5;
        if (
          player.x + player.width - tolerance > enemy.x + tolerance &&
          player.x + tolerance < enemy.x + enemy.width - tolerance &&
          player.y + player.height - tolerance > enemy.y + tolerance &&
          player.y + tolerance < enemy.y + enemy.height - tolerance
        ) {
          if (player.shieldCount > 0) {
            player.shieldCount -= 1;
            world.powerupUsage.shield += 1;
            checkPowerupAchievements(world.powerupUsage);
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
      if (currentHeight > world.maxHeightPx) {
        world.maxHeightPx = currentHeight;
      }

      // === 里程碑檢查 ===
      if (
        scoreMeters >= 50 &&
        !achievementsRef.current[ACHIEVEMENTS.FIRST_500.id]
      ) {
        unlockAchievement("FIRST_500");
      }
      if (scoreMeters >= 100 && !world.milestone1000) {
        world.milestone1000 = true;
        unlockAchievement("REACH_1000");
      }
      if (scoreMeters >= 200 && !world.milestone2000) {
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
        else if (rand < 0.18) type = PLATFORM_TYPES.MOVING;

        const newPlat = createPlatform(newY, type);
        world.platforms.push(newPlat);

        // 隨機生成道具（機率提高）
        if (Math.random() < 0.2) {
          let puType;
          const rand = Math.random();
          if (rand < 0.2) {
            puType = POWERUP_TYPES.JETPACK; // 20% 火箭
          } else if (rand < 0.4) {
            puType = POWERUP_TYPES.SHIELD; // 20% 護盾
          } else if (rand < 0.6) {
            puType = POWERUP_TYPES.SPRING_SHOES; // 20% 彈簧鞋
          } else if (rand < 0.8) {
            puType = POWERUP_TYPES.SAFETY_NET; // 20% 安全網
          } else {
            puType = POWERUP_TYPES.PORTAL; // 20% 傳送門
          }

          // 計算道具位置
          let puX = newPlat.x + PLATFORM_WIDTH / 2 - 20;
          let puY = newY - 50;

          // Portal 特殊生成規則：不在邊緣安全區，不在玩家正上方100px內
          if (puType === POWERUP_TYPES.PORTAL) {
            // 檢查是否在邊緣安全區
            if (isInEdgeSafeZone(puX)) {
              // 重新定位到安全區域
              puX =
                EDGE_SAFE_ZONE +
                Math.random() * (GAME_WIDTH - EDGE_SAFE_ZONE * 2 - 45);
            }
            // 檢查是否在玩家正上方100px內
            const distToPlayer = Math.abs(player.y - puY);
            if (distToPlayer < 100) {
              // 跳過此次生成
              puType = null;
            }
            // 檢查 cooldown（500ms內不生成）
            if (currentTime - player.lastPortalTime < 500) {
              puType = null;
            }
          }

          if (puType) {
            const powerup = createPowerup(puX, puY, puType, newPlat.id);
            powerup.offsetX = puX - newPlat.x; // 記錄相對平台的 X 偏移
            powerup.offsetY = puY - newPlat.y; // 記錄相對平台的 Y 偏移
            world.powerups.push(powerup);
          }
        }
      }

      // === 生成敵人（500m 後）===
      // 隨機生成1-3隻，高度越高生成多隻機率越高
      if (scoreMeters >= 50 && world.enemies.length < 3) {
        if (Math.random() < 0.02) {
          // 根據高度決定生成數量
          let spawnCount = 1;
          const rand = Math.random();

          if (scoreMeters >= 200) {
            // 2000m+: 20% 1隻, 40% 2隻, 40% 3隻
            if (rand < 0.2) spawnCount = 1;
            else if (rand < 0.6) spawnCount = 2;
            else spawnCount = 3;
          } else if (scoreMeters >= 100) {
            // 1000-2000m: 40% 1隻, 40% 2隻, 20% 3隻
            if (rand < 0.4) spawnCount = 1;
            else if (rand < 0.8) spawnCount = 2;
            else spawnCount = 3;
          } else {
            // 500-1000m: 70% 1隻, 25% 2隻, 5% 3隻
            if (rand < 0.7) spawnCount = 1;
            else if (rand < 0.95) spawnCount = 2;
            else spawnCount = 3;
          }

          // 確保不超過上限
          spawnCount = Math.min(spawnCount, 3 - world.enemies.length);

          // 生成指定數量的敵人
          for (let i = 0; i < spawnCount; i++) {
            const spawnY = world.cameraY - 50 - i * 80; // 每隻間隔80px
            const newEnemy = createEnemy(spawnY);

            // 確保敵人不會生成在玩家附近（水平距離至少100px）且不在邊緣安全區
            const distX = Math.abs(newEnemy.x - player.x);
            if (distX > 100 && !isInEdgeSafeZone(newEnemy.x)) {
              world.enemies.push(newEnemy);
            }
          }
        }
      }

      // === 生成黑洞（1500m 後）===
      if (scoreMeters >= 150 && world.blackholes.length < 2) {
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
      // 敵人清理：移除掉出畫面的或移出畫面外的
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
          world.powerupUsage.shield += 1;
          checkPowerupAchievements(world.powerupUsage);
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
      const finalScore = Math.floor(world.maxHeightPx / 10);
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
      const newScore = Math.floor(world.maxHeightPx / 10);
      if (newScore !== scoreRef.current) {
        scoreRef.current = newScore;
        setScore(newScore);
        if (scoreDomRef.current) {
          scoreDomRef.current.classList.remove("scoreBounce");
          void scoreDomRef.current.offsetWidth;
          scoreDomRef.current.classList.add("scoreBounce");
        }

        // 檢查是否達到新稱號
        const titleInfo = getScoreTitle(newScore);
        if (titleInfo.milestoneScore > lastTitleMilestone.current) {
          lastTitleMilestone.current = titleInfo.milestoneScore;
          setShowTitle({
            score: titleInfo.milestoneScore,
            title: titleInfo.title,
            icon: titleInfo.icon,
          });
          safeTimeout(() => setShowTitle(null), 2500);
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
        playerDomRef.current.classList.toggle(
          "teleporting",
          player.isTeleporting
        );
      }

      // 更新平台
      if (platformContainerRef.current) {
        const container = platformContainerRef.current;
        const visiblePlatforms = world.platforms.filter(
          (p) => p.state !== "gone"
        );

        // 為每個平台建立或取得 DOM
        for (const plat of visiblePlatforms) {
          let el = platformDomMap.current.get(plat.id);

          if (!el) {
            // 建立新 DOM
            el = document.createElement("div");
            el.className = "jumpPlatform normal";
            el.style.position = "absolute";
            el.style.display = "none"; // 防止 (0,0) 閃現
            el.style.width = `${PLATFORM_WIDTH}px`;
            el.style.height = `${PLATFORM_HEIGHT}px`;
            platformDomMap.current.set(plat.id, el);
            container.appendChild(el);
          }

          // 更新 DOM
          const screenY = plat.y - world.cameraY;
          el.style.transform = `translate(${plat.x}px, ${screenY}px)`;
          el.style.width = `${plat.width}px`;
          el.style.display =
            screenY > -50 && screenY < GAME_HEIGHT + 50 ? "flex" : "none";

          let className = `jumpPlatform ${plat.type}`;
          if (plat.flash) className += " flash";
          el.className = className;

          if (
            plat.type === PLATFORM_TYPES.SPRING &&
            !el.querySelector(".jumpSpring")
          ) {
            el.innerHTML = '<div class="jumpSpring">⬆️</div>';
          } else if (plat.type !== PLATFORM_TYPES.SPRING) {
            el.innerHTML = "";
          }
        }

        // 清理已移除的平台 DOM
        for (const [id, el] of platformDomMap.current.entries()) {
          if (!visiblePlatforms.some((p) => p.id === id)) {
            el.remove();
            platformDomMap.current.delete(id);
          }
        }
      }

      // 更新道具
      if (powerupContainerRef.current) {
        const container = powerupContainerRef.current;
        const visible = world.powerups.filter((p) => !p.collected);

        const icons = {
          jetpack: "🚀",
          springShoes: "👟",
          shield: "🛡️",
          safetyNet: "🪢",
          portal: "🌀",
        };

        // 為每個道具建立或取得 DOM
        for (const pu of visible) {
          let el = powerupDomMap.current.get(pu.id);

          if (!el) {
            // 建立新 DOM
            el = document.createElement("div");
            el.className = "jumpPowerup";
            el.style.position = "absolute";
            el.style.display = "none"; // 防止 (0,0) 閃現
            el.style.width = "45px";
            el.style.height = "45px";
            powerupDomMap.current.set(pu.id, el);
            container.appendChild(el);
          }

          // 更新 DOM
          const screenY = pu.y - world.cameraY;
          el.style.transform = `translate(${pu.x}px, ${screenY}px)`;
          el.style.display =
            screenY > -60 && screenY < GAME_HEIGHT + 60 ? "flex" : "none";
          el.className = `jumpPowerup ${pu.type}`;
          el.textContent = icons[pu.type] || "⭐";
        }

        // 清理已收集的道具 DOM
        for (const [id, el] of powerupDomMap.current.entries()) {
          if (!visible.some((p) => p.id === id)) {
            el.remove();
            powerupDomMap.current.delete(id);
          }
        }
      }

      // 更新敵人
      if (enemyContainerRef.current) {
        const container = enemyContainerRef.current;
        const enemies = world.enemies.filter((e) => e.x > -500);

        // 為每個敵人建立或取得 DOM
        for (const enemy of enemies) {
          let el = enemyDomMap.current.get(enemy.id);

          if (!el) {
            // 建立新 DOM
            el = document.createElement("div");
            el.className = "jumpEnemy";
            el.style.position = "absolute";
            el.style.display = "none"; // 防止 (0,0) 閃現
            el.style.width = "40px";
            el.style.height = "40px";
            el.textContent = "👾";
            enemyDomMap.current.set(enemy.id, el);
            container.appendChild(el);
          }

          // 更新 DOM
          const screenY = enemy.y - world.cameraY;

          // 根據狀態設置 class
          if (enemy.isBounced) {
            el.className = "jumpEnemy bounced";
            // 被踩後：快速旋轉掉落 + 縮小
            const scale = Math.max(0.3, 1 - enemy.rotation / 360);
            el.style.transform = `translate(${enemy.x}px, ${screenY}px) rotate(${enemy.rotation}deg) scale(${scale})`;
            el.style.opacity = Math.max(0.2, 1 - enemy.rotation / 720);
          } else {
            el.className = "jumpEnemy";
            el.style.opacity = 1;
            // 正常敵人：左右翻轉效果
            const scaleX = enemy.direction > 0 ? 1 : -1;
            el.style.transform = `translate(${enemy.x}px, ${screenY}px) scaleX(${scaleX})`;
          }

          el.style.display =
            screenY > -50 && screenY < GAME_HEIGHT + 50 ? "flex" : "none";
        }

        // 清理已移除的敵人 DOM
        for (const [id, el] of enemyDomMap.current.entries()) {
          if (!enemies.some((e) => e.id === id)) {
            el.remove();
            enemyDomMap.current.delete(id);
          }
        }
      }

      // 更新黑洞
      if (blackholeContainerRef.current) {
        const container = blackholeContainerRef.current;

        // 為每個黑洞建立或取得 DOM
        for (const bh of world.blackholes) {
          let el = blackholeDomMap.current.get(bh.id);

          if (!el) {
            // 建立新 DOM
            el = document.createElement("div");
            el.className = "jumpBlackhole";
            el.style.position = "absolute";
            el.style.display = "none"; // 防止 (0,0) 閃現
            blackholeDomMap.current.set(bh.id, el);
            container.appendChild(el);
          }

          // 更新 DOM
          const screenY = bh.y - world.cameraY;
          el.style.transform = `translate(${bh.x - bh.radius}px, ${
            screenY - bh.radius
          }px)`;
          el.style.width = `${bh.radius * 2}px`;
          el.style.height = `${bh.radius * 2}px`;
          el.style.display =
            screenY > -100 && screenY < GAME_HEIGHT + 100 ? "flex" : "none";
        }

        // 清理已移除的黑洞 DOM
        for (const [id, el] of blackholeDomMap.current.entries()) {
          if (!world.blackholes.some((b) => b.id === id)) {
            el.remove();
            blackholeDomMap.current.delete(id);
          }
        }
      }
    };

    rafId = requestAnimationFrame(gameLoop);

    return () => {
      isRunning = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [gameState, unlockAchievement, safeTimeout, checkPowerupAchievements]);

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
                👟
                <span className="effectCount">{activeEffects.springShoes}</span>
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
                  <span>🌀 傳送門 (瞬移到目前1.5倍高度)</span>
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
