// Problem 3: Identity Matrix Check
// Write a function that takes a matrix as input and checks if it is an identity matrix. Return true if it is an identity matrix, and false otherwise.

function isIdentityMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (i === j && matrix[i][j] !== 1) {
          return false;
        }
  
        if (i !== j && matrix[i][j] !== 0) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  const matrixK = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  
  console.log("Is MatrixK an Identity Matrix?", isIdentityMatrix(matrixK));
  
  // These matrix operations and additional example problems provide a foundation for working with matrices. By understanding and implementing these operations, you can perform complex calculations and manipulations on matrices, which are often encountered in various scientific and analytical fields.
  