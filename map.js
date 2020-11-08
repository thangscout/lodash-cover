// Create an array of values by running each element of `array` thru `iteratee`.
// The iteratee is invoked with three arguments: (value, index, array);

function map(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while(++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = {
  map,
}