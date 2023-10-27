const launches = new Map();

let latesFlightNumber = 100;

const launch = {
    flighNumber: 100,
    mission: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flighNumber, launch);

function getAllLauches() {
    return Array.from(launches.values());
}

function addNewlaunch(launch) {
    latesFlightNumber++;
    launches.set(launch.flighNumber, Object.assign(launch), {
         flighNumber: latesFlightNumber,
         customer:['zreo to mastery', 'NASA'],
         success: true,
         upcoming: true,
    }
);}

function existsLaunchWithId(launch) {
    return launches.has(launchId);
}

module.exports = {
    getAllLauches,
    addNewlaunch,
    existsLaunchWithId
};