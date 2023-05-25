class OverworldMap {
  constructor(config) {
    this.overworld = null;
    this.gameObjects = config.gameObjects;
    this.cutsceneSpaces = config.cutsceneSpaces || {};
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
        if(npc.id === "npcA"){
          if(((x >= (npc.x - (npc.sizex/4)) && (x <= (npc.x + (npc.sizex/4)))) && ((y >= (npc.y - (npc.sizey/10))) &&  (y <= (npc.y + (npc.sizey/10)))))){
            isReach = true;
          }
        }
        else if(npc.id === "Wizard"){
          if(((x >= ((npc.x - npc.sizex/8) - (npc.sizex/8)) && (x <= ((npc.x - npc.sizex/8) + (npc.sizex/8)))) && ((y >= ((npc.y + npc.sizey/4) - (npc.sizey/40))) &&  (y <= ((npc.y + npc.sizey/4) + (npc.sizey/40)))))){
            isReach = true;
          }
        }
      }
    })
    Object.values(this.walls).forEach(wall => {
      console.log("wall position(x): " + wall.x + ", " + "(y): " + wall.y + ", length: " + wall.sizex + ", width: " + wall.sizey)
      if(((x >= (wall.x+3)) && (x <= (wall.x + wall.sizex + 13))) && ((y >= wall.y) &&  (y <= (wall.y + wall.sizey)))){
        if(wall.wall){
          isReach = true;
        }
        if(!this.isCutscenePlaying && wall.event){
          this.startCutscene( this.cutsceneSpaces[wall.id][0].events );
          wall.event = false;
        }
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

    Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))
  }

  checkForActionCutscene() {
    const hero = this.gameObjects["hero"];
    const nextCoords = utils.heronextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.gameObjects).find(object => {
      let ifisReach = false;
      if(object.isMounted){
        if(object.id === "npcA"){
          if(((nextCoords.x >= (object.x - (object.sizex/4)) && (nextCoords.x <= (object.x + (object.sizex/4)))) && ((nextCoords.y >= (object.y - (object.sizey/10))) &&  (nextCoords.y <= (object.y + (object.sizey/10)))))){
            ifisReach = true;
          }
        }
        else if(object.id === "Wizard"){
          if(((nextCoords.x >= ((object.x - object.sizex/8) - (object.sizex/8)) && (nextCoords.x <= ((object.x - object.sizex/8) + (object.sizex/8)))) && ((nextCoords.y >= ((object.y + object.sizey/4) - (object.sizey/40))) &&  (nextCoords.y <= ((object.y + object.sizey/4) + (object.sizey/40)))))){
            ifisReach = true;
          }
        }

      return ifisReach;
      }
    });
    if (!this.isCutscenePlaying && match && match.talking.length) {
      this.startCutscene(match.talking[0].events)
    }
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
        x: utils.withGrid(6),
        y: utils.withGrid(9),
        sizex: 50,
        sizey: 37,
        id: "npcA",
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheetflip.png",
        behaviorLoop: [
          { type: "stand",  direction: "left", time: 800 },
          { type: "stand",  direction: "right", time: 1200 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "I'm busy..."},
              { type: "textMessage", text: "Go away!"},
            ]
          }
        ]
      }),
    },
    walls: {
      wall1: new GameObject({
        id: "wall1",
        wall: true,
        x: utils.withGrid(6),
        y: utils.withGrid(5),
        sizex: utils.withGrid(2),
        sizey: utils.withGrid(2),
      }),
      wall2: new GameObject({
        id: "wall2",
        wall: true,
        x: utils.withGrid(0),
        y: utils.withGrid(2),
        sizex: utils.withGrid(10),
        sizey: utils.withGrid(1),
      }),
      wall3: new GameObject({
        id: "wall2",
        wall: true,
        x: utils.withGrid(0),
        y: utils.withGrid(2),
        sizex: utils.withGrid(10),
        sizey: utils.withGrid(1),
      }),
      event1: new GameObject({
        id: "event1",
        event: true,
        x: utils.withGrid(4),
        y: utils.withGrid(8),
        sizex: utils.withGrid(1),
        sizey: utils.withGrid(1),
      }),
      door1: new GameObject({
        id: "door1",
        event: true,
        x: utils.withGrid(4),
        y: utils.withGrid(9),
        sizex: utils.withGrid(1),
        sizey: utils.withGrid(1),
      }),
    },
    cutsceneSpaces: {

      ["event1"]: [
        {
          events: [
            { who: "npcA", type: "walk",  direction: "left", spritedirection: "left" },
            { who: "npcA", type: "stand",  direction: "right", time: 500 },
            { type: "textMessage", text:"You can't be in there!"},
            { who: "npcA", type: "walk",  direction: "right", spritedirection: "right" },
            { who: "npcA", type: "walk",  direction: "right", spritedirection: "right" },
          ]
        }
      ],
      ["door1"]: [
        {
          events: [
            { type: "changeMap", map: "classroom" }
          ]
        }
      ]
    }
  },
  classroom: {
    lowerSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/classroom.png",
    upperSrc: "https://tianbinliu.github.io/CSA-FinalProject/images/maps/transparent.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(3),
        sizex: 50,
        sizey: 37,
        id: "hero",
      }),
      Wizard: new Person({
        isMounted: true,
        x: utils.withGrid(12),
        y: utils.withGrid(19),
        sizex: 80,
        sizey: 149,
        id: "Wizard",
        src: "https://tianbinliu.github.io/CSA-FinalProject/images/character/wizard/WizardMrM.png",
        behaviorLoop: [
          { type: "stand",  direction: "right", time: 1200 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "You made it!"},
            ]
          }
        ]
      }),
    }
  },
}