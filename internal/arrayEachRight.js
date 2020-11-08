// A specialized version of `forEachRight` for arrays.

function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = {
  arrayEachRight,
};
