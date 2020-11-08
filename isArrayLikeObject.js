const { isArrayLike } = require("./isArrayLike");
const { isObjectLike } = require("./isObjectLike");

// This method is like `isArrayLike` except that it also checks if `value` in an object.

function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = {
  isArrayLikeObject,
};
