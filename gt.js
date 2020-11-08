// Check if `value` is greater than `other`.

function gt(value, other) {
  if (!(typeof value === "string" && typeof other === "string")) {
    value = +value;
    other = +other;
  }
  return value > other;
}

module.exports = {
  gt,
};
