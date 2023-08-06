// These examples demonstrate how to solve simple problems with arrays in JavaScript.
// By using loops and conditional statements, you can perform various operations on arrays, such as calculating sums, searching for elements, removing elements, or traversing the array.

// Medium Level Array Problem Solutions

// Find the Maximum Number in an Array
// Given an array of numbers, find the maximum number in the array.

// Example:
// Question: What is the maximum number in the array [4, 9, 2, 7, 5]?
// Explanation: We initialize a variable to store the maximum value and iterate through the array, updating the maximum value if we find a higher number.l
const numbers = [4, 9, 2, 7, 5];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log("The maximum number in the array is:", maxNumber);