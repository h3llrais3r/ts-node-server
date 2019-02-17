import { Request, Response, Router } from 'express';

const router: Router = Router();

// Default route
router.get('/', (req: Request, res: Response) => {
  res.render('home', {
    version: process.env.VERSION
  });
});

export const homeRouter: Router = router;
