// sample nested.test.js file to show how to write scripts to use in package.json to only runt and test .test.js files inside folders

// pending test 
const chai = require('chai');
const expect = chai.expect;

describe('nested test', () => {
    it('this is from the nested file');
});