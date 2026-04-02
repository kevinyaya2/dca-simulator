import assert from "node:assert/strict";
import test from "node:test";
import {
  buildDayRouteLegs,
  computeDayConflicts,
  computeTripBudget,
  estimateDayWalkingSummary,
  getDayMapEmbedUrl,
  normalizeTripPlan,
  validateTripPlanPayload,
} from "../src/pages/tripPlannerUtils.js";
import { createInitialTripPlan } from "../src/data/tripKyotoOsaka2026.js";

test("detects business-hours conflict", () => {
  const day = {
    id: "day-x",
    items: [
      {
        id: "item-1",
        kind: "meal",
        title: "Late Dinner",
        startTime: "23:30",
        endTime: "23:50",
        openTime: "11:00",
        closeTime: "23:00",
        transferMin: 0,
      },
    ],
  };

  const issues = computeDayConflicts(day);
  assert.equal(issues.length, 1);
  assert.equal(issues[0].type, "business-hours");
});

test("detects transfer-gap conflict", () => {
  const day = {
    id: "day-y",
    items: [
      {
        id: "item-1",
        kind: "activity",
        title: "Spot A",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: "item-2",
        kind: "activity",
        title: "Spot B",
        startTime: "11:10",
        endTime: "12:00",
        transferMin: 30,
      },
    ],
  };

  const issues = computeDayConflicts(day);
  assert.equal(issues.length, 1);
  assert.equal(issues[0].type, "transfer-gap");
});

test("detects airport buffer conflict", () => {
  const day = {
    id: "day-z",
    items: [
      {
        id: "item-1",
        kind: "transport",
        title: "Train to airport",
        startTime: "11:00",
        endTime: "12:10",
      },
      {
        id: "item-2",
        kind: "flight",
        title: "KIX -> TPE",
        startTime: "13:25",
        endTime: "15:20",
        airportBufferMin: 120,
      },
    ],
  };

  const issues = computeDayConflicts(day);
  assert.equal(issues.length, 1);
  assert.equal(issues[0].type, "airport-buffer");
  assert.equal(issues[0].severity, "critical");
});

test("aggregates trip budget from days", () => {
  const plan = {
    days: [
      {
        id: "day1",
        items: [
          { estimatedCost: 100, actualCost: 80, costCategory: "food" },
          { estimatedCost: 50, actualCost: null, costCategory: "transport" },
        ],
      },
      {
        id: "day2",
        items: [{ estimatedCost: 300, actualCost: 260, costCategory: "ticket" }],
      },
    ],
  };

  const totals = computeTripBudget(plan);
  assert.equal(totals.estimated, 450);
  assert.equal(totals.actual, 340);
  assert.equal(totals.byDay.day1.estimated, 150);
});

test("validates import payload shape", () => {
  const validPayload = {
    version: 1,
    id: "x",
    title: "trip",
    days: [
      {
        id: "day1",
        dayNumber: 1,
        date: "2026-04-05",
        title: "Day 1",
        items: [{ id: "a1", title: "Spot", kind: "activity" }],
      },
    ],
  };

  const validResult = validateTripPlanPayload(validPayload);
  assert.equal(validResult.ok, true);

  const invalidResult = validateTripPlanPayload({ version: 1 });
  assert.equal(invalidResult.ok, false);
});

test("builds OSM embed url with marker", () => {
  const url = getDayMapEmbedUrl(
    [
      { id: "a", lat: 34.6, lng: 135.4 },
      { id: "b", lat: 34.9, lng: 135.7 },
    ],
    "b",
  );
  assert.match(url, /openstreetmap\.org\/export\/embed\.html/);
  assert.match(url, /marker=34.9%2C135.7/);
});

test("estimates daily walking distance and time from walk legs only", () => {
  const day = {
    id: "day-walk",
    items: [
      { id: "a", title: "A", lat: 34.7, lng: 135.5 },
      { id: "t1", kind: "transport", transportMode: "walk" },
      { id: "b", title: "B", lat: 34.705, lng: 135.505 },
      { id: "t2", kind: "transport", transportMode: "metro" },
      { id: "c", title: "C", lat: 34.74, lng: 135.53 },
    ],
  };

  const summary = estimateDayWalkingSummary(day);
  assert.equal(summary.legCount, 1);
  assert.ok(summary.distanceKm > 0);
  assert.ok(summary.minutes > 0);
});

test("normalizes checklist payload entries", () => {
  const normalized = normalizeTripPlan({
    id: "trip-x",
    title: "Trip X",
    days: [{ id: "d1", dayNumber: 1, date: "2026-04-05", title: "Day 1", items: [] }],
    checklist: [{ title: "Passport", checked: true }],
  });

  assert.equal(Array.isArray(normalized.checklist), true);
  assert.equal(normalized.checklist.length, 1);
  assert.equal(normalized.checklist[0].title, "Passport");
  assert.equal(normalized.checklist[0].checked, true);
  assert.ok(normalized.checklist[0].id.startsWith("checklist-"));
});

test("builds route legs with transport details", () => {
  const legs = buildDayRouteLegs({
    id: "day-legs",
    items: [
      { id: "a", title: "A", lat: 34.7, lng: 135.5 },
      {
        id: "t1",
        kind: "transport",
        title: "Metro ride",
        transportMode: "metro",
        startTime: "10:00",
        endTime: "10:18",
        estimatedCost: 240,
      },
      { id: "b", title: "B", lat: 34.71, lng: 135.51 },
      { id: "c", title: "C", lat: 34.711, lng: 135.511 },
    ],
  });

  assert.equal(legs.length, 3);
  assert.equal(legs[0].from.id, "tokyu-stay-sakaisuji-honmachi");
  const metroLeg = legs.find((leg) => leg.transportType === "metro");
  assert.ok(metroLeg);
  assert.equal(metroLeg.durationMin, 18);
  assert.equal(metroLeg.estimatedCost, 240);
  assert.ok(legs.some((leg) => leg.transportType === "walk"));
});

test("does not classify long unknown segment as walk", () => {
  const legs = buildDayRouteLegs({
    id: "day-long",
    items: [
      { id: "kix", title: "KIX", kind: "flight", lat: 34.4347, lng: 135.244 },
      { id: "hotel", title: "Hotel", kind: "hotel", lat: 34.6841, lng: 135.5068 },
    ],
  });

  assert.equal(legs.length, 1);
  assert.equal(legs[0].transportType, "transit");
  assert.ok(legs[0].distanceKm > 2.5);
});

test("day1 route starts from KIX instead of hotel", () => {
  const plan = createInitialTripPlan();
  const day1 = plan.days.find((day) => day.id === "day1");
  assert.ok(day1);

  const legs = buildDayRouteLegs(day1);
  assert.ok(legs.length > 0);
  assert.equal(legs[0].from.id, "d1-flight-in");
  assert.notEqual(legs[0].transportType, "walk");
});

test("trip seed data has readable Chinese title", () => {
  const plan = createInitialTripPlan();
  assert.equal(plan.title, "2026 京都大阪自由行");
  assert.equal(plan.days.length, 8);
});
