// JavaScript Class Code Documentation

// This code documentation provides an overview of classes in JavaScript, including how to define and use them to create objects with shared properties and methods.

// Class Declaration
// Classes in JavaScript are declared using the 'class' keyword followed by the class name.

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
  
  // Creating Objects from a Class
  // Objects can be created from a class using the 'new' keyword followed by the class name and any necessary arguments passed to the constructor.
  
  // Example:
  const myCar = new Car("Toyota", "Camry", 2022);
  console.log(myCar.getDetails());
  // Output: "Toyota Camry (2022)"
  
  // Inheritance
  // Classes in JavaScript support inheritance, allowing you to create child classes that inherit properties and methods from a parent class using the 'extends' keyword.
  
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
  
  // Conclusion:
  // Classes in JavaScript provide a way to create objects with shared properties and methods. They allow you to define blueprints for creating multiple objects of the same type. You can create objects from a class using the 'new' keyword, and classes can also be extended to create child classes with additional properties and methods.
  
  // This code documentation provides an overview of classes in JavaScript, including class declaration, object creation, and inheritance.
  
  