const { baseFindIndex } = require("./baseFindIndex");
const { baseIsNaN } = require("./baseIsNaN");
const { strickIndexOf } = require("./strickIndexOf");

// The base implementation of `indexOf` without `fromIndex` bounds checks.

function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strickIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = {
  baseIndexOf,
};
