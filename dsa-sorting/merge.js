/**
 * merge
 * 
 * Given two sorted arrays, merges them into a new sorted array without modifying the input arrays.
 * 
 * This function runs in O(n + m) time and O(n + m) space.
 * 
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - A new array containing values from both input arrays, sorted.
 * 
 * @example
 * let arr1 = [1, 3, 4, 5];
 * let arr2 = [2, 4, 6, 8];
 * merge(arr1, arr2);
 * // Returns: [1, 2, 3, 4, 4, 5, 6, 8]
 * 
 * @example
 * let arr3 = [-2, -1, 0, 4, 5, 6];
 * let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
 * merge(arr3, arr4);
 * // Returns: [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]
 * 
 * @example
 * let arr5 = [3, 4, 5];
 * let arr6 = [1, 2];
 * merge(arr5, arr6);
 * // Returns: [1, 2, 3, 4, 5]
 */
function merge(arr1, arr2) {}

/**
 * mergeSort
 * 
 * Sorts an array of numbers using the merge sort algorithm.
 * 
 * Breaks up the array into halves until individual values can be compared.
 * Merges sorted arrays back together to obtain the final sorted array.
 * This function utilizes the merge function to achieve sorting.
 * 
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - A new array containing the sorted values.
 * 
 * @example
 * mergeSort([4, 20, 12, 10, 7, 9]);
 * // Returns: [4, 7, 9, 10, 12, 20]
 * 
 * @example
 * mergeSort([0, -10, 7, 4]);
 * // Returns: [-10, 0, 4, 7]
 * 
 * @example
 * mergeSort([1, 2, 3]);
 * // Returns: [1, 2, 3]
 * 
 * @example
 * mergeSort([]);
 * // Returns: []
 * 
 * @example
 * let nums = [
 *   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546,
 *   75, 67, 4342, 32
 * ];
 * mergeSort(nums);
 * // Returns: [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 */
function mergeSort(arr) {}

module.exports = { merge, mergeSort };
