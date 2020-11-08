const { isArrayLikeObject } = require("../isArrayLikeObject");

// Casts `value` to an empty array if it's not an array like object.

function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = {
  castArrayLikeObject,
};
