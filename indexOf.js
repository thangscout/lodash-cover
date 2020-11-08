const { baseIndexOf } = require("./internal/baseIndexOf");
const { toInteger } = require("./toInteger");

//Gets the index at which the first occurrence of `value` is found in `array`
// using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
// for equality comparisons. If `fromIndex` is negative, it's used as the
// offset from the end of `array`.

function indexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = Math.max(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = {
  indexOf,
}