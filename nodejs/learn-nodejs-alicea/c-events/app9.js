// 041 Inheriting from the event emitter - part 3
// using example from lecture 39 and converting it to use ES6 Classes
'use strict';

const Greeter = require('./app9-greet.js');

const greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log(`A greeting event just occured for: ${data}`);
});

greeter1.greet('Enrique');