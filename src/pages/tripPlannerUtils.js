export const TRIP_STORAGE_KEY = "tripPlanner:v1";
export const TRIP_MODE_EDIT = "edit";
export const TRIP_MODE_VIEW = "view";

const EARTH_RADIUS_KM = 6371;

function toSafeNumber(value, fallback = 0) {
  if (value === null || value === undefined || value === "") return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function normalizeDateInput(dateText) {
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function seededNumberFromText(text) {
  let hash = 2166136261;
  const source = String(text || "");
  for (let i = 0; i < source.length; i += 1) {
    hash ^= source.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

export function parseTimeToMinutes(timeText) {
  if (!timeText || typeof timeText !== "string") return null;
  const match = /^(\d{2}):(\d{2})$/.exec(timeText.trim());
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 23 || minute > 59) return null;
  return hour * 60 + minute;
}

export function formatMoneyTwd(value) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(toSafeNumber(value, 0)));
}

export function createItemId() {
  const randomPart = Math.floor(Math.random() * 1_000_000)
    .toString(16)
    .padStart(5, "0");
  return `item-${Date.now().toString(36)}-${randomPart}`;
}

export function createEmptyTripItem() {
  return {
    id: createItemId(),
    kind: "activity",
    title: "New item",
    location: "",
    startTime: "",
    endTime: "",
    openTime: "",
    closeTime: "",
    transferMin: 15,
    airportBufferMin: 0,
    transportMode: "walk",
    costCategory: "other",
    estimatedCost: 0,
    actualCost: null,
    note: "",
    lat: null,
    lng: null,
    done: false,
  };
}

function normalizeItem(item) {
  return {
    ...createEmptyTripItem(),
    ...item,
    id: item?.id || createItemId(),
    estimatedCost: toSafeNumber(item?.estimatedCost, 0),
    actualCost:
      item?.actualCost === null || item?.actualCost === undefined || item?.actualCost === ""
        ? null
        : toSafeNumber(item.actualCost, 0),
    transferMin: toSafeNumber(item?.transferMin, 0),
    airportBufferMin: toSafeNumber(item?.airportBufferMin, 0),
    lat:
      item?.lat === null || item?.lat === undefined || item?.lat === ""
        ? null
        : toSafeNumber(item.lat, null),
    lng:
      item?.lng === null || item?.lng === undefined || item?.lng === ""
        ? null
        : toSafeNumber(item.lng, null),
    done: Boolean(item?.done),
  };
}

function normalizeReservation(entry, index) {
  return {
    id: entry?.id || `reservation-${index + 1}`,
    dayId: entry?.dayId || "",
    title: entry?.title || "Reservation",
    dueDate: entry?.dueDate || "",
    channel: entry?.channel || "",
    note: entry?.note || "",
    confirmed: Boolean(entry?.confirmed),
  };
}

function normalizeChecklistEntry(entry, index) {
  return {
    id: entry?.id || `checklist-${index + 1}`,
    title: entry?.title || "Checklist item",
    checked: Boolean(entry?.checked),
  };
}

export function getItemNavigationUrl(item) {
  if (Number.isFinite(item?.lat) && Number.isFinite(item?.lng)) {
    return `https://www.openstreetmap.org/?mlat=${item.lat}&mlon=${item.lng}#map=16/${item.lat}/${item.lng}`;
  }
  const q = encodeURIComponent(item?.location || item?.title || "osaka");
  return `https://www.openstreetmap.org/search?query=${q}`;
}

export function getDirectionsUrl(fromItem, toItem) {
  if (
    !Number.isFinite(fromItem?.lat) ||
    !Number.isFinite(fromItem?.lng) ||
    !Number.isFinite(toItem?.lat) ||
    !Number.isFinite(toItem?.lng)
  ) {
    return getItemNavigationUrl(toItem);
  }
  return `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${fromItem.lat}%2C${fromItem.lng}%3B${toItem.lat}%2C${toItem.lng}`;
}

export function getGoogleDirectionsUrl(fromItem, toItem, transportMode = "transit") {
  const mode = ["driving", "walking", "transit"].includes(transportMode)
    ? transportMode
    : "transit";

  if (
    Number.isFinite(fromItem?.lat) &&
    Number.isFinite(fromItem?.lng) &&
    Number.isFinite(toItem?.lat) &&
    Number.isFinite(toItem?.lng)
  ) {
    return `https://www.google.com/maps/dir/?api=1&origin=${fromItem.lat},${fromItem.lng}&destination=${toItem.lat},${toItem.lng}&travelmode=${mode}`;
  }

  const origin = encodeURIComponent(fromItem?.location || fromItem?.title || "Osaka");
  const destination = encodeURIComponent(toItem?.location || toItem?.title || "Osaka");
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${mode}`;
}

export function getDayMapEmbedUrl(items, focusItemId) {
  const mapItems = (items || []).filter(
    (item) => Number.isFinite(item.lat) && Number.isFinite(item.lng),
  );
  if (mapItems.length === 0) {
    return "https://www.openstreetmap.org/export/embed.html?bbox=135.39%2C34.58%2C135.63%2C34.75&layer=mapnik";
  }

  const focusItem = mapItems.find((item) => item.id === focusItemId) || mapItems[0];
  const lats = mapItems.map((item) => item.lat);
  const lngs = mapItems.map((item) => item.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const padding = 0.08;
  const west = clamp(minLng - padding, -180, 180);
  const south = clamp(minLat - padding, -90, 90);
  const east = clamp(maxLng + padding, -180, 180);
  const north = clamp(maxLat + padding, -90, 90);

  return `https://www.openstreetmap.org/export/embed.html?bbox=${west}%2C${south}%2C${east}%2C${north}&layer=mapnik&marker=${focusItem.lat}%2C${focusItem.lng}`;
}

function getReferenceEndMinutes(item) {
  return parseTimeToMinutes(item?.endTime) ?? parseTimeToMinutes(item?.startTime);
}

function getReferenceStartMinutes(item) {
  return parseTimeToMinutes(item?.startTime);
}

export function getItemStartSortValue(item) {
  return getReferenceStartMinutes(item) ?? Number.MAX_SAFE_INTEGER;
}

export function getTimeSlotTheme(item) {
  const start = parseTimeToMinutes(item?.startTime);
  if (start === null) return { id: "unknown", label: "未排時間", className: "slot-unknown" };
  if (start < 360) return { id: "night", label: "凌晨", className: "slot-night" };
  if (start < 720) return { id: "morning", label: "早晨", className: "slot-morning" };
  if (start < 1020) return { id: "afternoon", label: "午後", className: "slot-afternoon" };
  if (start < 1260) return { id: "evening", label: "夜晚", className: "slot-evening" };
  return { id: "night", label: "深夜", className: "slot-night" };
}

export function getTransportLineColor(item) {
  const modeText = `${item?.transportMode || ""} ${item?.title || ""}`.toLowerCase();
  if (item?.kind === "flight") return "#7e5bef";
  if (modeText.includes("jr")) return "#3b82f6";
  if (modeText.includes("metro") || modeText.includes("subway") || modeText.includes("地鐵")) {
    return "#10b981";
  }
  if (modeText.includes("taxi") || modeText.includes("計程車")) return "#f59e0b";
  if (modeText.includes("walk") || modeText.includes("步行")) return "#6b7280";
  if (item?.kind === "transport") return "#0ea5e9";
  return "#94a3b8";
}

/**
 * @typedef {Object} ConflictIssue
 * @property {string} id
 * @property {string} dayId
 * @property {string} itemId
 * @property {"business-hours"|"transfer-gap"|"airport-buffer"} type
 * @property {"warning"|"critical"} severity
 * @property {string} message
 */

/**
 * @param {{id: string, items: Array}} day
 * @returns {ConflictIssue[]}
 */
export function computeDayConflicts(day) {
  const issues = [];
  if (!day || !Array.isArray(day.items)) return issues;

  day.items.forEach((item, index) => {
    const startMin = parseTimeToMinutes(item.startTime);
    const endMin = parseTimeToMinutes(item.endTime);
    const openMin = parseTimeToMinutes(item.openTime);
    const closeMin = parseTimeToMinutes(item.closeTime);

    if (openMin !== null && closeMin !== null && startMin !== null) {
      const outOfOpenWindow = startMin < openMin || startMin > closeMin;
      const endOverClose = endMin !== null && endMin > closeMin;
      if (outOfOpenWindow || endOverClose) {
        issues.push({
          id: `${day.id}-${item.id}-business-hours`,
          dayId: day.id,
          itemId: item.id,
          type: "business-hours",
          severity: "warning",
          message: `${item.title} 不在營業時段內 (${item.openTime}-${item.closeTime})`,
        });
      }
    }

    const prev = day.items[index - 1];
    if (prev && startMin !== null && toSafeNumber(item.transferMin, 0) > 0) {
      const prevEnd = getReferenceEndMinutes(prev);
      if (prevEnd !== null) {
        const gap = startMin - prevEnd;
        if (gap < toSafeNumber(item.transferMin, 0)) {
          issues.push({
            id: `${day.id}-${item.id}-transfer-gap`,
            dayId: day.id,
            itemId: item.id,
            type: "transfer-gap",
            severity: "warning",
            message: `${item.title} 轉乘時間不足，建議至少 ${item.transferMin} 分鐘，目前僅 ${Math.max(
              gap,
              0,
            )} 分鐘`,
          });
        }
      }
    }

    if (
      item.kind === "flight" &&
      toSafeNumber(item.airportBufferMin, 0) > 0 &&
      startMin !== null &&
      prev
    ) {
      const prevEnd = getReferenceEndMinutes(prev);
      if (prevEnd !== null) {
        const gap = startMin - prevEnd;
        if (gap < toSafeNumber(item.airportBufferMin, 0)) {
          issues.push({
            id: `${day.id}-${item.id}-airport-buffer`,
            dayId: day.id,
            itemId: item.id,
            type: "airport-buffer",
            severity: "critical",
            message: `航班 ${item.title} 前緩衝不足，建議至少 ${item.airportBufferMin} 分鐘`,
          });
        }
      }
    }
  });

  return issues;
}

export function computeDayBudget(day) {
  const summary = {
    estimated: 0,
    actual: 0,
    byCategory: {},
  };
  if (!day || !Array.isArray(day.items)) return summary;

  day.items.forEach((item) => {
    const category = item.costCategory || "other";
    const estimate = toSafeNumber(item.estimatedCost, 0);
    const actual = toSafeNumber(item.actualCost, 0);

    summary.estimated += estimate;
    summary.actual += actual;

    if (!summary.byCategory[category]) {
      summary.byCategory[category] = { estimated: 0, actual: 0 };
    }
    summary.byCategory[category].estimated += estimate;
    summary.byCategory[category].actual += actual;
  });

  return summary;
}

export function computeTripBudget(plan) {
  const totals = {
    estimated: 0,
    actual: 0,
    byDay: {},
  };
  if (!plan || !Array.isArray(plan.days)) return totals;

  plan.days.forEach((day) => {
    const dayBudget = computeDayBudget(day);
    totals.byDay[day.id] = dayBudget;
    totals.estimated += dayBudget.estimated;
    totals.actual += dayBudget.actual;
  });

  return totals;
}

function haversineDistanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_KM * c;
}

function isLikelyWalkLabel(labelText) {
  const text = String(labelText || "").toLowerCase();
  return (
    text.includes("walk") ||
    text.includes("walking") ||
    text.includes("on foot") ||
    text.includes("步行")
  );
}

function isLikelyMetroLabel(labelText) {
  const text = String(labelText || "").toLowerCase();
  return text.includes("metro") || text.includes("subway") || text.includes("地鐵");
}

function isLikelyJrLabel(labelText) {
  const text = String(labelText || "").toLowerCase();
  return text.includes("jr");
}

function isLikelyTaxiLabel(labelText) {
  const text = String(labelText || "").toLowerCase();
  return text.includes("taxi") || text.includes("計程車");
}

function getDurationFromTimeRange(startTime, endTime) {
  const start = parseTimeToMinutes(startTime);
  const end = parseTimeToMinutes(endTime);
  if (start === null || end === null) return null;
  let minutes = end - start;
  if (minutes < 0) minutes += 24 * 60;
  return minutes;
}

export function estimateDayTravelDistanceKm(day) {
  if (!day || !Array.isArray(day.items)) return 0;
  const mapped = day.items.filter(
    (item) => Number.isFinite(item.lat) && Number.isFinite(item.lng),
  );
  if (mapped.length < 2) return 0;

  let total = 0;
  for (let i = 1; i < mapped.length; i += 1) {
    total += haversineDistanceKm(
      mapped[i - 1].lat,
      mapped[i - 1].lng,
      mapped[i].lat,
      mapped[i].lng,
    );
  }
  return Number(total.toFixed(1));
}

export function estimateDayWalkingSummary(day) {
  if (!day || !Array.isArray(day.items)) {
    return { distanceKm: 0, minutes: 0, legCount: 0 };
  }

  const mapIndexes = [];
  day.items.forEach((item, index) => {
    if (Number.isFinite(item.lat) && Number.isFinite(item.lng)) {
      mapIndexes.push(index);
    }
  });
  if (mapIndexes.length < 2) {
    return { distanceKm: 0, minutes: 0, legCount: 0 };
  }

  let totalDistance = 0;
  let legCount = 0;

  for (let i = 0; i < mapIndexes.length - 1; i += 1) {
    const fromIndex = mapIndexes[i];
    const toIndex = mapIndexes[i + 1];
    const fromItem = day.items[fromIndex];
    const toItem = day.items[toIndex];
    const between = day.items.slice(fromIndex + 1, toIndex);
    const transportItem = between.find((item) => item.kind === "transport");
    const transportLabel = transportItem?.transportMode || transportItem?.title || "walk";
    const isWalk = !transportItem || isLikelyWalkLabel(transportLabel);
    if (!isWalk) continue;

    totalDistance += haversineDistanceKm(
      fromItem.lat,
      fromItem.lng,
      toItem.lat,
      toItem.lng,
    );
    legCount += 1;
  }

  const distanceKm = Number(totalDistance.toFixed(1));
  const minutes = Math.max(0, Math.round((distanceKm / 4.8) * 60));
  return { distanceKm, minutes, legCount };
}

export function computeDayStressScore(day) {
  const items = day?.items || [];
  const conflictCount = computeDayConflicts(day).length;
  const transferNeed = items.reduce((sum, item) => sum + toSafeNumber(item.transferMin, 0), 0);
  const finishedSpan = (() => {
    const starts = items
      .map((item) => parseTimeToMinutes(item.startTime))
      .filter((value) => value !== null);
    const ends = items
      .map((item) => parseTimeToMinutes(item.endTime))
      .filter((value) => value !== null);
    if (!starts.length || !ends.length) return 0;
    return Math.max(...ends) - Math.min(...starts);
  })();
  const density = finishedSpan > 0 ? (items.length / (finishedSpan / 60)) * 10 : 0;
  const distanceKm = estimateDayTravelDistanceKm(day);

  const score = clamp(
    Math.round(
      items.length * 3 +
        conflictCount * 16 +
        density * 2.3 +
        Math.min(28, transferNeed / 8) +
        Math.min(22, distanceKm * 2.4),
    ),
    0,
    100,
  );

  const reasons = [];
  if (conflictCount > 0) reasons.push(`有 ${conflictCount} 個衝突提醒`);
  if (distanceKm > 15) reasons.push(`移動距離偏長（${distanceKm}km）`);
  if (transferNeed > 120) reasons.push(`轉乘需求偏高（${transferNeed} 分鐘）`);
  if (items.length >= 7) reasons.push(`當日排程偏滿（${items.length} 項）`);
  if (reasons.length === 0) reasons.push("整體節奏平衡");

  let level = "低";
  let hint = "節奏舒適，依原計畫進行即可。";
  if (score >= 75) {
    level = "高";
    hint = "建議減少 1-2 個點，或調整轉乘密度。";
  } else if (score >= 50) {
    level = "中";
    hint = "可保留主要景點，改用較彈性的餐飲安排。";
  }

  return { score, level, hint, reasons, distanceKm, conflictCount };
}

export function computePassEstimate(day) {
  if (!day || !Array.isArray(day.items)) {
    return { singleFare: 0, options: [], best: { name: "N/A", cost: 0, saving: 0 } };
  }

  const transportItems = day.items.filter((item) => item.kind === "transport");
  const singleFare = transportItems.reduce(
    (sum, item) => sum + toSafeNumber(item.estimatedCost, 0),
    0,
  );
  const metroCount = transportItems.filter((item) => {
    const mode = `${item.transportMode || ""} ${item.title || ""}`.toLowerCase();
    return mode.includes("metro") || mode.includes("地鐵") || mode.includes("subway");
  }).length;
  const jrCount = transportItems.filter((item) => {
    const mode = `${item.transportMode || ""} ${item.title || ""}`.toLowerCase();
    return mode.includes("jr");
  }).length;

  const options = [
    { name: "單程累加", cost: singleFare, note: "逐段購票總和" },
    {
      name: "Osaka Metro 1-day pass",
      cost: 820,
      note: metroCount >= 3 ? "今天地鐵段數多，通常划算" : "地鐵段數偏少，可能不划算",
    },
    {
      name: "JR 1-day style budget",
      cost: 1200,
      note: jrCount >= 2 ? "JR 段數多可考慮" : "JR 段數少，通常不划算",
    },
  ];

  const best = options.reduce((acc, current) => (current.cost < acc.cost ? current : acc), options[0]);
  return {
    singleFare,
    options,
    best: {
      name: best.name,
      cost: best.cost,
      saving: clamp(singleFare - best.cost, 0, Number.MAX_SAFE_INTEGER),
    },
  };
}

export function getMockWeather(dateText) {
  const date = normalizeDateInput(dateText);
  const seed = seededNumberFromText(dateText || "default");
  const high = 16 + (seed % 10);
  const low = Math.max(7, high - (5 + (seed % 3)));
  const rainChance = clamp((seed % 85) + 5, 5, 95);

  let condition = "多雲時晴";
  if (rainChance >= 70) condition = "短時陣雨";
  else if (rainChance >= 45) condition = "陰天偶雨";
  else if (rainChance <= 20) condition = "晴朗";

  const indoorHint =
    rainChance >= 60
      ? "雨天建議：百貨、地下街、咖啡店與美術館備案。"
      : "天氣穩定，可安排戶外散步與拍照景點。";

  return {
    dateKey: date ? date.toISOString().slice(0, 10) : "",
    high,
    low,
    rainChance,
    condition,
    indoorHint,
  };
}

export function normalizeTripPlan(rawPlan) {
  const source = rawPlan || {};
  const days = Array.isArray(source.days) ? source.days : [];

  const normalizedDays = days.map((day, dayIndex) => ({
    id: day.id || `day-${dayIndex + 1}`,
    dayNumber: toSafeNumber(day.dayNumber, dayIndex + 1),
    date: day.date || "",
    title: day.title || `Day ${dayIndex + 1}`,
    notes: Array.isArray(day.notes) ? day.notes : [],
    alternatives: Array.isArray(day.alternatives) ? day.alternatives : [],
    items: Array.isArray(day.items) ? day.items.map((item) => normalizeItem(item)) : [],
  }));

  const reservations = Array.isArray(source.reservations)
    ? source.reservations.map((entry, index) => normalizeReservation(entry, index))
    : [];
  const checklist = Array.isArray(source.checklist)
    ? source.checklist.map((entry, index) => normalizeChecklistEntry(entry, index))
    : [];

  return {
    version: toSafeNumber(source.version, 1),
    id: source.id || "imported-trip",
    title: source.title || "Untitled Trip",
    subtitle: source.subtitle || "",
    timezone: source.timezone || "Asia/Tokyo",
    startDate: source.startDate || "",
    endDate: source.endDate || "",
    days: normalizedDays,
    reservations,
    checklist,
  };
}

export function validateTripPlanPayload(rawPayload) {
  if (!rawPayload || typeof rawPayload !== "object") {
    return { ok: false, error: "Import failed: invalid JSON object." };
  }
  if (!Array.isArray(rawPayload.days) || rawPayload.days.length === 0) {
    return { ok: false, error: "Import failed: missing days array." };
  }

  const normalized = normalizeTripPlan(rawPayload);
  const hasInvalidDay = normalized.days.some((day) => !Array.isArray(day.items));
  if (hasInvalidDay) {
    return { ok: false, error: "Import failed: day.items must be an array." };
  }

  return { ok: true, value: normalized };
}

export function moveItemBetweenDays(plan, movePayload) {
  const { fromDayId, toDayId, itemId, toIndex } = movePayload;
  const nextPlan = {
    ...plan,
    days: plan.days.map((day) => ({ ...day, items: [...day.items] })),
  };

  const fromDay = nextPlan.days.find((day) => day.id === fromDayId);
  const toDay = nextPlan.days.find((day) => day.id === toDayId);
  if (!fromDay || !toDay) return plan;

  const fromIndex = fromDay.items.findIndex((item) => item.id === itemId);
  if (fromIndex === -1) return plan;

  const [movedItem] = fromDay.items.splice(fromIndex, 1);
  let insertIndex = Number.isFinite(toIndex) ? toIndex : toDay.items.length;

  if (fromDay.id === toDay.id && fromIndex < insertIndex) {
    insertIndex -= 1;
  }
  insertIndex = clamp(insertIndex, 0, toDay.items.length);
  toDay.items.splice(insertIndex, 0, movedItem);
  return nextPlan;
}

export function moveItemInList(items, fromIndex, toIndex) {
  if (!Array.isArray(items)) return [];
  const nextItems = [...items];
  if (
    fromIndex < 0 ||
    fromIndex >= nextItems.length ||
    toIndex < 0 ||
    toIndex >= nextItems.length
  ) {
    return nextItems;
  }
  const [picked] = nextItems.splice(fromIndex, 1);
  nextItems.splice(toIndex, 0, picked);
  return nextItems;
}

export function buildDayRouteLegs(day) {
  if (!day || !Array.isArray(day.items)) return [];

  const HOTEL_START = {
    id: "tokyu-stay-sakaisuji-honmachi",
    title: "Tokyu Stay Osaka Honmachi",
    location: "Sakaisuji Honmachi",
    kind: "hotel",
    lat: 34.6841,
    lng: 135.5068,
  };

  const resolveStartPoint = () => {
    const isDay1 = day.id === "day1" || day.dayNumber === 1;
    if (!isDay1) return HOTEL_START;

    const airportLikeItem = day.items.find((item) => {
      if (!Number.isFinite(item?.lat) || !Number.isFinite(item?.lng)) return false;
      const text = `${item?.title || ""} ${item?.location || ""}`.toLowerCase();
      return item?.kind === "flight" || text.includes("kix") || text.includes("airport");
    });

    return airportLikeItem || HOTEL_START;
  };
  const startPoint = resolveStartPoint();

  const isAirportPoint = (item) => {
    const text = `${item?.title || ""} ${item?.location || ""}`.toLowerCase();
    return text.includes("kix") || text.includes("airport") || text.includes("機場");
  };

  const collectIndexes = (predicate) => {
    const indexes = [];
    day.items.forEach((item, index) => {
      if (!Number.isFinite(item.lat) || !Number.isFinite(item.lng)) return;
      if (predicate(item)) indexes.push(index);
    });
    return indexes;
  };

  let destinationIndexes = collectIndexes(
    (item) => !["transport", "hotel", "flight"].includes(item.kind),
  );
  if (!destinationIndexes.length) {
    destinationIndexes = collectIndexes((item) => !["transport", "hotel"].includes(item.kind));
  }
  if (!destinationIndexes.length) {
    destinationIndexes = collectIndexes((item) => item.kind !== "transport");
  }
  if (!destinationIndexes.length) return [];

  const legs = [];
  for (let i = 0; i < destinationIndexes.length; i += 1) {
    const toIndex = destinationIndexes[i];
    const toItem = day.items[toIndex];
    const previousIndex = i === 0 ? null : destinationIndexes[i - 1];
    const fromItem = previousIndex === null ? startPoint : day.items[previousIndex];
    const between =
      previousIndex === null
        ? day.items.slice(0, toIndex)
        : day.items.slice(previousIndex + 1, toIndex);
    const transportItem = between.find((item) => item.kind === "transport");
    const transportLabel = transportItem?.transportMode || transportItem?.title || "walk";
    const distanceKm = Number(
      haversineDistanceKm(fromItem.lat, fromItem.lng, toItem.lat, toItem.lng).toFixed(1),
    );

    let transportType = (() => {
      if (!transportItem) {
        return "walk";
      }
      if (isLikelyWalkLabel(transportLabel)) return "walk";
      if (isLikelyMetroLabel(transportLabel)) return "metro";
      if (isLikelyJrLabel(transportLabel)) return "jr";
      if (isLikelyTaxiLabel(transportLabel)) return "taxi";
      return "transit";
    })();

    // Day 1 從機場出發的首段，避免被誤判成步行。
    if (i === 0 && transportType === "walk" && isAirportPoint(fromItem)) {
      transportType = "transit";
    }
    // 任一端為機場且缺少交通資訊時，優先視為大眾運輸。
    if (!transportItem && transportType === "walk" && (isAirportPoint(fromItem) || isAirportPoint(toItem))) {
      transportType = "transit";
    }

    let googleMode = "transit";
    if (transportType === "walk") googleMode = "walking";
    if (transportType === "taxi") googleMode = "driving";

    const scheduledDuration = getDurationFromTimeRange(
      transportItem?.startTime,
      transportItem?.endTime,
    );
    let durationMin = scheduledDuration;
    let durationSource = scheduledDuration !== null ? "schedule" : "estimate";
    if (durationMin === null) {
      if (transportType === "walk") {
        durationMin = Math.max(1, Math.round((distanceKm / 4.8) * 60));
      } else if (transportType === "metro" || transportType === "jr") {
        durationMin = Math.max(2, Math.round((distanceKm / 28) * 60) + 4);
      } else if (transportType === "taxi") {
        durationMin = Math.max(2, Math.round((distanceKm / 26) * 60) + 2);
      } else {
        durationMin = Math.max(2, Math.round((distanceKm / 22) * 60) + 4);
      }
    }

    const estimatedCost = toSafeNumber(transportItem?.estimatedCost, 0);

    legs.push({
      id: `${fromItem.id}-${toItem.id}-${i}`,
      from: fromItem,
      to: toItem,
      transportItemId: transportItem?.id || "",
      transportLabel,
      transportType,
      distanceKm,
      durationMin,
      durationSource,
      estimatedCost,
      directionsUrl: getDirectionsUrl(fromItem, toItem),
      googleDirectionsUrl: getGoogleDirectionsUrl(fromItem, toItem, googleMode),
    });
  }
  return legs;
}

export function resolveDayId(dayQuery, days) {
  if (!Array.isArray(days) || days.length === 0) return "";
  if (!dayQuery) return days[0].id;

  const byId = days.find((day) => day.id === dayQuery);
  if (byId) return byId.id;

  const dayNumber = Number(dayQuery);
  if (Number.isFinite(dayNumber)) {
    const byNumber = days.find((day) => day.dayNumber === dayNumber);
    if (byNumber) return byNumber.id;
  }
  return days[0].id;
}

function escapeIcsText(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function toIcsLocalDateTime(dateText, timeText) {
  const date = normalizeDateInput(dateText);
  if (!date || !timeText) return "";
  const [hourText, minuteText] = timeText.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return "";

  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  const hh = pad2(hour);
  const mm = pad2(minute);
  return `${y}${m}${d}T${hh}${mm}00`;
}

export function buildIcsForPlan(plan) {
  const now = new Date();
  const dtStamp = `${now.getUTCFullYear()}${pad2(now.getUTCMonth() + 1)}${pad2(now.getUTCDate())}T${pad2(
    now.getUTCHours(),
  )}${pad2(now.getUTCMinutes())}${pad2(now.getUTCSeconds())}Z`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DCA Simulator//Trip Planner//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Kyoto Osaka Trip Planner",
  ];

  (plan?.days || []).forEach((day) => {
    const items = day.items || [];
    items.forEach((item) => {
      if (!item.startTime) return;
      const dtStart = toIcsLocalDateTime(day.date, item.startTime);
      if (!dtStart) return;

      const fallbackEndMinutes = (() => {
        const start = parseTimeToMinutes(item.startTime);
        if (start === null) return null;
        return start + 60;
      })();
      const fallbackEnd = fallbackEndMinutes
        ? `${pad2(Math.floor(fallbackEndMinutes / 60) % 24)}:${pad2(fallbackEndMinutes % 60)}`
        : item.startTime;
      const endTime = item.endTime || fallbackEnd;
      const dtEnd = toIcsLocalDateTime(day.date, endTime);
      const uid = `${item.id}-${day.date || "date"}@dca-simulator`;

      lines.push("BEGIN:VEVENT");
      lines.push(`UID:${uid}`);
      lines.push(`DTSTAMP:${dtStamp}`);
      lines.push(`DTSTART;TZID=Asia/Tokyo:${dtStart}`);
      lines.push(`DTEND;TZID=Asia/Tokyo:${dtEnd || dtStart}`);
      lines.push(`SUMMARY:${escapeIcsText(item.title || "Trip item")}`);
      lines.push(`LOCATION:${escapeIcsText(item.location || "")}`);
      lines.push(`DESCRIPTION:${escapeIcsText(item.note || "")}`);
      lines.push("END:VEVENT");
    });
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildGoogleRoutesBundle(plan) {
  const lines = [];
  lines.push("Kyoto Osaka Route Pack");
  lines.push(`Generated at: ${new Date().toISOString()}`);
  lines.push("");

  (plan?.days || []).forEach((day) => {
    const dayItems = day.items || [];
    const dayForLegs = { ...day, items: dayItems };
    lines.push(`## Day ${day.dayNumber} ${day.date} ${day.title}`);

    const legs = buildDayRouteLegs(dayForLegs);
    if (legs.length === 0) {
      lines.push("- No route legs with coordinates.");
    } else {
      legs.forEach((leg, index) => {
        lines.push(
          `${index + 1}. ${leg.from.title} -> ${leg.to.title} (${leg.transportLabel})`,
        );
        lines.push(`   OSM: ${leg.directionsUrl}`);
        lines.push(`   Google: ${leg.googleDirectionsUrl}`);
      });
    }

    lines.push("- Spot quick links:");
    dayItems.forEach((item, index) => {
      lines.push(`   ${index + 1}. ${item.title}: ${getItemNavigationUrl(item)}`);
    });
    lines.push("");
  });

  return lines.join("\n");
}
