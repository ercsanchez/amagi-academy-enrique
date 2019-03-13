// 033 The Node event emitter - part 1

// using our event emitter module

const Emitter = require('./app2-emitter.js');

const emitter1 = new Emitter();

// check if object was created
console.log(emitter1);

// creates the event, adds it to the events property (contains an object) of emitter1 and pushes a listener function to the property's array value
// key: fileSave, value: function
// in Node.js, an event is just a property name on an object
emitter1.on('fileSaved', function() {
    console.log('A file has just been saved.');
});

// check if a fileSave property was added to the events object of emitter1 object
console.log(emitter1);

// emit the event (i.e. check if the event is valid and execute the listener functions attached to it)
emitter1.emit('fileSaved');


// real world scenario:

// create a new event and listener function
emitter1.on('greet', function() {
    console.log('Someone said hello. A greet event happened.');
});
// add another listener function to the greet event
emitter1.on('greet', function() {
    console.log('How are you?');
})

// artificially create an event (computer can't recognize this as an event)
console.log('Hello! This is the greet event.')

// manually tell the app that the greet event has happened 
emitter1.emit('greet');

