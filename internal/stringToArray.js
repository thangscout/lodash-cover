const { asciiToArray } = require("./asciiToArray");
const { hasUnicode } = require("./hasUnicode");
const { unicodeToArray } = require("./unicodeToArray");

// Converts `string` to an array.

function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

module.exports = {
  stringToArray,
};
