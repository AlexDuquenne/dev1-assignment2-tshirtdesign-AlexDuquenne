"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";
import * as Noise from "./scripts/noise.js";


/**
 * Dit was mijn eerste versie maar vond het niet goed genoeg, heb een paar delen overgenomen en verbeterd in "Design.js"
 * 
 * Dit is dus versie 1 maar heb het nooit gecommit (problemen met github)
*/


let width = context.canvas.width;
let height = context.canvas.heigth;
let size = 330;
drawDesign();

function drawDesign() {
    drawMountain(width / 2, 400);
    drawCircle(width / 2, height/2, 200);
}

function drawMountain() {
    //kleur moet random uit kleurplalet
    
    let randOpacity = Utils.randomNumber(10,90);
    
    for(let i = 0; i < 15; i++) {
        let randColor = Utils.randomNumber(100,250);
        
        
        for(let j = 0; j < size; j++) {
            
            let x = (width/2) - (size / 2) + j;
            
            if(randOpacity > 20){
                
                let p = Noise.perlinNoise(j/100) * size + 350;
                Utils.fillEllipse(x ,p + i * 10,2,2);
                context.fillStyle = Utils.hsla(randColor , 100, 50, randOpacity);
            } else {
                let p = Noise.perlinNoise(j/150) * size + 300;

                Utils.strokeEllipse(x,p + i * 35,10,20);
                context.strokeStyle = Utils.hsla(randColor , 100, 50, randOpacity);
            }
            
        }

    }
    context.lineWidth = 65;
    context.strokeStyle = "black";
    context.strokeRect(width/3 + 150 , width /3 - 200,325,300 );

        
}

function drawCircle(x, y, size) {
    

    for(let i = 0; i < 11; i++){

        context.fillStyle = Utils.hsl(i *6 , 100, 50);
        for(let j = 0; j < size; j++ ){
            let a = (width / 2) - (size / 2) + j;
            let n = Noise.perlinNoise(j/80) * 150;
            
            Utils.fillCircle(a + 3,n + i * 15 + 150, 3);
        }
    }

    context.lineWidth = 70;
    context.strokeStyle = "black";
    Utils.strokeCircle(width/2, width/3 -350, size  * 6/9);

    
}
