// Used to check objects for own properties.
const toString = Object.prototype.toString;

// Creates an object composed of the inverted keys and values of `object`.
// If `object` contains duplicate values, subsequent values overwrite
// property assignments of previous values.

function invert(object) {
  const result = {};
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (value != null && typeof value.toString !== "function") {
      value = toString.call(value);
    }
    result[value] = key;
  });
  return result;
}

module.exports = {
  invert,
};
