const { MapCache } = require("./MapCache");

// Used to stand-in for `undefined` hash values.
const HASH_UNDEFINED = "__lodash_hash_undefined__";

class SetCache {
  // Create an array cache object to store unique values.

  constructor(values) {
    let index = -1;
    const length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Adds `value` to the array cache.
  add(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  // Check if `value` is in the array cache.
  has(value) {
    return this.__data__.has(value);
  }
}

SetCache.prototype.push = SetCache.prototype.add;

module.exports = {
  SetCache,
};
