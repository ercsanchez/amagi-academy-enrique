// 020 Prototypal inheritance and function constructors

// Function constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

let john = new Person('John', 'Doe');  // calls the function, passing the arguments, and returns the object that is assigned to the variable john
console.log(john.firstName);

// Prototype
// functions - special types of objects so it can have properties
// prototypes are attached to the object not the function constructor

// will produce "Hello, undefined undefined" because it will refer to the function constructor Person
// Person.prototype.greet = function() {
//     console.log(`Hello, ${Person.firstName} ${Person.lastName}.`);
// };

// will produce correct result because of "this" keyword
Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}.`);
};
// prototype of any objects created from Person function constructor
// "this" keyword refers to the object created using new Person('John', 'Doe') and not to the variable john

// will produce "Hello, undefined undefined"
// arrow functions have a different scope of this as compared to regular function expressions
// Person.prototype.greet = () => console.log(`Hello, ${this.firstName} ${this.lastName}.`);

john.greet();

// create a new object using the Person constructor and call the prototype method
let jane = new Person('Jane', 'Doe');
jane.greet();

// to see what are the actual prototype objects attached to an object
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__===jane.__proto__);
