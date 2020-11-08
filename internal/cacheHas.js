// Check if a `cache` value for `key` exists.

function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = {
  cacheHas,
};
