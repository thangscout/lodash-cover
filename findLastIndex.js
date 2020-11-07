const { baseFindIndex } = require("./internal/baseFindIndex");
const { toInteger } = require("./toInteger");

function findLastIndex(array, predicate, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index =
      fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }
  return baseFindIndex(array, predicate, index, true);
}

// const users = [
//   { user: "barney", active: true },
//   { user: "fred", active: true },
//   { user: "barney 2", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

// findLastIndex(users, ({ user }) => user == "fred");

module.exports = {
  findLastIndex,
};
