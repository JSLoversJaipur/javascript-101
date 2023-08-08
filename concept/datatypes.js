// JavaScript has several built-in data types to store different kinds of values.

// Strings represent sequences of characters and are enclosed in single ('') or double ("") quotes.
let message = "Hello, world!";

// Numbers represent numeric values, including integers and floating-point numbers.
let age = 25;

// Booleans represent true or false values.
let isStudent = true;

// Arrays are ordered lists of values, enclosed in square brackets ([]).
let numbers = [1, 2, 3, 4, 5];

// Objects store collections of key-value pairs, enclosed in curly braces ({}).
let person = {
  name: "John",
  age: 30,
  isEmployed: true
};

// Null represents the intentional absence of any object value.
let nullValue = null;

// Undefined indicates that a variable has been declared but has not been assigned a value.
let undefinedValue;

// Functions are reusable blocks of code that perform specific tasks.
let greet = function() {
  console.log("Hello!");
};

// The typeof operator can be used to determine the data type of a value.
console.log(typeof message);     // Output: string
console.log(typeof age);         // Output: number
console.log(typeof isStudent);   // Output: boolean
console.log(typeof numbers);     // Output: object (arrays are a type of object in JavaScript)
console.log(typeof person);      // Output: object
console.log(typeof nullValue);   // Output: object (this is a known quirk in JavaScript)
console.log(typeof undefinedValue);  // Output: undefined
console.log(typeof greet);       // Output: function
