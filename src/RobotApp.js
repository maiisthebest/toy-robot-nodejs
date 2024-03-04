const readline = require("readline");
const { INTRODUCTION_MESSAGE } = require("./constants");

class RobotApp {
  constructor(simulator) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.rl.on("close", () => {
      this.cleanup();
    });

    this.simulator = simulator;
    this.introMsg = INTRODUCTION_MESSAGE;
  }

  start() {
    console.log(this.introMsg);
    this.promptUser();
  }

  promptUser() {
    this.rl.question("Enter a command (or 'q' to quit): ", (command) => {
      try {
        if (command.trim().toLowerCase() === "q") {
          console.log("See you soon! Exiting...");

          this.rl.close();
        } else {
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
