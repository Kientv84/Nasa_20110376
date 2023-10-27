const express = require('express');

const planetsRouter = express.Router();

const {
    getAllLPlanets,
} = require('./plantes.controller') 

planetsRouter.get('/', httpGetALlPlanets);

module.exports = planetsRouter;