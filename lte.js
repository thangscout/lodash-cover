// Check if `value` is less than or equal to `other`;

function lte(value, other) {
  if (!(typeof value === "string" && typeof other === "string")) {
    value = +value;
    other = +other;
  }
  return value <= other;
}

module.exports = {
  lte,
};
