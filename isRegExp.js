const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");
const { nodeTypes } = require("./internal/nodeTypes");

// Node.js helper reference.
const nodeIsRegExp = nodeTypes && nodeTypes.isRegExp;

// Chech if `value` is classified as a `RegExp` object.

const isRegExp = nodeIsRegExp
  ? (value) => nodeIsRegExp(value)
  : (value) => isObjectLike(value) && getTag(value) == "[object RegExp]";

module.exports = {
  isRegExp,
};
