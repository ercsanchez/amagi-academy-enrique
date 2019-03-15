// 034 The Node event emitter - part 2


// using Node's very own event emitter module: almost the same as the event-emitter we created
const events = require('./app3-config.js').events;

const Emitter = require('events');
const emitter1 = new Emitter();

// creates the event, adds it to the events property (contains an object) of emitter1 and pushes a listener function to the property's array value

emitter1.on(events.FILESAVE, function() {
    console.log('A file has just been saved.');
});

// emit the event (i.e. check if the event is valid and execute the listener functions attached to it)
emitter1.emit(events.FILESAVE);

// real world scenario:

// create a new event and listener function
emitter1.on(events.GREET, function() {
    console.log('Someone said hello. A greet event happened.');
});
// add another listener function to the greet event
emitter1.on(events.GREET, function() {
    console.log('How are you?');
})

// artificially create an event (computer can't recognize this as an event)
console.log('Hello! This is the greet event.')

// manually tell the app that the greet event has happened 
emitter1.emit(events.GREET);