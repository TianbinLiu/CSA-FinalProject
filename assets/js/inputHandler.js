console.log("inputHandler.js loaded")


addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight') vxr = 2;
    if (event.code == 'ArrowLeft') vxl = -2;
    if (event.code == 'ArrowDown') vy = 2;
    if (event.code == 'ArrowUp') vy = -2;
})

addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') vxr = 0;
    if (event.code == 'ArrowLeft') vxl = 0;
    if (event.code == 'ArrowDown') vy = 0;
    if (event.code == 'ArrowUp') vy = 0;
})


