const { baseFindKey } = require("./internal/baseFindKey");
const { baseForOwnRight } = require("./internal/baseForOwnRight");

function findLastKey(object, predicate) {
  return baseFindKey(object, predicate, baseForOwnRight);
}

module.exports = {
  findLastKey,
}