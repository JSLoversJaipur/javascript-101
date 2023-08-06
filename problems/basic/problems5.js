// Problem 3: Check if a Number is Prime
// Write a JavaScript program to check and display whether a given number is prime or not.

// Example:
// Question: Check if the number 17 is prime.
// Explanation: We can iterate from 2 to the square root of the number to check for divisors. If none are found, the number is prime.
const primeNumber = 17;
let isPrime = true;

if (primeNumber < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
    if (primeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("The number is", isPrime ? "prime." : "not prime.");
