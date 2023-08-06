
// Example:
// Question: What is the length of the longest increasing subsequence in the array [3, 4, -1, 0, 6, 2, 3]?
// Explanation: We can use dynamic programming to solve this problem. We maintain an array to store the length of the longest increasing subsequence ending at each index.
const array = [3, 4, -1, 0, 6, 2, 3];
const dp = Array(array.length).fill(1);
let maxLength = 1;

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] > array[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      maxLength = Math.max(maxLength, dp[i]);
    }
  }
}

console.log("The length of the longest increasing subsequence is:", maxLength);

// -----------------------------------------------------------------------------------

// Find the Median of Two Sorted Arrays
// Given two sorted arrays, find the median element.