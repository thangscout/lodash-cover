const { slice } = require("./slice");

// Get all but the last element of `array`.

function initial(array) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, 0, -1) : [];
}

console.log(initial([1, 2, 3, 4]))