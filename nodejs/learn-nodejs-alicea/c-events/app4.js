// 035 JS Aside: Object.create and prototypes

// use object literals to create a base (parent) object and then use Object.create to create new objects (children) that 
// inherit the properties from the base (parent)

// parent object
const personObject = {
    firstName: '',
    lastName: '',
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
}

// create a child object whose prototype is the personObject or which inherits from the personObject
let john = Object.create(personObject);
// will have the same properties as parent until overwritten

// overwrite the parent's properties
john.firstName = "John";
john.lastName = "Doe";

// create a 2nd object
let jane = Object.create(personObject);
jane.firstName = "Jane";
jane.lastName = "Doe";

console.log(john.greet());
console.log(jane.greet());

