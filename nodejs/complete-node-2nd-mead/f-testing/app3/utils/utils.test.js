// 054 Testing asynchronous code


const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
}); 
it('should multiply a number by itself', () => {
    let result = utils.square(2);
    expect(result).toBe(4).toBeA('number');
});

// using mocha with asynchronous functions

// "it" function/test is going to return/finish before the asyncAdd function fires if there is no "done" function passed to the callback to "it" function
// "done" keyword passed to "it" function: mocha knows that it has an asynchronous test and "it" function will not finish processing until "done" is called
// if done isn't called/used and it was passed as an argument, "it function" will never finish executing
it('should asyncAdd two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        // done should be called after assertions and means that "it" function can finish processing
        done();
    });
}); 

// it('2nd: should asyncAdd2 two numbers', (done) => {
//     let result = utils.asyncAdd2(4, 3);
//     expect(result).toBe(7).toBeA('number');
//     done();
// }); 

it('should asyncSquare a number', (done) => {
    utils.asyncSquare(2, (square) => {
        expect(square).toBe(4).toBeA('number');
        done();
    });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set first name and last name', () => {
    let user = {location: 'Manila', age: 30};
    let response = utils.setName(user, 'Enrique Sanchez');

    // this test not required - tests if user and response are equal since objects are passed by reference; using setName function does not copy the user object but just modifies it
    // expect(user).toEqual(response);
    
    // test if response includes certain properties
    expect(response).toInclude({
        firstName: "Enrique",
        lastName: 'Sanchez'
    });
});
