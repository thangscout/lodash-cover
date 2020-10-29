const { arrayLikeKeys } = require("./internal/arrayLikeKeys");
const { isArrayLike } = require("./isArrayLike");

// Create an array of the own enumerable property names of `object`.

function keys(object) {
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    : Object.keys(Object(object));
}

module.exports = {
  keys,
};
