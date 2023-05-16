console.log("Main.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const observer = new ResizeObserver((entries) => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
});
observer.observe(canvas)


let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let  vy = 0;

const character = new Image();
character.onload = () => {
    ctx.drawImage(
        character,
        0,
        0,
        37,
        50,
        x,
        y,
        37,
        50,
    )
}
character.src="images/character/adventurer-v1.5-Sheet.png";

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    x += vxl;
    x += vxr;
    y += vy;
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(update)
}
update()
