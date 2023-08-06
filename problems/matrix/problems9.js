// Additional Example Problems:

// Problem 1: Dot Product of Matrices
// Given two matrices, calculate the dot product of the matrices and display the result.

function dotProduct(matrixA, matrixB) {
    const numRowsA = matrixA.length;
    const numColsA = matrixA[0].length;
    const numRowsB = matrixB.length;
    const numColsB = matrixB[0].length;
  
    if (numColsA !== numRowsB) {
      return "Matrix dimensions are not compatible for dot product.";
    }
  
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
  
  const matrixH = [
    [1, 2],
    [3, 4],
  ];
  
  const matrixI = [
    [5, 6],
    [7, 8],
  ];
  
  const matrixDotProduct = dotProduct(matrixH, matrixI);
  console.log("Dot Product Result:", matrixDotProduct);