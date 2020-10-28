const { toFinite } = require("./toFinite");

// Converts `value` to an integer;

function toInteger(value) {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}

module.exports = {
  toInteger,
};
