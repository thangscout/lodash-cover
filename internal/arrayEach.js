// A specialized version of `forEach` for arrays.

function arrayEach(array, iteratee) {
  let index = -1;
  const length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = {
  arrayEach,
};
