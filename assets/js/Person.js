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

    startBehavior(state, behavior) {
      //Set character direction to whatever behavior has
      this.direction = behavior.direction;
      
      if (behavior.type === "walk") {
        //Stop here if space is not free
        if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
  
          behavior.retry && setTimeout(() => {
            this.startBehavior(state, behavior)
          }, 10);
  
          return;
        }
  
        //Ready to walk!
        state.map.moveWall(this.x, this.y, this.direction);
        this.movingProgressRemaining = 16;
        this.updateSprite(state);
      }
  
      if (behavior.type === "stand") {
        setTimeout(() => {
          utils.emitEvent("PersonStandComplete", {
            whoId: this.id
          })
        }, behavior.time)
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