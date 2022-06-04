class Snake {
  #x;
  #y;

  constructor(initialPos) {
    this.#x = initialPos.x;
    this.#y = initialPos.y;
  }

  down() {
    this.#y--;
  }

  up() {
    this.#y++;
  }

  left() {
    this.#x--;
  }

  right() {
    this.#x++;
  }

  toString() {
    return `${this.#x},${this.#y}`;
  }

  getPosition() {
    return [this.#x, this.#y];
  }
}

exports.Snake = Snake;
