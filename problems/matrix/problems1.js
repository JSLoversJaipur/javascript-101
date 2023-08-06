// Matrix Operations: Addition, Multiplication, Subtraction, and Transpose

// Matrices are widely used in mathematics and various fields, including data analysis, image processing, and scientific computations. Let's explore some common matrix operations and their implementations in JavaScript.

// Matrix Addition:
// Two matrices can be added together if they have the same dimensions. The corresponding elements of the matrices are added together to produce a new matrix.

function matrixAddition(matrixA, matrixB) {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
    const resultMatrix = [];
  
    for (let i = 0; i < numRows; i++) {
      resultMatrix[i] = [];
  
      for (let j = 0; j < numCols; j++) {
        resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
  
    return resultMatrix;
  }
  