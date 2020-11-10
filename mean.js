const { meanBy } = require("./meanBy");

// Computes the mean of the values in `array`.

function mean(array) {
  return meanBy(array, (value) => value);
}

module.exports = {
  mean,
};
