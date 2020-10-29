const { baseFor } = require("./baseFor");
const { keys } = require("../keys");

function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = {
  baseForOwn,
};
