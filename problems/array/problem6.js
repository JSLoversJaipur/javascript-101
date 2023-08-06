
// Reverse an Array
// Given an array, reverse the order of its elements.

// Example:
// Question: Reverse the array [1, 2, 3, 4, 5].
// Explanation: We swap elements from the beginning and end of the array, gradually moving towards the middle.
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
  const temp = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = temp;
}

console.log("The reversed array is:", array);