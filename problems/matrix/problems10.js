// Problem 2: Symmetric Matrix Check
// Write a function that takes a matrix as input and checks if it is symmetric (equal to its transpose). Return true if it is symmetric, and false otherwise.

function isSymmetric(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    if (numRows !== numCols) {
      return false;
    }
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  const matrixJ = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6],
  ];
  
  console.log("Is MatrixJ Symmetric?", isSymmetric(matrixJ));