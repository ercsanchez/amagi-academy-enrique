// 050 Files and fs

const fs = require('fs');

// check location of current directory
console.log(__dirname);

// fs.readFileSync() - synchronous method on the fs object
// 1st param: location and name of file; 2nd param: char encoding (utf-8 by default so no need to specify)
const greet = fs.readFileSync(__dirname + '/app4-greet.txt', 'utf-8'); // utf8 or utf-8 
console.log(greet);

// fs.readFile - asynchronous method
// callback - when event is complete i.e. finished reading the file, run the callback
const greet2 = fs.readFile(__dirname + '/app4-greet.txt', 'utf8', function(err, data) {
    // console.log(data.toString());
    console.log(data);
});

// value returned by callback is passed to V8 for processing after V8 is complete doing its work and after the file was read by the C++ core
// note that 'done' was outputted first before greet2 result
console.log('Done');
// this demonstrates V8 completely processing all of its synchronous code before it processes the async code processed by C++ core