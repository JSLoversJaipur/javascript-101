// Swapping Variables in JavaScript

// Sometimes, it's necessary to swap the values of two variables. JavaScript provides different approaches to accomplish this, with or without using a third variable.

// Swap Variables with a Third Variable
// To swap two variables using a third variable, follow these steps:
// 1. Create a temporary variable to store the value of one of the variables.
// 2. Assign the value of the first variable to the second variable.
// 3. Assign the value of the temporary variable to the first variable.

// Example:
// Question: Swap the values of the variables 'a' and 'b' using a third variable.
// Explanation: We create a temporary variable 'temp' to store the value of 'a'. Then, we assign the value of 'b' to 'a' and finally assign the value of 'temp' to 'b'.
let a = 5;
let b = 10;
let temp;

console.log("Before swapping: a =", a, "b =", b);

temp = a;
a = b;
b = temp;

console.log("After swapping: a =", a, "b =", b);

// Swap Variables without a Third Variable
// To swap two variables without using a third variable, follow these steps:
// 1. Perform the XOR operation between the two variables and store the result in one of the variables.
// 2. Perform the XOR operation between the updated variable and the other variable and store the result in the other variable.
// 3. Perform the XOR operation between the updated variable and the first variable to obtain the original value of the second variable.