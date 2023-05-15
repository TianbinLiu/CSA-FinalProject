console.log("Main.js loaded")



function resize_canvas(){
const canvas = document.getElementById("canvas")
if (canvas.width  < window.innerWidth)
{
    canvas.width  = window.innerWidth;
}

if (canvas.height < window.innerHeight)
{
    canvas.height = window.innerHeight;
}
}

const ctx = canvas.getContext("2d")

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let  vy = 0;

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    x += vxl;
    x += vxr;
    y += vy;
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(update)
}
update()
