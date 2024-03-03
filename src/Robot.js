const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
  constructor() {}

  place(x, y, direction) {
    const numberX = Number(x);
    if (Number.isNaN(numberX)) return "x is not a valid number";

    const numberY = Number(y);
    if (Number.isNaN(numberY)) return "y is not a valid number";

    this.x = numberX;
    this.y = numberY;
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

  turnLeft() {
    const newDirectionIndex = directions.indexOf(this.direction) - 1;

    this.direction =
      newDirectionIndex < 0
        ? directions[newDirectionIndex + directions.length]
        : directions[newDirectionIndex];
  }

  turnRight() {
    const newDirectionIndex = directions.indexOf(this.direction) + 1;

    this.direction =
      newDirectionIndex >= directions.length
        ? directions[newDirectionIndex - directions.length]
        : directions[newDirectionIndex];
  }

  report() {
    return `${this.x},${this.y},${this.direction}`;
  }
}

module.exports = Robot;
