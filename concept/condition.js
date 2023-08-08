// Conditional statements allow your program to make decisions and execute different blocks of code based on certain conditions.

// 1. If statement:
// The if statement is used to execute a block of code if a specified condition is true.
// If the condition is false, the code block is skipped.

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. If-else statement:
// The if-else statement is used to execute one block of code if the condition is true and another block if it's false.

let num = 7;
if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// 3. If-else if-else statement:
// The if-else if-else statement allows checking multiple conditions and executing different code blocks based on those conditions.

let time = 12;
if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// 4. Ternary operator:
// The ternary operator provides a shorthand way of writing if-else statements in a single line.

let isRaining = true;
let weather = isRaining ? "Take an umbrella" : "Enjoy the sunshine";

// 5. Switch statement:
// The switch statement is used to perform different actions based on different conditions.

let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's Wednesday.");
    break;
  default:
    console.log("It's some other day.");
}

// The 'if', 'if-else', and 'switch' statements are commonly used to make decisions based on conditions.
// The 'ternary operator' provides a compact way to write simple if-else conditions.

