const { baseFindIndex } = require("./internal/baseFindIndex");
const { baseIsNaN } = require("./internal/baseIsNaN");
const { strickLastIndexOf } = require("./internal/strickLastIndexOf");
const { toInteger } = require("./toInteger");

// This method is like `indexOf` except that it iteratee over element of `array` from right to left.

function lastIndexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = length;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index =
      index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }

  return value === value
    ? strickLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true);
}

module.exports = {
  lastIndexOf,
};
