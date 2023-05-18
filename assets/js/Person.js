class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;
      this.checkifwalkingResult = checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup;
    }

    update() {
      this.updateSprite();
      if (this.isPlayerControlled){
        this.x += vxl;
        this.x += vxr;
        this.y += vy;
    }
    }

    updateSprite() {

      if (this.isPlayerControlled && !this.checkifwalkingResult) {
        this.sprite.setAnimation("idle-"+ persondirection);
        return;
      }
  
      if (this.checkifwalkingResult) {
        this.sprite.setAnimation("walk-"+ persondirection);
      }
    }
  }