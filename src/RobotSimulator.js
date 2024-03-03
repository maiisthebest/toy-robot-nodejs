class RobotSimulator {
  constructor(table, robot) {
    this.table = table;
    this.robot = robot;
  }

  place(x, y, direction) {
    if (this.table.isOnTheTable(x, y)) this.robot.place(x, y, direction);
  }

  move() {
    if (this.robot.isPlaced()) {
      const { newX, newY } = this.robot.calculateNewPosition();

      if (this.table.isOnTheTable(newX, newY)) this.robot.move();
    }
  }

  turnLeft() {
    if (this.robot.isPlaced()) this.robot.turnLeft();
  }

  turnRight() {
    if (this.robot.isPlaced()) this.robot.turnRight();
  }

  report() {
    if (this.robot.isPlaced()) return `Output: ${this.robot.report()}`;
  }

  executeCommand(command) {
    const [action, ...args] = command.toUpperCase().trim().split(/\s+/);

    switch (action) {
      case "PLACE":
        this.place(...args.join("").split(","));
        break;

      case "MOVE":
        this.move();
        break;

      case "LEFT":
        this.turnLeft();
        break;

      case "RIGHT":
        this.turnRight();
        break;

      case "REPORT":
        return this.report();
    }
  }
}

module.exports = RobotSimulator;
