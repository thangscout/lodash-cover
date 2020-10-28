const { toNUmber } = require("./toNumber");

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e308;

// Converts `value` to a finite number.

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = {
  toFinite,
};
