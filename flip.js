// Create a function that invokes `func` with arguments reversed.

function flip(func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return function (...args) {
    console.log("args:", args, args.reverse());
    return func.apply(this, args.reverse());
  };
}

module.exports = {
  flip,
};
