// A specialized version of `indexOf` which performs strict equality
// comparisons of values, i.e. `===`.

function strickIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1;
  const { length } = array;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = {
  strickIndexOf,
};
