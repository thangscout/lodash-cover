// Copies the values of `source` to `array`.

function copyArray(source, array) {
  let index = -1;
  const length = source.length;

  array || new Array(length);
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = {
  copyArray,
};
