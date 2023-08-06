// Star Pattern Problem Solutions

// Easy Level Patterns

// Pattern 1: Print a Right-Angled Triangle
// Print a right-angled triangle using stars (*).
// *
// **
// ***
// ****
// *****

// Example:
// Question: Print a right-angled triangle with 5 rows.
// Explanation: We use nested loops to print the desired pattern based on the row and column number.
const rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  console.log(pattern);
}
