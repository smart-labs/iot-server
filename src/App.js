import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { url, flags } from '../config/database';
import helmet from 'helmet';
import cors from 'cors';
import log from './util/log';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.database = mongoose.connect(url, flags);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(log);
  }
  routes() {
    this.server.get('/', (req, res) =>
      res.send({
        Company: 'Smart Labs API',
        Version: '0.0.2',
        Github: 'https://github.com/smart-labs',
        Instagram: '@smart_research_labs',
      })
    );
    this.server.use(routes);
  }
}

export default new App().server;
