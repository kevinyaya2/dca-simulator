import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/icons/Icon";
import { DIFFICULTY_CONFIG, GRID_COLS, GRID_ROWS, PATH, enemyConfigs, getCellDistance, getColorToken, makeInitialState, pathSet, towerConfigs, waveConfigs } from "./inertCore";
import "./OfficeTowerDefense.css";

const TICK = 1 / 60;
const towerList = Object.values(towerConfigs).sort((a, b) => a.cost - b.cost);
const towerTraits = {
  coffee: "穩定單體輸出，適合前期守線。",
  meeting: "高射程單點，優先壓制前排敵人。",
  report: "重擊型塔，單發傷害高、冷卻較長。",
  copier: "速射補刀，對快怪與殘血目標很有效。",
  slide: "穿透攻擊，可同時打到多個目標。",
  legal: "附加緩速，降低怪物推進節奏。",
  intern: "極速小傷，適合堆量建立火力網。",
  overtimeGuard: "範圍爆發，清密集群體效果佳。",
  budget: "斬殺型，低血敵人會被快速收掉。",
};

function keyOf(row, col) {
  return `${row}-${col}`;
}

function nextPathPosition(progress) {
  const maxIndex = PATH.length - 1;
  if (progress >= maxIndex) {
    const [r, c] = PATH[maxIndex];
    return { row: r, col: c, escaped: true };
  }
  const index = Math.floor(progress);
  const frac = progress - index;
  const [r1, c1] = PATH[index];
  const [r2, c2] = PATH[index + 1];
  return { row: r1 + (r2 - r1) * frac, col: c1 + (c2 - c1) * frac, escaped: false };
}

function makeEnemy(type, id, hpMultiplier = 1, speedMultiplier = 1) {
  const cfg = enemyConfigs[type];
  return {
    id,
    type,
    hp: Math.round(cfg.hp * hpMultiplier),
    maxHp: Math.round(cfg.hp * hpMultiplier),
    speed: cfg.speed * speedMultiplier,
    progress: 0,
    slowTimer: 0,
    slowMultiplier: 1,
  };
}

export default function OfficeTowerDefense() {
  const navigate = useNavigate();
  const [selectedTower, setSelectedTower] = useState("coffee");
  const [flippedTowerId, setFlippedTowerId] = useState(null);
  const [hoverCell, setHoverCell] = useState(null);
  const [selectedPlacedTowerId, setSelectedPlacedTowerId] = useState(null);
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [countdown, setCountdown] = useState(DIFFICULTY_CONFIG.preWaveCountdownSec);
  const [leakAlert, setLeakAlert] = useState(false);
  const [floaters, setFloaters] = useState([]);
  const [stats, setStats] = useState({ kills: 0, leaks: 0, earnedGold: 0, towersBuilt: 0, upgrades: 0, sells: 0 });
  const [game, setGame] = useState(() => makeInitialState());
  const enemyIdRef = useRef(1);

  useEffect(() => {
    if (paused || game.gameStatus !== "running" || countdown <= 0) return;
    const id = setTimeout(() => setCountdown((v) => Math.max(0, v - 1)), 1000);
    return () => clearTimeout(id);
  }, [paused, game.gameStatus, countdown]);

  useEffect(() => {
    if (countdown > 0 && game.gameStatus === "running") {
      setGame((prev) => ({ ...prev, banner: `Wave ${prev.waveNumber} 倒數 ${countdown}` }));
    }
  }, [countdown, game.gameStatus]);

  useEffect(() => {
    if (countdown === 0 && game.gameStatus === "running") {
      setGame((prev) => ({ ...prev, banner: `Wave ${prev.waveNumber} 開始` }));
    }
  }, [countdown, game.gameStatus]);

  useEffect(() => {
    if (game.gameStatus !== "running" || countdown > 0) return;
    const id = setInterval(() => {
      if (paused) return;
      setGame((prev) => {
        if (prev.gameStatus !== "running") return prev;

        const wave = waveConfigs[prev.waveIndex];
        const cycle = Math.floor((prev.waveNumber - 1) / waveConfigs.length);
        const hpMultiplier = 1 + cycle * DIFFICULTY_CONFIG.hpPerCycle;
        const speedMultiplier = 1 + cycle * DIFFICULTY_CONFIG.speedPerCycle;
        const waveInterval = Math.max(DIFFICULTY_CONFIG.minInterval, wave.interval - cycle * DIFFICULTY_CONFIG.intervalPerCycle);

        let spawnTimer = prev.spawnTimer + TICK * speed;
        let spawnedInWave = prev.spawnedInWave;
        const enemies = [...prev.enemies];
        const fxBursts = prev.fxBursts.map((burst) => ({ ...burst, ttl: burst.ttl - TICK * speed })).filter((burst) => burst.ttl > 0);
        let banner = prev.banner;
        let waveInProgress = prev.waveInProgress;

        if (waveInProgress && spawnedInWave < wave.spawns.length && spawnTimer >= waveInterval) {
          spawnedInWave += 1;
          spawnTimer = 0;
          enemies.push(makeEnemy(wave.spawns[spawnedInWave - 1], enemyIdRef.current++, hpMultiplier, speedMultiplier));
        }

        let baseHp = prev.baseHp;
        let leakedCount = 0;
        const movedEnemies = [];
        for (const enemy of enemies) {
          const nextSlowTimer = Math.max(0, enemy.slowTimer - TICK * speed);
          const speedFactor = nextSlowTimer > 0 ? enemy.slowMultiplier : 1;
          const progress = enemy.progress + enemy.speed * speedFactor * TICK * speed;
          const pos = nextPathPosition(progress);
          if (pos.escaped) {
            baseHp -= 1;
            leakedCount += 1;
          } else {
            movedEnemies.push({ ...enemy, progress, slowTimer: nextSlowTimer, slowMultiplier: nextSlowTimer > 0 ? enemy.slowMultiplier : 1 });
          }
        }

        let gold = prev.gold;
        let killsGained = 0;
        let earnedGained = 0;
        const towers = prev.towers.map((tower) => {
          const cfg = towerConfigs[tower.type];
          let cooldown = tower.cooldown - TICK * speed;
          if (cooldown > 0) return { ...tower, cooldown };

          let bestIndex = -1;
          let bestProgress = -Infinity;
          for (let i = 0; i < movedEnemies.length; i += 1) {
            const e = movedEnemies[i];
            const p = nextPathPosition(e.progress);
            const dist = getCellDistance({ row: tower.row, col: tower.col }, p);
            if (dist <= cfg.range && e.progress > bestProgress) {
              bestIndex = i;
              bestProgress = e.progress;
            }
          }

          if (bestIndex >= 0) {
            if (cfg.attackType === "pierce") {
              const hitIndices = movedEnemies.map((enemy, index) => ({ index, progress: enemy.progress }))
                .filter((item) => getCellDistance({ row: tower.row, col: tower.col }, nextPathPosition(movedEnemies[item.index].progress)) <= cfg.range)
                .sort((a, b) => b.progress - a.progress)
                .slice(0, cfg.pierceCount || 2)
                .map((item) => item.index);
              for (const idx of hitIndices) {
                movedEnemies[idx] = { ...movedEnemies[idx], hp: movedEnemies[idx].hp - cfg.damage };
                const targetPos = nextPathPosition(movedEnemies[idx].progress);
                fxBursts.push({ id: `fx-${Date.now()}-${Math.random()}`, row: targetPos.row, col: targetPos.col, ttl: 0.24 });
              }
            } else if (cfg.attackType === "slow") {
              movedEnemies[bestIndex] = { ...movedEnemies[bestIndex], hp: movedEnemies[bestIndex].hp - cfg.damage, slowTimer: cfg.slowDuration || 1, slowMultiplier: cfg.slowMultiplier || 0.7 };
              const targetPos = nextPathPosition(movedEnemies[bestIndex].progress);
              fxBursts.push({ id: `fx-${Date.now()}-${Math.random()}`, row: targetPos.row, col: targetPos.col, ttl: 0.24 });
            } else if (cfg.attackType === "splash") {
              const center = nextPathPosition(movedEnemies[bestIndex].progress);
              for (let i = 0; i < movedEnemies.length; i += 1) {
                const splashDist = getCellDistance(center, nextPathPosition(movedEnemies[i].progress));
                if (splashDist <= (cfg.splashRadius || 1.1)) movedEnemies[i] = { ...movedEnemies[i], hp: movedEnemies[i].hp - cfg.damage };
              }
              fxBursts.push({ id: `fx-${Date.now()}-${Math.random()}`, row: center.row, col: center.col, ttl: 0.28 });
            } else if (cfg.attackType === "execute") {
              const target = movedEnemies[bestIndex];
              const bonus = target.hp / target.maxHp <= (cfg.executeThreshold || 0.2) ? target.hp : cfg.damage;
              movedEnemies[bestIndex] = { ...target, hp: target.hp - bonus };
              const targetPos = nextPathPosition(target.progress);
              fxBursts.push({ id: `fx-${Date.now()}-${Math.random()}`, row: targetPos.row, col: targetPos.col, ttl: 0.24 });
            } else {
              movedEnemies[bestIndex] = { ...movedEnemies[bestIndex], hp: movedEnemies[bestIndex].hp - cfg.damage };
              const targetPos = nextPathPosition(movedEnemies[bestIndex].progress);
              fxBursts.push({ id: `fx-${Date.now()}-${Math.random()}`, row: targetPos.row, col: targetPos.col, ttl: 0.24 });
            }
            cooldown = cfg.cooldown;
          }
          return { ...tower, cooldown };
        });

        const aliveEnemies = [];
        for (const enemy of movedEnemies) {
          if (enemy.hp <= 0) {
            const reward = enemyConfigs[enemy.type].reward;
            gold += reward;
            killsGained += 1;
            earnedGained += reward;
            const pos = nextPathPosition(enemy.progress);
            setFloaters((prevFloaters) => [...prevFloaters, { id: `f-${Date.now()}-${Math.random()}`, row: pos.row, col: pos.col, text: `+${reward}`, ttl: 0.9 }]);
          } else {
            aliveEnemies.push(enemy);
          }
        }

        let waveIndex = prev.waveIndex;
        let waveNumber = prev.waveNumber;
        let checkpointWave = prev.checkpointWave;
        if (waveInProgress && spawnedInWave >= wave.spawns.length && aliveEnemies.length === 0) {
          waveInProgress = false;
          banner = `Wave ${waveNumber} 清空`;
        }

        let gameStatus = baseHp <= 0 || leakedCount > 0 ? "lose" : "running";
        if (!waveInProgress && gameStatus !== "lose") {
          if (waveNumber % DIFFICULTY_CONFIG.checkpointEvery === 0) {
            gameStatus = "checkpoint";
            checkpointWave = waveNumber;
            banner = `第 ${waveNumber} 波結算`;
          } else {
            waveIndex = (waveIndex + 1) % waveConfigs.length;
            waveNumber += 1;
            spawnedInWave = 0;
            spawnTimer = 0;
            waveInProgress = true;
            banner = `Wave ${waveNumber} 開始`;
            setCountdown(DIFFICULTY_CONFIG.preWaveCountdownSec);
          }
        }

        if (leakedCount > 0) {
          setLeakAlert(true);
          setTimeout(() => setLeakAlert(false), 350);
        }

        setStats((s) => ({ ...s, kills: s.kills + killsGained, leaks: s.leaks + leakedCount, earnedGold: s.earnedGold + earnedGained }));
        if (gameStatus === "lose") banner = "基地失守";

        return { ...prev, towers, enemies: aliveEnemies, fxBursts, gold, baseHp, spawnTimer, spawnedInWave, waveIndex, waveNumber, waveInProgress, banner, gameStatus, checkpointWave };
      });
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [paused, speed, game.gameStatus, countdown]);

  useEffect(() => {
    if (!floaters.length) return;
    const id = setInterval(() => {
      setFloaters((prev) => prev.map((f) => ({ ...f, ttl: f.ttl - 0.05 })).filter((f) => f.ttl > 0));
    }, 50);
    return () => clearInterval(id);
  }, [floaters.length]);

  const cellMap = useMemo(() => {
    const map = new Map();
    for (const tower of game.towers) map.set(keyOf(tower.row, tower.col), tower);
    return map;
  }, [game.towers]);

  const handlePlaceTower = (row, col) => {
    if (game.gameStatus !== "running") return;
    const key = keyOf(row, col);
    const existingTower = cellMap.get(key);
    if (existingTower) {
      setSelectedPlacedTowerId(existingTower.id);
      return;
    }
    setSelectedPlacedTowerId(null);
    if (pathSet.has(key)) return;
    const cfg = towerConfigs[selectedTower];
    if (game.gold < cfg.cost) return;

    if (navigator.vibrate) navigator.vibrate(8);
    setGame((prev) => ({ ...prev, gold: prev.gold - cfg.cost, towers: [...prev.towers, { id: `t-${Date.now()}-${Math.random()}`, type: selectedTower, row, col, cooldown: 0.1, level: 1 }] }));
    setStats((s) => ({ ...s, towersBuilt: s.towersBuilt + 1 }));
  };

  const handleUpgradeTower = () => {
    if (!selectedPlacedTower) return;
    const baseCfg = towerConfigs[selectedPlacedTower.type];
    const cost = Math.floor(baseCfg.cost * DIFFICULTY_CONFIG.upgradeCostFactor * selectedPlacedTower.level);
    if (game.gold < cost) return;
    setGame((prev) => ({
      ...prev,
      gold: prev.gold - cost,
      towers: prev.towers.map((t) =>
        t.id === selectedPlacedTower.id
          ? {
              ...t,
              level: (t.level || 1) + 1,
              damage: (t.damage || baseCfg.damage) * DIFFICULTY_CONFIG.upgradeDamageFactor,
              range: (t.range || baseCfg.range) + DIFFICULTY_CONFIG.upgradeRangeBonus,
              cooldownBase: (t.cooldownBase || baseCfg.cooldown) * DIFFICULTY_CONFIG.upgradeCooldownFactor,
            }
          : t,
      ),
    }));
    setStats((s) => ({ ...s, upgrades: s.upgrades + 1 }));
  };

  const handleSellTower = () => {
    if (!selectedPlacedTower) return;
    const baseCfg = towerConfigs[selectedPlacedTower.type];
    const sellGold = Math.floor(baseCfg.cost * DIFFICULTY_CONFIG.sellRatio);
    setGame((prev) => ({ ...prev, gold: prev.gold + sellGold, towers: prev.towers.filter((t) => t.id !== selectedPlacedTower.id) }));
    setSelectedPlacedTowerId(null);
    setStats((s) => ({ ...s, sells: s.sells + 1 }));
  };

  const handleContinueFromCheckpoint = () => {
    setGame((prev) => {
      if (prev.gameStatus !== "checkpoint") return prev;
      const nextWaveIndex = (prev.waveIndex + 1) % waveConfigs.length;
      const nextWaveNumber = prev.waveNumber + 1;
      return { ...prev, waveIndex: nextWaveIndex, waveNumber: nextWaveNumber, spawnedInWave: 0, spawnTimer: 0, waveInProgress: true, gameStatus: "running", checkpointWave: 0, banner: `Wave ${nextWaveNumber} 開始` };
    });
    setCountdown(DIFFICULTY_CONFIG.preWaveCountdownSec);
  };

  const selectedPlacedTower = game.towers.find((tower) => tower.id === selectedPlacedTowerId) || null;
  const previewCenter = hoverCell && !pathSet.has(keyOf(hoverCell.row, hoverCell.col)) && !cellMap.has(keyOf(hoverCell.row, hoverCell.col))
    ? { row: hoverCell.row, col: hoverCell.col, range: towerConfigs[selectedTower].range }
    : null;
  const selectedCenter = selectedPlacedTower ? { row: selectedPlacedTower.row, col: selectedPlacedTower.col, range: selectedPlacedTower.range || towerConfigs[selectedPlacedTower.type].range } : null;

  return (
    <div className={`oneui otdPage ${leakAlert ? "otdLeakAlert" : ""}`}>
      <div className="shell otdShell">
        <button className="backBtn" type="button" onClick={() => navigate("/")}>← 返回首頁</button>

        <section className="card otdCardWrap">
          <div className="otdHudRow">
            <div className="otdCard otdPopIn is-wave" role="status"><Icon name="waveBanner" size="sm" /><span>Wave {game.waveNumber}</span></div>
            <div className="otdCard otdPopIn is-gold" role="status"><Icon name="coinToy" size="sm" /><span>{game.gold}</span></div>
            <div className="otdCard otdPopIn is-hp" role="status"><Icon name="baseHeart" size="sm" /><span>{game.baseHp}</span></div>
            <div className="otdHudActions">
              <button className="btn ghost otdPauseBtn" type="button" onClick={() => setPaused((v) => !v)}>{paused ? "繼續" : "暫停"}</button>
              <button className="otdCtrlBtn" type="button" onClick={() => setSpeed((v) => (v === 1 ? 2 : 1))}>{speed}x</button>
            </div>
          </div>

          <div className="otdBanner" aria-live="polite"><Icon name="waveBanner" size="sm" /><strong>{countdown > 0 && game.gameStatus === "running" ? `Wave ${game.waveNumber} 倒數 ${countdown}` : game.banner}</strong></div>

          <div className="otdBoardFrame">
            <div className="otdBoardWrap">
              <div className="otdBoard" role="grid" aria-label="Tower defense map">
                {Array.from({ length: GRID_ROWS }).map((_, row) =>
                  Array.from({ length: GRID_COLS }).map((__, col) => {
                    const key = keyOf(row, col);
                    const tower = cellMap.get(key);
                    const isPath = pathSet.has(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        className={`otdCell ${isPath ? "isPath" : "isBuild"} ${previewCenter && getCellDistance({ row, col }, previewCenter) <= previewCenter.range ? "isPreviewRange" : ""} ${selectedCenter && getCellDistance({ row, col }, selectedCenter) <= selectedCenter.range ? "isSelectedRange" : ""}`}
                        onClick={() => handlePlaceTower(row, col)}
                        onMouseEnter={() => setHoverCell({ row, col })}
                        onMouseLeave={() => setHoverCell(null)}
                      >
                        {tower && <Icon name={towerConfigs[tower.type].icon} size="md" className="otdTowerIcon" />}
                      </button>
                    );
                  })
                )}

                {game.enemies.map((enemy) => {
                  const pos = nextPathPosition(enemy.progress);
                  const top = `${(pos.row / GRID_ROWS) * 100 + 6.25}%`;
                  const left = `${(pos.col / GRID_COLS) * 100 + 4.2}%`;
                  const hpPct = `${Math.max(0, (enemy.hp / enemy.maxHp) * 100)}%`;
                  const cfg = enemyConfigs[enemy.type];
                  const badge = enemy.type === "urgent" ? "快" : enemy.type === "overtime" ? "厚" : "普";
                  return (
                    <div key={enemy.id} className="otdEnemy" style={{ top, left, color: getColorToken(cfg.colorToken) }}>
                      <Icon name={cfg.icon} size="sm" />
                      <em className="otdEnemyBadge">{badge}</em>
                      <div className="otdHp"><span style={{ width: hpPct }} /></div>
                    </div>
                  );
                })}

                {game.fxBursts.map((fx) => <div key={fx.id} className="otdHitFx" style={{ top: `${(fx.row / GRID_ROWS) * 100 + 7}%`, left: `${(fx.col / GRID_COLS) * 100 + 4.4}%` }} />)}
                {floaters.map((f) => <div key={f.id} className="otdFloater" style={{ top: `${(f.row / GRID_ROWS) * 100 + 4}%`, left: `${(f.col / GRID_COLS) * 100 + 4}%`, opacity: f.ttl }}>{f.text}</div>)}
              </div>

              {selectedPlacedTower && (
                <div className="otdTowerActionPanel">
                  <strong>{towerConfigs[selectedPlacedTower.type].name} Lv.{selectedPlacedTower.level || 1}</strong>
                  <div className="otdTowerActionBtns">
                    <button className="btn ghost" type="button" onClick={handleUpgradeTower}>升級</button>
                    <button className="btn ghost" type="button" onClick={handleSellTower}>賣出</button>
                  </div>
                </div>
              )}

              {game.gameStatus === "checkpoint" && (
                <div className="otdCheckpointOverlay">
                  <div className="otdCheckpointCard">
                    <h3>里程碑完成</h3>
                    <p>你已通過第 {game.checkpointWave} 波</p>
                    <div className="otdCheckpointStats"><span>金幣 {game.gold}</span><span>基地 {game.baseHp}</span></div>
                    <div className="otdCheckpointStats"><span>擊殺 {stats.kills}</span><span>漏怪 {stats.leaks}</span></div>
                    <button className="btn solid otdCheckpointBtn" type="button" onClick={handleContinueFromCheckpoint}>繼續挑戰</button>
                  </div>
                </div>
              )}

              {showTutorial && (
                <div className="otdTutorialOverlay">
                  <div className="otdTutorialCard">
                    <h3>新手提示</h3>
                    <p>1. 先點下方塔卡選塔</p>
                    <p>2. 點可建造格放塔</p>
                    <p>3. 滑鼠移動可預覽射程，點已放塔可升級/賣出</p>
                    <button className="btn solid" type="button" onClick={() => setShowTutorial(false)}>開始防守</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="otdTowerPanel">
            {towerList.map((tower) => {
              const active = selectedTower === tower.id;
              const unaffordable = game.gold < tower.cost;
              const flipped = flippedTowerId === tower.id;
              return (
                <button
                  key={tower.id}
                  className={`otdTowerBtn ${active ? "isActive" : ""} ${flipped ? "isFlipped" : ""}`}
                  type="button"
                  style={{ "--towerColor": getColorToken(tower.colorToken) }}
                  onClick={() => {
                    if (selectedTower !== tower.id) {
                      setSelectedTower(tower.id);
                      setFlippedTowerId(null);
                    } else {
                      setFlippedTowerId((prev) => (prev === tower.id ? null : tower.id));
                    }
                  }}
                  disabled={unaffordable}
                >
                  <span className="otdTowerBtnFace otdTowerBtnFront">
                    <Icon name={tower.icon} size="md" />
                    <span>{tower.name}</span>
                    <small>{tower.cost}</small>
                  </span>
                  <span className="otdTowerBtnFace otdTowerBtnBack">
                    <strong>{tower.name}</strong>
                    <small>{towerTraits[tower.id] || "通用塔防輸出單位"}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="otdMetaRow">
            <span>擊殺 {stats.kills}</span>
            <span>漏怪 {stats.leaks}</span>
            <span>建塔 {stats.towersBuilt}</span>
            <span>升級 {stats.upgrades}</span>
            <span>賣塔 {stats.sells}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
