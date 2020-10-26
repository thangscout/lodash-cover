const { isArguments } = require("../isArguments");

// Built-in value reference.
const spreadableSymbol = Symbol.isConcatSpreadable;

// Checks if `value` is a flattenable `arguments` object of array.

function isFlattenable(value) {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(value && value[spreadableSymbol])
  );
}

module.exports = {
  isFlattenable,
}
