const { getAllLPlanets } = require('../../models/planets.model')

function httpGetALlPlanets(req, res) {
    return res.status(200).json(getAllLPlanets);
}

module.exports = {
    httpGetALlPlanets,
    getAllLPlanets
}