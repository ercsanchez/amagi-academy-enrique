// NODE FUNDAMENTALS

// Modules, Asynchronous, Events, Streams

// async - call, promis, async/await, gene, observables

// processes

// file system reading and directories

// buffer

// events - native module of node

// EVENTS

const events = require('events');

// instantiate a class; what is a class?
const eventEmitter = new events.EventEmitter();

// const eventHandler = function eventFunc() {
//     console.log('emitting events');
//     eventEmitter.emit('event_A');
//     eventEmitter.emit('event_B');
// };
    

eventEmitter.on('event_A', () => {
    console.log('event A received');
});
eventEmitter.on('event_B', () => {
    console.log('event B received');
});

// alternative solution - has to be after eventEmitter.on because something has to catch it first
console.log('emitting events');
    eventEmitter.emit('event_A');
    eventEmitter.emit('event_B');

//eventHandler();