import { Router } from 'express';
import requireDir from 'require-dir';
const controllers = requireDir('./controllers');

const routes = new Router();

// Todas as rotas ficaram nesse arquivo
routes.get('/devices', controllers.Device.index);

routes.get('/sensors/:deviceName', controllers.Sensor.index);

routes.post('/auth/register', controllers.User.create);
routes.post('/auth/login', controllers.User.show);

export default routes;
