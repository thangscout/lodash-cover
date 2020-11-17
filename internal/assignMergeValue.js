const { baseAssignValue } = require("./baseAssignValue");
const { eq } = require("../eq");

// This function is like `assignValue` except that it doesn't assign `undefined` values.

function assignMergeValue(object, key, value) {
  if (
    (value !== undefined && !eq(object[key], value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value);
  }
}

module.exports = {
  assignMergeVlaue,
};
