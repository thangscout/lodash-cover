const { root } = require("./internal/root");

/** Detect free variable `exports`. */
const freeExports =
  typeof exports === "object" &&
  exports !== null &&
  !exports.nodeType &&
  exports;

/** Detect free variable `module`. */
const freeModule =
  freeExports &&
  typeof module === "object" &&
  module !== null &&
  !module.nodeType &&
  module;

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

const isBuffer = nativeIsBuffer || (() => false);

module.exports = {
  isBuffer,
};
