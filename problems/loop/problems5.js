// Pattern 5: Print a Spiral
// Print a spiral pattern using stars (*).
// *****
//     *
// ******
// *    *
// *******
//        *
// *******
// *    *
// ******
//     *

// Example:
// Question: Print a spiral pattern with 5 rows and 5 columns.
// Explanation: We use a 2D array to construct the spiral pattern, filling in the stars in a clockwise manner.
const matrix = [];
let startRow = 0,
  endRow = rows - 1,
  startCol = 0,
  endCol = rows - 1,
  counter = 1;

while (startRow <= endRow && startCol <= endCol) {
  for (let i = startCol; i <= endCol; i++) {
    matrix[startRow] = matrix[startRow] || [];
    matrix[startRow][i] = counter++;
  }

  startRow++;

  for (let i = startRow; i <= endRow; i++) {
    matrix[i] = matrix[i] || [];
    matrix[i][endCol] = counter++;
  }

  endCol--;

  for (let i = endCol; i >= startCol; i--) {
    matrix[endRow][i] = counter++;
  }

  endRow--;

  for (let i = endRow; i >= startRow; i--) {
    matrix[i][startCol] = counter++;
  }

  startCol++;
}

for (let i = 0; i < rows; i++) {
  let pattern = "";

  for (let j = 0; j < rows; j++) {
    pattern += matrix[i][j] ? "*" : " ";
  }

  console.log(pattern);
}

// These examples demonstrate how to solve star pattern problems in JavaScript, including easy, medium, and hard-level patterns.
// By using nested loops and appropriate logic, you can print various star patterns, such as right-angled triangles, pyramids, diamonds, or even complex spiral patterns.

// Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!
