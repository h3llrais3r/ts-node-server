import { Request, Response, Router } from 'express';
import { homeRouter } from './home';

const router: Router = Router();

// Default redirect to home
router.get('/', (req: Request, res: Response) => {
  res.redirect(req.baseUrl + '/home');
});

// Nested routes
router.use('/home', homeRouter);

export const webRouter: Router = router;
