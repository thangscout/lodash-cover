const { upperFirst } = require("./upperFirst");
const { words } = require("./words");
const { toString } = require("./toString");

// Converts `string` to [camel case]

const camelCase = (string) => {
  return words(toString(string).replace(/['\u2019]/g, "")).reduce(
    (result, word, index) => {
      word = word.toLowerCase();
      return result + (index ? upperFirst(word) : word);
    },
    ""
  );
};

// console.log(camelCase("--foo-bar--"));

module.exports = {
  camelCase,
};
