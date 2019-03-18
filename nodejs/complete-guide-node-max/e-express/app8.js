// 065 Using express router

const express = require('express');
const app = express();

const adminRoutes = require('./app8-routes/admin.js');
const shopRoutes = require('./app8-routes/shop.js');
// adminRoutes and shopRoutes are valid middleware functions

const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded( { extended: false } ) ); 

// we pass the routes to app.use as an object/function and we don't execute them; routes will execute only when a path is matched
// order matters; root path should be the last route
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(5000, () => {
    console.log(`server is listening`);
});