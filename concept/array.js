// Arrays are ordered collections of values, represented by square brackets ([]).
// They can hold values of different data types, such as numbers, strings, objects, or even other arrays.

// Creating an array
let fruits = ["apple", "banana", "orange"];

// Index in an array:
// Each value in an array has an index, which represents its position within the array.
// Array indices start from 0, meaning the first element is at index 0, the second element is at index 1, and so on.

// Accessing elements using indices
let firstFruit = fruits[0]; // Accessing the first element (index 0)
let secondFruit = fruits[1]; // Accessing the second element (index 1)
let lastFruit = fruits[fruits.length - 1]; // Accessing the last element dynamically using the length property

// Modifying elements using indices
fruits[1] = "grape"; // Modifying the second element (index 1)

// Index Range:
// The valid index range for an array goes from 0 to (array length - 1).
// Attempting to access an index outside this range will result in an undefined value.

// Example: Accessing elements using invalid indices
let thirdFruit = fruits[2]; // Accessing the third element (index 2)
let invalidFruit = fruits[3]; // Accessing an invalid index (returns undefined)

// Important note:
// When using array indices, it's crucial to ensure that the index falls within the valid range to avoid errors.

// Arrays are incredibly useful for storing and accessing multiple values by their respective indices.

// Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!

// Adding elements
fruits.push("kiwi"); // Adding an element at the end of the array
fruits.unshift("strawberry"); // Adding an element at the beginning of the array

// Removing elements
let removedFruit = fruits.pop(); // Removing the last element and storing it
let removedFirstFruit = fruits.shift(); // Removing the first element and storing it

// Finding the index of an element
let indexOfOrange = fruits.indexOf("orange");

// Checking if an element exists in the array
let hasBanana = fruits.includes("banana");

// Array length
let length = fruits.length; // Number of elements in the array

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Arrays can also contain values of different types
let mixedArray = ["apple", 10, true, { name: "John" }];

// Nested arrays (arrays within arrays)
let nestedArray = [["a", "b"], ["c", "d"], ["e", "f"]];

// Please note that array indices start from 0, so the first element is at index 0.

// JavaScript 2D Arrays

// A 2D array, also known as a matrix, is an array of arrays. It represents a grid-like structure where each element is accessed using two indices: row and column.

// Example of a 2D Array:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing Elements in a 2D Array:
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

// Modifying Elements in a 2D Array:
matrix[1][0] = 10;
console.log(matrix[1][0]); // Output: 10

// Iterating Over Elements in a 2D Array:
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
