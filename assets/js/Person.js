class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        if(!state.map.isSpaceTaken(this.x, this.y, realdirectionx)){
          canMovex = true;
        }
        if (!state.map.isSpaceTaken(this.x, this.y, realdirectiony)){
          canMovey = true;
        }

        if(canMovex){
          if (state.map.isSpaceTaken(this.x, this.y, realdirectionx)) {
            canMovex = false;
          }
          else{
            console.log("canMove(x): " + canMovex)
            this.x += vx;
          }
        }


        if(canMovey){
          
          if (state.map.isSpaceTaken(this.x, this.y, realdirectiony)) {
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