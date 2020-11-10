function mapValue(object, iteratee) {
  object = Object(object);
  const result = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    result[key] = iteratee(value, key, object);
  });
  return result;
}

module.exports = {
  mapValue,
};
