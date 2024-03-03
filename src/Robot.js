class Robot {
  constructor() {}

  place(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  isPlaced() {
    return this.x !== undefined && this.y !== undefined;
  }

  calculateNewPosition() {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case "NORTH":
        newY++;
        break;
      case "EAST":
        newX++;
        break;
      case "SOUTH":
        newY--;
        break;
      case "WEST":
        newX--;
        break;
    }

    return { newX, newY };
  }

  move() {
    const { newX, newY } = this.calculateNewPosition();

    this.x = newX;
    this.y = newY;
  }
}

module.exports = Robot;
