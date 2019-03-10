/* 

// 023 How do Node Modules really work

// What happens when require is used to import a module?

// using app2 as an example:

// wrapper will create a module object
(function wrapper(exports, require, module, __filename, __dirname) {

    const greet = function() {
        console.log('Hello!');
    };

    // will change the module object's exports property
    module.exports = greet;
    
    // will make the exports available to your main/index.js file even though the functions inside the module are protected because of prototypal inheritance
    return module.exports

});

wrapper(module.exports, require, module, filename, dirname); => returns module.exports

Note: Remember that functions and variables inside of a function are protected because of function scope. 
Because our code is wrapped in a function, they are protected and cannot be accessed. However, the wrapper 
function creates a module object. So we could make those functions/variables available by modifying the property 
(i.e. exports) of the module object. This is possible because of prototypal inheritance. 

*/