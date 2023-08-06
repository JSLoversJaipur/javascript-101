
// Matrix Subtraction:
// Subtraction of matrices follows the same rules as addition, but with subtraction instead.

function matrixSubtraction(matrixA, matrixB) {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
    const resultMatrix = [];
  
    for (let i = 0; i < numRows; i++) {
      resultMatrix[i] = [];
  
      for (let j = 0; j < numCols; j++) {
        resultMatrix[i][j] = matrixA[i][j] - matrixB[i][j];
      }
    }
  
    return resultMatrix;
  }
  