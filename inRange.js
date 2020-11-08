const { baseInRange } = require("./internal/baseInRange");

// Checks if `number` is between `start` and up to, but not including, `end`. If
//  `end` is not specified, it's set to `start` with `start` then set to `0`.
//   If `start` is greater than `end` the params are swapped to support
//   negative ranges.

function inRange(number, start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return baseInRange(+number, +start, +end);
}

module.exports = {
  inRange,
}