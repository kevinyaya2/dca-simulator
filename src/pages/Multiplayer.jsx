import { SCORE_TARGET, HIGH_BOUNTY } from '../../shared/bounty';
import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import MouseSensitivityControl from '../chroma-ops/ui/MouseSensitivityControl';
import { MultiplayerGame } from '../chroma-ops/core/MultiplayerGame';
import { MULTIPLAYER_PROTOCOL_VERSION } from '../../shared/protocol';
import { readMultiplayerSession, saveMultiplayerSession } from '../chroma-ops/settings/MultiplayerSession';
import ResumeCard from '../chroma-ops/ui/ResumeCard';
import RoomBroadcast from '../chroma-ops/ui/RoomBroadcast';
import './Multiplayer.css';
import './ChromaOps.css';
import './CombatFeedback.css';
import './Armory.css';
import './MobileControls.css';
import '../chroma-ops/ui/SniperScope.css';
import './MultiplayerArena.css';

const PRODUCTION_GAME_SERVER_URL = 'https://dca-simulator-uw4r.onrender.com';
const LOCAL_GAME_SERVER_URL = 'http://127.0.0.1:3001';
const configuredServerUrl = import.meta.env.VITE_GAME_SERVER_URL?.trim().replace(/\/+$/, '');
const isLocalServerUrl = (url) => /^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(url);

// Vite injects VITE_* values at build time. Never allow a production bundle to
// inherit a localhost URL from a developer shell or a missing env file.
const serverUrl = import.meta.env.PROD
  ? configuredServerUrl && !isLocalServerUrl(configuredServerUrl)
    ? configuredServerUrl
    : PRODUCTION_GAME_SERVER_URL
  : configuredServerUrl || LOCAL_GAME_SERVER_URL;

const ERROR_MESSAGES = {
  INVALID_NICKNAME: '暱稱需為 2 到 16 個字元', INVALID_ROOM_CODE: '請輸入 6 碼房間碼',
  ROOM_NOT_FOUND: '房間已不存在，請重新加入或建立房間', ROOM_FULL: '房間已滿（包含斷線保留席位）',
  ROUND_ENDING: '本局正在結算，請稍後再加入', SESSION_EXPIRED: '上一場席位已過期，或伺服器已重啟，請用房號重新加入',
  HOST_ONLY: '只有目前房主可以操作', NOT_READY: '需要至少兩位在線玩家才能開始',
  INVALID_STATE: '房間狀態已改變，請重試', ALREADY_IN_ROOM: '你已在房間內，請先離開',
};
const errorMessage = (error) => ERROR_MESSAGES[error] || error || '操作失敗，請重試';

export default function Multiplayer({ onBack, resumeOnMount = false }) {
  const [screen, setScreen] = useState(resumeOnMount ? 'reconnecting' : 'join');
  const [name, setName] = useState(localStorage.getItem('chroma-name') || '');
  const [code, setCode] = useState(new URLSearchParams(location.search).get('room') || '');
  const [room, setRoom] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [resultSeconds, setResultSeconds] = useState(10);
  const [broadcasts, setBroadcasts] = useState([]);
  const arenaRef = useRef(null);
  const gameRef = useRef(null);
  const sessionRef = useRef(readMultiplayerSession());
  const resumeRef = useRef(resumeOnMount);
  const initialSeqRef = useRef(0);
  const activeRef = useRef(false);
  const requestRef = useRef(false);
  const hostActionRef = useRef(false);
  const socket = useMemo(() => io(serverUrl, { autoConnect: false }), []);
  const inMatch = screen === 'playing' || screen === 'results';
  const isHost = playerId === room?.host;

  const request = async (event, ...args) => {
    if (!socket.connected) throw new Error('連線已中斷，請等待重連後再操作');
    try {
      const result = await socket.timeout(8000).emitWithAck(event, ...args);
      if (result?.error) throw new Error(errorMessage(result.error));
      return result;
    } catch (cause) {
      throw new Error(cause.message === 'operation has timed out' ? '伺服器回應逾時，請重試' : cause.message);
    }
  };
  const clearSession = () => {
    sessionRef.current = null;
    setBroadcasts([]);
    saveMultiplayerSession(null);
  };
  const applyRoom = (nextRoom) => {
    if (nextRoom?.protocolVersion !== MULTIPLAYER_PROTOCOL_VERSION) {
      resumeRef.current = false;
      socket.disconnect();
      throw new Error('多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。');
    }
    setRoom(nextRoom);
    setScreen(nextRoom.state === 'PLAYING' ? 'playing' : nextRoom.state === 'GAME_OVER' ? 'results' : 'lobby');
  };
  const acceptSession = (result) => {
    sessionRef.current = { code: result.code, playerId: result.playerId, resumeToken: result.resumeToken };
    saveMultiplayerSession(sessionRef.current);
    initialSeqRef.current = result.lastReceivedSeq || 0;
    resumeRef.current = true;
    setPlayerId(result.playerId);
    setCode(result.code);
    applyRoom(result.room);
  };

  useEffect(() => {
    activeRef.current = true;
    const restore = async () => {
      if (!resumeRef.current || !sessionRef.current || requestRef.current) return;
      requestRef.current = true;
      setBusy(true);
      setError('');
      try {
        const result = await socket.timeout(8000).emitWithAck('room:resume', sessionRef.current);
        if (!activeRef.current || !resumeRef.current) return;
        if (result.error) {
          if (result.error === 'SESSION_EXPIRED') clearSession();
          throw new Error(errorMessage(result.error));
        }
        acceptSession(result);
      } catch (cause) {
        if (activeRef.current) {
          setError(cause.message === 'operation has timed out' ? '恢復連線逾時，請點「返回上一場」重試' : errorMessage(cause.message));
          setScreen('join');
          resumeRef.current = false;
        }
      } finally {
        requestRef.current = false;
        if (activeRef.current) setBusy(false);
      }
    };
    const onRoomState = (nextRoom) => {
      if (!resumeRef.current || requestRef.current || !sessionRef.current) return;
      try { applyRoom(nextRoom); } catch (cause) { setError(cause.message); setScreen('join'); }
    };
    const onDisconnect = () => {
      if (resumeRef.current && sessionRef.current) {
        // Never let Socket.IO replay buffered combat actions after reconnection.
        socket.sendBuffer.length = 0;
        setScreen('reconnecting');
        setBusy(false);
      }
    };
    const onError = () => { setError('無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒'); setBusy(false); };
    const onReplaced = () => {
      resumeRef.current = false;
      clearSession();
      socket.disconnect();
      setRoom(null);setScreen('join');setBusy(false);
      setError('此席位已在另一個連線恢復，這個連線已結束');
    };
    const onNotice = (notice) => {
      if (!resumeRef.current || notice?.code !== sessionRef.current?.code) return;
      if (!['disconnected', 'reconnected'].includes(notice.kind) || !Number.isFinite(notice.at)) return;
      setBroadcasts(current => [...current.filter(item => item.id !== notice.id), { ...notice, expiresAt: Date.now() + 8000 }].slice(-3));
    };
    socket.on('connect', restore);
    socket.on('room:state', onRoomState);
    socket.on('disconnect', onDisconnect);
    socket.on('connect_error', onError);
    socket.on('room:replaced', onReplaced);
    socket.on('room:notice', onNotice);
    if (resumeRef.current && sessionRef.current) socket.connect();
    return () => {
      activeRef.current = false;
      socket.off('connect', restore);socket.off('room:state', onRoomState);
      socket.off('disconnect', onDisconnect);socket.off('connect_error', onError);socket.off('room:replaced', onReplaced);
      socket.off('room:notice', onNotice);
      socket.disconnect();
    };
    // Connection handlers read the current session from refs throughout this mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const leave = async () => {
    resumeRef.current = false;
    setBusy(true);
    try {
      if (socket.connected) await request('room:leave');
    } catch (cause) { setError(cause.message); }
    clearSession();socket.disconnect();setBusy(false);onBack();
  };
  const hostAction = async (event) => {
    if (hostActionRef.current) return;
    hostActionRef.current = true;
    setBusy(true);setError('');
    try { await request(event); } catch (cause) { setError(cause.message); }
    finally { hostActionRef.current = false;if (activeRef.current) setBusy(false); }
  };

  useEffect(() => {
    if (!inMatch || !arenaRef.current || gameRef.current) return undefined;
    const game = new MultiplayerGame(arenaRef.current, socket, room?.code, room?.roundId, (reason) => {
      setError(reason);setBusy(false);setScreen(socket.connected ? 'join' : 'reconnecting');
    }, playerId, initialSeqRef.current, { isHost, onLeave: () => { void leave(); }, onEnd: () => { void hostAction('game:end'); } });
    gameRef.current = game;game.start();if (screen === 'results') game.pause();
    return () => { game.dispose();if (gameRef.current === game) gameRef.current = null; };
    // The game is recreated for each round, restored connection, or host transfer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inMatch, socket, room?.code, room?.roundId, playerId, isHost]);

  useEffect(() => {
    if (screen === 'results') gameRef.current?.pause();
    else if (screen === 'playing') gameRef.current?.resume();
  }, [screen]);

  useEffect(() => {
    if (screen !== 'results' || !room?.returnAt) return undefined;
    const deadline = performance.now() + Math.max(0, room.returnAt - (room.serverTime || Date.now()));
    const update = () => setResultSeconds(Math.max(0, Math.ceil((deadline - performance.now()) / 1000)));
    update();const timer = window.setInterval(update, 200);
    return () => window.clearInterval(timer);
  }, [screen, room?.returnAt, room?.serverTime]);

  const ensureConnected = () => socket.connected ? Promise.resolve() : new Promise((resolve, reject) => {
    const cleanup = () => { clearTimeout(timer);socket.off('connect', connected);socket.off('connect_error', failed); };
    const connected = () => { cleanup();resolve(); };
    const failed = () => { cleanup();reject(new Error('無法連線至遊戲伺服器，請重試')); };
    const timer = setTimeout(() => { cleanup();reject(new Error('連線逾時，請重試')); }, 10000);
    socket.once('connect', connected);socket.once('connect_error', failed);socket.connect();
  });
  const enter = async (event) => {
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 16) { setError('暱稱需為 2 到 16 個字元');return; }
    resumeRef.current = false;requestRef.current = true;setError('');setBusy(true);
    try {
      await ensureConnected();
      // Explicitly choosing another room releases any previously saved seat.
      if (sessionRef.current) {
        const previous = await socket.timeout(8000).emitWithAck('room:resume', sessionRef.current);
        if (!previous.error) await request('room:leave');
        clearSession();
      }
      localStorage.setItem('chroma-name', trimmed);
      const result = await request(event, event === 'room:create' ? trimmed : { code, name: trimmed });
      if (activeRef.current) acceptSession(result);
    } catch (cause) { if (activeRef.current) { setError(cause.message);setScreen('join'); } }
    finally { requestRef.current = false;if (activeRef.current) setBusy(false); }
  };
  const resume = async () => {
    if (!sessionRef.current || busy) return;
    setScreen('reconnecting');setError('');resumeRef.current = true;
    // Reconnect through the same listener used for transient network failures.
    socket.disconnect();socket.sendBuffer.length = 0;socket.connect();
  };
  const create = () => { void enter('room:create'); };
  const join = () => { void enter('room:join'); };
  const start = () => { void hostAction('game:start'); };
  const playAgain = () => { void hostAction('game:again'); };
  const returnLobby = () => { void hostAction('game:lobby'); };
  const loadingLabel = busy ? <><i className="mp-spinner" aria-hidden="true" />連線中…</> : null;

  const copyInvite = () => {
    const url = new URL(location.href);url.searchParams.set('room', room.code);
    navigator.clipboard?.writeText(url.toString()).catch(() => setError('無法複製，請分享房間碼'));
  };

  if (screen === 'reconnecting') return <main className="mp"><section className="mp-panel mp-join-panel mp-reconnect-panel">
    <span className="mp-reconnect-orbit" aria-hidden="true"><i className="mp-spinner" /></span>
    <p className="mp-eyebrow">BACK TO THE ARENA</p><h1>正在返回上一場</h1><p className="mp-subtitle">隊友還在戰場，正在為你恢復連線。</p>
    <p className="mp-reconnect-hint">斷線席位保留 <b>60 秒</b></p><p className="mp-status" role="status">{error || '網路恢復後會自動重新連線'}</p>
    <button className="mp-primary" disabled={busy} onClick={resume}>重試連線</button><button className="mp-secondary" onClick={leave}>離開房間</button>
  </section></main>;

  if (inMatch) {
    const ranked = room?.finalStandings || [];
    const winners = ranked.filter(player => room?.winnerIds?.includes(player.id));
    const isWinner = room?.winnerIds?.includes(playerId);
    return <main className="chroma-ops co-multiplayer-shell">
      <div key={room?.roundId} className="co-game-stage" ref={arenaRef} aria-label="CHROMA OPS multiplayer arena" />
      <RoomBroadcast notices={broadcasts} floating />
      {error && <p className="mp-match-error" role="alert">{error}</p>}
      {screen === 'results' && <section className="mp-result" role="dialog" aria-modal="true" aria-labelledby="mp-result-title">
        <div className={`mp-result-card ${isWinner ? 'is-winner' : ''}`}>
          <p className="mp-result-eyebrow">比賽結束</p>
          <h1 id="mp-result-title">{room?.endReason === 'draw' ? '平手' : isWinner ? '勝利！' : '戰鬥結束'}</h1>
          <p className="mp-result-winner">{room?.endReason === 'draw' ? '本局無人取得積分' : <><b>{winners.map(player => player.name).join('、')}</b> {room?.endReason === 'target' ? `率先達到 ${room.scoreTarget} 分` : winners.length > 1 ? '超時並列獲勝' : '超時積分最高'}</>}</p>
          {room?.winnerTitle && <p className="mp-result-title">{room.winnerTitle}</p>}
          <div className="mp-result-ranking">
            <header><span>最終排名</span><span>積分 · 賞金 · K/D</span></header>
            {ranked.map((player) => <div className={player.id === playerId ? 'is-me' : ''} key={player.id}><span><i>{player.rank}</i>{player.name}{room?.winnerIds?.includes(player.id) && <em>勝者</em>}</span><strong className={player.bounty >= HIGH_BOUNTY ? 'is-high-bounty' : ''}>{player.score}分 · 賞{player.bounty} · {player.kills}/{player.deaths}</strong></div>)}
          </div>
          <p className="mp-result-countdown"><b>{resultSeconds}</b> 秒後自動回到房間</p>
          {isHost ? <div className="mp-result-actions"><button className="mp-primary" disabled={busy} onClick={playAgain}>{busy ? loadingLabel : '立即再玩'}</button><button disabled={busy} onClick={returnLobby}>立即回房間</button></div> : <p className="mp-result-waiting">等待房主操作，或倒數結束後自動返回</p>}
          <button className="mp-result-leave" onClick={leave}>離開多人模式</button>
        </div>
      </section>}
    </main>;
  }

  if (screen === 'lobby' && room) return <main className="mp"><section className="mp-panel mp-lobby-panel">
    <button className="mp-back" disabled={busy} onClick={leave}>← 離開房間</button>
    <header className="mp-lobby-header"><div><p className="mp-eyebrow">CHROMA OPS / LOBBY</p><h1>集結，準備開戰。</h1><p className="mp-subtitle">分享房號，邀請朋友加入你的戰場。</p></div><div className="mp-room-code"><small>房間代碼</small><strong>{room.code}</strong><span><i />{room.players.filter(player => player.connected).length} 位在線 · {room.players.length} / 8 席位</span></div></header>
    {room.lobbyReason && <p className="mp-status" role="status">{room.lobbyReason}</p>}
    <div className="mp-lobby-columns"><section className="mp-roster-panel" aria-label="房間玩家">
      <h2>玩家名單 <span>{room.players.length.toString().padStart(2, '0')} / 08</span></h2>
      <div className="mp-player-list">{room.players.map((player) => <div className={`mp-player-row ${!player.connected ? 'is-offline' : ''}`} key={player.id}>
        <span className="mp-avatar" style={{ '--player-color': `#${player.color.toString(16).padStart(6, '0')}` }}>{player.avatar}</span>
        <span className="mp-player-info"><b>{player.name}{player.id === playerId && <small>你</small>}</b><span><i />{player.connected ? '已連線，準備就緒' : '斷線中 · 席位保留 60 秒'}</span></span>
        {player.id === room.host && <span className="mp-host-badge">房主</span>}
      </div>)}</div>
      <div className="mp-share-actions"><button className="mp-secondary" onClick={() => navigator.clipboard?.writeText(room.code).catch(() => setError('無法複製，請手動複製房間碼'))}>複製房間碼</button><button className="mp-secondary" onClick={copyInvite}>複製邀請連結 ↗</button></div>
    </section><RoomBroadcast notices={room.notices} /></div>
    <footer className="mp-lobby-footer"><p>{isHost ? '至少 2 位玩家在線即可開始，朋友也能中途加入。' : '等待房主開始遊戲，先調整好你的手感吧。'}</p>{isHost && <button className="mp-primary" disabled={busy || room.players.filter(player => player.connected).length < 2} onClick={start}>{busy ? loadingLabel : '開始遊戲 →'}</button>}</footer>
    <p className="mp-bounty-rules">賞金競速：先達 {SCORE_TARGET} 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。</p>
    <details className="mp-preferences"><summary>視角與操作設定</summary><MouseSensitivityControl /></details>
    {error && <p className="mp-error" role="alert">{error}</p>}
  </section></main>;
  return <main className="mp"><section className="mp-panel mp-join-panel">
    <button className="mp-back" disabled={busy} onClick={leave}>← 選擇模式</button><p className="mp-eyebrow">CHROMA OPS / MULTIPLAYER</p><h1>你的隊友在等你。</h1><p className="mp-subtitle">建立專屬房間，或用房號直達戰場。</p>
    {sessionRef.current && <ResumeCard code={sessionRef.current.code} disabled={busy} onResume={resume} />}
    <label className="mp-field">玩家暱稱<input placeholder="大家怎麼稱呼你？" autoComplete="nickname" disabled={busy} value={name} maxLength="16" onChange={(event) => setName(event.target.value)} /></label>
    <button className="mp-primary" disabled={busy} onClick={create}>{busy ? loadingLabel : '建立新房間 →'}</button>
    <div className="mp-divider"><span>或加入朋友的房間</span></div>
    <label className="mp-field">房間碼<input className="mp-code-input" placeholder="輸入 6 碼房號" autoCapitalize="characters" disabled={busy} value={code} maxLength="6" onChange={(event) => setCode(event.target.value.toUpperCase())} /></label><button className="mp-secondary" disabled={busy} onClick={join}>{busy ? loadingLabel : '加入房間 ↗'}</button>
    <p className="mp-bounty-rules">賞金競速：先達 {SCORE_TARGET} 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。</p>
    <details className="mp-preferences"><summary>視角與操作設定</summary><MouseSensitivityControl /></details>
    {error && <p className="mp-error" role="alert">{error}</p>}
  </section></main>;
}
