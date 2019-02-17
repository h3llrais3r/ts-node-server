import { Request, Response, Router } from 'express';
import { v1Router } from './v1';

const router: Router = Router();

// Default route
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Rest Api.');
});

// Nested routes
router.use('/v1', v1Router);

export const apiRouter: Router = router;
