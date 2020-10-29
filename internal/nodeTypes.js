const { freeGlobal } = require("./freeGlobal");
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

/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process;

const nodeTypes = (() => {
  try {
    const typesHelper =
      freeModule && freeModule.require && freeModule.require("util").types;
    return typesHelper
      ? typesHelper
      : freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {}
})();

module.exports = {
  nodeTypes
}