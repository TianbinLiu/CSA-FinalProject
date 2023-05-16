console.log("inputHandler.js loaded")

class inputHandler {
    constructor() {
      this.heldDirections = [];
  
      this.map = {
        "ArrowUp": "up",
        "KeyW": "up",
        "ArrowDown": "down",
        "KeyS": "down",
        "ArrowLeft": "left",
        "KeyA": "left",
        "ArrowRight": "right",
        "KeyD": "right",
      }
    }
  
    get direction() {
      return this.heldDirections[0];
    }
  
    init() {
        addEventListener("keydown", function(event){
            console.log(event.code)
            if (this.map[event.code] == 'right') hero.vxr = 2;
            if (this.map[event.code] == 'left') hero.vxl = -2;
            if (this.map[event.code] == 'down') hero.vy = 2;
            if (this.map[event.code] == 'up') hero.vy = -2;
        })
        
        addEventListener("keyup", function(event){
            if (this.map[event.code] == 'right') hero.vxr = 0;
            if (this.map[event.code] == 'left') hero.vxl = 0;
            if (this.map[event.code] == 'down') hero.vy = 0;
            if (this.map[event.code] == 'up') hero.vy = 0;
        })
  
    }
  
  }