const { getTag } = require("./internal/getTag");

// Check if `value` is classified as a `string` primitive or object.

function isString(value) {
  const type = typeof value;
  return (
    type === "string" ||
    (type === "object" &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == "[object String]")
  );
}

module.exports = {
  isString,
};
