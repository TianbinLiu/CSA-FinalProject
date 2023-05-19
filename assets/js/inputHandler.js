console.log("inputHandler.js loaded")

let vxr = 0;
let vxl = 0;
let vy = 0;


let persondirection = "right";
let realdirection = "right";
let canMove = false;
let checkifwalkingright;
let checkifwalkingup;
let checkifwalkingdown;
let checkifwalkingleft;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight'){
        realdirection = "right";
        persondirection="right";
        checkifwalkingright = true;
        vxr = 1;
    } 
    if (event.code == 'ArrowLeft') {
        realdirection = "left";
        persondirection="left";
        checkifwalkingleft = true;
        vxl = -1;
    }
    if (event.code == 'ArrowDown') {
        realdirection = "down";
        checkifwalkingdown = true;
        vy = 1;
    }
    if (event.code == 'ArrowUp') {
        realdirection = "up";
        checkifwalkingup = true;
        vy = -1
    };
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') {
        if(checkifwalkingleft){
            realdirection = "left";
            persondirection="left";
        }
        checkifwalkingright = false;
        vxr = 0
    };
    if (event.code == 'ArrowLeft') {
        if(checkifwalkingright){
            realdirection = "right";
            persondirection="right";
        }
        checkifwalkingleft = false;
        vxl = 0
    };
    if (event.code == 'ArrowDown') {
        if(checkifwalkingdown){
            realdirection = "down";
        }
        checkifwalkingdown = false;
        vy = 0
    };
    if (event.code == 'ArrowUp') {
        if(checkifwalkingup){
            realdirection = "up";
        }
        checkifwalkingup = false;
        vy = 0
    };
})
  
