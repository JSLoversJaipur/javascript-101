// Swap Variables without a Third Variable
// To swap two variables without using a third variable, follow these steps:
// 1. Perform the XOR operation between the two variables and store the result in one of the variables.
// 2. Perform the XOR operation between the updated variable and the other variable and store the result in the other variable.
// 3. Perform the XOR operation between the updated variable and the first variable to obtain the original value of the second variable.
  
// Example:
// Question: Swap the values of the variables 'a' and 'b' without using a third variable.
// Explanation: We perform the XOR operation between 'a' and 'b' to update 'a'. Then, we perform the XOR operation between the updated 'a' and 'b' to update 'b'. Finally, we perform the XOR operation between the updated 'b' and the original 'a' to obtain the original value of 'a'.
a = 5;
b = 10;

console.log("Before swapping: a =", a, "b =", b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("After swapping: a =", a, "b =", b);
