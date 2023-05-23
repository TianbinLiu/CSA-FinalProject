console.log("inputHandler.js loaded")

let vxl = 0;
let vxr = 0;
let vyup = 0;
let vydown = 0;


let persondirection = "right";
let realdirection = "right";
let canMovexl = false;
let canMovexr = false;
let canMoveyup = false;
let canMoveydown = false;
let checkifwalkingright;
let checkifwalkingup;
let checkifwalkingdown;
let checkifwalkingleft;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight'){
        persondirection="right";
        realdirection = "right";
        checkifwalkingright = true;
        vxr = 1;
    } 
    if (event.code == 'ArrowLeft') {
        persondirection="left";
        realdirection = "left";
        checkifwalkingleft = true;
        vxl = -1;
    }
    if (event.code == 'ArrowDown') {
        checkifwalkingdown = true;
        realdirection = "down";
        vydown = 1;
    }
    if (event.code == 'ArrowUp') {
        checkifwalkingup = true;
        realdirection = "up";
        vyup = -1;
    };
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') {
        if(checkifwalkingleft){
            vxr = 0
        }
        checkifwalkingright = false;
    };
    if (event.code == 'ArrowLeft') {
        if(checkifwalkingright){
            vxl = 0
        }
        checkifwalkingleft = false;
    };
    if (event.code == 'ArrowDown') {
        if(checkifwalkingup){
            vydown = 0
        }
        checkifwalkingdown = false;

    };
    if (event.code == 'ArrowUp') {
        if(checkifwalkingdown){
            vyup = 0
        }
        checkifwalkingup = false;

    };
})
  
