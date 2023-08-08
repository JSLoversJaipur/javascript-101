// Error Handling and Exception Handling in JavaScript

// JavaScript provides mechanisms for handling errors and exceptions, allowing you to gracefully handle unexpected situations and prevent program crashes.

// try...catch Statement
// The try...catch statement is used to catch and handle exceptions that occur within a block of code.

// Example:
try {
    // Code that might throw an error
    const result = 10 / 0; // This will throw a "Division by zero" error
    console.log(result);
  } catch (error) {
    // Code to handle the error
    console.log("An error occurred:", error.message);
  }
  
  // The try block contains the code that might throw an error.
  // If an error occurs, it is caught by the catch block, and the error object is available for further handling.
  // The catch block executes when an exception is thrown, and you can access the error object to obtain information about the error.
  
  // Throwing Custom Errors
  // In addition to catching built-in errors, you can also throw custom errors to handle specific situations in your code.
  
  // Example:
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
  
    return a / b;
  }
  
  try {
    const result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
  
  // In this example, the divide() function throws a custom error if the divisor is zero.
  // The catch block is used to handle the custom error and display a specific error message.
  
  // The finally Block
  // The finally block is an optional block that follows the try...catch block.
  // It executes regardless of whether an exception was thrown or caught.
  
  // Example:
  try {
    // Code that might throw an error
    console.log("Try block");
  } catch (error) {
    console.log("Catch block");
  } finally {
    console.log("Finally block");
  }
  
  // In this example, the finally block always executes, regardless of whether an error occurred or was caught.
  
  // Exception handling is crucial for writing robust and reliable code.
  // It allows you to handle errors gracefully, perform necessary cleanup tasks, and provide meaningful feedback to users.
  
  // Remember to catch specific exceptions when possible, handle errors appropriately, and use custom errors to handle specific scenarios in your code.
  
  // Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!
  