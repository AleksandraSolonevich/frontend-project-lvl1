import games from '../index.js';

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

const prime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionData = [
    String(Math.round(Math.random() * 100)),
    String(Math.round(Math.random() * 100)),
    String(Math.round(Math.random() * 100)),
  ];

  const trueAnswers = [
    isNumberPrime(questionData[0]),
    isNumberPrime(questionData[1]),
    isNumberPrime(questionData[2]),
  ];

  return games(rules, questionData, trueAnswers);
};

export default prime;
