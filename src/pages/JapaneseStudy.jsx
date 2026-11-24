import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { finalQuiz, kanaRows, lessons, questionsById, units } from "../data/JapaneseStudy";
import { loadStudyProgress, saveStudyProgress, updateStudyAnswer } from "../data/JapaneseStudyProgress";
import JapaneseStudyQuiz, { JapanesePassage } from "./JapaneseStudyQuiz";
import "./JapaneseStudy.css";

const studyNav = [
  ["overview", "N5 課程"],
  ["kana", "五十音複習"],
  ["review", "錯題簿"],
  ["final", "總複習"],
];
const kanaNote = "表中「を／ヲ」寫作 wo，作助詞時一般讀作 o。";

function studyLink(view) {
  return view === "overview" ? "/japanese-study" : `?view=${view}`;
}

function readProgress() {
  try {
    return { ...loadStudyProgress(window.localStorage), canSave: true };
  } catch {
    return { completed: new Set(), missed: new Set(), canSave: false };
  }
}

function cancelPlayback(playing) {
  if (!playing.current) return;
  playing.current = null;
  window.speechSynthesis?.cancel();
}

function useStudyAudio(view) {
  const [status, setStatus] = useState(null);
  const playing = useRef(null);

  if (status && status.view !== view) setStatus(null);

  useEffect(() => {
    window.speechSynthesis?.getVoices();
  }, []);

  useEffect(() => () => cancelPlayback(playing), [view]);

  function stop() {
    cancelPlayback(playing);
    setStatus(null);
  }

  function speak(text, target, onPlayback) {
    cancelPlayback(playing);
    const synthesis = window.speechSynthesis;
    const show = message => setStatus({ view, target, message });
    function unavailable(message) {
      show(message);
      onPlayback?.("unavailable");
    }

    if (!synthesis || !window.SpeechSynthesisUtterance) {
      unavailable("這個瀏覽器無法播放日文語音。");
      return;
    }
    const voice = synthesis.getVoices().find(candidate => /^ja(?:[-_]|$)/i.test(candidate.lang));
    if (!voice) {
      unavailable("目前找不到日文語音。可使用文字稿練習。");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;

    function finish() {
      if (playing.current !== utterance) return;
      playing.current = null;
      return true;
    }

    utterance.onend = () => {
      if (!finish()) return;
      show("播放完畢");
      onPlayback?.("heard");
    };
    utterance.onerror = () => {
      if (finish()) unavailable("目前無法播放日文語音。可使用文字稿練習。");
    };
    playing.current = utterance;
    show("正在播放日文語音");
    try {
      synthesis.speak(utterance);
    } catch {
      if (finish()) unavailable("目前無法播放日文語音。可使用文字稿練習。");
    }
  }

  return { speak, stop, message: target => status?.target === target ? status.message : "" };
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function AudioPractice({ title, passage, target, audio }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="study-practice">
        <JapanesePassage passage={passage} />
        <div className="study-actions">
          <button className="study-button" type="button" onClick={() => audio.speak(passage.text, target)}>播放日文</button>
        </div>
        <p className="study-audio-status" role="status">{audio.message(target)}</p>
        <details>
          <summary>文字稿與翻譯</summary>
          <p className="study-passage-text" lang="ja">{passage.text}</p>
          <p className="study-passage-text">{passage.translation}</p>
        </details>
      </div>
    </section>
  );
}

function LessonStudy({ index, unit, headingRef, audio, onComplete, onAnswer }) {
  const [attempt, setAttempt] = useState(0);
  const lesson = lessons[index];
  const nextView = lessons[index + 1]?.id ?? "final";
  const nextLabel = nextView === "final" ? "前往總複習" : "繼續下一堂";

  return (
    <article className="study-panel study-lesson">
      <header>
        <span className="study-eyebrow">第 {index + 1} 堂 · {unit.title}</span>
        <h2 ref={headingRef} tabIndex={-1}>{lesson.title}</h2>
        <p className="study-muted">{lesson.goal}</p>
      </header>
      <section>
        <h3>句型</h3>
        <dl className="study-grammar">
          {lesson.grammar.map(([pattern, explanation, example, translation, note]) => (
            <div key={pattern}>
              <dt>{pattern}</dt>
              <dd>{explanation}</dd>
              <dd><span lang="ja">{example}</span>{translation && <>{"　"}{translation}</>}</dd>
              {note && <dd><small>{note}</small></dd>}
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h3>單字</h3>
        <ul className="study-vocab">
          {lesson.vocabulary.map(([word, reading, meaning]) => {
            const target = `word-${word}`;
            return (
              <li key={word}>
                <div className="study-vocab-entry">
                  <div>
                    <strong lang="ja"><ruby>{word}<rt>{reading}</rt></ruby></strong>
                    <small>{meaning}</small>
                  </div>
                  <button
                    className="study-button study-vocab-play"
                    type="button"
                    aria-label={`播放 ${word} 的日文讀音`}
                    onClick={() => audio.speak(reading, target)}
                  >
                    播放
                  </button>
                </div>
                <p className="study-audio-status" role="status">{audio.message(target)}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h3>漢字與例詞</h3>
        <ul className="study-vocab">
          {lesson.kanji.map(([character, word, reading]) => (
            <li key={character} lang="ja"><strong>{character}</strong><small><ruby>{word}<rt>{reading}</rt></ruby></small></li>
          ))}
        </ul>
      </section>
      <AudioPractice title="情境對話" passage={lesson.dialogue} target="dialogue" audio={audio} />
      <AudioPractice title="短讀解" passage={lesson.reading} target="reading" audio={audio} />
      <section>
        <h3>課後練習</h3>
        <div className="study-actions">
          <button className="study-button study-primary" type="button" onClick={() => { audio.stop(); setAttempt(attempt + 1); }}>開始 10 題練習</button>
        </div>
        {attempt > 0 && (
          <JapaneseStudyQuiz
            key={attempt}
            questions={lesson.quiz}
            onComplete={onComplete}
            onAnswer={onAnswer}
            audio={audio}
            nextLink={<Link className="study-button" to={studyLink(nextView)}>{nextLabel}</Link>}
          />
        )}
      </section>
      <div className="study-actions">
        {index > 0 && <Link className="study-button" to={studyLink(lessons[index - 1].id)}>上一堂</Link>}
        <Link className="study-button" to={studyLink(nextView)}>{nextLabel}</Link>
      </div>
    </article>
  );
}

const kanaScripts = ["平假名", "片假名"];
const kanaTables = kanaScripts.map((_, scriptIndex) => kanaRows.map(row => {
  const readings = row[2].split(" ");
  return {
    label: row[0][0],
    cells: [...row[scriptIndex]].map((character, column) => (
      character === " " ? null : { character, roman: readings[column] }
    )),
  };
}));

function KanaStudy({ active, headingRef, audio }) {
  const [script, setScript] = useState(0);
  const [quiz, setQuiz] = useState(null);
  const rows = kanaTables[script];

  function changeScript(index) {
    if (script === index) return;
    audio.stop();
    setScript(index);
    setQuiz(null);
  }

  function startQuiz() {
    const entries = rows.flatMap(row => row.cells).filter(Boolean);
    const questions = shuffle(entries).slice(0, 10).map(({ character, roman }) => {
      const distractors = shuffle(entries.filter(entry => entry.roman !== roman)).slice(0, 3);
      const options = shuffle([roman, ...distractors.map(entry => entry.roman)]);
      return { id: character, prompt: character, options, answer: options.indexOf(roman), explanation: `${character} 的羅馬字是 ${roman}。`, language: "ja-Latn" };
    });
    setQuiz({ questions, attempt: (quiz?.attempt ?? 0) + 1 });
  }

  return (
    <section hidden={!active}>
      <div className="study-panel">
        <h2 ref={active ? headingRef : null} tabIndex={-1}>五十音快複習</h2>
        <p className="study-muted">找一下容易混淆的字。點選假名可試聽讀音。</p>
        <div className="study-segmented" role="group" aria-label="假名種類">
          {kanaScripts.map((name, index) => (
            <button key={name} className="study-button" type="button" aria-pressed={index === script} onClick={() => changeScript(index)}>{name}</button>
          ))}
        </div>
        <p className="study-audio-status" role="status">{audio.message("kana") || kanaNote}</p>
        <table className="study-kana-table" aria-label={`${kanaScripts[script]}五十音表`}>
          <thead><tr><th scope="col">行</th>{[..."aiueo"].map(vowel => <th key={vowel} scope="col">{vowel}</th>)}</tr></thead>
          <tbody>
            {rows.map(({ label, cells }) => (
              <tr key={label}>
                <th scope="row" lang="ja">{label}</th>
                {cells.map((cell, column) => (
                  <td key={column}>
                    {cell && (
                      <button
                        className="study-kana-cell"
                        type="button"
                        aria-label={`${cell.character}，${cell.roman}，播放讀音`}
                        onClick={() => audio.speak(cell.roman === "wo" ? "お" : cell.character, "kana")}
                      >
                        <span lang="ja">{cell.character}</span><small>{cell.roman}</small>
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="study-panel study-panel-stack" aria-labelledby="study-kana-quiz-heading">
        <h3 id="study-kana-quiz-heading">10 題假名辨讀</h3>
        <p className="study-muted">看假名選羅馬字，答完可以重練錯題。</p>
        <div className="study-actions">
          <button className="study-button study-primary" type="button" onClick={startQuiz}>開始測驗</button>
        </div>
        {quiz && <JapaneseStudyQuiz key={quiz.attempt} questions={quiz.questions} />}
      </section>
    </section>
  );
}

function CourseProgress({ completed }) {
  return (
    <>
      <label className="study-progress-text" htmlFor="study-lesson-progress">已完成 {completed.size} / {lessons.length} 堂</label>
      <progress id="study-lesson-progress" value={completed.size} max={lessons.length} />
    </>
  );
}

function LessonLinks({ unit, completed, current }) {
  return (
    <div className="study-side-links">
      {unit.lessons.map(lesson => (
        <Link key={lesson.id} to={studyLink(lesson.id)} aria-current={lesson.id === current ? "step" : undefined}>
          <small>{completed.has(lesson.id) ? "已完成" : `第 ${lesson.id.split("-")[1]} 堂`}</small>
          <span>{lesson.title}</span>
        </Link>
      ))}
    </div>
  );
}

function StudyOverview({ headingRef, completed, missedCount }) {
  const next = lessons.find(lesson => !completed.has(lesson.id));
  let startLabel = "開始第一堂";
  if (!next) startLabel = "開始總複習";
  else if (completed.size) startLabel = `繼續學習：${next.title}`;

  return (
    <>
      <div className="study-hero">
        <span className="study-hero-label">JLPT N5 自學</span>
        <h1 ref={headingRef} tabIndex={-1}>從生活情境學日文</h1>
        <p>從自我介紹到在日本搭車、點餐和看公告。24 堂課循序練習文字、詞彙、文法、讀解和聽解。</p>
        <div className="study-actions">
          <Link className="study-button study-primary" to={studyLink(next?.id ?? "final")}>{startLabel}</Link>
          <Link className="study-button study-secondary" to={studyLink("review")}>複習錯題（{missedCount}）</Link>
        </div>
        <span className="study-hero-glyph" lang="ja" aria-hidden="true">ことば</span>
      </div>
      <section className="study-panel" aria-labelledby="study-overview-heading">
        <h2 id="study-overview-heading">N5 課程總覽</h2>
        <CourseProgress completed={completed} />
        <div className="study-unit-grid">
          {units.map((unit, index) => (
            <article key={unit.id} className="study-unit">
              <p className="study-unit-number">單元 {index + 1} · {unit.lessons.filter(lesson => completed.has(lesson.id)).length} / {unit.lessons.length} 堂</p>
              <h3>{unit.title}</h3>
              <LessonLinks unit={unit} completed={completed} />
              <Link className="study-button" to={studyLink(unit.id)}>單元 {index + 1} 複習</Link>
            </article>
          ))}
        </div>
      </section>
      <div className="study-road-links">
        <a href="https://www.jlpt.jp/about/levelsummary.html">JLPT 官方能力分級</a>
        <a href="https://www.jlpt.jp/samples/sampleindex.html">JLPT 官方題型範例</a>
      </div>
    </>
  );
}

function AssessmentStudy({ title, description, questions, audio, onAnswer, headingRef, children }) {
  const [attempt, setAttempt] = useState(null);

  function start() {
    audio.stop();
    setAttempt({ questions, key: (attempt?.key ?? 0) + 1 });
  }

  return (
    <section className="study-panel">
      <h2 ref={headingRef} tabIndex={-1}>{title}</h2>
      <p className="study-muted">{description}</p>
      {children}
      {questions.length > 0 && (
        <div className="study-actions">
          <button className="study-button study-primary" type="button" onClick={start}>開始 {questions.length} 題練習</button>
        </div>
      )}
      {attempt && (
        <JapaneseStudyQuiz
          key={attempt.key}
          questions={attempt.questions}
          onAnswer={onAnswer}
          audio={audio}
          nextLink={<Link className="study-button" to={studyLink("overview")}>回課程總覽</Link>}
        />
      )}
    </section>
  );
}

function WrongAnswerStudy({ missed, ...props }) {
  const questions = [...missed].map(id => questionsById.get(id));
  const topics = new Map();

  for (const { topic } of questions) {
    topics.set(topic, (topics.get(topic) ?? 0) + 1);
  }
  const orderedTopics = [...topics].sort((first, second) => second[1] - first[1]);

  return (
    <AssessmentStudy
      {...props}
      title="錯題簿"
      description={questions.length
        ? `共有 ${questions.length} 題待複習。每輪從最早加入的 10 題開始，答對後自動移除。`
        : "目前沒有待複習的錯題。課後、單元或總複習答錯的題目會出現在這裡。"}
      questions={questions.slice(0, 10)}
    >
      {orderedTopics.length > 0 && (
        <section className="study-panel-stack">
          <h3>優先加強</h3>
          <ul className="study-topics">
            {orderedTopics.map(([topic, count]) => <li key={topic}>{topic} <strong>{count} 題</strong></li>)}
          </ul>
        </section>
      )}
    </AssessmentStudy>
  );
}

export default function JapaneseStudy() {
  const { key: locationKey, search } = useLocation();
  const requestedView = new URLSearchParams(search).get("view");
  const lessonIndex = lessons.findIndex(lesson => lesson.id === requestedView);
  const assessmentUnit = units.find(unit => unit.id === requestedView);
  const lessonUnit = units[Math.floor(lessonIndex / 4)];
  const view = lessonUnit || assessmentUnit || ["kana", "review", "final"].includes(requestedView)
    ? requestedView : "overview";
  const activeNav = lessonUnit || assessmentUnit ? "overview" : view;
  const [progress, setProgress] = useState(readProgress);
  const progressRef = useRef(progress);
  const { completed, missed, canSave } = progress;
  const audio = useStudyAudio(view);
  const headingRef = useRef(null);
  const mainRef = useRef(null);
  const previousLocationKey = useRef(locationKey);

  useEffect(() => {
    if (previousLocationKey.current !== locationKey) headingRef.current?.focus();
    previousLocationKey.current = locationKey;
  }, [locationKey]);

  function saveProgress(updated) {
    let saved = true;
    try {
      saveStudyProgress(window.localStorage, updated);
    } catch {
      saved = false;
    }
    const next = { ...updated, canSave: saved };
    progressRef.current = next;
    setProgress(next);
  }

  function markComplete(id) {
    const current = progressRef.current;
    if (current.completed.has(id) && current.canSave) return;
    saveProgress({ ...current, completed: new Set([...current.completed, id]) });
  }

  function recordAnswer(id, correct) {
    const current = progressRef.current;
    const next = updateStudyAnswer(current, id, correct);
    if (next !== current || !current.canSave) saveProgress(next);
  }

  const assessmentProps = { audio, onAnswer: recordAnswer, headingRef };

  return (
    <div className="japaneseStudy" lang="zh-Hant-TW">
      <title>日文自習室｜JLPT N5</title>
      <button type="button" className="study-skip" onClick={() => mainRef.current?.focus()}>跳到學習內容</button>
      <header className="study-top">
        <div className="study-wrap">
          <Link className="backBtn" to="/">← 返回桌面</Link>
          <Link className="study-brand" to={studyLink("overview")}>
            <span className="study-mark" lang="ja" aria-hidden="true">あ</span>日文自習室
          </Link>
          <nav aria-label="學習導覽">
            {studyNav.map(([target, label]) => (
              <Link key={target} to={studyLink(target)} aria-current={activeNav === target ? "page" : undefined}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="study-wrap" ref={mainRef} tabIndex={-1}>
        {!canSave && <p className="study-save-note" role="status">目前無法儲存進度與錯題，這次開啟期間仍可繼續學習。</p>}
        {view === "overview" && <StudyOverview headingRef={headingRef} completed={completed} missedCount={missed.size} />}
        {lessonUnit && (
          <div className="study-layout">
            <aside className="study-panel study-side">
              <h2>{lessonUnit.title}</h2>
              <CourseProgress completed={completed} />
              <LessonLinks unit={lessonUnit} completed={completed} current={view} />
              <div className="study-actions">
                <Link className="study-button" to={studyLink(lessonUnit.id)}>單元複習</Link>
              </div>
            </aside>
            <LessonStudy
              key={view}
              index={lessonIndex}
              unit={lessonUnit}
              headingRef={headingRef}
              audio={audio}
              onComplete={() => markComplete(view)}
              onAnswer={recordAnswer}
            />
          </div>
        )}
        <KanaStudy active={view === "kana"} headingRef={headingRef} audio={audio} />
        {assessmentUnit && (
          <AssessmentStudy
            {...assessmentProps}
            key={view}
            title={`${assessmentUnit.title} · 單元複習`}
            description="用 12 道新題練習本單元的文字與詞彙、文法、讀解和聽解。"
            questions={assessmentUnit.quiz}
          />
        )}
        {view === "review" && <WrongAnswerStudy {...assessmentProps} missed={missed} />}
        {view === "final" && (
          <AssessmentStudy
            {...assessmentProps}
            title="N5 總複習"
            description="36 題分成文字與詞彙、文法、讀解和聽解四類，每類 9 題。完成後可查看各類正確率。"
            questions={finalQuiz}
          />
        )}
      </main>
    </div>
  );
}
