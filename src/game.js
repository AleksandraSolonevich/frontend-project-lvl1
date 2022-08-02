import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const isEvenNumber = (number) => {
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const theGame = () => {
  const name = userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 10);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer:');
    const correctAnswer = isEvenNumber(randomNumber);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`,
      );
      break;
    }
  }
};

export default theGame;
