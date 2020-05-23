import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import http from 'http';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

import { setupWebSocket } from './websocket';

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

app.use(express.json());
app.use(cors());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default server;
