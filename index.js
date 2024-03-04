const { TABLE_WIDTH, TABLE_HEIGHT } = require("./src/constants");

const RobotApp = require("./src/RobotApp");
const RobotSimulator = require("./src/RobotSimulator");
const Table = require("./src/Table");
const Robot = require("./src/Robot");

const simulator = new RobotSimulator(
  new Table(TABLE_WIDTH, TABLE_HEIGHT),
  new Robot()
);
const robotApp = new RobotApp(simulator);

robotApp.start();
