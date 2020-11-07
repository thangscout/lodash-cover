// This method is like `find` except that it returns the key of the first elemnt `predicate` returns
// truthy for instead of the element itself.

function findKey(object, predicate) {
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

// const users = {
//   barney: { age: 36, active: true },
//   fred: { age: 40, active: false },
//   pebbles: { age: 1, active: true },
// };

// let ad = findKey(users, ({ age }) => age === 1);

module.exports = {
  findKey,
};
