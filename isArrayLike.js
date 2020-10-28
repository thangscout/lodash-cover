const { isLength } = require("./isLength");

function isArrayLike(value) {
  return value != null && typeof value !== "function" && isLength(value.length);
}

module.exports = {
  isArrayLike,
}
