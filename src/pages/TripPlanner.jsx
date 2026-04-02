import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createInitialTripPlan } from "../data/tripKyotoOsaka2026";
import "./TripPlanner.css";
import {
  TRIP_STORAGE_KEY,
  buildDayRouteLegs,
  computeDayBudget,
  computePassEstimate,
  computeTripBudget,
  createEmptyTripItem,
  getDayMapEmbedUrl,
  getItemNavigationUrl,
  getMockWeather,
  getTimeSlotTheme,
  getTransportLineColor,
  moveItemInList,
  resolveDayId,
  validateTripPlanPayload,
} from "./tripPlannerUtils";

const ITEM_KIND_OPTIONS = [
  { value: "activity", label: "景點" },
  { value: "meal", label: "餐飲" },
  { value: "coffee", label: "咖啡" },
  { value: "transport", label: "交通" },
  { value: "shopping", label: "購物" },
  { value: "hotel", label: "住宿" },
  { value: "flight", label: "航班" },
  { value: "other", label: "其他" },
];

const DEFAULT_RESERVATIONS = [
  {
    id: "r-day1-yakiniku-m",
    dayId: "day1",
    title: "松阪牛燒肉 M（晚餐預約）",
    dueDate: "2026-04-05",
    channel: "官網 / 電話",
    note: "建議提前 2-4 週確認",
    confirmed: false,
  },
];

const DEFAULT_CHECKLIST = [
  { id: "c-passport", title: "護照與簽證", checked: false },
  { id: "c-esim", title: "eSIM / 漫遊開通", checked: false },
  { id: "c-insurance", title: "旅平險", checked: false },
  { id: "c-usj", title: "USJ 票券與快通", checked: false },
  { id: "c-hotel", title: "飯店訂單確認", checked: false },
];

const DAY_COVERS = {
  day1: { symbol: "🛬", area: "心齋橋", title: "抵達日", tone: "linear-gradient(135deg,#b6c8ea,#fbd3d5,#f8ddb4)" },
  day2: { symbol: "🌸", area: "大阪城", title: "賞櫻日", tone: "linear-gradient(135deg,#d4e5b7,#f4d7ec,#f8f3c6)" },
  day3: { symbol: "👘", area: "京都", title: "和服日", tone: "linear-gradient(135deg,#ffd6a3,#e4c9ff,#c6d9ff)" },
  day4: { symbol: "⛩️", area: "勝尾寺", title: "寺院巡禮", tone: "linear-gradient(135deg,#c5ded7,#d6e9b6,#f4edc4)" },
  day5: { symbol: "🎢", area: "USJ", title: "樂園日", tone: "linear-gradient(135deg,#8cd7d1,#90b8ff,#cfadff)" },
  day6: { symbol: "🍜", area: "難波", title: "美食散步", tone: "linear-gradient(135deg,#f8dca5,#f4b5b5,#f8d7e1)" },
  day7: { symbol: "🛍️", area: "黑門市場", title: "市場日", tone: "linear-gradient(135deg,#d2e7fa,#d9f1cf,#ffe8ba)" },
  day8: { symbol: "🛫", area: "KIX", title: "返程日", tone: "linear-gradient(135deg,#d0ddf8,#eadcf8,#f9e5c7)" },
};

const TWD_TO_JPY_RATE = 4.6;
const twdFormatter = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0,
});
const jpyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function compareDayDate(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function toSafeNumber(value, fallback = 0) {
  if (value === "" || value === null || value === undefined) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toNumberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function isLegacyPresetReservations(reservations) {
  if (!Array.isArray(reservations) || reservations.length !== 3) return false;
  const ids = reservations.map((item) => item?.id).sort().join(",");
  return ids === "r1,r2,r3";
}

function getTransportTypeLabel(type) {
  if (type === "walk") return "步行";
  if (type === "metro") return "地鐵";
  if (type === "jr") return "JR";
  if (type === "taxi") return "計程車";
  return "大眾運輸";
}

function formatDuration(minute) {
  const value = Number(minute);
  if (!Number.isFinite(value) || value <= 0) return "時間未填";
  if (value < 60) return `${value} 分`;
  const hour = Math.floor(value / 60);
  const min = value % 60;
  return min > 0 ? `${hour} 小時 ${min} 分` : `${hour} 小時`;
}

function formatMoneyDual(value) {
  const twd = Math.round(toSafeNumber(value, 0));
  const jpy = Math.round(twd * TWD_TO_JPY_RATE);
  return `🇹🇼 ${twdFormatter.format(twd)} / 🇯🇵 ${jpyFormatter.format(jpy)}`;
}

function reorderItemsByInsertIndex(items, fromIndex, insertIndex) {
  if (!Array.isArray(items)) return [];
  if (fromIndex < 0 || fromIndex >= items.length) return [...items];

  const next = [...items];
  const [picked] = next.splice(fromIndex, 1);
  let target = Math.max(0, Math.min(insertIndex, next.length));
  if (fromIndex < insertIndex) target -= 1;
  target = Math.max(0, Math.min(target, next.length));
  next.splice(target, 0, picked);
  return next;
}

function getTimeSlots(items) {
  return items.map((item) => ({
    startTime: item?.startTime || "",
    endTime: item?.endTime || "",
  }));
}

function applyTimeSlots(items, timeSlots) {
  return items.map((item, index) => ({
    ...item,
    startTime: timeSlots[index]?.startTime || "",
    endTime: timeSlots[index]?.endTime || "",
  }));
}

function withDefaults(rawPlan) {
  const parsed = validateTripPlanPayload(rawPlan);
  const plan = parsed.ok ? parsed.value : validateTripPlanPayload(createInitialTripPlan()).value;
  const baseReservations = Array.isArray(plan.reservations)
    ? plan.reservations
    : deepCopy(DEFAULT_RESERVATIONS);
  const defaultsById = new Map(DEFAULT_RESERVATIONS.map((item) => [item.id, item]));
  const reservations = baseReservations.map((item) => {
    const fallback = defaultsById.get(item?.id);
    if (!fallback) return item;
    return {
      ...fallback,
      ...item,
      dueDate: item?.dueDate || fallback.dueDate,
      channel: item?.channel || fallback.channel,
      note: item?.note || fallback.note,
    };
  });
  const hasDay1DefaultReservation = reservations.some(
    (item) => item?.id === "r-day1-yakiniku-m",
  );
  const hydratedReservations = hasDay1DefaultReservation
    ? reservations
    : [...deepCopy(DEFAULT_RESERVATIONS), ...reservations];
  const checklist = Array.isArray(plan.checklist) ? plan.checklist : [];
  const checklistById = new Map(checklist.map((item) => [item?.id, item]));
  const mergedDefaultChecklist = DEFAULT_CHECKLIST.map((item) => ({
    ...item,
    ...(checklistById.get(item.id) || {}),
  }));
  const customChecklist = checklist.filter(
    (item) => item?.id && !DEFAULT_CHECKLIST.some((defaultItem) => defaultItem.id === item.id),
  );
  const hydratedChecklist =
    checklist.length === 0 ? deepCopy(DEFAULT_CHECKLIST) : [...mergedDefaultChecklist, ...customChecklist];
  return {
    ...plan,
    reservations: hydratedReservations,
    checklist: hydratedChecklist,
  };
}

function loadPlanFromStorage() {
  try {
    const raw = localStorage.getItem(TRIP_STORAGE_KEY);
    if (!raw) return withDefaults(createInitialTripPlan());
    const parsed = JSON.parse(raw);
    if (isLegacyPresetReservations(parsed?.reservations)) {
      parsed.reservations = [];
    }
    return withDefaults(parsed);
  } catch {
    return withDefaults(createInitialTripPlan());
  }
}

export default function TripPlanner() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [plan, setPlan] = useState(() => loadPlanFromStorage());
  const [selectedDayId, setSelectedDayId] = useState("");
  const [focusedMapItemId, setFocusedMapItemId] = useState("");
  const [status, setStatus] = useState({ text: "", tone: "info" });
  const [dropState, setDropState] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [editingItemId, setEditingItemId] = useState("");
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== "undefined" ? !navigator.onLine : false,
  );

  const dayQuery = searchParams.get("day");

  const sortedDays = useMemo(() => [...plan.days].sort(compareDayDate), [plan.days]);
  const selectedDay = useMemo(
    () => sortedDays.find((day) => day.id === selectedDayId) || sortedDays[0],
    [sortedDays, selectedDayId],
  );
  const activeItems = useMemo(() => selectedDay?.items || [], [selectedDay]);

  useEffect(() => {
    const resolved = resolveDayId(dayQuery, sortedDays);
    setSelectedDayId((prev) => (prev === resolved ? prev : resolved));
  }, [dayQuery, sortedDays]);

  useEffect(() => {
    const saveId = window.setTimeout(() => {
      try {
        localStorage.setItem(TRIP_STORAGE_KEY, JSON.stringify(plan));
      } catch {
        setStatus({ text: "儲存失敗，請稍後再試", tone: "error" });
      }
    }, 220);
    return () => window.clearTimeout(saveId);
  }, [plan]);

  useEffect(() => {
    if (!status.text) return undefined;
    const timer = window.setTimeout(() => setStatus({ text: "", tone: "info" }), 2200);
    return () => window.clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    const onOnline = () => setIsOffline(false);
    const onOffline = () => setIsOffline(true);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  function updateSearch(patch) {
    const next = new URLSearchParams(searchParams);
    next.delete("layout");
    next.delete("variant");
    next.delete("mode");
    if (patch.day) next.set("day", patch.day);
    setSearchParams(next, { replace: false });
  }

  useEffect(() => {
    if (!selectedDay?.id) return;
    const currentDay = searchParams.get("day");
    const hasLegacyMode = searchParams.has("mode");
    if (currentDay === selectedDay.id && !hasLegacyMode) return;
    updateSearch({ day: selectedDay.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay?.id]);

  const dayModel = useMemo(() => ({ ...selectedDay, items: activeItems }), [selectedDay, activeItems]);
  const routeLegs = useMemo(() => buildDayRouteLegs(dayModel), [dayModel]);
  const walking = useMemo(() => {
    const walkLegs = routeLegs.filter((leg) => leg.transportType === "walk");
    const routeDistanceKm = walkLegs.reduce((sum, leg) => sum + (leg.distanceKm || 0), 0);
    const routeMinutes = walkLegs.reduce((sum, leg) => sum + (Number(leg.durationMin) || 0), 0);

    return {
      distanceKm: Number(routeDistanceKm.toFixed(1)),
      minutes: Math.max(0, Math.round(routeMinutes)),
      legCount: walkLegs.length,
    };
  }, [routeLegs]);
  const dayBudget = useMemo(() => computeDayBudget(dayModel), [dayModel]);
  const weather = useMemo(() => getMockWeather(selectedDay?.date), [selectedDay?.date]);
  const pass = useMemo(() => computePassEstimate(dayModel), [dayModel]);
  const tripBudget = useMemo(() => computeTripBudget(plan), [plan]);
  const weatherAnimationType =
    weather.rainChance >= 70 ? "rainy" : weather.rainChance >= 35 ? "cloudy" : "sunny";
  const walkingIntensity = Math.min(100, Math.round((walking.minutes / 180) * 100));
  const passSavingRatio =
    pass.singleFare > 0 ? Math.min(100, Math.round((pass.best.saving / pass.singleFare) * 100)) : 0;

  const doneCount = activeItems.filter((item) => item.done).length;
  const progressPct = activeItems.length ? Math.round((doneCount / activeItems.length) * 100) : 0;

  const mapItems = useMemo(
    () => activeItems.filter((item) => Number.isFinite(item.lat) && Number.isFinite(item.lng)),
    [activeItems],
  );

  useEffect(() => {
    if (!mapItems.length) {
      setFocusedMapItemId("");
      return;
    }
    setFocusedMapItemId((prev) =>
      mapItems.some((item) => item.id === prev) ? prev : mapItems[0].id,
    );
  }, [mapItems]);

  const mapEmbedUrl = useMemo(
    () => getDayMapEmbedUrl(mapItems, focusedMapItemId),
    [mapItems, focusedMapItemId],
  );

  useEffect(() => {
    if (!editingItemId) return;
    if (!activeItems.some((item) => item.id === editingItemId)) {
      setEditingItemId("");
    }
  }, [activeItems, editingItemId]);

  const cover = DAY_COVERS[selectedDay?.id] || {
    symbol: "🧳",
    area: "京都 / 大阪",
    title: selectedDay?.title || "旅程",
    tone: "linear-gradient(135deg,#d5dde5,#ffe2e8)",
  };

  const dayReservations = useMemo(
    () => (plan.reservations || []).filter((item) => item.dayId === selectedDay.id),
    [plan.reservations, selectedDay.id],
  );
  const pendingReservations = dayReservations.filter((item) => !item.confirmed);
  const checklistItems = plan.checklist || [];
  const checklistDone = checklistItems.filter((item) => item.checked).length;

  function updateDayItems(dayId, updater) {
    setPlan((current) => ({
      ...current,
      days: current.days.map((day) =>
        day.id === dayId ? { ...day, items: updater(day.items || []) } : day,
      ),
    }));
  }

  function updateItemField(dayId, itemId, field, value) {
    updateDayItems(dayId, (items) =>
      items.map((item) => {
        if (item.id !== itemId) return item;
        if (field === "estimatedCost" || field === "transferMin") {
          return { ...item, [field]: toSafeNumber(value, 0) };
        }
        if (field === "actualCost") {
          return { ...item, actualCost: toNumberOrNull(value) };
        }
        if (field === "lat" || field === "lng") {
          return { ...item, [field]: toNumberOrNull(value) };
        }
        if (field === "done") {
          return { ...item, done: Boolean(value) };
        }
        return { ...item, [field]: value };
      }),
    );
  }

  function addItem() {
    updateDayItems(selectedDay.id, (items) => [...items, createEmptyTripItem()]);
  }

  function removeItem(itemId) {
    updateDayItems(selectedDay.id, (items) => items.filter((item) => item.id !== itemId));
  }

  function duplicateItem(itemId) {
    updateDayItems(selectedDay.id, (items) => {
      const index = items.findIndex((item) => item.id === itemId);
      if (index === -1) return items;
      const next = [...items];
      next.splice(index + 1, 0, {
        ...deepCopy(items[index]),
        id: createEmptyTripItem().id,
        done: false,
      });
      return next;
    });
  }

  function moveItem(itemId, direction) {
    updateDayItems(selectedDay.id, (items) => {
      const fromIndex = items.findIndex((item) => item.id === itemId);
      const toIndex = fromIndex + direction;
      if (fromIndex < 0 || toIndex < 0 || toIndex >= items.length) return items;
      const originalTimeSlots = getTimeSlots(items);
      const moved = moveItemInList(items, fromIndex, toIndex);
      return applyTimeSlots(moved, originalTimeSlots);
    });
  }

  function toggleDone(itemId) {
    const current = activeItems.find((item) => item.id === itemId);
    updateItemField(selectedDay.id, itemId, "done", !current?.done);
  }

  function handleDragStart(event, itemId, index) {
    const payload = { dayId: selectedDay.id, itemId, index };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(payload));
    setDragState(payload);
  }

  function resolveInsertIndexFromPointer(event, index) {
    const rect = event.currentTarget.getBoundingClientRect();
    const isBottomHalf = event.clientY > rect.top + rect.height / 2;
    return isBottomHalf ? index + 1 : index;
  }

  function handleDragOver(event, index, mode = "item") {
    event.preventDefault();
    event.stopPropagation();
    if (mode === "list") {
      setDropState(activeItems.length);
      return;
    }
    setDropState(resolveInsertIndexFromPointer(event, index));
  }

  function handleDrop(event, index, mode = "item") {
    event.preventDefault();
    event.stopPropagation();
    const raw = event.dataTransfer.getData("text/plain");
    let payload = dragState;
    if (raw) {
      try {
        payload = JSON.parse(raw);
      } catch {
        payload = dragState;
      }
    }
    const insertIndex =
      mode === "list" ? activeItems.length : resolveInsertIndexFromPointer(event, index);
    setDropState(null);
    setDragState(null);
    if (!payload || payload.dayId !== selectedDay.id) return;
    updateDayItems(selectedDay.id, (items) => {
      const fromIndex = items.findIndex((item) => item.id === payload.itemId);
      const originalTimeSlots = getTimeSlots(items);
      const moved = reorderItemsByInsertIndex(items, fromIndex, insertIndex);
      return applyTimeSlots(moved, originalTimeSlots);
    });
  }

  function handleDragEnd() {
    setDropState(null);
    setDragState(null);
  }

  function resetPlan() {
    if (!window.confirm("要重設為預設行程嗎？")) return;
    const next = withDefaults(createInitialTripPlan());
    setPlan(next);
    setSelectedDayId(next.days[0].id);
    updateSearch({ day: next.days[0].id });
    setStatus({ text: "已重設行程", tone: "ok" });
  }

  function updateReservation(id, patch) {
    setPlan((current) => ({
      ...current,
      reservations: (current.reservations || []).map((item) =>
        item.id === id ? { ...item, ...patch } : item,
      ),
    }));
  }

  function addReservation() {
    const id = `r-${Date.now().toString(36)}`;
    setPlan((current) => ({
      ...current,
      reservations: [
        ...(current.reservations || []),
        {
          id,
          dayId: selectedDay.id,
          title: "新的預約提醒",
          dueDate: selectedDay.date,
          channel: "",
          note: "",
          confirmed: false,
        },
      ],
    }));
  }

  function updateChecklistItem(id, patch) {
    setPlan((current) => ({
      ...current,
      checklist: (current.checklist || []).map((item) =>
        item.id === id ? { ...item, ...patch } : item,
      ),
    }));
  }

  function addChecklistItem() {
    const id = `c-${Date.now().toString(36)}`;
    setPlan((current) => ({
      ...current,
      checklist: [
        ...(current.checklist || []),
        {
          id,
          title: "新增待辦事項",
          checked: false,
        },
      ],
    }));
  }

  function removeChecklistItem(id) {
    setPlan((current) => ({
      ...current,
      checklist: (current.checklist || []).filter((item) => item.id !== id),
    }));
  }

  function handleCardToggle(event, itemId) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest("a,button,input,select,textarea,label")) return;
    setEditingItemId((prev) => (prev === itemId ? "" : itemId));
  }

  if (!selectedDay) return null;

  return (
    <div className="tripPlanner visual-metro">
      <div className="tripShell">
        <header className="tripHeader">
          <div className="toolbarRow">
            <button className="iosGhostBtn" onClick={() => navigate("/")}>
              回到首頁
            </button>
            <div className="toolbarGroup">
              <button className="iosGhostBtn danger" onClick={resetPlan}>
                還原預設
              </button>
            </div>
          </div>

          <div className="heroCard" style={{ "--coverTone": cover.tone }}>
            <div className="heroOverlay" />
            <div className="heroTop">
              <div>
                <p className="heroEyebrow">iOS 旅遊排程 · 地鐵動線模式</p>
                <h1>{plan.title}</h1>
                <p className="heroSubtitle">
                  {cover.symbol} {cover.title} · {cover.area}
                </p>
              </div>
              <div className="heroStats">
                <span>旅程總預算 {formatMoneyDual(tripBudget.estimated)}</span>
                <span>今日完成率 {progressPct}%</span>
                <span>今日景點數 {mapItems.length}</span>
              </div>
            </div>
            <div className="progressTrack">
              <div className="progressFill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="statusRow">
            <span className={`netBadge ${isOffline ? "offline" : "online"}`}>
              {isOffline ? "離線模式（PWA）" : "連線中"}
            </span>
            {status.text ? <span className={`statusChip ${status.tone}`}>{status.text}</span> : null}
          </div>
        </header>

        <div className="dayTabs">
          {sortedDays.map((day) => (
            <button
              key={day.id}
              className={`dayTab ${day.id === selectedDay.id ? "active" : ""}`}
              onClick={() => {
                setSelectedDayId(day.id);
                updateSearch({ day: day.id });
              }}
            >
              <span>第 {day.dayNumber} 天</span>
              <strong>{day.title}</strong>
              <span>{formatMoneyDual(tripBudget.byDay[day.id]?.estimated || 0)}</span>
            </button>
          ))}
        </div>

        <main className="tripLayout">
          <section className="leftCol">
            <div className="glassCard insights">
              <h2>{selectedDay.title}</h2>
              <p>{new Date(selectedDay.date).toLocaleDateString("zh-TW", { dateStyle: "full" })}</p>
              <p>
                今日預估 {formatMoneyDual(dayBudget.estimated)} · 今日實際{" "}
                {formatMoneyDual(dayBudget.actual)}
              </p>
              <div className="insightGrid">
                <div className="insightCard weatherCard">
                  <div className={`weatherFx ${weatherAnimationType}`} aria-hidden="true">
                    <span className="wxSun" />
                    <span className="wxCloud wxCloud1" />
                    <span className="wxCloud wxCloud2" />
                    <span className="wxRain wxRain1" />
                    <span className="wxRain wxRain2" />
                    <span className="wxRain wxRain3" />
                  </div>
                  <h3>天氣</h3>
                  <p>
                    {weather.condition} · {weather.low}°C-{weather.high}°C · 降雨 {weather.rainChance}%
                  </p>
                  <small>{weather.indoorHint}</small>
                </div>
                <div className="insightCard walkingCard">
                  <div className="walkFx" aria-hidden="true">
                    <span className="walkDot walkDot1" />
                    <span className="walkDot walkDot2" />
                    <span className="walkDot walkDot3" />
                  </div>
                  <h3>步行估算</h3>
                  <p>{walking.distanceKm.toFixed(1)} km · 約 {walking.minutes} 分鐘</p>
                  <div className="statMeter walkingMeter">
                    <span style={{ width: `${walkingIntensity}%` }} />
                  </div>
                  <small>與右側地圖+交通線同源，共 {walking.legCount} 段步行</small>
                </div>
                <div className="insightCard passCard">
                  <div className="passFx" aria-hidden="true">
                    <span className="passRing" />
                  </div>
                  <h3>票券試算</h3>
                  <p>單程 {formatMoneyDual(pass.singleFare)}</p>
                  <div className="statMeter passMeter">
                    <span style={{ width: `${passSavingRatio}%` }} />
                  </div>
                  <small>最佳 {pass.best.name}，省 {formatMoneyDual(pass.best.saving)}</small>
                </div>
              </div>
            </div>

            <div
              className="glassCard timeline metro"
              onDragOver={(event) => handleDragOver(event, activeItems.length, "list")}
              onDrop={(event) => handleDrop(event, activeItems.length, "list")}
            >
              {dragState && dropState === 0 ? (
                <div className="dropIndicator" aria-hidden="true" />
              ) : null}
              {activeItems.map((item, index) => {
                const slot = getTimeSlotTheme(item);
                return (
                  <div key={item.id}>
                    <article
                      className={`tripItem ${slot.className} ${item.done ? "done" : ""} ${
                        dropState === index ? "dropTarget" : ""
                      } ${dragState?.itemId === item.id ? "dragging" : ""} ${
                        "editable"
                      }`}
                      style={{ "--lineColor": getTransportLineColor(item) }}
                      draggable
                      onDragStart={(event) => handleDragStart(event, item.id, index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={(event) => handleDragOver(event, index, "item")}
                      onDrop={(event) => handleDrop(event, index, "item")}
                      onClick={(event) => handleCardToggle(event, item.id)}
                    >
                      <div className="itemTop">
                        <span>
                          {item.startTime || "--:--"} - {item.endTime || "--:--"}
                        </span>
                        <div className="itemBadges">
                          <span>{slot.label}</span>
                          <span>{item.kind}</span>
                          <button
                            className={`stampBtn ${item.done ? "done" : ""}`}
                            onClick={() => toggleDone(item.id)}
                          >
                            {item.done ? "已完成" : "蓋章完成"}
                          </button>
                        </div>
                      </div>
                      <h3
                        className={`itemTitleToggle ${editingItemId === item.id ? "open" : ""}`}
                      >
                        {item.title}
                      </h3>
                      <p className="itemLoc">{item.location || "尚未填寫地點"}</p>
                      {item.done ? <div className="stampMark">已蓋章</div> : null}
                      <div className="itemCost">
                        <span>預估 {formatMoneyDual(item.estimatedCost)}</span>
                        <span>實際 {formatMoneyDual(item.actualCost)}</span>
                      </div>
                      <div className="itemActions">
                        <a href={getItemNavigationUrl(item)} target="_blank" rel="noreferrer">
                          導航
                        </a>
                        <button onClick={() => moveItem(item.id, -1)}>上移</button>
                        <button onClick={() => moveItem(item.id, 1)}>下移</button>
                        <button onClick={() => duplicateItem(item.id)}>複製</button>
                        <button className="danger" onClick={() => removeItem(item.id)}>
                          刪除
                        </button>
                      </div>

                      {editingItemId === item.id ? (
                        <div className="editGrid">
                          <label>
                            標題
                            <input
                              value={item.title}
                              onChange={(event) =>
                                updateItemField(selectedDay.id, item.id, "title", event.target.value)
                              }
                            />
                          </label>
                          <label>
                            類型
                            <select
                              value={item.kind}
                              onChange={(event) =>
                                updateItemField(selectedDay.id, item.id, "kind", event.target.value)
                              }
                            >
                              {ITEM_KIND_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label>
                            開始
                            <input
                              type="time"
                              value={item.startTime || ""}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "startTime",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                          <label>
                            結束
                            <input
                              type="time"
                              value={item.endTime || ""}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "endTime",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                          <label>
                            地點
                            <input
                              value={item.location || ""}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "location",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                          <label>
                            預估費用
                            <input
                              type="number"
                              min="0"
                              value={item.estimatedCost ?? 0}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "estimatedCost",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                          <label>
                            實際費用
                            <input
                              type="number"
                              min="0"
                              value={item.actualCost ?? ""}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "actualCost",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                          <label>
                            轉乘時間（分）
                            <input
                              type="number"
                              min="0"
                              value={item.transferMin ?? 0}
                              onChange={(event) =>
                                updateItemField(
                                  selectedDay.id,
                                  item.id,
                                  "transferMin",
                                  event.target.value,
                                )
                              }
                            />
                          </label>
                        </div>
                      ) : null}
                    </article>
                    {dragState && dropState === index + 1 ? (
                      <div className="dropIndicator" aria-hidden="true" />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <button className="addBtn" onClick={addItem}>
              + 新增行程項目
            </button>
          </section>

          <aside className="rightCol">
            <div className="glassCard mapCard">
              <h3>地圖 + 交通線</h3>
              <div className="mapFrame">
                <iframe title="map" src={mapEmbedUrl} loading="lazy" />
              </div>
              <div className="mapPoints">
                {mapItems.length ? (
                  mapItems.map((item, index) => (
                    <button
                      key={item.id}
                      className={`mapPoint ${item.id === focusedMapItemId ? "active" : ""}`}
                      onClick={() => setFocusedMapItemId(item.id)}
                    >
                      <span>{index + 1}</span>
                      <span>{item.title}</span>
                    </button>
                  ))
                ) : (
                  <p className="muted">尚無可定位景點</p>
                )}
              </div>
              <div className="routeList">
                {routeLegs.map((leg, index) => (
                  <a
                    key={leg.id}
                    className={`routeLeg ${leg.transportType}`}
                    href={leg.googleDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      {index + 1}. [{getTransportTypeLabel(leg.transportType)}] {leg.from.title} {"->"}{" "}
                      {leg.to.title}
                    </span>
                    <em>
                      {leg.transportLabel} · {formatDuration(leg.durationMin)} ·{" "}
                      {leg.estimatedCost > 0 ? formatMoneyDual(leg.estimatedCost) : "💸 費用待補"} ·{" "}
                      {leg.distanceKm} km
                      {leg.durationSource === "estimate" ? "（系統估算）" : ""}
                    </em>
                  </a>
                ))}
              </div>
            </div>

            <div className="glassCard reservation">
              <div className="reservationHead">
                <h3>預約提醒</h3>
                <button className="iosGhostBtn" onClick={addReservation}>
                  + 新增
                </button>
              </div>
              <p className="pending">未確認 {pendingReservations.length} 筆</p>
              <div className="reservationList">
                {dayReservations.length ? (
                  dayReservations.map((item) => (
                    <div key={item.id} className={`reservationItem ${item.confirmed ? "done" : ""}`}>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.confirmed}
                          onChange={(event) =>
                            updateReservation(item.id, { confirmed: event.target.checked })
                          }
                        />
                        <span>{item.title}</span>
                      </label>
                      <div className="reservationMeta">
                        <span>{item.dueDate || "未設定日期"}</span>
                        <span>{item.channel || "未設定來源"}</span>
                      </div>
                      <>
                        <input
                          value={item.title}
                          onChange={(event) =>
                            updateReservation(item.id, { title: event.target.value })
                          }
                        />
                        <input
                          type="date"
                          value={item.dueDate || ""}
                          onChange={(event) =>
                            updateReservation(item.id, { dueDate: event.target.value })
                          }
                        />
                        <input
                          value={item.channel || ""}
                          onChange={(event) =>
                            updateReservation(item.id, { channel: event.target.value })
                          }
                        />
                      </>
                    </div>
                  ))
                ) : (
                  <p className="muted">今日尚無預約提醒</p>
                )}
              </div>
            </div>

            <div className="glassCard checklist">
              <div className="checklistHead">
                <h3>行前待辦</h3>
                <button className="iosGhostBtn" onClick={addChecklistItem}>
                  + 新增
                </button>
              </div>
              <p className="pending">
                已完成 {checklistDone} / {checklistItems.length}
              </p>
              <div className="checklistProgressTrack">
                <div
                  className="checklistProgressFill"
                  style={{
                    width: `${
                      checklistItems.length
                        ? Math.round((checklistDone / checklistItems.length) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
              <div className="checklistList">
                {checklistItems.length ? (
                  checklistItems.map((item) => (
                    <div key={item.id} className={`checklistItem ${item.checked ? "done" : ""}`}>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(event) =>
                            updateChecklistItem(item.id, { checked: event.target.checked })
                          }
                        />
                        <span>{item.title}</span>
                      </label>
                      <div className="checklistActions">
                        <input
                          value={item.title}
                          onChange={(event) =>
                            updateChecklistItem(item.id, { title: event.target.value })
                          }
                        />
                        <button
                          className="iosGhostBtn danger"
                          onClick={() => removeChecklistItem(item.id)}
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="muted">目前沒有待辦項目</p>
                )}
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

