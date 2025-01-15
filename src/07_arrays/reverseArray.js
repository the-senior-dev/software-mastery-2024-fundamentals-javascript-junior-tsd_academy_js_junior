/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
  // Your code here
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Replace indexes in original array
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

module.exports = reverseArray;
