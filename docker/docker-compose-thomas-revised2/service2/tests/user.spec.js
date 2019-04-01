const app = require('../index.js');
const expect = require('chai').expect;
const request = require('request');

describe('Status and Content', () => {
    describe('Main page response', () => {
        it('Status should be 200', (done) => {
            request('http://localhost:5000', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
       
    });
});