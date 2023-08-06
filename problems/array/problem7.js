// Check for Palindrome
// Given a string or array, check if it is a palindrome (reads the same forwards and backwards).

// Example:
// Question: Is the string "racecar" a palindrome?
// Explanation: We compare characters from the beginning and end of the string, gradually moving towards the middle, to determine if it is a palindrome.
const word = "racecar";
let isPalindrome = true;

for (let i = 0; i < Math.floor(word.length / 2); i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log("The word is", isPalindrome ? "a palindrome." : "not a palindrome.");