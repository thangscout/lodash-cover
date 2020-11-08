//  Iterates over own enumerable string keyed properties of an object and
// invokes `iteratee` for each property. The iteratee is invoked with three
//  arguments: (value, key, object). Iteratee functions may exit iteration
// early by explicitly returning `false`.

function forOwn(object, iteratee) {
  object = Object(object);
  Object.keys(object).forEach((key) => iteratee(object[key], key, object));
}

module.exports = {
  forOwn,
};
