#!/usr/bin/env node

import games from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomOperator = () => {
  const arrayOperations = ['+', '-', '*'];
  const randomIndex = getRandomIntInclusive(0, 2);
  return arrayOperations[randomIndex];
};

const getCorrectAnswer = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    default:
      return numberOne * numberTwo;
  }
};

const calc = () => {
  const rules = 'What is the result of the expression?';

  const randomNumbersOne = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
  ];

  const randomNumbersTwo = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
  ];

  const randomOperators = [
    getRandomOperator(),
    getRandomOperator(),
    getRandomOperator(),
  ];

  const questionData = [
    `${randomNumbersOne[0]} ${randomOperators[0]} ${randomNumbersTwo[0]}`,
    `${randomNumbersOne[1]} ${randomOperators[1]} ${randomNumbersTwo[1]}`,
    `${randomNumbersOne[2]} ${randomOperators[2]} ${randomNumbersTwo[2]}`,
  ];

  const trueAnswers = [
    getCorrectAnswer(randomNumbersOne[0], randomNumbersTwo[0], randomOperators[0]),
    getCorrectAnswer(randomNumbersOne[1], randomNumbersTwo[1], randomOperators[1]),
    getCorrectAnswer(randomNumbersOne[2], randomNumbersTwo[2], randomOperators[2]),
  ];

  return games(rules, questionData, trueAnswers);
};

export default calc;