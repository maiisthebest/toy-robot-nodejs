# toy-robot-nodejs

A toy robot simulator written in NodeJs.

## About the project

This project serves as a simple Toy Robot Simulator command line app created using Vanilla Javascript and NodeJs.

## Getting started

To get started with this project, follow these simple steps:

1. Clone this repository to your local machine
1. Make sure you have `node` and `npm` installed. Follow these [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you don't have either of them yet.
1. `npm install` in the root directory to install all dependencies.
1. `npm start` in the root directory to start the app.
1. The app will start and you can enter commands to play with the robot. Follow the prompts for more details.

### Running app in a container

If you have trouble running the app directly or don't want to install any dependencies, you can run the app in a container using the premade [Dockerfile](./Dockerfile).

1. Make sure you have `docker` installed. Follow these [instructions](https://docs.docker.com/engine/install/) to install. An alternative is `podman` which is also open source ([instructions](https://podman.io/)).
1. Navigate to the root directory and build the image `docker build -t robot-app .`
1. Start the app by entering `docker run -it robot-app npm start`

## Running the tests

This project was created using test-driven development because I truly care about quality 🤩 Many test cases were considered including happy path, error cases, edge cases when developing the app. Test data are part of the test files.

1. `npm test` to run all the unit tests available.

### Testing in a container

You can also run the tests in a container.

1. Follow all the instructions to build the image specified in [Running app in a container](#running-app-in-a-container)
1. Run the tests by entering `docker run -t robot-app npm test`

I hope you find this project enjoyable and fun. Happy roboting 🤖🤖🤖
