import { Request, Response } from 'express';
import questionService from '../../services/question/Question.service';

export const questionController = async (req: Request, res: Response) => {
  const question = req.body.question as string;

  try {
    if (!question) throw new Error('no question was given');

    const answer = await questionService(question);
    res.send(answer);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message || err);
  }
};
