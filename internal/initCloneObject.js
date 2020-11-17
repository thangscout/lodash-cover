const { isPrototype } = require("./isPrototype");

// Initializes an object clone.

function initCloneObject(object) {
  return typeof object.constructor === "function" && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {};
}

module.exports = {
  initCloneObject,
};
