// JavaScript Sorting Methods Code Documentation

// This documentation provides an overview of various sorting methods in JavaScript, including explanations and examples for each method.

// Array for Sorting Examples
const numbers = [5, 3, 8, 2, 1, 4];

// 1. Array.prototype.sort() Method
// The sort() method sorts the elements of an array in place and returns the sorted array. By default, it converts elements to strings and performs a Unicode character-based sorting.

// Example:
const sortArray1 = numbers.sort();
console.log(sortArray1);
// Output: [1, 2, 3, 4, 5, 8]

// Explanation:
// In this example, the sort() method is called on the 'numbers' array. It sorts the array in ascending order based on Unicode character values. The resulting sorted array is stored in 'sortedArray1'.

// 2. Array.prototype.reverse() Method
// The reverse() method reverses the order of the elements in an array in place. The first element becomes the last, and the last element becomes the first.

// Example:
const reversedArray = numbers.reverse();
console.log(reversedArray);
// Output: [4, 1, 2, 8, 3, 5]

// Explanation:
// The reverse() method is called on the 'numbers' array, reversing the order of the elements. The resulting reversed array is stored in 'reversedArray'.

// 3. Array.prototype.sort() with Compare Function
// By providing a compare function as an argument to the sort() method, you can define custom sorting criteria. The compare function determines the order of elements during the sorting process.

// Example:
const sortArray2 = numbers.sort((a, b) => a - b);
console.log(sortArray2);
// Output: [1, 2, 3, 4, 5, 8]

// Sorting Algorithms Code Documentation

// This documentation provides an overview of various sorting algorithms, including explanations and examples for each algorithm.

// Array for Sorting Examples
const count = [5, 3, 8, 2, 1, 4];

// 1. Bubble Sort:
// Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order.

// Example:
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const sortedArray1 = bubbleSort(count);
console.log(sortedArray1);
// Output: [1, 2, 3, 4, 5, 8]

// Explanation:
// In this example, the bubbleSort() function implements the Bubble Sort algorithm on the 'numbers' array. It compares adjacent elements and swaps them if they are in the wrong order. The largest elements gradually "bubble" to the end of the array, resulting in a sorted array.

// 2. Selection Sort:
// Selection Sort divides the array into two portions: the sorted portion at the beginning and the unsorted portion at the end. It repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the first element of the unsorted portion.

// Example:
function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const sortedArray2 = selectionSort(numbers);
console.log(sortedArray2);
// Output: [1, 2, 3, 4, 5, 8]

// Explanation:
// In this example, the selectionSort() function implements the Selection Sort algorithm on the 'numbers' array. It iterates through the unsorted portion, finds the smallest element, and swaps it with the first element of the unsorted portion. This process continues until the entire array is sorted.

// Additional Sorting Algorithms:
// Apart from Bubble Sort and Selection Sort, there are many other sorting algorithms, including:
// - Insertion Sort
// - Merge Sort
// - Quick Sort
// - Heap Sort

// It's important to note that each sorting algorithm has its own advantages and trade-offs in terms of time complexity, space complexity, and stability.

// Example (Insertion Sort):
function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const sortedArray3 = insertionSort(numbers);
console.log(sortedArray3);
// Output: [1, 2, 3, 4, 5, 8]

// Explanation:
// In this example, the insertionSort() function implements the Insertion Sort algorithm on the 'numbers' array. It starts from the second element and inserts it into its correct position within the sorted portion of the array. This process continues for all elements, resulting in a sorted array.

// Conclusion:
// Sorting algorithms are essential in computer science for arranging elements in a desired order. Different algorithms have different time and space complexities, making them suitable for different scenarios. Understanding the characteristics and implementation of these algorithms is crucial for efficient sorting.

// This code documentation provides an overview of sorting algorithms in JavaScript, including examples and explanations for each algorithm.
