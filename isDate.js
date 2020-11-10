const { getTag } = require("./internal/getTag");
const { isObjectLike } = require("./isObjectLike");
const { nodeTypes } = require("./internal/nodeTypes");

// Node.js helper references.
const nodeIsDate = nodeTypes && nodeTypes.isDate;

// Check if `value` is classified as a `Date` object.

const isDate = nodeIsDate
  ? (value) => nodeIsDate(value)
  : (value) => isObjectLike(value) && getTag(value) === "[object Date]";

module.exports = {
  isDate,
};
