
const names = require('./names.json');
// require function returns the object created from the names.json file
// no need for module.exports inside of names.json file

const printName = function(number) {
    console.log(names[number]);
}

module.exports = printName;