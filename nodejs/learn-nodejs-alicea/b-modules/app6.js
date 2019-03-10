// 022 Immediately Invoked Function Expressions

// no impact to variables inside IIFE or any other function
let firstName = "Jane";
let surname = 'Doe';

// IIFE - anonymous function, wrapped in parens to turn it into an expression from a function statement, and then immediately invoking it
// loads the following function immediately; no need to create a function and call it
// you can also have parameters and pass values to them
(function (lastName) {
    let firstName = "John";
    console.log(firstName);
    console.log(lastName);
}(surname));
// if not an IIFE, the function above will change the value of firstName (global variable)

console.log(firstName);

// variables inside IIFEs can still look outwards to the parent scope
(function () {
    console.log(surname);
}());