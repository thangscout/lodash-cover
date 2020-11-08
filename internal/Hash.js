// Used to stand-in for `undefined` has value.
const HASH_UNDEFINED = "__lodash_hash_undefined__";

class Hash {
  // Creates a has object.
  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Removes all key-value entries from the hash.
  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  // Remove `key` and its value from the hash.
  delete(key) {
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  // Gets the hash value for `key`.
  get(key) {
    const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  // Check if a hash value for `key` exists.
  has(key) {
    const data = this.__data__;
    return data[key] !== undefined;
  }

  // Sets the hash `key` to `value`.
  set(key, value) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}

module.exports = {
  Hash,
}