function mapKey(object, iteratee) {
  object = Object(object);
  const result = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    result[iteratee(value, key, object)] = value;
  });
  return result;
}

module.exports = {
  mapKey,
};
