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