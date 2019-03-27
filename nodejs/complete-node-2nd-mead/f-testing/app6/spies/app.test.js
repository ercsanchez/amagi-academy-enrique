// 058 Test spies

// spies - let you swap out a function with a test utility
// - builtin of expect
// - useful for testing if a function was actually called in your app and was passed the correct arguments
// - can even verify if functions called other functions

const expect = require('expect');

// npm module rewire - let's you swap out variables with your tests
// yarn add -D rewire
const rewire = require('rewire');

const app = rewire('./app.js');
// reqire - loads file through require but adds the following methods 
// onto app (db function from app.js):
// app.__set__
// app.__get__
// we can use these to mock out data inside of app.js

describe('App', () => {
    const db = {
        // thing we want to mockup/mock-out
        saveUser: expect.createSpy()
    };

    // replace the db variable in app.js (what you rewired)
    app.__set__ ('db', db);
    //param 1: thing u want to replace (db variable in app.js) , param 2: replacement (db variable in this file, which has saveUser function)
    // what we want to do is replace the db variable in our app.js file with our test db variable

    it('should call the spy correctly', () => {
        // create a spy - returns a function w/c you want to swap out for the real one
        const spy = expect.createSpy();
        // spy will be injected in our code (whether in app.js or any other module and wait for it to be called)
        
        // for instruction purposes, call/execute spy
        spy('Andrew', 25);

        //assertions that can be used with spy:
        
        expect(spy).toHaveBeenCalled();
        // test passes if spy had been called and fails if never called

        expect(spy).toHaveBeenCalledWith('Andrew', 25);
        // tests if spy was called with specific values
    });

    // verifies if .handleSignup really calls saveUser and passes correct parameters
    it('should call saveUser with user object', () => {
        // pass values to handleSignup
        const email = "sanchez.erc@gmail.com";
        const password = "123456abc";
        // function we want to test
        app.handleSignup(email, password);
        expect(db.saveUser)
            .toHaveBeenCalledWith({ email, password });
            // ES6 syntax: instead of having to use { email: email, password: password }
    });
});

