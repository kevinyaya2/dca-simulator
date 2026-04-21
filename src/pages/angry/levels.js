const M = {
  wood: { hp: 120, color: "#c78e4f", mass: 1, score: 220 },
  stone: { hp: 210, color: "#8a95a8", mass: 1.6, score: 340 },
};

const base = {
  stageWidth: 1280,
  stageHeight: 720,
  groundY: 640,
  sling: { x: 170, y: 536, maxPull: 150 },
};

function b(x, y, w, h, material) {
  return {
    x,
    y,
    w,
    h,
    material,
    hp: M[material].hp,
  };
}

function t(x, y, r = 21) {
  return { x, y, r, hp: 100 };
}

function prop(type, x, y, w, h) {
  return { type, x, y, w, h };
}

export const MATERIALS = M;

export const LEVELS = [
  {
    id: "l1",
    name: "新手庭院",
    birds: ["basic", "split", "dash"],
    blocks: [
      b(900, 592, 42, 92, "wood"),
      b(1020, 592, 42, 92, "wood"),
      b(960, 533, 216, 26, "wood"),
    ],
    targets: [t(960, 622, 18)],
    props: [prop("spring", 960, 631, 76, 14)],
  },
  {
    id: "l2",
    name: "雙塔試煉",
    birds: ["basic", "split", "dash", "bomb"],
    blocks: [
      b(860, 594, 40, 88, "wood"),
      b(940, 594, 40, 88, "stone"),
      b(900, 538, 150, 24, "wood"),
      b(1020, 594, 40, 88, "stone"),
      b(1100, 594, 40, 88, "wood"),
      b(1060, 538, 150, 24, "stone"),
    ],
    targets: [t(900, 623, 17), t(1060, 623, 17)],
    props: [prop("tnt", 980, 622, 30, 30)],
  },
  {
    id: "l3",
    name: "破橋行動",
    birds: ["split", "dash", "bomb", "basic"],
    blocks: [
      b(840, 594, 44, 88, "stone"),
      b(960, 594, 44, 88, "wood"),
      b(1080, 594, 44, 88, "stone"),
      b(900, 538, 176, 24, "wood"),
      b(1020, 538, 176, 24, "wood"),
      b(960, 494, 286, 22, "stone"),
    ],
    targets: [t(900, 623, 16), t(1020, 623, 16), t(960, 472, 16)],
    props: [prop("spring", 900, 631, 74, 14), prop("tnt", 1020, 622, 30, 30)],
  },
  {
    id: "l4",
    name: "石核防線",
    birds: ["dash", "bomb", "split", "dash", "basic"],
    blocks: [
      b(820, 596, 40, 84, "wood"),
      b(900, 596, 40, 84, "stone"),
      b(860, 544, 156, 24, "stone"),
      b(1060, 596, 40, 84, "stone"),
      b(1140, 596, 40, 84, "wood"),
      b(1100, 544, 156, 24, "stone"),
      b(980, 594, 42, 88, "stone"),
      b(980, 538, 238, 24, "wood"),
    ],
    targets: [t(860, 624, 16), t(1100, 624, 16), t(980, 622, 16)],
    props: [prop("tnt", 940, 622, 30, 30), prop("tnt", 1020, 622, 30, 30)],
  },
  {
    id: "l5",
    name: "最終堡壘",
    birds: ["split", "bomb", "dash", "bomb", "basic"],
    blocks: [
      b(780, 598, 40, 80, "stone"),
      b(860, 598, 40, 80, "wood"),
      b(820, 548, 160, 22, "stone"),
      b(940, 598, 40, 80, "stone"),
      b(1020, 598, 40, 80, "wood"),
      b(980, 548, 160, 22, "stone"),
      b(1100, 598, 40, 80, "stone"),
      b(1180, 598, 40, 80, "wood"),
      b(1140, 548, 160, 22, "stone"),
      b(980, 500, 420, 24, "stone"),
      b(980, 458, 280, 20, "wood"),
    ],
    targets: [t(820, 624, 16), t(980, 624, 16), t(1140, 624, 16), t(980, 436, 15)],
    props: [prop("spring", 980, 631, 82, 14), prop("tnt", 900, 622, 30, 30), prop("tnt", 1060, 622, 30, 30)],
  },
  {
    id: "l6",
    name: "折返迴廊",
    birds: ["boomerang", "basic", "dash", "split"],
    blocks: [
      b(840, 596, 44, 84, "stone"),
      b(960, 596, 44, 84, "wood"),
      b(1080, 596, 44, 84, "stone"),
      b(900, 548, 178, 24, "wood"),
      b(1020, 548, 178, 24, "wood"),
      b(960, 506, 300, 22, "stone"),
    ],
    targets: [t(900, 624, 16), t(1020, 624, 16), t(960, 484, 16)],
    props: [prop("spring", 840, 631, 74, 14)],
  },
  {
    id: "l7",
    name: "貫穿工坊",
    birds: ["pierce", "pierce", "dash", "bomb", "basic"],
    blocks: [
      b(860, 596, 42, 84, "wood"),
      b(920, 596, 42, 84, "wood"),
      b(980, 596, 42, 84, "stone"),
      b(1040, 596, 42, 84, "wood"),
      b(1100, 596, 42, 84, "wood"),
      b(980, 548, 320, 24, "stone"),
      b(980, 506, 220, 22, "wood"),
    ],
    targets: [t(890, 624, 16), t(1070, 624, 16), t(980, 484, 16)],
    props: [prop("tnt", 980, 622, 30, 30)],
  },
  {
    id: "l8",
    name: "極寒裂谷",
    birds: ["freeze", "freeze", "dash", "bomb", "basic"],
    blocks: [
      b(820, 600, 44, 76, "stone"),
      b(900, 600, 44, 76, "stone"),
      b(860, 554, 160, 20, "wood"),
      b(1060, 600, 44, 76, "stone"),
      b(1140, 600, 44, 76, "stone"),
      b(1100, 554, 160, 20, "wood"),
      b(980, 598, 46, 80, "stone"),
      b(980, 548, 250, 22, "stone"),
      b(980, 510, 160, 20, "wood"),
    ],
    targets: [t(860, 625, 15), t(1100, 625, 15), t(980, 490, 15)],
    props: [prop("spring", 980, 631, 82, 14), prop("tnt", 980, 622, 30, 30)],
  },
  {
    id: "l9",
    name: "磁爆迷城",
    birds: ["magnet", "magnet", "bomb", "dash", "split"],
    blocks: [
      b(800, 600, 42, 76, "wood"),
      b(880, 600, 42, 76, "stone"),
      b(840, 556, 156, 22, "wood"),
      b(1040, 600, 42, 76, "stone"),
      b(1120, 600, 42, 76, "wood"),
      b(1080, 556, 156, 22, "wood"),
      b(960, 600, 42, 76, "stone"),
      b(960, 556, 220, 22, "stone"),
      b(960, 518, 132, 20, "wood"),
    ],
    targets: [t(840, 625, 15), t(1080, 625, 15), t(960, 496, 15)],
    props: [prop("tnt", 920, 622, 30, 30), prop("tnt", 1000, 622, 30, 30)],
  },
  {
    id: "l10",
    name: "桃蛋天穹",
    birds: ["egg", "guide", "hammer", "pierce", "boomerang", "bomb"],
    blocks: [
      b(760, 602, 40, 72, "stone"),
      b(840, 602, 40, 72, "wood"),
      b(800, 560, 152, 20, "stone"),
      b(920, 602, 40, 72, "stone"),
      b(1000, 602, 40, 72, "wood"),
      b(960, 560, 152, 20, "stone"),
      b(1080, 602, 40, 72, "stone"),
      b(1160, 602, 40, 72, "wood"),
      b(1120, 560, 152, 20, "stone"),
      b(960, 510, 460, 22, "stone"),
      b(960, 470, 300, 20, "wood"),
      b(960, 438, 180, 18, "stone"),
    ],
    targets: [t(800, 626, 15), t(960, 626, 15), t(1120, 626, 15), t(960, 449, 14)],
    props: [prop("spring", 960, 631, 84, 14), prop("tnt", 880, 622, 30, 30), prop("tnt", 1040, 622, 30, 30)],
  },
];

export function getLevelConfig(index) {
  const level = LEVELS[index % LEVELS.length];
  return { ...base, ...level };
}
