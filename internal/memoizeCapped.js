const { memoize } = require("../memoize");

// Used as the maximun memoize cache size.
const MAX_MEMOIZE_TIME = 500;

function memoizeCapped(func) {
  const result = memoize(func, (key) => {
    const { cache } = result;
    if (cache.size === MAX_MEMOIZE_TIME) {
      cache.clear();
    }
    return key;
  });
  return result;
}

module.exports = {
  memoizeCapped,
};
