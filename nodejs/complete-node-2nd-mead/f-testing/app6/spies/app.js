// 058 Test spies

const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    db.saveUser({
        email,
        password
    });
    // ES6 syntax: instead of having to use { email: email, password: password }

    // Send the welcome email
}