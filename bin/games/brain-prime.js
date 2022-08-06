import games from '../../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionData = [
  String(Math.round(Math.random() * 100)),
  String(Math.round(Math.random() * 100)),
  String(Math.round(Math.random() * 100)),
];

const isNumberPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const trueAnswers = [
  isNumberPrime(questionData[0]),
  isNumberPrime(questionData[1]),
  isNumberPrime(questionData[2]),
];

games(rules, questionData, trueAnswers);
