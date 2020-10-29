function baseFor(object, iteratee, keysFuns) {
  const iterable = Object(object);
  const props = keysFuns(object);
  let { length } = props;
  let index = -1;

  while (length--) {
    const key = props[++index];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}

module.exports = {
  baseFor,
};
