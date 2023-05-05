// import add from "./add";
const {plus, times} = require('./add');

test("adds 1 + 2 to equal 3", () => {
  expect(plus(1, 2)).toBe(3);
  expect(times(2,3)).toBe(6);
});
