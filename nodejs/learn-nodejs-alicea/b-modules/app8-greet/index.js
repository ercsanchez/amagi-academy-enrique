const english = require('./english.js');
const spanish = require('./spanish'); // no need to specify .js since require function will figure it out
const printName = require('./names.js');

module.exports = {
    english: english,
    spanish: spanish,
    printName: printName
};
