// The inverse of `entries` is method return an object composed from key-value `pairs`.

function fromEntries(pairs) {
  const result = {};
  if (pairs == null) {
    return result;
  }

  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = {
  fromEntries,
};
