// 04 MODULES, EXPORTS, AND REQUIRE

// 017 First-class functions and function expressions

// function statement
function greet() {
    console.log('Greetings!');
}
// calling the function
greet();
// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

/* examples of expressions: 
'Hello'
3
1 + 2
*/

// function expression
// the following is a statement; LHS is a variable and RHS is a function expression
var greetMe = function() {
    console.log('Hello');
};
greetMe();
// all anonymous functions are function expressions
// variable is greetMe which points to or holds a function expression as its value

// greetMe variable is still first-class so I can pass it around
logGreeting(greetMe);

// using a function expression directly as a parameter 
logGreeting(function() {
    console.log('Hello there again!');
});







