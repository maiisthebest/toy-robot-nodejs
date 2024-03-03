const Robot = require("./Robot");

describe("Robot", () => {
  describe("place()", () => {
    it("should place the robot in a new position", () => {
      const robot = new Robot();
      const x = 2;
      const y = 3;
      const direction = "WEST";

      robot.place(x, y, direction);

      expect(robot.x).toBe(x);
      expect(robot.y).toBe(y);
      expect(robot.direction).toBe(direction);
    });
  });
});
