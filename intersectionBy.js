const { map } = require("./map");
const { baseIntersection } = require("./internal/baseIntersection");
const { castArrayLikeObject } = require("./internal/castArrayLikeObject");
const { last } = require("./last");

// This method is like `intersection` except that it accepts `iteratee`
//  which is invoked for each element of each `arrays` to generate the criterion
//  by which they're compared. The order and references of result values are
//  determined by the first array. The iteratee is invoked with one argument:
//  (value).

function intersectionBy(...arrays) {
  let iteratee = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);

  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }

  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, iteratee)
    : [];
}

module.exports = {
  intersectionBy,
};
