// 041 Hello express

const express = require('express');

// make a new express app - by assigning what is returned by calling express as a function
const app = express();

// setting up http route handlers for each http request method
// if someone visits root of website (or any other route/path/URL) we want to send something back

// 1st route: Root route
// register a route handler for http get request for root route/path - app.get
app.get('/', (req, res) => {
    // req - stores info (headers, body info, method made about request to the path) about request coming in
    // res - has methods so you can respond to the request (customize data, http status codes)
    
    // 1. respond by sending data in the response body
    // res.send('<h1>Hello Express</h1>');
    // no need to specify MIME type as express will automatically determine this for you
    // gets rendered using the browser's default style

    // 2. sending JS Objects as a response 
    // - express automatically converts the JS object, 
    // passed into res.send, into JSON and sends it as the response
    // - equivalent to setting MIME type to application/JSON
    res.send({
        name: "Enrique",
        likes: [
            'biking', 
            'paddling'
        ],
    });
});

// 2nd route: About route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// 3rd route: Bad route - send back json with error message
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: `Unable to handle request`,
    })
});

// bind our application to a port on our machine
// will listen to requests until you tell it to stop (CTRL+C in terminal)
app.listen(3000, () => {
    console.log(`server listening`);
});