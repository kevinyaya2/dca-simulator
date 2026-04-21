export const iconMap = {
  wallet: {
    rects: [{ x: 3, y: 6, width: 18, height: 12, rx: 3 }],
    paths: [{ d: "M15 10h6" }],
    circles: [{ cx: 15.5, cy: 12, r: 1, fill: "currentColor", stroke: "none" }],
  },
  cards: {
    rects: [
      { x: 4, y: 6, width: 10, height: 13, rx: 2 },
      { x: 10, y: 4, width: 10, height: 13, rx: 2 },
    ],
    paths: [{ d: "M14 9l2 2 2-2" }],
  },
  sword: {
    paths: [{ d: "M4 20L20 4" }, { d: "M8 4h4l8 8v4" }, { d: "M6 14l4 4" }],
  },
  jump: {
    circles: [{ cx: 8, cy: 6, r: 2 }],
    paths: [{ d: "M8 8l3 3 4-2" }, { d: "M11 11l-2 6" }, { d: "M11 13l5 5" }],
  },
  bot: {
    rects: [{ x: 5, y: 7, width: 14, height: 11, rx: 3 }],
    paths: [{ d: "M12 4v3" }, { d: "M9 16h6" }],
    circles: [
      { cx: 9, cy: 12, r: 1, fill: "currentColor", stroke: "none" },
      { cx: 15, cy: 12, r: 1, fill: "currentColor", stroke: "none" },
    ],
  },
  book: {
    paths: [
      { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H20v17h-11A3.5 3.5 0 0 0 5.5 22H5z" },
      { d: "M8 6h8" },
      { d: "M8 10h6" },
    ],
  },
  bird: {
    paths: [
      { d: "M4 13c0-3.5 2.5-6 6-6 4 0 7 2.8 7 6.5S14.3 20 10.5 20 4 17.5 4 13z" },
      { d: "M12 10c1.5-1.5 3.2-2.3 5.5-2" },
    ],
    circles: [{ cx: 10, cy: 12, r: 0.9, fill: "currentColor", stroke: "none" }],
  },
  pepper: {
    paths: [
      { d: "M8 7c.3-2 1.7-3 3.6-3 1.6 0 2.7.6 3.4 1.9" },
      { d: "M15 7c2.2 1.5 3 4 1.8 7-1.4 3.6-4.4 5.8-8 5.1-2.8-.5-4.4-3.2-3.7-6.2C6 9.8 8.8 7 12 7" },
    ],
  },
  chart: {
    paths: [{ d: "M4 20V7" }, { d: "M10 20V11" }, { d: "M16 20V4" }, { d: "M22 20H2" }],
  },
  dice: {
    rects: [{ x: 4, y: 4, width: 16, height: 16, rx: 3 }],
    circles: [
      { cx: 9, cy: 9, r: 1, fill: "currentColor", stroke: "none" },
      { cx: 15, cy: 9, r: 1, fill: "currentColor", stroke: "none" },
      { cx: 12, cy: 12, r: 1, fill: "currentColor", stroke: "none" },
      { cx: 9, cy: 15, r: 1, fill: "currentColor", stroke: "none" },
      { cx: 15, cy: 15, r: 1, fill: "currentColor", stroke: "none" },
    ],
  },
  walk: {
    circles: [{ cx: 12, cy: 5, r: 2 }],
    paths: [
      { d: "M12 7.5l2.2 3-2 2.5" },
      { d: "M10 20l1.8-4.5" },
      { d: "M14 20l-1-3.8 3-2.3" },
      { d: "M8.2 12.8l3.4-1.3" },
    ],
  },
  spiral: { paths: [{ d: "M12 4a8 8 0 1 0 8 8c0-2.9-2.2-5.2-5-5.2a4.2 4.2 0 1 0 4.2 4.2" }] },
  bomb: {
    circles: [{ cx: 11, cy: 13, r: 6 }],
    paths: [{ d: "M14 7l2-2" }, { d: "M16.2 3.5c1.2-.8 2.5-.5 3.3.4" }, { d: "M18 5.5l2-1" }],
  },
  road: {
    paths: [
      { d: "M5 20l3-16" },
      { d: "M19 20l-3-16" },
      { d: "M12 6v3" },
      { d: "M12 12v3" },
      { d: "M12 18v2" },
    ],
  },
  target: {
    circles: [
      { cx: 12, cy: 12, r: 8 },
      { cx: 12, cy: 12, r: 4 },
      { cx: 12, cy: 12, r: 1.4, fill: "currentColor", stroke: "none" },
    ],
  },
  pet: {
    circles: [
      { cx: 8, cy: 9, r: 2 },
      { cx: 16, cy: 9, r: 2 },
      { cx: 6, cy: 14, r: 1.8 },
      { cx: 18, cy: 14, r: 1.8 },
    ],
    paths: [{ d: "M9 17c0 2 1.2 3 3 3s3-1 3-3c0-1.6-1.2-3-3-3s-3 1.4-3 3z" }],
  },
  phone: {
    paths: [
      { d: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" },
      { d: "M10 6h4" },
    ],
    circles: [{ cx: 12, cy: 17, r: 1, fill: "currentColor", stroke: "none" }],
  },
  message: { paths: [{ d: "M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }] },
  safari: { circles: [{ cx: 12, cy: 12, r: 8 }], paths: [{ d: "M15.8 8.2l-2 5.8-5.6 2" }, { d: "M8.2 15.8l2-5.8 5.6-2" }] },
  camera: {
    paths: [{ d: "M4 8h4l1.2-2h5.6L16 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" }],
    circles: [{ cx: 12, cy: 14, r: 3.5 }],
  },
  targetLite: {
    circles: [
      { cx: 12, cy: 12, r: 7 },
      { cx: 12, cy: 12, r: 3.3 },
      { cx: 12, cy: 12, r: 1.2, fill: "currentColor", stroke: "none" },
    ],
  },
};
