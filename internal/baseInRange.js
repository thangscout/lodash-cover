// The base implementation of `inRange` which doesn't coerce argument.

function baseInRange(number, start, end) {
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

module.exports = {
  baseInRange,
}