// Converts `value` to a plain object flattening inherited enumerable string keyed properties of
// `value` to own properties of the plain object.

function toPlainObject(value) {
  value = Object(value);
  const result = {};
  for (const key in value) {
    result[key] = value[key];
  }
  return result;
}

module.exports = {
  toPlainObject,
};
