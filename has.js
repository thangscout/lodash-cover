// Used to check objects for own properties.
const hasOwnProperty = Object.prototype.hasOwnProperty;

// Check if `key` is a direct property of `object`.

function has(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = {
  has,
};
