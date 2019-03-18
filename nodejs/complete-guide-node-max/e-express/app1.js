// 058 installing express

const http = require('http');

const express = require('express');

// create an express application
const app = express(); // initialize a new express object
// app is also a valid request handler

const server = http.createServer(app);

server.listen(5000, () => {
    console.log(`server is listening`);
});