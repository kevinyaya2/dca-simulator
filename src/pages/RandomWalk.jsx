import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TILE_WALL = 0;
const TILE_FLOOR = 1;
const TILE_TRAP = 2;
const TILE_GOAL = 3;

const PHASE_PLAYING = "playing";
const PHASE_DEAD = "dead";
const PHASE_CLEARED = "cleared";

const DIRECTIONS = [
  { dr: -1, dc: 0 },
  { dr: 1, dc: 0 },
  { dr: 0, dc: -1 },
  { dr: 0, dc: 1 },
];

const SESSION_KEY = "maze_escape_session_best_v1";
const DEFAULT_BEST = { bestTime: null, bestSteps: null, bestLevel: 0 };

const COLORS = {
  wall: "#0f1224",
  wallEdge: "#212c55",
  floor: "#f4f8ff",
  floorShade: "#dce8ff",
  trap: "#e83d4f",
  goal: "#2cc989",
  fogUnknown: "#080b16",
  fogMemory: "rgba(9, 13, 27, 0.50)",
  hint: "rgba(68, 156, 255, 0.70)",
  player: "#ffd45d",
};

function toKey(r, c) {
  return `${r},${c}`;
}

function clonePos(pos) {
  return { r: pos.r, c: pos.c };
}

function createBoolGrid(rows, cols, value = false) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => value));
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getLevelConfig(level) {
  const size = Math.min(33, 15 + Math.floor((level - 1) / 2) * 2);
  return {
    rows: size,
    cols: size,
    trapDensity: Math.min(0.18, 0.035 + (level - 1) * 0.009),
    visionRadius: Math.max(2, 4 - Math.floor((level - 1) / 5)),
  };
}

function isInside(rows, cols, r, c) {
  return r >= 0 && c >= 0 && r < rows && c < cols;
}

function isPassable(grid, r, c, avoidTraps) {
  const cell = grid[r][c];
  if (cell === TILE_WALL) return false;
  if (avoidTraps && cell === TILE_TRAP) return false;
  return true;
}

function bfsPath(grid, start, target, options = {}) {
  const { avoidTraps = false } = options;
  if (start.r === target.r && start.c === target.c) return [clonePos(start)];

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = createBoolGrid(rows, cols, false);
  const prev = Array.from({ length: rows }, () => Array.from({ length: cols }, () => null));

  const queue = [clonePos(start)];
  let head = 0;
  visited[start.r][start.c] = true;

  while (head < queue.length) {
    const current = queue[head];
    head += 1;

    for (const dir of DIRECTIONS) {
      const nr = current.r + dir.dr;
      const nc = current.c + dir.dc;
      if (!isInside(rows, cols, nr, nc)) continue;
      if (visited[nr][nc]) continue;
      if (!isPassable(grid, nr, nc, avoidTraps)) continue;

      visited[nr][nc] = true;
      prev[nr][nc] = current;

      if (nr === target.r && nc === target.c) {
        const path = [{ r: nr, c: nc }];
        let cursor = current;
        while (cursor) {
          path.push({ r: cursor.r, c: cursor.c });
          if (cursor.r === start.r && cursor.c === start.c) break;
          cursor = prev[cursor.r][cursor.c];
        }
        path.reverse();
        return path;
      }

      queue.push({ r: nr, c: nc });
    }
  }

  return null;
}

function buildMazeGrid(rows, cols) {
  const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => TILE_WALL));
  const stack = [{ r: 1, c: 1 }];
  grid[1][1] = TILE_FLOOR;

  while (stack.length) {
    const current = stack[stack.length - 1];
    const candidates = [];

    for (const dir of DIRECTIONS) {
      const nr = current.r + dir.dr * 2;
      const nc = current.c + dir.dc * 2;
      if (!isInside(rows, cols, nr, nc)) continue;
      if (nr === 0 || nc === 0 || nr === rows - 1 || nc === cols - 1) continue;
      if (grid[nr][nc] !== TILE_WALL) continue;
      candidates.push({ nr, nc, wr: current.r + dir.dr, wc: current.c + dir.dc });
    }

    if (!candidates.length) {
      stack.pop();
      continue;
    }

    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    grid[pick.wr][pick.wc] = TILE_FLOOR;
    grid[pick.nr][pick.nc] = TILE_FLOOR;
    stack.push({ r: pick.nr, c: pick.nc });
  }

  return grid;
}

function getFloorCells(grid, start, goal) {
  const floors = [];
  for (let r = 1; r < grid.length - 1; r += 1) {
    for (let c = 1; c < grid[0].length - 1; c += 1) {
      if (grid[r][c] !== TILE_FLOOR) continue;
      if (r === start.r && c === start.c) continue;
      if (r === goal.r && c === goal.c) continue;
      floors.push({ r, c });
    }
  }
  return floors;
}

function applyVision(discovered, player, radius) {
  const rows = discovered.length;
  const cols = discovered[0].length;
  const next = discovered.map((row) => row.slice());

  for (let r = Math.max(0, player.r - radius); r <= Math.min(rows - 1, player.r + radius); r += 1) {
    for (let c = Math.max(0, player.c - radius); c <= Math.min(cols - 1, player.c + radius); c += 1) {
      if (Math.abs(r - player.r) + Math.abs(c - player.c) <= radius) next[r][c] = true;
    }
  }

  return next;
}

function buildVisibleMap(rows, cols, player, radius) {
  const visible = createBoolGrid(rows, cols, false);
  for (let r = Math.max(0, player.r - radius); r <= Math.min(rows - 1, player.r + radius); r += 1) {
    for (let c = Math.max(0, player.c - radius); c <= Math.min(cols - 1, player.c + radius); c += 1) {
      if (Math.abs(r - player.r) + Math.abs(c - player.c) <= radius) visible[r][c] = true;
    }
  }
  return visible;
}

function revealPath(discovered, path) {
  const next = discovered.map((row) => row.slice());
  for (const point of path) {
    next[point.r][point.c] = true;
  }
  return next;
}

function randomWalkPathToGoal(grid, start, goal, options = {}) {
  const { avoidTraps = true, attempts = 24 } = options;
  const rows = grid.length;
  const cols = grid[0].length;
  const maxSteps = rows * cols * 8;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const visits = new Map();
    let current = { r: start.r, c: start.c };
    let prev = null;
    const trail = [clonePos(current)];
    visits.set(toKey(current.r, current.c), 1);

    for (let i = 0; i < maxSteps; i += 1) {
      if (current.r === goal.r && current.c === goal.c) return trail;

      const neighbors = [];
      for (const dir of DIRECTIONS) {
        const nr = current.r + dir.dr;
        const nc = current.c + dir.dc;
        if (!isInside(rows, cols, nr, nc)) continue;
        if (!isPassable(grid, nr, nc, avoidTraps)) continue;
        neighbors.push({ r: nr, c: nc });
      }
      if (!neighbors.length) break;

      const nonBacktrackNeighbors =
        prev == null
          ? neighbors
          : neighbors.filter((cell) => !(cell.r === prev.r && cell.c === prev.c));
      const pickPool = nonBacktrackNeighbors.length ? nonBacktrackNeighbors : neighbors;

      let pick = pickPool[0];
      let bestScore = -Infinity;
      for (const candidate of pickPool) {
        const key = toKey(candidate.r, candidate.c);
        const seen = visits.get(key) || 0;
        const towardGoal = -Math.abs(candidate.r - goal.r) - Math.abs(candidate.c - goal.c);
        const score = Math.random() * (1 / (1 + seen * 1.6)) + towardGoal * 0.02;
        if (score > bestScore) {
          bestScore = score;
          pick = candidate;
        }
      }

      prev = current;
      current = pick;
      trail.push(clonePos(current));
      const key = toKey(current.r, current.c);
      visits.set(key, (visits.get(key) || 0) + 1);
    }
  }

  return null;
}

function placeTraps(grid, start, goal, trapCount, protectedPath) {
  const protectedSet = new Set(protectedPath.map((p) => toKey(p.r, p.c)));
  const pool = getFloorCells(grid, start, goal).filter((cell) => {
    if (protectedSet.has(toKey(cell.r, cell.c))) return false;
    return Math.abs(cell.r - start.r) + Math.abs(cell.c - start.c) >= 4;
  });

  const picks = shuffle(pool).slice(0, Math.min(trapCount, pool.length));
  for (const trap of picks) grid[trap.r][trap.c] = TILE_TRAP;
}

function buildLevelLayout(level) {
  const config = getLevelConfig(level);
  const grid = buildMazeGrid(config.rows, config.cols);
  const start = { r: 1, c: 1 };
  const goal = { r: config.rows - 2, c: config.cols - 2 };
  grid[goal.r][goal.c] = TILE_FLOOR;

  const safePath = bfsPath(grid, start, goal, { avoidTraps: false }) || [start, goal];
  const floorCount = getFloorCells(grid, start, goal).length;
  const trapCount = Math.floor(floorCount * config.trapDensity);

  placeTraps(grid, start, goal, trapCount, safePath);
  // 保證陷阱配置後仍然至少有一條可通關路徑
  const passablePath = bfsPath(grid, start, goal, { avoidTraps: true });
  if (!passablePath) {
    for (let r = 0; r < config.rows; r += 1) {
      for (let c = 0; c < config.cols; c += 1) {
        if (grid[r][c] === TILE_TRAP) grid[r][c] = TILE_FLOOR;
      }
    }
    placeTraps(grid, start, goal, trapCount, safePath);
  }
  grid[goal.r][goal.c] = TILE_GOAL;

  return {
    rows: config.rows,
    cols: config.cols,
    grid,
    start,
    goal,
    config,
  };
}

function createGameFromLayout(level, layout) {
  const player = clonePos(layout.start);
  const discovered = applyVision(createBoolGrid(layout.rows, layout.cols, false), player, layout.config.visionRadius);

  return {
    level,
    layout,
    player,
    discovered,
    hintPath: [],
    phase: PHASE_PLAYING,
    stepCount: 0,
    elapsedSec: 0,
    assisted: false,
    hintAnimating: false,
    hintCursor: 0,
    message: "走到終點，避開陷阱。",
  };
}

function createNewGame(level) {
  return createGameFromLayout(level, buildLevelLayout(level));
}

function stepGame(game, dir) {
  if (game.phase !== PHASE_PLAYING) return game;

  const nr = game.player.r + dir.dr;
  const nc = game.player.c + dir.dc;
  const { layout } = game;

  if (!isInside(layout.rows, layout.cols, nr, nc)) return game;
  if (layout.grid[nr][nc] === TILE_WALL) return game;

  const nextPlayer = { r: nr, c: nc };
  const discovered = applyVision(game.discovered, nextPlayer, layout.config.visionRadius);

  const cell = layout.grid[nr][nc];
  if (cell === TILE_TRAP) {
    return {
      ...game,
      player: nextPlayer,
      discovered,
      hintPath: [],
      stepCount: game.stepCount + 1,
      phase: PHASE_DEAD,
      message: "你踩到陷阱了。",
    };
  }

  if (cell === TILE_GOAL || (nr === layout.goal.r && nc === layout.goal.c)) {
    return {
      ...game,
      player: nextPlayer,
      discovered,
      hintPath: [],
      stepCount: game.stepCount + 1,
      phase: PHASE_CLEARED,
      message: game.assisted ? "過關（已使用提示）。" : "成功過關。",
    };
  }

  return {
    ...game,
    player: nextPlayer,
    discovered,
    hintPath: [],
    stepCount: game.stepCount + 1,
    phase: PHASE_PLAYING,
    message: game.message,
  };
}

function formatTime(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const mm = String(Math.floor(safe / 60)).padStart(2, "0");
  const ss = String(safe % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function loadSessionBest() {
  if (typeof window === "undefined") return DEFAULT_BEST;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return DEFAULT_BEST;
    const parsed = JSON.parse(raw);
    return {
      bestTime: Number.isFinite(parsed.bestTime) ? parsed.bestTime : null,
      bestSteps: Number.isFinite(parsed.bestSteps) ? parsed.bestSteps : null,
      bestLevel: Number.isFinite(parsed.bestLevel) ? parsed.bestLevel : 0,
    };
  } catch {
    return DEFAULT_BEST;
  }
}

export default function RandomWalk() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const [best, setBest] = useState(() => loadSessionBest());
  const [game, setGame] = useState(() => createNewGame(1));

  const tileSize = useMemo(() => {
    const maxDim = Math.max(game.layout.rows, game.layout.cols);
    return Math.max(10, Math.floor(360 / maxDim));
  }, [game.layout.cols, game.layout.rows]);

  const canvasW = game.layout.cols * tileSize;
  const canvasH = game.layout.rows * tileSize;

  const phaseLabel =
    game.phase === PHASE_PLAYING ? "進行中" : game.phase === PHASE_DEAD ? "失敗" : "過關";
  const hintStatus = game.assisted ? "已使用提示" : "未使用提示";
  const bestSummary =
    best.bestTime == null && best.bestSteps == null
      ? "尚無最佳紀錄"
      : `最佳 ${best.bestTime == null ? "--:--" : formatTime(best.bestTime)} / ${
          best.bestSteps == null ? "--" : `${best.bestSteps} 步`
        }`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(best));
  }, [best]);

  useEffect(() => {
    if (game.phase !== PHASE_PLAYING) return undefined;

    const timerId = setInterval(() => {
      setGame((current) => {
        if (current.phase !== PHASE_PLAYING) return current;
        return { ...current, elapsedSec: current.elapsedSec + 1 };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [game.phase]);

  const movePlayer = useCallback((dr, dc) => {
    setGame((current) => {
      if (current.hintAnimating) return current;
      const next = stepGame(current, { dr, dc });

      if (current.phase !== PHASE_CLEARED && next.phase === PHASE_CLEARED) {
        setBest((bestNow) => {
          const updated = {
            ...bestNow,
            bestLevel: Math.max(bestNow.bestLevel, next.level),
          };

          if (!next.assisted) {
            updated.bestTime =
              updated.bestTime == null
                ? next.elapsedSec
                : Math.min(updated.bestTime, next.elapsedSec);
            updated.bestSteps =
              updated.bestSteps == null
                ? next.stepCount
                : Math.min(updated.bestSteps, next.stepCount);
          }

          return updated;
        });
      }

      return next;
    });
  }, []);

  const useHint = useCallback(() => {
    setGame((current) => {
      if (current.phase !== PHASE_PLAYING || current.hintAnimating) return current;
      const randomPath =
        randomWalkPathToGoal(current.layout.grid, current.player, current.layout.goal, {
          avoidTraps: true,
        }) || bfsPath(current.layout.grid, current.player, current.layout.goal, { avoidTraps: true }) || [];
      return {
        ...current,
        hintPath: randomPath,
        discovered: randomPath.length > 0 ? revealPath(current.discovered, [randomPath[0]]) : current.discovered,
        assisted: true,
        hintAnimating: randomPath.length > 1,
        hintCursor: 0,
        message: randomPath.length
          ? "Random Walk 提示播放中..."
          : "找不到可行路徑。",
      };
    });
  }, []);

  useEffect(() => {
    if (!game.hintAnimating || game.hintPath.length <= 1) return undefined;

    const timerId = setInterval(() => {
      setGame((current) => {
        if (!current.hintAnimating || current.hintPath.length <= 1) return current;
        const nextCursor = current.hintCursor + 1;
        if (nextCursor >= current.hintPath.length) {
          return {
            ...current,
            hintAnimating: false,
            message: "已用 Random Walk 逐格點亮到出口（本關不計最佳）。",
          };
        }

        const point = current.hintPath[nextCursor];
        const discovered = current.discovered.map((row) => row.slice());
        discovered[point.r][point.c] = true;

        return {
          ...current,
          discovered,
          hintCursor: nextCursor,
          hintAnimating: nextCursor < current.hintPath.length - 1,
          message:
            nextCursor < current.hintPath.length - 1
              ? "Random Walk 提示播放中..."
              : "已用 Random Walk 逐格點亮到出口（本關不計最佳）。",
        };
      });
    }, 70);

    return () => clearInterval(timerId);
  }, [game.hintAnimating, game.hintPath.length]);

  const retryLevel = useCallback(() => {
    setGame((current) => createGameFromLayout(current.level, current.layout));
  }, []);

  const nextLevel = useCallback(() => {
    setGame((current) => {
      if (current.phase !== PHASE_CLEARED) return current;
      return createNewGame(current.level + 1);
    });
  }, []);

  const restartRun = useCallback(() => {
    setGame(createNewGame(1));
  }, []);

  const resetBest = useCallback(() => {
    setBest({ ...DEFAULT_BEST });
    if (typeof window !== "undefined") window.sessionStorage.removeItem(SESSION_KEY);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const key = event.key.toLowerCase();
      if (key === "arrowup" || key === "w") {
        event.preventDefault();
        movePlayer(-1, 0);
      } else if (key === "arrowdown" || key === "s") {
        event.preventDefault();
        movePlayer(1, 0);
      } else if (key === "arrowleft" || key === "a") {
        event.preventDefault();
        movePlayer(0, -1);
      } else if (key === "arrowright" || key === "d") {
        event.preventDefault();
        movePlayer(0, 1);
      }
    };

    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, [movePlayer]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { layout, player } = game;
    const visible = buildVisibleMap(layout.rows, layout.cols, player, layout.config.visionRadius);

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.fillStyle = "#0a0f20";
    ctx.fillRect(0, 0, canvasW, canvasH);

    for (let r = 0; r < layout.rows; r += 1) {
      for (let c = 0; c < layout.cols; c += 1) {
        const x = c * tileSize;
        const y = r * tileSize;

        if (!game.discovered[r][c]) {
          ctx.fillStyle = COLORS.fogUnknown;
          ctx.fillRect(x, y, tileSize, tileSize);
          continue;
        }

        const cell = layout.grid[r][c];
        if (cell === TILE_WALL) {
          ctx.fillStyle = COLORS.wall;
          ctx.fillRect(x, y, tileSize, tileSize);
          ctx.strokeStyle = COLORS.wallEdge;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, tileSize - 1, tileSize - 1);
        } else {
          ctx.fillStyle = (r + c) % 2 === 0 ? COLORS.floor : COLORS.floorShade;
          ctx.fillRect(x, y, tileSize, tileSize);

          if (cell === TILE_TRAP) {
            ctx.fillStyle = COLORS.trap;
            ctx.beginPath();
            ctx.moveTo(x + tileSize * 0.2, y + tileSize * 0.8);
            ctx.lineTo(x + tileSize * 0.5, y + tileSize * 0.2);
            ctx.lineTo(x + tileSize * 0.8, y + tileSize * 0.8);
            ctx.closePath();
            ctx.fill();
          }

          if (cell === TILE_GOAL) {
            ctx.fillStyle = COLORS.goal;
            ctx.fillRect(x + tileSize * 0.24, y + tileSize * 0.24, tileSize * 0.52, tileSize * 0.52);
          }
        }

        if (!visible[r][c]) {
          ctx.fillStyle = COLORS.fogMemory;
          ctx.fillRect(x, y, tileSize, tileSize);
        }
      }
    }

    if (game.hintPath.length > 1) {
      const endIndex = Math.min(game.hintCursor, game.hintPath.length - 1);
      const revealedHint = game.hintPath.slice(0, endIndex + 1);
      if (revealedHint.length > 1) {
        ctx.strokeStyle = COLORS.hint;
        ctx.lineWidth = Math.max(2, tileSize * 0.22);
        ctx.lineCap = "round";
        ctx.beginPath();

        revealedHint.forEach((point, index) => {
          const px = point.c * tileSize + tileSize / 2;
          const py = point.r * tileSize + tileSize / 2;
          if (index === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });

        ctx.stroke();
      }
    }

    if (game.hintPath.length > 0) {
      const cursorIndex = Math.min(game.hintCursor, game.hintPath.length - 1);
      const cursor = game.hintPath[cursorIndex];
      if (cursor && game.discovered[cursor.r][cursor.c]) {
        const cx = cursor.c * tileSize + tileSize / 2;
        const cy = cursor.r * tileSize + tileSize / 2;

        ctx.save();
        ctx.fillStyle = "rgba(56, 214, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(2.4, tileSize * 0.16), 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(56, 214, 255, 0.55)";
        ctx.lineWidth = Math.max(1.6, tileSize * 0.07);
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(4.8, tileSize * 0.28), 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    const px = player.c * tileSize + tileSize / 2;
    const py = player.r * tileSize + tileSize / 2;
    ctx.fillStyle = COLORS.player;
    ctx.beginPath();
    ctx.arc(px, py, tileSize * 0.34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(22, 22, 22, 0.85)";
    ctx.beginPath();
    ctx.arc(px - tileSize * 0.1, py - tileSize * 0.08, tileSize * 0.05, 0, Math.PI * 2);
    ctx.arc(px + tileSize * 0.1, py - tileSize * 0.08, tileSize * 0.05, 0, Math.PI * 2);
    ctx.fill();

    if (game.phase !== PHASE_PLAYING) {
      ctx.fillStyle = "rgba(6, 9, 18, 0.58)";
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.textAlign = "center";
      ctx.font = "700 20px sans-serif";
      ctx.fillText(game.phase === PHASE_CLEARED ? "成功過關" : "你陣亡了", canvasW / 2, canvasH / 2 - 6);
      ctx.font = "600 14px sans-serif";
      ctx.fillText(
        game.phase === PHASE_CLEARED ? "請按「下一關」" : "請按「重試本關」",
        canvasW / 2,
        canvasH / 2 + 18,
      );
    }
  }, [canvasH, canvasW, game, tileSize]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                返回
              </button>
              <div className="title">迷宮逃脫</div>
              <div className="subtitle">DFS 迷宮 + 迷霧 + 陷阱</div>
            </div>
            <div
              className="chip"
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                background:
                  game.phase === PHASE_PLAYING
                    ? "rgba(3, 200, 100, 0.15)"
                    : game.phase === PHASE_CLEARED
                      ? "rgba(54, 174, 255, 0.16)"
                      : "rgba(255, 120, 140, 0.20)",
                border:
                  game.phase === PHASE_PLAYING
                    ? "1px solid rgba(3, 200, 100, 0.35)"
                    : game.phase === PHASE_CLEARED
                      ? "1px solid rgba(54, 174, 255, 0.36)"
                      : "1px solid rgba(255, 120, 140, 0.40)",
                fontWeight: 800,
              }}
            >
              {phaseLabel}
            </div>
          </div>
        </header>

        <main className="content">
          <section className="card" style={{ padding: 12, display: "flex", justifyContent: "center" }}>
            <canvas
              ref={canvasRef}
              width={canvasW}
              height={canvasH}
              style={{
                borderRadius: 18,
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 32px rgba(16, 16, 30, 0.14)",
                display: "block",
                maxWidth: "100%",
                imageRendering: "pixelated",
              }}
            />
          </section>

          <section className="card mazeControlCard">
            <div className="mazeControlHeader">
              <div className="sectionTitle" style={{ marginBottom: 0 }}>
                控制中心
              </div>
              <div className={`chip ${game.assisted ? "mazeAssistChip" : ""}`}>{hintStatus}</div>
            </div>

            <div className="mazeInfoGrid">
              <div className="mazeInfoChip">
                <div className="mazeInfoLabel">關卡</div>
                <div className="mazeInfoValue">{game.level}</div>
                <div className="mazeInfoHint">
                  {game.layout.rows}x{game.layout.cols}
                </div>
              </div>
              <div className="mazeInfoChip">
                <div className="mazeInfoLabel">時間</div>
                <div className="mazeInfoValue">{formatTime(game.elapsedSec)}</div>
                <div className="mazeInfoHint">進行中即時累計</div>
              </div>
              <div className="mazeInfoChip">
                <div className="mazeInfoLabel">步數</div>
                <div className="mazeInfoValue">{game.stepCount.toLocaleString()}</div>
                <div className="mazeInfoHint">每次有效移動 +1</div>
              </div>
              <div className="mazeInfoChip">
                <div className="mazeInfoLabel">提示狀態</div>
                <div className="mazeInfoValue">{game.assisted ? "輔助" : "正式"}</div>
                <div className="mazeInfoHint">{game.assisted ? "不計最佳" : "可計最佳"}</div>
              </div>
            </div>

            <div className="mazeControlHint">{game.message}</div>

            <div className="mazeBestRow">
              <div className="mazeBestSummary">
                <div className="mazeBestTitle">本次最佳</div>
                <div className="mazeBestValue">{bestSummary}</div>
              </div>
              <button className="mazeTextBtn" onClick={resetBest}>
                重設
              </button>
            </div>

            <div className="mazeControlHint">鍵盤：方向鍵 / WASD</div>

            <div className="mazeDpad">
              <div />
          <button
            className="btn ghost mazePadBtn"
            onClick={() => movePlayer(-1, 0)}
            disabled={game.hintAnimating}
          >
            ↑
          </button>
          <div />
          <button
            className="btn ghost mazePadBtn"
            onClick={() => movePlayer(0, -1)}
            disabled={game.hintAnimating}
          >
            ←
          </button>
          <button
            className="btn ghost mazePadBtn"
            onClick={() => movePlayer(1, 0)}
            disabled={game.hintAnimating}
          >
            ↓
          </button>
          <button
            className="btn ghost mazePadBtn"
            onClick={() => movePlayer(0, 1)}
            disabled={game.hintAnimating}
          >
            →
          </button>
        </div>
          </section>

          <div className="spacer" />
        </main>

        <div className="bottomBar">
          <button className="btn ghost" onClick={retryLevel}>
            重試本關
          </button>
          <button
            className="btn ghost"
            onClick={useHint}
            disabled={game.phase !== PHASE_PLAYING || game.hintAnimating}
          >
            顯示提示
          </button>
          {game.phase === PHASE_CLEARED ? (
            <button className="btn solid" onClick={nextLevel}>
              下一關
            </button>
          ) : (
            <button className="btn solid" onClick={restartRun}>
              重新開始
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

