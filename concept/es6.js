// ES6/ES2015 and ES7/ES2016 introduced several new features and enhancements to JavaScript. Let's explore a few of them:

// 1. Block-Scoped Declarations (let, const)
// Variables declared with 'let' and 'const' have block scope. Block scope means that their visibility is limited to the block of code where they are defined.
// With 'let', you can declare variables that can be reassigned later.
// With 'const', you can declare variables that cannot be reassigned once a value is assigned to them.

// Example:
let count = 5; // 'count' is a variable declared with 'let'
count = 10; // Valid: We can change the value of 'count'
console.log(count); // Prints: 10

const PI = 3.14; // 'PI' is a variable declared with 'const'
PI = 3.14159; // Invalid: We cannot reassign a value to 'PI'
console.log(PI); // Prints: 3.14

// 2. Arrow Functions
// Arrow functions provide a more concise syntax for writing function expressions.
// They are especially useful for writing shorter functions and functions that don't need their own 'this' value.

// Example:
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(4, 2)); // Prints: 8

// 3. Template Literals
// Template literals allow you to create strings with placeholders using backticks (`).
// Inside the placeholders, you can embed expressions or variables by wrapping them with ${}.

// Example:
const name = "Alice";
const greeting = `Hello, ${name}!
Welcome to our website.`;
console.log(greeting);

// 4. Enhanced Object Literals
// Object literals are a way to define objects with key-value pairs. ES6 introduced enhancements to object literals.
// Shorthand property names allow you to omit repeating the property name if it matches the variable name you are assigning to it.
// Computed property names allow you to use an expression as the property name.
// Methods can now be defined directly inside an object literal, using a shorter syntax.

// Example:
const firstName = "John";
const lastName = "Doe";
const person = {
  firstName, // Shorthand property name (equivalent to 'firstName: firstName')
  lastName, // Shorthand property name (equivalent to 'lastName: lastName')
  fullName() { // Method defined directly in the object (shorthand syntax)
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.fullName()); // Prints: John Doe

// 5. Async/Await
// Asynchronous operations, like fetching data from a server, can be written in a simpler way using the 'async' and 'await' keywords.
// The 'async' keyword is used before a function declaration to indicate that it is an asynchronous function.
// The 'await' keyword is used to pause the execution of an asynchronous function until a promise is fulfilled or rejected.

// Example:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

// 6. Other Features
// ES6 and ES7 introduced many other features, including destructuring assignments, default function parameters, classes, modules, and more.
// These features provide additional ways to work with and organize your code.

// It's important to note that not all features are supported in all JavaScript environments. Some features require modern browsers or a build process (like Babel) to convert the code to a compatible version.

// These changes introduced in ES6/ES2015 and ES7/ES2016 enhance JavaScript by providing improved syntax and additional functionality.
// As you progress in your JavaScript learning journey, you'll encounter these features and more, which will help you write cleaner and more efficient code.

// Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!
