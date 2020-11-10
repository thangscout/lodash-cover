const { isObjectLike } = require("./isObjectLike");
const { isPlainObject } = require("./isPlainObject");

// Check if `value` is likely a DOM element.

function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = {
  isElement,
};
