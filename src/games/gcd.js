#!/usr/bin/env node

import games from '../index.js';

const letGsd = (numberOne, numberTwo) => {
  let a = numberOne;
  let b = numberTwo;
  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(a + b);
};

const gsd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

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

  const questionData = [
    `${randomNumbersOne[0]} ${randomNumbersTwo[0]}`,
    `${randomNumbersOne[1]} ${randomNumbersTwo[1]}`,
    `${randomNumbersOne[2]} ${randomNumbersTwo[2]}`,
  ];

  const trueAnswers = [
    letGsd(randomNumbersOne[0], randomNumbersTwo[0]),
    letGsd(randomNumbersOne[1], randomNumbersTwo[1]),
    letGsd(randomNumbersOne[2], randomNumbersTwo[2]),
  ];

  return games(rules, questionData, trueAnswers);
};

export default gsd;
