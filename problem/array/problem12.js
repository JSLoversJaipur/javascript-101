// Example Problem 1: Sum of All Elements in a 2D Array
// Write a function that takes a 2D array as input and returns the sum of all elements.

function sumOfArray(matrix) {
    let sum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
    }
  
    return sum;
  }
  
  console.log(sumOfArray(matrix)); // Output: 45 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9)
  