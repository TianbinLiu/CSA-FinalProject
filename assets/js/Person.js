class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        
        if(canMovex){
          if (state.map.isSpaceTaken(this.x, this.y, realdirection) && (realdirection === "left" || realdirection === "right")) {
            canMovex = false;
          }
          else{
            console.log("canMove(x): " + canMovex)
            this.x += vx;
          }
        }
        else if(!state.map.isSpaceTaken(this.x, this.y, realdirection) && (realdirection === "left" || realdirection === "right")){
            console.log("canMove(x): " + state.map.isSpaceTaken(this.x,this.y, realdirection))
            canMovex = true;
        }


        if(canMovey){
          console.log("check if can move(y): " + state.map.isSpaceTaken(this.x, this.y, realdirection))
          if (state.map.isSpaceTaken(this.x, this.y, realdirection) && (realdirection === "up" || realdirection === "down")) {
            canMovey = false;
          }
          else{
            console.log("canMove(y) : " + canMovey)
            this.y += vy;
          }
        }
        else if (!state.map.isSpaceTaken(this.x, this.y, realdirection) && (realdirection === "up" || realdirection === "down")){
            console.log("canMove(y): " +state.map.isSpaceTaken(this.x,this.y, realdirection))
            canMovey = true;
        }
        
        console.log("x position: " + this.x + ", y position: " + this.y)

      }
    }

    updateSprite() {
      let checkifwalkingResult = checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup;
      if (this.isPlayerControlled && !(checkifwalkingResult)) {
        this.sprite.setAnimation("idle-"+ persondirection);
        return;
      }
  
      if (checkifwalkingResult) {
        this.sprite.setAnimation("walk-"+ persondirection);
      }
    }
  }