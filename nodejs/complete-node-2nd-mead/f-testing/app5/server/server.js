// 056 Testing express applications - part II

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404)
        .send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users - returns an array of user objects
// give users a name prop and age prop
app.get('/users', (req, res) => {
    let users = [
        {name: 'kate', age: 25}, 
        {name: 'henry', age: 25},
        {name: 'enrique', age: 30}
    ];
    res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;