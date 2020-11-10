const { castPath } = require("./internal/castPath");
const { last } = require("./last");
const { parent } = require("./internal/parent");
const { toKey } = require("./internal/toKey");

// Invoke the method at `path` of `object`;

function invoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  const func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : func.apply(object, args);
}

module.exports = {
  invoke,
};
