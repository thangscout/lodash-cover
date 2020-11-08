const { arrayEachRight } = require("./internal/arrayEachRight");
const { baseEachRight } = require("./internal/baseEachRight");

// This method is like `forEach` except that it iterates over elements of
// `collection` from right to left.

function forEachRight(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight;
  return func(collection, iteratee);
}

module.exports = {
  forEachRight,
};
