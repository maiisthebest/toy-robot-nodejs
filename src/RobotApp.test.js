const readline = require("readline");

const RobotApp = require("./RobotApp");
const RobotSimulator = require("./RobotSimulator");
const Table = require("./Table");
const Robot = require("./Robot");

jest.mock("readline");

describe("RobotApp", () => {
  beforeEach(() => {
    readline.createInterface.mockClear();
  });

  it("should ask for user input", async () => {
    const mockQuestion = jest.fn();
    readline.createInterface.mockReturnValue({
      question: mockQuestion,
      on: jest.fn(),
      close: jest.fn(),
    });

    setTimeout(() => mockQuestion.mock.calls[0][1]("PLACE 0,0,NORTH"), 0);

    const simulator = new RobotSimulator(new Table(5, 5), new Robot());
    const robotApp = new RobotApp(simulator);

    robotApp.start();

    expect(mockQuestion).toHaveBeenCalledWith(
      "Enter a command (or 'q' to quit): ",
      expect.anything()
    );
  });
});
