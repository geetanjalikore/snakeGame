const fs = require('fs');
const { EventEmitter } = require('events');
const { SnakeGame } = require('./snakeGame.js');

const latestDirection = (directions) => {
  const allDirections = directions.trim().split('\n');
  return allDirections[allDirections.length - 1];
};

const getDirection = (eventEmitter) => {
  fs.watchFile('directions.txt', () => {
    const directions = fs.readFileSync('directions.txt', 'utf8');
    const direction = latestDirection(directions);
    eventEmitter.emit(direction);
  });
};

const main = () => {
  const snakePos = { x: 5, y: 5 };
  const fruitPos = { x: 2, y: 4 };
  const snake = new SnakeGame(snakePos, fruitPos);

  const eventEmitter = new EventEmitter();
  eventEmitter.on('up', () => snake.up());
  eventEmitter.on('down', () => snake.down());
  eventEmitter.on('left', () => snake.left());
  eventEmitter.on('right', () => snake.right());

  getDirection(eventEmitter);
};

main();
