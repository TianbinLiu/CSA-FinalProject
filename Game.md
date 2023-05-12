---
title: Game
layout: default
---
<body onload="update();">
    <canvas id="canvas" width="1000px" height = "600px"></canvas>
</body>

<script src="{{ '/assets/js/main.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"></script>
<script type="text/javascript">
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let  vy = 0;

function update(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height)
    x += vxl;
    x += vxr;
    y += vy;
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(update)
}
update()
    
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
    
    
</script>
