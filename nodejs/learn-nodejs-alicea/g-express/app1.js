// 073 Installing express and making it easier to build a web server

// a function that returns a regular function (app)
const express = require('express');

// a function that has the req and res properties on it
const app = express();
// this is a working express app

// setting default values of ENVIRONMENT VARIABLES
// if process.env.PORT exists it will be assigned, if not, 3000 will be set as the value
const port =  process.env.PORT || 3000;
// process is a global object provided by Node


// mapping routes and http verbs to functions (listener functions)

// homepage endpoint - send html
// '/' - root URL or homepage where server is listening
app.get('/', function (req, res) {
    // no need for content type: MIME
    res.send('<html><body><h1>Hello World!</h1></body></html>');
});

// route api endpoint - send JS object and output it as JSON on the client
app.get('/api', (req, res) => {
    res.json( {firstName: 'Enrique', lastName: 'Sanchez'} )
});

// you can have the same endpoint/URL and a different http verb
// app.post('/', function (req, res) {
    
// });

app.listen(port, () => console.log(`server listening`) );