import * as express from 'express';

export const app = express();
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' });
});

router.get('/bye', (_req, res) => {
  res.json({ message: 'Bye!' });
});

app.use('/', router);
