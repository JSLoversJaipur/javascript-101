// Example:
// Question: What is the median of the arrays [1, 3, 5] and [2, 4, 6]?
// Explanation: We can merge the two arrays and find the median based on the merged array's length.
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const mergedArray = [...array1, ...array2].sort((a, b) => a - b);
const median = mergedArray.length % 2 === 0 ? (mergedArray[mergedArray.length / 2 - 1] + mergedArray[mergedArray.length / 2]) / 2 : mergedArray[Math.floor(mergedArray.length / 2)];

console.log("The median of the arrays is:", median);

// Rotate an Array
// Given an array and a rotation count, rotate the array to the right by the specified number of steps.