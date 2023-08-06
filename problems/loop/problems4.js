
// Pattern 4: Print a Diamond
// Print a diamond pattern using stars (*).
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Example:
// Question: Print a diamond pattern with 5 rows.
// Explanation: Similar to the pyramid pattern, but we introduce additional conditions to control the spaces and stars in each row.
for (let i = 1; i <= rows; i++) {
    let pattern = " ".repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
    console.log(pattern);
  }
  
  for (let i = rows - 1; i >= 1; i--) {
    let pattern = " ".repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
    console.log(pattern);
  }
  
  // Hard Level Pattern
  