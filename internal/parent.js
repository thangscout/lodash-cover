const { baseGet } = require("./baseGet");
const { slice } = require("../slice");

// Gets the parent value at `path` of `object`;

function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1));
}

module.exports = {
  parent,
};
