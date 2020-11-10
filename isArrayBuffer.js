const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");
const { nodeTypes } = require("./internal/nodeTypes");

// Node.js helper references.
const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer;

// Check if `value` is classified as an `ArrayBuffer` object.

const isArrayBuffer = nodeIsArrayBuffer
  ? (value) => nodeIsArrayBuffer(value)
  : (value) => isObjectLike(value) && getTag(value) == "[object ArrayBuffer]";

module.exports = {
  isArrayBuffer,
};
