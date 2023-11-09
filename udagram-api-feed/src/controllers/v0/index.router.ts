import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

router.use('/feed', FeedRouter);

export const IndexRouter: Router = router;
