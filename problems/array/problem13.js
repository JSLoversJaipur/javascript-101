// Example Problem 2: Transpose a 2D Array
// Write a function that takes a 2D array as input and returns its transpose, where rows become columns and columns become rows.

function transposeArray(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transposedMatrix = [];
  
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j] = [];
  
      for (let i = 0; i < numRows; i++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  console.log(transposeArray(matrix));
  // Output:
  // [
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [3, 6, 9]
  // ]
  
  // These examples demonstrate how to work with 2D arrays in JavaScript. 2D arrays are useful for representing grids, matrices, tables, and other structured data.
  
  // You can access elements, modify values, iterate over elements, and perform various operations on 2D arrays to solve different problems.
  
  // Understanding 2D arrays is beneficial for working with data structures, algorithms, and applications involving grid-based computations.