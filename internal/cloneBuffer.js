const { root } = require("./root");

// Detect free variable `exports`
const freeExports =
  typeof exports === "object" &&
  exports !== null &&
  !exports.nodeType &&
  exports;

// Detect free variable `module`.
const freeModule =
  freeExports &&
  typeof module === "object" &&
  module !== null &&
  !module.nodeType &&
  module;

// Detect the popular ComomnJS extension `module.exports`.
const moduleExports = freeModule && freeModule.exports === freeExports;

// Built-in value reference.
const Buffer = moduleExports ? root.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

// Create a clone of `buffer`.
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  const length = buffer.length;
  const result = allocUnsafe
    ? allocUnsafe(length)
    : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = {
  cloneBuffer,
};
