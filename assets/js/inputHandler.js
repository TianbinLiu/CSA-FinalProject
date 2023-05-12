addEventListener("keydown", function(e){
    if (e.code == 'keyD') vxr = 5;
    if (e.code == 'keyA') vxl = -5;
    if (e.code == 'keyS') vy = 5;
    if (e.code == 'keyW') vy = -5;
})

addEventListener("keyup", function(e){
    if (e.code == 'keyD') vxr = 0;
    if (e.code == 'keyD') vxl = 0;
    if (e.code == 'keyD') vx = 0;
    if (e.code == 'keyD') vx = 0;
})