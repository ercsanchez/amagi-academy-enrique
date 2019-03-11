// 026 Module patterns

// Pattern 1. module.exports object is overwritten with a single function
const greet = require('./app9-greet.js');
greet();

// Pattern 2. add a new property (specifically a method) to module.exports object
// require it by:

// assigning the entire module.exports object and calling a specific property/method on it:
// const greet2 = require('./app9-greet2.js');
// greet2.greet();


// more common way: explicitly assigning the function you need from the returned module.exports object
// this is similar to Thomas' way of using destructured assignment and import to only use the needed functions (from the returned module.exports object) in the main .js file
const greet2 = require('./app9-greet2.js').greet;
greet2();

// Pattern 3. replace module.exports with your own object
const greet3 = require('./app9-greet3.js');
// note: you must assign the whole object, otherwise, greet function won't work because it also uses the greeting property of that object i.e. you can't do 
// const greet3 = require('./app9-greet3.js').greet;
greet3.greet();

// what happens when we change the property of the greet3 module and require that module again and assign it to a new variable?
greet3.greeting = "Changed greeting of module pattern 3";

// requiring the module again will still reference the same app9-greet3.js file/module, which has a modified greeting property
// greet3b will point to the same object referenced by greet3 since require stores the module.exports object in a cache
const greet3b = require('./app9-greet3.js');
greet3b.greet();

// Pattern 4: assigning a constructor function to module.exports so that you can create several objects with different key/value pairs in the main .js file 
// instead of getting an object from the module, you get the constructor function w/c gives you ability to create separate and distinct objects
const Greet4 = require('./app9-greet4.js');
new Greet4(1).greet();
new Greet4(2).greet();
new Greet4(3).greet();

// NOTE: you can use either patterns 1 (overwrite) and 2 (adding a prop) to patterns 3 and 4

// Pattern 5: revealing module pattern
// expose only needed functions and keep all others (logic and other variables self-contained inside the module)
// advantage of being more secure; only allow users to have access to certain parts of your code
// even though only the greet function was exposed, JS will still have access to the greeting variable, so greet function will still run

const greet5 = require('./app9-greet5.js').greet;
greet5();

