import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Icon from "../components/icons/Icon";
import avatarEngineerArt from "../assets/avatar-engineer.png";
import bgRoomNightArt from "../assets/bg-room-night.png";
import petShibaArt from "../assets/pet-shiba.png";
import "./KevinLifeRPG.css";
import {
  buildDerivedState,
  clamp,
  formatDayLabel,
  formatShortDate,
  getDateOffsetFromToday,
  getEquippedItems,
  getQuestDefinitions,
  getRecordRewardDelta,
  getShopItems,
  getSkinAccent,
  getTodayKey,
  loadFromStorage,
  makeEmptyRecord,
  normalizeRecord,
  saveToStorage,
} from "./kevinLifeRpg/engine";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "homePixel" },
  { id: "sleep", label: "Sleep", icon: "bed" },
  { id: "quest", label: "Quest", icon: "scrollQuest" },
  { id: "character", label: "Character", icon: "helmet" },
  { id: "analytics", label: "Analytics", icon: "analyticsBars" },
];

const QUEST_COPY = {
  bedtime: {
    label: "23:00 前上床",
    description: "準時下線，讓明天的 Energy 與 streak 穩定累積。",
    icon: "moon",
    tone: "bedtime",
  },
  wake: {
    label: "07:00 前起床",
    description: "晨間開局乾淨，整天節奏才不會被拖慢。",
    icon: "sun",
    tone: "wake",
  },
  sleep: {
    label: "睡滿 7 小時",
    description: "睡眠由作息自動推導，達標才能維持效率。",
    icon: "bed",
    tone: "sleep",
  },
  toeic: {
    label: "多益學習 15 分鐘",
    description: "把英語當成主線日常，慢慢疊高 Knowledge。",
    icon: "book",
    tone: "toeic",
  },
  angular: {
    label: "Angular 學習 30 分鐘",
    description: "工程師主職線，Focus 與 Knowledge 都會成長。",
    icon: "bot",
    tone: "angular",
  },
  exercise: {
    label: "運動 / 伸展",
    description: "身體先醒來，Health 才不會掉到谷底。",
    icon: "dumbbell",
    tone: "exercise",
  },
  masterDuel: {
    label: "Master Duel 30-60 分鐘",
    description: "娛樂可以有，但要守在節奏之內。",
    icon: "gamepad",
    tone: "masterDuel",
  },
};

const ATTRIBUTE_COPY = {
  energy: { label: "Energy 精力", icon: "boltPixel", tone: "energy" },
  focus: { label: "Focus 專注", icon: "target", tone: "focus" },
  discipline: { label: "Discipline 執行力", icon: "shieldBadge", tone: "discipline" },
  knowledge: { label: "Knowledge 知識", icon: "book", tone: "knowledge" },
  health: { label: "Health 健康", icon: "baseHeart", tone: "health" },
};

const avatarArt = avatarEngineerArt;
const sceneArt = bgRoomNightArt;

const CAREER_TRACK = [
  { level: 1, title: "新手工程師" },
  { level: 25, title: "中階工程師" },
  { level: 50, title: "資深工程師" },
  { level: 75, title: "Tech Lead" },
];

const CHART_COLORS = {
  grid: "rgba(92, 119, 174, 0.16)",
  axis: "rgba(52, 73, 118, 0.72)",
  sleep: "#77d16a",
  efficiency: "#58b8ff",
  completion: "#f3c454",
  radar: "#7d6bff",
  scatter: "#f28a55",
  weeklyExp: "#44caa9",
  streak: "#ff8a52",
};

const EMPTY_QUESTS = {
  bedtime: false,
  wake: false,
  sleep: false,
  toeic: false,
  angular: false,
  exercise: false,
  masterDuel: false,
};

function fmtNumber(value) {
  return new Intl.NumberFormat("zh-TW").format(Math.round(value));
}

function fmtPercent(value) {
  return `${Math.round(value)}%`;
}

function fmtHours(minutes) {
  return `${(minutes / 60).toFixed(1)}h`;
}

function fmtMinutes(value) {
  return `${Math.round(value)}m`;
}

function fmtDateTab(dateKey, todayKey) {
  const offset = getDateOffsetFromToday(dateKey, todayKey);
  if (offset === 0) return "今天";
  if (offset === 1) return "昨天";
  return formatShortDate(dateKey);
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function createEmptyDay(dateKey = "") {
  return {
    dateKey,
    record: makeEmptyRecord(),
    sleepMinutes: 0,
    quests: { ...EMPTY_QUESTS },
    completionCount: 0,
    completionRate: 0,
    perfectDay: false,
    efficiencyScore: 100,
    efficiencyMultiplier: 1,
    bedtimeStreak: 0,
    streakBonusXp: 0,
    xpEarned: 0,
    goldEarned: 0,
    totalXp: 0,
    totalGoldEarned: 0,
    focusScore: 0,
  };
}

function getQuestCopy(questId) {
  return QUEST_COPY[questId] || {
    label: questId,
    description: "",
    icon: "scrollQuest",
    tone: "angular",
  };
}

function formatTimeValue(value) {
  return value || "--:--";
}

function getMindScore(day) {
  return clamp(Math.round((day?.efficiencyScore || 0) / 20), 1, 5);
}

function getFocusScore(day, derived) {
  return clamp(Math.round((day?.dateKey === derived.today.dateKey ? derived.statusBars.focus : day?.focusScore || 0) / 20), 1, 5);
}

function getMoodScore(day, derived) {
  const source = day?.dateKey === derived.today.dateKey ? derived.statusBars.energy : day?.efficiencyScore || 0;
  return clamp(Math.round(source / 20), 1, 5);
}

function getFatigueScore(day) {
  return clamp(6 - Math.round((day?.sleepMinutes || 0) / 120), 1, 5);
}

function getSleepQuality(day) {
  if (!day || !day.record) return 1;
  const sleepMinutes = day.sleepMinutes || 0;
  const { bedtime, wake, sleep } = day.quests || EMPTY_QUESTS;
  if (bedtime && wake && sleep) return 5;
  if (sleep && (bedtime || wake)) return 4;
  if (sleepMinutes >= 360) return 3;
  if (sleepMinutes >= 300) return 2;
  return 1;
}

function getSleepQualityLabel(stars) {
  if (stars >= 5) return "非常穩定";
  if (stars >= 4) return "穩定";
  if (stars >= 3) return "普通";
  if (stars >= 2) return "偏低";
  return "不足";
}

function getQuestValueLabel(questId, day) {
  const record = day.record || makeEmptyRecord();
  switch (questId) {
    case "bedtime":
      return record.bedTime ? `${record.bedTime} 上床` : "--:--";
    case "wake":
      return record.wakeTime ? `${record.wakeTime} 起床` : "--:--";
    case "sleep":
      return day.sleepMinutes > 0 ? fmtHours(day.sleepMinutes) : "--";
    case "toeic":
      return record.toeicMinutes > 0 ? fmtMinutes(record.toeicMinutes) : "0m";
    case "angular":
      return record.angularMinutes > 0 ? fmtMinutes(record.angularMinutes) : "0m";
    case "exercise":
      return record.exerciseDone ? "已完成" : "0/1";
    case "masterDuel":
      return record.masterDuelMinutes > 0 ? fmtMinutes(record.masterDuelMinutes) : "0m";
    default:
      return "--";
  }
}

function getTodayMessage(day) {
  if (day.perfectDay) return "Perfect Day 達成，今晚繼續保持。";
  if (day.bedtimeStreak >= 7) return "早睡 streak 很穩，節奏正在成形。";
  if (day.completionCount >= 5) return "今天差一點就滿分，主線快通關了。";
  return "持續自律，成為更強的自己。";
}

function chartTooltipStyle() {
  return {
    borderRadius: 18,
    border: "1px solid rgba(255, 255, 255, 0.82)",
    background: "rgba(255, 255, 255, 0.94)",
    color: "rgba(18, 24, 40, 0.92)",
    boxShadow: "0 18px 34px rgba(38, 58, 102, 0.16)",
  };
}

function PixelAsset({ src, alt, className = "" }) {
  return <img src={src} alt={alt} className={`klrpgPixelAsset ${className}`.trim()} />;
}

function SectionLabel({ icon, children }) {
  return (
    <div className="klrpgSectionLabel">
      <Icon name={icon} size="sm" />
      <span>{children}</span>
    </div>
  );
}

function PixelStars({ value }) {
  return (
    <div className="klrpgStars" aria-label={`睡眠品質 ${value} / 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < value ? "isOn" : ""}>
          ★
        </span>
      ))}
    </div>
  );
}

function MiniSparkBars({ values, max = 100, tone = "green" }) {
  return (
    <div className={`klrpgMiniBars tone-${tone}`}>
      {values.map((value, index) => {
        const safeHeight = max > 0 ? Math.max(16, (value / max) * 100) : 16;
        return <span key={index} style={{ height: `${safeHeight}%` }} />;
      })}
    </div>
  );
}

function QuestPreviewList({ day, limit }) {
  const questIds = typeof limit === "number" ? Object.keys(QUEST_COPY).slice(0, limit) : Object.keys(QUEST_COPY);

  return (
    <div className="klrpgQuestPreviewList">
      {questIds.map((questId) => {
        const quest = getQuestCopy(questId);
        const completed = day.quests[questId];
        return (
          <div key={questId} className={`klrpgQuestPreviewItem tone-${quest.tone}`}>
            <div className="klrpgQuestPreviewLead">
              <Icon name={quest.icon} size="sm" />
              <span>{quest.label}</span>
            </div>
            <div className="klrpgQuestPreviewMeta">
              <strong>{getQuestValueLabel(questId, day)}</strong>
              <span className={`klrpgQuestPreviewCheck ${completed ? "isDone" : ""}`}>{completed ? "✓" : "○"}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StepperField({ value, onChange, min = 0, max = 300, step = 5 }) {
  const parsedValue = Number(value) || 0;
  return (
    <div className="klrpgStepper">
      <button type="button" onClick={() => onChange(Math.max(min, parsedValue - step))}>
        -
      </button>
      <input
        className="input klrpgNumberInput"
        type="number"
        min={min}
        max={max}
        step={step}
        value={parsedValue}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <button type="button" onClick={() => onChange(Math.min(max, parsedValue + step))}>
        +
      </button>
    </div>
  );
}

function ToggleField({ active, onToggle }) {
  return (
    <button type="button" className={`klrpgToggle ${active ? "isActive" : ""}`} onClick={onToggle}>
      <span className="klrpgToggleKnob" />
      <span>{active ? "已完成" : "標記完成"}</span>
    </button>
  );
}

function QuestEditorItem({ questId, quest, day, children }) {
  const copy = getQuestCopy(questId);
  const completed = day.quests[questId];
  return (
    <article className={`klrpgQuestEditorItem tone-${copy.tone} ${completed ? "isDone" : ""}`}>
      <div className="klrpgQuestEditorTop">
        <div className="klrpgQuestEditorLead">
          <div className="klrpgQuestEditorIcon">
            <Icon name={copy.icon} />
          </div>
          <div>
            <strong>{copy.label}</strong>
            <p>{copy.description}</p>
          </div>
        </div>
        <div className="klrpgQuestEditorMeta">
          <span className="klrpgQuestEditorValue">{getQuestValueLabel(questId, day)}</span>
          <span className={`klrpgQuestEditorCheck ${completed ? "isDone" : ""}`}>{completed ? "✓" : "○"}</span>
        </div>
      </div>

      <div className="klrpgQuestEditorRewards">
        <span>+{quest.xp} XP</span>
        <span>+{quest.gold} Gold</span>
      </div>

      <div className="klrpgQuestEditorControl">{children}</div>
    </article>
  );
}

function PanelHeader({ eyebrow, title, detail, action }) {
  return (
    <div className="klrpgPanelHeader">
      <div>
        {eyebrow ? <SectionLabel icon={eyebrow.icon}>{eyebrow.label}</SectionLabel> : null}
        <h3>{title}</h3>
        {detail ? <p>{detail}</p> : null}
      </div>
      {action}
    </div>
  );
}

function ChartPanel({ eyebrow, title, detail, children }) {
  return (
    <section className="klrpgPanel klrpgChartPanel">
      <PanelHeader eyebrow={eyebrow} title={title} detail={detail} />
      <div className="klrpgChartFrame">{children}</div>
    </section>
  );
}

export default function KevinLifeRPG() {
  const navigate = useNavigate();
  const todayKey = useMemo(() => getTodayKey(), []);
  const questDefs = useMemo(() => getQuestDefinitions(), []);
  const shopItems = useMemo(() => getShopItems(), []);
  const [saveState, setSaveState] = useState(() => loadFromStorage(todayKey));
  const [selectedDateKey, setSelectedDateKey] = useState(todayKey);
  const [toast, setToast] = useState(null);
  const [activeNav, setActiveNav] = useState("home");
  const sectionRefs = useRef({});

  const derived = useMemo(() => buildDerivedState(saveState, todayKey), [saveState, todayKey]);
  const selectedRecord = normalizeRecord(saveState.recordsByDate[selectedDateKey] || makeEmptyRecord());
  const selectedDay = derived.dailyMap[selectedDateKey] || createEmptyDay(selectedDateKey);
  const equippedItems = getEquippedItems(derived);
  const skinAccent = getSkinAccent(derived.equipped.skin);

  useEffect(() => {
    saveToStorage(saveState);
  }, [saveState]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const elements = NAV_ITEMS.map((item) => sectionRefs.current[item.id]).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        if (visible?.target?.id) setActiveNav(visible.target.id);
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-18% 0px -45% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const recentDays = useMemo(
    () => derived.recentDateKeys.map((dateKey) => derived.dailyMap[dateKey] || createEmptyDay(dateKey)),
    [derived.dailyMap, derived.recentDateKeys],
  );

  const bestStreak = useMemo(
    () => Math.max(0, ...Object.values(derived.dailyMap).map((day) => day.bedtimeStreak || 0)),
    [derived.dailyMap],
  );

  const averageSleep = useMemo(
    () => average(derived.charts.sleepRows.map((row) => row.sleepHours)),
    [derived.charts.sleepRows],
  );

  const averageCompletion = useMemo(
    () => average(derived.charts.completionRows.map((row) => row.completionRate)),
    [derived.charts.completionRows],
  );

  const averageMind = useMemo(
    () => average(recentDays.map((day) => getMindScore(day))),
    [recentDays],
  );

  const todayMessage = useMemo(() => getTodayMessage(derived.today), [derived.today]);
  const todayStatus = useMemo(
    () => ({
      mind: getMindScore(derived.today),
      focus: getFocusScore(derived.today, derived),
      mood: getMoodScore(derived.today, derived),
      fatigue: getFatigueScore(derived.today),
      sleepQuality: getSleepQuality(derived.today),
    }),
    [derived],
  );

  const achievementRows = useMemo(
    () => [
      { label: "目前徽章", value: equippedItems.badge?.label || equippedItems.badge?.name || "未裝備徽章", icon: "star" },
      { label: "副稱號", value: equippedItems.title?.label || equippedItems.title?.name || "未裝備副稱號", icon: "scrollQuest" },
      { label: "Perfect Day", value: `${derived.hudStats.totalPerfectDays} 天`, icon: "targetLite" },
      { label: "最佳 Streak", value: `${bestStreak} 天`, icon: "boltPixel" },
      { label: "累積 Gold", value: `${fmtNumber(derived.totalGoldEarned)} Gold`, icon: "coinToy" },
    ],
    [bestStreak, derived.hudStats.totalPerfectDays, derived.totalGoldEarned, equippedItems.badge?.label, equippedItems.badge?.name, equippedItems.title?.label, equippedItems.title?.name],
  );

  const analyticsCards = useMemo(
    () => [
      {
        key: "avg-sleep",
        label: "平均睡眠",
        value: `${averageSleep.toFixed(1)}h`,
        note: "最近 7 天",
        tone: "green",
        values: derived.charts.sleepRows.map((row) => row.sleepHours),
        max: 10,
      },
      {
        key: "quest-rate",
        label: "任務完成率",
        value: fmtPercent(averageCompletion),
        note: "最近 7 天",
        tone: "gold",
        values: derived.charts.completionRows.map((row) => row.completionRate),
        max: 100,
      },
      {
        key: "mind-score",
        label: "平均精神分數",
        value: `${averageMind.toFixed(1)} / 5`,
        note: "由效率分數換算",
        tone: "purple",
        values: recentDays.map((day) => getMindScore(day)),
        max: 5,
      },
      {
        key: "streak",
        label: "連續早睡",
        value: `${derived.today.bedtimeStreak} 天`,
        note: `最佳 ${bestStreak} 天`,
        tone: "orange",
        values: derived.charts.streakRows.slice(-7).map((row) => row.streak),
        max: Math.max(bestStreak, 7),
      },
    ],
    [averageCompletion, averageMind, averageSleep, bestStreak, derived.charts.completionRows, derived.charts.sleepRows, derived.charts.streakRows, derived.today.bedtimeStreak, recentDays],
  );

  const applyState = (nextState, options = {}) => {
    setSaveState(nextState);

    if (options.rewardDelta) {
      const delta = getRecordRewardDelta(derived, buildDerivedState(nextState, todayKey));
      if (delta.xp !== 0 || delta.gold !== 0) {
        const parts = [];
        if (delta.xp !== 0) parts.push(`${delta.xp > 0 ? "+" : ""}${delta.xp} XP`);
        if (delta.gold !== 0) parts.push(`${delta.gold > 0 ? "+" : ""}${delta.gold} Gold`);
        setToast({ tone: delta.xp > 0 || delta.gold > 0 ? "gain" : "warn", text: parts.join(" / ") });
        return;
      }
    }

    if (options.toastText) {
      setToast({ tone: options.tone || "info", text: options.toastText });
    }
  };

  const updateRecordField = (field, value) => {
    const nextRecord = {
      ...makeEmptyRecord(),
      ...selectedRecord,
      [field]: value,
    };
    const nextState = {
      ...saveState,
      recordsByDate: {
        ...saveState.recordsByDate,
        [selectedDateKey]: nextRecord,
      },
    };
    applyState(nextState, { rewardDelta: selectedDateKey === todayKey });
  };

  const handlePurchase = (item) => {
    if (derived.ownedItems.includes(item.id)) return;
    if (derived.currentGold < item.cost) {
      setToast({ tone: "warn", text: "Gold 不足，先把今天主線任務補滿。" });
      return;
    }

    const nextState = {
      ...saveState,
      ownedItems: [...saveState.ownedItems, item.id],
      equipped: {
        ...saveState.equipped,
        [item.slot]: item.id,
      },
    };
    applyState(nextState, { toastText: `已購買 ${item.label || item.name}`, tone: "gain" });
  };

  const handleEquip = (item) => {
    if (!derived.ownedItems.includes(item.id)) return;
    const nextState = {
      ...saveState,
      equipped: {
        ...saveState.equipped,
        [item.slot]: item.id,
      },
    };
    applyState(nextState, { toastText: `已裝備 ${item.label || item.name}`, tone: "info" });
  };

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderQuestControl = (questId) => {
    switch (questId) {
      case "bedtime":
        return (
          <input
            className="input klrpgTimeInput"
            type="time"
            value={selectedRecord.bedTime}
            onChange={(event) => updateRecordField("bedTime", event.target.value)}
          />
        );
      case "wake":
        return (
          <input
            className="input klrpgTimeInput"
            type="time"
            value={selectedRecord.wakeTime}
            onChange={(event) => updateRecordField("wakeTime", event.target.value)}
          />
        );
      case "sleep":
        return (
          <div className="klrpgDerivedValue">
            <strong>{selectedDay.sleepMinutes > 0 ? fmtHours(selectedDay.sleepMinutes) : "--"}</strong>
            <span>{selectedDay.quests.sleep ? "已達成 7 小時" : "睡眠由作息自動推導"}</span>
          </div>
        );
      case "toeic":
        return (
          <StepperField
            value={selectedRecord.toeicMinutes}
            onChange={(value) => updateRecordField("toeicMinutes", value)}
            max={180}
          />
        );
      case "angular":
        return (
          <StepperField
            value={selectedRecord.angularMinutes}
            onChange={(value) => updateRecordField("angularMinutes", value)}
            max={240}
          />
        );
      case "exercise":
        return (
          <ToggleField
            active={selectedRecord.exerciseDone}
            onToggle={() => updateRecordField("exerciseDone", !selectedRecord.exerciseDone)}
          />
        );
      case "masterDuel":
        return (
          <StepperField
            value={selectedRecord.masterDuelMinutes}
            onChange={(value) => updateRecordField("masterDuelMinutes", value)}
            max={240}
          />
        );
      default:
        return null;
    }
  };

  const renderShopSection = (slot, title) => {
    const sectionTitle = slot === "skin" ? "造型" : slot === "title" ? "副稱號" : slot === "badge" ? "徽章" : title;

    return (
    <div className="klrpgShopSection">
      <h4>{sectionTitle}</h4>
      <div className="klrpgShopGrid">
        {shopItems
          .filter((item) => item.slot === slot)
          .map((item) => {
            const owned = derived.ownedItems.includes(item.id);
            const equipped = derived.equipped[item.slot] === item.id;
            const affordable = derived.currentGold >= item.cost;
            return (
              <article key={item.id} className={`klrpgShopItem ${owned ? "isOwned" : ""} ${equipped ? "isEquipped" : ""}`}>
                <div className="klrpgShopIcon" style={{ "--shopAccent": item.accent || skinAccent }}>
                  <Icon name={item.icon} size="md" />
                </div>
                <div className="klrpgShopBody">
                  <div className="klrpgShopLine">
                    <strong>{item.label || item.name}</strong>
                    <span>{item.cost}G</span>
                  </div>
                  <p>{item.blurb || item.description}</p>
                  <div className="klrpgShopFooter">
                    <span className={`klrpgShopState ${equipped ? "isEquipped" : owned ? "isOwned" : ""}`}>
                      {equipped ? "裝備中" : owned ? "已擁有" : "可購買"}
                    </span>
                    <button
                      type="button"
                      className={`btn ${owned ? "ghost" : "solid"} klrpgShopButton`}
                      disabled={!owned && !affordable}
                      onClick={() => (owned ? handleEquip(item) : handlePurchase(item))}
                    >
                      {equipped ? "已裝備" : owned ? "裝備" : "購買"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </div>
    );
  };

  return (
    <div className="oneui launchpadRoot klrpgPage">
      <div className="launchpadGlow launchpadGlowA klrpgGlowA" />
      <div className="launchpadGlow launchpadGlowB klrpgGlowB" />
      <div className="shell klrpgShell">
        <header className="top klrpgTop">
          <div className="titleRow">
            <div>
              <button className="backBtn klrpgBackBtn" type="button" onClick={() => navigate("/")}>
                返回首頁
              </button>
              <div className="title">Kevin Life RPG</div>
              <div className="subtitle">Habitica × Pixel RPG × 睡眠追蹤 × 個人成長 Dashboard</div>
            </div>
            {toast ? <div className={`toast klrpgToast is-${toast.tone}`}>{toast.text}</div> : null}
          </div>
        </header>

        <main className="klrpgContent">
          <section
            id="home"
            ref={(node) => {
              sectionRefs.current.home = node;
            }}
            className="klrpgSection"
          >
            <div className="klrpgHomeBoard">
              <article className="klrpgPanel klrpgProfilePanel">
                <div className="klrpgProfileHead">
                  <div className="klrpgAvatarFrame">
                    <PixelAsset src={avatarArt} alt="Kevin engineer avatar" className="klrpgAvatarArt" />
                  </div>
                  <div className="klrpgProfileIdentity">
                    <div className="klrpgProfileName">Kevin</div>
                    <div className="klrpgProfileRole">{derived.currentTitle}</div>
                    <div className="klrpgProfileLevel">Lv. {derived.levelInfo.level}</div>
                  </div>
                </div>

                <div className="klrpgExpBlock">
                  <span>EXP</span>
                  <div className="klrpgExpTrack">
                    <span style={{ width: `${derived.levelInfo.progressPct}%` }} />
                  </div>
                  <strong>
                    {fmtNumber(derived.levelInfo.currentXp)} / {fmtNumber(derived.levelInfo.xpToNext)}
                  </strong>
                </div>

                <div className="klrpgProfileMetaRow">
                  <div className="klrpgProfileMetaChip">
                    <Icon name="coinToy" size="sm" />
                    <span>Gold</span>
                    <strong>{fmtNumber(derived.currentGold)}</strong>
                  </div>
                  <div className="klrpgProfileMetaChip">
                    <Icon name="star" size="sm" />
                    <span>Perfect Days</span>
                    <strong>{fmtNumber(derived.hudStats.totalPerfectDays)}</strong>
                  </div>
                </div>

                <div className="klrpgProfileSummaryLine">
                  <Icon name="boltPixel" size="sm" />
                  <span>Bedtime streak {derived.today.bedtimeStreak} nights</span>
                </div>
              </article>

              <article className="klrpgPanel klrpgSleepSnapshot">
                <PanelHeader eyebrow={{ icon: "bed", label: "Sleep" }} title="Sleep Summary" />
                <div className="klrpgInfoList">
                  <div><span>昨晚睡眠</span><strong>{derived.today.sleepMinutes > 0 ? fmtHours(derived.today.sleepMinutes) : "--"}</strong></div>
                  <div><span>上床時間</span><strong>{formatTimeValue(derived.today.record.bedTime)}</strong></div>
                  <div><span>起床時間</span><strong>{formatTimeValue(derived.today.record.wakeTime)}</strong></div>
                  <div><span>睡眠品質</span><PixelStars value={todayStatus.sleepQuality} /></div>
                </div>
              </article>

              <article className="klrpgPanel klrpgScenePanel">
                <div className="klrpgSceneStage">
                  <img src={sceneArt} alt="像素夜景房間" className="klrpgSceneArt" />
                  <img src={avatarArt} alt="Kevin 像素角色" className="klrpgSceneAvatar" />
                  <div className="klrpgSceneCenterCard">
                    <div className="klrpgSceneCenterEyebrow">
                      <Icon name="sparklesCore" size="sm" />
                      <span>今晚狀態</span>
                    </div>
                    <strong className="klrpgSceneCenterMessage">{todayMessage}</strong>
                    <div className="klrpgSceneCompanion">
                      <div className="klrpgScenePetFrame">
                        <PixelAsset src={petShibaArt} alt="Shiba companion portrait" className="klrpgScenePetArt" />
                      </div>
                      <div className="klrpgScenePetCopy">
                        <span>陪伴加成</span>
                        <strong>柴犬 Buff</strong>
                        <small>夜間士氣 +1，提醒先把節奏穩住。</small>
                      </div>
                    </div>
                    <div className="klrpgSceneTags">
                      <span>
                        <Icon name="bot" size="sm" />
                        Angular
                      </span>
                      <span>
                        <Icon name="book" size="sm" />
                        TOEIC
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="klrpgPanel klrpgQuestPreviewPanel">
                <PanelHeader
                  eyebrow={{ icon: "scrollQuest", label: "Quest" }}
                  title="Today Quest"
                  action={<div className="klrpgPanelMetric">{derived.today.completionCount}/7 完成</div>}
                />
                <QuestPreviewList day={derived.today} limit={4} />
              </article>
            </div>
          </section>

          <section
            id="sleep"
            ref={(node) => {
              sectionRefs.current.sleep = node;
            }}
            className="klrpgSection"
          >
            <div className="klrpgSectionGrid twoColumn">
              <section className="klrpgPanel">
                <PanelHeader
                  eyebrow={{ icon: "bed", label: "Sleep" }}
                  title="睡眠紀錄"
                  detail={`${formatDayLabel(selectedDateKey)} 的睡眠資訊，和 Quest 編輯共用同一天資料。`}
                />
                <div className="klrpgDateStrip">
                  {derived.recentDateKeys.map((dateKey) => (
                    <button
                      key={dateKey}
                      type="button"
                      className={`klrpgDateChip ${selectedDateKey === dateKey ? "isActive" : ""}`}
                      onClick={() => setSelectedDateKey(dateKey)}
                    >
                      <strong>{fmtDateTab(dateKey, todayKey)}</strong>
                      <span>{formatDayLabel(dateKey)}</span>
                    </button>
                  ))}
                </div>

                <div className="klrpgSleepMetrics">
                  <div className="klrpgSleepMetric">
                    <span>睡眠時數</span>
                    <strong>{selectedDay.sleepMinutes > 0 ? fmtHours(selectedDay.sleepMinutes) : "--"}</strong>
                  </div>
                  <div className="klrpgSleepMetric">
                    <span>上床時間</span>
                    <strong>{formatTimeValue(selectedDay.record.bedTime)}</strong>
                  </div>
                  <div className="klrpgSleepMetric">
                    <span>起床時間</span>
                    <strong>{formatTimeValue(selectedDay.record.wakeTime)}</strong>
                  </div>
                  <div className="klrpgSleepMetric">
                    <span>睡眠品質</span>
                    <div>
                      <PixelStars value={getSleepQuality(selectedDay)} />
                      <small>{getSleepQualityLabel(getSleepQuality(selectedDay))}</small>
                    </div>
                  </div>
                  <div className="klrpgSleepMetric">
                    <span>連續早睡</span>
                    <strong>{selectedDay.bedtimeStreak} 天</strong>
                  </div>
                  <div className="klrpgSleepMetric">
                    <span>效率分數</span>
                    <strong>{Math.round(selectedDay.efficiencyScore)}</strong>
                  </div>
                </div>
              </section>

              <ChartPanel eyebrow={{ icon: "analyticsBars", label: "Trend" }} title="最近 7 天睡眠時間" detail="把作息維持在穩定區間，隔天效率才會持續上來。">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={derived.charts.sleepRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="label" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} domain={[0, 10]} />
                    <Tooltip contentStyle={chartTooltipStyle()} formatter={(value) => [`${value}h`, "睡眠"]} />
                    <Line type="monotone" dataKey="sleepHours" stroke={CHART_COLORS.sleep} strokeWidth={3} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartPanel>
            </div>
          </section>

          <section
            id="quest"
            ref={(node) => {
              sectionRefs.current.quest = node;
            }}
            className="klrpgSection"
          >
            <section className="klrpgPanel">
              <PanelHeader
                eyebrow={{ icon: "scrollQuest", label: "Quest" }}
                title="任務清單"
                detail={`${formatDayLabel(selectedDateKey)} 的主線任務會即時重算 EXP、Gold、streak 與效率。`}
                action={<div className="klrpgPanelMetric">{selectedDay.completionCount}/7 完成</div>}
              />

              <div className="klrpgDateStrip">
                {derived.recentDateKeys.map((dateKey) => (
                  <button
                    key={dateKey}
                    type="button"
                    className={`klrpgDateChip ${selectedDateKey === dateKey ? "isActive" : ""}`}
                    onClick={() => setSelectedDateKey(dateKey)}
                  >
                    <strong>{fmtDateTab(dateKey, todayKey)}</strong>
                    <span>{formatDayLabel(dateKey)}</span>
                  </button>
                ))}
              </div>

              <div className="klrpgQuestSummary">
                <div><span>當日 EXP</span><strong>{fmtNumber(selectedDay.xpEarned)}</strong></div>
                <div><span>當日 Gold</span><strong>{fmtNumber(selectedDay.goldEarned)}</strong></div>
                <div><span>效率倍率</span><strong>{selectedDay.efficiencyMultiplier.toFixed(2)}x</strong></div>
                <div><span>睡眠時數</span><strong>{selectedDay.sleepMinutes > 0 ? fmtHours(selectedDay.sleepMinutes) : "--"}</strong></div>
              </div>

              <div className="klrpgQuestEditorList">
                {questDefs.map((quest) => (
                  <QuestEditorItem key={quest.id} questId={quest.id} quest={quest} day={selectedDay}>
                    {renderQuestControl(quest.id)}
                  </QuestEditorItem>
                ))}
              </div>
            </section>
          </section>

          <section
            id="character"
            ref={(node) => {
              sectionRefs.current.character = node;
            }}
            className="klrpgSection"
          >
            <div className="klrpgSectionGrid twoColumn">
              <section className="klrpgPanel">
                <PanelHeader eyebrow={{ icon: "helmet", label: "Character" }} title="角色成長路線" detail="你的主稱號完全由等級決定，副稱號只做風格加成。" />
                <div className="klrpgCareerTrack">
                  {CAREER_TRACK.map((step) => (
                    <div key={step.level} className={`klrpgCareerStep ${derived.levelInfo.level >= step.level ? "isReached" : ""} ${derived.currentTitle === step.title ? "isCurrent" : ""}`}>
                      <span>Lv.{step.level}</span>
                      <strong>{step.title}</strong>
                    </div>
                  ))}
                </div>

                <div className="klrpgLoadoutGrid">
                  <div className="klrpgLoadoutItem">
                    <span>造型</span>
                    <strong>{equippedItems.skin?.label || equippedItems.skin?.name || "經典冒險者"}</strong>
                  </div>
                  <div className="klrpgLoadoutItem">
                    <span>副稱號</span>
                    <strong>{equippedItems.title?.label || equippedItems.title?.name || "未裝備副稱號"}</strong>
                  </div>
                  <div className="klrpgLoadoutItem">
                    <span>徽章</span>
                    <strong>{equippedItems.badge?.label || equippedItems.badge?.name || "未裝備徽章"}</strong>
                  </div>
                  <div className="klrpgLoadoutItem">
                    <span>總 XP</span>
                    <strong>{fmtNumber(derived.totalXp)}</strong>
                  </div>
                </div>
              </section>

              <section className="klrpgPanel">
                <PanelHeader eyebrow={{ icon: "analyticsBars", label: "Build" }} title="五大屬性" detail="最近 14 天的行為會持續改變這組 build，不是永久點數。" />
                <div className="klrpgCharacterCharts">
                  <div className="klrpgCharacterRadar">
                    <ResponsiveContainer width="100%" height={250}>
                      <RadarChart data={derived.charts.radarRows} outerRadius="68%">
                        <PolarGrid stroke="rgba(123, 141, 189, 0.26)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(38, 54, 92, 0.92)", fontSize: 11 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar dataKey="value" stroke={CHART_COLORS.radar} fill={CHART_COLORS.radar} fillOpacity={0.28} strokeWidth={2.5} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="klrpgAttrList">
                    {Object.entries(derived.attributes).map(([key, value]) => {
                      const meta = ATTRIBUTE_COPY[key];
                      return (
                        <div key={key} className={`klrpgAttrRow tone-${meta.tone}`}>
                          <div className="klrpgAttrLead">
                            <div className="klrpgAttrIconBadge">
                              <Icon name={meta.icon} size="sm" />
                            </div>
                            <span>{meta.label}</span>
                          </div>
                          <strong>{Math.round(value)}/100</strong>
                          <div className="klrpgAttrTrack">
                            <span style={{ width: `${value}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            <div className="klrpgSectionGrid twoColumn klrpgLowerCharacterGrid">
              <section className="klrpgPanel">
                <PanelHeader eyebrow={{ icon: "star", label: "Achievement" }} title="成就展示" detail="先聚焦目前角色最有代表性的成就與收藏。" />
                <div className="klrpgAchievementList">
                  {achievementRows.map((item) => (
                    <div key={item.label} className="klrpgAchievementItem">
                      <Icon name={item.icon} size="sm" />
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </section>

              <section className="klrpgPanel">
                <PanelHeader
                  eyebrow={{ icon: "coinToy", label: "Shop" }}
                  title="收藏商店"
                  detail="Gold 會永久保留，購入後可自由切換已擁有項目。"
                  action={(
                    <div className="klrpgPanelMetric klrpgPanelMetricWithIcon">
                      <Icon name="coinToy" size="sm" />
                      <span>{fmtNumber(derived.currentGold)} G</span>
                    </div>
                  )}
                />
                {renderShopSection("skin", "造型")}
                {renderShopSection("title", "副稱號")}
                {renderShopSection("badge", "徽章")}
              </section>
            </div>
          </section>

          <section
            id="analytics"
            ref={(node) => {
              sectionRefs.current.analytics = node;
            }}
            className="klrpgSection"
          >
            <section className="klrpgPanel">
              <PanelHeader eyebrow={{ icon: "analyticsBars", label: "Analytics" }} title="本週數據" detail="保留完整圖表資料，但改成遊戲內統計面板。" />
              <div className="klrpgAnalyticsCards">
                {analyticsCards.map((card) => (
                  <article key={card.key} className={`klrpgMiniStatCard tone-${card.tone}`}>
                    <div className="klrpgMiniStatHead">
                      <span>{card.label}</span>
                      <strong>{card.value}</strong>
                    </div>
                    <MiniSparkBars values={card.values} max={card.max} tone={card.tone} />
                    <small>{card.note}</small>
                  </article>
                ))}
              </div>
            </section>

            <div className="klrpgChartsGrid">
              <ChartPanel eyebrow={{ icon: "bed", label: "Sleep" }} title="最近 7 天睡眠時間" detail="睡眠主線是否逐步穩定。">
                <ResponsiveContainer width="100%" height={248}>
                  <LineChart data={derived.charts.sleepRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="label" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} domain={[0, 10]} />
                    <Tooltip contentStyle={chartTooltipStyle()} formatter={(value) => [`${value}h`, "睡眠"]} />
                    <Line type="monotone" dataKey="sleepHours" stroke={CHART_COLORS.sleep} strokeWidth={3} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "analyticsBars", label: "Efficiency" }} title="最近 7 天效率趨勢" detail="前一天睡眠不足會直接拖慢隔天效率。">
                <ResponsiveContainer width="100%" height={248}>
                  <LineChart data={derived.charts.efficiencyRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="label" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} domain={[40, 100]} />
                    <Tooltip contentStyle={chartTooltipStyle()} formatter={(value) => [value, "Efficiency"]} />
                    <Line type="monotone" dataKey="efficiency" stroke={CHART_COLORS.efficiency} strokeWidth={3} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "scrollQuest", label: "Quest" }} title="最近 7 天任務完成率" detail="主線穩定度最直接的進度條。">
                <ResponsiveContainer width="100%" height={248}>
                  <BarChart data={derived.charts.completionRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="label" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} domain={[0, 100]} />
                    <Tooltip contentStyle={chartTooltipStyle()} formatter={(value) => [`${value}%`, "完成率"]} />
                    <Bar dataKey="completionRate" fill={CHART_COLORS.completion} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "helmet", label: "Build" }} title="目前五大屬性雷達圖" detail="代表你這幾週的 build，不是永久加點。">
                <ResponsiveContainer width="100%" height={248}>
                  <RadarChart data={derived.charts.radarRows} outerRadius="72%">
                    <PolarGrid stroke="rgba(123, 141, 189, 0.26)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(38, 54, 92, 0.92)", fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="value" stroke={CHART_COLORS.radar} fill={CHART_COLORS.radar} fillOpacity={0.28} strokeWidth={2.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "target", label: "Focus" }} title="睡眠時間 vs Focus" detail="睡眠與專注度的關聯圖，不佔首頁主視覺。">
                <ResponsiveContainer width="100%" height={248}>
                  <ScatterChart margin={{ top: 12, right: 12, left: 0, bottom: 8 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis type="number" dataKey="sleepHours" name="Sleep" unit="h" domain={[0, 10]} stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis type="number" dataKey="focusScore" name="Focus" domain={[0, 100]} stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <Tooltip
                      cursor={{ strokeDasharray: "3 3" }}
                      contentStyle={chartTooltipStyle()}
                      formatter={(value, name) => [name === "sleepHours" ? `${value}h` : value, name === "sleepHours" ? "睡眠" : "Focus"]}
                      labelFormatter={() => ""}
                    />
                    <Scatter data={derived.charts.scatterRows} fill={CHART_COLORS.scatter} />
                  </ScatterChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "coinToy", label: "EXP" }} title="最近 8 週 EXP 成長圖" detail="把一週視為一個章節，觀察整體推進速度。">
                <ResponsiveContainer width="100%" height={248}>
                  <BarChart data={derived.charts.weeklyExpRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="week" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={chartTooltipStyle()}
                      formatter={(value) => [value, "Weekly EXP"]}
                      labelFormatter={(value, rows) => `${value} / ${rows?.[0]?.payload?.label || ""}`}
                    />
                    <Bar dataKey="exp" fill={CHART_COLORS.weeklyExp} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartPanel>

              <ChartPanel eyebrow={{ icon: "boltPixel", label: "Streak" }} title="最近 30 天早睡 streak" detail="Discipline 最直觀的節奏紀錄。">
                <ResponsiveContainer width="100%" height={248}>
                  <LineChart data={derived.charts.streakRows} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 4" />
                    <XAxis dataKey="label" stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} minTickGap={16} />
                    <YAxis stroke={CHART_COLORS.axis} tick={{ fontSize: 11 }} allowDecimals={false} />
                    <Tooltip contentStyle={chartTooltipStyle()} formatter={(value) => [value, "Streak"]} />
                    <Line type="monotone" dataKey="streak" stroke={CHART_COLORS.streak} strokeWidth={3} dot={{ r: 2.8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartPanel>
            </div>
          </section>
        </main>

        <nav className="klrpgBottomNav" aria-label="Kevin Life navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`klrpgBottomNavItem ${activeNav === item.id ? "isActive" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              <Icon name={item.icon} size="sm" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
