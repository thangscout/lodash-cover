// Create an array of the own and inherited enumerable property names of `object`.

function keysIn(object) {
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}

module.exports = {
  keysIn,
};
