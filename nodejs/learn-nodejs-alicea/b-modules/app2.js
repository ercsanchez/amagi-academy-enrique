// 018 Let's build a module

// this is the main js file/module

// run the greet module in the main js file
// require('./app2-greet.js');  // require('./app2-greet'); is also valid

// './' means same folder level as app2.js and 
// greet function can't be called here

// run the imported function from the greet file 
const greeting = require('./app2-greet.js');  // greeting variable will hold module.exports value of app2b.js
greeting();


console.log(greeting);