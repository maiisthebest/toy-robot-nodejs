const Table = require("./Table");
const Robot = require("./Robot");
const RobotSimulator = require("./RobotSimulator");

describe("RobotSimulator", () => {
  describe("place()", () => {
    it.each`
      x    | y    | direction
      ${3} | ${4} | ${"NORTH"}
      ${0} | ${0} | ${"EAST"}
      ${5} | ${5} | ${"WEST"}
    `(
      "should place the robot in a new position on the table given ($x, $y, $direction) being inside the table",
      ({ x, y, direction }) => {
        const table = new Table(5, 5);
        const robot = new Robot();
        const simulator = new RobotSimulator(table, robot);

        simulator.place(x, y, direction);

        expect(robot.x).toBe(x);
        expect(robot.y).toBe(y);
        expect(robot.direction).toBe(direction);
      }
    );

    it.each`
      x     | y     | direction
      ${6}  | ${4}  | ${"NORTH"}
      ${0}  | ${6}  | ${"EAST"}
      ${-1} | ${2}  | ${"WEST"}
      ${1}  | ${-1} | ${"WEST"}
    `(
      "should NOT place the robot in a new position on the table given ($x, $y, $direction) being outside of the table",
      ({ x, y, direction }) => {
        const table = new Table(5, 5);
        const robot = new Robot();
        const simulator = new RobotSimulator(table, robot);

        const currentX = 0;
        const currentY = 0;
        const currentDirection = "NORTH";
        simulator.place(currentX, currentY, currentDirection);

        simulator.place(x, y, direction);

        expect(robot.x).toBe(currentX);
        expect(robot.y).toBe(currentY);
        expect(robot.direction).toBe(currentDirection);
      }
    );
  });
});
