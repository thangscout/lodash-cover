const { getTag } = require("./internal/getTag");

function isSymbol(value) {
  const type = typeof value;
  return (
    type == "symbol" ||
    (type === "object" && value !== null && getTag(value) == "[object Symbol]")
  );
}

module.exports = {
  isSymbol
}
