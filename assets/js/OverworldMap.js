class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0)
  } 
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/DemoLower.png",
    upperSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheet.png"
      })
    }
  },
  Kitchen: {
    lowerSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/KitchenLower.png",
    upperSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5,
      }),
      npcA: new GameObject({
        x: 9,
        y: 6,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheet.png"
      }),
      npcB: new GameObject({
        x: 10,
        y: 8,
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheet.png"
      })
    }
  },
}