// 043 Rendering templates with data - using handlebarsjs.com template view engine

// import handlebarsjs 
const hbs = require('hbs');
// create a directory called views - default directory that express uses for your templates

const express = require('express');
// make a new express app 
const app = express();

//lets us set various express-related configurations and a lot of built-in ones
// pass in a key: setting and the value of setting
app.set('view engine', 'hbs');

// middleware - lets you configure how your express app works
// - allows us to serve our html page w/o having to manually configure it

// middleware function - function from express object will be passed into app.use
// express.static - express object method; takes the absolute path (path from the root) to the folder you want to serve up
// node always uses the absolute path and not the relative path
app.use(express.static(__dirname + '/app3-public'));

// setting up http route handlers for each http request method

// 1st route: Root route
app.get('/', (req, res) => {
    // res.send({
    //     name: "Enrique",
    //     likes: [
    //         'biking', 
    //         'paddling'
    //     ],
    // });
    res.render(__dirname + '/app3-views/home.hbs', {
        pageTitle: 'Home Page',
        currentYear: Math.floor( 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365) ),
        welcomeMessage: 'Welcome to my website!'
    });

});

// 2nd route: About route
app.get('/about', (req, res) => {
    // no longer needed
    // res.send('About Page');

    // res.render - lets you render any of your templates set up with your view engine
    // inject data into your template using the 2nd parameter
    res.render(__dirname + '/app3-views/about.hbs', {
        // data injected into the template (about.hbs)
        pageTitle: 'About Page', 
        currentYear: Math.floor( 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365) )
    });
    // by default, node searches views folder to render hbs files (template views) 
    // so no need to specify absolute path if folder was named 'views'
    // res.render('about.hbs');
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