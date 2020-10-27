const { createCaseFirst } = require("./internal/createCaseFirst");

const upperFirst = createCaseFirst("toUpperCase");

// let result = upperFirst("fred");
// console.log("result:", result);

module.exports = {
  upperFirst,
};
