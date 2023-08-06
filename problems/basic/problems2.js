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

// Swapping variables is a common programming task, and JavaScript provides different ways to achieve it. Whether you use a third variable or rely on bitwise XOR operations, both approaches allow you to interchange the values of two variables.
