const RobotApp = require("./src/RobotApp");
const RobotSimulator = require("./src/RobotSimulator");
const Table = require("./src/Table");
const Robot = require("./src/Robot");

const simulator = new RobotSimulator(new Table(5, 5), new Robot());
const robotApp = new RobotApp(simulator);

robotApp.start();
