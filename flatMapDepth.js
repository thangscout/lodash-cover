const { baseFlatten } = require("./internal/baseFlatten");
const { map } = require("./map");

// This method is like `flatMap` except that is resursively flattens the mapped results
// up to `depth` times.

function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : +depth;
  return baseFlatten(map(collection, iteratee), depth);
}

module.exports = {
  flatMapDepth,
};
