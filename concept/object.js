// In JavaScript, objects are a fundamental data type that allow you to store and organize related data as key-value pairs.

// Creating an object
let person = {
    name: "John",
    age: 30,
    isEmployed: true
  };
  
  // Accessing object properties
  let personName = person.name; // Accessing the "name" property
  let personAge = person["age"]; // Accessing the "age" property using square bracket notation
  
  // Modifying object properties
  person.age = 31; // Modifying the value of the "age" property
  
  // Adding new properties
  person.city = "New York"; // Adding a new property "city" with the value "New York"
  
  // Removing properties
  delete person.isEmployed; // Removing the "isEmployed" property from the object
  
  // Objects can hold values of different data types, including other objects and arrays
  let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    features: ["GPS", "Bluetooth", "Backup camera"],
    owner: {
      name: "Alice",
      age: 35
    }
  };
  
  // Accessing nested object properties
  let ownerName = car.owner.name; // Accessing the nested "name" property within the "owner" object
  
  // Objects provide a way to represent and organize data in a structured manner.
  
  // They are useful when you want to group related information together and access it using meaningful keys or property names.
  
  // Let me know if there's anything else you'd like to learn about JavaScript or if you have any further questions!
  