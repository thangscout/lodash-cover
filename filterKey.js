// This method is like `find` except that it returns the key of the first element `predicate` returns truthy for
// instead of the element itself.

function filterKey(object, predicate) {
  let result;
  if (object == null) {
    return result;
  }

  Object.keys(object).some((key) => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
  });
  return result;
}

module.exports = {
  filterKey,
};
