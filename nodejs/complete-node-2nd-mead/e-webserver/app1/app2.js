// 042 Creating a web server

// create a folder that contains static assets (html, css, images)
// everything in this folder will be accessible to the client

const express = require('express');

// make a new express app 
const app = express();


// middleware - lets you configure how your express app works
// - kind of like a 3rd party add-on in the sense that it structures our app
// - allows us to serve our html page w/o having to manually configure it

// middleware function - function from express object will be passed into app.use
// express.static - express object method; takes the absolute path (path from the root) to the folder you want to serve up
app.use(express.static(__dirname + '/app2-public'));
// to view assets indicate its fileName after Root route: localhost:port/help.html

// setting up http route handlers for each http request method

// 1st route: Root route
app.get('/', (req, res) => {
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

// 4th route: Help route 
// app.get('/help', (req, res) => {

// });

// bind our application to a port on our machine
// function passed to app.listen executes, once the server is up
app.listen(3000, () => {
    console.log(`server listening`);
});