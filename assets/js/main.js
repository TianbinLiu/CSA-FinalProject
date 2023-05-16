console.log("Main.js loaded")

class Overworld {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.observer = new ResizeObserver((entries) => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    });
    observer.observe(canvas)
    }
     
    init() {
        const image = new Image();
        image.onload = () => {
        this.ctx.drawImage(image,0,0)
    };
    image.src = "/images/maps/DemoLower.png";
   
      
    let x = 0;
    let y = 0;
    let vxl = 0;
    let vxr = 0;
    let  vy = 0;

   
    const character = new Image();
    character.onload = () => {
        this.ctx.drawImage(
            character,
            0, //left cut
            0, //top cut
            50, //width of cut
            37, //height of cut
            x,
            y,
            50,
            37,

        )
    }
    character.src="https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheet.png";

    function update(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        x += vxl;
        x += vxr;
        y += vy;
        ctx.fillRect(x,y,50,50)
        requestAnimationFrame(update)
    }
    update()
   
    }
   
   }