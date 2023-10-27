const express = require('express');
const {
    getAllLauches,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/laucnhes', getAllLauches);

module.exports = launchesRouter;