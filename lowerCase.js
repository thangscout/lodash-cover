const { words } = require("./words");
const { toString } = require("./toString");

const reQuotes = /['\u2019]/g;

// Convert `string`, as space separated words, to lower case.

const lowerCase = (string) =>
  words(toString(string).replace(reQuotes, "")).reduce(
    (result, word, index) => result + (index ? " " : "") + word.toLowerCase(),
    ""
  );

module.exports = {
  lowerCase,
};
