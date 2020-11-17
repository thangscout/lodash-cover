const { cloneArrayBuffer } = require("./cloneArrayBuffer");

// Creates a clone of `typedArray`.

function cloneTypedArray(typedArray, isDeep) {
  const buffer = isDeep
    ? cloneArrayBuffer(typedArray.buffer)
    : typedArray.buffer;
  return new typedArray.constructor(
    buffer,
    typedArray.byteOffset,
    typedArray.length
  );
}

module.exports = {
  cloneTypedArray,
};
