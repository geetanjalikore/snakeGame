const fs = require('fs');
const { EventEmitter } = require('events');
const { SnakeGame } = require('./snakeGame.js');
const { Snake } = require('./snake.js');

const latestDirection = (directions) => {
  const allDirections = directions.trim().split('\n');
  return allDirections[allDirections.length - 1];
};

const play = (eventEmitter) => {
  fs.watchFile('directions.txt', () => {
    const directions = fs.readFileSync('directions.txt', 'utf8');
    const direction = latestDirection(directions);
    eventEmitter.emit(direction);
  });
};

const displayGameStatus = (game) => {
  const status = game.status();
  console.log(status);
};

const createEventEmitter = (snake, game) => {
  const eventEmitter = new EventEmitter();
  eventEmitter.on('up', () => {
    snake.up();
    displayGameStatus(game);
  });

  eventEmitter.on('down', () => {
    snake.down();
    displayGameStatus(game);
  });

  eventEmitter.on('left', () => {
    snake.left();
    displayGameStatus(game);
  });

  eventEmitter.on('right', () => {
    snake.right();
    displayGameStatus(game);
  });

  return eventEmitter;
};

const main = () => {
  const snake = new Snake({ x: 5, y: 5 });
  const game = new SnakeGame(snake, { x: 2, y: 4 });

  const eventEmitter = createEventEmitter(snake, game);
  play(eventEmitter);
};

main();
