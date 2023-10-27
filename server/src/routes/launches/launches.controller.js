const { getAllLauches, addNewlaunch, existsLaunchWithId } = require('../../models/launches.model');

function httpGetAllLauches(req, res) {
    return res.status(200).json(Array.from(getAllLauches()));
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if ( !launch.mission || !launch.rocket || ~launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: ' Missing required launch property '
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }


    addNewlaunch(launch);
    res.status(201).json(launch);


}

function httpAbortLaunch(req, res) {
    
    const launchId = req.params.id;

    if (!existsLaunchWithId(launchId))
    {
         return res.status(404). json({
        error: 'launch not found',
    });
    }
   

    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);

}

function abortLaunchById(launchId) {
    const aborted = launch.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}


module.exports = {
    httpGetAllLauches,
    httpAddNewLaunch,
    getAllLauches,
    abortLaunchById,
    httpAbortLaunch
}
