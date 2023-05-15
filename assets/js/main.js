console.log("Main.js loaded")

function resize() {
const canvas = document.getElementById("canvas")
var canvasRatio = canvas.height / canvas.width;
var windowRatio = window.innerHeight / window.innerWidth;
var width;
var height;

if (windowRatio < canvasRatio) {
    height = window.innerHeight;
    width = height / canvasRatio;
} else {
    width = window.innerWidth;
    height = width * canvasRatio;
}

canvas.style.width = width + 'px';
canvas.style.height = height + 'px';
}
window.addEventListener('resize', resize, false);

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
