/**
 * bubbleSort
 *
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * Bubble sort is an O(n^2) time complexity algorithm.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - A new array containing the sorted values.
 *
 * @example
 * bubbleSort([4, 20, 12, 10, 7, 9]);
 * // Returns: [4, 7, 9, 10, 12, 20]
 *
 * @example
 * bubbleSort([0, -10, 7, 4]);
 * // Returns: [-10, 0, 4, 7]
 *
 * @example
 * bubbleSort([1, 2, 3]);
 * // Returns: [1, 2, 3]
 *
 * @example
 * bubbleSort([]);
 * // Returns: []
 *
 * @example
 * const nums = [
 *   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546,
 *   75, 67, 4342, 32
 * ];
 * bubbleSort(nums);
 * // Returns: [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 */
function bubbleSort(arr) {
    if(arr.length <= 1){
        return arr
    }
	let swapped = true;
	let i = 0;
	let count = 0;

	while (swapped) {
		swapped = false;
		// Loop with j from the beginning until end - i
		for (let j = 0; j < arr.length - 1 - i ; j++) {
			count++;
			// If arr[j] is greater than arr[j+1], swap those two values!
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}

		i++;
	}

	// Return the sorted array
	console.log("TOTAL COUNT:", count);
	return arr;
}

// DEMO CODE -----------------------------------------
// function bubbleSort(arr) {
// Loop with i from end of array towards beginning
// for (let i = 0; i < arr.length; i++) {
// 	let swapped = false;
// 	// Loop with j from the beginning until i - 1
// 	for (let j = 0; j < arr.length - i; j++) {
// 		count++;
// 		// If arr[j] is greater than arr[j+1], swap those two values!
// 		if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 			swapped = true;
// 		}
// 	}
// 	if (!swapped) break;
// }
// // Return the sorted array
// return arr;
// }
// DEMO CODE -------------------------------------------

module.exports = bubbleSort;

