// 025 More on require
// modular JS and modular design pattern - how to work with modules and how to separate functionality using modules 

// requiring folders - if no greet.js file, Node.js will look for a folder named greet and run the index.js inside of it

const greet = require('./app8-greet');

greet.english();
greet.spanish();
greet.printName(1);
greet.printName(2);

