import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PetBuddy.css";

const STORAGE_KEY = "dca.petBuddy.v1";
const MAX_STAT = 100;

const TICK_MS = 500;
const BUBBLE_TICKS = 16;
const FADE_TICKS = 4;
const PET_MS = 2000;
const IDLE_INTERVAL = 30000;
const IDLE_SEQ = [0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 2, 0, 0, 0];

const RARITIES = [
  { id: "common", label: "普通", weight: 35, color: "#9ca3af", bonus: 0 },
  { id: "uncommon", label: "稀有", weight: 25, color: "#22c55e", bonus: 4 },
  { id: "rare", label: "超稀有", weight: 20, color: "#3b82f6", bonus: 8 },
  { id: "epic", label: "史詩", weight: 15, color: "#a855f7", bonus: 14 },
  { id: "legendary", label: "傳說", weight: 5, color: "#eab308", bonus: 20 },
];

const RARITY_RANK = {
  common: 0,
  uncommon: 1,
  rare: 2,
  epic: 3,
  legendary: 4,
};

const EYE_STYLES = [
  { symbol: ".", label: "冷靜眼", weight: 1, minRarity: "common" },
  { symbol: "o", label: "圓眼", weight: 1, minRarity: "common" },
  { symbol: "O", label: "大眼", weight: 1, minRarity: "common" },
  { symbol: "-", label: "瞇眼", weight: 1, minRarity: "common" },
  { symbol: "^", label: "笑眼", weight: 1, minRarity: "common" },
  { symbol: "x", label: "厭世眼", weight: 1, minRarity: "common" },
  { symbol: "@", label: "旋渦眼", weight: 1, minRarity: "common" },
  { symbol: "*", label: "星眼", weight: 1, minRarity: "common" },
];

const HATS = [
  { id: "none", label: "無", weight: 1, minRarity: "common" },
  { id: "beanie", label: "毛帽", weight: 1, minRarity: "common" },
  { id: "tinyduck", label: "小鴨帽", weight: 1, minRarity: "common" },
  { id: "propeller", label: "螺旋帽", weight: 1, minRarity: "common" },
  { id: "tophat", label: "高帽", weight: 1, minRarity: "common" },
  { id: "wizard", label: "巫師帽", weight: 1, minRarity: "common" },
  { id: "halo", label: "光環", weight: 1, minRarity: "common" },
  { id: "crown", label: "王冠", weight: 1, minRarity: "common" },
];

const SPECIES = [
  { id: "duck", name: "小鴨" },
  { id: "goose", name: "鵝鵝" },
  { id: "blob", name: "史萊姆" },
  { id: "cat", name: "臭臉貓" },
  { id: "dragon", name: "小龍" },
  { id: "octopus", name: "章魚" },
  { id: "owl", name: "貓頭鷹" },
  { id: "penguin", name: "企鵝" },
  { id: "turtle", name: "烏龜" },
  { id: "snail", name: "蝸牛" },
  { id: "ghost", name: "幽靈" },
  { id: "axolotl", name: "六角恐龍" },
  { id: "capybara", name: "水豚" },
  { id: "cactus", name: "仙人掌" },
  { id: "robot", name: "機器人" },
  { id: "rabbit", name: "兔兔" },
  { id: "mushroom", name: "香菇" },
  { id: "chonk", name: "胖胖" },
];

const HAT_LINES = {
  none: "",
  crown: "   \\^^^/    ",
  tophat: "   [___]    ",
  propeller: "    -+-     ",
  halo: "   (   )    ",
  wizard: "    /^\\     ",
  beanie: "   (___)    ",
  tinyduck: "    ,>      ",
};

const BODIES = {
  duck: [
    ["            ", "    __      ", "  <({E} )___  ", "   (  ._>   ", "    `--~    "],
    ["            ", "    __      ", "  <({E} )___  ", "   (  ._>   ", "    `--~~   "],
    ["            ", "    __      ", "  <({E} )___  ", "   (  .__>  ", "    `--~    "],
  ],
  goose: [
    ["            ", "     ({E}>    ", "     ||     ", "   _(__)_   ", "    ^^^^    "],
    ["            ", "    ({E}>     ", "     ||     ", "   _(__)_   ", "    ^^^^    "],
    ["            ", "     ({E}>>   ", "     ||     ", "   _(__)_   ", "    ^^^^    "],
  ],
  blob: [
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (      )  ", "   `----~   "],
    ["            ", "  .------.  ", " (  {E}  {E}  ) ", " (        ) ", "  `------~  "],
    ["            ", "    .--.    ", "   ({E}  {E})   ", "   (    )   ", "    `--~    "],
  ],
  cat: [
    ["            ", "   /\\_/\\    ", "  ( {E}   {E})  ", "  (  ?  )   ", "  (\")_(\")   "],
    ["            ", "   /\\_/\\    ", "  ( {E}   {E})  ", "  (  ?  )   ", "  (\")_(\")~  "],
    ["            ", "   /\\-/\\    ", "  ( {E}   {E})  ", "  (  ?  )   ", "  (\")_(\")   "],
  ],
  dragon: [
    ["            ", "  /^\\  /^\\  ", " <  {E}  {E}  > ", " (   ~~   ) ", "  `-vvvv-~  "],
    ["            ", "  /^\\  /^\\  ", " <  {E}  {E}  > ", " (        ) ", "  `-vvvv-~  "],
    ["   ~    ~   ", "  /^\\  /^\\  ", " <  {E}  {E}  > ", " (   ~~   ) ", "  `-vvvv-~  "],
  ],
  octopus: [
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (______)  ", "  /\\/\\/\\/\\  "],
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (______)  ", "  \\/\\/\\/\\/  "],
    ["     o      ", "   .----.   ", "  ( {E}  {E} )  ", "  (______)  ", "  /\\/\\/\\/\\  "],
  ],
  owl: [
    ["            ", "   /\\  /\\   ", "  (({E})({E}))  ", "  (  ><  )  ", "   `----~   "],
    ["            ", "   /\\  /\\   ", "  (({E})({E}))  ", "  (  ><  )  ", "   .----.   "],
    ["            ", "   /\\  /\\   ", "  (({E})(-))  ", "  (  ><  )  ", "   `----~   "],
  ],
  penguin: [
    ["            ", "  .---.     ", "  ({E}>{E})     ", " /(   )\\    ", "  `---~     "],
    ["            ", "  .---.     ", "  ({E}>{E})     ", " |(   )|    ", "  `---~     "],
    ["  .---.     ", "  ({E}>{E})     ", " /(   )\\    ", "  `---~     ", "   ~ ~      "],
  ],
  turtle: [
    ["            ", "   _,--._   ", "  ( {E}  {E} )  ", " /[______]\\ ", "  ``    ``  "],
    ["            ", "   _,--._   ", "  ( {E}  {E} )  ", " /[______]\\ ", "   ``  ``   "],
    ["            ", "   _,--._   ", "  ( {E}  {E} )  ", " /[======]\\ ", "  ``    ``  "],
  ],
  snail: [
    ["            ", " {E}    .--.  ", "  \\  ( @ )  ", "   \\_`--~   ", "  ~~~~~~~   "],
    ["            ", "  {E}   .--.  ", "  |  ( @ )  ", "   \\_`--~   ", "  ~~~~~~~   "],
    ["            ", " {E}    .--.  ", "  \\  ( @  ) ", "   \\_`--~   ", "   ~~~~~~   "],
  ],
  ghost: [
    ["            ", "   .----.   ", "  / {E}  {E} \\  ", "  |      |  ", "  ~`~``~`~  "],
    ["            ", "   .----.   ", "  / {E}  {E} \\  ", "  |      |  ", "  `~`~~`~`  "],
    ["    ~  ~    ", "   .----.   ", "  / {E}  {E} \\  ", "  |      |  ", "  ~~`~~`~~  "],
  ],
  axolotl: [
    ["            ", "}~(______)~{", "}~({E} .. {E})~{", "  ( .--. )  ", "  (_/  \\_)  "],
    ["            ", "~}(______){~", "~}({E} .. {E}){~", "  ( .--. )  ", "  (_/  \\_)  "],
    ["            ", "}~(______)~{", "}~({E} .. {E})~{", "  (  --  )  ", "  ~_/  \\_~  "],
  ],
  capybara: [
    ["            ", "  n______n  ", " ( {E}    {E} ) ", " (   oo   ) ", "  `------~  "],
    ["            ", "  n______n  ", " ( {E}    {E} ) ", " (   Oo   ) ", "  `------~  "],
    ["    ~  ~    ", "  u______n  ", " ( {E}    {E} ) ", " (   oo   ) ", "  `------~  "],
  ],
  cactus: [
    ["            ", " n  ____  n ", " | |{E}  {E}| | ", " |_|    |_| ", "   |    |   "],
    ["            ", "    ____    ", " n |{E}  {E}| n ", " |_|    |_| ", "   |    |   "],
    [" n        n ", " |  ____  | ", " | |{E}  {E}| | ", " |_|    |_| ", "   |    |   "],
  ],
  robot: [
    ["            ", "   .[||].   ", "  [ {E}  {E} ]  ", "  [ ==== ]  ", "  `------~  "],
    ["            ", "   .[||].   ", "  [ {E}  {E} ]  ", "  [ -==- ]  ", "  `------~  "],
    ["     *      ", "   .[||].   ", "  [ {E}  {E} ]  ", "  [ ==== ]  ", "  `------~  "],
  ],
  rabbit: [
    ["            ", "   (\\__/)   ", "  ( {E}  {E} )  ", " =(  ..  )= ", "  (\")__(\")  "],
    ["            ", "   (|__/)   ", "  ( {E}  {E} )  ", " =(  ..  )= ", "  (\")__(\")  "],
    ["            ", "   (\\__/)   ", "  ( {E}  {E} )  ", " =( .  . )= ", "  (\")__(\")  "],
  ],
  mushroom: [
    ["            ", " .-o-OO-o-. ", "(__________)", "   |{E}  {E}|   ", "   |____|   "],
    ["            ", " .-O-oo-O-. ", "(__________)", "   |{E}  {E}|   ", "   |____|   "],
    ["   . o  .   ", " .-o-OO-o-. ", "(__________)", "   |{E}  {E}|   ", "   |____|   "],
  ],
  chonk: [
    ["            ", "  /\\    /\\  ", " ( {E}    {E} ) ", " (   ..   ) ", "  `------~  "],
    ["            ", "  /\\    /|  ", " ( {E}    {E} ) ", " (   ..   ) ", "  `------~  "],
    ["            ", "  /\\    /\\  ", " ( {E}    {E} ) ", " (   ..   ) ", "  `------~~ "],
  ],
};

const ACTION_LINES = {
  feed: [
    "這口飯很有靈魂，我決定晚點再修錯誤。",
    "今天飼主有良心，餵得很到位。",
    "再來一碗，我可以幫你背鍋。",
    "補給完成，現在我可以有禮貌地嫌棄你。",
    "我吃飽了，你的進度條也請跟上。",
    "這餐很棒，我願意少酸你三十秒。",
    "食物品質過關，今天不鬧罷工。",
    "吃完這口，我又有力氣吐槽世界。",
  ],
  play: [
    "陪玩完成，現在輪到你陪我加班。",
    "笑死，我玩得比你上線還順。",
    "有運動有差，吐槽力+10。",
    "今天活動量達標，你還在原地轉圈。",
    "我玩嗨了，你的需求還在排隊。",
    "這局我贏了，獎品是你繼續努力。",
    "玩耍結束，快樂值上升，耐心值看你表現。",
    "有陪玩有保庇，至少今天不會臭臉。",
  ],
  sleep: [
    "午睡結束，精神跟你咖啡因一樣滿。",
    "我睡好了，你的待辦清單睡了嗎？",
    "夢到你沒踩雷，醒來後還是踩了。",
    "關機重開完成，腦袋快取已清空。",
    "補眠成功，現在判斷力比你凌晨時段高。",
    "睡醒第一件事：檢查你有沒有亂改設定。",
    "這覺很深，深到我差點忘記你會拖延。",
    "能量回來了，可以繼續看你跟 bug 拉扯。",
  ],
  bath: [
    "洗乾淨了，終於不像凌晨三點的提交紀錄。",
    "泡澡完我香香的，你合併請求還是臭臭的。",
    "清潔度回來了，尊嚴也回來一點。",
    "汙漬掰掰，心情也順便消毒。",
    "現在我清爽到可以拍產品宣傳照。",
    "洗完澡的我閃閃發亮，你也該整理桌面了。",
    "泡泡沖掉了，壓力還在你那邊。",
    "清潔完成，今天先不嫌你太亂。",
  ],
  reroll: [
    "重抽成功，前世記憶已格式化。",
    "換皮不換魂，還是很會嘴你。",
    "新身分上線，請重新膜拜。",
    "宇宙重算完畢，這次看起來更欠養。",
    "抽卡結果出爐，命運說你繼續養我。",
    "重新開局，願你這次別把我養歪。",
    "角色刷新完成，嘴砲模組正常運作。",
    "抽完了，別問機率，問就是玄學。",
  ],
  restore: [
    "我回到初始型態，初心是繼續吐槽你。",
    "還原完成，版本回退但嘴砲升級。",
    "重返起點，這次別再把我養壞了。",
    "系統復原完畢，記得先做備份再亂按。",
    "初始狀態已套用，心態請同步重置。",
    "回到原廠設定，態度依然很有個性。",
    "復原成功，現在從頭看你發揮。",
    "版本倒退，情緒穩定，吐槽精準。",
  ],
};

const IDLE_LINES = {
  normal: [
    "今天有在寫程式，還是在跟錯誤相親？",
    "我看你打字速度，像在跟鍵盤談判。",
    "提醒一下：拖延不會自己部署。",
    "你很努力了，成果正在路上塞車。",
    "先別焦慮，先把最小可行版本做完。",
    "我觀察你五分鐘了，你都在改同一行。",
    "你不是沒能力，你只是分頁開太多。",
    "先喝口水，再決定要不要重構整包。",
    "進度慢沒關係，別把方向搞錯就行。",
    "我這邊一切正常，你那邊呢？",
  ],
  hungry: [
    "我肚子在叫，音量快蓋過你風扇。",
    "再不餵我，我就去啃你的需求文件。",
    "飢餓值爆表，我開始懷疑人生。",
    "餓到我看滑鼠都像雞腿。",
    "你再拖，我就把你的待辦當菜單。",
    "肚子空到能聽見回音，快處理。",
    "我不是情勒，我是生理需求。",
    "飢餓中的我，脾氣跟延遲一樣高。",
  ],
  sleepy: [
    "我眼皮快關機，先別開新需求。",
    "能量快沒了，讓我睡，不然我亂講。",
    "現在的我，跟你凌晨的判斷力差不多。",
    "我需要充電，不然只能輸出幹話。",
    "再撐下去我會把註解當小說看。",
    "睡意上來了，腦袋開始自動格式化。",
    "先小睡一下，醒來再當你的軍師。",
    "我現在像低電量模式，性能只剩一半。",
  ],
  dirty: [
    "我有點髒，像你桌面那個下載資料夾。",
    "清潔度太低，我已經社交性死亡。",
    "拜託洗澡，我快被自己臭哭。",
    "這個狀態不叫野性，叫邋遢。",
    "我聞起來像連續三天的熬夜。",
    "再不洗我就要申請遠端工作。",
    "灰塵都認得我了，快救命。",
    "我需要泡泡，你需要收納。",
  ],
  happy: [
    "今天心情很好，允許你再改一次需求。",
    "我很開心，但你別因此放飛自我。",
    "看在你有照顧我的份上，少吐槽你一句。",
    "狀態不錯，今天可以原諒你的小失誤。",
    "開心到想唱歌，但我怕你更焦慮。",
    "今天氛圍很好，適合把坑補一補。",
    "快樂值在線，團隊士氣+1。",
    "我現在超配合，趁機把事情做完。",
  ],
};

function clamp(value, min = 0, max = MAX_STAT) {
  return Math.min(max, Math.max(min, value));
}

function hashString(seedText) {
  let h = 1779033703 ^ seedText.length;
  for (let i = 0; i < seedText.length; i += 1) {
    h = Math.imul(h ^ seedText.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0) || 1;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickWeighted(rng, list, weightKey = "weight") {
  const total = list.reduce((sum, item) => sum + (item[weightKey] || 0), 0);
  let ticket = rng() * total;
  for (const item of list) {
    ticket -= item[weightKey] || 0;
    if (ticket <= 0) return item;
  }
  return list[list.length - 1];
}

function pickOne(rng, list) {
  return list[Math.floor(rng() * list.length)];
}

function rarityGte(left, right) {
  return (RARITY_RANK[left] ?? 0) >= (RARITY_RANK[right] ?? 0);
}

function statFromRng(rng, bonus = 0) {
  return clamp(Math.floor(35 + rng() * 60 + bonus));
}

function generatePet(seedText) {
  const rng = mulberry32(hashString(seedText + "friend-2026-401"));
  const rarity = pickWeighted(rng, RARITIES);
  const species = pickOne(rng, SPECIES);
  const availableEyes = EYE_STYLES.filter((eye) => rarityGte(rarity.id, eye.minRarity));
  const availableHats = HATS.filter((hatItem) => rarityGte(rarity.id, hatItem.minRarity));
  const eyes = pickWeighted(rng, availableEyes, "weight").symbol;
  const hat = pickWeighted(rng, availableHats, "weight");
  const shiny = rng() < 0.01;

  return {
    rarity,
    species,
    eyes,
    hat,
    shiny,
    stats: {
      age: clamp(Math.floor(3 + rng() * 98)),
      patience: statFromRng(rng, rarity.bonus),
      chaos: statFromRng(rng, rarity.bonus),
      wisdom: statFromRng(rng, rarity.bonus),
    },
  };
}

function renderSprite(pet, frame = 0, eyeSymbol = pet.eyes) {
  const frames = BODIES[pet.species.id] || BODIES.blob;
  const body = frames[frame % frames.length].map((line) => line.replaceAll("{E}", eyeSymbol));
  const lines = [...body];

  if (pet.hat.id !== "none" && !lines[0].trim()) {
    lines[0] = HAT_LINES[pet.hat.id] || "";
  }

  if (!lines[0].trim() && frames.every((f) => !f[0].trim())) {
    lines.shift();
  }

  return lines;
}

function spriteFrameCount(pet) {
  const frames = BODIES[pet.species.id] || BODIES.blob;
  return frames.length;
}

function createStatusFromPet(pet) {
  const avg = (pet.stats.age + pet.stats.patience + pet.stats.chaos + pet.stats.wisdom) / 4;
  const rarityBoost = pet.rarity.bonus;
  const chaosPenalty = pet.stats.chaos * 0.08;

  const hunger = clamp(28 + rarityBoost * 0.4 + pet.stats.chaos * 0.12);
  const energy = clamp(50 + pet.stats.wisdom * 0.3 + rarityBoost * 0.6 - chaosPenalty);
  const happiness = clamp(38 + pet.stats.patience * 0.25 + pet.stats.age * 0.2 - pet.stats.chaos * 0.08);
  const cleanliness = clamp(42 + avg * 0.28 - pet.stats.chaos * 0.1 + rarityBoost * 0.35);

  return {
    hunger: Math.round(hunger),
    energy: Math.round(energy),
    happiness: Math.round(happiness),
    cleanliness: Math.round(cleanliness),
  };
}

function applyOfflineProgress(status, elapsedMinutes) {
  if (!elapsedMinutes || elapsedMinutes <= 0) return status;

  const next = { ...status };
  next.hunger = clamp(next.hunger + elapsedMinutes * 0.9);
  next.energy = clamp(next.energy - elapsedMinutes * 0.55);
  next.cleanliness = clamp(next.cleanliness - elapsedMinutes * 0.25);
  next.happiness = clamp(next.happiness - elapsedMinutes * (next.hunger > 70 ? 0.55 : 0.3));
  return next;
}

function pickActionLine(action) {
  const list = ACTION_LINES[action] || ACTION_LINES.feed;
  return list[Math.floor(Math.random() * list.length)];
}

function pickIdleLine(status) {
  if (status.hunger >= 78) return IDLE_LINES.hungry[Math.floor(Math.random() * IDLE_LINES.hungry.length)];
  if (status.energy <= 28) return IDLE_LINES.sleepy[Math.floor(Math.random() * IDLE_LINES.sleepy.length)];
  if (status.cleanliness <= 35) return IDLE_LINES.dirty[Math.floor(Math.random() * IDLE_LINES.dirty.length)];
  if (status.happiness >= 80) return IDLE_LINES.happy[Math.floor(Math.random() * IDLE_LINES.happy.length)];
  return IDLE_LINES.normal[Math.floor(Math.random() * IDLE_LINES.normal.length)];
}

function readSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function normalizeSavedData(saved) {
  if (!saved || typeof saved !== "object") return null;
  if (typeof saved.userId !== "string" || typeof saved.rollNonce !== "number") return null;

  const expectedPet = generatePet(`${saved.userId}:${saved.rollNonce}`);
  const pet = saved.pet || {};

  const rarity = RARITIES.find((r) => r.id === pet?.rarity?.id) || expectedPet.rarity;
  const species = SPECIES.find((s) => s.id === pet?.species?.id) || expectedPet.species;
  const hat = HATS.find((h) => h.id === pet?.hat?.id) || expectedPet.hat;
  const validEyes = EYE_STYLES.map((eye) => eye.symbol);
  const eyes = validEyes.includes(pet?.eyes) ? pet.eyes : expectedPet.eyes;
  const shiny = typeof pet?.shiny === "boolean" ? pet.shiny : expectedPet.shiny;

  const prevStatus = saved.status || {};
  return {
    userId: saved.userId,
    rollNonce: saved.rollNonce,
    pet: { rarity, species, hat, eyes, shiny, stats: expectedPet.stats },
    shinyMode: Boolean(saved.shinyMode),
    status: {
      hunger: clamp(Number(prevStatus.hunger ?? 30)),
      energy: clamp(Number(prevStatus.energy ?? 78)),
      happiness: clamp(Number(prevStatus.happiness ?? 72)),
      cleanliness: clamp(Number(prevStatus.cleanliness ?? 76)),
    },
    lastSeenAt: Number(saved.lastSeenAt) || Date.now(),
  };
}

function createNewSave() {
  const userId = `guest-${Math.random().toString(36).slice(2, 10)}`;
  const rollNonce = 0;
  const pet = generatePet(`${userId}:${rollNonce}`);
  return {
    userId,
    rollNonce,
    pet,
    shinyMode: false,
    status: createStatusFromPet(pet),
    lastSeenAt: Date.now(),
  };
}

function statEntries(pet) {
  return [
    ["年紀", pet.stats.age],
    ["耐心值", pet.stats.patience],
    ["混亂值", pet.stats.chaos],
    ["智慧值", pet.stats.wisdom],
  ];
}

function computeMood(status) {
  const causes = [
    { key: "hunger", score: Math.max(0, status.hunger - 50), reason: "有點餓" },
    { key: "energy", score: Math.max(0, 45 - status.energy), reason: "能量不足" },
    { key: "cleanliness", score: Math.max(0, 42 - status.cleanliness), reason: "需要洗澡" },
    { key: "happiness", score: Math.max(0, 55 - status.happiness), reason: "需要陪玩" },
  ];

  const positiveBoost =
    Math.max(0, status.happiness - 60) * 0.75 +
    Math.max(0, status.energy - 55) * 0.4 +
    Math.max(0, status.cleanliness - 55) * 0.35;
  const negativeLoad = causes.reduce((sum, item) => sum + item.score, 0);
  const moodScore = Math.round(55 + positiveBoost - negativeLoad * 1.1);

  let label = "正常發揮";
  if (moodScore < 20) label = "心態爆炸";
  else if (moodScore < 38) label = "悶悶不樂";
  else if (moodScore < 58) label = "正常發揮";
  else if (moodScore < 78) label = "心情不錯";
  else label = "心情超好";

  const topCause = [...causes].sort((a, b) => b.score - a.score)[0];
  const reason = topCause.score > 0 ? topCause.reason : "完美狀態";

  return { label, reason, moodScore };
}

export default function PetBuddy() {
  const navigate = useNavigate();
  const petTimerRef = useRef();
  const actionFxTimerRef = useRef();
  const comboTimerRef = useRef();
  const comboRef = useRef({ count: 0, lastAt: 0 });
  const audioCtxRef = useRef(null);

  const [data, setData] = useState(() => {
    const saved = normalizeSavedData(readSaved());
    if (saved) {
      const elapsedMinutes = Math.floor((Date.now() - (saved.lastSeenAt || Date.now())) / 60000);
      return { ...saved, status: applyOfflineProgress(saved.status, elapsedMinutes) };
    }
    return createNewSave();
  });

  const [tick, setTick] = useState(0);
  const [speech, setSpeech] = useState("歡迎回來，今天也準備好被我吐槽了嗎？");
  const [bubbleAge, setBubbleAge] = useState(BUBBLE_TICKS);
  const [petting, setPetting] = useState(false);
  const [actionFx, setActionFx] = useState("");
  const [isEntering, setIsEntering] = useState(false);
  const [comboCount, setComboCount] = useState(0);
  const effectiveShiny = data.shinyMode || data.pet.shiny;
  const petColor = data.pet.rarity.color;

  const speaking = bubbleAge < BUBBLE_TICKS;
  const fading = speaking && bubbleAge >= BUBBLE_TICKS - FADE_TICKS;

  useEffect(() => {
    const timer = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (speech) setBubbleAge((age) => age + 1);
  }, [tick, speech]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (bubbleAge < BUBBLE_TICKS) return;
      setSpeech(pickIdleLine(data.status));
      setBubbleAge(0);
    }, IDLE_INTERVAL);
    return () => window.clearInterval(id);
  }, [bubbleAge, data.status]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, lastSeenAt: Date.now() }));
  }, [data]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setData((prev) => {
        const status = { ...prev.status };
        status.hunger = clamp(status.hunger + 1.1);
        status.energy = clamp(status.energy - 0.8);
        status.cleanliness = clamp(status.cleanliness - 0.45);
        status.happiness = clamp(status.happiness + (status.hunger > 72 ? -1.2 : 0.2));
        return { ...prev, status };
      });
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(actionFxTimerRef.current);
      window.clearTimeout(comboTimerRef.current);
    },
    [],
  );

  const rarityStyle = useMemo(() => ({ borderColor: data.pet.rarity.color, color: data.pet.rarity.color }), [data.pet.rarity.color]);
  const moodEye = useMemo(() => {
    if (data.status.energy <= 18) return "_";
    if (data.status.happiness >= 86) return "^";
    if (data.status.happiness <= 26) return "x";
    return data.pet.eyes;
  }, [data.pet.eyes, data.status.energy, data.status.happiness]);
  const moodInfo = useMemo(() => computeMood(data.status), [data.status]);
  const sleepMode = data.status.energy <= 18 && !petting && !speaking && !actionFx;

  const spriteLines = useMemo(() => {
    const frameCount = spriteFrameCount(data.pet);
    let frame = 0;
    let blink = false;

    if (sleepMode) {
      frame = 0;
      blink = false;
    } else if (speaking || petting) {
      frame = tick % frameCount;
    } else {
      const step = IDLE_SEQ[tick % IDLE_SEQ.length];
      if (step === -1) {
        frame = 0;
        blink = true;
      } else {
        frame = step % frameCount;
      }
    }

    const lines = renderSprite(data.pet, frame, moodEye);
    if (blink) {
      return lines.map((line) => line.replaceAll(moodEye, "-"));
    }

    return lines;
  }, [data.pet, tick, speaking, petting, moodEye, sleepMode]);

  const displayLines = useMemo(() => {
    const hearts = petting ? ["  ♥   ♥  ", " ♥  ♥  ♥ "][tick % 2] : null;
    const sleepLine = sleepMode ? ["   zZ   ", "  zZz  "][tick % 2] : null;
    const base = hearts ? [hearts, ...spriteLines] : spriteLines;
    const withSleep = sleepLine ? [sleepLine, ...base] : base;
    return withSleep.join("\n");
  }, [petting, tick, spriteLines, sleepMode]);

  const barData = useMemo(
    () => [
      ["飽食", data.status.hunger, true],
      ["能量", data.status.energy, false],
      ["快樂", data.status.happiness, false],
      ["整潔", data.status.cleanliness, false],
    ],
    [data.status],
  );

  const playSfx = (kind) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      const sequenceMap = {
        tap: [
          { f: 740, d: 0.04, v: 0.05, t: "triangle", at: 0 },
          { f: 960, d: 0.03, v: 0.035, t: "sine", at: 0.03 },
        ],
        feed: [
          { f: 392, d: 0.07, v: 0.06, t: "triangle", at: 0 },
          { f: 494, d: 0.06, v: 0.05, t: "triangle", at: 0.08 },
          { f: 587, d: 0.08, v: 0.05, t: "sine", at: 0.15 },
        ],
        play: [
          { f: 659, d: 0.05, v: 0.06, t: "square", at: 0 },
          { f: 784, d: 0.05, v: 0.055, t: "square", at: 0.07 },
          { f: 988, d: 0.06, v: 0.05, t: "triangle", at: 0.14 },
        ],
        sleep: [
          { f: 392, d: 0.1, v: 0.055, t: "sine", at: 0 },
          { f: 330, d: 0.12, v: 0.05, t: "sine", at: 0.11 },
        ],
        bath: [
          { f: 880, d: 0.04, v: 0.045, t: "sine", at: 0 },
          { f: 1046, d: 0.04, v: 0.04, t: "sine", at: 0.06 },
          { f: 1174, d: 0.04, v: 0.035, t: "sine", at: 0.11 },
        ],
        reroll: [
          { f: 440, d: 0.05, v: 0.055, t: "square", at: 0 },
          { f: 554, d: 0.05, v: 0.05, t: "square", at: 0.06 },
          { f: 659, d: 0.07, v: 0.05, t: "triangle", at: 0.12 },
        ],
        shiny: [
          { f: 988, d: 0.06, v: 0.06, t: "triangle", at: 0 },
          { f: 1318, d: 0.08, v: 0.055, t: "sine", at: 0.08 },
          { f: 1567, d: 0.1, v: 0.05, t: "sine", at: 0.18 },
        ],
        switch: [
          { f: 620, d: 0.035, v: 0.04, t: "triangle", at: 0 },
          { f: 740, d: 0.035, v: 0.035, t: "triangle", at: 0.04 },
        ],
      };

      const sequence = sequenceMap[kind];
      if (!sequence) return;

      const start = ctx.currentTime + 0.005;
      const masterVolume = 0.44;
      sequence.forEach(({ f, d, v, t, at }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const volume = Math.min(0.46, v * masterVolume);
        osc.type = t;
        osc.frequency.setValueAtTime(f, start + at);
        gain.gain.setValueAtTime(0.0001, start + at);
        gain.gain.exponentialRampToValueAtTime(volume, start + at + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + at + d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start + at);
        osc.stop(start + at + d + 0.02);
      });
    } catch {
      // Ignore audio failures (unsupported browser or autoplay restrictions).
    }
  };

  const showBubble = (text) => {
    setSpeech(text);
    setBubbleAge(0);
  };

  const triggerActionFx = (fxName) => {
    setActionFx(fxName);
    window.clearTimeout(actionFxTimerRef.current);
    const duration = fxName === "sleep" ? 1450 : fxName === "play" ? 1200 : 1050;
    actionFxTimerRef.current = window.setTimeout(() => setActionFx(""), duration);
  };

  const registerCombo = () => {
    const now = Date.now();
    const withinCombo = now - comboRef.current.lastAt <= 3500;
    const nextCount = withinCombo ? comboRef.current.count + 1 : 1;
    comboRef.current = { count: nextCount, lastAt: now };
    setComboCount(nextCount);
    window.clearTimeout(comboTimerRef.current);
    comboTimerRef.current = window.setTimeout(() => setComboCount(0), 1700);
  };

  const updateStatus = (updater, line, fxName = "") => {
    setData((prev) => ({ ...prev, status: updater(prev.status) }));
    showBubble(line);
    if (fxName) triggerActionFx(fxName);
    if (fxName) playSfx(fxName);
    registerCombo();
  };

  const handlePet = () => {
    setPetting(true);
    showBubble("♥");
    playSfx("tap");
    window.clearTimeout(petTimerRef.current);
    petTimerRef.current = window.setTimeout(() => setPetting(false), PET_MS);
  };

  const handleFeed = () => updateStatus((s) => ({ hunger: clamp(s.hunger - 26), energy: clamp(s.energy + 4), happiness: clamp(s.happiness + 6), cleanliness: clamp(s.cleanliness - 3) }), pickActionLine("feed"), "feed");
  const handlePlay = () => updateStatus((s) => ({ hunger: clamp(s.hunger + 8), energy: clamp(s.energy - 13), happiness: clamp(s.happiness + 16), cleanliness: clamp(s.cleanliness - 7) }), pickActionLine("play"), "play");
  const handleSleep = () => updateStatus((s) => ({ hunger: clamp(s.hunger + 7), energy: clamp(s.energy + 25), happiness: clamp(s.happiness + 4), cleanliness: clamp(s.cleanliness - 2) }), pickActionLine("sleep"), "sleep");
  const handleBath = () => updateStatus((s) => ({ hunger: clamp(s.hunger + 2), energy: clamp(s.energy - 2), happiness: clamp(s.happiness - 1), cleanliness: clamp(s.cleanliness + 30) }), pickActionLine("bath"), "bath");

  const switchSpecies = () => {
    setData((prev) => {
      const candidates = SPECIES.filter((item) => item.id !== prev.pet.species.id);
      if (!candidates.length) return prev;
      const nextSpecies = candidates[Math.floor(Math.random() * candidates.length)];
      return { ...prev, pet: { ...prev.pet, species: nextSpecies } };
    });
    playSfx("switch");
    showBubble("物種切換成功，今天你養的是新版本。");
  };

  const switchHat = () => {
    setData((prev) => {
      const candidates = HATS.filter((item) => item.id !== prev.pet.hat.id);
      if (!candidates.length) return prev;
      const nextHat = candidates[Math.floor(Math.random() * candidates.length)];
      return { ...prev, pet: { ...prev.pet, hat: nextHat } };
    });
    playSfx("switch");
    showBubble("帽子換好了，時尚值已更新。");
  };

  const reroll = () => {
    let nextPet = null;
    let forcedByMode = false;
    setData((prev) => {
      const nextRoll = prev.rollNonce + 1;
      const generated = generatePet(`${prev.userId}:${nextRoll}`);
      forcedByMode = prev.shinyMode;
      nextPet = prev.shinyMode ? { ...generated, shiny: true } : generated;
      return { ...prev, rollNonce: nextRoll, pet: nextPet, status: createStatusFromPet(nextPet) };
    });
    playSfx("reroll");
    setIsEntering(true);
    window.setTimeout(() => setIsEntering(false), 650);
    if (nextPet?.shiny && !forcedByMode) {
      playSfx("shiny");
      showBubble("金光一閃！你抽到 SHINY 寵物了，機率 1%。");
      return;
    }
    showBubble(pickActionLine("reroll"));
  };

  return (
    <div className="oneui petPage">
      <div className="shell petShell">
        <header className="top petTop">
          <button className="backBtn" onClick={() => navigate("/")}>← 返回</button>
          <div className="title">電子寵物Buddy System</div>
          <div className="subtitle">重現 claude-pets 終端機寵物風格</div>
        </header>

        <main className="content petContent">
          <section className="card petHero">
            <div className="petMetaRow">
              <button
                className="petTag petTagBtn petTagPrimary"
                style={rarityStyle}
                onClick={reroll}
                title="點擊機率標籤重抽"
              >
                {data.pet.rarity.label} {data.pet.rarity.weight}%
              </button>
              <label className="petTag shinyToggle shinyToggleRight">
                <input
                  type="checkbox"
                  checked={data.shinyMode}
                  onChange={(e) => {
                    const enabled = e.target.checked;
                    setData((prev) => ({ ...prev, shinyMode: enabled }));
                    playSfx(enabled ? "shiny" : "switch");
                  }}
                />
                <span className="shinyToggleTrack" aria-hidden="true">
                  <span className="shinyToggleThumb" />
                </span>
                <span>Shiny 模式</span>
              </label>
              <button className="petTag petTagBtn" onClick={switchSpecies} title="點擊隨機換種類">
                種類: {data.pet.species.name}
              </button>
              <button className="petTag petTagBtn" onClick={switchHat} title="點擊隨機換帽子">
                帽子: {data.pet.hat.label}
              </button>
              <span className="petTag" title={`心情分數 ${moodInfo.moodScore}`}>{moodInfo.label} · {moodInfo.reason}</span>
            </div>

            <div className="petSpriteRow">
              {speaking ? (
                <div className={`petTalk ${fading ? "isFading" : ""}`}>
                  <div className="petTalkBubble" style={{ borderColor: data.pet.rarity.color }}>{speech}</div>
                  <div className="petTalkTail" style={{ color: data.pet.rarity.color }}>\\</div>
                </div>
              ) : null}

              <div
                className={`petSpriteWrap ${effectiveShiny ? "isShinyWrap" : ""} ${isEntering ? "isEntering" : ""} ${actionFx === "play" ? "isShake isPlayBurst" : ""} ${actionFx === "sleep" ? "isSleepDrift" : ""} ${actionFx === "feed" ? "isFeedBurst" : ""} ${actionFx === "bath" ? "isBathSplash" : ""} ${isEntering && data.pet.rarity.id === "legendary" ? "isLegendaryEntry" : ""}`}
                onClick={handlePet}
              >
                {effectiveShiny ? (
                  <div className="shinyStars" aria-hidden="true">
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                  </div>
                ) : null}
                {actionFx === "feed" ? (
                  <div className="feedParticles" aria-hidden="true">
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                    <span>✦</span>
                    <span>•</span>
                    <span>✧</span>
                  </div>
                ) : null}
                {actionFx === "bath" ? (
                  <div className="bathBubbles" aria-hidden="true">
                    <span>o</span>
                    <span>O</span>
                    <span>°</span>
                    <span>o</span>
                    <span>O</span>
                    <span>°</span>
                    <span>o</span>
                  </div>
                ) : null}
                {actionFx === "play" ? (
                  <div className="playSparks" aria-hidden="true">
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                  </div>
                ) : null}
                {actionFx === "sleep" ? (
                  <div className="sleepDream" aria-hidden="true">
                    <span>☾</span>
                    <span>z</span>
                    <span>Z</span>
                    <span>⋆</span>
                    <span>z</span>
                  </div>
                ) : null}
                {comboCount >= 2 ? <div className="comboBadge">COMBO x{comboCount}</div> : null}
                <pre
                  className={`petAscii terminalStyle ${effectiveShiny ? "isShiny" : ""} ${data.shinyMode ? "shinyModeGradient" : ""}`}
                  style={{ color: petColor }}
                >
                  {displayLines}
                </pre>
              </div>
            </div>

            <div className="petInfoBlock">
              <div className="sectionTitle petStatsTitle">屬性</div>
              <div className="petStatsGrid petStatsInHero">
                {statEntries(data.pet).map(([label, value]) => (
                  <div key={label} className="petStatItem">
                    <div className="petStatTop">
                      <span>{label}</span>
                      <b>{value}</b>
                    </div>
                    <div className="petStatTrack">
                      <div className="petStatFill" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="card">
            <div className="sectionTitle">生存條</div>
            {barData.map(([label, value, reverse]) => {
              const displayValue = reverse ? clamp(MAX_STAT - value) : value;
              return (
                <div key={label} className="petBarRow">
                  <div className="petBarLabel">{label}</div>
                  <div className="petBarTrack"><div className="petBarFill" style={{ width: `${displayValue}%` }} /></div>
                  <div className="petBarValue">{Math.round(displayValue)}</div>
                </div>
              );
            })}
          </section>

          <section className="card petActions">
            <div className="sectionTitle">互動</div>
            <div className="petActionGrid">
              <button className="btn solid" onClick={handleFeed}>餵食</button>
              <button className="btn solid" onClick={handlePlay}>玩耍</button>
              <button className="btn solid" onClick={handleSleep}>睡覺</button>
              <button className="btn solid" onClick={handleBath}>洗澡</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
