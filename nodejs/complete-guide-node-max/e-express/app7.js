// 064 Limiting middleware execution to Post requests

const express = require('express');
// import a package to parse the request body
const bodyParser = require('body-parser');

// initializes a new express object
const app = express(); 

// middleware - after we create app object but before we create a server

// middleware for req body parser
app.use(bodyParser.urlencoded( { extended: false } ) ); 

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

// this will only execute for a post request 
// app.post is same as app.use but will only fire for a get request
// '/product' is not part of the url but it is a route specifying a desired action so going to URL/product won't produce any type of request
app.post('/product', (req, res, next) => {
    // extract the requested post from /add-prouct route
    console.log("this is the body: ", req.body); 
    console.log("redirect middleware")
    // convenient to redirect to a route
    res.redirect('/');
});

// app.use will work for any path that begins with the path specified (e.g. '/' or '/asdasdasdas')
// paths that do not exist will be routed to the homepage
app.use('/', (req, res, next) => {
    console.log(`In the homepage middleware.`)
    res.send('<h1>Hello from express!</h1>');
});

// shortcut to create a server and listen to a port
app.listen(5000, () => {
    console.log(`server is listening`);
});