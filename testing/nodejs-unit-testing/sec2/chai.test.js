// chai - a more powerful assertion library (available assertion styles: should, expect, and assert styles)

const chai = require('chai');
// we will be using expect style of assertion
const expect = chai.expect;

describe('chai test', () => {
    it('should compare some values', () => {
        expect(1).to.equal(1);
    });
    it('should test some other stuff', () => {
        expect({name: 'foo'}).to.deep.equal({name: 'foo'});
        expect({name: 'foo'}).to.have.property('name').to.equal('foo');
        expect(5 > 8).to.be.false;
        expect({}).to.be.a('object');
        expect('foo').to.be.a('string');
        expect(3).to.be.a('number');
        expect('bar').to.be.a('string').with.lengthOf(3);
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })
})