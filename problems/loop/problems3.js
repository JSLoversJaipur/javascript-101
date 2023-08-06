// Pattern 3: Print a Pyramid
// Print a pyramid pattern using stars (*).
//     *
//    ***
//   *****
//  *******
// *********

// Example:
// Question: Print a pyramid with 5 rows.
// Explanation: We use nested loops to control the spaces and stars in each row based on the row and column number.
for (let i = 1; i <= rows; i++) {
    let pattern = " ".repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
    console.log(pattern);
  }
  