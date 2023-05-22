class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(canMovex && this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        console.log(state.map.isSpaceTaken(this.x,this.y, state.arrow))
        if (state.map.isSpaceTaken(this.x, this.y, state.arrow) && (state.arrow === "left" || state.arrow === "right")) {
          canMovex = false;
        }
        else{
          console.log("canMove(x): " + canMove)
          this.x += vxl;
          this.x += vxr;
          console.log("x position: " + this.x)
        }

      }
      if(canMovey && this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        console.log(state.map.isSpaceTaken(this.x,this.y, state.arrow))
        if (state.map.isSpaceTaken(this.x, this.y, state.arrow) && (state.arrow === "up" || state.arrow === "down")) {
          canMovey = false;
        }
        else{
          console.log("canMove(y): " + canMove)
          this.y += vy;
          console.log("y position: " + this.y)
        }

      }
      if ((!canMovex || !canMovey) && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)) {
        console.log(state.map.isSpaceTaken(this.x,this.y, state.arrow))
        if (!state.map.isSpaceTaken(this.x, this.y, state.arrow) && (state.arrow === "left" || state.arrow === "right")) {
          canMovex = true;
        }
        if (!state.map.isSpaceTaken(this.x, this.y, state.arrow) && (state.arrow === "up" || state.arrow === "down")) {
          canMovey = true;
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