const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");

// Chech if `value` is a plain object, that is, an object created by the `Object` constructor or one which a
// `[[Prototype]]` of `null`.

function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) != "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

module.exports = {
  isPlainObject,
};
