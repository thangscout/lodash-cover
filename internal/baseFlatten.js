const { isFlattenable } = require("./isFlattenable");

// The base implementation of `flatten` with support for restricting flattening.

function baseFlatten(array, depth, predicate, isStrict, result) {
  predicate || (predicate = isFlattenable);
  result || (result = []);

  if (array == null) {
    return result;
  }
  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Resursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        result.push(...value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = {
  baseFlatten,
};
