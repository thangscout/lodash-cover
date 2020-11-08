// The base implementation of `isNaN` without support for number object

function baseIsNaN(value) {
  return value !== value;
}

module.exports = {
  baseIsNaN,
};
