const readline = require("readline");

const RobotSimulator = require("./src/RobotSimulator");
const Table = require("./src/Table");
const Robot = require("./src/Robot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const simulator = new RobotSimulator(new Table(5, 5), new Robot());

const promptUser = () => {
  rl.question("Enter a command (or 'q' to quit): ", (command) => {
    if (command.trim().toLowerCase() === "q") {
      console.log("See you soon! Exiting...");
      rl.close();
    } else {
      console.log(`You entered: ${command}`);
      simulator.executeCommand(command);

      promptUser();
    }
  });
};

promptUser();

rl.on("close", () => {
  process.exit(0);
});
