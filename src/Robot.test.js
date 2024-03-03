const Robot = require("./Robot");

describe("Robot", () => {
  describe("place()", () => {
    it("should place the robot in a new position", () => {
      const robot = new Robot();
      const x = 2;
      const y = 3;
      const direction = "WEST";

      robot.place(2, 3, "WEST");

      expect(robot.x).toBe(x);
      expect(robot.y).toBe(y);
      expect(robot.direction).toBe(direction);
    });
  });

  describe("isPlaced()", () => {
    it("should return true given the robot is already placed on a table", () => {
      const robot = new Robot();

      robot.place(2, 3, "WEST");

      expect(robot.isPlaced()).toBe(true);
    });

    it("should return false given the robot is not placed on a table yet", () => {
      const robot = new Robot();

      expect(robot.isPlaced()).toBe(false);
    });
  });

  describe("move()", () => {
    it.each`
      currentX | currentY | currentDirection | newX | newY | newDirection
      ${3}     | ${4}     | ${"NORTH"}       | ${3} | ${5} | ${"NORTH"}
      ${0}     | ${0}     | ${"EAST"}        | ${1} | ${0} | ${"EAST"}
      ${3}     | ${3}     | ${"SOUTH"}       | ${3} | ${2} | ${"SOUTH"}
      ${5}     | ${5}     | ${"WEST"}        | ${4} | ${5} | ${"WEST"}
    `(
      "should move the robot one unit forward in the direction it is facing given current position ($currentX, $currentY, $currentDirection)",
      ({ currentX, currentY, currentDirection, newX, newY, newDirection }) => {
        const robot = new Robot();

        robot.place(currentX, currentY, currentDirection);
        robot.move();

        expect(robot.x).toBe(newX);
        expect(robot.y).toBe(newY);
        expect(robot.direction).toBe(newDirection);
      }
    );
  });

  describe("turnLeft()", () => {
    it.each`
      currentX | currentY | currentDirection | newDirection
      ${3}     | ${4}     | ${"NORTH"}       | ${"WEST"}
      ${0}     | ${0}     | ${"EAST"}        | ${"NORTH"}
      ${3}     | ${3}     | ${"SOUTH"}       | ${"EAST"}
      ${5}     | ${5}     | ${"WEST"}        | ${"SOUTH"}
    `(
      "should rotate the robot 90 degrees to LEFT given current position ($currentX, $currentY, $currentDirection)",
      ({ currentX, currentY, currentDirection, newDirection }) => {
        const robot = new Robot();

        robot.place(currentX, currentY, currentDirection);
        robot.turnLeft();

        expect(robot.x).toBe(currentX);
        expect(robot.y).toBe(currentY);
        expect(robot.direction).toBe(newDirection);
      }
    );
  });

  describe("turnRight()", () => {
    it.each`
      currentX | currentY | currentDirection | newDirection
      ${3}     | ${4}     | ${"NORTH"}       | ${"EAST"}
      ${0}     | ${0}     | ${"EAST"}        | ${"SOUTH"}
      ${3}     | ${3}     | ${"SOUTH"}       | ${"WEST"}
      ${5}     | ${5}     | ${"WEST"}        | ${"NORTH"}
    `(
      "should rotate the robot 90 degrees to RIGHT given current position ($currentX, $currentY, $currentDirection)",
      ({ currentX, currentY, currentDirection, newDirection }) => {
        const robot = new Robot();

        robot.place(currentX, currentY, currentDirection);
        robot.turnRight();

        expect(robot.x).toBe(currentX);
        expect(robot.y).toBe(currentY);
        expect(robot.direction).toBe(newDirection);
      }
    );
  });

  describe("report()", () => {
    it("should report the x, y and orientation", () => {
      const robot = new Robot();

      const x = 2;
      const y = 3;
      const direction = "WEST";
      const expectedOutput = `${x},${y},${direction}`;
      robot.place(x, y, direction);

      expect(robot.report()).toBe(expectedOutput);
    });
  });
});
