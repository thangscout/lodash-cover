const { baseFlatten } = require("./internal/baseFlatten");
const { map } = require("./map");

// Creates a flattened array of values by running each element in `collection`
// thru `iteratee` and flattening the mapped results. The iteratee is invoked
// with three arguments: (value, index|key, collection).

function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = {
  flatMap,
};
