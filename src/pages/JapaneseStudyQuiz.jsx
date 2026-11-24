import { Fragment, useEffect, useRef, useState } from "react";
import { categories } from "../data/JapaneseStudyFormat";

export function JapanesePassage({ passage }) {
  return (
    <p className="study-japanese study-passage-text" lang="ja">
      {passage.parts.map((part, index) => (
        <Fragment key={index}>
          {Array.isArray(part) ? <ruby>{part[0]}<rt>{part[1]}</rt></ruby> : part}
        </Fragment>
      ))}
    </p>
  );
}

function QuestionPrompt({ question }) {
  if (question.language === "ja-Latn") {
    return <><span className="study-japanese" lang="ja">{question.prompt}</span> 的羅馬字是什麼？</>;
  }
  return question.prompt;
}

function QuizResults({ round, answers, review, headingRef, restart, questions, nextLink }) {
  const missed = round.filter((question, index) => answers[index].choice !== question.answer);
  const readingPractice = answers.filter(answer => answer.usedTranscript).length;
  const scored = round.filter((_, index) => !answers[index].usedTranscript);
  const correct = round.filter((question, index) => !answers[index].usedTranscript && answers[index].choice === question.answer);
  const assessed = Object.entries(categories).filter(([category]) => round.some(question => question.category === category));

  return (
    <div className="study-light-panel">
      <h3 ref={headingRef} tabIndex={-1}>
        {review ? "重練結果" : "本次結果"} · {scored.length ? `${correct.length} / ${scored.length} 題答對` : "本輪為文字稿練習"}
      </h3>
      {assessed.length > 0 && (
        <dl className="study-score-grid">
          {assessed.map(([category, label]) => {
            const total = scored.filter(question => question.category === category).length;
            const count = correct.filter(question => question.category === category).length;
            return (
              <div key={category}>
                <dt>{label}</dt>
                <dd>{total ? `${count} / ${total}（${Math.round(100 * count / total)}%）` : "未計分"}</dd>
              </div>
            );
          })}
        </dl>
      )}
      {readingPractice > 0 && <p className="study-muted">有 {readingPractice} 題使用文字稿練習，另列於聽解計分之外。</p>}
      {missed.length > 0 ? (
        <ul className="study-review-list">
          {missed.map(question => (
            <li key={question.id}>
              <QuestionPrompt question={question} />{"　"}<strong lang={question.language}>{question.options[question.answer]}</strong>。{question.explanation}
            </li>
          ))}
        </ul>
      ) : <p>這一輪全部答對。</p>}
      <div className="study-actions">
        {missed.length > 0 && (
          <button className="study-button study-primary" type="button" onClick={() => restart(missed, true)}>重練錯題</button>
        )}
        <button className="study-button" type="button" onClick={() => restart(questions, false)}>重做整輪</button>
        {nextLink}
      </div>
    </div>
  );
}

export default function JapaneseStudyQuiz({ questions, onComplete, nextLink, onAnswer, audio }) {
  const [round, setRound] = useState(questions);
  const [review, setReview] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [position, setPosition] = useState(0);
  const [listening, setListening] = useState("");
  const headingRef = useRef(null);
  const nextRef = useRef(null);
  const finished = position === round.length;
  const answer = answers[position];

  useEffect(() => {
    if (answer === undefined) headingRef.current?.focus();
    else nextRef.current?.focus({ preventScroll: true });
  }, [answer, position, round]);

  function restart(nextRound, isReview) {
    audio?.stop();
    setRound(nextRound);
    setReview(isReview);
    setAnswers([]);
    setListening("");
    setPosition(0);
  }

  if (finished) {
    return <QuizResults {...{ round, answers, review, headingRef, restart, questions, nextLink }} />;
  }

  const question = round[position];
  const { category, language, options, explanation, stimulus, id } = question;
  const correct = question.answer;
  const answered = answer !== undefined;
  const lastQuestion = position + 1 === round.length;
  const isListening = category === "listening";
  const canAnswer = !isListening || listening === "heard" || listening === "transcript";

  function choose(choice) {
    if (isListening) audio.stop();
    setAnswers([...answers, { choice, usedTranscript: listening === "transcript" }]);
    onAnswer?.(id, choice === correct);
  }

  function advance() {
    if (lastQuestion && !review) onComplete?.();
    setListening("");
    setPosition(position + 1);
  }

  function showTranscript() {
    audio.stop();
    setListening("transcript");
  }

  return (
    <div className="study-light-panel">
      <small>
        {review && "錯題重練 · "}第 {position + 1} / {round.length} 題
        {category && ` · ${categories[category]}`}
      </small>
      <h3 ref={headingRef} tabIndex={-1}><QuestionPrompt question={question} /></h3>
      {category === "reading" && <div className="study-stimulus"><JapanesePassage passage={stimulus} /></div>}
      {isListening && (
        <div className="study-stimulus">
          {answered || listening === "transcript" ? (
            <>
              <small>文字稿</small>
              <JapanesePassage passage={stimulus} />
            </>
          ) : (
            <>
              <button
                className="study-button"
                type="button"
                onClick={() => audio.speak(stimulus.text, id, setListening)}
              >
                播放聽解
              </button>
              <p className="study-audio-status" role="status">{audio.message(id) || "先播放語音，再選擇答案。"}</p>
              {listening === "unavailable" && (
                <button className="study-button" type="button" onClick={showTranscript}>
                  展開文字稿練習
                </button>
              )}
            </>
          )}
        </div>
      )}
      <div className="study-options">
        {options.map((option, index) => {
          let outcome = "";
          if (answered && index === correct) outcome = " study-right";
          else if (index === answer?.choice) outcome = " study-wrong";
          return (
            <button
              className={`study-button study-option${outcome}`}
              disabled={answered || !canAnswer}
              key={index}
              lang={language}
              onClick={() => choose(index)}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>
      <p className="study-feedback" role="status">
        {answered && (answer.choice === correct ? `答對了。${explanation}` : `正確答案是「${options[correct]}」。${explanation}`)}
      </p>
      {answered && (
        <div className="study-actions">
          <button className="study-button study-primary" onClick={advance} ref={nextRef} type="button">
            {lastQuestion ? "看結果" : "下一題"}
          </button>
        </div>
      )}
    </div>
  );
}
