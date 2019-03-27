// 058 Test spies

const request = require('supertest');
const expect = require('expect');


const app = require('./server.js').app;

// Server
    // Get /
        // some test case
    // Get /users
        // some test case

describe('Server', () => {

    describe('Get /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/',)
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('Get /users', () => {
        it('should return a user array containing your user name and age', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) =>{
                    expect(res.body).toInclude({
                        name: 'enrique', age: 30
                    });
                })
                .end(done);
        });
    });
    
});






