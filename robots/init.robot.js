var _ = require('../modules/functions.module.js');

async function initRobot() {
    return _.getScreenSize();
}

module.exports = initRobot;