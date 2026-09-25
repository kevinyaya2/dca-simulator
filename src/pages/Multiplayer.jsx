import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { MultiplayerGame } from '../chroma-ops/core/MultiplayerGame';
import { MULTIPLAYER_PROTOCOL_VERSION } from '../../shared/protocol';
import './Multiplayer.css';
import './ChromaOps.css';
import './CombatFeedback.css';
import './Armory.css';
import './MobileControls.css';
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

export default function Multiplayer({ onBack }) {
  const [screen, setScreen] = useState('join');
  const [name, setName] = useState(localStorage.getItem('chroma-name') || '');
  const [code, setCode] = useState(new URLSearchParams(location.search).get('room') || '');
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [resultSeconds, setResultSeconds] = useState(10);
  const arenaRef = useRef(null);
  const gameRef = useRef(null);
  const socket = useMemo(() => io(serverUrl, { autoConnect: false }), []);
  const inMatch = screen === 'playing' || screen === 'results';

  useEffect(() => {
    const onRoomState = (nextRoom) => {
      if (nextRoom?.protocolVersion !== MULTIPLAYER_PROTOCOL_VERSION) {
        setRoom(null);
        setBusy(false);
        setError('多人伺服器版本不一致，請重新部署 Render 伺服器後再試。');
        setScreen('join');
        socket.disconnect();
        return;
      }
      setRoom(nextRoom);
      setBusy(false);
      setScreen(nextRoom.state === 'PLAYING' ? 'playing' : nextRoom.state === 'GAME_OVER' ? 'results' : 'lobby');
    };
    socket.on('room:state', onRoomState);
    return () => {
      socket.off('room:state', onRoomState);
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (!inMatch || !arenaRef.current || gameRef.current) return undefined;
    const game = new MultiplayerGame(arenaRef.current, socket, room?.code, (reason) => {
      setError(reason);
      setBusy(false);
      setScreen('lobby');
    });
    gameRef.current = game;
    game.start();
    return () => {
      game.dispose();
      if (gameRef.current === game) gameRef.current = null;
    };
  }, [inMatch, socket, room?.code]);

  useEffect(() => {
    if (screen === 'results') gameRef.current?.pause();
    else if (screen === 'playing') gameRef.current?.resume();
  }, [screen]);

  useEffect(() => {
    if (screen !== 'results' || !room?.returnAt) return undefined;
    const deadline = performance.now() + Math.max(0, room.returnAt - (room.serverTime || Date.now()));
    const update = () => setResultSeconds(Math.max(0, Math.ceil((deadline - performance.now()) / 1000)));
    update();
    const timer = window.setInterval(update, 200);
    return () => window.clearInterval(timer);
  }, [screen, room?.returnAt, room?.serverTime]);

  const fail = (message) => {
    setError(message);
    setBusy(false);
  };
  const connect = (afterConnect) => {
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 16) return fail('暱稱需為 2 到 16 個字元');
    setError('');
    setBusy(true);
    localStorage.setItem('chroma-name', trimmed);
    if (socket.connected) return afterConnect(trimmed);
    socket.once('connect', () => afterConnect(trimmed));
    socket.once('connect_error', () => fail('無法連線至遊戲伺服器'));
    socket.connect();
  };
  const create = () => connect((trimmed) => socket.emit('room:create', trimmed, (result) => result.error ? fail(result.error) : setScreen('lobby')));
  const join = () => connect((trimmed) => socket.emit('room:join', { code, name: trimmed }, (result) => result.error ? fail(result.error) : setScreen('lobby')));
  const start = () => { setBusy(true); socket.emit('game:start'); };
  const playAgain = () => { setBusy(true); socket.emit('game:again'); };
  const returnLobby = () => { setBusy(true); socket.emit('game:lobby'); };
  const loadingLabel = busy ? <><i className="mp-spinner" aria-hidden="true" />連線中…</> : null;

  if (inMatch) {
    const ranked = [...(room?.players || [])].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    const isHost = socket.id === room?.host;
    const isWinner = socket.id === room?.winnerId;
    return <main className="chroma-ops co-multiplayer-shell">
      <div className="co-game-stage" ref={arenaRef} aria-label="CHROMA OPS multiplayer arena" />
      {screen === 'results' && <section className="mp-result" role="dialog" aria-modal="true" aria-labelledby="mp-result-title">
        <div className={`mp-result-card ${isWinner ? 'is-winner' : ''}`}>
          <p className="mp-result-eyebrow">比賽結束</p>
          <h1 id="mp-result-title">{isWinner ? '勝利！' : '戰鬥結束'}</h1>
          <p className="mp-result-winner"><b>{room?.winner || '未知玩家'}</b> 率先達成 10 次擊殺</p>
          <div className="mp-result-ranking">
            <header><span>最終排名</span><span>擊殺／死亡</span></header>
            {ranked.map((player, index) => <div className={player.id === socket.id ? 'is-me' : ''} key={player.id}><span><i>{index + 1}</i>{player.name}{player.id === room?.winnerId && <em>勝者</em>}</span><strong>{player.kills}／{player.deaths}</strong></div>)}
          </div>
          <p className="mp-result-countdown"><b>{resultSeconds}</b> 秒後自動回到房間</p>
          {isHost ? <div className="mp-result-actions"><button className="mp-primary" disabled={busy} onClick={playAgain}>{busy ? loadingLabel : '立即再玩'}</button><button disabled={busy} onClick={returnLobby}>立即回房間</button></div> : <p className="mp-result-waiting">等待房主操作，或倒數結束後自動返回</p>}
          <button className="mp-result-leave" onClick={onBack}>離開多人模式</button>
        </div>
      </section>}
    </main>;
  }

  if (screen === 'lobby' && room) return <main className="mp"><button className="mp-back" onClick={onBack}>← 返回模式選擇</button><h1>多人連線</h1><h2>房間 {room.code}</h2><p>{room.players.length} / 8 位玩家</p>{room.players.map((player) => <p className="mp-player" key={player.id}>{player.name}{player.id === room.host ? '　房主' : ''}</p>)}<button onClick={() => navigator.clipboard.writeText(room.code)}>複製房間碼</button><button onClick={() => navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${room.code}`)}>複製邀請連結</button>{socket.id === room.host && room.state === 'LOBBY' && <button className="mp-primary" disabled={busy || room.players.length < 2} onClick={start}>{busy ? loadingLabel : '開始遊戲'}</button>}{error && <p role="alert">{error}</p>}</main>;
  return <main className="mp"><button className="mp-back" onClick={onBack}>← 返回模式選擇</button><h1>多人連線</h1><label>暱稱<input disabled={busy} value={name} maxLength="16" onChange={(event) => setName(event.target.value)} /></label><button className="mp-primary" disabled={busy} onClick={create}>{busy ? loadingLabel : '建立房間'}</button><label>房間碼<input disabled={busy} value={code} maxLength="6" onChange={(event) => setCode(event.target.value.toUpperCase())} /></label><button disabled={busy} onClick={join}>{busy ? loadingLabel : '加入房間'}</button>{error && <p role="alert">{error}</p>}</main>;
}
