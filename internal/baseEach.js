const { baseForOwn } = require("./baseForOwn");
const { isArrayLike } = require("../isArrayLike");

// The base implementation of `forEach`.

function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection;
  }
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee);
  }
  const length = collection.length;
  const iterable = Object(collection);
  let index = -1;

  while (++index < length) {
    if (iteratee(iterable[index], index, iteratee) === false) {
      break;
    }
  }
  return collection;
}

module.exports = {
  baseEach,
};
