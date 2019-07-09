const express = require('express');
const requireDir = require('require-dir');
const controllers = requireDir('./controllers');

const routes = express.Router();

// Todas as rotas ficaram nesse arquivo
routes.get('/devices', controllers.Device.index);

routes.get('/sensors/:deviceName', controllers.Sensor.index);

routes.post('/auth/register', controllers.User.create);
routes.post('/auth/login', controllers.User.show);

module.exports = routes;
