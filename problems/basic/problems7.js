// Problem 5: Find the Largest Number in an Array
// Write a JavaScript program to find and display the largest number in a given array.

// Example:
// Question: Find the largest number in the array [12, 45, 9, 27, 6].
// Explanation: We can iterate through the array and keep track of the largest number encountered.
const array = [12, 45, 9, 27, 6];
let largestNumber = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largestNumber) {
    largestNumber = array[i];
  }
}

console.log("The largest number is:", largestNumber);

// These examples demonstrate how to solve basic JavaScript problems, including calculations, string manipulation, number checks, and array operations.

// Solving these problems helps build a strong foundation in JavaScript and problem-solving skills.
