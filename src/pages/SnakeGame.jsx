import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// 匯入蛇頭和蛇身圖片
import headFront from "../assets/head-front.png";
import headRight from "../assets/head-right.png";
import headLeft from "../assets/head-left.png";
import bodyHorizontal from "../assets/body-橫.png";
import bodyVertical from "../assets/body-直.png";
import foodImg from "../assets/food.png";

// 遊戲常數
const GRID_SIZE = 18;
const CELL_SIZE = 32; // px
const INITIAL_SPEED = 150; // ms

// 方向向量
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

// 初始蛇位置（中央偏左，長度3，向右）
const getInitialSnake = () => [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
];

// 隨機產生食物位置（不在蛇身上）
const generateFood = (snake) => {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((seg) => seg.x === food.x && seg.y === food.y));
  return food;
};

export default function SnakeGame() {
  const navigate = useNavigate();

  // 遊戲狀態
  const [snake, setSnake] = useState(getInitialSnake);
  const [food, setFood] = useState(() => generateFood(getInitialSnake()));
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [nextDirection, setNextDirection] = useState(DIRECTIONS.RIGHT);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Refs
  const gameAreaRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const gameLoopRef = useRef(null);

  // 檢查是否可以改變方向（禁止反向）
  const canChangeDirection = useCallback((current, next) => {
    return !(current.x + next.x === 0 && current.y + next.y === 0);
  }, []);

  // 處理方向變更
  const handleDirectionChange = useCallback(
    (newDir) => {
      if (canChangeDirection(direction, newDir)) {
        setNextDirection(newDir);
      }
    },
    [direction, canChangeDirection]
  );

  // 鍵盤控制
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          handleDirectionChange(DIRECTIONS.UP);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleDirectionChange(DIRECTIONS.DOWN);
          break;
        case "ArrowLeft":
          e.preventDefault();
          handleDirectionChange(DIRECTIONS.LEFT);
          break;
        case "ArrowRight":
          e.preventDefault();
          handleDirectionChange(DIRECTIONS.RIGHT);
          break;
        case " ":
          e.preventDefault();
          if (gameStarted) setIsPaused((p) => !p);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver, gameStarted, handleDirectionChange]);

  // 觸控控制
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (gameOver) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      const minSwipe = 30; // 最小滑動距離

      if (Math.abs(deltaX) < minSwipe && Math.abs(deltaY) < minSwipe) return;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // 水平滑動
        handleDirectionChange(deltaX > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT);
      } else {
        // 垂直滑動
        handleDirectionChange(deltaY > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP);
      }
    },
    [gameOver, handleDirectionChange]
  );

  // 遊戲主循環
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        // 使用 nextDirection
        setDirection(nextDirection);
        const currentDir = nextDirection;

        const head = prevSnake[0];
        const newHead = {
          x: head.x + currentDir.x,
          y: head.y + currentDir.y,
        };

        // 檢查撞牆
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // 檢查撞自己（跳過頭部）
        if (prevSnake.some((seg, i) => i > 0 && seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // 檢查是否吃到食物
        setFood((prevFood) => {
          if (newHead.x === prevFood.x && newHead.y === prevFood.y) {
            setScore((s) => s + 1);
            return generateFood(newSnake);
          }
          return prevFood;
        });

        // 如果沒吃到食物，移除尾巴
        return newSnake.length > prevSnake.length + 1
          ? newSnake
          : (() => {
              // 檢查是否吃到食物來決定是否移除尾巴
              const ate = newHead.x === food.x && newHead.y === food.y;
              return ate ? newSnake : newSnake.slice(0, -1);
            })();
      });
    }, INITIAL_SPEED);

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, isPaused, nextDirection, food]);

  // 重新開始遊戲
  const restartGame = useCallback(() => {
    const initialSnake = getInitialSnake();
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection(DIRECTIONS.RIGHT);
    setNextDirection(DIRECTIONS.RIGHT);
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setGameStarted(true);
  }, []);

  // 開始遊戲
  const startGame = useCallback(() => {
    setGameStarted(true);
  }, []);

  // 根據方向獲取蛇頭圖片
  const getHeadImage = useMemo(() => {
    if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
      return headFront;
    } else if (direction === DIRECTIONS.RIGHT) {
      return headRight;
    } else {
      return headLeft;
    }
  }, [direction]);

  // 根據方向獲取蛇身圖片
  const getBodyImage = useMemo(() => {
    if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
      return bodyVertical;
    } else {
      return bodyHorizontal;
    }
  }, [direction]);

  // 計算每段蛇身的方向
  const getSegmentImage = useCallback(
    (index, seg, prevSeg) => {
      if (index === 0) return getHeadImage;

      // 計算當前段的方向
      if (prevSeg) {
        const dx = seg.x - prevSeg.x;
        const dy = seg.y - prevSeg.y;
        if (dx !== 0) return bodyHorizontal;
        if (dy !== 0) return bodyVertical;
      }

      return getBodyImage;
    },
    [getHeadImage, getBodyImage]
  );

  // 渲染蛇身段落
  const renderSnakeSegment = useCallback(
    (seg, index) => {
      const prevSeg = index > 0 ? snake[index - 1] : null;
      const segmentImage = getSegmentImage(index, seg, prevSeg);
      const isHead = index === 0;

      // 計算旋轉角度（針對蛇頭向下時需要翻轉）
      const needsFlip = isHead && direction === DIRECTIONS.DOWN;

      return (
        <div
          key={`${seg.x}-${seg.y}-${index}`}
          className={`snakeSegment ${isHead ? "snakeHead" : "snakeBody"}`}
          style={{
            left: seg.x * CELL_SIZE,
            top: seg.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
            transform: needsFlip ? "rotate(180deg)" : "none",
            zIndex: snake.length - index,
          }}
        >
          <img src={segmentImage} alt={isHead ? "head" : "body"} />
        </div>
      );
    },
    [snake, direction, getSegmentImage]
  );

  return (
    <div className="oneui">
      <div className="snakeShell">
        {/* 頂部導航 */}
        <header className="snakeHeader">
          <button className="backBtn" onClick={() => navigate("/")}>
            ← 返回
          </button>
          <h1 className="snakeTitle">🐍 柴剛上岸貪吃蛇</h1>
        </header>

        {/* 分數顯示 */}
        <div className="snakeScoreCard">
          <div className="snakeScoreLabel">分數</div>
          <div className="snakeScoreValue">{score}</div>
        </div>

        {/* 遊戲區域 */}
        <div
          className="snakeGameArea"
          ref={gameAreaRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          {/* 網格背景 */}
          <div className="snakeGrid">
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
              <div key={i} className="snakeGridCell" />
            ))}
          </div>

          {/* 蛇 */}
          {snake.map((seg, index) => renderSnakeSegment(seg, index))}

          {/* 食物 */}
          <div
            className="snakeFood"
            style={{
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          >
            <img src={foodImg} alt="food" />
          </div>

          {/* 開始畫面 */}
          {!gameStarted && (
            <div className="snakeOverlay">
              <div className="snakeOverlayContent">
                <div className="snakeOverlayEmoji">🐍</div>
                <h2>柴剛上岸貪吃蛇</h2>
                <p>⌨️ 方向鍵 / 📱 滑動控制</p>
                <button className="snakeStartBtn" onClick={startGame}>
                  開始遊戲
                </button>
              </div>
            </div>
          )}

          {/* 暫停畫面 */}
          {isPaused && gameStarted && !gameOver && (
            <div className="snakeOverlay">
              <div className="snakeOverlayContent">
                <div className="snakeOverlayEmoji">⏸️</div>
                <h2>遊戲暫停</h2>
                <button className="snakeStartBtn" onClick={() => setIsPaused(false)}>
                  繼續遊戲
                </button>
              </div>
            </div>
          )}

          {/* Game Over 畫面 */}
          {gameOver && (
            <div className="snakeOverlay gameOver">
              <div className="snakeOverlayContent">
                <div className="snakeOverlayEmoji">💀</div>
                <h2>Game Over</h2>
                <p className="snakeFinalScore">最終分數：{score}</p>
                <button className="snakeStartBtn" onClick={restartGame}>
                  重新開始
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 控制提示 */}
        <div className="snakeControlHint">
          <span>⌨️ 方向鍵</span>
          <span>📱 滑動控制</span>
          <span>␣ 暫停</span>
        </div>

        {/* 暫停按鈕 */}
        {gameStarted && !gameOver && (
          <button
            className="snakePauseBtn"
            onClick={() => setIsPaused((p) => !p)}
          >
            {isPaused ? "▶️ 繼續" : "⏸️ 暫停"}
          </button>
        )}
      </div>
    </div>
  );
}
