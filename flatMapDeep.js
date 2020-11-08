const { baseFlatten } = require("./internal/baseFlatten");
const { map } = require("./map");

// Used as references for various `Number` constants.
const INFINITY = 1 / 0;

// This method is like `flatMap` except that it resursively flattens the mapped results.

function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY);
}

module.exports = {
  flatMapDeep,
};
