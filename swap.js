

// Swapping Variables in JavaScript

// Sometimes, it's necessary to swap the values of two variables. JavaScript provides different approaches to accomplish this, with or without using a third variable.

// Swap Variables with a Third Variable
// To swap two variables using a third variable, follow these steps:
// 1. Create a temporary variable to store the value of one of the variables.
// 2. Assign the value of the first variable to the second variable.
// 3. Assign the value of the temporary variable to the first variable.

// Example:
// Question: Swap the values of the variables 'a' and 'b' using a third variable.
// Explanation: We create a temporary variable 'temp' to store the value of 'a'. Then, we assign the value of 'b' to 'a' and finally assign the value of 'temp' to 'b'.
let a = 5;
let b = 10;
let temp;

console.log("Before swapping: a =", a, "b =", b);

temp = a;
a = b;
b = temp;

console.log("After swapping: a =", a, "b =", b);

// Swap Variables without a Third Variable
// To swap two variables without using a third variable, follow these steps:
// 1. Perform the XOR operation between the two variables and store the result in one of the variables.
// 2. Perform the XOR operation between the updated variable and the other variable and store the result in the other variable.
// 3. Perform the XOR operation between the updated variable and the first variable to obtain the original value of the second variable.
  
// Example:
// Question: Swap the values of the variables 'a' and 'b' without using a third variable.
// Explanation: We perform the XOR operation between 'a' and 'b' to update 'a'. Then, we perform the XOR operation between the updated 'a' and 'b' to update 'b'. Finally, we perform the XOR operation between the updated 'b' and the original 'a' to obtain the original value of 'a'.
a = 5;
b = 10;
=======
// Example Problem 1: Count Characters in a String
// Write a function that takes a string as input and returns an object with each character as a key and the number of occurrences as its value.


function countCharacters(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = charCount[char] + 1 || 1;
    }
  
    return charCount;
  }
  
  console.log(countCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  
  // Example Problem 2: Grouping Objects by a Property
  // Write a function that takes an array of objects and groups them based on a specified property, returning an object with the grouped values.
  
  function groupObjectsByProperty(objects, property) {
    const groupedObjects = {};
  
    for (let obj of objects) {
      const value = obj[property];
  
      if (groupedObjects[value]) {
        groupedObjects[value].push(obj);
      } else {
        groupedObjects[value] = [obj];
      }
    }
  
    return groupedObjects;
  }
  
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Alchemist", author: "Paulo Coelho" },
  ];
  
  console.log(groupObjectsByProperty(books, "author"));
  // Output:
  // {
  //   'Paulo Coelho': [
  //     { title: 'The Alchemist', author: 'Paulo Coelho' },
  //     { title: 'The Alchemist', author: 'Paulo Coelho' }
  //   ],
  //   'Harper Lee': [ { title: 'To Kill a Mockingbird', author: 'Harper Lee' } ],
  //   'F. Scott Fitzgerald': [ { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' } ]
  // }
  
  // These examples demonstrate how to work with objects, key-value pairs, and hash maps in JavaScript. Objects are versatile data structures that can be used to store and manipulate data efficiently.
  
  // By understanding and utilizing objects effectively, you can solve a variety of problems and perform advanced data manipulations in your JavaScript programs.