const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv-safe');
const socketIO = require('socket.io');
const routes = require('./routes');

dotenv.config();
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const port = parseInt(process.env.PORT);
const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(routes);

server.listen(port, () => console.log(`Server started on port ${port}`));
