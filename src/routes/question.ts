import { Router } from 'express';
import { questionController } from '../controller/question/Question.controller';

import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.post('/', asyncMiddleware(questionController));

export const questionRouter: Router = router;
