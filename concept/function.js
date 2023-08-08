// Functions are reusable blocks of code that perform a specific task or calculation.

// Defining a function
function greet() {
    console.log("Hello! How are you?");
  }
  
  // Calling a function
  greet(); // Prints: Hello! How are you?
  
  // f(x) = y
  // Functions can also take parameters (input values)
  function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("The sum is: " + sum);
  }
  
  // Calling a function with arguments (values for parameters)
  let final = addNumbers(3, 5); // Prints: The sum is: 8
  
  // Functions can return values
  function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    return product;
  }
  
  // Calling a function and storing the returned value
  let product = multiplyNumbers(4, 2);
  console.log("The result is: " + product); // Prints: The result is: 8
  
  // Functions provide a way to organize and reuse code, making it more modular and easier to maintain.
  
  // They can take input values (parameters) and perform specific operations on those values.
  // Functions can also return values as results of their computations.
  
  // Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!
  
  
  // Example 1: Function without parameters or return value
  function greet() {
    console.log("Hello! How are you?");
  }
  
  greet(); // Prints: Hello! How are you?
  
  // Example 2: Function with parameters
  function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("The sum is: " + sum);
  }
  
  addNumbers(5, 3); // Prints: The sum is: 8
  
  // Example 3: Function with return value
  function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    return product;
  }
  
  let result = multiplyNumbers(4, 2);
  console.log("The result is: " + result); // Prints: The result is: 8
  
  // Example 4: Function with conditional statements
  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let number1 = 6;
  if (isEven(number1)) {
    console.log(number1 + " is even.");
  } else {
    console.log(number1 + " is odd.");
  }
  
  let number2 = 3;
  if (isEven(number2)) {
    console.log(number2 + " is even.");
  } else {
    console.log(number2 + " is odd.");
  }
  
  // Functions can have different purposes and can contain any valid JavaScript code.
  
  // They can perform calculations, manipulate data, interact with the user, make decisions based on conditions, and more.
  
  