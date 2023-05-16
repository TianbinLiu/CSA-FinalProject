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
            if (this.map[event.code] == 'right') this.Person.vxr = 2;
            if (this.map[event.code] == 'left') this.Person.vxl = -2;
            if (this.map[event.code] == 'down') this.Person.vy = 2;
            if (this.map[event.code] == 'up') this.Person.vy = -2;
        })
        
        addEventListener("keyup", function(event){
            if (this.map[event.code] == 'right') this.Person.vxr = 0;
            if (this.map[event.code] == 'left') this.Person.vxl = 0;
            if (this.map[event.code] == 'down') this.Person.vy = 0;
            if (this.map[event.code] == 'up') this.Person.vy = 0;
        })
  
    }
  
  }