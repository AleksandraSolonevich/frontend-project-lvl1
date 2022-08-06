import games from '../../src/index.js';

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

const nod = (numberOne, numberTwo) => {
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

const trueAnswers = [
  nod(randomNumbersOne[0], randomNumbersTwo[0]),
  nod(randomNumbersOne[1], randomNumbersTwo[1]),
  nod(randomNumbersOne[2], randomNumbersTwo[2]),
];

games(rules, questionData, trueAnswers);
