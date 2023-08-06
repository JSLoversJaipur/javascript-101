// Example Problem 1: Count Characters in a String
// Write a function that takes a string as input and returns an object with each character as a key and the number of occurrences as its value.

function countCharacters(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = charCount[char] + 1 || 1;
    }
  
    return charCount;
  }
  
  console.log(countCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  