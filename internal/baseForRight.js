// This function is like `baseFor` except that it iterates over properties in the opposite order.

function baseForRight(object, iteratee, keysFunc) {
    const iterable = Object(object);
    const props = keysFunc(object);
    let { length } = props;
  
    while (length--) {
      const key = props[length];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  }
  
  module.exports = {
    baseForRight,
  };
  