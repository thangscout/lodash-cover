const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");

// Check if `value` is likely an `arguments` object.

function isArguments(value) {
  return isObjectLike(value) && getTag(value) == "[object Arguments]";
}

module.exports = {
  isArguments,
}