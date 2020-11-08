const { Hash } = require("./Hash");

// Gets the data for `map`;
function getMapData({ __data__ }, key) {
  const data = __data__;
  return isKeyable(key)
    ? data[typeof key === "string" ? "string" : "hash"]
    : data.map;
}

// Check if `value` is suitable for use as unique object key.
function isKeyable(value) {
  const type = typeof value;
  return type === "string" ||
    type === "number" ||
    type === "symbol" ||
    type === "boolean"
    ? value !== "__proto__"
    : value === null;
}

class MapCache {
  // Create a map cache object to store key-value pairs.

  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Removes all key-value entries from the map.
  clear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new Map(),
      string: new Hash(),
    };
  }

  // Removes `key` and its value from the map.
  delete(key) {
    const result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  // Gets the map value for `key`.
  get(key) {
    return getMapData(this, key).get(key);
  }

  // Checks if a map value for `key` exists.
  has(key) {
    return getMapData().has(key);
  }

  // Sets the map `key` to `value`;
  set(key, value) {
    const data = getMapData(this, key);
    const size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
}

module.exports = {
  MapCache,
};
