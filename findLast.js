const { findLastIndex } = require("./findLastIndex");
const { isArrayLike } = require("./isArrayLike");

// This method is like `find` except that it eterates over elements of `collection` from right to left.

function findLast(collection, predicate, fromIndex) {
  let iteratee;
  const iterable = Object(collection);
  if (!isArrayLike(collection)) {
    collection = Object.keys(collection);
    iteratee = predicate;
    predicate = (key) => {
      return iteratee(iterable[key], key, iteratee);
    };
  }
  const index = findLastIndex(collection, predicate, fromIndex);
  return index > -1
    ? iterable[iteratee ? collection[index] : index]
    : undefined;
}

module.exports = {
  findLast,
};
