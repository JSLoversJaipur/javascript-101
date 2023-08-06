// Finding the Average of an Array
// Given an array of numbers, calculate the average of all the numbers in the array.

// Example:
// Question: What is the average of the numbers in the array [2, 4, 6, 8, 10]?
// Explanation: We calculate the sum of the numbers and divide it by the total count of numbers in the array.
const numbersArray = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}

const average = sum / numbersArray.length;

console.log("The average of the array is:", average);

// These examples demonstrate how to solve medium-level problems with arrays in JavaScript.
// By using loops, conditional statements, and appropriate algorithms, you can tackle more complex array problems, such as finding maximum numbers, reversing arrays, checking palindromes, or calculating averages.

// Hard Level Array Problem Solutions

// Find the Longest Increasing Subsequence
// Given an array of numbers, find the length of the longest increasing subsequence (elements in increasing order, not necessarily consecutive).