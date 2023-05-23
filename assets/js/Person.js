class Person extends GameObject {
    constructor(config) {
      super(config);
      this.movingProgressRemaining = 0;
      this.isPlayerControlled = config.isPlayerControlled || false;
  
      this.directionUpdate = {
        "up": ["y", -1],
        "down": ["y", 1],
        "left": ["x", -1],
        "right": ["x", 1],
      }
    }

    update(state) {
      this.heroupdateSprite();
      if(this.isPlayerControlled && (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup)){
        if(!state.map.heroisSpaceTaken(this.x, this.y, realdirectionx)){
          canMovex = true;
        }
        if (!state.map.heroisSpaceTaken(this.x, this.y, realdirectiony)){
          canMovey = true;
        }

        if(canMovex){
          if (state.map.heroisSpaceTaken(this.x, this.y, realdirectionx)) {
            canMovex = false;
          }
          else{
            console.log("canMove(x): " + canMovex)
            this.x += vx;
          }
        }


        if(canMovey){
          
          if (state.map.heroisSpaceTaken(this.x, this.y, realdirectiony)) {
            canMovey = false;
          }
          else{
            console.log("canMove(y) : " + canMovey)
            this.y += vy;
          }
        }
        
        console.log("x position: " + this.x + ", y position: " + this.y)

      }
      if(!this.isPlayerControlled && this.movingProgressRemaining > 0){
        this.updatePosition();
      }
      else{
        this.updateSprite(state)
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

    updatePosition() {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;

      if (this.movingProgressRemaining === 0) {
        //We finished the walk!
        utils.emitEvent("PersonWalkingComplete", {
          whoId: this.id
        })

      }
    }

    heroupdateSprite() {
      let checkifwalkingResult = checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup;
      if (this.isPlayerControlled && !(checkifwalkingResult)) {
        this.sprite.setAnimation("idle-"+ persondirection);
        return;
      }
  
      if (this.isPlayerControlled && checkifwalkingResult) {
        this.sprite.setAnimation("walk-"+ persondirection);
      }
    }

    updateSprite() {
      if (this.movingProgressRemaining > 0) {
        this.sprite.setAnimation("walk-"+this.direction);
        return;
      }
      this.sprite.setAnimation("idle-"+this.direction);    
    }
  }