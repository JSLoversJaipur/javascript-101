// Matrix Multiplication:
// Two matrices can be multiplied together if the number of columns in the first matrix is equal to the number of rows in the second matrix. The resulting matrix has dimensions based on the number of rows from the first matrix and the number of columns from the second matrix.

function matrixMultiplication(matrixA, matrixB) {
    const numRowsA = matrixA.length;
    const numColsA = matrixA[0].length;
    const numColsB = matrixB[0].length;
    const resultMatrix = [];
  
    for (let i = 0; i < numRowsA; i++) {
      resultMatrix[i] = [];
  
      for (let j = 0; j < numColsB; j++) {
        let sum = 0;
  
        for (let k = 0; k < numColsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
  
        resultMatrix[i][j] = sum;
      }
    }
  
    return resultMatrix;
  }