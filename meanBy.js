const { baseSum } = require("./internal/baseSum");

const NAN = 0 / 0;

function meanBy(array, iteratee) {
  const length = array == null ? 0 : array.length;
  return length ? baseSum(array, iteratee) / length : NAN;
}

module.exports = {
  meanBy,
}