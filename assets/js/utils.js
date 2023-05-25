const utils = {
  withGrid(n) {
    return n * 16;
  },

  heronextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    if (direction === "left") { 
      x += -1;
    }
    if (direction === "right") {
      x += 1;
    }
    if (direction === "up") {
      y += -1;
    }
    if (direction === "down") {
      y += 1;
    }
    return {x,y};
  },
  
  oppositeDirection(direction) {
    if (direction === "left") { return "right" }
    if (direction === "right") { return "left" }
    if (direction === "up") { return "down" }
    return "up"
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    const size = 16;
    if (direction === "left") { 
      x -= size;
    } else if (direction === "right") {
      x += size;
    } else if (direction === "up") {
      y -= size;
    } else if (direction === "down") {
      y += size;
    }
    return {x,y};
  },

  emitEvent(name, detail) {
    const event = new CustomEvent(name, {
      detail
    });
    document.dispatchEvent(event);
  }
}