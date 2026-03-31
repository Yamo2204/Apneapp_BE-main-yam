import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
  });
});

healthRouter.get('/test', (req, res) => {
  res.json({
    message: 'Test route works!'
  });
});

export default healthRouter;