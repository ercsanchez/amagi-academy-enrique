// 018 Let's build a module

// this is the greet file/module

// module encapsulates code and code in the module doesn't affect rest of code in main .js file (app2.js)

var greet = () => console.log('hello');
//greet(); 
// this means greet function can't be called in app2.js unless it is exported

// export a function - make functions in this module available for use by other .js files (outside of the module)
module.exports = greet;

