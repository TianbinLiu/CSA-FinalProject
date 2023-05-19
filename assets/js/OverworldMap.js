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
      }),
      npc1: new GameObject({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      })
    },
    walls: {
      //"16,16": true
      [utils.asGridCoords(7,6)] : true,
      [utils.asGridCoords(8,6)] : true,
      [utils.asGridCoords(7,7)] : true,
      [utils.asGridCoords(8,7)] : true,
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
      }),
      npcA: new GameObject({
        x: 7*16,
        y: 7*16,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      }),
      npcB: new GameObject({
        x: 6*16,
        y: 6*16,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png"
      })
    }
  },
}