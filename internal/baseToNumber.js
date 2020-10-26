const { isSymbol } = require("../isSymbol");

// Used as references for various "Number" contants.
const NAN = 0 / 0;

function baseToNumber(value) {
  if (typeof value === "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  return +value;
}

module.exports = {
  baseToNumber,
};
