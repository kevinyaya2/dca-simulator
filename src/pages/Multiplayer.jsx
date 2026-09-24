import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { MultiplayerGame } from '../chroma-ops/core/MultiplayerGame';
import './Multiplayer.css';
import './ChromaOps.css';
import './MobileControls.css';
import './MultiplayerArena.css';

const serverUrl = import.meta.env.VITE_GAME_SERVER_URL || 'http://127.0.0.1:3001';

export default function Multiplayer() {
  const [screen, setScreen] = useState('join');
  const [name, setName] = useState(localStorage.getItem('chroma-name') || '');
  const [code, setCode] = useState(new URLSearchParams(location.search).get('room') || '');
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const arenaRef = useRef(null);
  const gameRef = useRef(null);
  const socket = useMemo(() => io(serverUrl, { autoConnect: false }), []);

  useEffect(() => {
    const onRoomState = (nextRoom) => {
      setRoom(nextRoom);
      if (nextRoom.state === 'PLAYING') setScreen('playing');
      else setScreen('lobby');
    };
    socket.on('room:state', onRoomState);
    return () => {
      socket.off('room:state', onRoomState);
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (screen !== 'playing' || !arenaRef.current || gameRef.current) return undefined;
    const game = new MultiplayerGame(arenaRef.current, socket, (reason) => {
      setError(reason);
      setScreen('lobby');
    });
    gameRef.current = game;
    game.start();
    return () => {
      game.dispose();
      if (gameRef.current === game) gameRef.current = null;
    };
  }, [screen, socket]);

  const connect = (afterConnect) => {
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 16) {
      setError('暱稱需為 2～16 字');
      return;
    }
    localStorage.setItem('chroma-name', trimmed);
    if (socket.connected) {
      afterConnect(trimmed);
      return;
    }
    const fail = () => setError('無法連線至遊戲伺服器');
    socket.once('connect', () => afterConnect(trimmed));
    socket.once('connect_error', fail);
    socket.connect();
  };
  const create = () => {
    connect((trimmed) => socket.emit('room:create', trimmed, (result) => result.error ? setError(result.error) : setScreen('lobby')));
  };
  const join = () => {
    connect((trimmed) => socket.emit('room:join', { code, name: trimmed }, (result) => result.error ? setError(result.error) : setScreen('lobby')));
  };

  if (screen === 'playing') return <main className="chroma-ops" ref={arenaRef} aria-label="CHROMA OPS multiplayer arena" />;
  if (screen === 'lobby' && room) return <main className="mp"><h1>多人連線</h1><h2>房間 {room.code}</h2><p>{room.players.length} / 8 位玩家</p>{room.players.map((player) => <p key={player.id}>{player.name}{player.id === room.host ? '　房主' : ''}</p>)}<button onClick={() => navigator.clipboard.writeText(room.code)}>複製房間碼</button><button onClick={() => navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${room.code}`)}>複製邀請連結</button>{socket.id === room.host && room.state === 'LOBBY' && <button disabled={room.players.length < 2} onClick={() => socket.emit('game:start')}>開始遊戲</button>}{room.state === 'GAME_OVER' && <><h2>贏家：{room.winner}</h2>{socket.id === room.host && <button onClick={() => socket.emit('game:again')}>再玩一次</button>}</>}{error && <p role="alert">{error}</p>}</main>;
  return <main className="mp"><h1>多人連線</h1><label>暱稱<input value={name} maxLength="16" onChange={(event) => setName(event.target.value)} /></label><button onClick={create}>建立房間</button><label>房間碼<input value={code} maxLength="6" onChange={(event) => setCode(event.target.value.toUpperCase())} /></label><button onClick={join}>加入房間</button>{error && <p role="alert">{error}</p>}</main>;
}
