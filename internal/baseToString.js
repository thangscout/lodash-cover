const { isSymbol } = require("../isSymbol");

// Used as references for various Number constants.
const INFINITY = 1 / 0;

// Used to convert symbols to primitives and string.
const symbolToString = Symbol.prototype.toString;

function baseToString(value) {
  // Exit early for string to avoid a performance hit in some enviroments.
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map(baseToString)}`
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  const result = `${value}`;
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

module.exports = {
  baseToString,
};
