const toString = Object.prototype.toString;

function getTag(value) {
  if (null == value) {
    return undefined === value ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

module.exports = {
  getTag: getTag,
}
