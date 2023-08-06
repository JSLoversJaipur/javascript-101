// Problem 2: Calculate the Sum of Digits in a Number
// Write a JavaScript program to calculate and display the sum of digits in a given number.

// Example:
// Question: Calculate the sum of digits in the number 12345.
// Explanation: We can extract each digit from the number and add them together to find the sum.
const number = 12345;
let sum = 0;

let temp = number;
while (temp > 0) {
  sum += temp % 10;
  temp = Math.floor(temp / 10);
}

console.log("The sum of digits is:", sum);