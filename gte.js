// Check if `value` greater than or equal to `other`;

function gte(value, other) {
  if (!(typeof value === "string" && typeof other === "string")) {
    value = +value;
    other = +other;
  }
  return value >= other;
}

module.exports = {
  gte,
};
