const { arrayEach } = require("./internal/arrayEach");
const { baseEach } = require("./internal/baseEach");

// Iterates over elements of `collection` and invokes `iteratee` for each element.
//  The iteratee is invoked with three arguments: (value, index|key, collection).
// Iteratee functions may exit iteration early by explicitly returning `false`.

function forEach(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach;
  return func(collection, iteratee);
}

module.exports = {
  forEach,
}