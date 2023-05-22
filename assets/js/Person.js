class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        if(canMovexl){
          if (state.map.isSpaceTaken(this.x, this.y, "left")) {
            canMovexl = false;
          }
          else{
            console.log("canMove(x left): " + canMovexl)
            this.x += vxr;
            console.log("x position: " + this.x)
          }
        }else if (!state.map.isSpaceTaken(this.x, this.y, "left")) {
          console.log("canMove(x left): " + state.map.isSpaceTaken(this.x,this.y, "left"))
          canMovexl = true;
        }


        if(canMovexr){
          if (state.map.isSpaceTaken(this.x, this.y, "right")) {
            canMovexr = false;
          }
          else{
            console.log("canMove(x right): " + canMovexr)
            this.x += vxr;
            console.log("x position: " + this.x)
          }
        }else if (!state.map.isSpaceTaken(this.x, this.y, "right")) {
          console.log("canMove(x right): " + state.map.isSpaceTaken(this.x,this.y, "right"))
          canMovexr = true;
        }



        if(canMoveyup){
          if (state.map.isSpaceTaken(this.x, this.y, "up")) {
            canMoveyup = false;
          }
          else{
            console.log("canMove(y up) : " + canMoveyup)
            this.y += vyup;
            console.log("y position: " + this.y)
          }
        }else if (!state.map.isSpaceTaken(this.x, this.y, "up")) {
          console.log("canMove(y up): " +state.map.isSpaceTaken(this.x,this.y, "up"))
          canMoveyup = true;
        }

        if(canMoveydown){
          if (state.map.isSpaceTaken(this.x, this.y, "down")) {
            canMoveydown = false;
          }
          else{
            console.log("canMove(y down) : " + canMoveydown)
            this.y += vydown;
            console.log("y position: " + this.y)
          }
        }else if (!state.map.isSpaceTaken(this.x, this.y, "down")) {
          console.log("canMove(y down): " + state.map.isSpaceTaken(this.x,this.y, "down"))
          canMoveydown = true;
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