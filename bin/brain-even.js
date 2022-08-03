import games from '../src/index.js';

const isEvenNumber = (number) => {
  let trueAnswers = '';
  if (number % 2 === 0) {
    trueAnswers = 'yes';
  } else {
    trueAnswers = 'no';
  }
  return trueAnswers;
};

const questionData = [
  String(Math.round(Math.random() * 10)),
  String(Math.round(Math.random() * 10)),
  String(Math.round(Math.random() * 10)),
];

const trueAnswers = [
  isEvenNumber(questionData[0]),
  isEvenNumber(questionData[1]),
  isEvenNumber(questionData[3]),
];

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

games(rules, questionData, trueAnswers);
