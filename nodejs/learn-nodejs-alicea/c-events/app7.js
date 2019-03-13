// 039 Inheriting from the event emitter - part 2

const EventEmitter = require('events');
const util = require('util');

function Greeter() {
    // any object created using the Greeter constructor will also be passed to the EventEmitter constructor, which attaches its "own" properties to the object thereby inheriting EventEmitter's "own" properties and not just its prototype properties
    EventEmitter.call(this);  // "this" keyword in EventEmitter now also points to the objects created by the Greeter constructor
    // equivalent to a superconstructor

    this.greeting = "Hello!";
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(`${this.greeting} ${data}`);
    this.emit('greet', data); 
};

const greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log(`A greeting event just occured for: ${data}`);
});

greeter1.greet('Enrique');

// simpler example

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    // any object created with Person constructor will also inherit Policeman constructor's own id property
}

Person.prototype.greet = function() {
    return (`Hello ${this.firstName} ${this.lastName}`);
}

function Policeman() {
    // whenever a new Policeman object is created, Person.call(this) will also be executed; that is why this line of code won't work outside of Policeman constructor
    Person.call(this);
    this.badgeNumber = '1';
}

// any new Policeman object will inherit the greet prototype property from Person which does not include the firstName and lastName own properties of Person
util.inherits(Policeman, Person); 
// just makes Person prototype prop available to Policeman prototype

const policeman1 = new Policeman();

// this also works but only for policeman1 and not all objects created using the Policeman constructor
// Person.call(policeman1);

console.log( policeman1.greet() );
// => will return Hello undefined undefined if no Person.call(this) inside Policeman constructor, since firstName and lastName properties of Person would not be inherited



