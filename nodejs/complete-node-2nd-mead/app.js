// 010 Requiring your own files
console.log('Starting app.js');

const fs = require('fs');
const os = require('os'); //module names inside require function
// 011 Using 3rd party modules
const _ = require('lodash');   // _ is a common name for the lodash library
// lodash library contains a lot of functions that are used for sorting, filtering, and type checking; well-tested and tried in production
// 010 Requiring your own files
    const notes = require('./notes.js');  // arg of require is the relative path of the file; ./ points to current directory where app.js is in;
let a;

// 010 Requiring your own files
// let result = notes.addNote();
// console.log('result 1:', result);

// let result2 = notes.add(9, -2);
// console.log('result 2:', result2);

// let user = os.userInfo();
// console.log('username:', user.username);

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });
// 011 Using 3rd party modules
console.log(_.isString(true));  // checks if a value is a string and returns true or false
console.log(_.isString('Enrique'));
let filteredArray = _.uniq(['Mike', 2, 'Enrique', 2, 3, 4, 5])  // takes in an array and returns an array, only containing unique values
console.log(filteredArray);

