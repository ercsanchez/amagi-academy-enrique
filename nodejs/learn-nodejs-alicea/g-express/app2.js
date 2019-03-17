// 074 Routes

// a function that returns a regular function (app)
const express = require('express');

// a function that has the req and res properties on it
const app = express();

// setting default values of ENVIRONMENT VARIABLES
const port =  process.env.PORT || 3000;

// mapping routes and http verbs to functions (listener functions)

// homepage endpoint - send html
// '/' - root URL or homepage where server is listening
app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World!</h1></body></html>');
});

// matching patterns

// pattern: /:id tells express that id is a variable 
app.get('/person/:id', function (req, res) {
    // params is a property (object) of the req object; id is a property of params object
    res.send('<html><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

// route api endpoint - send JS object and output it as JSON on the client
app.get('/api', (req, res) => {
    res.json( {firstName: 'Enrique', lastName: 'Sanchez'} );
});

app.listen(port, () => console.log(`server listening`) );