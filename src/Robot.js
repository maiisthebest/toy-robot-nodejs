const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
  constructor() {}

  place(x, y, direction) {
    const numX = Number(x);
    if (Number.isNaN(numX)) throw new Error("x is not a valid number");

    const numY = Number(y);
    if (Number.isNaN(numY)) throw new Error("y is not a valid number");

    if (directions.indexOf(direction) === -1)
      throw new Error(
        `Invalid direction. Direction can only be: ${directions.join(", ")}`
      );

    this.x = numX;
    this.y = numY;
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
