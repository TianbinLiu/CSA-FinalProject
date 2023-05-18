class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;
      this.checkifwalking = (checkifwalkingright || checkifwalkingleft || checkifwalkingdown|| checkifwalkingup);
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

      if (this.isPlayerControlled && !this.checkifwalking) {
        this.sprite.setAnimation("idle-"+ persondirection);
        return;
      }
  
      if (checkifwalking) {
        this.sprite.setAnimation("walk-"+ persondirection);
      }
    }
  }