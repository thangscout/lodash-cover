const { baseAssignValue } = require("./internal/baseAssignValue");
const { reduce } = require("./reduce");

// Used to check objects for own properties.
const hasOwnProperty = Object.prototype.hasOwnProperty;

// Creates an object composed of keys generated from the results of running
//   each element of `collection` thru `iteratee`. The order of grouped values
//   is determined by the order they occur in `collection`. The corresponding
//   value of each key is an array of elements responsible for generating the
//   key. The iteratee is invoked with one argument: (value).

function groupBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value, key) => {
      key = iteratee(value);
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
      return result;
    },
    {}
  );
}

module.exports = {
  groupBy,
};
