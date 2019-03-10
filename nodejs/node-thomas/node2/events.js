// EVENTS

const events = require('events');

const eventEmitter = new events.EventEmitter();

const eventHandler = function eventFunc() {
    console.log('Several events are happening');
    eventEmitter.emit('event A');
    eventEmitter.emit('event B');
};

eventEmitter.on('event A', () => {
    console.log('event A received');
});

eventEmitter.on('event B', () => {
    console.log('event B received');
});

eventHandler();