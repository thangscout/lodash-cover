// Performs a
//   [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//   comparison between two values to determine if they are equivalent.

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = {
  eq,
};
