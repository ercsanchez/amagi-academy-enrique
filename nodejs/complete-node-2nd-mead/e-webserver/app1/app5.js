// 045 Express middleware

const express = require('express');
// make a new express app 
const app = express();

// import handlebarsjs 
const hbs = require('hbs');

const fs = require('fs');

// let handlebars know that we want to add support for partials
// takes in directory you want to use for all of your handlebar partials files
hbs.registerPartials(__dirname + '/app5-views/partials');

// middleware function - function passed into app.use
// app.use - used to register middleware
// express.static - express object method; takes the absolute path (path from the root) to the folder you want to serve up
// node always uses the absolute path and not the relative path
app.use(express.static(__dirname + '/app5-public'));

// middleware examples: serves up a directory, logs some request data to the screen, 
// helps with app performance keeping track of response times, db request to authenticate user

// logger - logs all requests that come in to the server and gives a timestamp
app.use((req, res, next) => {
    // pull http method and path 
    const log = `${now}: ${req.method} ${req.url}`;
    const now = new Date().toString();
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});

// add handlebars helpers 

hbs.registerHelper('getCurrentYear', () => {
    return Math.floor( 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365) );
});

hbs.registerHelper('capitalize', (text) => {
    return text.toUpperCase();
})


// lets us set various express-related configurations and a lot of built-in ones
// sets our template view engine as handlebarsjs
app.set('view engine', 'hbs');

// middleware - lets you configure how your express app works
// - allows us to serve our html page w/o having to manually configure it



// setting up http route handlers for each http request method

// 1st route: Root route
app.get('/', (req, res) => {
    res.render(__dirname + '/app5-views/home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website!',
        // currentYear: Math.floor( 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365) ),
        // no longer needed as we injected a handlebar helper inside the template files (.hbs files)
    });
});

// 2nd route: About route
app.get('/about', (req, res) => {
    // res.render - lets you render any of your templates set up with your view engine
    res.render(__dirname + '/app5-views/about.hbs', {
        // data injected into the template (about.hbs)
        pageTitle: 'About Page', 
        // currentYear: Math.floor( 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365) )
        // no longer needed as we injected a handlebar helper inside the template files (.hbs files)
    });
    // by default, node searches views folder to render hbs files (template views) 
    // so no need to specify absolute path if folder was named 'views'
});

// 3rd route: Bad route - send back json with error message
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: `Unable to handle request`,
    })
});

// bind our application to a port on our machine
// function passed to app.listen executes, once the server is up
app.listen(3000, () => {
    console.log(`server listening`);
});

// partial - a partial piece of your website