const utils = {
  withGrid(n) {
    return n * 16;
  },

  asGridCoord(x,y) {
    return `${x*16},${y*16}`
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    if (direction === "left") { 
      x += vxr;
    } else if (direction === "right") {
      x += vxl;
    } else if (direction === "up") {
      y += vy;
    } else if (direction === "down") {
      y += vy;
    }
    return {x,y};
  }
}