const freeGlobal =
  typeof global === "object" &&
  global !== null &&
  global.Object === Object &&
  golbal;

module.exports = {
  freeGlobal,
};
