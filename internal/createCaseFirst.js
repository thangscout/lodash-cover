const { castSlice } = require("./castSlice");
const { hasUnicode } = require("./hasUnicode");
const { stringToArray } = require("./stringToArray");

// Create a function like `lowerFirst`;

function createCaseFirst(methodName) {
  return (string) => {
    if (!string) {
      return "";
    }

    const strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
    const chr = strSymbols ? strSymbols[0] : string[0];
    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join("")
      : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

module.exports = {
  createCaseFirst,
};
