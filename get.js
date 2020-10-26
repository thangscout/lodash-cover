const { baseGet } = require("./internal/baseGet");

function get(object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = {
  get,
};
