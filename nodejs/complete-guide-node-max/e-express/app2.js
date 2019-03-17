// 059 Adding middleware

const http = require('http');

const express = require('express');

// create an express application
// initializes a new express object
const app = express(); 
// app is also a valid request handler  

// middleware - after we create app object but before we pass it to http.createServer

// call a method on the app object - allows us to add/use a new middleware function
// app.use - allows us to add/use a new middleware function 
// - accepts an array of request handlers
// - function/request handler/middleware function will be passed to app.use (hooked into the middleware funnel) and executed for every incoming request
app.use( (req, res, next) => {
    console.log(`In the first middleware.`)
    next(); // next - a function that has to be executed to allow the request to travel on to the next middleware
});

app.use( (req, res, next) => {
    console.log(`In the second middleware.`)
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log(`server is listening`);
});