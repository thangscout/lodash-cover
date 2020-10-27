function after(n, func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  n = n || 0;
  return function (...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
}

module.exports = {
  after,
};
