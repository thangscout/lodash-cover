const { map } = require("./map");
const { baseIntersection } = require("./internal/baseIntersection");
const { castArrayLikeObject } = require("./internal/castArrayLikeObject");
const { last } = require("./last");

// This method is like `intersection` except that it accepts `comparator`
// which is invoked to compare elements of `arrays`. The order and references
// of result values are determined by the first array. The comparator is
// invoked with two arguments: (arrVal, othVal).

function intersectionWith(...arrays) {
  let comparator = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);

  comparator = typeof comparator === "function" ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }

  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, undefined, comparator)
    : [];
}

module.exports = {
  intersectionWith,
};
