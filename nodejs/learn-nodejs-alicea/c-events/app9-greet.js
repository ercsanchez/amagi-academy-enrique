// 041 Inheriting from the event emitter - part 3
// using example from lecture 39 and converting it to use ES6 Classes
'use strict';

const EventEmitter = require('events');
// const util = require('util');  

// create a class and indicate the parent (or superconstructor in other languages) to inherit from using extends keyword
// class Greeter replaces Greeter constructor
// extends EventEmitter replaces util.inherits(Greeter, EventEmitter);
module.exports = class Greeter extends EventEmitter {
    constructor() {
        // super(); replaces EventEmitter.call(this); 
        super(); // calls the parent (or superconstructor) of Greeter (i.e. EventEmitter) so any object created with Greeter will now be attached the own properties of the parent

        this.greeting = 'Hello!';
    }
    // prototype
    greet(data) {
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data); 
    }
}

// this also works
// module.exports = Greeter;

// function Greeter() {
//     // any object created using the Greeter constructor will also be passed to the EventEmitter constructor, 
//     // which attaches its "own" properties to the object thereby inheriting EventEmitter's "own" properties and not just its prototype properties
//     EventEmitter.call(this);  // "this" keyword in EventEmitter now also points to the objects created by the Greeter constructor
//     // equivalent to a superconstructor in other languages

//     this.greeting = "Hello!";
// }

// util.inherits(Greeter, EventEmitter);

// Greeter.prototype.greet = function(data) {
//     console.log(`${this.greeting} ${data}`);
//     this.emit('greet', data); 
// };