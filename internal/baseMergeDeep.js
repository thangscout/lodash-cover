const { assignMergeVlaue } = require("./assignMergeValue");
const { cloneBuffer } = require("./cloneBuffer");
const { cloneTypedArray } = require("./cloneTypedArray");
const { copyArray } = require("./copyArray");
const { initCloneObject } = require("./initCloneObject");
const { isArguments } = require("../isArguments");
const { isArrayLikeObject } = require("../isArrayLikeObject");
const { isBuffer } = require("../isBuffer");
const { isObject } = require("../isObject");
const { isPlainObject } = require("../isPlainObject");
const { isTypedArray } = require("../isTypedArray");
const { toPlainObject } = require("../toPlainObject");

//A specialized version of `baseMerge` for arrays and objects which performs
//  deep merges and tracks traversed objects enabling objects with circular
//   references to be merged.

function baseMergeDeep(
  object,
  source,
  key,
  srcIndex,
  mergeFunc,
  customizer,
  stack
) {
  const objValue = object[key];
  const srcValue = source[key];
  const stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeVlaue(object, key, stacked);
    return;
  }

  let newValue = customizer
    ? customizer(objValue, srcValue, `${key}`, object, source, stack)
    : undefined;

  let isCommon = newValue === undefined;

  if (isCommon) {
    const isArr = Array.isArray(srcValue);
    const isBuff = !isArr && isBuffer(srcValue);
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Array.isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTYped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (typeof objValue === "function" || !isObject(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeVlaue(object, key, newValue);
}

module.exports = {
  baseMergeDeep,
};
