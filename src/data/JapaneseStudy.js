import { lessons1 } from "./JapaneseStudyLessons1.js";
import { lessons2 } from "./JapaneseStudyLessons2.js";
import { lessons3 } from "./JapaneseStudyLessons3.js";
import { finalQuiz, unitQuizzes } from "./JapaneseStudyAssessments.js";

export { finalQuiz };
export const lessons = [...lessons1, ...lessons2, ...lessons3];

const unitTitles = ["開口與日常", "逛街與點餐", "交通與行程", "家庭與生活", "旅行與公共場所", "訊息與綜合應用"];
export const units = unitTitles.map((title, index) => ({
  id: `unit-${index + 1}`,
  title,
  lessons: lessons.slice(index * 4, index * 4 + 4),
  quiz: unitQuizzes[index],
}));

export const questionsById = new Map(
  [...lessons.flatMap(lesson => lesson.quiz), ...unitQuizzes.flat(), ...finalQuiz].map(question => [question.id, question]),
);

export const kanaRows = [
  ["あいうえお", "アイウエオ", "a i u e o"],
  ["かきくけこ", "カキクケコ", "ka ki ku ke ko"],
  ["さしすせそ", "サシスセソ", "sa shi su se so"],
  ["たちつてと", "タチツテト", "ta chi tsu te to"],
  ["なにぬねの", "ナニヌネノ", "na ni nu ne no"],
  ["はひふへほ", "ハヒフヘホ", "ha hi fu he ho"],
  ["まみむめも", "マミムメモ", "ma mi mu me mo"],
  ["や ゆ よ", "ヤ ユ ヨ", "ya - yu - yo"],
  ["らりるれろ", "ラリルレロ", "ra ri ru re ro"],
  ["わ   を", "ワ   ヲ", "wa - - - wo"],
  ["ん    ", "ン    ", "n - - - -"]
];
