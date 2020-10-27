const { baseAt } = require("./internal/baseAt");
const { baseFlatten } = require("./internal/baseFlatten");

const at = (object, ...paths) => baseAt(object, baseFlatten(paths, 1));

module.exports = {
  at,
};


// const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
// let result = at(object, ['a[0].b.c', 'a[1]']);

// console.log('result:', result);