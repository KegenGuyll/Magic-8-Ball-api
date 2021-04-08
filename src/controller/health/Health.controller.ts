import { Request, Response } from 'express';
import healthService from '../../services/health/Health.service';

export const healthController = async (req: Request, res: Response) => {
  try {
    const healthResponse = await healthService();
    res.send(healthResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
