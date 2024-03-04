const Table = require("./Table");
const Robot = require("./Robot");
const RobotSimulator = require("./RobotSimulator");

describe("RobotSimulator", () => {
  it("should operate the robot correctly", () => {
    const table = new Table(5, 5);
    const robot = new Robot();
    const simulator = new RobotSimulator(table, robot);

    simulator.place(1, 2, "EAST");
    simulator.move();
    simulator.move();
    simulator.turnLeft();
    simulator.move();

    expect(simulator.report()).toBe("Output: 3,3,NORTH");
  });
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

    it("should throw error given invalid x y coordinates", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      expect(() =>
        simulator.place("some invalid values for x", 0, "NORTH")
      ).toThrow("x is not a valid number");
    });

    it("should throw error given invalid direction", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      expect(() => simulator.place(0, 0, "NORTH EAST")).toThrow(
        "Invalid direction. Direction can only be: NORTH, EAST, SOUTH, WEST"
      );
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
      "should move the robot one unit forward in the direction it is facing given current position ($currentX, $currentY, $currentDirection) and the new position is still inside the table",
      ({ currentX, currentY, currentDirection, newX, newY, newDirection }) => {
        const table = new Table(5, 5);
        const robot = new Robot();
        const simulator = new RobotSimulator(table, robot);

        simulator.place(currentX, currentY, currentDirection);

        simulator.move();

        expect(robot.x).toBe(newX);
        expect(robot.y).toBe(newY);
        expect(robot.direction).toBe(newDirection);
      }
    );

    it.each`
      currentX | currentY | currentDirection
      ${4}     | ${5}     | ${"NORTH"}
      ${5}     | ${0}     | ${"EAST"}
      ${3}     | ${0}     | ${"SOUTH"}
      ${0}     | ${5}     | ${"WEST"}
    `(
      "should NOT move the robot given current position ($currentX, $currentY, $currentDirection) and the new position is outside of the table",
      ({ currentX, currentY, currentDirection }) => {
        const table = new Table(5, 5);
        const robot = new Robot();
        const simulator = new RobotSimulator(table, robot);

        simulator.place(currentX, currentY, currentDirection);

        simulator.move();

        expect(robot.x).toBe(currentX);
        expect(robot.y).toBe(currentY);
        expect(robot.direction).toBe(currentDirection);
      }
    );

    it("should NOT move the robot given the robot is not placed on the table yet", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      simulator.move();

      expect(robot.x).toBe(undefined);
      expect(robot.y).toBe(undefined);
      expect(robot.direction).toBe(undefined);
    });
  });

  describe("turnLeft()", () => {
    it("should rotate the robot 90 degrees to LEFT", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      const currentX = 0;
      const currentY = 0;
      const currentDirection = "NORTH";
      simulator.place(currentX, currentY, currentDirection);

      simulator.turnLeft();

      expect(robot.x).toBe(currentX);
      expect(robot.y).toBe(currentY);
      expect(robot.direction).toBe("WEST");
    });

    it("should NOT turn the robot given the robot is not placed on the table yet", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      simulator.turnLeft();

      expect(robot.x).toBe(undefined);
      expect(robot.y).toBe(undefined);
      expect(robot.direction).toBe(undefined);
    });
  });

  describe("turnRight()", () => {
    it("should rotate the robot 90 degrees to RIGHT", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      const currentX = 1;
      const currentY = 1;
      const currentDirection = "WEST";
      simulator.place(currentX, currentY, currentDirection);

      simulator.turnRight();

      expect(robot.x).toBe(currentX);
      expect(robot.y).toBe(currentY);
      expect(robot.direction).toBe("NORTH");
    });

    it("should NOT turn the robot given the robot is not placed on the table yet", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      simulator.turnRight();

      expect(robot.x).toBe(undefined);
      expect(robot.y).toBe(undefined);
      expect(robot.direction).toBe(undefined);
    });
  });

  describe("report()", () => {
    it("should report the x, y and orientation", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      const x = 0;
      const y = 1;
      const direction = "NORTH";
      const expectedOutput = `Output: ${x},${y},${direction}`;
      simulator.place(x, y, direction);

      const output = simulator.report();

      expect(output).toBe(expectedOutput);
    });

    it("should report the x, y and orientation on multiple report commands", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      const x = 0;
      const y = 1;
      const direction = "NORTH";
      const expectedOutput = `Output: ${x},${y},${direction}`;
      simulator.place(x, y, direction);

      expect(simulator.report()).toBe(expectedOutput);
      expect(simulator.report()).toBe(expectedOutput);
      expect(simulator.report()).toBe(expectedOutput);
    });

    it("should NOT report given the robot is not placed on the table yet", () => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);

      expect(simulator.report()).toBe(undefined);
    });
  });

  describe("executeCommand()", () => {
    it.each`
      command                            | expectedX | expectedY | expectedDirection
      ${"PLACE 0,0,NORTH"}               | ${0}      | ${0}      | ${"NORTH"}
      ${"place 1 , 2,  east"}            | ${1}      | ${2}      | ${"EAST"}
      ${"    Place     5,0 ,  wESt    "} | ${5}      | ${0}      | ${"WEST"}
    `(
      "should execute PLACE command given $command",
      ({ command, expectedX, expectedY, expectedDirection }) => {
        const table = new Table(5, 5);
        const robot = new Robot();
        const simulator = new RobotSimulator(table, robot);

        simulator.executeCommand(command);

        expect(robot.x).toBe(expectedX);
        expect(robot.y).toBe(expectedY);
        expect(robot.direction).toBe(expectedDirection);
      }
    );

    it.each`
      command
      ${"MOVE"}
      ${"move "}
      ${"    mOve , , ,    "}
    `("should execute MOVE command given $command", ({ command }) => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);
      simulator.place(0, 0, "NORTH");

      simulator.executeCommand(command);

      expect(robot.x).toBe(0);
      expect(robot.y).toBe(1);
      expect(robot.direction).toBe("NORTH");
    });

    it.each`
      command
      ${"LEFT"}
      ${"left "}
      ${"    lEFt , , ,    "}
    `("should execute LEFT command given $command", ({ command }) => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);
      simulator.place(0, 0, "NORTH");

      simulator.executeCommand(command);

      expect(robot.x).toBe(0);
      expect(robot.y).toBe(0);
      expect(robot.direction).toBe("WEST");
    });

    it.each`
      command
      ${"RIGHT"}
      ${"right "}
      ${"    righT , , ,    "}
    `("should execute RIGHT command given $command", ({ command }) => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);
      simulator.place(0, 0, "NORTH");

      simulator.executeCommand(command);

      expect(robot.x).toBe(0);
      expect(robot.y).toBe(0);
      expect(robot.direction).toBe("EAST");
    });

    it.each`
      command
      ${"REPORT"}
      ${"report "}
      ${"    rePOrt , , ,    "}
    `("should execute REPORT command given $command", ({ command }) => {
      const table = new Table(5, 5);
      const robot = new Robot();
      const simulator = new RobotSimulator(table, robot);
      simulator.place(0, 0, "NORTH");

      const expectedOutput = `Output: 0,0,NORTH`;
      expect(simulator.executeCommand(command)).toBe(expectedOutput);
    });

    it("should throw error given invalid command", () => {
      const simulator = new RobotSimulator(new Table(5, 5), new Robot());

      expect(() => simulator.executeCommand("RESTART robot")).toThrow(
        "Invalid command. Commands can only be: PLACE, MOVE, LEFT, RIGHT, REPORT"
      );
    });
  });
});
