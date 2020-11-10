const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");
const { nodeTypes } = require("./internal/nodeTypes");

// Node.js helper references.
const nodeIsSet = nodeTypes && nodeTypes.isSet;

// Check if `value` is classified as a `Set` object.

const isSet = nodeIsSet
  ? (value) => nodeIsSet(value)
  : (value) => isObjectLike(value) == "[object Set]";

module.exports = {
  isSet,
};
