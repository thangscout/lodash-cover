// Used to check objects for own properties.

const hasOwnProperty = Object.prototype.hasOwnProperty;

function invertBy(object, iteratee) {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = iteratee(object[key]);
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  });
  return result;
}

module.exports = {
  inverBy,
};
