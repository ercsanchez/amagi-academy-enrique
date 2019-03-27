// 054 Testing asynchronous code

module.exports.add = (a,b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout( () => {
        callback(a + b);
    }, 1000); 
};
// by default, mocha returns a fail for tests that take longer than 1 second so use 1000 for setTimeout

// trying to code the async function another way: this doesn't work
// module.exports.asyncAdd2 = (a, b, callback) => {
//     setTimeout(callback(a, b), 1000);
// };

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout( () => {
        callback(x * x);
    }, 1000);
};

// 053 Using an assertion library
module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

