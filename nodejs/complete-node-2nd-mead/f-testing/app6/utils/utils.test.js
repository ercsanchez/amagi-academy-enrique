// 058 Test spies

const expect = require('expect');
const utils = require('./utils');

// describe lets us make groups of tests

// Utils block containing tests for utils.js code
describe('Utils', () => {

    // convention for describe blocks: #methodName
    describe('#add', () => {
        it('should add two numbers', () => {
            let result = utils.add(33, 11);
            expect(result).toBe(44).toBeA('number');
        });
    });

    describe('#multiply', () => {
        it('should multiply a number by itself', () => {
            let result = utils.square(2);
            expect(result).toBe(4).toBeA('number');
        });
    });

    describe('#asyncMethods', () => {
        it('should asyncAdd two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        }); 
        it('should asyncSquare a number', (done) => {
            utils.asyncSquare(2, (square) => {
                expect(square).toBe(4).toBeA('number');
                done();
            });
        });
    });
    
    describe('#addProperties', () => {
        it('should set first name and last name', () => {
            let user = {location: 'Manila', age: 30};
            let response = utils.setName(user, 'Enrique Sanchez');
            expect(response).toInclude({
                firstName: "Enrique",
                lastName: 'Sanchez'
            });
        });
    });
});




