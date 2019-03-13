// 036 Inheriting from the event emitter - part 1

const EventEmitter = require('events');
const util = require('util');

function Greeter() {
    this.greeting = "Hello!";
}

// util.inherits enables objects created using Greeter constructor to have access to the properties of EventEmitter's prototype
util.inherits(Greeter, EventEmitter);

// adding a greet method to Greeter prototype
Greeter.prototype.greet = function(data) {
    // create the 'greet' event by adding a prototype property specific to Greeter constructor
    console.log(`${this.greeting} ${data}`);
    // create an event emitter by using a property/method of EventEmitter's prototype
    this.emit('greet', data);  // any params after 1st param of .emit function (i.e. 'greet') will be passed to the listener functions attached to the event as defined by .on function
};

// create an object using the Greeter constructor 
const greeter1 = new Greeter();

// objects created using Greeter constructor have access to the properties of EventEmitter's prototype
// create event listeners for 'greet' event by using a property/method of EventEmitter's prototype
greeter1.on('greet', function(data) {
    console.log(`A greeting event just occured for: ${data}`);
});

greeter1.greet('Enrique');