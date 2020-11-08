const { castPath } = require("./internal/castPath");
const { isArguments } = require("./isArguments");
const { isIndex } = require("./internal/isIndex");
const { isLength } = require("./isLength");
const { toKey } = require("./internal/toKey");

// Used to check objects for own properties.
const hasOwnProperty = Object.prototype.hasOwnProperty;

// Check if `path` is a direct property of `object`.

function hasPath(object, path) {
  path = castPath(path, object);

  let index = -1;
  let { length } = path;
  let result = false;
  let key;

  while (++index < length) {
    key = toKey(path[index]);
    if (!(result = object !== null && hasOwnProperty.call(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return (
    !!length &&
    isLength(length) &&
    isIndex(key, length) &&
    (Array.isArray(object) || isArguments(object))
  );
}

module.exports = {
  hasPath,
}