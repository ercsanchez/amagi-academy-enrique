// 053 Using an assertion library

// assertion libraries - allow you to make assertions about the values (type, values themselves)

// using mjackson/expect assertion library - yarn add -D expect

// expect('value that is truthy').toExist() - test fails if value passed to expec is not truthy

const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let result = utils.add(33, 11);
    
    // if (result !== 44) {
    //     throw new Error(`Expected value: 44, but got ${result}`);
    // }
    expect(result).toBe(44).toBeA('number');
}); 

it('should multiply a number by itself', () => {
    let result = utils.square(2);

    // if (result !== 4) {
    //     throw new Error(`Expected value: 4, but got ${result}`);
    // }
    expect(result).toBe(4).toBeA('number');
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

// reference of mocha functions
it('should expect some value', () => {
    expect(12).toNotBe(11);

    // does not work with arrays or objects - since toBe checks if they are the exact same objects but they are not since they are two different objects with the same properties
    //expect({name: 'rick'}).toBe({name: 'rick'});

    // equality for objects and arrays: toEqual, toNotEqual
    expect({name: 'rick'}).toEqual({name: 'rick'});
    expect({name: 'rick'}).toNotEqual({name: 'john'});

    // toInclude - checks if array/object includes some items for arrays/properties for objects
    expect([1,2,3,4]).toInclude(2);
    expect({name: 'rick', age: 30}).toInclude({age: 30});

    // toExclude - if does not exist
    expect([1,2,3,4]).toExclude(5);
    expect({name: 'rick', age: 30}).toExclude({age: 25});

});