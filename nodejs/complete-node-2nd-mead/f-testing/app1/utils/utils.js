// 051 Mocha and basic testing
// contains the utility functions that doesn't belong in any other specific location

module.exports.add = (a,b) => a + b;

// save mocha as a devDependency
// yarn add --dev mocha 

module.exports.square = (x) => x * x;

// this is where you try to mess up code to see if tests perform correctly