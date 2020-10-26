const { createMathOperation } = require("./internal/createMathOperation");

const add = createMathOperation((augend, addend) => augend + addend, 0);

module.exports = {
  add,
};
