const Table = require("./Table");

describe("Table", () => {
  describe("constructor()", () => {
    it("initialises with correct width and length", () => {
      const table = new Table(6, 4);

      expect(table.width).toBe(6);
      expect(table.length).toBe(4);
    });

    it("should throw error given invalid width", () => {
      expect(() => new Table("some invalid values for width", 0)).toThrow(
        "Table width is not a valid number"
      );
    });

    it("should throw error given invalid length", () => {
      expect(() => new Table(0, "some invalid values for length")).toThrow(
        "Table length is not a valid number"
      );
    });
  });

  describe("isOnTheTable()", () => {
    it.each`
      x    | y
      ${3} | ${4}
      ${0} | ${0}
      ${5} | ${7}
    `(
      "should return true given the position ($x, $y) being inside the table",
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
      "should return false given the position ($x, $y) being outside of the table",
      ({ x, y }) => {
        const table = new Table(5, 7);

        expect(table.isOnTheTable(x, y)).toBe(false);
      }
    );

    it("should throw error given invalid x coordinate", () => {
      const table = new Table(5, 5);

      expect(() => table.isOnTheTable("some invalid values for x", 0)).toThrow(
        "x is not a valid number"
      );
    });

    it("should throw error given invalid y coordinate", () => {
      const table = new Table(5, 5);

      expect(() => table.isOnTheTable(0, "some invalid values for x")).toThrow(
        "y is not a valid number"
      );
    });
  });
});
