import { Router } from 'express';
import { healthController } from '../controller/health/Health.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/', asyncMiddleware(healthController));

export const healthRouter: Router = router;
