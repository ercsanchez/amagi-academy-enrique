// 063 Parsing Incoming Requests

const express = require('express');
// import a package to parse the request body
const bodyParser = require('body-parser');

// initializes a new express object
const app = express(); 

// middleware - after we create app object but before we create a server

// middleware for req body parser
// placed here so that it parses the request body no matter the route
app.use(bodyParser.urlencoded( { extended: false } ) );  // can parse forms and other but can't parse files, json
// registers a function as middleware and passes a parsed req object to succeeding middleware using next()

// app.use has 5 overloads, meaning 5 different uses
app.use('/', (req, res, next) => {
    console.log(`This middleware always runs!`)
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log(`In the /add-product second middleware.`)
    // "/product" - where you send the form when you submit
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
                <button type="submit">Add Product</button>
            </input>
        </form>
    `);
    // no next because you don't want more than one response to be sent
});

// this will always execute for a post request and a get request 
// you can omit next if you are not using it
app.use('/product', (req, res, next) => {
    // extract the requested post from /add-prouct route
    console.log("this is the body: ", req.body); 
    console.log("redirect middleware")
    // convenient to redirect to a route
    res.redirect('/');
});
// a post or get request from this middleware will result in a new request to be directed to '/' 
// and will start at the top of the middleware, and that request will be passed to the homepage middleware

app.use('/', (req, res, next) => {
    console.log(`In the homepage middleware.`)
    res.send('<h1>Hello from express!</h1>');
});

// shortcut to create a server and listen to a port
app.listen(5000, () => {
    console.log(`server is listening`);
});