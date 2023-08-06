// Search in an Array
// Given an array, check if a specific element exists in the array.

// Example:
// Question: Does the array [10, 20, 30, 40, 50] contain the number 30?
// Explanation: We iterate through the array and check if each element matches the desired value.
const array = [10, 20, 30, 40, 50];
const searchValue = 30;
let found = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] === searchValue) {
    found = true;
    break;
  }
}

console.log("The element is", found ? "found" : "not found", "in the array.");