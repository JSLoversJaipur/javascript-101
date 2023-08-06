// Pattern 2: Print an Inverted Right-Angled Triangle
// Print an inverted right-angled triangle using stars (*).
// *****
// ****
// ***
// **
// *

// Example:
// Question: Print an inverted right-angled triangle with 5 rows.
// Explanation: Similar to the previous pattern, but the outer loop iterates in the opposite direction.
for (let i = rows; i >= 1; i--) {
    let pattern = "";
  
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
  
    console.log(pattern);
  }
  
  // Medium Level Patterns
  