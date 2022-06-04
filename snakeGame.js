class SnakeGame {
  #snake;
  #fruit;
  #score;

  constructor(snake, fruit) {
    this.#snake = snake;
    this.#fruit = fruit;
    this.#score = 0;
  }

  didSnakeEatFruit() {
    const [x, y] = this.#snake.getPosition();
    return x === this.#fruit.x && y === this.#fruit.y;
  }

  displayResult() {
    console.clear();
    console.log('Snake : ', this.#snake);
    console.log('Fruit : ', this.#fruit);
    console.log('Score : ', this.#score);
  }

  #incrementScore() {
    this.#score = this.#score + 10;
  }

  status() {
    if (this.didSnakeEatFruit()) {
      this.#incrementScore();
    }
    return this.toString();
  }

  toString() {
    const snakePos = this.#snake.toString();
    const fruitPos = `${this.#fruit.x},${this.#fruit.y}`;
    return ` Snake: ${snakePos}\n Fruit: ${fruitPos}\n Score: ${this.#score}`;
  }
}

exports.SnakeGame = SnakeGame;
