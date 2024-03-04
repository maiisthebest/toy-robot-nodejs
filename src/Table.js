class Table {
  constructor(width, length) {
    const numberWidth = Number(width);
    if (Number.isNaN(numberWidth))
      throw new Error("Table width is not a valid number");

    const numberLength = Number(length);
    if (Number.isNaN(numberLength))
      throw new Error("Table length is not a valid number");

    this.width = numberWidth;
    this.length = numberLength;
  }

  isOnTheTable(x, y) {
    const numberX = Number(x);
    if (Number.isNaN(numberX)) throw new Error("x is not a valid number");

    const numberY = Number(y);
    if (Number.isNaN(numberY)) throw new Error("y is not a valid number");

    return x >= 0 && x <= this.width && y >= 0 && y <= this.length;
  }
}

module.exports = Table;
