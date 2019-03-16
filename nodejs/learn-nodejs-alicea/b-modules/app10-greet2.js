// 027 Exports vs. module.exports

// using exports (shorthand) instead of module.exports

exports.greet = function() {
    console.log('I am mutating the exports object');
}

console.log(exports);  // added a method to exports 
console.log(module.exports);  // object will now hold the greet method

// this works because we are only mutating exports and not reassigning it
// wrapper function will return module.exports which contains the greet method