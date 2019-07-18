import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import log from './util/log';
import routes from './routes';
class App {
  constructor() {
    this.server = express();
    this.database = mongoose.connect(
      `mongodb://${process.env.DATABASE_URL}:27017/${
        process.env.DATABASE_NAME
      }`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
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
        Company: 'Smart Labs Microservice - Controller',
        Version: '0.0.1',
        Github: 'https://github.com/smart-labs',
        Instagram: '@smart_research_labs',
      })
    );
    this.server.use(routes);
  }
}

export default new App().server;
