const { slice } = require("./slice");
const { toInteger } = require("./toInteger");

// Create an array of elements split into groups the length of `size`;

function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

module.exports = {
  chunk,
};
