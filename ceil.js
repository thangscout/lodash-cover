const { createRound } = require("./internal/createRound");

// Computes `number` rounded up to `precision`.

const ceil = createRound("ceil");

module.exports = {
  ceil,
};
