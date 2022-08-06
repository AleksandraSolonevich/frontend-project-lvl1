#!/usr/bin/env node

import games from '../index.js';

const isEvenNumber = (number) => {
  let trueAnswers = '';
  if (number % 2 === 0) {
    trueAnswers = 'yes';
  } else {
    trueAnswers = 'no';
  }
  return trueAnswers;
};

const even = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionData = [
    String(Math.round(Math.random() * 100)),
    String(Math.round(Math.random() * 100)),
    String(Math.round(Math.random() * 100)),
  ];

  const trueAnswers = [
    isEvenNumber(questionData[0]),
    isEvenNumber(questionData[1]),
    isEvenNumber(questionData[2]),
  ];

  return games(rules, questionData, trueAnswers);
};

export default even;
