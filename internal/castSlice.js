const { slice } = require("../slice");

// Casts `array` to a slice if it's needed.
function castSlice(array, start, end) {
  const { length } = array;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : slice(array, start, end);
}

module.exports = {
  castSlice,
};
