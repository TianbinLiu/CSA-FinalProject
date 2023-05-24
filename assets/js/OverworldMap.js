class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
    
    this.isCutscenePlaying = false;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage, 
      utils.withGrid(10.5) - cameraPerson.x, 
      utils.withGrid(6) - cameraPerson.y
      )
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage, 
      utils.withGrid(10.5) - cameraPerson.x, 
      utils.withGrid(6) - cameraPerson.y
    )
  } 
  
  isSpaceTaken(currentX, currentY, direction) {
    const {x,y} = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  heroisSpaceTaken(currentX, currentY, direction) {
    const {x,y} = utils.heronextPosition(currentX, currentY, direction);
    console.log("character(control) move next position(x): " + x + ", " + "(y): " + y)
    let isReach = false;
    Object.values(this.gameObjects).forEach(npc => {
      if(npc.isMounted){
        console.log("npc position(x): " + npc.x + ", " + "(y): " + npc.y + ", length: " + npc.sizex + ", width: " + npc.sizey)
        if(npc.id === "hero" || npc.id === "npcA"){
          if(((x >= (npc.x - (npc.sizex/4)) && (x <= (npc.x + (npc.sizex/4)))) && ((y >= (npc.y - (npc.sizey/10))) &&  (y <= (npc.y + (npc.sizey/10)))))){
            isReach = true;
          }
        }
        else if(npc.id === "Wizard"){
          if(((x >= (npc.x - (npc.sizex/4)) && (x <= (npc.x + (npc.sizex/4)))) && ((y >= (npc.y - (npc.sizey/20))) &&  (y <= (npc.y + (npc.sizey/20)))))){
            isReach = true;
          }
        }
      }
    })
    Object.values(this.walls).forEach(wall => {
      console.log("wall position(x): " + wall.x + ", " + "(y): " + wall.y + ", length: " + wall.sizex + ", width: " + wall.sizey)
      if(((x >= (wall.x+3)) && (x <= (wall.x + wall.sizex + 13))) && ((y >= wall.y) &&  (y <= (wall.y + wall.sizey)))){
        isReach = true;
      }
    })
    return isReach;
  }

  mountObjects() {
    Object.keys(this.gameObjects).forEach(key => {

      let object = this.gameObjects[key];
      object.id = key;

      //TODO: determine if this object should actually mount
      if(key.isMounted){
        object.mount(this);
      }
    })
  }

  async startCutscene(events) {
    this.isCutscenePlaying = true;

    for (let i=0; i<events.length; i++) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      })
      await eventHandler.init();
    }

    this.isCutscenePlaying = false;
  }

}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/DemoLower.png",
    upperSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        sizex: 50,
        sizey: 37,
        id: "hero",
      }),
      npcA: new Person({
        isMounted: true,
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        sizex: 50,
        sizey: 37,
        id: "npcA",
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png",
        behaviorLoop: [
          { type: "stand",  direction: "left", time: 800 },
          { type: "stand",  direction: "right", time: 1200 },
        ]
      }),
      Wizard: new GameObject({
        isMounted: true,
        x: utils.withGrid(3),
        y: utils.withGrid(7),
        sizex: 50,
        sizey: 70,
        id: "Wizard",
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/wizard/WizardMrM.png",
      }),
    },
    walls: {
      wall1: new GameObject({
        x: utils.withGrid(6),
        y: utils.withGrid(5),
        sizex: utils.withGrid(2),
        sizey: utils.withGrid(2),
      })
    }
  },
  Kitchen: {
    lowerSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/KitchenLower.png",
    upperSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: 4*16,
        y: 5*16,
        sizex: 50,
        sizey: 37,
      }),
      npcA: new GameObject({
        x: 7*16,
        y: 7*16,
        sizex: 50,
        sizey: 37,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      }),
      npcB: new GameObject({
        x: 6*16,
        y: 6*16,
        sizex: 50,
        sizey: 37,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      })
    }
  },
}