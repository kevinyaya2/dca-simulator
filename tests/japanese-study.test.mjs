import assert from "node:assert/strict";
import test from "node:test";
import { finalQuiz, lessons, questionsById, units } from "../src/data/JapaneseStudy.js";
import { categories } from "../src/data/JapaneseStudyFormat.js";
import { loadStudyProgress, saveStudyProgress, updateStudyAnswer } from "../src/data/JapaneseStudyProgress.js";

function checkCategories(questions, expected) {
  const counts = Object.keys(categories).map(category =>
    questions.filter(question => question.category === category).length,
  );
  assert.deepEqual(counts, expected);
}

test("N5 lessons and assessments contain complete content with unique question IDs and choices", () => {
  assert.equal(lessons.length, 24);
  assert.equal(units.length, 6);
  assert.deepEqual(units.flatMap(unit => unit.lessons), lessons);

  for (const [index, lesson] of lessons.entries()) {
    assert.equal(lesson.id, `lesson-${index + 1}`);
    assert.equal(lesson.vocabulary.length, 20, lesson.id);
    assert.equal(lesson.kanji.length, 4, lesson.id);
    assert.ok([...lesson.vocabulary, ...lesson.kanji].every(row => row.length === 3 && row.every(Boolean)), lesson.id);
    assert.ok(lesson.grammar.length >= 2 && lesson.grammar.every(row => row.length === 5 && row.every(Boolean)), lesson.id);
    for (const passage of [lesson.dialogue, lesson.reading]) {
      assert.ok(passage.text && passage.translation && passage.parts.some(Array.isArray), lesson.id);
      assert.doesNotMatch(passage.text, /[{}]/, lesson.id);
    }
    checkCategories(lesson.quiz, [3, 3, 2, 2]);
  }

  for (const unit of units) {
    assert.equal(unit.lessons.length, 4);
    checkCategories(unit.quiz, [3, 3, 3, 3]);
  }
  checkCategories(finalQuiz, [9, 9, 9, 9]);

  assert.equal(questionsById.size, 348);
  const prompts = new Set();
  for (const question of questionsById.values()) {
    const { id, category, topic, prompt, explanation, options, answer, stimulus } = question;
    assert.ok(prompt && explanation && topic && options[answer], id);
    assert.equal(options.length, 4, id);
    assert.equal(new Set(options).size, 4, id);
    assert.equal(Boolean(stimulus), ["listening", "reading"].includes(category), id);
    if (stimulus) assert.doesNotMatch(stimulus.text, /[{}]/, id);
    const promptKey = JSON.stringify([prompt, stimulus?.text]);
    assert.ok(!prompts.has(promptKey), id);
    prompts.add(promptKey);
  }
});

test("legacy lesson completion transfers and missed questions retain insertion order across saves", () => {
  const values = new Map([["japanese-study.progress.v1", JSON.stringify([0, 3, 4, 3, -1, "1"])]]);
  const storage = {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  const original = loadStudyProgress(storage);
  assert.deepEqual([...original.completed], ["lesson-1", "lesson-4"]);
  assert.equal(original.missed.size, 0);

  const first = updateStudyAnswer(original, "lesson-1-4", false);
  const second = updateStudyAnswer(first, "unit-4-8", false);
  const third = updateStudyAnswer(second, "final-36", false);
  assert.equal(updateStudyAnswer(third, "lesson-1-4", false), third);
  assert.equal(updateStudyAnswer(third, "unknown-question", false), third);
  const corrected = updateStudyAnswer(third, "unit-4-8", true);
  saveStudyProgress(storage, corrected);

  const reloaded = loadStudyProgress(storage);
  assert.deepEqual([...reloaded.completed], ["lesson-1", "lesson-4"]);
  assert.deepEqual([...reloaded.missed], ["lesson-1-4", "final-36"]);
  assert.equal(original.missed.size, 0);
});
