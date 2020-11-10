const { createCaseFirst } = require("./internal/createCaseFirst");

// Converts the first character of `string` to lower case.

const lowerFirst = createCaseFirst("toLowerCase");

module.exports = {
  lowerFirst,
};
