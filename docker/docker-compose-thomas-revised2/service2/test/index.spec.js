// const app = require('../index.js');
// const expect = require('chai').expect;
// const request = require('supertest');


import { expect } from 'chai';
import request from 'supertest';

import app from '../index.js';

describe('SERVER', () => {
    it('', (done) => {
        request(app)
            .get('/v1/register')
            .expect(200)
            // .expect
        done();
    });
});


// describe('Status and Content', () => {
//     describe('Main page response', () => {
//         it('Status should be 200', (done) => {
//             request('http://localhost:5000', (error, response, body) => {
//                 expect(response.statusCode).to.equal(200);
//                 done();
//             });
//         });
//     });
// });