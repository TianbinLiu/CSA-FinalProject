class Person extends GameObject {
    constructor(config) {
      super(config);
      this.isPlayerControlled = config.isPlayerControlled || false;
      this.vxl = 0;
      this.vxr = 0;
      this.vy = 0;
    }
  
    update(){
      if (this.isPlayerControlled){
          this.x += this.vxl;
          this.x += this.vxr;
          this.y += this.vy;
      }
    }
    
  }