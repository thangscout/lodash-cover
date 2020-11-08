//This method is like `forOwn` except that it iterates over properties of
// `object` in the opposite order.

function forOwnRight(object, iteratee) {
  if (object == null) {
    return object;
  }

  const props = Object.keys(object);
  let length = props.length;

  while (length--) {
    iteratee(object[props[length]], props[length], object);
  }
}

module.exports = {
  forOwnRight,
};
