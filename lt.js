// Check if `value` is less than `other`;

function lt(value, other) {
  if (!(typeof value === "string" && typeof other === "string")) {
    value = +value;
    other = +other;
  }
  return value < other;
}

module.exports = {
  lt,
};
