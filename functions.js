// Creates an array of function property names from own enumerable properties of `object`.

function functions(object) {
  if (object == null) {
    return [];
  }
  return Object.keys(object).filter((key) => typeof object[key] === "function");
}

module.exports = {
  functions,
}