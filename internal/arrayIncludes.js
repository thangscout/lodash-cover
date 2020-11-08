const { baseIndexOf } = require("./baseIndexOf");

// A specialized version of `includes` for arrays without support for
//  specifying an index to search from.

function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = {
  arrayIncludes,
};
