// 060 How middleware works

const http = require('http');

const express = require('express');

// initializes a new express object
const app = express(); 

// middleware - after we create app object but before we pass it to http.createServer

app.use( (req, res, next) => {
    console.log(`In the first middleware.`)
    next(); 
});

app.use( (req, res, next) => {
    console.log(`In the second middleware.`)
    // you can set Content-Type and status codes manually and override express using res.setHeader()
    // res.setHeader();
    // allows us to send a response and attach a body which is of any type
    // content type is automatically set to text/html by express when inside the middleware
    res.send('<h1>Hello from express!</h1>');
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log(`server is listening`);
});