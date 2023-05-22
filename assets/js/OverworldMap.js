class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
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
    console.log("character(control) move next position(x): " + x + ", " + "(y): " + y)
    let isReach = false;
    Object.values(this.gameObjects).forEach(npc => {
      if(npc.isMounted){
        console.log("npc position(x): " + npc.x + ", " + "(y): " + npc.y + ", length: " + npc.sizex + ", width: " + npc.sizey)
        if(((x >= (npc.x - (npc.sizex/4)) && (x <= (npc.x + (npc.sizex/4)))) && ((y >= (npc.y - npc.sizey)) &&  (y <= (npc.y))))){
          isReach = true;
        }
      }
    })
    Object.values(this.walls).forEach(wall => {
      console.log("wall position(x): " + wall.x + ", " + "(y): " + wall.y + ", length: " + wall.sizex + ", width: " + wall.sizey)
      if(((x >= (wall.x-5)) && (x <= (wall.x + wall.sizex + 5))) && ((y >= wall.y) &&  (y <= (wall.y + wall.sizey)))){
        isReach = true;
      }
    })

    return isReach;
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
      }),
      npc1: new GameObject({
        isMounted: true,
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        sizex: 50,
        sizey: 37,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      })
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