// 027 Exports vs. module.exports
// using exports (shorthand) instead of module.exports

// will produce an error because require returns module.exports which still points to an empty object, even though the exports param now points to a function (reference was broken)
const greet = require('./app10-greet.js');
// greet();

// this works because we are only mutating exports and not reassigning it
// wrapper function will now return module.exports which contains the greet method
const greet2 = require('./app10-greet2.js');
greet2.greet();
