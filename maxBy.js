const { isSymbol } = require("./isSymbol");

function maxBy(array, iteratee) {
  let result;
  if (array == null) {
    return result;
  }
  let computed;
  for (const value of array) {
    const current = iteratee(value);

    if (
      current != null &&
      (computed === undefined
        ? current === current && !isSymbol(current)
        : current > computed)
    ) {
      computed = current;
      result = value;
    }
  }
  return result;
}

console.log(maxBy([{ n: 1 }, { n: 2 }], ({ n }) => n));
