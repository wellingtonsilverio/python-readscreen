var robotjs = require('robotjs'); // http://robotjs.io/docs/syntax

function getScreenSize() {
    return robotjs.getScreenSize();
}

function getMousePosition() {
    return robotjs.getMousePos();
}

function getColorMousePosition(x = null, y = null) {
    if (x && y) goToMouse(x, y);
    var mouse = getMousePosition();
    return robotjs.getPixelColor(mouse.x, mouse.y);
}

function goToMouse(x, y, delay = null) {
    if (delay) robotjs.setMouseDelay(delay);
    robotjs.moveMouseSmooth(x, y);
}

function clickMouse(x = null, y = null) {
    if (x && y) goToMouse(x, y);
    robotjs.mouseClick();
}

function doubleClick() {
    robotjs.mouseClick("left", true);
    robotjs.keyTap("delete");
}

function tapKeyboard(string) {
    robotjs.typeString(string);
}

function tapKeyboardAndEnter(string) {
    tapKeyboard(string);
    robotjs.keyTap("enter");
}

module.exports = { getScreenSize, getColorMousePosition, clickMouse, doubleClick, tapKeyboardAndEnter, getMousePosition, goToMouse, tapKeyboard };