// The for loop is used to repeatedly execute a block of code for a specific number of iterations.

// Basic syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// Example 1: Printing numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  // Example 2: Iterating over an array
  let fruits = ["apple", "banana", "orange"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  //i=0  0<3 apple
  //i=1 1<3 banana
  //i=2 2<3 orange
  //i=4 4<3 
  
  let i=0
  while(i<fruit.length){
    console.log(fruit[i])
    i++
  }
  
  //i=0 
  //0 < 3 = true; apple; i++
  //1<3 =true; banana; i++
  //2<3 = true; orange; i++
  // 3 <3 = false break
  
  
  
  while(true){
    console.log("Hello")
  }
  //true hello 
  // Initialization: The loop starts with an initialization step where we declare and assign a variable (e.g., `let i = 0`).
  // Condition: The condition is evaluated before each iteration. If the condition is true, the loop body is executed; otherwise, the loop terminates (e.g., `i < fruits.length`).
  // Increment/Decrement: After each iteration, the variable is incremented or decremented to control the loop's progress (e.g., `i++`).
  
  // The loop body is the code block that gets executed on each iteration.
  
  // Note: The variable declared in the initialization step is typically used as an index or counter.
  
  // The for loop is often used when the number of iterations is known or can be determined in advance.
  // It provides a concise way to control the loop's initialization, termination condition, and iteration steps.
  
  // Please be cautious about infinite loops. Ensure that the loop's condition eventually becomes false to prevent an infinite loop.
  
  // ------------------------------------------------------------------------------------------------
  //While Loop
  
  // The while loop repeatedly executes a block of code as long as a specified condition is true.
  
  // Basic syntax:
  // while (condition) {
  //   // code to be executed
  // }
  
  // Example 1: Printing numbers from 1 to 5
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  
  // Example 2: Summing numbers from 1 to 10
  let sum = 0;
  let num = 1;
  while (num <= 10) {
    sum += num;
    num++;
  }
  
  // Condition: The condition is evaluated before each iteration. If the condition is true, the loop body is executed; otherwise, the loop terminates.
  
  // The loop body is the code block that gets executed on each iteration.
  
  // Note: It's crucial to ensure that the loop's condition eventually becomes false to prevent an infinite loop.
  
  // Example 3: Infinite loop (with caution)
  // let x = 1;
  // while (x > 0) {
  //   console.log("This is an infinite loop!");
  // }
  
  // In the example above, the condition 'x > 0' is always true, resulting in an infinite loop. Uncommenting the code may cause your program to hang or crash.
  
  // The while loop is typically used when the number of iterations is unknown, and the loop continues until a specific condition is met.
  
  // Remember to include a mechanism to modify the loop condition or use the 'break' statement within the loop body to exit the loop when necessary.
  
  // -----------------------------------------------------------------------------------------------
  
  // 'for' loop:
  // The 'for' loop is ideal when you know the number of iterations in advance or want to control the loop using an index variable.
  
  // Explanation of a 'for' loop to a kid:
  // Imagine you have a toy train set with five train cars placed in a row.
  
  // 1. First, you start at the first car, which is labeled with number 1.
  // 2. You look at the car and read the number on it.
  // 3. Then, you take a step forward to the next car in the row.
  // 4. You repeat this until you reach the last car.
  
  // Example: Printing numbers from 1 to 5 using a 'for' loop
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  // In the example above:
  // - The loop starts with the first car, which has the number 1.
  // - You look at the car, read the number 1, and print it.
  // - Then, you take a step forward to the next car.
  // - You repeat this process until you reach the last car with the number 5.
  
  // The 'for' loop allows you to go through each car in a specific order, starting from the first car and ending with the last car.
  
  // Remember to ensure that the loop's condition eventually becomes false to prevent an infinite loop.
  
  