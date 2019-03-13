// 033 The Node event emitter - part 1

// building our own event emitter module

// create an emitter object that contains all possible events you want to have on your app
function Emitter() {
    this.events = { };
}
/* expected output of Emitter object:
const emitterObject1 = new Emitter();

emitterObject1 = {
    events: { },
};

*/

// create a prototype that adds listeners on a specific event happening 
Emitter.prototype.on = function(type, listener) {
    // if property doesn't exist then add a new property (containing empty array) to events property (object) of the object created by the Emitter constructor
    this.events[type] = this.events[type] || [];
    // add a listener function to the property
    this.events[type].push(listener);
};
// on means upon/on an event happening
// type is the specific event; in Node.js, a specific event (the param type) is just a property name on an object
// NOTE: in reality, the code above creates the event when on prototype is executed

/* 
expected output of prototype: on
on(FileSave, function1);
on(FileSave, function2);

emitterObject1 = {
    events: {
        onFileSave: [ function1() {}, function2() {} ],
    },
};
*/

// create a prototype that emits a certain event and executes listener function/s based on the event type
Emitter.prototype.emit = function(type) {
    // if event happened, i.e. that event (specifically the value of param type) is in the events object, then execute the listener functions inside of it's array value 
    if (this.events[type]) {
        this.events[type].forEach( function(listener) {
            listener();
        });
    }
};
// NOTE: in reality, emit prototype only checks if the event is in the events object so it doesn't actually produce the event but it does execute the listener functions

/* expected output of prototype: emit
emit(onFileSave);

=> whatever your listener functions return

*/

module.exports = Emitter;