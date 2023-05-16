console.log("Main.js loaded")

class Overworld {
    constructor(config) {
      this.x=0;  
      this.y=0;
      this.vxl=0;
      this.vxr=0;
      this.vy=0;
      this.element = config.element;
      this.canvas = this.element.querySelector(".game-canvas");
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
    image.src = "https://tianbinliu.github.io/CSA-FinalProject/images/maps/DemoLower.png";

    

    const shadow = new Image();
    shadow.onload = () => {
        this.ctx.drawImage(
            shadow,
            0, //left cut
            0, //top cut
            32, //width of cut
            32, //height of cut
            x,
            y,
            50,
            37,

        )
    }
    shadow.src="https://tianbinliu.github.io/CSA-FinalProject/images/character/shadow.png";

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
    }
    
    update(){
        this.ctx.clearRect(0,0,canvas.width,canvas.height)
        x += vxl;
        x += vxr;
        y += vy;
        this.ctx.fillRect(x,y,50,50)
        requestAnimationFrame(update)
    }
    update()
}