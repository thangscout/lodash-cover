// Iterates over properties of `object`, returning an array of all elements `predicate` returns truthy for.
// The predicate is invoked with three arguments: (value, key, object).

function filterObject(object, predicate) {
  object = Object(object);
  const result = [];

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = {
  filterObject,
};
