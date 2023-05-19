class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(canMove && this.isPlayerControlled){
        if (state.map.isSpaceTaken(this.x, this.y, state.arrow)) {
          canMove = false;
        }
        else{
          console.log("canMove: " + canMove)
          this.x += vxl;
          this.x += vxr;
          this.y += vy;
          console.log("x position: " + this.x + ", y position: " + this.y)
        }

      }
      else if ((checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)) {
        console.log(state.map.isSpaceTaken(this.x,this.y, state.arrow))
        if (!state.map.isSpaceTaken(this.x, this.y, state.arrow)) {
          canMove = true;
        }
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