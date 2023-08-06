// // Swapping Variables in JavaScript

// // Sometimes, it's necessary to swap the values of two variables. JavaScript provides different approaches to accomplish this, with or without using a third variable.

// // Swap Variables with a Third Variable
// // To swap two variables using a third variable, follow these steps:
// // 1. Create a temporary variable to store the value of one of the variables.
// // 2. Assign the value of the first variable to the second variable.
// // 3. Assign the value of the temporary variable to the first variable.

// // Example:
// // Question: Swap the values of the variables 'a' and 'b' using a third variable.
// // Explanation: We create a temporary variable 'temp' to store the value of 'a'. Then, we assign the value of 'b' to 'a' and finally assign the value of 'temp' to 'b'.
// let a = 5;
// let b = 10;
// let temp;

// console.log("Before swapping: a =", a, "b =", b);

// temp = a;
// a = b;
// b = temp;

// console.log("After swapping: a =", a, "b =", b);


// new start for tutorial of array problems

// Array Problem Solutions

// Sum of an Array
// Given an array of numbers, calculate the sum of all the numbers in the array.

// Example:
// Question: What is the sum of the numbers in the array [1, 2, 3, 4, 5]?
// Explanation: To find the sum, we iterate through each number in the array and accumulate the total sum.
const number = [1, 2, 3, 4, 5];
let sums = 0;

for (let i = 0; i < numbers.length; i++) {
  sums += numbers[i];
}

console.log("The sum of the array is:", sums);