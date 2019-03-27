const request = require('supertest');
const expect = require('expect');


const app = require('./server.js').app;

// verifies that when we make an http get request to the '/' URL, we get hello back
it('should return hello world response', (done) => {
    // first, pass app to request
    request(app)
        .get('/',)
        .expect(404)
        // .expect({
        //     error: 'Page not found.'
        // })
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});

// make a new test
// assert status code of 200
// assert that you exist in users array

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

