module.exports = {
  INTRODUCTION_MESSAGE: `
Welcome to TOY ROBOT SIMULATOR!

This application is a simulation of a toy robot moving on a square tabletop of dimensions 5 units x 5 units.
  
To run it, simply enters a valid command and press ENTER. Type 'q' to quit the app.

Valid commands:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

Explanation of commands:
1. PLACE puts the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. Note: The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued.
2. MOVE moves the robot one unit forward in the direction it is currently facing.
3. LEFT and RIGHT rotate the robot 90 degrees without changing the position of the robot.
4. REPORT prints the X,Y and F of the robot.
      `,

  TABLE_WIDTH: 5,
  TABLE_HEIGHT: 5,
};
