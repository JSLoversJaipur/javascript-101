
// Matrix Transpose:
// The transpose of a matrix is obtained by exchanging its rows with columns.

function matrixTranspose(matrix) {
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
  