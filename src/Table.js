class Table {
  constructor(width, length) {
    const numWidth = Number(width);
    if (Number.isNaN(numWidth))
      throw new Error("Table width is not a valid number");

    const numLength = Number(length);
    if (Number.isNaN(numLength))
      throw new Error("Table length is not a valid number");

    this.width = numWidth;
    this.length = numLength;
  }

  isOnTheTable(x, y) {
    const numX = Number(x);
    if (Number.isNaN(numX)) throw new Error("x is not a valid number");

    const numY = Number(y);
    if (Number.isNaN(numY)) throw new Error("y is not a valid number");

    return numX >= 0 && numX <= this.width && numY >= 0 && numY <= this.length;
  }
}

module.exports = Table;
