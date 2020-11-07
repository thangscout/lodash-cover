// The base implementation of methods like `findKey` and `findLastkey` which iterates over `collection`
// using `eachFunc`.

function baseFindKey(collection, predicate, eachFunc) {
  let result;
  eachFunc(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      result = key;
      return false;
    }
  });
  return result;
}

module.exports = {
  baseFindKey,
};
