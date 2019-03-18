// route that handles the creation of products which the admin of the shop can do

const express = require('express');

// like a mini express app that is pluggable to the outer express app which we can export
const router = express.Router();

// get request because user is requesting for the form when he goes to the '/add-produce' path
router.get('/add-product', (req, res, next) => {
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

// '/product' is not part of the url but it is a route specifying a desired action so going to URL/product won't produce any type of request
router.post('/product', (req, res, next) => {
    // extract the requested post from /add-prouct route
    console.log("this is the body: ", req.body); 
    console.log("redirect middleware")
    // convenient to redirect to a route
    res.redirect('/');
});

module.exports = router;