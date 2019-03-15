var robotjs = require('robotjs'); // http://robotjs.io/docs/syntax

async function workRobot(screenSize) {
    var shy = 1;
    var shySum = 0;

    const col = screenSize.width / 48;
    const row = screenSize.height / 48;

    function successOrLose(colorHex) {
        // Red Green Blue
        const color = {
            r: parseInt(colorHex.substr(0, 2), 16),
            g: parseInt(colorHex.substr(2, 2), 16),
            b: parseInt(colorHex.substr(4, 2), 16)
        };

        if (color.g > color.r && color.g > color.b) {
            return 1;
        } else if (color.r > color.g && color.r > color.b) {
            return 2;
        } else {
            return 0;
        }
    }

    do {
        goToMouse(col * 45, row * 19);
        doubleClick();
        await new Promise(done => setTimeout(done, 100));
        tapKeyboard(shy);
        await new Promise(done => setTimeout(done, 100));
        clickMouse(col * 45, row * 30);

        var rowLoop = 15;
        var endLine = 0;
        do {
            goToMouse(col * 32, row * rowLoop);

            const corrent = successOrLose(
                getColorMousePosition()
                    .toString()
            );

            if (corrent != 0) {
                var mouse = robotjs.getMousePos();
                const correntPosY = successOrLose(
                    getColorMousePosition(mouse.x, mouse.y + 3)
                        .toString()
                );
                const correntPreY = successOrLose(
                    getColorMousePosition(mouse.x, mouse.y - 3)
                        .toString()
                );
                const correntPosX = successOrLose(
                    getColorMousePosition(mouse.x + 4, mouse.y)
                        .toString()
                );
                const correntPreX = successOrLose(
                    getColorMousePosition(mouse.x - 4, mouse.y)
                        .toString()
                );

                if (corrent == correntPreX && corrent == correntPosX && corrent == correntPreY && corrent == correntPosY) {
                    if (corrent == 1) {
                        shy = 1;
                        shySum = 0;
                        console.log(shy);
                        break;
                    } else if (corrent == 2) {
                        shySum = shySum + shy;
                        console.log(shySum);
                        shy = 1 + (shySum / 0.83);
                        console.log(shy);
                        break;
                    }
                }
            }

            if (endLine == 20) break;

            if (rowLoop > 40) {
                rowLoop = rowLoop = 15;
                endLine++;
                await new Promise(done => setTimeout(done, 4000));
            } else {
                rowLoop++;
            }

        } while (true);

        await new Promise(done => setTimeout(done, 1000));

        clickMouse(col * 45, row * 30);

        await new Promise(done => setTimeout(done, 2000));

    } while (true);
}

module.exports = workRobot;