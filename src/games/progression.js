#!/usr/bin/env node

import games from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arithmeticProgression = (initialValue, diff, length) => {
  const result = [initialValue];
  let lastValue = initialValue;
  for (let i = 1; i < length; i += 1) {
    lastValue += diff;
    result.push(lastValue);
  }
  return result;
};

const addDots = (progression, index) => {
  const progrWihtDots = progression;
  progrWihtDots[index] = '..';
  return progrWihtDots;
};

const progression = () => {
  const rules = 'What number is missing in the progression?';

  const initialValueOfProgr1 = Math.round(Math.random() * 10);
  const initialValueOfProgr2 = Math.round(Math.random() * 10);
  const initialValueOfProgr3 = Math.round(Math.random() * 10);

  const diffOfProgr1 = Math.round(Math.random() * 10);
  const diffOfProgr2 = Math.round(Math.random() * 10);
  const diffOfProgr3 = Math.round(Math.random() * 10);

  const lengthOfProgr1 = getRandomIntInclusive(5, 10);
  const lengthOfProgr2 = getRandomIntInclusive(5, 10);
  const lengthOfProgr3 = getRandomIntInclusive(5, 10);

  const randomIndexOfProgr1 = getRandomIntInclusive(0, (lengthOfProgr1 - 1));
  const randomIndexOfProgr2 = getRandomIntInclusive(0, (lengthOfProgr2 - 1));
  const randomIndexOfProgr3 = getRandomIntInclusive(0, (lengthOfProgr3 - 1));

  const progression1 = arithmeticProgression(initialValueOfProgr1, diffOfProgr1, lengthOfProgr1);
  const progression2 = arithmeticProgression(initialValueOfProgr2, diffOfProgr2, lengthOfProgr2);
  const progression3 = arithmeticProgression(initialValueOfProgr3, diffOfProgr3, lengthOfProgr3);

  const trueAnswers = [
    String(progression1[randomIndexOfProgr1]),
    String(progression2[randomIndexOfProgr2]),
    String(progression3[randomIndexOfProgr3]),
  ];

  const progressionWithDots1 = addDots(progression1, randomIndexOfProgr1);
  const progressionWithDots2 = addDots(progression2, randomIndexOfProgr2);
  const progressionWithDots3 = addDots(progression3, randomIndexOfProgr3);

  const questionData = [
    progressionWithDots1,
    progressionWithDots2,
    progressionWithDots3,
  ];

  return games(rules, questionData, trueAnswers);
};

export default progression;
