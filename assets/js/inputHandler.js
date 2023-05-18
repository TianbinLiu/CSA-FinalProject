console.log("inputHandler.js loaded")

let vxr = 0;
let vxl = 0;
let vy = 0;


let persondirection = "right";
let checkifwalkingright;
let checkifwalkingup;
let checkifwalkingdown;
let checkifwalkingleft;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight'){
        persondirection="right";
        checkifwalkingright = true;
        vxr = 1;
    } 
    if (event.code == 'ArrowLeft') {
        persondirection="left";
        checkifwalkingleft = true;
        vxl = -1;
    }
    if (event.code == 'ArrowDown') {
        checkifwalkingdown = true;
        vy = 1;
    }
    if (event.code == 'ArrowUp') {
        checkifwalkingup = true;
        vy = -1
    };
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') {
        checkifwalkingright = false;
        vxr = 0
    };
    if (event.code == 'ArrowLeft') {
        checkifwalkingleft = false;
        vxl = 0
    };
    if (event.code == 'ArrowDown') {
        checkifwalkingdown = false;
        vy = 0
    };
    if (event.code == 'ArrowUp') {
        checkifwalkingup = false;
        vy = 0
    };
})
  
