const { createRound } = require("./internal/createRound");

// Computes `number` rounded down to `percision`.

const floor = createRound("floor");

module.exports = {
  floor,
};
