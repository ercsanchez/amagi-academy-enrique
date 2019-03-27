// 053 Using an assertion library

module.exports.add = (a,b) => a + b;
module.exports.square = (x) => x * x;

// 053 Using an assertion library
module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

