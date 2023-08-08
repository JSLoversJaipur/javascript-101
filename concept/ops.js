// Object-Oriented Programming (OOP) Code Documentation

// This code documentation provides an introduction to Object-Oriented Programming (OOP) concepts and demonstrates how to implement them in JavaScript.

// Class Definition
// In OOP, a class is a blueprint for creating objects. It defines properties and methods that the objects of the class will have.

/**
 * Class representing a Car.
 */
class Car {
    /**
     * Constructor for creating a new Car object.
     * @param {string} make - The make of the car.
     * @param {string} model - The model of the car.
     * @param {number} year - The manufacturing year of the car.
     */
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    /**
     * Method that returns a formatted string representing the car details.
     * @returns {string} - The formatted car details.
     */
    getDetails() {
      return `${this.make} ${this.model} (${this.year})`;
    }
  }
  
  // Object Creation
  // Objects are instances of classes. They are created using the 'new' keyword followed by the class name and any necessary arguments passed to the constructor.
  
  // Example:
  const myCar = new Car("Toyota", "Camry", 2022);
  console.log(myCar.getDetails());
  // Output: "Toyota Camry (2022)"
  
  // Inheritance
  // Inheritance is a key aspect of OOP that allows classes to inherit properties and methods from other classes.
  
  /**
   * Class representing a Sports Car, inheriting from the Car class.
   */
  class SportsCar extends Car {
    /**
     * Constructor for creating a new SportsCar object.
     * @param {string} make - The make of the sports car.
     * @param {string} model - The model of the sports car.
     * @param {number} year - The manufacturing year of the sports car.
     * @param {boolean} turbo - Indicates whether the sports car has a turbo.
     */
    constructor(make, model, year, turbo) {
      super(make, model, year);
      this.turbo = turbo;
    }
  
    /**
     * Method that returns a formatted string representing the sports car details.
     * Overrides the getDetails() method of the Car class.
     * @returns {string} - The formatted sports car details.
     */
    getDetails() {
      const carDetails = super.getDetails();
      return `${carDetails} ${this.turbo ? "| Turbo" : ""}`;
    }
  }
  
  // Example:
  const mySportsCar = new SportsCar("Ferrari", "488 GTB", 2022, true);
  console.log(mySportsCar.getDetails());
  // Output: "Ferrari 488 GTB (2022) | Turbo"
  
  // Encapsulation
  // Encapsulation is the practice of bundling data and methods within a class, allowing control over access and modification.
  
  // Polymorphism
  // Polymorphism is the ability of an object to take on many forms. It allows objects of different classes to be treated as instances of a common parent class.
  
  // Conclusion:
  // Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects, which are instances of classes. It emphasizes concepts such as class definitions, object creation, inheritance, encapsulation, and polymorphism.
  
  // This code documentation provides an introduction to OOP concepts and demonstrates their implementation in JavaScript using class declarations, object creation, and inheritance.
  
  // Let me know if you have any further questions or need more assistance!
  