const { getTag } = require("./internal/getTag");
const { nodeTypes } = require("./internal/nodeTypes");
const { isObjectLike } = require("./isObjectLike");

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

// Node.js helper reference.
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;

// Check if `value` is classified as a type array.
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value));

module.exports = {
  isTypedArray,
};
