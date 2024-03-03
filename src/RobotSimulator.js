class RobotSimulator {
  constructor(table, robot) {
    this.table = table;
    this.robot = robot;
  }

  place(x, y, direction) {
    if (this.table.isOnTheTable(x, y)) this.robot.place(x, y, direction);
  }
}

module.exports = RobotSimulator;
