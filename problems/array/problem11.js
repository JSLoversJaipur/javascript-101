
// Example:
// Question: Rotate the array [1, 2, 3, 4, 5] by 2 steps.
// Explanation: We can reverse the entire array, then reverse the first part up to the rotation count, and finally reverse the remaining part.
const array = [1, 2, 3, 4, 5];
const rotationCount = 2;

function reverse(array, start, end) {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

rotationCount %= array.length;
reverse(array, 0, array.length - 1);
reverse(array, 0, rotationCount - 1);
reverse(array, rotationCount, array.length - 1);

console.log("The rotated array is:", array);

// These examples demonstrate how to solve hard-level problems with arrays in JavaScript.
// These problems involve more complex algorithms and techniques, such as dynamic programming for finding the longest increasing subsequence, merging and sorting arrays to find the median, or performing rotation operations on arrays.

// Solving these problems requires a good understanding of algorithms and problem-solving skills.