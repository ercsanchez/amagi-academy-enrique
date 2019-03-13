// 032 Object properties, first class functions, and arrays

// object properties and methods
const obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

const prop = 'greet';
console.log(obj[prop]);

// first-class functions and arrays

const arr = [];

// adding 3 functions to the array; not the value returned when calling the function but the function expression itself
arr.push(function() {
    console.log('function expression 1');
});
arr.push(function() {
    console.log('function expression 2');
});
arr.push(function() {
    console.log('function expression 3');
});

// calling the functions in the array

// forEach is a method available to all arrays
arr.forEach(function(item) {
    item();  // you can also use return statement but nothing is really returned since all function expressions produce a side-effect
});