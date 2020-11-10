const { baseAssignValue } = require("./internal/baseAssignValue");
const { reduce } = require("./reduce");

function keyBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value) => (
      baseAssignValue(result, iteratee(value), value), result
    ),
    {}
  );
}

module.exports = {
  keyBy,
};
