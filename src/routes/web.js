const express = require("express");
const deviceController = require("../controllers/Device");
const sensorController = require("../controllers/Sensor");

const routes = express.Router();

// Todas as rotas ficaram nesse arquivo
routes.get("/devices", deviceController.index);
routes.get("/sensors/:deviceName", sensorController.index)


module.exports = routes;
