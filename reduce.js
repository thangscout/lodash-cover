const { arrayReduce } = require("./internal/arrayReduce.js");
const { baseEach } = require("./internal/baseEach");
const { baseReduce } = require("./internal/baseReduce");

function reduce(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduce : baseReduce;
  const initAccum = arguments.length < 3;
  return func(collection, iteratee, accumulator, initAccum, baseEach);
}

module.exports = {
  reduce,
};
