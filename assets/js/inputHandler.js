console.log("inputHandler.js loaded")

let vx = 0;
let vy = 0;


let persondirection = "right";
let realdirectionx = "right";
let realdirectiony = "up";
let canMovex = false;
let canMovey = false;
let checkifwalkingright;
let checkifwalkingup;
let checkifwalkingdown;
let checkifwalkingleft;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight'){
        persondirection="right";
        realdirectionx = "right";
        checkifwalkingright = true;
        vx = 1;
    } 
    if (event.code == 'ArrowLeft') {
        persondirection="left";
        realdirectionx = "left";
        checkifwalkingleft = true;
        vx = -1;
    }
    if (event.code == 'ArrowDown') {
        checkifwalkingdown = true;
        realdirectiony = "down";
        vy = 1;
    }
    if (event.code == 'ArrowUp') {
        checkifwalkingup = true;
        realdirectiony = "up";
        vy = -1;
    };
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') {
        if(!checkifwalkingleft){
            vx = 0
        }
        checkifwalkingright = false;
    };
    if (event.code == 'ArrowLeft') {
        if(!checkifwalkingright){
            vx = 0
        }
        checkifwalkingleft = false;
    };
    if (event.code == 'ArrowDown') {
        if(!checkifwalkingup){
            vy = 0
        }
        checkifwalkingdown = false;

    };
    if (event.code == 'ArrowUp') {
        if(!checkifwalkingdown){
            vy = 0
        }
        checkifwalkingup = false;

    };
})
  
