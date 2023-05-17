console.log("inputHandler.js loaded")

let vxr = 0;
let vxl = 0;
let vy = 0;

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight') vxr = 1;
    if (event.code == 'ArrowLeft') vxl = -1;
    if (event.code == 'ArrowDown') vy = 1;
    if (event.code == 'ArrowUp') vy = -1;
})
        
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') vxr = 0;
    if (event.code == 'ArrowLeft') vxl = 0;
    if (event.code == 'ArrowDown') vy = 0;
    if (event.code == 'ArrowUp') vy = 0;
})
  
