import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInitialState, getPlayerStats, updateGame } from "./agar/engine";
import { renderGame } from "./agar/render";

const HIGH_SCORE_KEY = "agar-nebula-best-mass";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function AgarNebula() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const lastTsRef = useRef(0);
  const stateRef = useRef(createInitialState());
  const viewportRef = useRef({ width: 980, height: 620, dpr: 1 });
  const uiTickRef = useRef(0);
  const joystickRef = useRef({ active: false, pointerId: null, x: 0, y: 0 });
  const keyboardMoveRef = useRef({ up: false, down: false, left: false, right: false, active: false });
  const inputRef = useRef({ aimX: 0.2, aimY: -0.2, splitQueued: false, mergeQueued: false, ejectPressed: false, boostPressed: false });
  const [joystickUi, setJoystickUi] = useState({ x: 0, y: 0 });
  const [running, setRunning] = useState(true);
  const [ui, setUi] = useState({
    mass: 52,
    cells: 1,
    rank: 1,
    totalPlayers: 23,
    bestMass: 52,
    highScore: 52,
    foodCount: 1800,
    leaderboard: [],
    zoom: 1,
    miniX: 50,
    miniY: 50,
    splitCooldown: 0,
    ejectCooldown: 0,
    canEject: true,
    ejectMinMass: 32,
    canBoost: true,
    boostMinMass: 24,
    boosting: false,
    respawnMs: 0,
    danger: null,
    notices: [],
    minimapActors: [],
    mission: null,
    missionCompleted: 0,
    combo: { count: 0, best: 0, timeLeft: 0, window: 12, kills: 0 },
    bounty: null,
    revenge: null,
    milestone: { next: 300, completed: 0 },
    arena: { zone: "安全航道", safeRadius: 2850, safePercent: 100, outsideSafe: false, pressure: 0 },
    effects: { speed: 0, shield: 0, magnet: 0, respawnShield: 0 },
  });

  const splitAction = useCallback(() => {
    inputRef.current.splitQueued = true;
  }, []);

  const mergeAction = useCallback(() => {
    inputRef.current.mergeQueued = true;
  }, []);

  const restartGame = useCallback(() => {
    stateRef.current = createInitialState();
    inputRef.current.splitQueued = false;
    inputRef.current.mergeQueued = false;
    inputRef.current.ejectPressed = false;
    inputRef.current.boostPressed = false;
    lastTsRef.current = 0;
    setRunning(true);
    const stats = getPlayerStats(stateRef.current);
    setUi((prev) => ({
      ...prev,
      ...stats,
      leaderboard: stateRef.current.leaderboard,
      zoom: stateRef.current.camera.zoom,
      miniX: 50,
      miniY: 50,
    }));
  }, []);

  const syncKeyboardAim = useCallback(() => {
    const move = keyboardMoveRef.current;
    const x = (move.right ? 1 : 0) - (move.left ? 1 : 0);
    const y = (move.down ? 1 : 0) - (move.up ? 1 : 0);
    const len = Math.hypot(x, y);
    move.active = len > 0;
    if (len > 0) {
      inputRef.current.aimX = x / len;
      inputRef.current.aimY = y / len;
      setJoystickUi({ x: x / len, y: y / len });
    } else if (!joystickRef.current.active) {
      setJoystickUi({ x: 0, y: 0 });
    }
  }, []);

  const setEjectPressed = useCallback((pressed) => {
    inputRef.current.ejectPressed = pressed;
  }, []);

  const setBoostPressed = useCallback((pressed) => {
    inputRef.current.boostPressed = pressed;
  }, []);

  const updateUi = useCallback(() => {
    const state = stateRef.current;
    const stats = getPlayerStats(state);
    const previousHigh = Number(window.localStorage.getItem(HIGH_SCORE_KEY) || 0);
    const highScore = Math.max(previousHigh, stats.bestMass);
    if (highScore !== previousHigh) window.localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
    setUi({
      ...stats,
      highScore,
      leaderboard: state.leaderboard,
      zoom: state.camera.zoom,
      miniX: (state.camera.x / state.world.width) * 100,
      miniY: (state.camera.y / state.world.height) * 100,
    });
  }, []);

  const joystickStyle = useMemo(() => {
    const distance = Math.hypot(joystickUi.x, joystickUi.y);
    const amount = clamp(distance, 0, 1) * 34;
    const angle = Math.atan2(joystickUi.y, joystickUi.x);
    return {
      transform: `translate(${Math.cos(angle) * amount}px, ${Math.sin(angle) * amount}px)`,
    };
  }, [joystickUi.x, joystickUi.y]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      viewportRef.current = {
        width: Math.max(300, Math.round(rect.width * dpr)),
        height: Math.max(220, Math.round(rect.height * dpr)),
        dpr,
      };
      canvas.width = viewportRef.current.width;
      canvas.height = viewportRef.current.height;
    };

    resize();
    const observer = new ResizeObserver(() => resize());
    observer.observe(canvas);

    const frame = (ts) => {
      frameRef.current = requestAnimationFrame(frame);
      if (!running) return;
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;
      const state = stateRef.current;
      updateGame(state, dt, inputRef.current);
      renderGame(ctx, state, viewportRef.current, ts);

      inputRef.current.splitQueued = false;
      inputRef.current.mergeQueued = false;
      uiTickRef.current += 1;
      if (uiTickRef.current % 6 === 0) updateUi();
    };

    frameRef.current = requestAnimationFrame(frame);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [running, updateUi]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.repeat) return;
      const key = event.key.toLowerCase();

      if (key === "j") {
        event.preventDefault();
        splitAction();
      } else if (key === "h") {
        event.preventDefault();
        mergeAction();
      } else if (event.key === "ArrowUp" || key === "w") {
        event.preventDefault();
        keyboardMoveRef.current.up = true;
        syncKeyboardAim();
      } else if (event.key === "ArrowDown" || key === "s") {
        event.preventDefault();
        keyboardMoveRef.current.down = true;
        syncKeyboardAim();
      } else if (event.key === "ArrowLeft" || key === "a") {
        event.preventDefault();
        keyboardMoveRef.current.left = true;
        syncKeyboardAim();
      } else if (event.key === "ArrowRight" || key === "d") {
        event.preventDefault();
        keyboardMoveRef.current.right = true;
        syncKeyboardAim();
      } else if (key === "k") {
        setEjectPressed(true);
      } else if (key === "l") {
        setBoostPressed(true);
      } else if (key === "p") {
        setRunning((prev) => !prev);
      }
    };

    const onKeyUp = (event) => {
      const key = event.key.toLowerCase();

      if (event.key === "ArrowUp" || key === "w") {
        keyboardMoveRef.current.up = false;
        syncKeyboardAim();
      } else if (event.key === "ArrowDown" || key === "s") {
        keyboardMoveRef.current.down = false;
        syncKeyboardAim();
      } else if (event.key === "ArrowLeft" || key === "a") {
        keyboardMoveRef.current.left = false;
        syncKeyboardAim();
      } else if (event.key === "ArrowRight" || key === "d") {
        keyboardMoveRef.current.right = false;
        syncKeyboardAim();
      } else if (key === "k") {
        setEjectPressed(false);
      } else if (key === "l") {
        setBoostPressed(false);
      }
    };

    const onBlur = () => {
      inputRef.current.mergeQueued = false;
      setEjectPressed(false);
      setBoostPressed(false);
      keyboardMoveRef.current = { up: false, down: false, left: false, right: false, active: false };
      setJoystickUi({ x: 0, y: 0 });
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [mergeAction, setBoostPressed, setEjectPressed, splitAction, syncKeyboardAim]);

  const startJoystick = useCallback((event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    const len = Math.hypot(x, y);
    const nx = len > 1 ? x / len : x;
    const ny = len > 1 ? y / len : y;

    joystickRef.current = {
      active: true,
      pointerId: event.pointerId,
      x: nx,
      y: ny,
    };
    setJoystickUi({ x: nx, y: ny });
    inputRef.current.aimX = nx;
    inputRef.current.aimY = ny;
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const moveJoystick = useCallback((event) => {
    if (!joystickRef.current.active || joystickRef.current.pointerId !== event.pointerId) return;
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    const len = Math.hypot(x, y);
    const nx = len > 1 ? x / len : x;
    const ny = len > 1 ? y / len : y;

    joystickRef.current.x = nx;
    joystickRef.current.y = ny;
    setJoystickUi({ x: nx, y: ny });
    inputRef.current.aimX = nx;
    inputRef.current.aimY = ny;
  }, []);

  const endJoystick = useCallback((event) => {
    if (joystickRef.current.pointerId !== event.pointerId) return;
    joystickRef.current = { active: false, pointerId: null, x: 0, y: 0 };
    setJoystickUi({ x: 0, y: 0 });
    event.currentTarget.releasePointerCapture(event.pointerId);
  }, []);

  const minimapStyle = useMemo(
    () => ({ left: `${clamp(ui.miniX, 0, 100)}%`, top: `${clamp(ui.miniY, 0, 100)}%` }),
    [ui.miniX, ui.miniY],
  );

  const dangerStyle = useMemo(() => {
    if (!ui.danger) return { display: "none" };
    const angle = Math.atan2(ui.danger.y, ui.danger.x);
    const radius = 42;
    return {
      opacity: clamp(0.25 + ui.danger.level * 0.75, 0, 1),
      transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}%, ${Math.sin(angle) * radius}%) rotate(${angle}rad)`,
    };
  }, [ui.danger]);

  const splitReady = ui.splitCooldown <= 0;
  const mergeReady = ui.cells > 1 && ui.respawnMs <= 0;
  const ejectReady = ui.ejectCooldown <= 0 && ui.canEject;
  const boostReady = ui.canBoost && ui.respawnMs <= 0;
  const missionProgress = ui.mission ? clamp(ui.mission.progress / Math.max(1, ui.mission.goal), 0, 1) : 0;
  const missionProgressText = ui.mission
    ? `${Math.floor(Math.min(ui.mission.progress, ui.mission.goal))} / ${ui.mission.goal}`
    : "0 / 0";
  const comboProgress = ui.combo?.count > 0 ? clamp(ui.combo.timeLeft / Math.max(1, ui.combo.window), 0, 1) : 0;

  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                返回首頁
              </button>
              <div className="title">霓虹果凍競技場</div>
              <div className="subtitle">方向鍵或 WSAD 移動、J 分裂、H 融合、K 噴質量、L 加速；一般移動不掉質量，僅加速/危險區/噴質量會減少。</div>
            </div>
            <div className="agarNeoTopActions">
              <button
                type="button"
                className="agarNeoChipBtn"
                onClick={() => setRunning((prev) => !prev)}
              >
                {running ? "暫停" : "繼續"}
              </button>
              <button type="button" className="agarNeoChipBtn" onClick={restartGame}>
                重新開始
              </button>
              <div className={`chip ${running ? "agarNeoChipLive" : "agarNeoChipPause"}`}>
                {running ? "進行中" : "已暫停"}
              </div>
            </div>
          </div>
        </header>

        <main className="content agarNeoContent">
          <section className="card hero agarNeoHero">
            <div className="heroRow">
              <div>
                <div className="label">總質量</div>
                <div className="big">{ui.mass.toLocaleString()}</div>
              </div>
              <div className="pill agarNeoPill">
                <div className="pillTop">目前排名</div>
                <div className="pillBottom">#{ui.rank} / {ui.totalPlayers}</div>
              </div>
            </div>
            <div className="grid2 agarNeoStatsGrid">
              <div className="mini agarNeoMini">
                <div className="label">本局最高</div>
                <div className="value">{ui.bestMass.toLocaleString()}</div>
              </div>
              <div className="mini agarNeoMini">
                <div className="label">歷史最高</div>
                <div className="value">{ui.highScore.toLocaleString()}</div>
              </div>
              <div className="mini agarNeoMini">
                <div className="label">視野倍率</div>
                <div className="value">{ui.zoom.toFixed(2)}x</div>
                <div className="hint">變大與分裂時會自動拉遠</div>
              </div>
              <div className="mini agarNeoMini">
                <div className="label">細胞 / 食物</div>
                <div className="value">{ui.cells} / {ui.foodCount.toLocaleString()}</div>
              </div>
              <div className="mini agarNeoMini agarNeoArenaMini">
                <div className="label">場地</div>
                <div className="value">{ui.arena?.zone || "安全航道"}</div>
                <div className="hint">
                  安全圈 {ui.arena?.safePercent ?? 100}% {ui.arena?.outsideSafe ? `/ 圈外 ${ui.arena.pressure}` : ""}
                </div>
              </div>
              <div className="mini agarNeoMini">
                <div className="label">連段</div>
                <div className="value">x{ui.combo?.count || 0}</div>
                <div className="hint">最高 x{ui.combo?.best || 0} / 擊殺 {ui.combo?.kills || 0}</div>
                <div className="agarNeoComboBar">
                  <span style={{ width: `${comboProgress * 100}%` }} />
                </div>
              </div>
              <div className="mini agarNeoMini agarNeoMilestoneMini">
                <div className="label">質量里程碑</div>
                <div className="value">{ui.milestone?.next ? ui.milestone.next.toLocaleString() : "完成"}</div>
                <div className="hint">已完成 {ui.milestone?.completed || 0} 階 / 獎勵護盾與磁吸</div>
              </div>
              <div className="mini agarNeoMini agarNeoBountyMini">
                <div className="label">懸賞目標</div>
                <div className="value">{ui.bounty?.active ? ui.bounty.name : "搜尋中"}</div>
                <div className="hint">
                  {ui.bounty?.active
                    ? `質量 ${ui.bounty.mass.toLocaleString()} / ${ui.bounty.timeLeft.toFixed(0)}s`
                    : `已完成 ${ui.bounty?.claimed || 0} 次`}
                </div>
              </div>
              <div className="mini agarNeoMini agarNeoRevengeMini">
                <div className="label">復仇目標</div>
                <div className="value">{ui.revenge?.active ? ui.revenge.name : "無"}</div>
                <div className="hint">
                  {ui.revenge?.active ? `${ui.revenge.timeLeft.toFixed(0)}s 內擊殺拿獎勵` : `已復仇 ${ui.revenge?.claimed || 0} 次`}
                </div>
              </div>
              <div className="mini agarNeoMini agarNeoStatusMini">
                <div className="label">狀態</div>
                <div className="hint">
                  {[
                    ui.effects.speed > 0 ? `加速 ${ui.effects.speed.toFixed(0)}s` : null,
                    ui.effects.shield > 0 ? `護盾 ${ui.effects.shield.toFixed(0)}s` : null,
                    ui.effects.magnet > 0 ? `磁吸 ${ui.effects.magnet.toFixed(0)}s` : null,
                    ui.effects.respawnShield > 0 ? `重生保護 ${ui.effects.respawnShield.toFixed(0)}s` : null,
                    ui.boosting ? "加速中" : null,
                  ].filter(Boolean).join(" / ") || "方向鍵/WSAD / J / H / K / L"}
                </div>
              </div>
              <div className="mini agarNeoMini agarNeoMissionMini">
                <div className="label">目前任務</div>
                <div className="agarNeoMissionTitle">
                  {ui.mission?.completed ? "任務完成" : ui.mission?.title || "準備中"}
                </div>
                <div className="hint">{ui.mission?.detail || "進入戰場後開始"}</div>
                <div className="agarNeoMissionBar">
                  <span style={{ width: `${missionProgress * 100}%` }} />
                </div>
                <div className="agarNeoMissionMeta">
                  <span>{missionProgressText}</span>
                  <span>{ui.mission?.completed ? `下一個 ${ui.mission.nextIn.toFixed(1)}s` : ui.mission?.reward}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="card agarNeoBoardCard">
            <div className="sectionTitle agarNeoTitle">戰場</div>
            <div className="agarNeoBoardWrap">
              <canvas ref={canvasRef} className="agarNeoCanvas" />

              {ui.boosting && (
                <div className="agarNeoBoostOverlay">
                  <span>BOOST</span>
                </div>
              )}

              <div className="agarNeoDangerArrow" style={dangerStyle}>›</div>

              {ui.respawnMs > 0 && (
                <div className="agarNeoRespawn">
                  <strong>重生倒數</strong>
                  <span>{ui.respawnMs.toFixed(1)}</span>
                </div>
              )}

              <div className="agarNeoNoticeStack">
                {ui.notices.map((notice) => (
                  <div key={notice.id} className="agarNeoNotice" style={{ borderColor: notice.color, color: notice.color }}>
                    {notice.text}
                  </div>
                ))}
              </div>

              <div className="agarNeoMinimap">
                {ui.minimapActors.map((actor) => (
                  <div
                    key={actor.id}
                    className={`agarNeoMinimapActor ${actor.isPlayer ? "you" : ""}`}
                    style={{
                      left: `${clamp(actor.x, 0, 100)}%`,
                      top: `${clamp(actor.y, 0, 100)}%`,
                      background: actor.isPlayer ? undefined : actor.color,
                    }}
                    title={`${actor.isPlayer ? "你" : "Bot"} ${actor.mass}`}
                  />
                ))}
                {ui.minimapActors.length === 0 && <div className="agarNeoMinimapDot" style={minimapStyle} />}
              </div>

              <div
                className="agarNeoStick"
                onPointerDown={startJoystick}
                onPointerMove={moveJoystick}
                onPointerUp={endJoystick}
                onPointerCancel={endJoystick}
              >
                <div className="agarNeoStickRing" />
                <div className="agarNeoStickKnob" style={joystickStyle} />
              </div>

              <div className="agarNeoActionButtons">
                <button
                  className={`agarNeoAction agarNeoSplit ${splitReady ? "" : "cooling"}`}
                  onPointerDown={splitAction}
                  onClick={splitAction}
                  type="button"
                  disabled={ui.respawnMs > 0}
                >
                  <span>分裂</span>
                  <small>{splitReady ? "READY" : ui.splitCooldown.toFixed(1)}</small>
                </button>
                <button
                  className={`agarNeoAction agarNeoMerge ${mergeReady ? "" : "cooling"}`}
                  onPointerDown={mergeAction}
                  onClick={mergeAction}
                  type="button"
                  disabled={!mergeReady}
                >
                  <span>融合</span>
                  <small>{ui.cells > 1 ? `${ui.cells} -> 1` : "需 2+"}</small>
                </button>
                <button
                  className={`agarNeoAction agarNeoEject ${ejectReady ? "" : "cooling"}`}
                  onPointerDown={() => setEjectPressed(true)}
                  onPointerUp={() => setEjectPressed(false)}
                  onPointerLeave={() => setEjectPressed(false)}
                  onPointerCancel={() => setEjectPressed(false)}
                  onMouseDown={() => setEjectPressed(true)}
                  onMouseUp={() => setEjectPressed(false)}
                  onClick={() => setEjectPressed(false)}
                  type="button"
                  disabled={ui.respawnMs > 0 || !ui.canEject}
                >
                  <span>噴質量</span>
                  <small>{ui.canEject ? (ejectReady ? "READY" : ui.ejectCooldown.toFixed(1)) : `需 ${ui.ejectMinMass}`}</small>
                </button>
                <button
                  className={`agarNeoAction agarNeoBoost ${boostReady ? "" : "cooling"} ${ui.boosting ? "active" : ""}`}
                  onPointerDown={() => setBoostPressed(true)}
                  onPointerUp={() => setBoostPressed(false)}
                  onPointerLeave={() => setBoostPressed(false)}
                  onPointerCancel={() => setBoostPressed(false)}
                  onMouseDown={() => setBoostPressed(true)}
                  onMouseUp={() => setBoostPressed(false)}
                  onClick={() => setBoostPressed(false)}
                  type="button"
                  disabled={!boostReady}
                >
                  <span>加速</span>
                  <small>{ui.canBoost ? "L / HOLD" : `需 ${ui.boostMinMass}`}</small>
                </button>
              </div>
            </div>
            <div className="agarNeoBoardHud">
              <div className="agarNeoHudTitle">排行榜</div>
              <div className="agarNeoHudList">
                {ui.leaderboard.map((entry, index) => (
                  <div key={entry.id} className={`agarNeoHudRow ${entry.isPlayer ? "you" : ""}`}>
                    <span className="agarNeoHudIndex">{index + 1}</span>
                    <span className="agarNeoHudName">
                      <span className="agarNeoHudColor" style={{ background: entry.color }} />
                      <span>{entry.name || (entry.isPlayer ? "玩家" : "電腦")}</span>
                    </span>
                    <span className="agarNeoHudMass">{entry.mass}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="spacer" />
        </main>
      </div>
    </div>
  );
}
