import { lessons, questionsById } from "./JapaneseStudy.js";

const progressKey = "japanese-study.progress.v2";
const legacyKey = "japanese-study.progress.v1";
const lessonIds = new Set(lessons.map(lesson => lesson.id));

function readList(value) {
  return Array.isArray(value) ? value : [];
}

export function loadStudyProgress(storage) {
  const saved = storage.getItem(progressKey);
  if (saved !== null) {
    const data = JSON.parse(saved);
    return {
      completed: new Set(readList(data?.completed).filter(id => lessonIds.has(id))),
      missed: new Set(readList(data?.missed).filter(id => questionsById.has(id))),
    };
  }

  const legacyProgress = readList(JSON.parse(storage.getItem(legacyKey) || "[]"));
  const completed = new Set(legacyProgress.filter(index => Number.isInteger(index) && index >= 0 && index < 4)
    .map(index => lessons[index].id));
  return { completed, missed: new Set() };
}

export function saveStudyProgress(storage, { completed, missed }) {
  storage.setItem(progressKey, JSON.stringify({ completed: [...completed], missed: [...missed] }));
}

export function updateStudyAnswer(progress, id, correct) {
  const isMissed = !correct;
  if (!questionsById.has(id) || progress.missed.has(id) === isMissed) return progress;
  const missed = new Set(progress.missed);
  if (correct) missed.delete(id);
  else missed.add(id);
  return { ...progress, missed };
}
