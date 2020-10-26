// Check if `value` is object-like. A value is object-like if it's not 'null' and has a `typeof` result of "object".

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

module.exports = {
  isObjectLike,
};
