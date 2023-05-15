console.log("inputHandler.js loaded")

addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight') vxr = 5;
    if (event.code == 'ArrowLeft') vxl = -5;
    if (event.code == 'ArrowDown') vy = 5;
    if (event.code == 'ArrowUp') vy = -5;
})

addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') vxr = 0;
    if (event.code == 'ArrowLeft') vxl = 0;
    if (event.code == 'ArrowDown') vy = 0;
    if (event.code == 'ArrowUp') vy = 0;
})
