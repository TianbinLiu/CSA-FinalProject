console.log("inputHandler.js loaded")

let vxr = 0;
let vxl = 0;
let vy = 0;

let direction;
let checkifwalking;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight'){
        direction="right";
        checkifwalking = true;
        vxr = 1;
    } 
    if (event.code == 'ArrowLeft') {
        direction="left";
        checkifwalking = true;
        vxl = -1;
    }
    if (event.code == 'ArrowDown') {
        checkifwalking = true;
        vy = 1;
    }
    if (event.code == 'ArrowUp') {
        checkifwalking = true;
        vy = -1
    };
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') {
        checkifwalking = false;
        vxr = 0
    };
    if (event.code == 'ArrowLeft') {
        checkifwalking = false;
        vxl = 0
    };
    if (event.code == 'ArrowDown') {
        checkifwalking = false;
        vy = 0
    };
    if (event.code == 'ArrowUp') {
        checkifwalking = false;
        vy = 0
    };
})
  
