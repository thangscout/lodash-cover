// Iterates over elements of `array`, returning an array of all elements `predicate` returns truthy for.
// The predicate is invoked with three arguments: (value, index, array).

function filter(array, predicate) {
  let index = -1;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  let result = [];

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = {
  filter,
};
