const readline = require("readline");

class RobotApp {
  constructor(simulator) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.simulator = simulator;

    this.rl.on("close", () => {
      this.cleanup();
    });
  }

  start() {
    this.promptUser();
  }

  promptUser() {
    this.rl.question("Enter a command (or 'q' to quit): ", (command) => {
      try {
        if (command.trim().toLowerCase() === "q") {
          console.log("See you soon! Exiting...");

          this.rl.close();
        } else {
          console.log(`You entered: ${command}`);
          this.simulator.executeCommand(command);

          this.promptUser();
        }
      } catch (err) {
        console.log(`Error: ${err.message}`);
        this.promptUser();
      }
    });
  }

  cleanup() {
    process.exit(0);
  }
}

module.exports = RobotApp;
