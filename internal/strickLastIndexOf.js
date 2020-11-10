// A specialized version of `lastIndexOf` which performs strick equality comparisons of values.

function strickLastIndexOf(array, value, fromIndex) {
  let index = fromIndex + 1;
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return index;
}

module.exports = {
  strickLastIndexOf,
};
