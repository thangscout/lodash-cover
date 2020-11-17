// Used for built-in method reference.
const objectProto = Object.prototype;

// Check if `value` is likely a prototype object.

function isPrototype(value) {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor === "function" && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = {
  isPrototype,
};
