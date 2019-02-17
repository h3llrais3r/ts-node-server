import { Request, Response, Router } from 'express';
import { helloRouter } from './hello';

const router: Router = Router();

// Default route
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Rest Api V1.');
});

// Nested routes
router.use('/hello', helloRouter);

export const v1Router: Router = router;
