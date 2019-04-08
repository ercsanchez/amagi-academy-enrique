import app from '../index';
// const expect = require('chai').expect;
import { expect } from 'chai';
import request from 'supertest';


describe('/v1/register route: ', () => {
    
    // purpose of tests - whatever the input, it provides the correct output

    // test if signup is successful - you need to specify the input data
    describe('/register', () => {
        it('should confirm signup and send status 200', async() => {
            
            try {
                const res = await request(app)
                    .post('/v1/register')
                    .send( { first_name: "enrique", address: "Makati", password: "123456", email: "sanchez.erc@gmail.com" } );

                expect(res.status).to.equal(200);
                console.log(JSON.stringify(res));
                console.log(res.status);
                console.log(JSON.stringify(res.text));
                console.log(res.text.result);
                expect(res.body.errors).to.be.undefined;
                console.log(res.body.errors);
                
            } catch(err) {
                console.error(new Error(err));
            }
        });
    });

    // // test if partial details password and email but no name and/or address
    //     // returns 206 - user registered but with missing details
    //     // always returns json object or message
    // describe('/v1/register', () => {
    //     it('should confirm signup and send status: 206', (done) => {
    //         request(app)
    //             .post('/v1/register')
    //             .send({name: "john", password: "1234", email: "john@gmail.com"})
    //             .expect(206)
    //             .expect('User is registered but with incomplete information')
    //             .end(done);
    //     });
    // });

    // // test if missing any of the following: password or email 
    //     // returns 400 for bad request
    
    // // test if input is not in json format
    //     // returns 400 for bad request

    // // tests should not affect the database so use sinon.js (spies or stubs)?? - no need to do this; spin up a test db using containers

    // // use this as the format for all tests
    // describe('/v1/user/:email', () => {
    //     it('should send results of get request', async () => {
    //         const res = await request(app)
    //             .get('/v1/user/sanchez.erc@gmail.com');

    //         expect(res.statusCode).to.equal(200);
    //         expect(res.body.errors).to.be.undefined;
    //         expect(res.body).to.deep.equal({name: 'enrique', address: 'Makati'});
    //         // you have to modify this. 
    //     });
    // });
});


// describe('Status and Content', () => {
//     describe('Main page response', () => {

//         it('Status should be 200', (done) => {
//             request('http://localhost:5000', (error, response, body) => {
//                 expect(response.statusCode).to.equal(200);
//                 expect(response)
//                 done();
//             });
//         });

//         // it('should say user is registered', (done) => {
//         //     request('http://localhost:5000', (error, response, body) => {
//         //         expect(response.body).to.equal('User is registered');
//         //         done();
//         //     });
//         // });  

//     });
// });