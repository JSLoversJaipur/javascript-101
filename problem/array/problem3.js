
// Remove from an Array
// Given an array and a specific element, remove the element from the array if it exists.

// Example:
// Question: Remove the number 25 from the array [10, 20, 25, 30, 40].
// Explanation: We iterate through the array and remove the element if it matches the desired value.
const numbersArray = [10, 20, 25, 30, 40];
const removeValue = 30;

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] === removeValue) {
    numbersArray.splice(i, 2);
    break;
  }
}

console.log("The updated array is:", numbersArray);