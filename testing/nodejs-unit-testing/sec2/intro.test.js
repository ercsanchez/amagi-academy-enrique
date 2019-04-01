// mocha - testing framework
// assert - standard node.js assertion library but not that powerful
// chai - a more powerful assertion library (should, expect, and assert styles)

const assert = require('assert');


// describe block - tests for a specific module/file
describe('intro: file to be tested', () => {
    
    //context - alias for describe; for each function 
    context('function to be tested', () => {
        
        // before and after all tests
        before( () => {
            console.log('======before')
        });
        after( () => {
            console.log('======after')
        });

        // before and after each test
        beforeEach( () => {
            console.log('--beforeEach')
        });
        afterEach( () => {
            console.log('--afterEach')
        });

        // for each test on the function
        it('should do something', () => {
            assert.equal(1, 1);

            //using cross-env; module is installed and also used in package.json => scripts
            console.log("ENV: ", process.env.NODE_ENV);
            if(process.env.NODE_ENV == 'development') {
                console.log('DEVELOPMENT MODE');
                // normally used to set variables or run functions specific for development mode
            }

        });
        it('should do something else', () => {
            assert.deepEqual({name: 'joe'}, {name: 'joe'});
        });

        // pending test - test that has nothing
        // used for functions that may not be ready for testing or do not even exist
        // reminder to go back and finish this in the future
        it('this is a pending test');   
    });

    context('another function to be tested', () => {
        it('should do something');
    });
});