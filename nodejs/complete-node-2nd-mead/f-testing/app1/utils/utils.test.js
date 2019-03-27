// 051 Mocha and basic testing

// extension .test.js tells mocha that this is the file storing the test cases 

// test case - function that runs some code

// it - creates a new test case; provided by mocha
// no need to import, since we will run project test files thru mocha

const utils = require('./utils');

// BDD - behaviour driven dev't. - describes exactly what the test should verify; making tests based on expected behaviour of code, functions specifically
// string is descriptor, function - code that tests that the add function works as expected

// example 1st test case:
it('should add two numbers', () => {
    
    // pass any value you want to the function
    let result = utils.add(33, 11);
    // no assertion on what is returned by utils.add if no if statement

    // testing errors: test if result doesn't produce desired value 
    // asserting what should be returned based on the values you passed to the function
    if (result !== 44) {
        throw new Error(`Expected value: 44, but got ${result}`);
    }
}); 

// modify package.json
// "scripts": {
    // "test": "mocha **/*.test.js"
// },

// ** - looks for all directories
// *.test.js looks for all files ending with .test.js

// create 2nd test case:
it('should multiply a number by itself', () => {
    let result = utils.square(2);
    if (result !== 4) {
        throw new Error(`Expected value: 4, but got ${result}`);
    }
});

// 052 Watch and auto restart tests
// to run nodemon
// nodemon --exec 'yarn test'

// add it in scripts
// "scripts": {
//     "test": "mocha **/*.test.js",
//     "test-watch": "nodemon --exec 'yarn test'"
// },

//make script work in windows
// "scripts": {
//     "test": "mocha **/*.test.js",
//     "test-watch": "nodemon --exec \"yarn test\""
// },

// to run a script with npm: npm run name-of-script