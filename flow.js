// Composes a function that returns the result of invoking the given functions
//   with the `this` binding of the created function, where each successive
//   invocation is supplied the return value of the previous.

function flow(...funcs) {
  const length = funcs.length;
  let index = length;
  while (index--) {
    if (typeof funcs[index] !== "function") {
      throw new TypeError("Expected a function");
    }
  }
  return function (...args) {
    let index = 0;
    let result = length ? funcs[index].apply(this, args) : args[0];
    console.log("result:", result);
    while (++index < length) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}

module.exports = {
  flow,
};
