/** Merge Sorting algorithm
 * To implement Merge Sort we need two things: merging of arrays and sorting.
 * In our implementation in js we can exploits fact that arrays of 0 or 1 element are always sorted.
 * Its either empty or there just one element in it.
 *  Strategy:
 *      - Decomposing array into smaller arrays of 0 or 1 elements
 *      - Building up a newly larger sorted array from those smaller sorted arrays
 * 
 * lets breack this problem down into smaller pieces:
 *   To implement Merging of Arrays we need a helper function:
 *     - This helper should take in two sorted arrays
 *     - Return a new array with all elements in sort order
 *     - Should run in O(n + m) time/space, n and m being the length of the arrays, and be pure, meaning it doesn't edit inplace but returns new array
 * 
 * mergeArrays Pseudocode:
 *   Create empty out array
 *      Start pointers at beginnings of arrays a and b
 *        If a value <= b value, push a value to out & increase a pointer
 *        Else, push b value to out & increase b pointer
 *   Once we exhaust one array, push all remaining values from other array
 * 
 * mergeSort Pseudocode:
 * Recursively:
 *      Split array into halves until you have arrays that have length of 0 or 1
 *      Merge split arrays and return the merged & sorted array
 *
 */

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
// function merge(arr1, arr2) {}

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
// function mergeSort(arr) {}


// DEMO CODE ------------------------------------------------------------
function merge(arr1, arr2) {
    const results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
			i++;
		} else {
            results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
        results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
        results.push(arr2[j]);
		j++;
	}
    
	return results;
}


function mergeSort(arr) {
    //base case
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

// DEMO CODE ------------------------------------------------------------
module.exports = { merge, mergeSort };