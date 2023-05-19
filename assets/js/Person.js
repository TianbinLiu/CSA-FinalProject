class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;

    }

    update(state) {
      this.updateSprite();
      if(canMove){
        if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
          canMove = false;
        }
        this.x += vxl;
        this.x += vxr;
        this.y += vy;
      }
      else if (this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)) {
        console.log(state.map.isSpaceTaken(this.x,this.y, persondirection))
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow
        })
    }
    }

    startBehavior(state, behavior) {
      //Set character direction to whatever behavior has
      this.direction = behavior.direction;
      
      if (behavior.type === "walk") {
  
        //Stop here if space is not free
        if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
          return;
        }
  
        //Ready to walk!
        state.map.moveWall(this.x, this.y, this.direction);
        canMove = true;
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