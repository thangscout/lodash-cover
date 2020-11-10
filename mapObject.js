// Creates an array of values by running each property of `object` thru `iteratee`. The iteratee
// is invoke with three arguments: (value, key, object).

function mapObject(object, iteratee) {
  const props = Object.keys(object);
  const result = new Array(props.length);

  props.forEach((key, index) => {
    const value = object[key];
    result[index] = iteratee(value, index, object);
  });
  return result;
}

module.exports = {
  mapObject,
};
