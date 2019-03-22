
const robots = {
    init: require('./robots/init.robot.js'),
    work: require('./robots/work.robot.js')
}

// Pedir possições
robots.init()
    .then((positions) => {
        // Trabalhar
        robots.work(positions);
    });

// testrobo@roboiq.com
// TesteRobo01