// 061 Express.js - Looking Behind the Scenes

// no longer needed
const http = require('http');

const express = require('express');

// initializes a new express object
const app = express(); 

// middleware - after we create app object but before we create a server
app.use( (req, res, next) => {
    console.log(`In the first middleware.`)
    next(); 
});

app.use( (req, res, next) => {
    console.log(`In the second middleware.`)
    res.send('<h1>Hello from express!</h1>');
});

// create a server and listen to a port
// const server = http.createServer(app);
// server.listen(5000, () => {
//     console.log(`server is listening`);
// });

// shortcut to above code: create a server and listen to a port
app.listen(5000, () => {
    console.log(`server is listening`);
});