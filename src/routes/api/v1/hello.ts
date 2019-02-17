import { Request, Response, Router } from 'express';

const router: Router = Router();

// Default route
router.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Nested routes
router.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

export const helloRouter: Router = router;
