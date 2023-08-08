// JavaScript Module and Module Import Code Documentation

// This documentation explains the concept of modules in JavaScript and how to import modules to use their functionality.

// Modules:
// In JavaScript, a module is a self-contained unit of code that encapsulates related functionality. It allows you to split your code into separate files, making it more modular and easier to manage.
// Each module can have its own variables, functions, classes, or objects, which are scoped within the module and not accessible from other modules by default.

// Exporting a Module:
// To make functionality from a module accessible to other parts of your code, you need to export it using the `export` keyword. You can export variables, functions, or classes individually or as a group using the `export` statement.

// Example: Exporting a Module
// math.js
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

// Importing a Module:
// To use functionality from an exported module, you need to import it in another file using the `import` keyword. The imported functionality becomes available for use within the importing module.

// Example: Importing a Module
// main.js
import { PI, add } from './math.js';

console.log(PI); // Output: 3.14

console.log(add(2, 3)); // Output: 5

// Default Exports:
// In addition to named exports, a module can have a default export. It is the primary export of a module and does not require curly braces when importing.

// Example: Default Export
// math.js
const multiply = (a, b) => a * b;

export default multiply;

// main.js
import multiply from './math.js';

console.log(multiply(2, 3)); // Output: 6

// Renaming Imported Exports:
// You can also rename imported exports using the `as` keyword. It allows you to assign a different name to an imported export, providing flexibility in naming.

// Example: Renaming Imported Exports
// math.js
export const square = (num) => num * num;

// main.js
import { square as sq } from './math.js';

console.log(sq(4)); // Output: 16

// Conclusion:
// Modules in JavaScript help organize code and promote reusability. They allow you to split code into smaller, manageable units. By exporting and importing modules, you can selectively use the functionality you need in different parts of your application.

// Note: Modules are natively supported in modern JavaScript environments, but in older environments or when working with JavaScript on the frontend (in a browser), you may need to use a bundler like Webpack or a module loader like RequireJS to handle module imports and exports.

// This code documentation provides an overview of modules and module imports in JavaScript, including exporting and importing functionality between modules.
