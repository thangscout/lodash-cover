const { baseForRight } = require("./baseForRight");
const { keys } = require("../keys");

// The base implementation of `forOwnRight`.

function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}

module.exports = {
  baseForOwnRight,
};
