class Table {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  isOnTheTable(x, y) {
    return x >= 0 && x <= this.width && y >= 0 && y <= this.length;
  }
}

module.exports = Table;
