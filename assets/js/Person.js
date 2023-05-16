class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;
    }
  
    update(){
      if (this.isPlayerControlled){
          this.x += vxl;
          this.x += vxr;
          this.y += vy;
      }
    }
    
  }