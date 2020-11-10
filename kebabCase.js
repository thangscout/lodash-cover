const { words } = require("./words");
const { toString } = require("./toString");

const kebabCase = (string) =>
  words(toString(string).replace(/['\u2019]/g, "")).reduce(
    (result, word, index) => result + (index ? "-" : "") + word.toLowerCase(),
    ""
  );

module.exports = {
  kebabCase,
};
