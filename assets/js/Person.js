class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        
        if (!state.map.isSpaceTaken(this.x, this.y, persondirection)) {
          if(persondirection === "left" || persondirection === "right"){
            console.log("canMove(x): " + state.map.isSpaceTaken(this.x,this.y, persondirection))
            canMovex = true;
          }
          if(persondirection === "up" || persondirection === "down")
            console.log("canMove(y): " +state.map.isSpaceTaken(this.x,this.y, persondirection))
            canMovey = true;
        }

        if(canMovex){
          if (state.map.isSpaceTaken(this.x, this.y, persondirection) && (persondirection === "left" || persondirection === "right")) {
            canMovex = false;
          }
          else{
            console.log("canMove(x): " + canMovex)
            this.x += vx;
          }
        }


        if(canMovey){
          console.log("check if can move(y): " + state.map.isSpaceTaken(this.x, this.y, persondirection))
          if (state.map.isSpaceTaken(this.x, this.y, persondirection) && (persondirection === "up" || persondirection === "down")) {
            canMovey = false;
          }
          else{
            console.log("canMove(y) : " + canMovey)
            this.y += vy;
          }
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