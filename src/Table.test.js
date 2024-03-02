const Table = require("./Table");

describe("Table", () => {
  it("initialises with correct width and length", () => {
    const table = new Table(6, 4);

    expect(table.width).toBe(6);
    expect(table.length).toBe(4);
  });

  describe("isOnTheTable()", () => {
    it.each`
      x    | y
      ${3} | ${4}
      ${0} | ${0}
      ${5} | ${7}
    `(
      "should return true given the position ($x, $y) which is on the table",
      ({ x, y }) => {
        const table = new Table(5, 7);

        expect(table.isOnTheTable(x, y)).toBe(true);
      }
    );

    it.each`
      x     | y
      ${6}  | ${7}
      ${0}  | ${8}
      ${-1} | ${5}
      ${4}  | ${-1}
    `(
      "should return false given the position ($x, $y) which is NOT on the table",
      ({ x, y }) => {
        const table = new Table(5, 7);

        expect(table.isOnTheTable(x, y)).toBe(false);
      }
    );
  });
});
