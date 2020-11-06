"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;

drawDesign();

function drawDesign() {
    context.fillStyle = Utils.hsl(30, 70, 50);
    drawMickey(width / 2, 350, 100);
}

//REMOVE THIS CODE AND REPLACE WITH YOUR OWN <<<GENERATIVE>>> DESIGN
function drawMickey(x, y, size) {
    let half = size / 2;
    Utils.fillCircle(x, y, size);
    Utils.fillCircle(x - size, y - size, half);
    Utils.fillCircle(x + size, y - size, half);
}