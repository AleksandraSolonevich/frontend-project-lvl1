import readlineSync from 'readline-sync';

const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

const games = (rules, questionData, trueAnswers) => {
  const name = userGreeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questionData[i]}`);

    const userAnswer = readlineSync.question('Your answer:');

    const correctAnswer = trueAnswers[i];

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default games;
