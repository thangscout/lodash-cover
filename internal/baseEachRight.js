const { baseForOwnRight } = require("./baseForOwnRight");
const { isArrayLike } = require("../isArrayLike");

// The base implementation of `forEachRight`.

function baseEachRight(collection, iteratee) {
  if (collection == null) {
    return collection;
  }
  if (!isArrayLike(collection)) {
    return baseForOwnRight(collection, iteratee);
  }

  const iterable = Object(collection);
  let length = collection.length;

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}

module.exports = {
  baseEachRight,
};
