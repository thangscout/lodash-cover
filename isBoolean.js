const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");

// Check if `value` is classified as a boolean primitive or object.

function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == "[object Boolean]")
  );
}

module.exports = {
  isBoolean,
};
