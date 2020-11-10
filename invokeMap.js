const { baseEach } = require("./internal/baseEach");
const { invoke } = require("./invoke");
const { isArrayLike } = require("./isArrayLike");

function invokeMap(collection, path, args) {
  let index = -1;
  const isFunc = typeof path === "function";
  console.log("isfunc", isFunc);
  const result = isArrayLike(collection) ? new Array(collection.length) : [];

  baseEach(collection, (value) => {
    result[++index] = isFunc
      ? path.apply(value, args)
      : invoke(value, path, args);
  });
  return result;
}

module.exports = {
  invokeMap,
};
