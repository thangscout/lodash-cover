const { isKey } = require("./isKey");
const { stringToPath } = require("./stringToPath");

function castPath(value, object) {
  if (Array.isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(value);
}

module.exports = {
  castPath,
};
