// Gets the first element of `array`.

function head(array) {
  return array != null && array.length ? array[0] : undefined;
}

module.exports = {
  head,
};
