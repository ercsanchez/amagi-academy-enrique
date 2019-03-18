// what the users see

const express = require('express');
const router = express.Router();


// router.use or app.use will work for any path that begins with the path specified (e.g. '/' or '/asdasdasdas') 
// while router.get and app.get will only match the exact path specified ('/')
// paths that do not exist will produce an error
router.get('/', (req, res, next) => {
    console.log(`In the homepage middleware.`)
    res.send('<h1>Hello from express!</h1>');
});

module.exports = router;