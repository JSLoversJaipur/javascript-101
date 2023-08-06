// Problem 4: Reverse a String
// Write a JavaScript program to reverse a given string and display the reversed string.

// Example:
// Question: Reverse the string "Hello, world!".
// Explanation: We can use the split(), reverse(), and join() methods to reverse the characters in the string.
const string = "Hello, world!";
const reversedString = string.split("").reverse().join("");

console.log("The reversed string is:", reversedString);