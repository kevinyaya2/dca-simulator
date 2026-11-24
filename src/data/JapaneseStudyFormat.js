export const categories = {
  vocabulary: "文字與詞彙",
  grammar: "文法",
  reading: "讀解",
  listening: "聽解",
};

export function parseRows(text) {
  return text.trim().split(/\n/).map(line => line.trim().split("|").map(field => field.trim()));
}

function vocabularyRows(text) {
  return text.trim().split(/\s*；\s*/).map(entry => entry.split("/"));
}

export function passage(text, translation = "") {
  const parts = text.split(/\{([^{}:]+):([^{}:]+)\}/).flatMap((part, index, pieces) => {
    if (index % 3 === 1) return [[part, pieces[index + 1]]];
    return index % 3 === 0 && part ? [part] : [];
  });
  return { parts, text: parts.map(part => Array.isArray(part) ? part[0] : part).join(""), translation };
}

export function question(id, category, topic, row, stimulus) {
  const [prompt, correct, ...rest] = row;
  const explanation = rest.pop();
  const options = [...rest];
  // Rotate the correct answer through all positions deterministically.
  const answer = (Number(id.split("-").at(-1)) - 1) % (options.length + 1);
  options.splice(answer, 0, correct);
  return { id, category, topic, prompt, options, answer, explanation, stimulus };
}

export function lesson(number, title, goal, words, characters, grammar, dialogue, reading, exercises) {
  const id = `lesson-${number}`;
  const vocabulary = vocabularyRows(words);
  const kanji = vocabularyRows(characters);
  const points = parseRows(grammar);
  const [dialogueText, dialogueTranslation] = dialogue;
  const [readingText, readingTranslation] = reading;
  const readingPassage = passage(readingText, readingTranslation);
  const rows = parseRows(exercises);
  const quiz = [
    ...kanji.slice(0, 1).map(([, word, reading]) => question(
      `${id}-1`, "vocabulary", "漢字讀音",
      [`「${word}」怎麼念？`, reading, ...kanji.slice(1).map(entry => entry[2]), `「${word}」讀作 ${reading}。`],
    )),
    ...[0, 4].map((wordIndex, index) => {
      const [word, , meaning] = vocabulary[wordIndex];
      const distractors = vocabulary.slice(wordIndex + 1, wordIndex + 4).map(entry => entry[2]);
      return question(`${id}-${index + 2}`, "vocabulary", title, [
        `「${word}」是什麼意思？`, meaning, ...distractors, `「${word}」是「${meaning}」。`,
      ]);
    }),
    ...rows.map((row, index) => {
      const questionId = `${id}-${index + 4}`;
      if (index < 3) {
        const [topic, ...fields] = row;
        return question(questionId, "grammar", topic, fields);
      }
      if (index < 5) return question(questionId, "reading", "找出短文資訊", row, readingPassage);
      const [script, ...fields] = row;
      return question(questionId, "listening", "聽取關鍵資訊", fields, passage(script));
    }),
  ];
  return { id, title, goal, vocabulary, kanji, grammar: points, dialogue: passage(dialogueText, dialogueTranslation), reading: readingPassage, quiz };
}

export function assessment(id, content) {
  return parseRows(content).map(([type, topic, ...fields], index) => {
    const needsStimulus = type === "reading" || type === "listening";
    const stimulus = needsStimulus ? passage(fields.shift()) : undefined;
    return question(`${id}-${index + 1}`, type, topic, fields, stimulus);
  });
}
