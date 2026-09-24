import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { MultiplayerGame } from '../chroma-ops/core/MultiplayerGame';
import './Multiplayer.css';
import './ChromaOps.css';
import './CombatFeedback.css';
import './Armory.css';
import './MobileControls.css';
import './MultiplayerArena.css';

const serverUrl = import.meta.env.VITE_GAME_SERVER_URL || 'http://127.0.0.1:3001';

export default function Multiplayer({ onBack }) {
  const [screen, setScreen] = useState('join');
  const [name, setName] = useState(localStorage.getItem('chroma-name') || '');
  const [code, setCode] = useState(new URLSearchParams(location.search).get('room') || '');
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const arenaRef = useRef(null);
  const gameRef = useRef(null);
  const socket = useMemo(() => io(serverUrl, { autoConnect: false }), []);

  useEffect(() => {
    const onRoomState = (nextRoom) => {
      setRoom(nextRoom);
      setBusy(false);
      setScreen(nextRoom.state === 'PLAYING' ? 'playing' : 'lobby');
    };
    socket.on('room:state', onRoomState);
    return () => {
      socket.off('room:state', onRoomState);
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (screen !== 'playing' || !arenaRef.current || gameRef.current) return undefined;
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
  }, [screen, socket]);

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
  const start = () => {
    setBusy(true);
    socket.emit('game:start');
  };
  const loadingLabel = busy ? <><i className="mp-spinner" aria-hidden="true" />連線中…</> : null;

  if (screen === 'playing') return <main className="chroma-ops" ref={arenaRef} aria-label="CHROMA OPS multiplayer arena" />;
  if (screen === 'lobby' && room) return <main className="mp"><button className="mp-back" onClick={onBack}>← 返回模式選擇</button><h1>多人連線</h1><h2>房間 {room.code}</h2><p>{room.players.length} / 8 位玩家</p>{room.players.map((player) => <p className="mp-player" key={player.id}><span>{player.avatar}</span>{player.name}{player.id === room.host ? '　房主' : ''}</p>)}<button onClick={() => navigator.clipboard.writeText(room.code)}>複製房間碼</button><button onClick={() => navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${room.code}`)}>複製邀請連結</button>{socket.id === room.host && room.state === 'LOBBY' && <button className="mp-primary" disabled={busy || room.players.length < 2} onClick={start}>{busy ? loadingLabel : '開始遊戲'}</button>}{room.state === 'GAME_OVER' && <><h2>贏家：{room.winner}</h2>{socket.id === room.host && <button disabled={busy} onClick={() => { setBusy(true); socket.emit('game:again'); }}>{busy ? loadingLabel : '再玩一次'}</button>}</>}{error && <p role="alert">{error}</p>}</main>;
  return <main className="mp"><button className="mp-back" onClick={onBack}>← 返回模式選擇</button><h1>多人連線</h1><label>暱稱<input disabled={busy} value={name} maxLength="16" onChange={(event) => setName(event.target.value)} /></label><button className="mp-primary" disabled={busy} onClick={create}>{busy ? loadingLabel : '建立房間'}</button><label>房間碼<input disabled={busy} value={code} maxLength="6" onChange={(event) => setCode(event.target.value.toUpperCase())} /></label><button disabled={busy} onClick={join}>{busy ? loadingLabel : '加入房間'}</button>{error && <p role="alert">{error}</p>}</main>;
}
