const { map } = require("./map");
const { baseIntersection } = require("./internal/baseIntersection");
const { castArrayLikeObject } = require("./internal/castArrayLikeObject");

// Creates an array of unique values that are included in all given arrays
// using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
// for equality comparisons. The order and references of result values are
// determined by the first array.

function intersection(...arrays) {
  const mapped = map(arrays, castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped)
    : [];
}

module.exports = {
  intersection,
};
