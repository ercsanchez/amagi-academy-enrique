// test.spec.js

const app = require('../index.js')
const expect = require('chai').expect;
const request = require('request');

// describe (description on what your testing)
describe('Status and Content', () => {
    describe('Main page response', () => {
        it('Status should be 200', (done) => {
            request('http://localhost:3000', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        
        it('should say Hello World', (done) => {
            request('http://localhost:3000', (error, response, body) => {
                expect(response.body).to.equal('Hello World');
                done();
            });     
        });

    });

    //start 
    // run test
});

//


//
