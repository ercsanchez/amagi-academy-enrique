/* 

// 023 How do Node Modules really work

// What happens when require is used to import a module?

// using app2 as an example:

// entire .js file is wrapped in a function
// Node.js will create a module object that's passed as a parameter (along with other passed arguments) to the wrapper func expression

// this is the wrapper func
(function (exports, require, module, __filename, __dirname) {

    const greet = function() {
        console.log('Hello!');
    };

    // to make the functions available to the main .js file

    // side-effect: will change the module object's exports property 
    module.exports = greet;

    // - or - 
    
    // return statement: will make the exports available to your main/index.js file even though the functions inside the module are protected because of prototypal inheritance
    return module.exports

});

// calling the require function will invoke the wrapper func, passing the ff. arguments to it, and return module.exports
func(module.exports, require, module, filename, dirname); => returns module.exports

Note: Remember that functions and variables inside of a function are protected because of function scope. 
Because our code is wrapped in a function, they are protected and cannot be accessed. However, the wrapper 
function creates a module object. So we could make those functions/variables available by modifying the property 
(i.e. exports) of the module object. This is possible because of prototypal inheritance. 

*/