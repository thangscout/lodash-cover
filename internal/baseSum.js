// The base implementation of `sum` and `sumBy`.

function baseSum(array, iteratee) {
  let result;

  for (const value of array) {
    const current = iteratee(value);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

module.exports = {
  baseSum,
};
