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
}

module.exports = RobotSimulator;
