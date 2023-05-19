const utils = {
  withGrid(n) {
    return n * 16;
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    if (direction === "left") { 
      x += vxr;
    }
    if (direction === "right") {
      x += vxl;
    }
    if (direction === "up") {
      y += vy;
    }
    if (direction === "down") {
      y += vy;
    }
    return {x,y};
  }
}