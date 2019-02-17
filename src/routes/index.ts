import { Request, Response, Router } from 'express';
import { apiRouter } from './api';
import { webRouter } from './web';

const router: Router = Router();

// Default redirect to web
router.get('/', (req: Request, res: Response) => {
  res.redirect(req.baseUrl + '/web');
});

// Routes
router.use('/web', webRouter);
router.use('/api', apiRouter);

export default router;
