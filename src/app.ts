import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { healthRouter } from './routes/health';
import { questionRouter } from './routes/question';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  private routes(): void {
    this.app.use('/api/health', healthRouter);
    this.app.use('/api/8-ball', questionRouter);
  }
}

export default new App().app;
