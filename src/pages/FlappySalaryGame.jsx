import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FlappySalaryGame.css";

// 遊戲常數
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const BIRD_SIZE = 40;
const PIPE_WIDTH = 60;
const PIPE_GAP = 180;
const GRAVITY = 0.4;
const JUMP_FORCE = -7;
const PIPE_SPEED = 2.5;

// 帳單柱類型
const BILL_TYPES = [
  { name: "房租", emoji: "🏠", color: "#FF6B6B" },
  { name: "娛樂消費", emoji: "🎮", color: "#4ECDC4" },
  { name: "突發支出", emoji: "💸", color: "#FFE66D" },
];

// 角色圖案（依強度排列）
const BIRD_CHARACTERS = [
  { emoji: "🐣", name: "小雞", minScore: 0 },
  { emoji: "🐥", name: "小鴨", minScore: 30 },
  { emoji: "🐦", name: "小鳥", minScore: 60 },
  { emoji: "🦅", name: "老鷹", minScore: 100 },
  { emoji: "🐲", name: "神龍", minScore: 150 },
  { emoji: "👑", name: "薪資王者", minScore: 200 },
];

// 根據分數獲取角色
const getBirdCharacter = (score) => {
  for (let i = BIRD_CHARACTERS.length - 1; i >= 0; i--) {
    if (score >= BIRD_CHARACTERS[i].minScore) {
      return BIRD_CHARACTERS[i];
    }
  }
  return BIRD_CHARACTERS[0];
};

// 幽默訊息
const getScoreMessage = (score) => {
  if (score >= 200) return "👑 薪資王者降臨！";
  if (score >= 150) return "🐲 神龍護體！";
  if (score >= 100) return "🏆 你是定期定額戰士！";
  if (score >= 50) return "😅 勉強活著...";
  return "";
};

// 💀 Game Over 梗語錄
const GAME_OVER_MESSAGES = [
  // 🧾 帳單系
  "💸 撞到房租柱…房東表示：謝謝惠顧。",
  "🧾 帳單說：你以為你能飛過我？",
  "💔 薪水：我只是路過一下就沒了。",
  // ⏰ 月底系
  "🔔 叮！月底到了，你的錢包已關機。",
  "📆 月底 Boss 出現：帳單全體出擊！",
  // 😭 上班族系
  "💼 你努力飛翔，帳單努力等你。",
  "📈 加薪還沒來，帳單先到了。",
  // 🐦 薪水鳥內心 OS
  "🐦 我不是小鳥…我是被壓榨的薪水。",
  // 🎮 遊戲王梗
  "⚡ 你發動了：月底帳單！效果：直接送墓。",
  "🚫 薪水小鳥被除外了。",
  "⏭️ 你還沒進入主要階段，錢包已結束回合。",
];

// 隨機取得 Game Over 訊息
const getRandomGameOverMessage = () => {
  return GAME_OVER_MESSAGES[
    Math.floor(Math.random() * GAME_OVER_MESSAGES.length)
  ];
};

const FlappySalaryGame = () => {
  const navigate = useNavigate();

  // 遊戲狀態
  const [gameState, setGameState] = useState("ready"); // ready, playing, gameover
  const [birdY, setBirdY] = useState(GAME_HEIGHT / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOverMessage, setGameOverMessage] = useState("");

  // 使用 ref 來追蹤遊戲狀態（避免閉包問題）
  const gameStateRef = useRef(gameState);
  const birdYRef = useRef(birdY);
  const velocityRef = useRef(birdVelocity);
  const pipesRef = useRef(pipes);
  const scoreRef = useRef(score);
  const gameLoopRef = useRef(null);
  const lastPipeRef = useRef(0);

  // 同步 ref 和 state
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  // 產生新的帳單柱
  const generatePipe = useCallback(() => {
    const billType = BILL_TYPES[Math.floor(Math.random() * BILL_TYPES.length)];
    const minHeight = 50;
    const maxHeight = GAME_HEIGHT - PIPE_GAP - minHeight;
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;

    return {
      id: Date.now(),
      x: GAME_WIDTH,
      topHeight,
      bottomY: topHeight + PIPE_GAP,
      passed: false,
      billType,
    };
  }, []);

  // 跳躍動作
  const jump = useCallback(() => {
    if (gameStateRef.current === "ready") {
      setGameState("playing");
      velocityRef.current = JUMP_FORCE;
      setBirdVelocity(JUMP_FORCE);
      const firstPipe = generatePipe();
      pipesRef.current = [firstPipe];
      setPipes([firstPipe]);
      lastPipeRef.current = Date.now();
    } else if (gameStateRef.current === "playing") {
      velocityRef.current = JUMP_FORCE;
      setBirdVelocity(JUMP_FORCE);
    } else if (gameStateRef.current === "gameover") {
      // 重新開始
      setGameState("ready");
      birdYRef.current = GAME_HEIGHT / 2;
      setBirdY(GAME_HEIGHT / 2);
      velocityRef.current = 0;
      setBirdVelocity(0);
      pipesRef.current = [];
      setPipes([]);
      scoreRef.current = 0;
      setScore(0);
      setGameOverMessage("");
    }
  }, [generatePipe]);

  // 遊戲主循環
  useEffect(() => {
    if (gameState !== "playing") {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    const gameLoop = () => {
      if (gameStateRef.current !== "playing") return;

      // 更新小鳥速度和位置
      velocityRef.current += GRAVITY;
      birdYRef.current += velocityRef.current;

      setBirdVelocity(velocityRef.current);
      setBirdY(birdYRef.current);

      // 更新柱子
      let newPipes = pipesRef.current
        .map((pipe) => ({ ...pipe, x: pipe.x - PIPE_SPEED }))
        .filter((pipe) => pipe.x > -PIPE_WIDTH);

      // 計分
      newPipes = newPipes.map((pipe) => {
        if (!pipe.passed && pipe.x + PIPE_WIDTH < 50) {
          scoreRef.current += 10;
          setScore(scoreRef.current);
          return { ...pipe, passed: true };
        }
        return pipe;
      });

      // 產生新柱子
      if (Date.now() - lastPipeRef.current > 2000) {
        newPipes.push(generatePipe());
        lastPipeRef.current = Date.now();
      }

      pipesRef.current = newPipes;
      setPipes([...newPipes]);

      // 碰撞檢測
      const birdLeft = 50;
      const birdRight = birdLeft + BIRD_SIZE;
      const birdTop = birdYRef.current;
      const birdBottom = birdYRef.current + BIRD_SIZE;

      let hasCollision = birdTop < 0 || birdBottom > GAME_HEIGHT;

      if (!hasCollision) {
        for (const pipe of newPipes) {
          const pipeLeft = pipe.x;
          const pipeRight = pipe.x + PIPE_WIDTH;

          if (birdRight > pipeLeft && birdLeft < pipeRight) {
            if (birdTop < pipe.topHeight || birdBottom > pipe.bottomY) {
              hasCollision = true;
              break;
            }
          }
        }
      }

      if (hasCollision) {
        setGameState("gameover");
        setGameOverMessage(getRandomGameOverMessage());
        return;
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    };
  }, [gameState, generatePipe]);

  // 鍵盤事件
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  const scoreMessage = getScoreMessage(score);
  const currentBird = getBirdCharacter(score);

  return (
    <div className="oneui">
      <div className="flappy-container">
        <div className="flappy-header">
          <button className="backBtn" onClick={() => navigate("/")}>
            ← 返回
          </button>
          <h1>💰 薪水小鳥 💸</h1>
          <p className="subtitle">躲避帳單，守住薪水！</p>
        </div>

        <div className="score-board">
          <div className="score-item">
            <span className="score-label">分數</span>
            <span className="score-value">{score}</span>
          </div>
          <div className="current-bird">
            <span className="bird-emoji">{currentBird.emoji}</span>
            <span className="bird-name">{currentBird.name}</span>
          </div>
          {scoreMessage && <div className="score-message">{scoreMessage}</div>}
        </div>

        <div
          className="game-area"
          onClick={jump}
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          {/* 薪水小鳥 */}
          <div
            className="bird"
            style={{
              top: birdY,
              left: 50,
              width: BIRD_SIZE,
              height: BIRD_SIZE,
              transform: `scaleX(-1) rotate(${-Math.min(Math.max(birdVelocity * 3, -30), 45)}deg)`,
            }}
          >
            {currentBird.emoji}
          </div>

          {/* 帳單柱 */}
          {pipes.map((pipe) => (
            <div key={pipe.id}>
              {/* 上方柱子 */}
              <div
                className="pipe pipe-top"
                style={{
                  left: pipe.x,
                  width: PIPE_WIDTH,
                  height: pipe.topHeight,
                  backgroundColor: pipe.billType.color,
                }}
              >
                <div className="pipe-label">
                  <span className="pipe-emoji">{pipe.billType.emoji}</span>
                  <span className="pipe-name">{pipe.billType.name}</span>
                </div>
              </div>
              {/* 下方柱子 */}
              <div
                className="pipe pipe-bottom"
                style={{
                  left: pipe.x,
                  width: PIPE_WIDTH,
                  top: pipe.bottomY,
                  height: GAME_HEIGHT - pipe.bottomY,
                  backgroundColor: pipe.billType.color,
                }}
              >
                <div className="pipe-label">
                  <span className="pipe-emoji">{pipe.billType.emoji}</span>
                  <span className="pipe-name">{pipe.billType.name}</span>
                </div>
              </div>
            </div>
          ))}

          {/* 開始畫面 */}
          {gameState === "ready" && (
            <div className="overlay">
              <div className="overlay-content">
                <div className="start-icon">👑</div>
                <h2>準備好了嗎？</h2>
                <p>點擊畫面或按空白鍵開始</p>
                <div className="tips">
                  <p>💡 躲避帳單柱，分數越高角色會進化！</p>
                  <div className="evolution-hint">🐣→🐥→🐦→🦅→🐲→👑</div>
                </div>
              </div>
            </div>
          )}

          {/* Game Over 畫面 */}
          {gameState === "gameover" && (
            <div className="overlay gameover">
              <div className="overlay-content">
                <div className="gameover-icon">{currentBird.emoji}</div>
                <h2>Game Over</h2>
                <p className="gameover-message">{gameOverMessage}</p>
                <div className="final-score">
                  <span>最終分數</span>
                  <strong>{score}</strong>
                  <span className="final-bird">達成：{currentBird.name}</span>
                </div>
                <button className="restart-btn" onClick={jump}>
                  🔄 再試一次
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="instructions">
          <div className="instruction-item">
            <span className="key">空白鍵</span>
            <span>或</span>
            <span className="key">點擊</span>
            <span>跳躍</span>
          </div>
        </div>

        <div className="bill-legend">
          <h3>帳單類型</h3>
          <div className="legend-items">
            {BILL_TYPES.map((bill) => (
              <div key={bill.name} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: bill.color }}
                ></span>
                <span className="legend-emoji">{bill.emoji}</span>
                <span>{bill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlappySalaryGame;
