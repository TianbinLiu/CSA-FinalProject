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
        if(event.code == 'ArrowLeft'){
            checkifwalkingright = false;
            return;
        }
        persondirection="right";
        checkifwalkingright = true;
        vxr = 1;
    } 
    if (event.code == 'ArrowLeft') {
        if(event.code == 'ArrowRight'){
            checkifwalkingleft = false;
            return;
        }
        persondirection="left";
        checkifwalkingleft = true;
        vxl = -1;
    }
    if (event.code == 'ArrowDown') {
        if(event.code == 'ArrowUp'){
            checkifwalkingdown = false;
            return;
        }
        checkifwalkingdown = true;
        vy = 1;
    }
    if (event.code == 'ArrowUp') {
        if(event.code == 'ArrowDown'){
            checkifwalkingup = false;
            return;
        }
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
  
