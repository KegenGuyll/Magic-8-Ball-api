import { Answer } from '../models/answers';
import answers from '../assets/answers.json';

const possibleAnswers = async (): Promise<Answer> => {
  const randomNumber = await Math.floor(Math.random() * answers.length);

  return answers[randomNumber];
};

export default possibleAnswers;
