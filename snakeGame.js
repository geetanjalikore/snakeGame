/* eslint-disable no-console */
class SnakeGame {
  #snake;
  #fruit;
  #score;

  constructor(initialSnakePos, initialFruitPos) {
    this.#snake = initialSnakePos;
    this.#fruit = initialFruitPos;
    this.#score = 0;
  }

  didSnakeEatFruit() {
    return this.#snake.x === this.#fruit.x && this.#snake.y === this.#fruit.y;
  }

  showPositions() {
    console.clear();
    console.log('Snake : ', this.#snake);
    console.log('Fruit : ', this.#fruit);
    console.log('Score : ', this.#score);
  }

  incrementScore() {
    this.#score = this.#score + 10;
    console.log(this.#score);
  }

  down() {
    this.#snake.y--;
    this.showPositions();

    if (this.didSnakeEatFruit()) {
      this.incrementScore();
    }
  }

  up() {
    this.#snake.y++;
    this.showPositions();

    if (this.didSnakeEatFruit()) {
      this.incrementScore();
    }
  }

  left() {
    this.#snake.x--;
    this.showPositions();

    if (this.didSnakeEatFruit()) {
      this.incrementScore();
    }
  }

  right() {
    this.#snake.x++;
    this.showPositions();

    if (this.didSnakeEatFruit()) {
      this.incrementScore();
    }
  }
}

exports.SnakeGame = SnakeGame;
