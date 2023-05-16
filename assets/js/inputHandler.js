console.log("inputHandler.js loaded")


addEventListener("keydown", function(event){
    console.log(event.code)
    if (event.code == 'ArrowRight') this.Person.vxr = 2;
    if (event.code == 'ArrowLeft') this.Person.vxl = -2;
    if (event.code == 'ArrowDown') this.Person.vy = 2;
    if (event.code == 'ArrowUp') this.Person.vy = -2;
})

addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight') this.Person.vxr = 0;
    if (event.code == 'ArrowLeft') this.Person.vxl = 0;
    if (event.code == 'ArrowDown') this.Person.vy = 0;
    if (event.code == 'ArrowUp') this.Person.vy = 0;
})


