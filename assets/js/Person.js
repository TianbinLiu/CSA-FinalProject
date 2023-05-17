class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;
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

      if (this.isPlayerControlled && !checkifwalking) {
        this.sprite.setAnimation("idle-"+persondirection);
        return;
      }
  
      if (checkifwalking) {
        this.sprite.setAnimation("walk-"+persondirection);
      }
    }
  }