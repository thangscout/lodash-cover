// Check if `path` is a direct or inherited property of `object`.

function hasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = {
  hasIn,
}