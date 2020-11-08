const { flow } = require("./flow");

function flowRight(...funcs) {
  return flow(...funcs.reverse());
}

module.exports = {
  flowRight,
};
