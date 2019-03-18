// 062 Handling Different Routes

const express = require('express');

// initializes a new express object
const app = express(); 

// middleware - after we create app object but before we create a server
// app.use has 5 overloads, meaning 5 different uses
app.use('/', (req, res, next) => {
    console.log(`This middleware always runs!`)
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log(`In the second middleware.`)
    res.send('<h1>Add Product Page!</h1>');
    // no next because you don't want more than one response to be sent
});

app.use('/', (req, res, next) => {
    console.log(`In the second middleware.`)
    res.send('<h1>Hello from express!</h1>');
});

// shortcut to create a server and listen to a port
app.listen(5000, () => {
    console.log(`server is listening`);
});