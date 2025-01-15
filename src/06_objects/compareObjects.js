/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
  // If either object is a primitive type (not object), compare directly
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    typeof obj1 === null ||
    typeof obj2 === null
  )
    return obj1 === obj2;

  // Grab the keys as arrays of each object
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  //In the case of arrays, check for the length of each
  if (keys1.length !== keys2.length) return false;

  //iterate through obj1 keys and check if equal to obj2
  for (let key of keys1) {
    // recursive call
    if (!compareObjects(obj1[key], obj2[key])) return false;
  }

  return true;
}

module.exports = compareObjects;
