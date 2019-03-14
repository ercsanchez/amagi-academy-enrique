// 040 JS Aside: ES6 classes

// example from lecture 020 and converting it to use ES6 Classes
'use strict';

// Function constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Prototype
// Person.prototype.greet = function() {
//     console.log(`Hello, ${this.firstName} ${this.lastName}.`);
// };

// create a class - this is the function constructor that creates objects
class Person {
    // Constructor properties: inside constructor block
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Prototype properties: inside class block but outside of constructor block: 
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}.`);
    }
}

let john = new Person('John', 'Doe');  // calls the function, passing the arguments, and returns the object that is assigned to the variable john
console.log(john.firstName);

john.greet();

// create a new object using the Person constructor and call the prototype method
let jane = new Person('Jane', 'Doe');
jane.greet();

// to see what are the actual prototype objects attached to an object
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__===jane.__proto__);

