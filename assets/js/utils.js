const utils = {
  withGrid(n) {
    return n * 16;
  },

  nextPosition(initialX, initialY, direction) {
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

  emitEvent(name, detail) {
    const event = new CustomEvent(name, {
      detail
    });
    document.dispatchEvent(event);
  }
}