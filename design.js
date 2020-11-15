"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";
import * as Noise from "./scripts/noise.js";

/**
 * Laatste design
*/


//width & height setup
let width = context.canvas.width;
let height = context.canvas.height;


//change gradient colors (HEX or string) for the "shape"
let gradientColor1 = "blue";
let gradientColor2 = "red";

//change number of mountains (perlin noise), transparent shadows and stars shown
let numMountain = 2;
let numShadow = 10;
let numStars = 150;


drawDesign();

//draw everything + parameters
function drawDesign() {
    drawStars();
    drawShape(120); //@param = size of shape, can be changed
    drawMountain(width / 2, 330); //@param = width + size of mountain, can be changed
    drawShadow();
}


function drawMountain(w, sizeMountain){
    for(let i = 0; i < numMountain; i++) {

        //"random" color bewteen the chosen hsl values, 0 = red, 360 = blue
        let randColor = Utils.randomNumber(100,200);
        
        for(let j = 0; j < sizeMountain; j++) {
            
            //draw mountain with perlin noise (code adapted from class excercices)
            let x = w - (sizeMountain / 2) + j;
            let p = Noise.perlinNoise(j/100) * sizeMountain + 390;
            Utils.fillEllipse(x ,p + i * 10,2,2);
            context.fillStyle = Utils.hsl(randColor , 100, 50);
        }

    }
}


function drawShape(sizeShape){

    //random number to define which shape to draw
    let randShape = Utils.randomNumber(1,3);

    //setup and fill shape with gradient
    var gradient = context.createLinearGradient(width/3 * 0.5,width/3 ,width/3 *1.5,0);
    gradient.addColorStop(0,gradientColor1);
    gradient.addColorStop(1,gradientColor2);
    context.fillStyle = gradient;

    if(randShape == 1){
        Utils.fillCircle(width/2, width/3 *0.5,sizeShape);
        
    }else if(randShape == 2) {
        context.fillRect(width/3 * 1.3 ,width/3 * 0.25 , sizeShape * 2,sizeShape * 2);

    } else {
        Utils.fillEllipse(width/2, width/3 *0.5,sizeShape, sizeShape *0.6);
    }
}


function drawShadow(){
    //draw circles randomly under the shape
    for(let i = 0; i < numShadow; i++){
        context.fillStyle = Utils.rgba(Utils.randomNumber(0,255),Utils.randomNumber(0,255),Utils.randomNumber(0,255),Utils.randomNumber(0,50));
        let x = Utils.randomNumber(width/2 , width/3 * 1.5);
        let y = Utils.randomNumber(height/2 * 0.45, height/3 * 1.5);
        Utils.fillCircle(x,y,Utils.randomNumber(20,50));
    }
}

function drawStars(){
    //draw stars
    for(let i = 0; i < numStars; i++){
        context.fillStyle = Utils.hsla(0,100,100,Utils.randomNumber(50,100));
        let x = Utils.randomNumber(width/2 *0.5 , width/3 *3);
        let y = Utils.randomNumber(height/3* 0.5, height);
        Utils.fillCircle(x,y,Utils.randomNumber(5,10));
    }
}



