import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toeicVocabData from "../data/ToeicVocab";

/* =====================
   出題模式
===================== */
const TOEIC_MODES = {
  TOEIC_700: { key: "TOEIC_750", label: "TOEIC 750", maxLevel: 750 },
  TOEIC_850: { key: "TOEIC_850", label: "TOEIC 850+", maxLevel: 850 },
  ALL: { key: "ALL", label: "全部單字", maxLevel: null },
};

/* =====================
   helpers
===================== */
const getWordsByMode = (words, mode) => {
  const config = TOEIC_MODES[mode];
  if (!config || config.maxLevel === null) return words;
  return words.filter((w) => w.level <= config.maxLevel);
};

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getRandomMeanings = (words, n, excludeMeaning) => {
  // 建立不重複的中文意思池
  const meaningSet = new Set();
  words.forEach((w) => {
    if (w.meaning !== excludeMeaning) {
      meaningSet.add(w.meaning);
    }
  });

  const pool = Array.from(meaningSet);

  // 使用 Fisher-Yates 洗牌演算法隨機選擇
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(n, shuffled.length));
};

/* =====================
   localStorage init
===================== */
const getInitialState = () => {
  try {
    const saved = localStorage.getItem("toeicVocab_state");
    if (!saved) throw new Error();
    return JSON.parse(saved);
  } catch {
    return {
      mode: "ALL",
      index: 0,
      correct: 0,
      total: 0,
      wrongKeys: [],
    };
  }
};

export default function ToeicVocab() {
  const navigate = useNavigate();
  const initial = getInitialState();

  /* =====================
     state
  ===================== */
  const [mode, setMode] = useState(initial.mode);
  const [index, setIndex] = useState(initial.index);
  const [flipped, setFlipped] = useState(false);

  const [isQuizMode, setIsQuizMode] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [correct, setCorrect] = useState(initial.correct);
  const [total, setTotal] = useState(initial.total);
  const [wrongKeys, setWrongKeys] = useState(initial.wrongKeys);

  /* =====================
     derived
  ===================== */
  const words = useMemo(() => getWordsByMode(toeicVocabData, mode), [mode]);

  const shuffledIndices = useMemo(() => {
    const indices = Array.from({ length: words.length }, (_, i) => i);
    return shuffleArray(indices);
  }, [words]);

  const word = words[shuffledIndices[index]];
  const wordKey = word ? `${word.word}_${word.partOfSpeech}` : "";

  /* =====================
     persist
  ===================== */
  useEffect(() => {
    localStorage.setItem(
      "toeicVocab_state",
      JSON.stringify({
        mode,
        index,
        correct,
        total,
        wrongKeys,
      }),
    );
  }, [mode, index, correct, total, wrongKeys]);

  /* =====================
     card handlers
  ===================== */
  const nextWord = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % shuffledIndices.length);
  };

  const prevWord = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + shuffledIndices.length) % shuffledIndices.length);
  };

  /* =====================
     quiz logic
  ===================== */
  const generateQuizByIndex = (quizIndex) => {
    const quizWordIndex = shuffledIndices[quizIndex];
    const quizWord = words[quizWordIndex];
    if (!quizWord) return;

    // 從全部單字中隨機選擇 3 個錯誤選項（排除正確答案）
    const wrongOptions = getRandomMeanings(words, 3, quizWord.meaning);

    // 使用 Fisher-Yates 洗牌演算法完全隨機打亂選項
    const allOptions = [quizWord.meaning, ...wrongOptions];
    const options = shuffleArray(allOptions);

    setOptions(options);
    setSelected(null);
    setShowResult(false);
    setIsQuizMode(true);
  };

  const enterQuiz = () => {
    generateQuizByIndex(index);
  };

  const answer = (opt) => {
    if (showResult) return;
    setSelected(opt);
    setShowResult(true);
    setTotal((t) => t + 1);

    if (opt === word.meaning) {
      setCorrect((c) => c + 1);
      setWrongKeys((prev) => prev.filter((k) => k !== wordKey));
    } else {
      setWrongKeys((prev) =>
        prev.includes(wordKey) ? prev : [...prev, wordKey],
      );
    }
  };

  const nextQuiz = () => {
    const nextIndex = (index + 1) % shuffledIndices.length;
    setIndex(nextIndex);
    setFlipped(false);
    generateQuizByIndex(nextIndex);
  };

  const resetStats = () => {
    setCorrect(0);
    setTotal(0);
    setWrongKeys([]);
  };

  const changeMode = (m) => {
    setMode(m);
    setIndex(0);
    setFlipped(false);
    setIsQuizMode(false);
    setWrongKeys([]);
  };

  /* =====================
     render
  ===================== */
  return (
    <div className="oneui">
      <div className="shell">
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">TOEIC 單字學習</div>
              <div className="subtitle">翻卡學習 | 單字測驗 | 手機風格</div>
            </div>
          </div>
        </header>

        <main className="content">
          {!isQuizMode ? (
            <section className="session">
              {/* 單字卡片 */}
              <section className="card hero">
                <div className="vocabCard" onClick={() => setFlipped(!flipped)}>
                  <div className={`cardInner ${flipped ? "flipped" : ""}`}>
                    <div className="cardFront">
                      <div className="word">{word?.word}</div>
                      <div className="partOfSpeech">{word?.partOfSpeech}</div>
                      <div className="hint">點擊翻面查看中文</div>
                    </div>
                    <div className="cardBack">
                      <div className="meaning">{word?.meaning}</div>
                      <div className="hint">點擊翻回</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 控制按鈕 */}
              <section className="card controls">
                <div className="buttonRow">
                  <button className="btn secondary" onClick={prevWord}>
                    上一題
                  </button>
                  <button className="btn primary" onClick={enterQuiz}>
                    進入測驗
                  </button>
                  <button className="btn secondary" onClick={nextWord}>
                    下一題
                  </button>
                </div>
              </section>
            </section>
          ) : (
            <section className="session quiz">
              {/* 測驗模式 */}
              <section className="card hero">
                <div className="quizWord">
                  <div className="word">{word?.word}</div>
                  <div className="partOfSpeech">{word?.partOfSpeech}</div>
                </div>
                <div className="options">
                  {options.map((o, i) => (
                    <button
                      key={i}
                      className={`optionBtn ${
                        showResult
                          ? o === word?.meaning
                            ? "correct"
                            : selected === o
                              ? "incorrect"
                              : ""
                          : ""
                      }`}
                      onClick={() => answer(o)}
                      disabled={showResult}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                {showResult && (
                  <div className="result">
                    {selected === word?.meaning
                      ? "正確！"
                      : `錯誤，正確答案：${word?.meaning}`}
                  </div>
                )}
              </section>

              {/* 測驗控制 */}
              <section className="card stats">
                <div className="stats">
                  正確率：
                  {total > 0 ? Math.round((correct / total) * 100) : 0}% (
                  {correct}/{total})
                  {wrongKeys.length > 0 && (
                    <div>錯題數：{wrongKeys.length}</div>
                  )}
                </div>
                <div className="buttonRow">
                  <button
                    className="btn secondary"
                    onClick={() => setIsQuizMode(false)}
                  >
                    返回學習
                  </button>
                  <button className="btn secondary" onClick={resetStats}>
                    刷新正確率
                  </button>
                  <button className="btn primary" onClick={nextQuiz}>
                    下一題
                  </button>
                </div>
              </section>

              {/* 模式選擇 */}
              <section className="card modes">
                <div className="sectionTitle">出題模式</div>
                <div className="modeSelector">
                  {Object.values(TOEIC_MODES).map((m) => (
                    <button
                      key={m.key}
                      className={`modeBtn ${mode === m.key ? "active" : ""}`}
                      onClick={() => changeMode(m.key)}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
                <div className="modeInfo">
                  目前模式：{TOEIC_MODES[mode]?.label} ({shuffledIndices.length}{" "}
                  題)
                </div>
              </section>
            </section>
          )}
        </main>
      </div>

      <style jsx>{`
        /* Session 視覺層級 */
        .session {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .card {
          background: var(--cardA);
          border-radius: 20px;
          padding: 1.5rem;
        }

        .card.hero {
          padding: 2rem;
        }

        .card.controls {
          padding: 1rem;
        }

        .card + .card {
          margin-top: 0.25rem;
        }

        /* 翻卡動畫 */
        .vocabCard {
          perspective: 1000px;
          cursor: pointer;
          margin: 0 auto;
          max-width: 320px;
        }
        .cardInner {
          position: relative;
          width: 100%;
          height: 240px;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .cardInner.flipped {
          transform: rotateY(180deg);
        }
        .cardFront,
        .cardBack {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background: var(--cardA);
          box-shadow: var(--shadowM);
          padding: 2rem;
        }
        .cardBack {
          transform: rotateY(180deg);
        }
        .word {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text);
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .partOfSpeech {
          font-size: 1.1rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .meaning {
          font-size: 1.8rem;
          color: var(--text);
          text-align: center;
          font-weight: 600;
        }
        .hint {
          font-size: 0.95rem;
          color: var(--muted);
          margin-top: 1.5rem;
          opacity: 0.8;
        }

        /* 按鈕樣式 */
        .buttonRow {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .btn {
          flex: 1;
          padding: 0.875rem 1rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 48px; /* 手機觸控友好 */
        }
        .btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .btn.primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        .btn.secondary {
          background: var(--cardB);
          color: var(--text);
          border: 1px solid var(--border);
        }
        .btn.secondary:hover {
          background: var(--cardA);
          transform: translateY(-1px);
        }

        /* 測驗樣式 */
        .quizWord {
          text-align: center;
          margin-bottom: 2rem;
        }
        .options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .optionBtn {
          padding: 1.25rem 1rem;
          border: 2px solid var(--border);
          border-radius: 12px;
          background: var(--cardA);
          color: var(--text);
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          min-height: 56px; /* 手機觸控 */
          display: flex;
          align-items: center;
        }
        .optionBtn:hover {
          background: var(--cardB);
          transform: translateY(-1px);
        }
        .optionBtn.correct {
          background: #4caf50;
          color: white;
          border-color: #4caf50;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }
        .optionBtn.incorrect {
          background: #f44336;
          color: white;
          border-color: #f44336;
          box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
        }
        .result {
          margin-top: 1rem;
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* 統計樣式 */
        .stats {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* 模式選擇 */
        .sectionTitle {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 1rem;
          text-align: center;
        }
        .modeSelector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .modeBtn {
          flex: 1;
          min-width: 90px;
          padding: 0.625rem 0.75rem;
          border: 2px solid var(--border);
          border-radius: 10px;
          background: var(--cardA);
          color: var(--text);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 44px;
        }
        .modeBtn:hover {
          background: var(--cardB);
          transform: translateY(-1px);
        }
        .modeBtn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .modeInfo {
          text-align: center;
          font-size: 0.9rem;
          color: var(--muted);
        }

        /* 響應式設計 */
        @media (max-width: 480px) {
          .vocabCard {
            max-width: 280px;
          }
          .cardFront,
          .cardBack {
            height: 200px;
            padding: 1.5rem;
          }
          .word {
            font-size: 1.8rem;
          }
          .meaning {
            font-size: 1.5rem;
          }
          .btn {
            padding: 0.75rem 0.875rem;
            font-size: 0.95rem;
          }
          .optionBtn {
            padding: 1rem 0.875rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
